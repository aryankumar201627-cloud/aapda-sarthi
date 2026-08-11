import json
import os
import re
from database import Base, SessionLocal, engine
from models import ActiveIncident, EmergencyReport, ResponseTeam, Shelter, Volunteer


def load_mock_data():
    base_path = os.path.dirname(os.path.abspath(__file__))
    mock_data_path = os.path.join(base_path, "mockData.js")

    with open(mock_data_path, "r", encoding="utf-8") as f:
        content = f.read()

    def parse_array(name: str):
        match = re.search(r"export const " + name + r"\s*=\s*(\[[\s\S]*?\]);", content)
        if not match:
            raise ValueError(f"Unable to find dataset {name} in mockData.js")
        return json.loads(match.group(1))

    return {
        "reports": parse_array("INITIAL_MOCK_REPORTS"),
        "incidents": parse_array("INITIAL_MOCK_INCIDENTS"),
        "shelters": parse_array("INITIAL_MOCK_SHELTERS"),
        "volunteers": parse_array("INITIAL_MOCK_VOLUNTEERS"),
        "teams": parse_array("INITIAL_MOCK_RESPONSE_TEAMS"),
    }


def seed_database():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    try:
        if db.query(EmergencyReport).first() is not None:
            return

        data = load_mock_data()

        for s in data["shelters"]:
            shelter = Shelter(
                id=s["id"],
                name=s["name"],
                address=s["address"],
                capacity=s.get("capacity", 0),
                occupied=s.get("occupied", 0),
                status=s.get("status", "OPEN"),
                contact_person=s["contactPerson"],
                phone=s["phone"],
                amenities=s.get("amenities", []),
            )
            db.merge(shelter)

        for t in data["teams"]:
            team = ResponseTeam(
                id=t["id"],
                name=t["name"],
                type=t["type"],
                members=t.get("members", 1),
                vehicle=t["vehicle"],
                status=t.get("status", "AVAILABLE"),
                contact=t["contact"],
            )
            db.merge(team)

        for v in data["volunteers"]:
            volunteer = Volunteer(
                id=v["id"],
                name=v["name"],
                phone=v["phone"],
                skills=v.get("skills", []),
                location=v["location"],
                availability=v.get("availability", "AVAILABLE"),
            )
            db.merge(volunteer)

        for r in data["reports"]:
            report = EmergencyReport(
                id=r["id"],
                citizen_name=r["citizenName"],
                citizen_phone=r["citizenPhone"],
                emergency_type=r["emergencyType"],
                location=r["location"],
                coordinates=r["coordinates"],
                description=r["description"],
                people_affected=r.get("peopleAffected", 1),
                is_trapped=r.get("isTrapped", False),
                has_medical_emergency=r.get("hasMedicalEmergency", False),
                medical_details=r.get("medicalDetails", ""),
                priority_score=r.get("priorityScore", 0),
                status=r.get("status", "PENDING_VERIFICATION"),
                required_resources=r.get("requiredResources", ""),
                created_at=r["createdAt"],
            )
            db.merge(report)

        for i in data["incidents"]:
            incident = ActiveIncident(
                id=i["id"],
                primary_report_id=i.get("primaryReportId"),
                title=i["title"],
                emergency_type=i["emergencyType"],
                location=i["location"],
                coordinates=i["coordinates"],
                people_affected=i.get("peopleAffected", 1),
                priority_score=i.get("priorityScore", 0),
                status=i.get("status", "DISPATCHED"),
                assigned_responder_id=i.get("assignedResponderId"),
                assigned_responder_name=i.get("assignedResponderName"),
                assigned_shelter_id=i.get("assignedShelterId"),
                eta=i.get("eta"),
                coordinator_update=i.get("coordinatorUpdate"),
                required_resources=i.get("requiredResources", ""),
                timeline=i.get("timeline", []),
                created_at=i["createdAt"],
            )
            db.merge(incident)

        db.commit()
    except Exception:
        db.rollback()
        raise
    finally:
        db.close()


if __name__ == "__main__":
    seed_database()
