const API_BASE_URL = 'http://127.0.0.1:8000';

class AppStateManager {
  constructor() {
    this.listeners = [];
    this.selectedReportId = null;
    this.selectedIncidentId = null;

    this.reports = [];
    this.incidents = [];
    this.shelters = [];
    this.volunteers = [];
    this.responseTeams = [];

    this.token = localStorage.getItem('aapda_sarthi_token') || localStorage.getItem('resqgrid_token') || null;
    const savedUser = localStorage.getItem('aapda_sarthi_user') || localStorage.getItem('resqgrid_user');

    if (savedUser) {
      try {
        this.currentUser = JSON.parse(savedUser);
        this.currentRole = this.currentUser.role || 'citizen';
        this.activeView = this.currentUser.initialView || 'home';
      } catch (e) {
        this.currentUser = null;
        this.currentRole = 'citizen';
        this.activeView = 'login';
        this.token = null;
      }
    } else {
      this.currentUser = null;
      this.currentRole = 'citizen';
      this.activeView = 'login';
      this.token = null;
    }

    this.fetchInitialData();
  }

  async fetchInitialData() {
    try {
      let reportsUrl = `${API_BASE_URL}/api/reports`;
      const headers = {};

      if (this.currentUser && !this.currentUser.isGuest && this.currentRole === 'citizen' && this.token) {
        reportsUrl = `${API_BASE_URL}/api/reports/me`;
        headers['Authorization'] = `Bearer ${this.token}`;
      }

      const [reportsRes, incidentsRes, sheltersRes, volunteersRes, teamsRes] = await Promise.all([
        fetch(reportsUrl, { headers }),
        fetch(`${API_BASE_URL}/api/incidents`),
        fetch(`${API_BASE_URL}/api/shelters`),
        fetch(`${API_BASE_URL}/api/volunteers`),
        fetch(`${API_BASE_URL}/api/response-teams`)
      ]);

      if (reportsRes.ok) this.reports = await reportsRes.json();
      if (incidentsRes.ok) this.incidents = await incidentsRes.json();
      if (sheltersRes.ok) this.shelters = await sheltersRes.json();
      if (volunteersRes.ok) this.volunteers = await volunteersRes.json();
      if (teamsRes.ok) this.responseTeams = await teamsRes.json();

      this.notify();
    } catch (e) {
      console.error('Failed to fetch initial data from backend:', e);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(l => l(this));
  }

  async register({ phone, password, role, name }) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password, role, name })
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: 'Registration failed' }));
        throw new Error(err.detail || `Registration failed with status ${res.status}`);
      }

      const data = await res.json();
      this.token = data.token;
      localStorage.setItem('aapda_sarthi_token', data.token);

      const userRole = data.user.role || 'citizen';
      let initialView = 'home';
      if (userRole === 'coordinator') initialView = 'command-center';
      else if (userRole === 'responder') initialView = 'responder-assignments';
      else if (userRole === 'resource_manager') initialView = 'shelters';

      this.currentUser = {
        id: data.user.id,
        identifier: data.user.phone,
        name: data.user.name || `${data.user.phone} (${userRole})`,
        role: userRole,
        isGuest: false,
        initialView: initialView
      };

      this.currentRole = userRole;
      this.activeView = initialView;
      localStorage.setItem('aapda_sarthi_user', JSON.stringify(this.currentUser));

      await this.fetchInitialData();
      this.notify();
      return this.currentUser;
    } catch (e) {
      console.error('Registration error:', e);
      throw e;
    }
  }

  async login({ phone, password, role, name }) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password })
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: 'Login failed' }));
        throw new Error(err.detail || `Login failed with status ${res.status}`);
      }

      const data = await res.json();
      this.token = data.token;
      localStorage.setItem('aapda_sarthi_token', data.token);

      const userRole = data.user.role || role || 'citizen';
      let initialView = 'home';
      if (userRole === 'coordinator') initialView = 'command-center';
      else if (userRole === 'responder') initialView = 'responder-assignments';
      else if (userRole === 'resource_manager') initialView = 'shelters';

      this.currentUser = {
        id: data.user.id,
        identifier: data.user.phone,
        name: data.user.name || name || `${data.user.phone} (${userRole})`,
        role: userRole,
        isGuest: false,
        initialView: initialView
      };

      this.currentRole = userRole;
      this.activeView = initialView;
      localStorage.setItem('aapda_sarthi_user', JSON.stringify(this.currentUser));

      await this.fetchInitialData();
      this.notify();
      return this.currentUser;
    } catch (e) {
      console.error('Login error:', e);
      throw e;
    }
  }

  startGuestSession() {
    this.token = null;
    this.currentUser = {
      id: 'GUEST',
      identifier: 'Guest Citizen',
      name: 'Guest Citizen',
      role: 'citizen',
      isGuest: true,
      initialView: 'report'
    };
    this.currentRole = 'citizen';
    this.activeView = 'report';

    localStorage.setItem('aapda_sarthi_user', JSON.stringify(this.currentUser));
    localStorage.removeItem('aapda_sarthi_token');
    localStorage.removeItem('resqgrid_token');

    this.fetchInitialData();
    this.notify();
  }

  logout() {
    this.token = null;
    this.currentUser = null;
    this.currentRole = 'citizen';
    this.activeView = 'login';
    localStorage.removeItem('aapda_sarthi_user');
    localStorage.removeItem('aapda_sarthi_token');
    localStorage.removeItem('resqgrid_user');
    localStorage.removeItem('resqgrid_token');
    this.notify();
  }

  setRole(role) {
    this.currentRole = role;
    if (this.currentUser) {
      this.currentUser.role = role;
      localStorage.setItem('aapda_sarthi_user', JSON.stringify(this.currentUser));
    }
    this.notify();
  }

  navigateTo(view, params = {}) {
    if (!this.currentUser && view !== 'login') {
      this.activeView = 'login';
    } else {
      this.activeView = view;
    }

    if (params.reportId !== undefined) this.selectedReportId = params.reportId;
    if (params.incidentId !== undefined) this.selectedIncidentId = params.incidentId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.notify();
  }

  async trackGuestReport(reportId) {
    if (!reportId) throw new Error('Report ID is required');
    const cleanId = reportId.trim().toUpperCase();

    try {
      const res = await fetch(`${API_BASE_URL}/api/reports/track/${encodeURIComponent(cleanId)}`);
      if (!res.ok) {
        throw new Error(`Report ${cleanId} not found`);
      }

      const report = await res.json();
      const existingIdx = this.reports.findIndex(r => r.id === report.id);
      if (existingIdx >= 0) {
        this.reports[existingIdx] = report;
      } else {
        this.reports.unshift(report);
      }

      this.selectedReportId = report.id;
      this.notify();
      return report;
    } catch (e) {
      console.error('Failed to track guest report:', e);
      throw e;
    }
  }

  calculatePriorityScore(emergencyType, peopleAffected, isTrapped, hasMedical) {
    let baseScore = 15;
    switch (emergencyType) {
      case 'BUILDING_COLLAPSE': baseScore = 40; break;
      case 'FIRE': baseScore = 35; break;
      case 'GAS_LEAK': baseScore = 35; break;
      case 'FLOOD': baseScore = 30; break;
      case 'ROAD_ACCIDENT': baseScore = 30; break;
      case 'LANDSLIDE': baseScore = 30; break;
      case 'MEDICAL': baseScore = 25; break;
      case 'MISSING_PERSON': baseScore = 25; break;
      case 'POWER_OUTAGE': baseScore = 20; break;
      case 'WATER_HAZARD': baseScore = 15; break;
      default: baseScore = 15; break;
    }

    const peopleFactor = Math.min(Number(peopleAffected || 1) * 2, 25);
    const trappedFactor = isTrapped ? 25 : 0;
    const medicalFactor = hasMedical ? 20 : 0;

    const total = Math.min(baseScore + peopleFactor + trappedFactor + medicalFactor, 100);
    return {
      total,
      breakdown: {
        baseScore,
        peopleFactor,
        trappedFactor,
        medicalFactor
      }
    };
  }

  async addReport(reportData) {
    try {
      const payload = {
        citizenName: reportData.citizenName || 'Jharkhand Resident',
        citizenPhone: reportData.citizenPhone || '+91 94311 00000',
        emergencyType: reportData.emergencyType,
        location: reportData.location || 'Main Road, Ranchi, Jharkhand',
        coordinates: reportData.coordinates || { lat: 23.6102, lng: 85.2799 },
        description: reportData.description || 'Emergency assistance requested in Jharkhand.',
        peopleAffected: Number(reportData.peopleAffected || 1),
        isTrapped: Boolean(reportData.isTrapped),
        hasMedicalEmergency: Boolean(reportData.hasMedicalEmergency),
        medicalDetails: reportData.medicalDetails || '',
        requiredResources: reportData.requiredResources || ''
      };

      const headers = { 'Content-Type': 'application/json' };
      if (this.token) {
        headers['Authorization'] = `Bearer ${this.token}`;
      }

      const res = await fetch(`${API_BASE_URL}/api/reports`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const newReport = await res.json();
      this.reports.unshift(newReport);
      this.selectedReportId = newReport.id;
      this.notify();
      return newReport;
    } catch (e) {
      console.error('Failed to submit emergency report:', e);
      throw e;
    }
  }

  async verifyReportToIncident(reportId, title = '') {
    try {
      const payload = title ? { title } : {};
      const res = await fetch(`${API_BASE_URL}/api/reports/${reportId}/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const newIncident = await res.json();
      const report = this.reports.find(r => r.id === reportId);
      if (report) {
        report.status = 'VERIFIED';
      }

      this.incidents.unshift(newIncident);

      if (newIncident.assignedResponderId) {
        const team = this.responseTeams.find(t => t.id === newIncident.assignedResponderId);
        if (team) team.status = 'ON_MISSION';
      }

      this.notify();
      return newIncident;
    } catch (e) {
      console.error('Failed to verify report to incident:', e);
      throw e;
    }
  }

  async rejectReport(reportId) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/reports/${reportId}/reject`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const updatedReport = await res.json();
      const index = this.reports.findIndex(r => r.id === reportId);
      if (index !== -1) {
        this.reports[index] = updatedReport;
      }

      this.notify();
      return updatedReport;
    } catch (e) {
      console.error('Failed to reject report:', e);
      throw e;
    }
  }

  async assignResponderToIncident(incidentId, responderId) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/incidents/${incidentId}/assign`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ responderId })
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const updatedIncident = await res.json();
      const index = this.incidents.findIndex(i => i.id === incidentId);
      if (index !== -1) {
        this.incidents[index] = updatedIncident;
      }

      const team = this.responseTeams.find(t => t.id === responderId);
      if (team) team.status = 'ON_MISSION';

      this.notify();
      return updatedIncident;
    } catch (e) {
      console.error('Failed to assign responder:', e);
      throw e;
    }
  }

  async updateIncidentStatus(incidentId, status, note = '') {
    try {
      const res = await fetch(`${API_BASE_URL}/api/incidents/${incidentId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, note })
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const updatedIncident = await res.json();
      const index = this.incidents.findIndex(i => i.id === incidentId);
      if (index !== -1) {
        this.incidents[index] = updatedIncident;
      }

      if (status === 'RESOLVED') {
        if (updatedIncident.primaryReportId) {
          const report = this.reports.find(r => r.id === updatedIncident.primaryReportId);
          if (report) report.status = 'RESOLVED';
        }
        if (updatedIncident.assignedResponderId) {
          const team = this.responseTeams.find(t => t.id === updatedIncident.assignedResponderId);
          if (team) team.status = 'AVAILABLE';
        }
      }

      this.notify();
      return updatedIncident;
    } catch (e) {
      console.error('Failed to update incident status:', e);
      throw e;
    }
  }

  async updateShelterOccupancy(shelterId, occupied) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/shelters/${shelterId}/occupancy`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ occupied })
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const updatedShelter = await res.json();
      const index = this.shelters.findIndex(s => s.id === shelterId);
      if (index !== -1) {
        this.shelters[index] = updatedShelter;
      }

      this.notify();
      return updatedShelter;
    } catch (e) {
      console.error('Failed to update shelter occupancy:', e);
      throw e;
    }
  }

  async updateVolunteerStatus(volunteerId, availability) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/volunteers/${volunteerId}/availability`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ availability })
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const updatedVolunteer = await res.json();
      const index = this.volunteers.findIndex(v => v.id === volunteerId);
      if (index !== -1) {
        this.volunteers[index] = updatedVolunteer;
      }

      this.notify();
      return updatedVolunteer;
    } catch (e) {
      console.error('Failed to update volunteer status:', e);
      throw e;
    }
  }
}

export const appState = new AppStateManager();
