import { appState } from './appState.js';

export function renderCoordinatorCommandCenterView() {
  const pendingReports = appState.reports.filter(r => r.status === 'PENDING_VERIFICATION');

  return `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
      <div>
        <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main);">Control Room — New Help Requests (${pendingReports.length})</h2>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Review citizen help requests, check urgency ratings, and assign rescue teams.</p>
      </div>
      <button class="btn btn-secondary" onclick="window.app.navigate('incidents')">View Active Rescues →</button>
    </div>

    ${pendingReports.length === 0 ? `
      <div class="empty-box">
        <div class="empty-title">All New Help Requests Have Been Processed</div>
        <div class="empty-desc">No unverified citizen reports currently in queue.</div>
      </div>
    ` : `
      <div class="grid-2">
        ${pendingReports.map(report => {
          return `
            <div class="card" style="border-left: 4px solid var(--warning);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="badge badge-amber">Awaiting Review</span>
                <span class="priority-tag">Urgency: ${report.priorityScore}/100</span>
              </div>

              <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main); margin-bottom: 2px;">
                ${report.emergencyType.replace('_', ' ')}
              </h3>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">Location: ${report.location}</div>

              <div style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 10px; border-radius: 6px; font-size: 0.85rem; margin-bottom: 10px;">
                "${report.description}"
              </div>

              <div style="font-size: 0.78rem; color: var(--text-dim); margin-bottom: 12px; background: var(--bg-surface); padding: 8px; border-radius: 6px; border: 1px solid var(--border-color);">
                <strong>Triage Assessment:</strong> Urgency score and crisis category evaluated from reported details.
              </div>

              <div style="font-size: 0.8rem; margin-bottom: 12px; display: flex; gap: 12px;">
                <span>Contact: <strong>${report.citizenName} (${report.citizenPhone})</strong></span>
              </div>

              <div style="display: flex; gap: 8px; flex-wrap: wrap; border-top: 1px solid var(--border-color); padding-top: 12px;">
                <button class="btn btn-primary" style="flex: 1; font-size: 0.85rem;" onclick="window.app.verifyReportAction('${report.id}')">
                  Verify & Dispatch Team
                </button>
                <button class="btn btn-secondary" style="font-size: 0.85rem;" onclick="window.app.rejectReportAction('${report.id}')">
                  Decline
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `}
  `;
}

export function renderCoordinatorActiveIncidentsView() {
  const activeIncidents = appState.incidents.filter(i => i.status !== 'RESOLVED');

  return `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <div>
        <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main);">Active Rescue Missions (${activeIncidents.length})</h2>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Verified emergencies where rescue teams have been dispatched.</p>
      </div>
    </div>

    <div class="grid-2">
      ${activeIncidents.map(inc => `
        <div class="card" style="border-left: 4px solid var(--primary);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="badge badge-blue">Team Dispatched</span>
            <span class="priority-tag">Urgency: ${inc.priorityScore}/100</span>
          </div>

          <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">${inc.title}</h3>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 10px;">Location: ${inc.location}</div>

          <div style="font-size: 0.85rem; background: var(--bg-input); border: 1px solid var(--border-color); padding: 8px 10px; border-radius: 6px; margin-bottom: 12px;">
            <strong>Assigned Team:</strong> ${inc.assignedResponderName}<br>
            <span style="color: var(--text-dim); font-size: 0.8rem;">Status: ${inc.eta || 'En Route'}</span>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 10px;">
            <span style="font-size: 0.75rem; color: var(--text-dim);">Ref: ${inc.id}</span>
            <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 6px 12px;" onclick="window.app.navigate('incident-detail', { incidentId: '${inc.id}' })">
              Manage Incident →
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export function renderCoordinatorIncidentDetailsView() {
  const incId = appState.selectedIncidentId || (appState.incidents[0] ? appState.incidents[0].id : null);
  const incident = appState.incidents.find(i => i.id === incId) || appState.incidents[0];

  if (!incident) {
    return `<div class="empty-box"><div class="empty-title">No Incident Selected</div></div>`;
  }

  const teams = appState.responseTeams;

  return `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <div>
        <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main);">Incident Details: ${incident.id}</h2>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${incident.title}</p>
      </div>
      <button class="btn btn-secondary" onclick="window.app.navigate('incidents')">← Back to Incidents</button>
    </div>

    <div class="grid-2">
      <div class="card">
        <h3 style="font-weight: 800; margin-bottom: 12px; color: var(--text-main);">Rescue Team Control</h3>
        <div style="margin-bottom: 16px;">
          <label class="field-label" for="teamSelect_${incident.id}">Assign or Reassign Rescue Team</label>
          <select class="select-box" id="teamSelect_${incident.id}">
            ${teams.map(t => `
              <option value="${t.id}" ${t.id === incident.assignedResponderId ? 'selected' : ''}>
                ${t.name} (${t.status === 'AVAILABLE' ? 'Available' : 'Deployed'})
              </option>
            `).join('')}
          </select>
          <button class="btn btn-primary btn-block" style="margin-top: 10px;" onclick="window.app.assignResponderAction('${incident.id}', document.getElementById('teamSelect_${incident.id}').value)">
            Update Assigned Team
          </button>
        </div>

        <div style="border-top: 1px solid var(--border-color); padding-top: 16px;">
          <label class="field-label">Update Mission Status</label>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="btn btn-secondary" style="flex: 1;" onclick="window.app.updateIncidentStatusAction('${incident.id}', 'DISPATCHED', 'Team dispatched to area')">En Route</button>
            <button class="btn btn-success" style="flex: 1;" onclick="window.app.updateIncidentStatusAction('${incident.id}', 'RESOLVED', 'Rescue complete. Area safe.')">Mark Solved & Safe</button>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 style="font-weight: 800; margin-bottom: 12px; color: var(--text-main);">Incident Summary</h3>
        <div style="font-size: 0.85rem; display: flex; flex-direction: column; gap: 10px;">
          <div><span style="color: var(--text-dim);">Location:</span> <strong>${incident.location}</strong></div>
          <div><span style="color: var(--text-dim);">Urgency Score:</span> <strong>${incident.priorityScore}/100</strong></div>
          <div><span style="color: var(--text-dim);">Assigned Team:</span> <strong>${incident.assignedResponderName}</strong></div>
          <div><span style="color: var(--text-dim);">Status:</span> <strong style="color: var(--primary);">${incident.status}</strong></div>
          <div><span style="color: var(--text-dim);">Required Equipment:</span> <strong>${incident.requiredResources}</strong></div>
        </div>
      </div>
    </div>
  `;
}

export function renderCoordinatorResourcesView() {
  return `
    <div style="margin-bottom: 20px;">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main);">Emergency Resources</h2>
      <p style="font-size: 0.85rem; color: var(--text-muted);">Available relief centers, shelters, and response units.</p>
    </div>
    <div class="grid-2">
      <div class="card">
        <h3 style="font-weight: 800; margin-bottom: 8px;">Relief Shelters</h3>
        <button class="btn btn-secondary btn-block" onclick="window.app.setRoleAndNavigate('resource_manager', 'shelters')">View All Shelters</button>
      </div>
      <div class="card">
        <h3 style="font-weight: 800; margin-bottom: 8px;">Response Units Matrix</h3>
        <button class="btn btn-secondary btn-block" onclick="window.app.setRoleAndNavigate('resource_manager', 'response-teams')">View Response Units</button>
      </div>
    </div>
  `;
}
