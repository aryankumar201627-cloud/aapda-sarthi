# Aapda Sarthi 🛡️
**Jharkhand State Disaster Management and Emergency Coordination Portal**

Aapda Sarthi is a full-stack, AI-powered emergency response network designed to reduce disaster response times and improve coordination between affected citizens, volunteers, and state authorities across Jharkhand. 

Transitioning from traditional, overwhelmed call centers, this platform unifies real-time telemetry, resource management, and artificial intelligence into a single, highly accessible state-wide grid.

## 🚀 Key Features

*   **Emergency AI Dispatch Assistant:** An integrated Gemini-powered chatbot that converses with citizens in real-time, triages crises, filters non-emergencies, calculates priority scores (0-100), and auto-submits structured reports to the control room.
*   **Role-Based Access Control (RBAC):** Dedicated, secure dashboards tailored for specific operational roles: Citizens, Coordinators, Field Responders, and Resource Managers.
*   **Live GPS Tracking:** HTML5 Geolocation integrated with OpenStreetMap reverse-geocoding for precise incident coordinate mapping and rapid volunteer dispatch.
*   **Guest & Authenticated Flows:** Secure JWT-based login alongside a frictionless guest reporting system that issues unique tracking IDs for immediate live-status updates.
*   **Bilingual Accessibility:** Built-in English and Hindi (हिन्दी) UI localization to ensure critical accessibility across all demographics during a crisis.
*   **State-Wide Resource Management:** Live tracking of emergency relief shelters, bed capacities, clean water supplies, and medical triage across major districts (Ranchi, Dhanbad, Bokaro, Jamshedpur, Hazaribagh, Deoghar).
*   **Centralized Helpline Directory:** Instant access to a localized and national emergency contact modal.

## 💻 Tech Stack

*   **Frontend:** HTML5, CSS3 (Professional Dark Theme UI), Vanilla JavaScript (Component-based view architecture)
*   **Backend:** Python, FastAPI
*   **Database:** SQLite (with robust data seeding scripts)
*   **AI Integration:** Google Generative AI (Gemini SDK)
*   **Geocoding:** OpenStreetMap Nominatim API

## 🛠️ Local Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/aapda-sarthi.git](https://github.com/yourusername/aapda-sarthi.git)
   cd aapda-sarthi