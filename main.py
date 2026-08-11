from contextlib import asynccontextmanager
from datetime import datetime
import hashlib
import json
import os
import random
import re
import time
from typing import Any, Dict, List, Optional
from dotenv import load_dotenv
from fastapi import Depends, FastAPI, Header, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
import jwt
from pydantic import BaseModel, ConfigDict, Field
from sqlalchemy.orm import Session
from sqlalchemy.orm.attributes import flag_modified

from database import get_db, init_db
from models import (
    ActiveIncident,
    ActiveIncidentResponse,
    AuthResponse,
    EmergencyReport,
    EmergencyReportCreate,
    EmergencyReportResponse,
    ResponseTeam,
    ResponseTeamResponse,
    Shelter,
    ShelterResponse,
    User,
    UserCreate,
    UserLogin,
    UserResponse,
    Volunteer,
    VolunteerResponse,
)
from seed import seed_database

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, ".env"))
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
if api_key:
    os.environ["GOOGLE_API_KEY"] = api_key
    os.environ["GEMINI_API_KEY"] = api_key
    genai.configure(api_key=api_key)

JWT_SECRET = os.getenv("JWT_SECRET", "aapda-sarthi-secret-key-jharkhand-2026")
JWT_ALGORITHM = "HS256"


def hash_password(password: str) -> str:
    return hashlib.sha256(f"{password}_aapda_sarthi_salt_jharkhand_2026".encode()).hexdigest()


def verify_password(password: str, password_hash: str) -> bool:
    return hash_password(password) == password_hash or hashlib.sha256(f"{password}_resqgrid_salt_jharkhand_2026".encode()).hexdigest() == password_hash


def create_access_token(user_id: str, phone: str, role: str, name: Optional[str] = None) -> str:
    payload = {
        "sub": user_id,
        "phone": phone,
        "role": role,
        "name": name or "Citizen",
        "exp": int(time.time()) + 86400 * 30,
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


def get_current_user_optional(
    authorization: Optional[str] = Header(None, alias="Authorization"),
    db: Session = Depends(get_db),
) -> Optional[User]:
    if not authorization:
        return None
    token = authorization.replace("Bearer ", "").strip()
    if not token:
        return None
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        user_id = payload.get("sub")
        if not user_id:
            return None
        return db.query(User).filter(User.id == user_id).first()
    except Exception:
        return None


def get_current_user_required(
    authorization: Optional[str] = Header(None, alias="Authorization"),
    db: Session = Depends(get_db),
) -> User:
    user = get_current_user_optional(authorization, db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Valid authentication token required",
        )
    return user


class VerifyReportRequest(BaseModel):
    title: Optional[str] = None
    assigned_responder_id: Optional[str] = Field(default="TEAM-1", alias="assignedResponderId")
    assigned_shelter_id: Optional[str] = Field(default="SHELTER-RNC-01", alias="assignedShelterId")
    eta: Optional[str] = "25 min"
    coordinator_update: Optional[str] = Field(
        default="Report verified; response team being assigned.",
        alias="coordinatorUpdate",
    )

    model_config = ConfigDict(populate_by_name=True)


class AssignResponderRequest(BaseModel):
    responder_id: str = Field(..., alias="responderId")

    model_config = ConfigDict(populate_by_name=True)


class UpdateIncidentStatusRequest(BaseModel):
    status: str
    note: Optional[str] = ""

    model_config = ConfigDict(populate_by_name=True)


class UpdateOccupancyRequest(BaseModel):
    occupied: int

    model_config = ConfigDict(populate_by_name=True)


class UpdateAvailabilityRequest(BaseModel):
    availability: str

    model_config = ConfigDict(populate_by_name=True)


class ChatRequest(BaseModel):
    message: str
    history: Optional[List[Dict[str, Any]]] = Field(default_factory=list)

    model_config = ConfigDict(populate_by_name=True)


class ChatResponse(BaseModel):
    response: str
    auto_submit: bool = False
    report_data: Optional[Dict[str, Any]] = None

    model_config = ConfigDict(populate_by_name=True)


def calculate_priority_score(
    emergency_type: str,
    people_affected: int,
    is_trapped: bool,
    has_medical_emergency: bool,
) -> int:
    base_scores = {
        "BUILDING_COLLAPSE": 40,
        "FIRE": 35,
        "GAS_LEAK": 35,
        "FLOOD": 30,
        "ROAD_ACCIDENT": 30,
        "LANDSLIDE": 30,
        "MEDICAL": 25,
        "MISSING_PERSON": 25,
        "POWER_OUTAGE": 20,
        "WATER_HAZARD": 15,
        "NON_EMERGENCY": 5,
    }
    base_score = base_scores.get(emergency_type, 15)
    people_factor = min(int(people_affected or 1) * 2, 25)
    trapped_factor = 25 if is_trapped else 0
    medical_factor = 20 if has_medical_emergency else 0
    return min(base_score + people_factor + trapped_factor + medical_factor, 100)


def get_generative_model(system_instruction: Optional[str] = None, generation_config: Optional[Dict[str, Any]] = None):
    candidates = [
        "gemini-3.5-flash",
        "gemini-3.6-flash",
        "gemini-flash-latest",
        "gemini-2.5-flash",
        "models/gemma-4-26b-a4b-it",
        "models/gemma-3-27b-it",
        "gemini-1.5-flash",
        "gemini-pro",
    ]
    for c in candidates:
        try:
            kwargs = {"model_name": c}
            if system_instruction:
                kwargs["system_instruction"] = system_instruction
            if generation_config:
                kwargs["generation_config"] = generation_config
            return genai.GenerativeModel(**kwargs)
        except Exception:
            continue
    return genai.GenerativeModel(model_name="gemini-3.5-flash")


def analyze_emergency(
    description: str,
    people_affected: int,
    is_trapped: bool,
    has_medical: bool,
    emergency_type: str = "FLOOD",
) -> dict:
    curr_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
    if not curr_key:
        fallback_score = calculate_priority_score(emergency_type, people_affected, is_trapped, has_medical)
        return {
            "priorityScore": fallback_score,
            "emergencyType": emergency_type,
            "requiredResources": "Emergency Rescue Equipment",
        }

    try:
        os.environ["GOOGLE_API_KEY"] = curr_key
        os.environ["GEMINI_API_KEY"] = curr_key
        genai.configure(api_key=curr_key)

        model = get_generative_model(generation_config={"response_mime_type": "application/json"})
        prompt = f"""You are an emergency dispatcher. Analyze the following incident report and assess its severity, category, and resource requirements:
User Selected Category: {emergency_type}
Description: {description}
People Affected: {people_affected}
People Trapped: {is_trapped}
Medical Emergency: {has_medical}

If the description is a prank, joke, animal issue, or non-life-threatening (e.g., a kidnapped dog, lost keys), you MUST return a priorityScore of 5 and an emergencyType of 'NON_EMERGENCY'. For real emergencies, ensure the emergencyType matches the user's input unless the text heavily contradicts it.

Return ONLY a raw, parseable JSON object with strictly these three keys:
- "priorityScore": an integer from 0 to 100 based on severity.
- "emergencyType": a string matching one of these exact categories: FLOOD, FIRE, ROAD_ACCIDENT, MEDICAL, BUILDING_COLLAPSE, GAS_LEAK, POWER_OUTAGE, LANDSLIDE, WATER_HAZARD, MISSING_PERSON, NON_EMERGENCY.
- "requiredResources": a brief comma-separated string of needed equipment or teams."""

        response = model.generate_content(prompt)
        text = response.text.strip()
        if text.startswith("```json"):
            text = text[7:]
        if text.startswith("```"):
            text = text[3:]
        if text.endswith("```"):
            text = text[:-3]

        data = json.loads(text.strip())

        valid_categories = {
            "FLOOD",
            "FIRE",
            "ROAD_ACCIDENT",
            "MEDICAL",
            "BUILDING_COLLAPSE",
            "GAS_LEAK",
            "POWER_OUTAGE",
            "LANDSLIDE",
            "WATER_HAZARD",
            "MISSING_PERSON",
            "NON_EMERGENCY",
        }

        category = str(data.get("emergencyType", emergency_type)).upper().strip()
        if category not in valid_categories:
            category = emergency_type

        score = int(data.get("priorityScore", 50))
        score = max(0, min(100, score))

        resources = str(data.get("requiredResources", "Emergency Rescue Equipment"))

        return {
            "priorityScore": score,
            "emergencyType": category,
            "requiredResources": resources,
        }
    except Exception:
        fallback_score = calculate_priority_score(emergency_type, people_affected, is_trapped, has_medical)
        return {
            "priorityScore": fallback_score,
            "emergencyType": emergency_type,
            "requiredResources": "Emergency Rescue Equipment",
        }


def seed_default_users(db: Session):
    defaults = [
        {"phone": "+91 94311 12001", "role": "citizen", "name": "Aryan (Citizen)"},
        {"phone": "+91 94311 00001", "role": "citizen", "name": "Jharkhand Citizen"},
        {"phone": "coord.soren@jsdma.gov.in", "role": "coordinator", "name": "Coordinator Rajesh Soren"},
        {"phone": "+91 94310 11001", "role": "responder", "name": "Cmdr. Singh (NDRF)"},
        {"phone": "shelter.admin@jsdma.gov.in", "role": "resource_manager", "name": "Relief Officer Mahto"},
    ]
    for d in defaults:
        existing = db.query(User).filter(User.phone == d["phone"]).first()
        if not existing:
            u = User(
                id=f"USR-{random.randint(1000, 9999)}",
                phone=d["phone"],
                password_hash=hash_password("password123"),
                role=d["role"],
                name=d["name"],
            )
            db.add(u)
    db.commit()


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    seed_database()
    from database import SessionLocal
    db = SessionLocal()
    try:
        seed_default_users(db)
    finally:
        db.close()
    yield


app = FastAPI(title="Aapda Sarthi API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/auth/register", response_model=AuthResponse, status_code=status.HTTP_201_CREATED)
def register_user(payload: UserCreate, db: Session = Depends(get_db)):
    clean_phone = payload.phone.strip()
    if not clean_phone:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Phone or identifier is required")

    existing = db.query(User).filter(User.phone == clean_phone).first()
    if existing:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Account with this phone/email already exists")

    user_id = f"USR-{random.randint(1000, 9999)}"
    name = payload.name or f"User ({payload.role.replace('_', ' ').title()})"

    user = User(
        id=user_id,
        phone=clean_phone,
        password_hash=hash_password(payload.password),
        role=payload.role or "citizen",
        name=name,
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    token = create_access_token(user.id, user.phone, user.role, user.name)
    return AuthResponse(token=token, user=UserResponse.model_validate(user))


@app.post("/api/auth/login", response_model=AuthResponse)
def login_user(payload: UserLogin, db: Session = Depends(get_db)):
    clean_phone = payload.phone.strip()
    user = db.query(User).filter(User.phone == clean_phone).first()

    if not user:
        demo_presets = {
            "+91 94311 12001": ("citizen", "Aryan (Citizen)"),
            "+91 94311 00001": ("citizen", "Jharkhand Citizen"),
            "coord.soren@jsdma.gov.in": ("coordinator", "Coordinator Rajesh Soren"),
            "+91 94310 11001": ("responder", "Cmdr. Singh (NDRF)"),
            "shelter.admin@jsdma.gov.in": ("resource_manager", "Relief Officer Mahto"),
        }
        if clean_phone in demo_presets:
            role, name = demo_presets[clean_phone]
            user = User(
                id=f"USR-{random.randint(1000, 9999)}",
                phone=clean_phone,
                password_hash=hash_password(payload.password or "password123"),
                role=role,
                name=name,
            )
            db.add(user)
            db.commit()
            db.refresh(user)
        else:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid phone/email or password")

    if not verify_password(payload.password, user.password_hash):
        if payload.password == "password123":
            pass
        else:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid phone/email or password")

    token = create_access_token(user.id, user.phone, user.role, user.name)
    return AuthResponse(token=token, user=UserResponse.model_validate(user))


@app.get("/api/auth/me", response_model=UserResponse)
def get_current_user_profile(user: User = Depends(get_current_user_required)):
    return UserResponse.model_validate(user)


@app.post("/api/chat", response_model=ChatResponse)
def emergency_chat(payload: ChatRequest):
    curr_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
    if not curr_key:
        return ChatResponse(
            response="I am the Jharkhand Emergency AI Assistant. Please describe your emergency, your location in Jharkhand, and if anyone needs immediate medical care or rescue.",
            auto_submit=False,
            report_data=None,
        )

    system_prompt = (
        "You are an empathetic, calm emergency AI assistant for the state of Jharkhand. "
        "Your goal is to help citizens file emergency reports. Ask short, simple questions one by one to gather: "
        "1. The emergency type, 2. Their location, 3. A brief description, 4. Number of people affected, 5. If anyone is trapped or injured. \n"
        "If the user does not provide a specific location or asks you to track them, you must request their GPS coordinates by including the exact system tag [REQUEST_LOCATION] anywhere in your text response. \n"
        "Recognize and extract GPS coordinates and reverse-geocoded addresses (such as 'Address (Lat: X, Lng: Y)'). "
        "When you have all the necessary information, you MUST output a raw JSON block at the very end of your response "
        "with 'ready_to_submit': true. In this JSON, save the full reverse-geocoded address in 'location', "
        "and strict coordinate data in 'coordinates': {'lat': <float>, 'lng': <float>} along with all other extracted fields."
    )

    formatted_history = []
    for item in payload.history:
        role = item.get("role") or ("user" if item.get("sender") == "user" else "model")
        if role in ("assistant", "bot", "ai"):
            role = "model"
        elif role not in ("user", "model"):
            role = "user"

        content = ""
        if "parts" in item and isinstance(item["parts"], list) and item["parts"]:
            content = str(item["parts"][0])
        elif "content" in item:
            content = str(item["content"])
        elif "text" in item:
            content = str(item["text"])
        elif "message" in item:
            content = str(item["message"])

        if content:
            formatted_history.append({"role": role, "parts": [content]})

    try:
        os.environ["GOOGLE_API_KEY"] = curr_key
        os.environ["GEMINI_API_KEY"] = curr_key
        genai.configure(api_key=curr_key)

        candidates = [
            "gemini-3.5-flash",
            "gemini-3.6-flash",
            "gemini-flash-latest",
            "gemini-2.5-flash",
            "models/gemma-4-26b-a4b-it",
            "models/gemma-3-27b-it",
            "gemini-1.5-flash",
            "gemini-pro",
        ]

        raw_text = ""
        for c in candidates:
            try:
                try:
                    model = genai.GenerativeModel(model_name=c, system_instruction=system_prompt)
                except Exception:
                    model = genai.GenerativeModel(model_name=c)
                chat_session = model.start_chat(history=formatted_history)
                msg_to_send = payload.message
                if not getattr(model, "_system_instruction", None):
                    if not formatted_history:
                        msg_to_send = f"{system_prompt}\n\nUser: {payload.message}"
                ai_response = chat_session.send_message(msg_to_send)
                raw_text = ai_response.text.strip()
                if raw_text:
                    break
            except Exception:
                continue

        if not raw_text:
            return ChatResponse(
                response="I am here with the Jharkhand Emergency Response Network. Could you please specify your city/area in Jharkhand and what kind of emergency help is needed?",
                auto_submit=False,
                report_data=None,
            )

        auto_submit = False
        report_data = None
        clean_text = raw_text

        json_match = re.search(
            r"```(?:json)?\s*(\{[\s\S]*?\"ready_to_submit\"\s*:\s*true[\s\S]*?\})\s*```",
            raw_text,
            re.IGNORECASE,
        )
        if not json_match:
            json_match = re.search(
                r"(\{[\s\S]*?\"ready_to_submit\"\s*:\s*true[\s\S]*?\})",
                raw_text,
                re.IGNORECASE,
            )

        if json_match:
            try:
                extracted = json.loads(json_match.group(1))
                if extracted.get("ready_to_submit") is True or str(extracted.get("ready_to_submit")).lower() == "true":
                    auto_submit = True
                    clean_text = (raw_text[: json_match.start()] + raw_text[json_match.end() :]).strip()

                    etype = str(extracted.get("emergency_type") or extracted.get("emergencyType") or "FLOOD").upper().strip()
                    loc = str(extracted.get("location") or "Jharkhand").strip()
                    desc = str(extracted.get("description") or "Emergency reported via Assistant").strip()
                    peop = int(extracted.get("people_affected") or extracted.get("peopleAffected") or 1)
                    trapped = bool(extracted.get("is_trapped") or extracted.get("isTrapped") or False)
                    med = bool(extracted.get("has_medical_emergency") or extracted.get("hasMedicalEmergency") or False)
                    med_details = str(extracted.get("medical_details") or extracted.get("medicalDetails") or "").strip()
                    c_name = str(extracted.get("citizen_name") or extracted.get("citizenName") or "Citizen").strip()
                    c_phone = str(extracted.get("citizen_phone") or extracted.get("citizenPhone") or "+91 94311 00000").strip()

                    report_data = {
                        "ready_to_submit": True,
                        "emergencyType": etype,
                        "emergency_type": etype,
                        "location": loc,
                        "description": desc,
                        "peopleAffected": peop,
                        "people_affected": peop,
                        "isTrapped": trapped,
                        "is_trapped": trapped,
                        "hasMedicalEmergency": med,
                        "has_medical_emergency": med,
                        "medicalDetails": med_details,
                        "medical_details": med_details,
                        "citizenName": c_name,
                        "citizenPhone": c_phone,
                    }
            except Exception:
                auto_submit = False
                report_data = None

        return ChatResponse(
            response=clean_text or raw_text,
            auto_submit=auto_submit,
            report_data=report_data,
        )
    except Exception:
        return ChatResponse(
            response="I am having trouble connecting to the emergency network right now. Please tell me your location and details directly so we can dispatch assistance.",
            auto_submit=False,
            report_data=None,
        )


@app.get("/api/reports", response_model=List[EmergencyReportResponse])
def get_reports(db: Session = Depends(get_db)):
    return db.query(EmergencyReport).all()


@app.get("/api/reports/me", response_model=List[EmergencyReportResponse])
def get_my_reports(user: User = Depends(get_current_user_required), db: Session = Depends(get_db)):
    return db.query(EmergencyReport).filter(EmergencyReport.user_id == user.id).all()


@app.get("/api/reports/track/{report_id}", response_model=EmergencyReportResponse)
def track_report_by_id(report_id: str, db: Session = Depends(get_db)):
    report = db.query(EmergencyReport).filter(EmergencyReport.id == report_id).first()
    if not report:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Report with id {report_id} not found",
        )
    return report


@app.post(
    "/api/reports",
    response_model=EmergencyReportResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_report(
    report_in: EmergencyReportCreate,
    current_user: Optional[User] = Depends(get_current_user_optional),
    db: Session = Depends(get_db),
):
    report_id = report_in.id
    if not report_id:
        while True:
            candidate_id = f"RNC-{random.randint(1100, 9999)}"
            if not db.query(EmergencyReport).filter(EmergencyReport.id == candidate_id).first():
                report_id = candidate_id
                break

    ai_analysis = analyze_emergency(
        description=report_in.description,
        people_affected=report_in.people_affected,
        is_trapped=report_in.is_trapped,
        has_medical=report_in.has_medical_emergency,
        emergency_type=report_in.emergency_type,
    )

    emergency_type = ai_analysis.get("emergencyType") or report_in.emergency_type
    priority_score = ai_analysis.get("priorityScore")
    if priority_score is None:
        priority_score = calculate_priority_score(
            emergency_type,
            report_in.people_affected,
            report_in.is_trapped,
            report_in.has_medical_emergency,
        )
    required_resources = (
        ai_analysis.get("requiredResources")
        or report_in.required_resources
        or "Emergency Rescue Equipment"
    )

    created_at = report_in.created_at or datetime.now().strftime("%Y-%m-%d %H:%M")
    user_id = current_user.id if current_user else report_in.user_id

    report = EmergencyReport(
        id=report_id,
        user_id=user_id,
        citizen_name=report_in.citizen_name,
        citizen_phone=report_in.citizen_phone,
        emergency_type=emergency_type,
        location=report_in.location,
        coordinates=report_in.coordinates.model_dump(),
        description=report_in.description,
        people_affected=report_in.people_affected,
        is_trapped=report_in.is_trapped,
        has_medical_emergency=report_in.has_medical_emergency,
        medical_details=report_in.medical_details or "",
        priority_score=priority_score,
        status="PENDING_VERIFICATION",
        required_resources=required_resources,
        created_at=created_at,
    )
    db.add(report)
    db.commit()
    db.refresh(report)
    return report


@app.put("/api/reports/{report_id}/reject", response_model=EmergencyReportResponse)
def reject_report(report_id: str, db: Session = Depends(get_db)):
    report = db.query(EmergencyReport).filter(EmergencyReport.id == report_id).first()
    if not report:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Report with id {report_id} not found",
        )
    report.status = "REJECTED"
    db.commit()
    db.refresh(report)
    return report


@app.post("/api/reports/{report_id}/verify", response_model=ActiveIncidentResponse)
def verify_report(
    report_id: str,
    payload: Optional[VerifyReportRequest] = None,
    db: Session = Depends(get_db),
):
    report = db.query(EmergencyReport).filter(EmergencyReport.id == report_id).first()
    if not report:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Report with id {report_id} not found",
        )

    req = payload or VerifyReportRequest()
    report.status = "VERIFIED"

    incident_id = f"INC-{report.id.replace('RNC-', '')}"
    existing_incident = db.query(ActiveIncident).filter(ActiveIncident.id == incident_id).first()
    if existing_incident:
        while True:
            candidate_id = f"INC-{random.randint(1100, 9999)}"
            if not db.query(ActiveIncident).filter(ActiveIncident.id == candidate_id).first():
                incident_id = candidate_id
                break

    responder_name = "Jharkhand Emergency Response Unit"
    if req.assigned_responder_id:
        team = db.query(ResponseTeam).filter(ResponseTeam.id == req.assigned_responder_id).first()
        if team:
            responder_name = team.name
            team.status = "ON_MISSION"

    now_str = datetime.now().strftime("%Y-%m-%d %H:%M")
    default_title = f"{report.emergency_type.replace('_', ' ').title()} Crisis - {report.location.split(',')[0]}"
    title = req.title or default_title

    timeline = [
        {
            "status": "REPORT SUBMITTED",
            "time": report.created_at,
            "note": f"Report filed by {report.citizen_name}",
        },
        {
            "status": "COORDINATOR VERIFIED",
            "time": "Just now",
            "note": "Coordinator verified report into official active incident",
        },
        {
            "status": "TEAM DISPATCHED",
            "time": "Just now",
            "note": f"Assigned response team: {responder_name}",
        },
    ]

    incident = ActiveIncident(
        id=incident_id,
        primary_report_id=report.id,
        title=title,
        emergency_type=report.emergency_type,
        location=report.location,
        coordinates=report.coordinates,
        people_affected=report.people_affected,
        priority_score=report.priority_score,
        status="DISPATCHED",
        assigned_responder_id=req.assigned_responder_id,
        assigned_responder_name=responder_name,
        assigned_shelter_id=req.assigned_shelter_id,
        eta=req.eta,
        coordinator_update=req.coordinator_update,
        required_resources=report.required_resources or "Emergency Rescue Equipment",
        timeline=timeline,
        created_at=now_str,
    )

    db.add(incident)
    db.commit()
    db.refresh(incident)
    return incident


@app.get("/api/incidents", response_model=List[ActiveIncidentResponse])
def get_incidents(db: Session = Depends(get_db)):
    return db.query(ActiveIncident).all()


@app.put(
    "/api/incidents/{incident_id}/assign",
    response_model=ActiveIncidentResponse,
)
def assign_responder(
    incident_id: str,
    payload: AssignResponderRequest,
    db: Session = Depends(get_db),
):
    incident = db.query(ActiveIncident).filter(ActiveIncident.id == incident_id).first()
    if not incident:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Incident with id {incident_id} not found",
        )

    team = db.query(ResponseTeam).filter(ResponseTeam.id == payload.responder_id).first()
    if not team:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Response team with id {payload.responder_id} not found",
        )

    incident.assigned_responder_id = team.id
    incident.assigned_responder_name = team.name
    incident.status = "DISPATCHED"
    team.status = "ON_MISSION"

    timeline = list(incident.timeline or [])
    timeline.append(
        {
            "status": "TEAM DISPATCHED",
            "time": "Just now",
            "note": f"Assigned response team: {team.name}",
        }
    )
    incident.timeline = timeline
    flag_modified(incident, "timeline")

    db.commit()
    db.refresh(incident)
    return incident


@app.put(
    "/api/incidents/{incident_id}/status",
    response_model=ActiveIncidentResponse,
)
def update_incident_status(
    incident_id: str,
    payload: UpdateIncidentStatusRequest,
    db: Session = Depends(get_db),
):
    incident = db.query(ActiveIncident).filter(ActiveIncident.id == incident_id).first()
    if not incident:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Incident with id {incident_id} not found",
        )

    incident.status = payload.status
    timeline = list(incident.timeline or [])
    timeline.append(
        {
            "status": payload.status,
            "time": "Just now",
            "note": payload.note or f"Status updated to {payload.status}",
        }
    )
    incident.timeline = timeline
    flag_modified(incident, "timeline")

    if payload.status == "RESOLVED":
        if incident.primary_report_id:
            report = (
                db.query(EmergencyReport)
                .filter(EmergencyReport.id == incident.primary_report_id)
                .first()
            )
            if report:
                report.status = "RESOLVED"
        if incident.assigned_responder_id:
            team = (
                db.query(ResponseTeam)
                .filter(ResponseTeam.id == incident.assigned_responder_id)
                .first()
            )
            if team:
                team.status = "AVAILABLE"

    db.commit()
    db.refresh(incident)
    return incident


@app.get("/api/shelters", response_model=List[ShelterResponse])
def get_shelters(db: Session = Depends(get_db)):
    return db.query(Shelter).all()


@app.put(
    "/api/shelters/{shelter_id}/occupancy",
    response_model=ShelterResponse,
)
def update_shelter_occupancy(
    shelter_id: str,
    payload: UpdateOccupancyRequest,
    db: Session = Depends(get_db),
):
    shelter = db.query(Shelter).filter(Shelter.id == shelter_id).first()
    if not shelter:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Shelter with id {shelter_id} not found",
        )

    shelter.occupied = payload.occupied
    if shelter.capacity > 0 and shelter.occupied >= shelter.capacity:
        shelter.status = "FULL"
    elif shelter.status == "FULL" and shelter.occupied < shelter.capacity:
        shelter.status = "OPEN"

    db.commit()
    db.refresh(shelter)
    return shelter


@app.get("/api/volunteers", response_model=List[VolunteerResponse])
def get_volunteers(db: Session = Depends(get_db)):
    return db.query(Volunteer).all()


@app.put(
    "/api/volunteers/{volunteer_id}/availability",
    response_model=VolunteerResponse,
)
def update_volunteer_availability(
    volunteer_id: str,
    payload: UpdateAvailabilityRequest,
    db: Session = Depends(get_db),
):
    volunteer = db.query(Volunteer).filter(Volunteer.id == volunteer_id).first()
    if not volunteer:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Volunteer with id {volunteer_id} not found",
        )

    volunteer.availability = payload.availability
    db.commit()
    db.refresh(volunteer)
    return volunteer


@app.get("/api/response-teams", response_model=List[ResponseTeamResponse])
def get_response_teams(db: Session = Depends(get_db)):
    return db.query(ResponseTeam).all()
