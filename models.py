from datetime import datetime
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, ConfigDict, Field
from sqlalchemy import Boolean, Column, ForeignKey, Integer, JSON, String, Text
from sqlalchemy.orm import relationship

from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True)
    phone = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    role = Column(String, default="citizen", nullable=False)
    name = Column(String, nullable=True)

    reports = relationship("EmergencyReport", back_populates="user")


class EmergencyReport(Base):
    __tablename__ = "emergency_reports"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=True)
    citizen_name = Column(String, nullable=False)
    citizen_phone = Column(String, nullable=False)
    emergency_type = Column(String, nullable=False, index=True)
    location = Column(String, nullable=False)
    coordinates = Column(JSON, nullable=False)
    description = Column(Text, nullable=False)
    people_affected = Column(Integer, default=1)
    is_trapped = Column(Boolean, default=False)
    has_medical_emergency = Column(Boolean, default=False)
    medical_details = Column(String, default="", nullable=True)
    priority_score = Column(Integer, default=0, index=True)
    status = Column(String, default="PENDING_VERIFICATION", index=True)
    required_resources = Column(String, nullable=True)
    created_at = Column(String, nullable=False)

    user = relationship("User", back_populates="reports")
    incidents = relationship("ActiveIncident", back_populates="primary_report")


class ActiveIncident(Base):
    __tablename__ = "active_incidents"

    id = Column(String, primary_key=True, index=True)
    primary_report_id = Column(String, ForeignKey("emergency_reports.id"), nullable=True)
    title = Column(String, nullable=False)
    emergency_type = Column(String, nullable=False, index=True)
    location = Column(String, nullable=False)
    coordinates = Column(JSON, nullable=False)
    people_affected = Column(Integer, default=1)
    priority_score = Column(Integer, default=0, index=True)
    status = Column(String, default="DISPATCHED", index=True)
    assigned_responder_id = Column(String, ForeignKey("response_teams.id"), nullable=True)
    assigned_responder_name = Column(String, nullable=True)
    assigned_shelter_id = Column(String, ForeignKey("shelters.id"), nullable=True)
    eta = Column(String, nullable=True)
    coordinator_update = Column(String, nullable=True)
    required_resources = Column(String, nullable=True)
    timeline = Column(JSON, default=list)
    created_at = Column(String, nullable=False)

    primary_report = relationship("EmergencyReport", back_populates="incidents")
    assigned_responder = relationship("ResponseTeam", back_populates="incidents")
    assigned_shelter = relationship("Shelter", back_populates="incidents")


class Shelter(Base):
    __tablename__ = "shelters"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    capacity = Column(Integer, default=0)
    occupied = Column(Integer, default=0)
    status = Column(String, default="OPEN", index=True)
    contact_person = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    amenities = Column(JSON, default=list)

    incidents = relationship("ActiveIncident", back_populates="assigned_shelter")


class Volunteer(Base):
    __tablename__ = "volunteers"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    skills = Column(JSON, default=list)
    location = Column(String, nullable=False)
    availability = Column(String, default="AVAILABLE", index=True)


class ResponseTeam(Base):
    __tablename__ = "response_teams"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    type = Column(String, nullable=False, index=True)
    members = Column(Integer, default=1)
    vehicle = Column(String, nullable=False)
    status = Column(String, default="AVAILABLE", index=True)
    contact = Column(String, nullable=False)

    incidents = relationship("ActiveIncident", back_populates="assigned_responder")


class CoordinatesSchema(BaseModel):
    lat: float
    lng: float


class TimelineItemSchema(BaseModel):
    status: str
    time: str
    note: str


class UserBase(BaseModel):
    phone: str
    role: str = "citizen"
    name: Optional[str] = None


class UserCreate(BaseModel):
    phone: str
    password: str
    role: str = "citizen"
    name: Optional[str] = None


class UserLogin(BaseModel):
    phone: str
    password: str


class UserResponse(BaseModel):
    id: str
    phone: str
    role: str
    name: Optional[str] = None

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class AuthResponse(BaseModel):
    token: str
    user: UserResponse


class EmergencyReportBase(BaseModel):
    user_id: Optional[str] = Field(default=None, alias="userId")
    citizen_name: str = Field(..., alias="citizenName")
    citizen_phone: str = Field(..., alias="citizenPhone")
    emergency_type: str = Field(..., alias="emergencyType")
    location: str
    coordinates: CoordinatesSchema
    description: str
    people_affected: int = Field(default=1, alias="peopleAffected")
    is_trapped: bool = Field(default=False, alias="isTrapped")
    has_medical_emergency: bool = Field(default=False, alias="hasMedicalEmergency")
    medical_details: Optional[str] = Field(default="", alias="medicalDetails")
    priority_score: int = Field(default=0, alias="priorityScore")
    status: str = Field(default="PENDING_VERIFICATION")
    required_resources: Optional[str] = Field(default="", alias="requiredResources")


class EmergencyReportCreate(EmergencyReportBase):
    id: Optional[str] = None
    created_at: Optional[str] = Field(default=None, alias="createdAt")

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class EmergencyReportUpdate(BaseModel):
    user_id: Optional[str] = Field(default=None, alias="userId")
    citizen_name: Optional[str] = Field(default=None, alias="citizenName")
    citizen_phone: Optional[str] = Field(default=None, alias="citizenPhone")
    emergency_type: Optional[str] = Field(default=None, alias="emergencyType")
    location: Optional[str] = None
    coordinates: Optional[CoordinatesSchema] = None
    description: Optional[str] = None
    people_affected: Optional[int] = Field(default=None, alias="peopleAffected")
    is_trapped: Optional[bool] = Field(default=None, alias="isTrapped")
    has_medical_emergency: Optional[bool] = Field(default=None, alias="hasMedicalEmergency")
    medical_details: Optional[str] = Field(default=None, alias="medicalDetails")
    priority_score: Optional[int] = Field(default=None, alias="priorityScore")
    status: Optional[str] = None
    required_resources: Optional[str] = Field(default=None, alias="requiredResources")

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class EmergencyReportResponse(EmergencyReportBase):
    id: str
    created_at: str = Field(..., alias="createdAt")

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class ActiveIncidentBase(BaseModel):
    primary_report_id: Optional[str] = Field(default=None, alias="primaryReportId")
    title: str
    emergency_type: str = Field(..., alias="emergencyType")
    location: str
    coordinates: CoordinatesSchema
    people_affected: int = Field(default=1, alias="peopleAffected")
    priority_score: int = Field(default=0, alias="priorityScore")
    status: str = Field(default="DISPATCHED")
    assigned_responder_id: Optional[str] = Field(default=None, alias="assignedResponderId")
    assigned_responder_name: Optional[str] = Field(default=None, alias="assignedResponderName")
    assigned_shelter_id: Optional[str] = Field(default=None, alias="assignedShelterId")
    eta: Optional[str] = None
    coordinator_update: Optional[str] = Field(default=None, alias="coordinatorUpdate")
    required_resources: Optional[str] = Field(default="", alias="requiredResources")
    timeline: List[TimelineItemSchema] = Field(default_factory=list)


class ActiveIncidentCreate(ActiveIncidentBase):
    id: Optional[str] = None
    created_at: Optional[str] = Field(default=None, alias="createdAt")

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class ActiveIncidentUpdate(BaseModel):
    title: Optional[str] = None
    emergency_type: Optional[str] = Field(default=None, alias="emergencyType")
    location: Optional[str] = None
    coordinates: Optional[CoordinatesSchema] = None
    people_affected: Optional[int] = Field(default=None, alias="peopleAffected")
    priority_score: Optional[int] = Field(default=None, alias="priorityScore")
    status: Optional[str] = None
    assigned_responder_id: Optional[str] = Field(default=None, alias="assignedResponderId")
    assigned_responder_name: Optional[str] = Field(default=None, alias="assignedResponderName")
    assigned_shelter_id: Optional[str] = Field(default=None, alias="assignedShelterId")
    eta: Optional[str] = None
    coordinator_update: Optional[str] = Field(default=None, alias="coordinatorUpdate")
    required_resources: Optional[str] = Field(default=None, alias="requiredResources")
    timeline: Optional[List[TimelineItemSchema]] = None

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class ActiveIncidentResponse(ActiveIncidentBase):
    id: str
    created_at: str = Field(..., alias="createdAt")

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class ShelterBase(BaseModel):
    name: str
    address: str
    capacity: int = 0
    occupied: int = 0
    status: str = "OPEN"
    contact_person: str = Field(..., alias="contactPerson")
    phone: str
    amenities: List[str] = Field(default_factory=list)


class ShelterCreate(ShelterBase):
    id: Optional[str] = None

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class ShelterUpdate(BaseModel):
    name: Optional[str] = None
    address: Optional[str] = None
    capacity: Optional[int] = None
    occupied: Optional[int] = None
    status: Optional[str] = None
    contact_person: Optional[str] = Field(default=None, alias="contactPerson")
    phone: Optional[str] = None
    amenities: Optional[List[str]] = None

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class ShelterResponse(ShelterBase):
    id: str

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class VolunteerBase(BaseModel):
    name: str
    phone: str
    skills: List[str] = Field(default_factory=list)
    location: str
    availability: str = "AVAILABLE"


class VolunteerCreate(VolunteerBase):
    id: Optional[str] = None

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class VolunteerUpdate(BaseModel):
    name: Optional[str] = None
    phone: Optional[str] = None
    skills: Optional[List[str]] = None
    location: Optional[str] = None
    availability: Optional[str] = None

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class VolunteerResponse(VolunteerBase):
    id: str

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class ResponseTeamBase(BaseModel):
    name: str
    type: str
    members: int = 1
    vehicle: str
    status: str = "AVAILABLE"
    contact: str


class ResponseTeamCreate(ResponseTeamBase):
    id: Optional[str] = None

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class ResponseTeamUpdate(BaseModel):
    name: Optional[str] = None
    type: Optional[str] = None
    members: Optional[int] = None
    vehicle: Optional[str] = None
    status: Optional[str] = None
    contact: Optional[str] = None

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class ResponseTeamResponse(ResponseTeamBase):
    id: str

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)
