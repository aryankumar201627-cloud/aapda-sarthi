import { appState } from './appState.js';
import {
  renderLoginView,
  setLoginRoleState,
  getLoginRoleState,
  setAuthModeState,
  getAuthModeState
} from './views/loginView.js';
import { renderLandingView } from './views/landingView.js';
import {
  renderCitizenReportView,
  renderCitizenMyReportsView,
  renderCitizenStatusView,
  setCategoryFilterState,
  setSearchQueryState,
  loadMoreReportsState
} from './views/citizenViews.js';
import {
  renderCoordinatorCommandCenterView,
  renderCoordinatorActiveIncidentsView,
  renderCoordinatorIncidentDetailsView,
  renderCoordinatorResourcesView
} from './views/coordinatorViews.js';
import {
  renderResponderAssignmentsView,
  renderResponderIncidentDetailsView
} from './views/responderViews.js';
import {
  renderResourceSheltersView,
  renderShelterReliefView
} from './views/shelterViews.js';
import {
  renderResourceVolunteersView,
  renderResourceResponseTeamsView
} from './views/resourceViews.js';

const I18N = {
  en: {
    app_title: "Aapda Sarthi - Jharkhand State Emergency Portal",
    sim_banner: "Aapda Sarthi — Emergency Management & Disaster Response Portal",
    reset_demo: "Reset Demo Data",
    brand_title: "Aapda Sarthi",
    brand_subtitle: "Emergency Response Portal",
    helpline_btn: "Helpline Directory",
    logout: "Logout",
    role_label: "ROLE",
    nav_home: "Operations Home",
    nav_report: "Report Emergency",
    nav_stream: "Incident Stream",
    nav_status: "Incident Status",
    nav_command: "Command Center",
    nav_incidents: "Active Incidents",
    nav_incident_details: "Incident Details",
    nav_resources: "Resources",
    nav_assignments: "Squad Assignments",
    nav_dossier: "Incident Dossier",
    nav_shelters: "Emergency Shelters",
    nav_volunteers: "Volunteer Registry",
    nav_fleets: "Response Fleets",
    chat_title: "Emergency Assistant",
    chat_status: "Online • Dispatch Assistant",
    chat_welcome: "Emergency Assistant active. Please report your location, crisis category, and number of affected persons.",
    chat_placeholder: "Type emergency location or details...",
    quick_flood: "Flood",
    quick_fire: "Fire",
    quick_medical: "Medical",
    quick_trapped: "Trapped",
    footer_text: "<strong>Aapda Sarthi</strong> • Disaster Management Authority • Emergency Response Portal",
    helpline_modal_title: "Emergency Helpline Directory",
    helpline_modal_desc: "Central and Jharkhand State 24x7 toll-free emergency dispatch contacts.",
    helpline_national: "National Emergency Number",
    helpline_police: "Police Control Room",
    helpline_ambulance: "Ambulance & Medical Emergency",
    helpline_fire: "Fire Brigade & Rescue",
    helpline_disaster: "State Disaster Management (JSDMA)",
    helpline_women: "Women Helpline",
    helpline_child: "Childline Emergency",
    scope_all: "All-in-One Integrated Response",
    scope_jharkhand: "Jharkhand State Police",
    scope_national: "National Health Mission",
    scope_jharkhand_fire: "State Fire Services",
    scope_jsdma: "Disaster Control Room",
    scope_women: "Safety & Emergency Support",
    scope_child: "Child Protection & Relief",
    close_btn: "Close Directory",
    guest_reporter: "Guest Reporter",

    eoc_badge: "Emergency Operations Center",
    landing_title: "State Emergency Operations Command",
    district_active: "District Operations Active",
    landing_desc: "Statewide crisis response system connecting citizens, triage coordinators, frontline responders, and relief shelters. Real-time incident routing and urgency assessment.",
    req_rescue_btn: "Request Immediate Emergency Rescue",
    enter_coord_btn: "Enter Coordinator Command Center",
    view_stream_btn: "View Incident Stream",
    stat_critical_queue: "Critical Urgency Queue",
    stat_active_dispatches: "Active Dispatches",
    stat_resolved_safe: "Resolved & Safe",
    stat_total_logged: "Total Logged Incidents",
    dist_sectors_title: "District Operations Sectors",
    statewide_coverage: "STATEWIDE COVERAGE",
    view_sector_incidents: "View Sector Incidents",
    op_portals_title: "Operational Portals",
    portal_citizen_title: "Citizen Emergency Reporting",
    portal_citizen_desc: "Submit crisis reports with location details, medical triage flags, and track real-time dispatch progress.",
    req_rescue_sm: "Request Rescue",
    track_id_sm: "Track Emergency ID",
    portal_coord_title: "Coordinator Command",
    portal_coord_desc: "Prioritize incoming incidents by urgency scores, verify active disasters, and mobilize rescue teams.",
    triage_queue_sm: "Triage Queue",
    active_inc_sm: "Active Incidents",
    portal_resp_title: "Field Responders & Tactical Teams",
    portal_resp_desc: "Tactical unit task assignments for search & rescue units, fire services, and medical ambulances.",
    resp_dash_sm: "Responder Dashboard",
    portal_shelter_title: "Relief Shelters & Volunteer Logistics",
    portal_shelter_desc: "Live shelter bed capacities, medical amenities, emergency rations, and skilled volunteer deployment.",
    shelters_sm: "Emergency Shelters",
    volunteers_sm: "Volunteer Registry",

    citizen_report_title: "Emergency Incident Reporting",
    citizen_report_guest_sub: "An Emergency Registration Tracking ID will be generated upon submission.",
    citizen_report_user_sub: "Submit emergency details directly to the Disaster Control Room.",
    label_cat: "1. Crisis Category Classification *",
    cat_flood: "Flood / Water",
    cat_fire: "Fire Crisis",
    cat_road: "Road Accident",
    cat_med: "Critical Medical",
    cat_collapse: "Structure Collapse",
    cat_gas: "Gas / Hazmat",
    cat_power: "Grid Blackout",
    cat_landslide: "Landslide / Rockfall",
    cat_water_haz: "Water Hazard",
    cat_stranded: "Stranded Persons",
    label_location: "2. Incident Location / Address *",
    hint_location: "Specify nearest landmark, street name, or district for rapid dispatch.",
    label_reporter_name: "Reporter Name",
    label_phone: "Contact Phone / Emergency Line *",
    label_desc: "3. Situation Assessment & Immediate Hazards *",
    label_people: "4. Total Persons Affected / Needing Extraction *",
    label_risk: "Persons at Risk",
    label_flags: "5. Life-Safety Critical Flags",
    flag_trapped: "Persons actively trapped under debris, water, or collapsed structure",
    flag_medical: "Severe medical emergency / trauma care urgently required",
    label_trauma_details: "Trauma & Medical Triage Details",
    btn_submit_report: "Submit Emergency Report",

    incident_feed_title: "Incident Feed",
    my_records_title: "My Emergency Incident Records",
    btn_submit_new: "+ Submit New Emergency",
    filter_all: "All Reports",
    filter_flood: "Flood",
    filter_fire: "Fire",
    filter_accident: "Accident",
    filter_medical: "Medical",
    filter_collapse: "Collapse",
    filter_hazmat: "Hazmat",
    filter_blackout: "Blackout",
    filter_landslide: "Landslide",
    filter_water_haz: "Water Hazard",
    filter_stranded: "Stranded",
    btn_track_status: "Track Status →",

    status_search_title: "Incident Status Search",
    status_search_desc: "Enter your official Emergency Registration Number (e.g., RNC-1001) to fetch response status from the Control Room.",
    btn_track_now: "Track Status",
    milestones_title: "Operational Milestones",
    milestone_1: "1. Incident Report Ingested",
    milestone_2: "2. Automated Triage & Priority Assessment",
    milestone_3: "3. Control Room Authorization",
    milestone_4: "4. Tactical Unit Mobilization",
    milestone_5: "5. Rescue Complete & Area Secured",
    dossier_title: "Registration Dossier",
    dossier_reg_num: "Registration Number:",
    dossier_reporter: "Reporter:",
    dossier_location: "Location:",
    dossier_narrative: "Incident Narrative:",
    dossier_at_risk: "Persons at Risk:",
    dossier_trapped: "Trapped:",
    dossier_med_care: "Medical Care:",
    dossier_equipment: "Assigned Equipment:",

    login_portal_title: "Aapda Sarthi Portal",
    login_portal_sub: "Disaster Response & Emergency Incident Coordination System",
    guest_alert_title: "Immediate Life-Safety Emergency Alert",
    guest_alert_sub: "No account required. Submit your crisis report directly and receive an official tracking number.",
    btn_guest_report: "Report Emergency as Guest (No Login Required) →",
    tab_sign_in: "Account Sign In",
    tab_register: "Register Portal Account",
    role_select_title: "1. Select Operational Role *",
    role_citizen_title: "Citizen",
    role_citizen_desc: "Report emergencies & track rescue status.",
    role_coord_title: "Coordinator",
    role_coord_desc: "Review queue, verify reports & dispatch units.",
    role_resp_title: "Responder",
    role_resp_desc: "Field rescue squad updates & response actions.",
    role_resmgr_title: "Resource Manager",
    role_resmgr_desc: "Manage shelters, volunteers & supply fleets.",
    label_auth_phone: "Phone Number or Official Email *",
    label_auth_pass: "Access Password *",
    fast_preset_label: "Fast Preset Logins:",
    btn_sign_in: "Sign In to Portal",
    btn_register_in: "Register & Enter Portal"
  },
  hi: {
    app_title: "आपदा सारथी - झारखंड राज्य आपातकालीन पोर्टल",
    sim_banner: "आपदा सारथी — आपातकालीन प्रबंधन एवं आपदा प्रतिक्रिया पोर्टल",
    reset_demo: "डेमो डेटा रीसेट करें",
    brand_title: "आपदा सारथी",
    brand_subtitle: "आपातकालीन प्रतिक्रिया पोर्टल",
    helpline_btn: "हेल्पलाइन डायरेक्टरी",
    logout: "लॉगआउट",
    role_label: "भूमिका",
    nav_home: "संचालन मुख्य पृष्ठ",
    nav_report: "आपातकाल रिपोर्ट करें",
    nav_stream: "घटनाक्रम सूची",
    nav_status: "घटना स्थिति",
    nav_command: "कमांड सेंटर",
    nav_incidents: "सक्रिय घटनाएं",
    nav_incident_details: "घटना विवरण",
    nav_resources: "संसाधन",
    nav_assignments: "दस्ता कार्यभार",
    nav_dossier: "घटना दस्तावेज़",
    nav_shelters: "राहत शिविर",
    nav_volunteers: "स्वयंसेवक पंजी",
    nav_fleets: "प्रतिक्रिया दल",
    chat_title: "आपातकालीन सहायक",
    chat_status: "ऑनलाइन • प्रेषण सहायक",
    chat_welcome: "आपातकालीन सहायक सक्रिय है। कृपया अपना स्थान, संकट श्रेणी, और प्रभावित लोगों की संख्या बताएं।",
    chat_placeholder: "आपातकालीन स्थान या विवरण दर्ज करें...",
    quick_flood: "बाढ़",
    quick_fire: "आग",
    quick_medical: "चिकित्सा",
    quick_trapped: "फंसे लोग",
    footer_text: "<strong>आपदा सारथी</strong> • राज्य आपदा प्रबंधन प्राधिकरण • आपातकालीन प्रतिक्रिया पोर्टल",
    helpline_modal_title: "आपातकालीन हेल्पलाइन डायरेक्टरी",
    helpline_modal_desc: "केंद्रीय एवं झारखंड राज्य 24x7 टोल-फ्री आपातकालीन संपर्क नंबर।",
    helpline_national: "राष्ट्रीय आपातकालीन नंबर",
    helpline_police: "पुलिस नियंत्रण कक्ष",
    helpline_ambulance: "एम्बुलेंस एवं चिकित्सा आपातकाल",
    helpline_fire: "अग्निशमन एवं बचाव दल",
    helpline_disaster: "राज्य आपदा प्रबंधन (JSDMA)",
    helpline_women: "महिला हेल्पलाइन",
    helpline_child: "चाइल्डलाइन आपातकाल",
    scope_all: "एकीकृत आपातकालीन सेवा",
    scope_jharkhand: "झारखंड राज्य पुलिस",
    scope_national: "राष्ट्रीय स्वास्थ्य मिशन",
    scope_jharkhand_fire: "राज्य अग्निशमन सेवा",
    scope_jsdma: "आपदा नियंत्रण कक्ष",
    scope_women: "सुरक्षा एवं आपातकालीन सहायता",
    scope_child: "बाल संरक्षण एवं राहत",
    close_btn: "डायरेक्टरी बंद करें",
    guest_reporter: "अतिथि नागरिक",

    eoc_badge: "आपातकालीन संचालन केंद्र",
    landing_title: "राज्य आपातकालीन संचालन कमान",
    district_active: "जिला संचालन सक्रिय",
    landing_desc: "राज्यव्यापी संकट प्रतिक्रिया प्रणाली जो नागरिकों, ट्राइएज समन्वयकों, अग्रिम पंक्ति के उत्तरदाताओं और राहत शिविरों को जोड़ती है। वास्तविक समय की घटना रूटिंग और तात्कालिकता मूल्यांकन।",
    req_rescue_btn: "तत्काल आपातकालीन बचाव का अनुरोध करें",
    enter_coord_btn: "समन्वयक कमांड सेंटर में प्रवेश करें",
    view_stream_btn: "घटनाक्रम प्रवाह देखें",
    stat_critical_queue: "अति आवश्यक कतार",
    stat_active_dispatches: "सक्रिय प्रेषण",
    stat_resolved_safe: "सुलझाया गया और सुरक्षित",
    stat_total_logged: "कुल दर्ज घटनाएं",
    dist_sectors_title: "जिला संचालन प्रभाग",
    statewide_coverage: "राज्यव्यापी कवरेज",
    view_sector_incidents: "प्रभाग की घटनाएं देखें",
    op_portals_title: "संचालन पोर्टल",
    portal_citizen_title: "नागरिक आपातकालीन रिपोर्टिंग",
    portal_citizen_desc: "स्थान विवरण, चिकित्सा ट्राइएज फ्लैग के साथ संकट रिपोर्ट दर्ज करें और वास्तविक समय की प्रगति ट्रैक करें।",
    req_rescue_sm: "बचाव का अनुरोध",
    track_id_sm: "आपातकालीन आईडी ट्रैक करें",
    portal_coord_title: "समन्वयक कमान",
    portal_coord_desc: "तात्कालिकता स्कोर के अनुसार घटनाओं को प्राथमिकता दें, आपदाओं को सत्यापित करें और बचाव दल जुटाएं।",
    triage_queue_sm: "ट्राइएज कतार",
    active_inc_sm: "सक्रिय घटनाएं",
    portal_resp_title: "फील्ड उत्तरदाता एवं सामरिक दल",
    portal_resp_desc: "खोज एवं बचाव इकाइयों, अग्निशमन सेवाओं और चिकित्सा एम्बुलेंस के लिए कार्यभार।",
    resp_dash_sm: "उत्तरदाता डैशबोर्ड",
    portal_shelter_title: "राहत शिविर एवं स्वयंसेवक रसद",
    portal_shelter_desc: "शिविर बिस्तर क्षमता, चिकित्सा सुविधाएं, आपातकालीन राशन और कुशल स्वयंसेवकों की तैनाती।",
    shelters_sm: "आपातकालीन शिविर",
    volunteers_sm: "स्वयंसेवक पंजी",

    citizen_report_title: "आपातकालीन घटना रिपोर्टिंग",
    citizen_report_guest_sub: "जमा करने पर एक आपातकालीन पंजीकरण ट्रैकिंग आईडी उत्पन्न होगी।",
    citizen_report_user_sub: "आपदा नियंत्रण कक्ष को सीधे आपातकालीन विवरण प्रस्तुत करें।",
    label_cat: "1. संकट श्रेणी वर्गीकरण *",
    cat_flood: "बाढ़ / जलभराव",
    cat_fire: "अग्नि संकट",
    cat_road: "सड़क दुर्घटना",
    cat_med: "गंभीर चिकित्सा",
    cat_collapse: "संरचना ध्वस्त",
    cat_gas: "गैस / खतरनाक रसायन",
    cat_power: "बिजली ब्लैकआउट",
    cat_landslide: "भूस्खलन / चट्टान खिसकना",
    cat_water_haz: "जल संकट",
    cat_stranded: "फंसे हुए लोग",
    label_location: "2. घटना स्थल / पता *",
    hint_location: "त्वरित प्रेषण के लिए निकटतम लैंडमार्क, सड़क का नाम या जिला निर्दिष्ट करें।",
    label_reporter_name: "रिपोर्टर का नाम",
    label_phone: "संपर्क फोन / आपातकालीन लाइन *",
    label_desc: "3. स्थिति मूल्यांकन एवं तात्कालिक खतरे *",
    label_people: "4. कुल प्रभावित / निकाले जाने वाले व्यक्ति *",
    label_risk: "जोखिम में व्यक्ति",
    label_flags: "5. जीवन-सुरक्षा संबंधी महत्वपूर्ण फ्लैग",
    flag_trapped: "मलबे, पानी या ढही हुई संरचना के नीचे फंसे लोग",
    flag_medical: "गंभीर चिकित्सा आपातकाल / तत्काल आघात देखभाल की आवश्यकता",
    label_trauma_details: "आघात एवं चिकित्सा ट्राइएज विवरण",
    btn_submit_report: "आपातकालीन रिपोर्ट जमा करें",

    incident_feed_title: "घटनाक्रम फ़ीड",
    my_records_title: "मेरे आपातकालीन घटना रिकॉर्ड",
    btn_submit_new: "+ नई आपातकालीन रिपोर्ट दर्ज करें",
    filter_all: "सभी रिपोर्ट",
    filter_flood: "बाढ़",
    filter_fire: "आग",
    filter_accident: "दुर्घटना",
    filter_medical: "चिकित्सा",
    filter_collapse: "ध्वस्त",
    filter_hazmat: "खतरनाक गैस",
    filter_blackout: "ब्लैकआउट",
    filter_landslide: "भूस्खलन",
    filter_water_haz: "जल संकट",
    filter_stranded: "फंसे लोग",
    btn_track_status: "स्थिति ट्रैक करें →",

    status_search_title: "घटना स्थिति खोज",
    status_search_desc: "नियंत्रण कक्ष से प्रतिक्रिया स्थिति प्राप्त करने के लिए अपना आधिकारिक आपातकालीन पंजीकरण नंबर दर्ज करें।",
    btn_track_now: "स्थिति जांचें",
    milestones_title: "संचालन मील के पत्थर",
    milestone_1: "1. घटना रिपोर्ट प्राप्त हुई",
    milestone_2: "2. स्वचालित ट्राइएज एवं प्राथमिकता मूल्यांकन",
    milestone_3: "3. नियंत्रण कक्ष प्राधिकरण",
    milestone_4: "4. सामरिक इकाई की रवानगी",
    milestone_5: "5. बचाव पूर्ण एवं क्षेत्र सुरक्षित",
    dossier_title: "पंजीकरण विवरण",
    dossier_reg_num: "पंजीकरण संख्या:",
    dossier_reporter: "रिपोर्टर:",
    dossier_location: "स्थान:",
    dossier_narrative: "घटना विवरण:",
    dossier_at_risk: "जोखिम में व्यक्ति:",
    dossier_trapped: "फंसे हुए:",
    dossier_med_care: "चिकित्सा देखभाल:",
    dossier_equipment: "आवंटित उपकरण:",

    login_portal_title: "आपदा सारथी पोर्टल",
    login_portal_sub: "आपदा प्रतिक्रिया एवं आपातकालीन घटना समन्वय प्रणाली",
    guest_alert_title: "तत्काल जीवन-सुरक्षा आपातकालीन चेतावनी",
    guest_alert_sub: "किसी खाते की आवश्यकता नहीं है। अपनी संकट रिपोर्ट सीधे जमा करें और आधिकारिक ट्रैकिंग नंबर प्राप्त करें।",
    btn_guest_report: "अतिथि के रूप में रिपोर्ट करें (लॉगिन आवश्यक नहीं) →",
    tab_sign_in: "खाता साइन इन",
    tab_register: "पोर्टल खाता पंजीकृत करें",
    role_select_title: "1. परिचालन भूमिका चुनें *",
    role_citizen_title: "नागरिक",
    role_citizen_desc: "आपातकाल रिपोर्ट करें और बचाव स्थिति ट्रैक करें।",
    role_coord_title: "समन्वयक",
    role_coord_desc: "कतार की समीक्षा करें, रिपोर्ट सत्यापित करें और इकाइयाँ भेजें।",
    role_resp_title: "उत्तरदाता",
    role_resp_desc: "फील्ड बचाव दल अपडेट और प्रतिक्रिया कार्रवाई।",
    role_resmgr_title: "संसाधन प्रबंधक",
    role_resmgr_desc: "शिविर, स्वयंसेवक और आपूर्ति बेड़े का प्रबंधन करें।",
    label_auth_phone: "फोन नंबर या आधिकारिक ईमेल *",
    label_auth_pass: "पासवर्ड *",
    fast_preset_label: "त्वरित डेमो लॉगिन:",
    btn_sign_in: "पोर्टल में साइन इन करें",
    btn_register_in: "पंजीकृत करें और पोर्टल में प्रवेश करें"
  }
};

class AapdaSarthiApp {
  constructor() {
    this.appContainer = document.getElementById('app-view-container');
    this.navContainer = document.getElementById('navContainer');
    this.userHeaderSection = document.getElementById('userHeaderSection');
    this.userBadge = document.getElementById('userBadge');

    this.currentLang = localStorage.getItem('aapda_sarthi_lang') || 'en';
    this.chatHistory = [];
    this.isChatOpen = false;
    this.isChatLoading = false;

    this.initTheme();
    this.init();
  }

  initTheme() {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('aapda_sarthi_theme', 'dark');
  }

  toggleTheme() {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('aapda_sarthi_theme', 'dark');
  }

  t(key) {
    const dict = I18N[this.currentLang] || I18N.en;
    return dict[key] !== undefined ? dict[key] : key;
  }

  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'hi') return;
    this.currentLang = lang;
    localStorage.setItem('aapda_sarthi_lang', lang);
    this.applyLanguage();
    this.renderNavigation();
  }

  applyLanguage() {
    const enBtn = document.getElementById('langBtnEn');
    const hiBtn = document.getElementById('langBtnHi');
    if (enBtn && hiBtn) {
      if (this.currentLang === 'en') {
        enBtn.classList.add('active');
        hiBtn.classList.remove('active');
      } else {
        hiBtn.classList.add('active');
        enBtn.classList.remove('active');
      }
    }

    document.title = this.t('app_title');

    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (key === 'footer_text') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    const i18nPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
    i18nPlaceholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', this.t(key));
    });
  }

  openHelplineModal() {
    const modal = document.getElementById('helplineModal');
    if (modal) {
      modal.style.display = 'flex';
    }
  }

  closeHelplineModal() {
    const modal = document.getElementById('helplineModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  handleModalOverlayClick(event) {
    if (event.target.id === 'helplineModal') {
      this.closeHelplineModal();
    }
  }

  init() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeHelplineModal();
      }
    });

    appState.subscribe(() => {
      this.render();
    });

    this.render();
  }

  handleBrandClick() {
    if (appState.currentUser) {
      this.navigate('home');
    } else {
      this.navigate('login');
    }
  }

  startGuestFlow() {
    appState.startGuestSession();
  }

  toggleAuthMode(mode) {
    setAuthModeState(mode);
    this.render();
  }

  selectLoginRole(role) {
    setLoginRoleState(role);
    this.render();
  }

  fillLoginPreset(name, identifier, role) {
    setLoginRoleState(role);
    this.render();
    const phoneInput = document.getElementById('authPhone');
    if (phoneInput) {
      phoneInput.value = identifier;
    }
    const nameInput = document.getElementById('authFullName');
    if (nameInput) {
      nameInput.value = name;
    }
  }

  async handleAuthSubmit(event) {
    event.preventDefault();
    const isRegister = getAuthModeState() === 'register';
    const role = getLoginRoleState() || 'citizen';
    const phone = document.getElementById('authPhone').value.trim();
    const password = document.getElementById('authPassword').value;
    const nameInput = document.getElementById('authFullName');
    const name = nameInput ? nameInput.value.trim() : null;

    try {
      if (isRegister) {
        await appState.register({ phone, password, role, name });
        alert(this.currentLang === 'hi' ? 'खाता सफलतापूर्वक बनाया और प्रमाणित किया गया।' : 'Account created and authenticated successfully.');
      } else {
        await appState.login({ phone, password, role, name });
      }
    } catch (e) {
      alert(`Authentication Error: ${e.message}`);
    }
  }

  handleLogout() {
    appState.logout();
  }

  setRoleAndNavigate(role, view) {
    appState.setRole(role);
    appState.navigateTo(view);
  }

  navigate(view, params = {}) {
    appState.navigateTo(view, params);
  }

  selectCategory(category) {
    const hiddenInput = document.getElementById('emergencyType');
    if (hiddenInput) hiddenInput.value = category;

    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));

    const activeBtn = document.getElementById(`cat-${category}`);
    if (activeBtn) activeBtn.classList.add('selected');
  }

  setCategoryFilter(cat) {
    setCategoryFilterState(cat);
    this.render();
  }

  setSearchQuery(q) {
    setSearchQueryState(q);
    this.render();
  }

  loadMoreReports() {
    loadMoreReportsState();
    this.render();
  }

  async reverseGeocode(lat, lng) {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}`;
      const res = await fetch(url, {
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.display_name) {
          return data.display_name;
        }
      }
    } catch (e) {
    }
    return null;
  }

  async getCurrentLocation(targetInputId = 'location', targetBtnId = 'useLocationBtn') {
    const btn = document.getElementById(targetBtnId);
    const locInput = document.getElementById(targetInputId);
    const latInput = document.getElementById('gpsLat');
    const lngInput = document.getElementById('gpsLng');
    const originalText = btn ? btn.textContent : 'Auto-Detect Location';

    if (!navigator.geolocation) {
      alert('Location access denied. Please enter your emergency address manually.');
      return;
    }

    if (btn) {
      btn.textContent = 'Acquiring GPS...';
      btn.disabled = true;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude.toFixed(4);
        const lng = position.coords.longitude.toFixed(4);
        const address = await this.reverseGeocode(lat, lng);
        const formatted = address
          ? `${address} (Lat: ${lat}, Lng: ${lng})`
          : `Lat: ${lat}, Lng: ${lng}`;

        if (locInput) locInput.value = formatted;
        if (latInput) latInput.value = lat;
        if (lngInput) lngInput.value = lng;
        if (btn) {
          btn.textContent = originalText;
          btn.disabled = false;
        }
      },
      (error) => {
        if (btn) {
          btn.textContent = originalText;
          btn.disabled = false;
        }
        alert('Location access denied. Please enter your emergency address manually.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  async handleTrackReport(event) {
    if (event) event.preventDefault();
    const input = document.getElementById('trackReportInput');
    if (!input) return;
    const reportId = input.value.trim().toUpperCase();
    if (!reportId) return;

    try {
      await appState.trackGuestReport(reportId);
      this.navigate('status', { reportId });
    } catch (e) {
      alert(this.currentLang === 'hi'
        ? `आपातकालीन पंजीकरण संख्या नहीं मिल सकी: ${reportId}। कृपया कोड सत्यापित करें और पुनः प्रयास करें।`
        : `Could not locate Emergency Registration Number: ${reportId}. Please verify the code and try again.`);
    }
  }

  renderNavigation() {
    const navWrapper = this.navContainer ? this.navContainer.closest('nav') : null;

    if (!appState.currentUser || appState.activeView === 'login') {
      if (navWrapper) navWrapper.style.display = 'none';
      if (this.userHeaderSection) this.userHeaderSection.style.display = 'none';
      return;
    }

    if (navWrapper) navWrapper.style.display = 'block';
    if (this.userHeaderSection) this.userHeaderSection.style.display = 'flex';
    if (this.userBadge) {
      const isGuest = appState.currentUser.isGuest;
      this.userBadge.textContent = isGuest ? this.t('guest_reporter') : appState.currentUser.name;
    }

    const role = appState.currentRole;
    const activeView = appState.activeView;

    let items = [{ view: 'home', label: this.t('nav_home') }];

    if (role === 'citizen') {
      items.push(
        { view: 'report', label: this.t('nav_report') },
        { view: 'my-reports', label: this.t('nav_stream') },
        { view: 'status', label: this.t('nav_status') }
      );
    } else if (role === 'coordinator') {
      items.push(
        { view: 'command-center', label: this.t('nav_command') },
        { view: 'incidents', label: this.t('nav_incidents') },
        { view: 'incident-detail', label: this.t('nav_incident_details') },
        { view: 'coordinator-resources', label: this.t('nav_resources') }
      );
    } else if (role === 'responder') {
      items.push(
        { view: 'responder-assignments', label: this.t('nav_assignments') },
        { view: 'responder-detail', label: this.t('nav_dossier') }
      );
    } else if (role === 'resource_manager') {
      items.push(
        { view: 'shelters', label: this.t('nav_shelters') },
        { view: 'volunteers', label: this.t('nav_volunteers') },
        { view: 'response-teams', label: this.t('nav_fleets') }
      );
    }

    if (this.navContainer) {
      this.navContainer.innerHTML = `
        <span style="font-size: 0.72rem; color: var(--text-dim); align-self: center; margin-right: 6px; font-weight: 700; text-transform: uppercase;">${this.t('role_label')}: ${role.replace('_', ' ')}</span>
        ${items.map(item => `
          <a class="nav-link ${activeView === item.view ? 'active' : ''}" onclick="window.app.navigate('${item.view}')">
            ${item.label}
          </a>
        `).join('')}
      `;
    }
  }

  render() {
    this.renderNavigation();

    const view = appState.activeView;
    let html = '';

    if (!appState.currentUser || view === 'login') {
      html = renderLoginView();
    } else {
      switch (view) {
        case 'home': html = renderLandingView(); break;
        case 'report': html = renderCitizenReportView(); break;
        case 'my-reports': html = renderCitizenMyReportsView(); break;
        case 'status': html = renderCitizenStatusView(); break;

        case 'command-center': html = renderCoordinatorCommandCenterView(); break;
        case 'incidents': html = renderCoordinatorActiveIncidentsView(); break;
        case 'incident-detail': html = renderCoordinatorIncidentDetailsView(); break;
        case 'coordinator-resources': html = renderCoordinatorResourcesView(); break;

        case 'responder-assignments': html = renderResponderAssignmentsView(); break;
        case 'responder-detail': html = renderResponderIncidentDetailsView(); break;

        case 'shelters': html = renderResourceSheltersView(); break;
        case 'volunteers': html = renderResourceVolunteersView(); break;
        case 'response-teams': html = renderResourceResponseTeamsView(); break;

        default: html = renderLandingView(); break;
      }
    }

    if (this.appContainer) {
      this.appContainer.innerHTML = html;
    }

    this.applyLanguage();
  }

  async handleReportSubmit(event) {
    event.preventDefault();
    const type = document.getElementById('emergencyType').value;
    const location = document.getElementById('location').value;
    const citizenName = document.getElementById('citizenName').value;
    const citizenPhone = document.getElementById('citizenPhone').value;
    const description = document.getElementById('description').value;
    const peopleAffected = document.getElementById('peopleAffected').value;
    const isTrapped = document.getElementById('isTrapped').checked;
    const hasMedicalEmergency = document.getElementById('hasMedicalEmergency').checked;
    const medicalDetails = document.getElementById('medicalDetails') ? document.getElementById('medicalDetails').value : '';

    const latInput = document.getElementById('gpsLat');
    const lngInput = document.getElementById('gpsLng');
    let lat = latInput ? parseFloat(latInput.value) || 23.3441 : 23.3441;
    let lng = lngInput ? parseFloat(lngInput.value) || 85.3096 : 85.3096;

    const locCoordsMatch = String(location).match(/Lat:\s*([0-9.-]+),\s*Lng:\s*([0-9.-]+)/i);
    if (locCoordsMatch) {
      lat = parseFloat(locCoordsMatch[1]);
      lng = parseFloat(locCoordsMatch[2]);
    }

    try {
      const newReport = await appState.addReport({
        emergencyType: type,
        location,
        coordinates: { lat, lng },
        citizenName,
        citizenPhone,
        description,
        peopleAffected,
        isTrapped,
        hasMedicalEmergency,
        medicalDetails
      });

      const isGuest = !appState.currentUser || appState.currentUser.isGuest;
      if (isGuest) {
        alert(this.currentLang === 'hi'
          ? `आपकी आपातकालीन पंजीकरण संख्या ${newReport.id} है। कृपया अपनी बचाव स्थिति को ट्रैक करने के लिए इस संख्या को सहेजें।`
          : `Your Emergency Registration Number is ${newReport.id}. Please save this number to track your rescue status.`);
      } else {
        alert(this.currentLang === 'hi'
          ? `आपातकालीन रिपोर्ट जमा की गई: ${newReport.id}\nप्राथमिकता स्कोर: ${newReport.priorityScore}/100.`
          : `Emergency Report Submitted: ${newReport.id}\nPriority Score: ${newReport.priorityScore}/100.`);
      }

      this.navigate('status', { reportId: newReport.id });
    } catch (e) {
      alert(this.currentLang === 'hi'
        ? 'आपातकालीन रिपोर्ट जमा करने में विफल। कृपया सुनिश्चित करें कि बैकएंड सर्वर चल रहा है।'
        : 'Failed to submit emergency report. Please ensure the backend is running at http://127.0.0.1:8000.');
    }
  }

  async verifyReportAction(reportId) {
    try {
      const incident = await appState.verifyReportToIncident(reportId);
      if (incident) {
        alert(this.currentLang === 'hi'
          ? `घटना ${incident.id} के रूप में सत्यापित। प्रतिक्रिया दल रवाना किया गया।`
          : `Verified into Incident ${incident.id}. Response team dispatched.`);
        this.navigate('incident-detail', { incidentId: incident.id });
      }
    } catch (e) {
      alert('Failed to verify report. Please check the backend connection.');
    }
  }

  async rejectReportAction(reportId) {
    if (confirm(this.currentLang === 'hi' ? 'क्या आप इस रिपोर्ट को खारिज करना चाहते हैं?' : 'Dismiss this incident report from active triage?')) {
      try {
        await appState.rejectReport(reportId);
      } catch (e) {
        alert('Failed to reject report.');
      }
    }
  }

  async assignResponderAction(incidentId, responderId) {
    try {
      await appState.assignResponderToIncident(incidentId, responderId);
      alert(this.currentLang === 'hi' ? 'प्रतिक्रिया दल सौंपा गया और मार्ग में है।' : 'Response team assigned and en route.');
    } catch (e) {
      alert('Failed to assign response team.');
    }
  }

  async updateIncidentStatusAction(incidentId, newStatus, note) {
    try {
      await appState.updateIncidentStatus(incidentId, newStatus, note);
      alert(this.currentLang === 'hi' ? `घटना की स्थिति अपडेट की गई: ${newStatus}।` : `Incident status updated to: ${newStatus}.`);
    } catch (e) {
      alert('Failed to update incident status.');
    }
  }

  async updateShelterOccupancyAction(shelterId, newOcc) {
    try {
      await appState.updateShelterOccupancy(shelterId, newOcc);
    } catch (e) {
      alert('Failed to update shelter occupancy.');
    }
  }

  async updateVolunteerStatusAction(volId, newStatus) {
    try {
      await appState.updateVolunteerStatus(volId, newStatus);
    } catch (e) {
      alert('Failed to update volunteer status.');
    }
  }

  async resetDemoData() {
    if (confirm(this.currentLang === 'hi' ? 'बैकएंड से डेमो डेटा पुनः लोड करें?' : 'Reload demo data from backend?')) {
      await appState.fetchInitialData();
      alert(this.currentLang === 'hi' ? 'डेमो डेटा बैकएंड से ताज़ा किया गया।' : 'Demo data refreshed from backend.');
    }
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    const windowEl = document.getElementById('chatWindow');
    const iconEl = document.getElementById('chatBtnIcon');
    const toggleBtn = document.getElementById('chatToggleBtn');

    if (windowEl) {
      windowEl.style.display = this.isChatOpen ? 'flex' : 'none';
      if (this.isChatOpen) {
        const input = document.getElementById('chatInput');
        if (input) input.focus();
        this.scrollChatToBottom();
      }
    }

    if (iconEl) {
      iconEl.textContent = this.isChatOpen ? '✕' : '💬';
    }

    if (toggleBtn) {
      if (this.isChatOpen) toggleBtn.classList.add('active');
      else toggleBtn.classList.remove('active');
    }
  }

  scrollChatToBottom() {
    const msgContainer = document.getElementById('chatMessages');
    if (msgContainer) {
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }
  }

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  formatBotResponse(text) {
    return this.escapeHtml(text).replace(/\n/g, '<br>');
  }

  addChatMessage(type, text) {
    const msgContainer = document.getElementById('chatMessages');
    if (!msgContainer) return;

    const msgDiv = document.createElement('div');
    if (type === 'user') {
      msgDiv.className = 'chat-msg chat-msg-user';
      msgDiv.innerHTML = `<div class="chat-bubble">${this.escapeHtml(text)}</div>`;
    } else if (type === 'system') {
      msgDiv.className = 'chat-msg chat-msg-system';
      msgDiv.innerHTML = `<div class="chat-system-bubble">${this.escapeHtml(text)}</div>`;
    } else {
      msgDiv.className = 'chat-msg chat-msg-bot';
      msgDiv.innerHTML = `<div class="chat-bubble">${this.formatBotResponse(text)}</div>`;
    }

    msgContainer.appendChild(msgDiv);
    this.scrollChatToBottom();
  }

  showChatTyping() {
    const indicator = document.getElementById('chatTypingIndicator');
    if (indicator) indicator.style.display = 'block';
    this.scrollChatToBottom();
  }

  hideChatTyping() {
    const indicator = document.getElementById('chatTypingIndicator');
    if (indicator) indicator.style.display = 'none';
  }

  async sendQuickChatMessage(text) {
    const input = document.getElementById('chatInput');
    if (input) input.value = text;
    await this.sendChatMessage(text);
  }

  async handleChatSend(event) {
    if (event) event.preventDefault();
    const input = document.getElementById('chatInput');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    await this.sendChatMessage(text);
  }

  renderChatLocationButton() {
    const quickActions = document.querySelector('.chat-quick-actions');
    if (quickActions) {
      let locBtn = document.getElementById('chatShareLocationBtn');
      if (!locBtn) {
        locBtn = document.createElement('button');
        locBtn.id = 'chatShareLocationBtn';
        locBtn.className = 'chat-quick-btn';
        locBtn.style.background = '#1E3A8A';
        locBtn.style.color = '#FFFFFF';
        locBtn.style.fontWeight = '700';
        locBtn.style.border = '1px solid #3B82F6';
        locBtn.textContent = 'Share Live Location';
        locBtn.onclick = () => window.app.shareChatLiveLocation();
        quickActions.prepend(locBtn);
      }
    }
  }

  async shareChatLiveLocation() {
    const btn = document.getElementById('chatShareLocationBtn');
    if (btn) {
      btn.textContent = 'Acquiring GPS...';
      btn.disabled = true;
    }

    if (!navigator.geolocation) {
      if (btn) {
        btn.textContent = 'Share Live Location';
        btn.disabled = false;
      }
      alert('Location access denied. Please enter your emergency address manually.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude.toFixed(4);
        const lng = position.coords.longitude.toFixed(4);
        const address = await this.reverseGeocode(lat, lng);
        const formatted = address
          ? `My exact location is: ${address} (Lat: ${lat}, Lng: ${lng})`
          : `My exact location is: Lat: ${lat}, Lng: ${lng}`;

        if (btn) {
          btn.textContent = 'Share Live Location';
          btn.disabled = false;
        }
        this.sendChatMessage(formatted);
      },
      (error) => {
        if (btn) {
          btn.textContent = 'Share Live Location';
          btn.disabled = false;
        }
        alert('Location access denied. Please enter your emergency address manually.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  async sendChatMessage(message, silent = false) {
    if (!message || this.isChatLoading) return;
    this.isChatLoading = true;

    if (!silent) {
      this.addChatMessage('user', message);
    }
    this.showChatTyping();

    this.chatHistory.push({ role: 'user', parts: [message] });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message,
          history: this.chatHistory.slice(0, -1)
        })
      });

      this.hideChatTyping();

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      const rawBotText = data.response || 'Thank you for contacting the emergency assistant.';

      const hasLocationRequest = rawBotText.includes('[REQUEST_LOCATION]') ||
        /location|coordinates|where are you|gps/i.test(rawBotText);
      const cleanBotText = rawBotText.replace(/\[REQUEST_LOCATION\]/g, '').trim();

      this.chatHistory.push({ role: 'model', parts: [rawBotText] });

      if (cleanBotText) {
        this.addChatMessage('bot', cleanBotText);
      }

      if (hasLocationRequest) {
        this.renderChatLocationButton();
      }

      if (data.auto_submit && (data.report_data || data.extracted_data)) {
        const extracted = data.report_data || data.extracted_data;
        let lat = 23.3441;
        let lng = 85.3096;

        if (extracted.coordinates && extracted.coordinates.lat && extracted.coordinates.lng) {
          lat = parseFloat(extracted.coordinates.lat);
          lng = parseFloat(extracted.coordinates.lng);
        } else {
          const locMatch = String(extracted.location || '').match(/Lat:\s*([0-9.-]+),\s*Lng:\s*([0-9.-]+)/i);
          if (locMatch) {
            lat = parseFloat(locMatch[1]);
            lng = parseFloat(locMatch[2]);
          }
        }

        const submitPayload = {
          emergencyType: extracted.emergencyType || extracted.emergency_type || 'FLOOD',
          location: extracted.location || `Lat: ${lat}, Lng: ${lng}`,
          coordinates: { lat, lng },
          citizenName: (appState.currentUser ? appState.currentUser.name : null) || extracted.citizenName || extracted.citizen_name || 'Citizen',
          citizenPhone: (appState.currentUser ? appState.currentUser.identifier : null) || extracted.citizenPhone || extracted.citizen_phone || '+91 94311 00000',
          description: extracted.description || 'Reported via Emergency Assistant',
          peopleAffected: Number(extracted.peopleAffected || extracted.people_affected || 1),
          isTrapped: Boolean(extracted.isTrapped !== undefined ? extracted.isTrapped : extracted.is_trapped),
          hasMedicalEmergency: Boolean(extracted.hasMedicalEmergency !== undefined ? extracted.hasMedicalEmergency : extracted.has_medical_emergency),
          medicalDetails: extracted.medicalDetails || extracted.medical_details || ''
        };

        try {
          const newReport = await appState.addReport(submitPayload);
          this.addChatMessage('system', 'Your emergency report has been automatically submitted to the Control Room. Registration ID: ' + newReport.id);
          if (newReport && newReport.id) {
            window.app.navigate('status', { reportId: newReport.id });
          }
        } catch (submitErr) {
          this.addChatMessage('system', 'Attempted auto-submission but failed to reach the server. Please submit the report form directly.');
        }
      }
    } catch (error) {
      this.hideChatTyping();
      this.addChatMessage('bot', 'Unable to connect to the emergency assistant service. Please verify the backend server is running.');
    } finally {
      this.isChatLoading = false;
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new AapdaSarthiApp();
});
