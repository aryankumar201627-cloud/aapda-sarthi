export const INITIAL_MOCK_REPORTS = [
  {
    "id": "RNC-1001",
    "citizenName": "john alex",
    "citizenPhone": "+91 94311 12001",
    "emergencyType": "FLOOD",
    "location": "Dhurwa, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.31043,
      "lng": 85.28211
    },
    "description": "Heavy monsoon overflow from Subarnarekha feeder drain flooded residential lane, submerging ground floors.",
    "peopleAffected": 17,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 80,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Rescue boat, dewatering pump, life jackets, barricades",
    "createdAt": "2026-01-06 10:27"
  },
  {
    "id": "RNC-1002",
    "citizenName": "Varun Sinha",
    "citizenPhone": "+91 94311 12002",
    "emergencyType": "FLOOD",
    "location": "Ashok Nagar, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.36561,
      "lng": 85.30726
    },
    "description": "Severe street inundation on road no. 4; multiple vehicles stranded and water entering shops.",
    "peopleAffected": 16,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 80,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Inflatable rafts, heavy suction pumps, sandbags",
    "createdAt": "2026-01-07 12:30"
  },
  {
    "id": "RNC-1003",
    "citizenName": "Ishita Patel",
    "citizenPhone": "+91 94311 12003",
    "emergencyType": "FLOOD",
    "location": "Main Road, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.37123,
      "lng": 85.32555
    },
    "description": "Stormwater drain collapsed near Overbridge market; ground-floor commercial establishments submerged.",
    "peopleAffected": 8,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 46,
    "status": "RESOLVED",
    "requiredResources": "High-capacity pumps, barricading tape, traffic diversion signs",
    "createdAt": "2026-01-08 15:50"
  },
  {
    "id": "RNC-1004",
    "citizenName": "Riya Sahu",
    "citizenPhone": "+91 94311 12004",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Tatisilwai, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.31015,
      "lng": 85.4092
    },
    "description": "Collision between a container trailer and a passenger bus on Tatisilwai industrial stretch.",
    "peopleAffected": 12,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Multiple trauma fractures and head lacerations",
    "priorityScore": 99,
    "status": "RESOLVED",
    "requiredResources": "Hydraulic extrication jaws, multiple ALS ambulances, triage kit",
    "createdAt": "2026-01-09 18:51"
  },
  {
    "id": "RNC-1005",
    "citizenName": "Rohan Sinha",
    "citizenPhone": "+91 94311 12005",
    "emergencyType": "GAS_LEAK",
    "location": "Hinoo, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.33065,
      "lng": 85.30925
    },
    "description": "LPG distribution pipeline rupture near residential apartment complex; strong odor causing nausea.",
    "peopleAffected": 19,
    "isTrapped": false,
    "hasMedicalEmergency": true,
    "medicalDetails": "Respiratory irritation and acute dizziness reported",
    "priorityScore": 80,
    "status": "VERIFIED",
    "requiredResources": "Hazmat breathing apparatus, leak sealing clamps, perimeter evacuation",
    "createdAt": "2026-01-10 07:59"
  },
  {
    "id": "RNC-1006",
    "citizenName": "Diya Rao",
    "citizenPhone": "+91 94311 12006",
    "emergencyType": "FIRE",
    "location": "Argora, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.3812,
      "lng": 85.34002
    },
    "description": "Major electrical transformer fire spreading to adjacent commercial complex parking.",
    "peopleAffected": 14,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 85,
    "status": "VERIFIED",
    "requiredResources": "Class-C foam tenders, electrical cutoff team, fire blankets",
    "createdAt": "2026-01-11 11:28"
  },
  {
    "id": "RNC-1007",
    "citizenName": "Ananya Khan",
    "citizenPhone": "+91 94311 12007",
    "emergencyType": "WATER_HAZARD",
    "location": "Namkum, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.34103,
      "lng": 85.36244
    },
    "description": "Sewage overflow contaminating local municipal drinking water supply line; multiple families affected.",
    "peopleAffected": 17,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 40,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Water test kits, chlorination units, mobile clean water tankers",
    "createdAt": "2026-01-12 14:22"
  },
  {
    "id": "RNC-1008",
    "citizenName": "Sneha Tiwari",
    "citizenPhone": "+91 94311 12008",
    "emergencyType": "MISSING_PERSON",
    "location": "Kanke, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.43307,
      "lng": 85.32214
    },
    "description": "Elderly villager with memory loss went missing near Kanke Dam catchment forest during storm.",
    "peopleAffected": 1,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 27,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Search team, thermal night vision drones, loud hailers",
    "createdAt": "2026-01-13 17:10"
  },
  {
    "id": "RNC-1009",
    "citizenName": "Diya Tiwari",
    "citizenPhone": "+91 94311 12009",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Morabadi, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.40135,
      "lng": 85.32575
    },
    "description": "Partial structural roof collapse of older pavilion wing during storm event.",
    "peopleAffected": 18,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Crush injuries to limbs, two individuals unconscious",
    "priorityScore": 100,
    "status": "RESOLVED",
    "requiredResources": "Hydraulic spreaders, concrete shears, stretchers, ALS ambulances",
    "createdAt": "2026-01-14 20:21"
  },
  {
    "id": "RNC-1010",
    "citizenName": "Neel Nair",
    "citizenPhone": "+91 94311 12010",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Kantatoli, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.35896,
      "lng": 85.33606
    },
    "description": "Flyover construction crane toppled across arterial roadway, trapping small delivery van.",
    "peopleAffected": 9,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Driver trapped in cab with leg trauma",
    "priorityScore": 93,
    "status": "VERIFIED",
    "requiredResources": "Heavy crane 50T, hydraulic cutters, trauma life support",
    "createdAt": "2026-01-15 08:34"
  },
  {
    "id": "RNC-1011",
    "citizenName": "Suresh Oraon",
    "citizenPhone": "+91 94311 12011",
    "emergencyType": "MEDICAL",
    "location": "Bariatu, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.38912,
      "lng": 85.35241
    },
    "description": "Mass carbon monoxide intoxication in underground hostel laundry facility; multiple students fainting.",
    "peopleAffected": 15,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Acute hypoxemia and loss of consciousness",
    "priorityScore": 95,
    "status": "RESOLVED",
    "requiredResources": "High-flow oxygen cylinders, multiple ambulances, exhaust blowers",
    "createdAt": "2026-01-16 13:14"
  },
  {
    "id": "RNC-1012",
    "citizenName": "Basanti Bhengra",
    "citizenPhone": "+91 94311 12012",
    "emergencyType": "FIRE",
    "location": "Lalpur, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.36854,
      "lng": 85.33412
    },
    "description": "Short circuit fire in top floor of shopping complex near Circular Road.",
    "peopleAffected": 22,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 85,
    "status": "VERIFIED",
    "requiredResources": "Snorkel ladder truck, smoke exhaust fans, breathing sets",
    "createdAt": "2026-01-17 16:45"
  },
  {
    "id": "RNC-1013",
    "citizenName": "Jaipal Munda",
    "citizenPhone": "+91 94311 12013",
    "emergencyType": "POWER_OUTAGE",
    "location": "Doranda, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.33521,
      "lng": 85.32042
    },
    "description": "Main 33kV substation insulator burst causing total blackout and water pump stoppage.",
    "peopleAffected": 35,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 45,
    "status": "RESOLVED",
    "requiredResources": "Heavy diesel mobile generators, substation replacement insulators",
    "createdAt": "2026-01-18 19:20"
  },
  {
    "id": "RNC-1014",
    "citizenName": "Anita Kerketta",
    "citizenPhone": "+91 94311 12014",
    "emergencyType": "FLOOD",
    "location": "Harmu, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.35412,
      "lng": 85.30821
    },
    "description": "Harmu rivulet flash surge breached boundary wall of housing colony.",
    "peopleAffected": 24,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 80,
    "status": "VERIFIED",
    "requiredResources": "Motorized rescue boats, sandbag revetment, portable pumps",
    "createdAt": "2026-01-19 22:15"
  },
  {
    "id": "RNC-1015",
    "citizenName": "Arjun Pandey",
    "citizenPhone": "+91 94311 12015",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Hatia, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.29814,
      "lng": 85.29524
    },
    "description": "Tanker carrying edible oil overturned on Hatia railway station approach road, creating severe skid hazard.",
    "peopleAffected": 6,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 42,
    "status": "RESOLVED",
    "requiredResources": "Foam washing units, sand dispersal truck, traffic diversions",
    "createdAt": "2026-01-20 06:40"
  },
  {
    "id": "RNC-1016",
    "citizenName": "Birsa Soren",
    "citizenPhone": "+91 94311 12016",
    "emergencyType": "FIRE",
    "location": "Bistupur, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.79854,
      "lng": 86.18721
    },
    "description": "Major electrical fire in commercial textile market; dense toxic smoke filling atrium.",
    "peopleAffected": 25,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Smoke inhalation, two elderly shopkeepers experiencing chest pain",
    "priorityScore": 100,
    "status": "VERIFIED",
    "requiredResources": "Aerial hydraulic platform, foam crash tender, oxygen triage bay",
    "createdAt": "2026-01-21 09:12"
  },
  {
    "id": "RNC-1017",
    "citizenName": "Amit Mahato",
    "citizenPhone": "+91 94311 12017",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Sakchi, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.80542,
      "lng": 86.20145
    },
    "description": "Old two-storey commercial godown balcony collapsed onto busy pedestrian lane.",
    "peopleAffected": 11,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Multiple lacerations and leg compression injury",
    "priorityScore": 100,
    "status": "RESOLVED",
    "requiredResources": "Hydraulic spreaders, search canine unit, ALS ambulances",
    "createdAt": "2026-01-22 11:30"
  },
  {
    "id": "RNC-1018",
    "citizenName": "Sunita Hansda",
    "citizenPhone": "+91 94311 12018",
    "emergencyType": "FLOOD",
    "location": "Mango, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.82741,
      "lng": 86.20854
    },
    "description": "Subarnarekha river swelling following dam water release; low-lying Daiguttu colony submerged.",
    "peopleAffected": 42,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 80,
    "status": "VERIFIED",
    "requiredResources": "NDRF motorized zodiac boats, life rafts, dry food packets",
    "createdAt": "2026-01-23 14:05"
  },
  {
    "id": "RNC-1019",
    "citizenName": "Priya Sharma",
    "citizenPhone": "+91 94311 12019",
    "emergencyType": "FLOOD",
    "location": "Kadma, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.78841,
      "lng": 86.16523
    },
    "description": "Kharkai river backflow inundated Shastri Nagar block; ground floors waist-deep in water.",
    "peopleAffected": 30,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 80,
    "status": "RESOLVED",
    "requiredResources": "Rescue boats, high-discharge diesel pumps, temporary lighting masts",
    "createdAt": "2026-01-24 17:40"
  },
  {
    "id": "RNC-1020",
    "citizenName": "Manoj Murmu",
    "citizenPhone": "+91 94311 12020",
    "emergencyType": "MISSING_PERSON",
    "location": "Sonari, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.81234,
      "lng": 86.16812
    },
    "description": "Two fishermen missing after boat capsize near Kharkai-Subarnarekha confluence during turbulent flow.",
    "peopleAffected": 2,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 54,
    "status": "VERIFIED",
    "requiredResources": "River patrol rescue boat, sonar locator, life buoys",
    "createdAt": "2026-01-25 08:20"
  },
  {
    "id": "RNC-1021",
    "citizenName": "Neha Bhengra",
    "citizenPhone": "+91 94311 12021",
    "emergencyType": "POWER_OUTAGE",
    "location": "Telco Colony, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.77451,
      "lng": 86.25124
    },
    "description": "Storm gale uprooted massive banyan tree, severing primary 11kV transmission feeder line.",
    "peopleAffected": 18,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 45,
    "status": "RESOLVED",
    "requiredResources": "Chainsaw clearing crew, hydraulic boom truck, power cable splice team",
    "createdAt": "2026-01-26 12:15"
  },
  {
    "id": "RNC-1022",
    "citizenName": "Sandeep Oraon",
    "citizenPhone": "+91 94311 12022",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Golmuri, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.79812,
      "lng": 86.22341
    },
    "description": "Multiple vehicle pileup involving two steel-coil transport trailers and auto-rickshaw.",
    "peopleAffected": 8,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Severe crush trauma, multiple fractures",
    "priorityScore": 91,
    "status": "VERIFIED",
    "requiredResources": "Industrial crane, hydraulic cutters, trauma resuscitation kit",
    "createdAt": "2026-01-27 15:50"
  },
  {
    "id": "RNC-1023",
    "citizenName": "Pooja Tirkey",
    "citizenPhone": "+91 94311 12023",
    "emergencyType": "FIRE",
    "location": "Jugsalai, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.76812,
      "lng": 86.18452
    },
    "description": "Scrap tire and plastic recycling unit ablaze near railway siding with massive black plume.",
    "peopleAffected": 20,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 60,
    "status": "RESOLVED",
    "requiredResources": "High-capacity foam cannons, water tenders, perimeter respirator masks",
    "createdAt": "2026-01-28 20:10"
  },
  {
    "id": "RNC-1024",
    "citizenName": "Rahul Singh",
    "citizenPhone": "+91 94311 12024",
    "emergencyType": "MEDICAL",
    "location": "Baridih, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.81421,
      "lng": 86.24152
    },
    "description": "Outbreak of acute gastroenteritis in settlement following localized municipal pipe contamination.",
    "peopleAffected": 28,
    "isTrapped": false,
    "hasMedicalEmergency": true,
    "medicalDetails": "Severe dehydration, pediatric cases requiring IV fluids",
    "priorityScore": 70,
    "status": "RESOLVED",
    "requiredResources": "Mobile medical dispensary, IV saline supplies, ORS packets",
    "createdAt": "2026-01-29 09:30"
  },
  {
    "id": "RNC-1025",
    "citizenName": "Md. Imran",
    "citizenPhone": "+91 94311 12025",
    "emergencyType": "GAS_LEAK",
    "location": "Adityapur, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.78452,
      "lng": 86.15241
    },
    "description": "Anhydrous ammonia gas cylinder leakage during transfer at chemical processing unit.",
    "peopleAffected": 15,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Severe ocular burning, laryngospasm and coughing",
    "priorityScore": 100,
    "status": "VERIFIED",
    "requiredResources": "Level-A Hazmat suits, ammonia water fog sprayers, evacuation bus",
    "createdAt": "2026-01-30 11:45"
  },
  {
    "id": "RNC-1026",
    "citizenName": "Kavita Sen",
    "citizenPhone": "+91 94311 12026",
    "emergencyType": "WATER_HAZARD",
    "location": "Gamharia, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.80121,
      "lng": 86.11024
    },
    "description": "Industrial effluent holding pond overflowed during flash storm, threatening agricultural lands.",
    "peopleAffected": 12,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 39,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Earthen bund excavators, neutralization chemicals, water testing",
    "createdAt": "2026-01-31 14:10"
  },
  {
    "id": "RNC-1027",
    "citizenName": "Deepak Mahto",
    "citizenPhone": "+91 94311 12027",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Parsudih, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.75412,
      "lng": 86.20124
    },
    "description": "Cement dumper truck overturned onto light passenger vehicle near Krishi Upaj Mandi.",
    "peopleAffected": 5,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Driver trapped under cabin structure",
    "priorityScore": 85,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Heavy recovery crane, rescue shears, spinal backboards",
    "createdAt": "2026-02-01 16:35"
  },
  {
    "id": "RNC-1028",
    "citizenName": "Anjali Dubey",
    "citizenPhone": "+91 94311 12028",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Sidhgora, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.81052,
      "lng": 86.22851
    },
    "description": "Under-construction warehouse roof framework collapsed under gusty winds.",
    "peopleAffected": 7,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 79,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Steel beam cutters, mobile spotlights, search equipment",
    "createdAt": "2026-02-02 18:50"
  },
  {
    "id": "RNC-1029",
    "citizenName": "Sanjay Soren",
    "citizenPhone": "+91 94311 12029",
    "emergencyType": "FLOOD",
    "location": "Birsanagar, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.79152,
      "lng": 86.26241
    },
    "description": "Stormwater nullah blocked by debris causing flash flooding in Zone 4 residential cluster.",
    "peopleAffected": 16,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 55,
    "status": "RESOLVED",
    "requiredResources": "Backhoe loaders for nullah dredging, dewatering pumps, sandbags",
    "createdAt": "2026-02-03 07:15"
  },
  {
    "id": "RNC-1030",
    "citizenName": "Alok Goswami",
    "citizenPhone": "+91 94311 12030",
    "emergencyType": "MEDICAL",
    "location": "Sakchi, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.80682,
      "lng": 86.20312
    },
    "description": "Heat collapse of multiple traffic wardens and citizens at intersection due to extreme heatwave.",
    "peopleAffected": 9,
    "isTrapped": false,
    "hasMedicalEmergency": true,
    "medicalDetails": "Severe hyperthermia, delirium and fainting",
    "priorityScore": 63,
    "status": "RESOLVED",
    "requiredResources": "Cooling mist stations, cold saline infusions, ALS ambulance",
    "createdAt": "2026-02-04 13:20"
  },
  {
    "id": "RNC-1031",
    "citizenName": "Bikram Das",
    "citizenPhone": "+91 94311 12031",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Bank More, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.78921,
      "lng": 86.41852
    },
    "description": "Dilapidated four-storey commercial building rear section collapsed onto parking courtyard.",
    "peopleAffected": 16,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Crush injuries to 4 security personnel, deep lacerations",
    "priorityScore": 100,
    "status": "VERIFIED",
    "requiredResources": "Heavy concrete breakers, search cameras, structural shoring timbers",
    "createdAt": "2026-01-10 10:15"
  },
  {
    "id": "RNC-1032",
    "citizenName": "Sita Devi",
    "citizenPhone": "+91 94311 12032",
    "emergencyType": "GAS_LEAK",
    "location": "Jharia, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.74212,
      "lng": 86.41524
    },
    "description": "Underground coal fire breach emitting toxic carbon monoxide and sulfur dioxide into residential basti.",
    "peopleAffected": 32,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Severe respiratory distress, asphyxiation symptoms",
    "priorityScore": 100,
    "status": "VERIFIED",
    "requiredResources": "Self-contained breathing apparatus, air sampling monitors, evacuation fleet",
    "createdAt": "2026-01-11 14:40"
  },
  {
    "id": "RNC-1033",
    "citizenName": "Rajesh Agarwal",
    "citizenPhone": "+91 94311 12033",
    "emergencyType": "FIRE",
    "location": "Saraidhela, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.82145,
      "lng": 86.45214
    },
    "description": "Major electrical fire in 8th floor of residential apartment tower; residents trapped on balconies.",
    "peopleAffected": 28,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 85,
    "status": "RESOLVED",
    "requiredResources": "Turn-table ladder 42m, high-pressure foam tenders, smoke masks",
    "createdAt": "2026-01-12 18:25"
  },
  {
    "id": "RNC-1034",
    "citizenName": "Amitabh Mukherjee",
    "citizenPhone": "+91 94311 12034",
    "emergencyType": "POWER_OUTAGE",
    "location": "Hirapur, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.80124,
      "lng": 86.43541
    },
    "description": "33kV main transformer explosion leaving critical hospital and water supply grid paralyzed.",
    "peopleAffected": 40,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 45,
    "status": "RESOLVED",
    "requiredResources": "Mobile generator 500kVA, emergency transformer van, high-voltage splice crew",
    "createdAt": "2026-01-13 21:50"
  },
  {
    "id": "RNC-1035",
    "citizenName": "Manoj Pandey",
    "citizenPhone": "+91 94311 12035",
    "emergencyType": "FLOOD",
    "location": "Katras, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.81524,
      "lng": 86.28412
    },
    "description": "Damodar river tributary surged, inundating low-lying coal workers colony and railway siding.",
    "peopleAffected": 25,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 80,
    "status": "VERIFIED",
    "requiredResources": "Inflatable rescue dinghies, high-capacity diesel dewatering pumps",
    "createdAt": "2026-01-14 06:30"
  },
  {
    "id": "RNC-1036",
    "citizenName": "Pooja Roy",
    "citizenPhone": "+91 94311 12036",
    "emergencyType": "GAS_LEAK",
    "location": "Sindri, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.65214,
      "lng": 86.51241
    },
    "description": "Ammonia vapor plume detected from flange valve at chemical fertilizer facility.",
    "peopleAffected": 18,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Eye burn, acute bronchospasm reported in nearby quarters",
    "priorityScore": 100,
    "status": "RESOLVED",
    "requiredResources": "Hazmat response team, neutralizing spray curtains, oxygen resuscitation",
    "createdAt": "2026-01-15 11:10"
  },
  {
    "id": "RNC-1037",
    "citizenName": "Sunil Marandi",
    "citizenPhone": "+91 94311 12037",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Govindpur, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.83412,
      "lng": 86.52145
    },
    "description": "Coal carrier truck collision with passenger minibus on GT Road NH-2; highway blocked.",
    "peopleAffected": 14,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Multiple polytrauma victims requiring immediate stabilization",
    "priorityScore": 100,
    "status": "RESOLVED",
    "requiredResources": "Hydraulic spreaders, multiple critical care ambulances, highway cranes",
    "createdAt": "2026-01-16 15:45"
  },
  {
    "id": "RNC-1038",
    "citizenName": "Anand Verma",
    "citizenPhone": "+91 94311 12038",
    "emergencyType": "FIRE",
    "location": "Bartand, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.80854,
      "lng": 86.42851
    },
    "description": "Blaze in underground commercial market near inter-state bus stand.",
    "peopleAffected": 21,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 85,
    "status": "VERIFIED",
    "requiredResources": "Smoke extraction blowers, breathing apparatus sets, water foam tenders",
    "createdAt": "2026-01-17 19:15"
  },
  {
    "id": "RNC-1039",
    "citizenName": "Kiran Mahto",
    "citizenPhone": "+91 94311 12039",
    "emergencyType": "LANDSLIDE",
    "location": "Putki, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.76541,
      "lng": 86.34521
    },
    "description": "Overburden dump slide at opencast mine slid onto adjoining access road and utility lines.",
    "peopleAffected": 12,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 79,
    "status": "RESOLVED",
    "requiredResources": "Heavy earthmovers, bulldozers, slope stabilization rock-bolters",
    "createdAt": "2026-01-18 08:40"
  },
  {
    "id": "RNC-1040",
    "citizenName": "Md. Aslam",
    "citizenPhone": "+91 94311 12040",
    "emergencyType": "WATER_HAZARD",
    "location": "Dhansar, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.77412,
      "lng": 86.41824
    },
    "description": "Abandoned mining pit water breach overflowed into drinking water pond, turning water turbid and acidic.",
    "peopleAffected": 22,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 40,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Water neutralization chemicals, mobile tankers, water filtration units",
    "createdAt": "2026-01-19 12:05"
  },
  {
    "id": "RNC-1041",
    "citizenName": "Geeta Devi",
    "citizenPhone": "+91 94311 12041",
    "emergencyType": "MEDICAL",
    "location": "Matkuria, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.78214,
      "lng": 86.40952
    },
    "description": "Severe outbreak of waterborne acute diarrhea affecting multiple families in densely packed ward.",
    "peopleAffected": 19,
    "isTrapped": false,
    "hasMedicalEmergency": true,
    "medicalDetails": "Dehydration in elderly and children, IV saline needed",
    "priorityScore": 70,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Mobile medical health van, ORS supplies, water chlorination kits",
    "createdAt": "2026-01-20 16:30"
  },
  {
    "id": "RNC-1042",
    "citizenName": "Rakesh Soren",
    "citizenPhone": "+91 94311 12042",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Kenduadih, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.77124,
      "lng": 86.38421
    },
    "description": "Subsidence-induced crack caused partial wall failure of community primary school.",
    "peopleAffected": 8,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 81,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Hydraulic jacks, shoring props, safety perimeter barriers",
    "createdAt": "2026-02-01 09:20"
  },
  {
    "id": "RNC-1043",
    "citizenName": "Manish Singh",
    "citizenPhone": "+91 94311 12043",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Saraidhela, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.82412,
      "lng": 86.45512
    },
    "description": "Oil transport tanker overturned on Dhanbad-Govindpur link road; fuel spilling into culvert.",
    "peopleAffected": 4,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 38,
    "status": "RESOLVED",
    "requiredResources": "Chemical foam blanket, sand spreaders, hazardous cleanup team",
    "createdAt": "2026-02-02 14:15"
  },
  {
    "id": "RNC-1044",
    "citizenName": "Basudev Murmu",
    "citizenPhone": "+91 94311 12044",
    "emergencyType": "MISSING_PERSON",
    "location": "Jharia, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.74612,
      "lng": 86.41912
    },
    "description": "Two teenagers missing after exploring perimeter of active mining subsidence exclusion zone.",
    "peopleAffected": 2,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 29,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Mine rescue specialized search team, drone thermal sensors",
    "createdAt": "2026-02-03 17:50"
  },
  {
    "id": "RNC-1045",
    "citizenName": "Praveen Sharma",
    "citizenPhone": "+91 94311 12045",
    "emergencyType": "FIRE",
    "location": "Bank More, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.79152,
      "lng": 86.42142
    },
    "description": "Electrical cable duct fire inside underground commercial shopping tunnel.",
    "peopleAffected": 15,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 85,
    "status": "RESOLVED",
    "requiredResources": "Carbon dioxide extinguisher batteries, smoke extraction ducts",
    "createdAt": "2026-02-04 21:10"
  },
  {
    "id": "RNC-1046",
    "citizenName": "Vikram Rathore",
    "citizenPhone": "+91 94311 12046",
    "emergencyType": "FIRE",
    "location": "Sector 4, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.66851,
      "lng": 86.15241
    },
    "description": "Industrial scrap yard fire spreading toward commercial shopping arcade; high radiant heat.",
    "peopleAffected": 22,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 85,
    "status": "VERIFIED",
    "requiredResources": "Industrial foam monitors, water tenders, high-pressure hose lines",
    "createdAt": "2026-01-14 11:20"
  },
  {
    "id": "RNC-1047",
    "citizenName": "Arun Mahato",
    "citizenPhone": "+91 94311 12047",
    "emergencyType": "POWER_OUTAGE",
    "location": "Sector 1, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.68214,
      "lng": 86.13421
    },
    "description": "High-voltage grid cable snapped by heavy crane impact, plunging two sectors into darkness.",
    "peopleAffected": 35,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 45,
    "status": "RESOLVED",
    "requiredResources": "Boom lift trucks, high-tension cable jointers, heavy generators",
    "createdAt": "2026-01-15 15:45"
  },
  {
    "id": "RNC-1048",
    "citizenName": "Rameshwar Tudu",
    "citizenPhone": "+91 94311 12048",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Sector 9, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.69124,
      "lng": 86.11541
    },
    "description": "Abandoned cooling tower pump-house wall collapsed during heavy rainstorm.",
    "peopleAffected": 6,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Crush injury to lower extremities, severe blood loss",
    "priorityScore": 97,
    "status": "RESOLVED",
    "requiredResources": "Hydraulic spreaders, concrete cutters, ALS trauma ambulance",
    "createdAt": "2026-01-16 19:10"
  },
  {
    "id": "RNC-1049",
    "citizenName": "Sunita Soren",
    "citizenPhone": "+91 94311 12049",
    "emergencyType": "FLOOD",
    "location": "Sector 12, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.65421,
      "lng": 86.17852
    },
    "description": "Garga dam discharge caused sudden water surge into low-lying Sector 12 residential quarters.",
    "peopleAffected": 32,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 80,
    "status": "VERIFIED",
    "requiredResources": "Motorized inflatable boats, life vests, sandbag barriers",
    "createdAt": "2026-01-17 08:30"
  },
  {
    "id": "RNC-1050",
    "citizenName": "Md. Farooque",
    "citizenPhone": "+91 94311 12050",
    "emergencyType": "GAS_LEAK",
    "location": "Chas, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.63521,
      "lng": 86.18214
    },
    "description": "Ammonia cylinder valve sheared at cold storage facility near Chas bypass.",
    "peopleAffected": 18,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Chemical conjunctivitis, respiratory distress",
    "priorityScore": 100,
    "status": "RESOLVED",
    "requiredResources": "Level-A Hazmat team, vapor suppression water curtains, oxygen kits",
    "createdAt": "2026-01-18 13:15"
  },
  {
    "id": "RNC-1051",
    "citizenName": "Kishore Soren",
    "citizenPhone": "+91 94311 12051",
    "emergencyType": "LANDSLIDE",
    "location": "Bermo, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.77852,
      "lng": 85.94521
    },
    "description": "Konar river embankment slope failed, burying coal transportation rail tracks and road.",
    "peopleAffected": 14,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 80,
    "status": "VERIFIED",
    "requiredResources": "Heavy excavators, hydraulic rock breakers, soil stabilization crews",
    "createdAt": "2026-01-19 17:40"
  },
  {
    "id": "RNC-1052",
    "citizenName": "Dinesh Karmakar",
    "citizenPhone": "+91 94311 12052",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Phusro, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.76521,
      "lng": 86.01245
    },
    "description": "Multi-truck pileup on Phusro-Gumia ghat road; two drivers pinned in cabins.",
    "peopleAffected": 9,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Multiple compound fractures, internal abdominal trauma",
    "priorityScore": 93,
    "status": "RESOLVED",
    "requiredResources": "Hydraulic cutters, trauma extrication unit, mobile intensive care",
    "createdAt": "2026-01-20 22:05"
  },
  {
    "id": "RNC-1053",
    "citizenName": "Anjali Kumari",
    "citizenPhone": "+91 94311 12053",
    "emergencyType": "FIRE",
    "location": "Balidih, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.68124,
      "lng": 86.08541
    },
    "description": "Transformer oil recycling plant engulfed in flames with risk of explosion.",
    "peopleAffected": 26,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 60,
    "status": "RESOLVED",
    "requiredResources": "Dry chemical powder crash tenders, high-expansion foam generators",
    "createdAt": "2026-01-21 07:50"
  },
  {
    "id": "RNC-1054",
    "citizenName": "Subhash Mahato",
    "citizenPhone": "+91 94311 12054",
    "emergencyType": "WATER_HAZARD",
    "location": "Chandrapura, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.74852,
      "lng": 86.12451
    },
    "description": "Damodar river cooling pond outflow channel breached, flooding pump house basement.",
    "peopleAffected": 11,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 62,
    "status": "VERIFIED",
    "requiredResources": "Submersible high-head pumps, coffer dam sandbags, diving crew",
    "createdAt": "2026-01-22 12:20"
  },
  {
    "id": "RNC-1055",
    "citizenName": "Birbal Hansda",
    "citizenPhone": "+91 94311 12055",
    "emergencyType": "MISSING_PERSON",
    "location": "Gomia, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.80124,
      "lng": 85.83421
    },
    "description": "Three children separated while playing near Konar reservoir forest boundary.",
    "peopleAffected": 3,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 31,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Forest search teams, tracking dogs, night illumination drones",
    "createdAt": "2026-01-23 16:35"
  },
  {
    "id": "RNC-1056",
    "citizenName": "Manish Pandey",
    "citizenPhone": "+91 94311 12056",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Camp 2, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.67124,
      "lng": 86.14251
    },
    "description": "School bus rear-ended by speeding tipper truck at Camp 2 roundabout.",
    "peopleAffected": 15,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Mild head trauma, pediatric limb contusions",
    "priorityScore": 100,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Multiple ambulances, pediatric triage kits, traffic diversion",
    "createdAt": "2026-02-01 08:15"
  },
  {
    "id": "RNC-1057",
    "citizenName": "Sangeeta Devi",
    "citizenPhone": "+91 94311 12057",
    "emergencyType": "MEDICAL",
    "location": "Cooperative Colony, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.66214,
      "lng": 86.16852
    },
    "description": "Sudden food toxicity at large wedding banquet with over 30 guests exhibiting vomiting.",
    "peopleAffected": 30,
    "isTrapped": false,
    "hasMedicalEmergency": true,
    "medicalDetails": "Severe acute dehydration and gastroenteritis",
    "priorityScore": 70,
    "status": "RESOLVED",
    "requiredResources": "Mobile medical response team, IV fluid drips, antiemetics",
    "createdAt": "2026-02-02 13:40"
  },
  {
    "id": "RNC-1058",
    "citizenName": "Rajesh Jha",
    "citizenPhone": "+91 94311 12058",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Sector 4, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.67012,
      "lng": 86.15512
    },
    "description": "Balcony railing and facade collapsed from old market block onto sidewalk.",
    "peopleAffected": 4,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 48,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Debris clearing team, safety barricades, structural audit unit",
    "createdAt": "2026-02-03 16:10"
  },
  {
    "id": "RNC-1059",
    "citizenName": "Pawan Agarwal",
    "citizenPhone": "+91 94311 12059",
    "emergencyType": "FIRE",
    "location": "Chas, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.63812,
      "lng": 86.18542
    },
    "description": "Commercial electronics warehouse fire near Chas wholesale market.",
    "peopleAffected": 16,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 85,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Water tenders, smoke venting equipment, emergency power cutoff",
    "createdAt": "2026-02-04 19:45"
  },
  {
    "id": "RNC-1060",
    "citizenName": "Rohit Soren",
    "citizenPhone": "+91 94311 12060",
    "emergencyType": "LANDSLIDE",
    "location": "Canary Hill Road, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 24.01245,
      "lng": 85.38521
    },
    "description": "Heavy boulder and mud slide triggered by rain blocked Canary Hill tourist road.",
    "peopleAffected": 14,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 80,
    "status": "VERIFIED",
    "requiredResources": "Earthmoving excavators, rock splitters, slope netting crew",
    "createdAt": "2026-01-18 09:10"
  },
  {
    "id": "RNC-1061",
    "citizenName": "Poonam Devi",
    "citizenPhone": "+91 94311 12061",
    "emergencyType": "FIRE",
    "location": "Matwari, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.99852,
      "lng": 85.36124
    },
    "description": "Major fire broke out in coaching institute commercial complex; students trapped on upper floor.",
    "peopleAffected": 28,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Smoke inhalation, burns to arms, panic injuries",
    "priorityScore": 100,
    "status": "RESOLVED",
    "requiredResources": "Hydraulic rescue ladder, foam tenders, oxygen therapy masks",
    "createdAt": "2026-01-19 13:30"
  },
  {
    "id": "RNC-1062",
    "citizenName": "Sanjay Mahto",
    "citizenPhone": "+91 94311 12062",
    "emergencyType": "FLOOD",
    "location": "Korrah, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.98521,
      "lng": 85.37852
    },
    "description": "Konar tributary overflowing, inundating low-lying residential layouts in Korrah extension.",
    "peopleAffected": 20,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 80,
    "status": "VERIFIED",
    "requiredResources": "Dewatering pumps, rescue dinghies, sandbag barriers",
    "createdAt": "2026-01-20 17:15"
  },
  {
    "id": "RNC-1063",
    "citizenName": "Md. Shahbaz",
    "citizenPhone": "+91 94311 12063",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Pelawal, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 24.00852,
      "lng": 85.33412
    },
    "description": "Head-on collision between passenger bus and stone quarry dumper on Pelawal road.",
    "peopleAffected": 16,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Multiple critical polytrauma patients, severe hemorrhaging",
    "priorityScore": 100,
    "status": "RESOLVED",
    "requiredResources": "Heavy extrication jaws, ALS ambulances, rapid blood transport unit",
    "createdAt": "2026-01-21 21:40"
  },
  {
    "id": "RNC-1064",
    "citizenName": "Prakash Yadav",
    "citizenPhone": "+91 94311 12064",
    "emergencyType": "GAS_LEAK",
    "location": "Demotand, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.94521,
      "lng": 85.38952
    },
    "description": "LPG bulk tanker valve leak while parked near highway dhaba corridor.",
    "peopleAffected": 12,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 59,
    "status": "RESOLVED",
    "requiredResources": "Hazardous material containment crew, water fog spray, gas detection monitors",
    "createdAt": "2026-01-22 07:25"
  },
  {
    "id": "RNC-1065",
    "citizenName": "Anita Das",
    "citizenPhone": "+91 94311 12065",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Okni, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.99124,
      "lng": 85.35421
    },
    "description": "Old residential masonry building boundary and veranda collapsed onto alleyway.",
    "peopleAffected": 7,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 79,
    "status": "VERIFIED",
    "requiredResources": "Shoring beams, rubble clearance team, emergency lighting masts",
    "createdAt": "2026-01-23 11:50"
  },
  {
    "id": "RNC-1066",
    "citizenName": "Rajendra Prasad",
    "citizenPhone": "+91 94311 12066",
    "emergencyType": "POWER_OUTAGE",
    "location": "Hurhuru, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.98412,
      "lng": 85.34215
    },
    "description": "Severe thunderstorm toppled 4 high-tension transmission towers near Hurhuru.",
    "peopleAffected": 32,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 45,
    "status": "RESOLVED",
    "requiredResources": "Heavy tower erection crane, replacement cross-arms, mobile diesel generators",
    "createdAt": "2026-01-24 16:15"
  },
  {
    "id": "RNC-1067",
    "citizenName": "Vikas Gupta",
    "citizenPhone": "+91 94311 12067",
    "emergencyType": "FIRE",
    "location": "Sadar Bazar, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.99541,
      "lng": 85.36952
    },
    "description": "Night fire in dense wholesale grain and spice godown market.",
    "peopleAffected": 19,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 85,
    "status": "RESOLVED",
    "requiredResources": "Foam fire engines, high-pressure hose relays, breathing apparatus",
    "createdAt": "2026-01-25 20:30"
  },
  {
    "id": "RNC-1068",
    "citizenName": "Kailash Murmu",
    "citizenPhone": "+91 94311 12068",
    "emergencyType": "MISSING_PERSON",
    "location": "Mandai Khurd, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 24.01521,
      "lng": 85.35241
    },
    "description": "Hiker missing in dense Sal forest near Canary hill ridgeline after sudden cloudburst.",
    "peopleAffected": 1,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 27,
    "status": "VERIFIED",
    "requiredResources": "Mountain search and rescue squad, thermal UAVs, tracker dogs",
    "createdAt": "2026-01-26 08:45"
  },
  {
    "id": "RNC-1069",
    "citizenName": "Amitabh Sinha",
    "citizenPhone": "+91 94311 12069",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Barhi, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 24.29852,
      "lng": 85.42514
    },
    "description": "Multiple truck pileup on Grand Trunk Road NH-2 near Barhi toll plaza during thick fog.",
    "peopleAffected": 15,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Severe crush fractures and respiratory trauma",
    "priorityScore": 100,
    "status": "RESOLVED",
    "requiredResources": "Heavy highway wreckers, hydraulic rescue spreaders, ALS ambulances",
    "createdAt": "2026-01-27 12:10"
  },
  {
    "id": "RNC-1070",
    "citizenName": "Dr. Meenakshi Roy",
    "citizenPhone": "+91 94311 12070",
    "emergencyType": "MEDICAL",
    "location": "Matwari, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.99912,
      "lng": 85.36341
    },
    "description": "Cluster of severe respiratory syncytial infections in community shelter requiring oxygen triage.",
    "peopleAffected": 18,
    "isTrapped": false,
    "hasMedicalEmergency": true,
    "medicalDetails": "Pediatric respiratory distress and high fever",
    "priorityScore": 70,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Pediatric nebulizers, oxygen concentrators, pediatric antibiotics",
    "createdAt": "2026-02-01 10:30"
  },
  {
    "id": "RNC-1071",
    "citizenName": "Binod Kumar",
    "citizenPhone": "+91 94311 12071",
    "emergencyType": "WATER_HAZARD",
    "location": "Korrah, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.98741,
      "lng": 85.37912
    },
    "description": "Old stone quarry pit filled with rainwater breached its edge, flooding agricultural fields.",
    "peopleAffected": 10,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 35,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Sandbag revetment crew, high-discharge pumps, trenching excavators",
    "createdAt": "2026-02-02 14:20"
  },
  {
    "id": "RNC-1072",
    "citizenName": "Hemant Soren",
    "citizenPhone": "+91 94311 12072",
    "emergencyType": "MISSING_PERSON",
    "location": "Canary Hill Road, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 24.01412,
      "lng": 85.38712
    },
    "description": "Forest trekker separated from group near sunset during fog descent.",
    "peopleAffected": 2,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 29,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Search squad, searchlights, audio signaling sirens",
    "createdAt": "2026-02-03 18:00"
  },
  {
    "id": "RNC-1073",
    "citizenName": "Nasir Hussain",
    "citizenPhone": "+91 94311 12073",
    "emergencyType": "FIRE",
    "location": "Pelawal, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 24.01012,
      "lng": 85.33612
    },
    "description": "Lumber mill scrap timber yard fire with high wind hazard.",
    "peopleAffected": 13,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 60,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Water tankers, foam nozzles, earth barrier creators",
    "createdAt": "2026-02-04 22:15"
  },
  {
    "id": "RNC-1074",
    "citizenName": "Govind Pandey",
    "citizenPhone": "+91 94311 12074",
    "emergencyType": "MEDICAL",
    "location": "Tower Chowk, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.48952,
      "lng": 86.69852
    },
    "description": "Massive crowd surge during Shravani festival leading to stampede risk and heat collapse.",
    "peopleAffected": 35,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Multiple crush asphyxia symptoms, severe dehydration, syncope",
    "priorityScore": 95,
    "status": "VERIFIED",
    "requiredResources": "Mass casualty triage tent, ALS ambulances, cardiac defibrillators, oxygen",
    "createdAt": "2026-01-22 08:30"
  },
  {
    "id": "RNC-1075",
    "citizenName": "Rameshwar Jha",
    "citizenPhone": "+91 94311 12075",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Jasidih, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.51852,
      "lng": 86.64521
    },
    "description": "Pilgrim transport bus overturned on Jasidih-Deoghar bypass road.",
    "peopleAffected": 22,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Multiple trauma injuries, limb fractures, head lacerations",
    "priorityScore": 100,
    "status": "RESOLVED",
    "requiredResources": "Hydraulic spreaders, fleet of ambulances, emergency blood transport",
    "createdAt": "2026-01-23 12:45"
  },
  {
    "id": "RNC-1076",
    "citizenName": "Anjali Mishra",
    "citizenPhone": "+91 94311 12076",
    "emergencyType": "FIRE",
    "location": "Castairs Town, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.48124,
      "lng": 86.70821
    },
    "description": "Fire in four-storey pilgrim guest house complex due to electrical kitchen overload.",
    "peopleAffected": 26,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Smoke inhalation, second-degree burns to hands",
    "priorityScore": 100,
    "status": "RESOLVED",
    "requiredResources": "Aerial ladder platform, foam tenders, emergency evacuation chutes",
    "createdAt": "2026-01-24 17:10"
  },
  {
    "id": "RNC-1077",
    "citizenName": "Manoj Dubey",
    "citizenPhone": "+91 94311 12077",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Williams Town, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.47541,
      "lng": 86.69214
    },
    "description": "Old heritage dharamsala verandah structure collapsed onto courtyard walkway.",
    "peopleAffected": 12,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 89,
    "status": "VERIFIED",
    "requiredResources": "Hydraulic jacks, concrete shears, stretchers, canine search",
    "createdAt": "2026-01-25 21:20"
  },
  {
    "id": "RNC-1078",
    "citizenName": "Sita Devi",
    "citizenPhone": "+91 94311 12078",
    "emergencyType": "FLOOD",
    "location": "Baijnathpur, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.49521,
      "lng": 86.71452
    },
    "description": "Dharua river flash flood breached temporary pilgrim encampment area.",
    "peopleAffected": 30,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 80,
    "status": "RESOLVED",
    "requiredResources": "Rescue boats, dry food packs, high-capacity dewatering pumps",
    "createdAt": "2026-01-26 06:15"
  },
  {
    "id": "RNC-1079",
    "citizenName": "Rajeev Ranjan",
    "citizenPhone": "+91 94311 12079",
    "emergencyType": "POWER_OUTAGE",
    "location": "Rohini, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.45214,
      "lng": 86.63421
    },
    "description": "Lightning strike destroyed 33kV substation busbar, cutting power to water filtration hub.",
    "peopleAffected": 25,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 45,
    "status": "RESOLVED",
    "requiredResources": "Mobile generator 250kVA, high-voltage busbar repair van",
    "createdAt": "2026-01-27 10:40"
  },
  {
    "id": "RNC-1080",
    "citizenName": "Pratima Das",
    "citizenPhone": "+91 94311 12080",
    "emergencyType": "MISSING_PERSON",
    "location": "Satsang Nagar, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.47124,
      "lng": 86.68952
    },
    "description": "Seven-year-old child separated from family in massive temple queue crowd.",
    "peopleAffected": 1,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 27,
    "status": "RESOLVED",
    "requiredResources": "Pilgrim safety patrol, public address broadcast network, CCTV tracking",
    "createdAt": "2026-01-28 15:05"
  },
  {
    "id": "RNC-1081",
    "citizenName": "Santosh Kumar",
    "citizenPhone": "+91 94311 12081",
    "emergencyType": "WATER_HAZARD",
    "location": "Bilasi Town, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.48541,
      "lng": 86.71214
    },
    "description": "Contamination of holy water distribution tank with municipal drain leakage.",
    "peopleAffected": 20,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 40,
    "status": "VERIFIED",
    "requiredResources": "Tank drainage pumps, chlorine dosing system, alternative clean water tankers",
    "createdAt": "2026-01-29 19:30"
  },
  {
    "id": "RNC-1082",
    "citizenName": "Virendra Singh",
    "citizenPhone": "+91 94311 12082",
    "emergencyType": "FIRE",
    "location": "Kunda, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.46214,
      "lng": 86.73521
    },
    "description": "Extensive grassland and makeshift souvenir stall fire along bypass corridor.",
    "peopleAffected": 18,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 60,
    "status": "RESOLVED",
    "requiredResources": "Brush fire beaters, water tenders, fire break plows",
    "createdAt": "2026-01-30 08:15"
  },
  {
    "id": "RNC-1083",
    "citizenName": "Babulal Soren",
    "citizenPhone": "+91 94311 12083",
    "emergencyType": "LANDSLIDE",
    "location": "Mohanpur, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.54214,
      "lng": 86.78214
    },
    "description": "Trikut hill foothills road blocked by heavy rockfall following torrential downpour.",
    "peopleAffected": 11,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 77,
    "status": "VERIFIED",
    "requiredResources": "Hydraulic rock splitters, front-end loaders, road clearing crew",
    "createdAt": "2026-01-31 13:00"
  },
  {
    "id": "RNC-1084",
    "citizenName": "Alok Kumar",
    "citizenPhone": "+91 94311 12084",
    "emergencyType": "MEDICAL",
    "location": "Tower Chowk, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.49012,
      "lng": 86.69952
    },
    "description": "Sudden heatstroke and cardiac arrest of an elderly pilgrim near temple north gate.",
    "peopleAffected": 1,
    "isTrapped": false,
    "hasMedicalEmergency": true,
    "medicalDetails": "Cardiac arrest, CPR in progress, defibrillator needed",
    "priorityScore": 47,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Advanced Life Support ambulance, automated external defibrillator",
    "createdAt": "2026-02-01 11:20"
  },
  {
    "id": "RNC-1085",
    "citizenName": "Pankaj Sharma",
    "citizenPhone": "+91 94311 12085",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Jasidih, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.52012,
      "lng": 86.64712
    },
    "description": "Three-wheeler auto and electric bus collision near Jasidih railway station exit.",
    "peopleAffected": 8,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Multiple blunt trauma and minor scalp lacerations",
    "priorityScore": 91,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Trauma ambulances, patient backboards, traffic safety unit",
    "createdAt": "2026-02-02 15:40"
  },
  {
    "id": "RNC-1086",
    "citizenName": "Manju Devi",
    "citizenPhone": "+91 94311 12086",
    "emergencyType": "MISSING_PERSON",
    "location": "Kunda, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.46512,
      "lng": 86.73712
    },
    "description": "Elderly female pilgrim with hearing impairment missing from tour bus group.",
    "peopleAffected": 1,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 27,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "PA system announcement unit, pilgrim verification squad",
    "createdAt": "2026-02-03 19:10"
  },
  {
    "id": "RNC-1087",
    "citizenName": "Deepak Verma",
    "citizenPhone": "+91 94311 12087",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Castairs Town, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.48312,
      "lng": 86.71012
    },
    "description": "Retaining wall collapsed onto parking lot damaging 4 vehicles.",
    "peopleAffected": 3,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 46,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Debris loader, security barricades, civil structural inspector",
    "createdAt": "2026-02-04 22:50"
  },
  {
    "id": "RNC-1088",
    "citizenName": "Shambhu Bhagat",
    "citizenPhone": "+91 94311 12088",
    "emergencyType": "FIRE",
    "location": "Tin Bazar, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.26852,
      "lng": 87.25421
    },
    "description": "Major fire in historic wooden-frame fabric and tailoring market in central Dumka.",
    "peopleAffected": 24,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 85,
    "status": "VERIFIED",
    "requiredResources": "Foam tenders, narrow-alley water mist quads, smoke exhaust fans",
    "createdAt": "2026-01-26 10:20"
  },
  {
    "id": "RNC-1089",
    "citizenName": "Hopna Marandi",
    "citizenPhone": "+91 94311 12089",
    "emergencyType": "FLOOD",
    "location": "Dudhani, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.25821,
      "lng": 87.26814
    },
    "description": "Mayurakshi river surge flooded Dudhani low-lying basti; water reached 4 feet inside homes.",
    "peopleAffected": 38,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 80,
    "status": "VERIFIED",
    "requiredResources": "Motorized rescue zodiacs, life jackets, high-volume dewatering pumps",
    "createdAt": "2026-01-27 14:35"
  },
  {
    "id": "RNC-1090",
    "citizenName": "Chunnu Murmu",
    "citizenPhone": "+91 94311 12090",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Rasikpur, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.27541,
      "lng": 87.24852
    },
    "description": "Heavy monsoon rains caused mud and brick wall failure of community center.",
    "peopleAffected": 9,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Crush injury to legs, lacerations from falling tiles",
    "priorityScore": 100,
    "status": "RESOLVED",
    "requiredResources": "Hydraulic spreaders, stretchers, emergency trauma kits",
    "createdAt": "2026-01-28 18:50"
  },
  {
    "id": "RNC-1091",
    "citizenName": "Sonaram Soren",
    "citizenPhone": "+91 94311 12091",
    "emergencyType": "MISSING_PERSON",
    "location": "Bandhdih, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.28124,
      "lng": 87.27124
    },
    "description": "Two cattle grazers caught in flash torrent while crossing rural causeway.",
    "peopleAffected": 2,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 54,
    "status": "RESOLVED",
    "requiredResources": "River rescue boat, throwing lines, drone search unit",
    "createdAt": "2026-01-29 07:15"
  },
  {
    "id": "RNC-1092",
    "citizenName": "Md. Zakir",
    "citizenPhone": "+91 94311 12092",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Kathikund Road, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.26124,
      "lng": 87.29152
    },
    "description": "Timber transport truck collided with passenger trekker on highway bend.",
    "peopleAffected": 14,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Multiple fractures, severe blunt abdominal trauma",
    "priorityScore": 100,
    "status": "RESOLVED",
    "requiredResources": "Hydraulic cutters, ALS ambulances, spinal stabilization backboards",
    "createdAt": "2026-01-30 11:40"
  },
  {
    "id": "RNC-1093",
    "citizenName": "Arbind Roy",
    "citizenPhone": "+91 94311 12093",
    "emergencyType": "POWER_OUTAGE",
    "location": "Gilanpara, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.27012,
      "lng": 87.25952
    },
    "description": "Storm-damaged substation switchgear caused widespread power outage across 3 wards.",
    "peopleAffected": 22,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 45,
    "status": "RESOLVED",
    "requiredResources": "Mobile diesel generator 150kVA, switchgear replacement team",
    "createdAt": "2026-01-31 16:05"
  },
  {
    "id": "RNC-1094",
    "citizenName": "Sunita Devi",
    "citizenPhone": "+91 94311 12094",
    "emergencyType": "MEDICAL",
    "location": "Babu Para, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.26421,
      "lng": 87.25124
    },
    "description": "Cluster of severe falciparum malaria cases with high delirium in flood-affected basti.",
    "peopleAffected": 16,
    "isTrapped": false,
    "hasMedicalEmergency": true,
    "medicalDetails": "High fever, delirium, acute anemia requiring transfusion",
    "priorityScore": 70,
    "status": "VERIFIED",
    "requiredResources": "Mobile malaria clinic, IV artesunate kits, mosquito fogging units",
    "createdAt": "2026-02-01 08:30"
  },
  {
    "id": "RNC-1095",
    "citizenName": "Munna Hansda",
    "citizenPhone": "+91 94311 12095",
    "emergencyType": "LANDSLIDE",
    "location": "Shikaripara Road, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.23521,
      "lng": 87.28452
    },
    "description": "Stone quarry slope failure blocked Shikaripara interstate highway link.",
    "peopleAffected": 12,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 79,
    "status": "RESOLVED",
    "requiredResources": "Heavy excavators, rock breakers, road clearance team",
    "createdAt": "2026-02-02 12:15"
  },
  {
    "id": "RNC-1096",
    "citizenName": "Dinesh Tudu",
    "citizenPhone": "+91 94311 12096",
    "emergencyType": "WATER_HAZARD",
    "location": "Raneshwar, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.16852,
      "lng": 87.35421
    },
    "description": "Mayurakshi river barrage water surge inundated low agricultural causeway.",
    "peopleAffected": 15,
    "isTrapped": true,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 65,
    "status": "VERIFIED",
    "requiredResources": "Inflatable rescue dinghies, warning sirens, life buoy rings",
    "createdAt": "2026-02-03 15:40"
  },
  {
    "id": "RNC-1097",
    "citizenName": "Anup Kumar",
    "citizenPhone": "+91 94311 12097",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Jama, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.35124,
      "lng": 87.18452
    },
    "description": "Mini-truck carrying agricultural laborers skidded into drainage ditch.",
    "peopleAffected": 11,
    "isTrapped": true,
    "hasMedicalEmergency": true,
    "medicalDetails": "Limb fractures and head trauma",
    "priorityScore": 97,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Hydraulic spreaders, ambulances, first aid trauma packs",
    "createdAt": "2026-02-04 09:10"
  },
  {
    "id": "RNC-1098",
    "citizenName": "Vijay Shah",
    "citizenPhone": "+91 94311 12098",
    "emergencyType": "FIRE",
    "location": "Tin Bazar, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.26912,
      "lng": 87.25552
    },
    "description": "Electrical fire in wholesale grocery warehouse storing edible oil.",
    "peopleAffected": 10,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 55,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Chemical dry powder tenders, water foam nozzles",
    "createdAt": "2026-02-04 13:45"
  },
  {
    "id": "RNC-1099",
    "citizenName": "Kalyan Bhengra",
    "citizenPhone": "+91 94311 12099",
    "emergencyType": "WATER_HAZARD",
    "location": "Dudhani, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.26012,
      "lng": 87.27012
    },
    "description": "Municipal water main line fractured flooding low-lying street.",
    "peopleAffected": 8,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 31,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Water repair excavation unit, heavy suction pump",
    "createdAt": "2026-02-04 17:20"
  },
  {
    "id": "RNC-1100",
    "citizenName": "Ranjit Murmu",
    "citizenPhone": "+91 94311 12100",
    "emergencyType": "MISSING_PERSON",
    "location": "Bandhdih, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.28312,
      "lng": 87.27312
    },
    "description": "Villager missing after evening storm near forest fringe.",
    "peopleAffected": 1,
    "isTrapped": false,
    "hasMedicalEmergency": false,
    "medicalDetails": "",
    "priorityScore": 27,
    "status": "PENDING_VERIFICATION",
    "requiredResources": "Search party, high-beam searchlights, forest trackers",
    "createdAt": "2026-02-04 21:00"
  }
];

export const INITIAL_MOCK_INCIDENTS = [
  {
    "id": "INC-1003",
    "primaryReportId": "RNC-1003",
    "title": "Storm Drain Inundation - Main Road",
    "emergencyType": "FLOOD",
    "location": "Main Road, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.37123,
      "lng": 85.32555
    },
    "peopleAffected": 8,
    "priorityScore": 46,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-1",
    "assignedResponderName": "Jharkhand NDRF 9th Battalion Quick Response",
    "assignedShelterId": "SHELTER-RNC-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "High-capacity pumps, barricading tape, traffic diversion signs",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-08 15:50",
        "note": "Report filed by Ishita Patel"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-08 15:50",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-08 15:50",
        "note": "Assigned to Jharkhand NDRF 9th Battalion Quick Response (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-08 15:50"
  },
  {
    "id": "INC-1004",
    "primaryReportId": "RNC-1004",
    "title": "Highway Passenger Bus Collision - Tatisilwai",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Tatisilwai, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.31015,
      "lng": 85.4092
    },
    "peopleAffected": 12,
    "priorityScore": 99,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-9",
    "assignedResponderName": "Jharkhand Emergency ALS Mobile Intensive Care Unit",
    "assignedShelterId": "SHELTER-RNC-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Hydraulic extrication jaws, multiple ALS ambulances, triage kit",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-09 18:51",
        "note": "Report filed by Riya Sahu"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-09 18:51",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-09 18:51",
        "note": "Assigned to Jharkhand Emergency ALS Mobile Intensive Care Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-09 18:51"
  },
  {
    "id": "INC-1005",
    "primaryReportId": "RNC-1005",
    "title": "Residential LPG Pipeline Rupture - Hinoo",
    "emergencyType": "GAS_LEAK",
    "location": "Hinoo, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.33065,
      "lng": 85.30925
    },
    "peopleAffected": 19,
    "priorityScore": 80,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-RNC-01",
    "eta": "22 min",
    "coordinatorUpdate": "Pipeline isolated by GAIL engineers; perimeter secured.",
    "requiredResources": "Hazmat breathing apparatus, leak sealing clamps, perimeter evacuation",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-10 07:59",
        "note": "Report filed by Rohan Sinha"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-10 07:59",
        "note": "Pipeline isolated by GAIL engineers; perimeter secured."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-10 07:59",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: 22 min)"
      }
    ],
    "createdAt": "2026-01-10 07:59"
  },
  {
    "id": "INC-1006",
    "primaryReportId": "RNC-1006",
    "title": "Commercial Complex Electrical Fire - Argora",
    "emergencyType": "FIRE",
    "location": "Argora, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.3812,
      "lng": 85.34002
    },
    "peopleAffected": 14,
    "priorityScore": 85,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-RNC-01",
    "eta": "18 min",
    "coordinatorUpdate": "Power grid disconnected; foam extinguishing underway.",
    "requiredResources": "Class-C foam tenders, electrical cutoff team, fire blankets",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-11 11:28",
        "note": "Report filed by Diya Rao"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-11 11:28",
        "note": "Power grid disconnected; foam extinguishing underway."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-11 11:28",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: 18 min)"
      }
    ],
    "createdAt": "2026-01-11 11:28"
  },
  {
    "id": "INC-1009",
    "primaryReportId": "RNC-1009",
    "title": "Pavilion Structural Collapse - Morabadi",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Morabadi, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.40135,
      "lng": 85.32575
    },
    "peopleAffected": 18,
    "priorityScore": 100,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-2",
    "assignedResponderName": "Ranchi SDRF Urban Search & Rescue Unit",
    "assignedShelterId": "SHELTER-RNC-02",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Hydraulic spreaders, concrete shears, stretchers, ALS ambulances",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-14 20:21",
        "note": "Report filed by Diya Tiwari"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-14 20:21",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-14 20:21",
        "note": "Assigned to Ranchi SDRF Urban Search & Rescue Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-14 20:21"
  },
  {
    "id": "INC-1010",
    "primaryReportId": "RNC-1010",
    "title": "Flyover Construction Crane Incident - Kantatoli",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Kantatoli, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.35896,
      "lng": 85.33606
    },
    "peopleAffected": 9,
    "priorityScore": 93,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-2",
    "assignedResponderName": "Ranchi SDRF Urban Search & Rescue Unit",
    "assignedShelterId": "SHELTER-RNC-01",
    "eta": "22 min",
    "coordinatorUpdate": "Hydraulic extrication in progress; paramedic on site.",
    "requiredResources": "Heavy crane 50T, hydraulic cutters, trauma life support",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-15 08:34",
        "note": "Report filed by Neel Nair"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-15 08:34",
        "note": "Hydraulic extrication in progress; paramedic on site."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-15 08:34",
        "note": "Assigned to Ranchi SDRF Urban Search & Rescue Unit (ETA: 22 min)"
      }
    ],
    "createdAt": "2026-01-15 08:34"
  },
  {
    "id": "INC-1011",
    "primaryReportId": "RNC-1011",
    "title": "Hostel Facility Carbon Monoxide Incident - Bariatu",
    "emergencyType": "MEDICAL",
    "location": "Bariatu, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.38912,
      "lng": 85.35241
    },
    "peopleAffected": 15,
    "priorityScore": 95,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-9",
    "assignedResponderName": "Jharkhand Emergency ALS Mobile Intensive Care Unit",
    "assignedShelterId": "SHELTER-RNC-02",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "High-flow oxygen cylinders, multiple ambulances, exhaust blowers",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-16 13:14",
        "note": "Report filed by Suresh Oraon"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-16 13:14",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-16 13:14",
        "note": "Assigned to Jharkhand Emergency ALS Mobile Intensive Care Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-16 13:14"
  },
  {
    "id": "INC-1012",
    "primaryReportId": "RNC-1012",
    "title": "Shopping Complex Upper Floor Fire - Lalpur",
    "emergencyType": "FIRE",
    "location": "Lalpur, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.36854,
      "lng": 85.33412
    },
    "peopleAffected": 22,
    "priorityScore": 85,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-RNC-02",
    "eta": "8 min",
    "coordinatorUpdate": "Hydraulic platform deployed; 18 evacuated via fire escape.",
    "requiredResources": "Snorkel ladder truck, smoke exhaust fans, breathing sets",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-17 16:45",
        "note": "Report filed by Basanti Bhengra"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-17 16:45",
        "note": "Hydraulic platform deployed; 18 evacuated via fire escape."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-17 16:45",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: 8 min)"
      }
    ],
    "createdAt": "2026-01-17 16:45"
  },
  {
    "id": "INC-1013",
    "primaryReportId": "RNC-1013",
    "title": "Substation Insulator Breakdown - Doranda",
    "emergencyType": "POWER_OUTAGE",
    "location": "Doranda, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.33521,
      "lng": 85.32042
    },
    "peopleAffected": 35,
    "priorityScore": 45,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-10",
    "assignedResponderName": "Jharkhand Disaster Power & Utility Restoration Cell",
    "assignedShelterId": "SHELTER-RNC-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Heavy diesel mobile generators, substation replacement insulators",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-18 19:20",
        "note": "Report filed by Jaipal Munda"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-18 19:20",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-18 19:20",
        "note": "Assigned to Jharkhand Disaster Power & Utility Restoration Cell (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-18 19:20"
  },
  {
    "id": "INC-1014",
    "primaryReportId": "RNC-1014",
    "title": "Harmu Rivulet Embankment Breach - Harmu",
    "emergencyType": "FLOOD",
    "location": "Harmu, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.35412,
      "lng": 85.30821
    },
    "peopleAffected": 24,
    "priorityScore": 80,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-1",
    "assignedResponderName": "Jharkhand NDRF 9th Battalion Quick Response",
    "assignedShelterId": "SHELTER-RNC-01",
    "eta": "22 min",
    "coordinatorUpdate": "Sandbagging wall underway; 20 residents moved to shelter.",
    "requiredResources": "Motorized rescue boats, sandbag revetment, portable pumps",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-19 22:15",
        "note": "Report filed by Anita Kerketta"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-19 22:15",
        "note": "Sandbagging wall underway; 20 residents moved to shelter."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-19 22:15",
        "note": "Assigned to Jharkhand NDRF 9th Battalion Quick Response (ETA: 22 min)"
      }
    ],
    "createdAt": "2026-01-19 22:15"
  },
  {
    "id": "INC-1015",
    "primaryReportId": "RNC-1015",
    "title": "Overturned Tanker Spill - Hatia",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Hatia, Ranchi, Jharkhand",
    "coordinates": {
      "lat": 23.29814,
      "lng": 85.29524
    },
    "peopleAffected": 6,
    "priorityScore": 42,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-10",
    "assignedResponderName": "Jharkhand Disaster Power & Utility Restoration Cell",
    "assignedShelterId": "SHELTER-RNC-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Foam washing units, sand dispersal truck, traffic diversions",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-20 06:40",
        "note": "Report filed by Arjun Pandey"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-20 06:40",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-20 06:40",
        "note": "Assigned to Jharkhand Disaster Power & Utility Restoration Cell (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-20 06:40"
  },
  {
    "id": "INC-1016",
    "primaryReportId": "RNC-1016",
    "title": "Commercial Market Fire - Bistupur",
    "emergencyType": "FIRE",
    "location": "Bistupur, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.79854,
      "lng": 86.18721
    },
    "peopleAffected": 25,
    "priorityScore": 100,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-JSR-01",
    "eta": "18 min",
    "coordinatorUpdate": "Fire suppressed on floors 1 and 2; venting smoke.",
    "requiredResources": "Aerial hydraulic platform, foam crash tender, oxygen triage bay",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-21 09:12",
        "note": "Report filed by Birsa Soren"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-21 09:12",
        "note": "Fire suppressed on floors 1 and 2; venting smoke."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-21 09:12",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: 18 min)"
      }
    ],
    "createdAt": "2026-01-21 09:12"
  },
  {
    "id": "INC-1017",
    "primaryReportId": "RNC-1017",
    "title": "Commercial Godown Collapse - Sakchi",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Sakchi, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.80542,
      "lng": 86.20145
    },
    "peopleAffected": 11,
    "priorityScore": 100,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-2",
    "assignedResponderName": "Ranchi SDRF Urban Search & Rescue Unit",
    "assignedShelterId": "SHELTER-JSR-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Hydraulic spreaders, search canine unit, ALS ambulances",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-22 11:30",
        "note": "Report filed by Amit Mahato"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-22 11:30",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-22 11:30",
        "note": "Assigned to Ranchi SDRF Urban Search & Rescue Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-22 11:30"
  },
  {
    "id": "INC-1018",
    "primaryReportId": "RNC-1018",
    "title": "Subarnarekha River Surge Inundation - Mango",
    "emergencyType": "FLOOD",
    "location": "Mango, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.82741,
      "lng": 86.20854
    },
    "peopleAffected": 42,
    "priorityScore": 80,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-1",
    "assignedResponderName": "Jharkhand NDRF 9th Battalion Quick Response",
    "assignedShelterId": "SHELTER-JSR-01",
    "eta": "8 min",
    "coordinatorUpdate": "Evacuation boat operations ongoing; 28 relocated.",
    "requiredResources": "NDRF motorized zodiac boats, life rafts, dry food packets",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-23 14:05",
        "note": "Report filed by Sunita Hansda"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-23 14:05",
        "note": "Evacuation boat operations ongoing; 28 relocated."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-23 14:05",
        "note": "Assigned to Jharkhand NDRF 9th Battalion Quick Response (ETA: 8 min)"
      }
    ],
    "createdAt": "2026-01-23 14:05"
  },
  {
    "id": "INC-1019",
    "primaryReportId": "RNC-1019",
    "title": "Kharkai River Backflow Inundation - Kadma",
    "emergencyType": "FLOOD",
    "location": "Kadma, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.78841,
      "lng": 86.16523
    },
    "peopleAffected": 30,
    "priorityScore": 80,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-1",
    "assignedResponderName": "Jharkhand NDRF 9th Battalion Quick Response",
    "assignedShelterId": "SHELTER-JSR-02",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Rescue boats, high-discharge diesel pumps, temporary lighting masts",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-24 17:40",
        "note": "Report filed by Priya Sharma"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-24 17:40",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-24 17:40",
        "note": "Assigned to Jharkhand NDRF 9th Battalion Quick Response (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-24 17:40"
  },
  {
    "id": "INC-1020",
    "primaryReportId": "RNC-1020",
    "title": "Confluence Boat Capsize Search - Sonari",
    "emergencyType": "MISSING_PERSON",
    "location": "Sonari, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.81234,
      "lng": 86.16812
    },
    "peopleAffected": 2,
    "priorityScore": 54,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-1",
    "assignedResponderName": "Jharkhand NDRF 9th Battalion Quick Response",
    "assignedShelterId": "SHELTER-JSR-01",
    "eta": "15 min",
    "coordinatorUpdate": "One person recovered alive; river grid search continuing.",
    "requiredResources": "River patrol rescue boat, sonar locator, life buoys",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-25 08:20",
        "note": "Report filed by Manoj Murmu"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-25 08:20",
        "note": "One person recovered alive; river grid search continuing."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-25 08:20",
        "note": "Assigned to Jharkhand NDRF 9th Battalion Quick Response (ETA: 15 min)"
      }
    ],
    "createdAt": "2026-01-25 08:20"
  },
  {
    "id": "INC-1021",
    "primaryReportId": "RNC-1021",
    "title": "Storm Feeder Line Severance - Telco Colony",
    "emergencyType": "POWER_OUTAGE",
    "location": "Telco Colony, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.77451,
      "lng": 86.25124
    },
    "peopleAffected": 18,
    "priorityScore": 45,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-10",
    "assignedResponderName": "Jharkhand Disaster Power & Utility Restoration Cell",
    "assignedShelterId": "SHELTER-JSR-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Chainsaw clearing crew, hydraulic boom truck, power cable splice team",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-26 12:15",
        "note": "Report filed by Neha Bhengra"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-26 12:15",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-26 12:15",
        "note": "Assigned to Jharkhand Disaster Power & Utility Restoration Cell (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-26 12:15"
  },
  {
    "id": "INC-1022",
    "primaryReportId": "RNC-1022",
    "title": "Steel Coil Trailer Collision - Golmuri",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Golmuri, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.79812,
      "lng": 86.22341
    },
    "peopleAffected": 8,
    "priorityScore": 91,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-5",
    "assignedResponderName": "Bokaro Heavy Extrication & Disaster Response Unit",
    "assignedShelterId": "SHELTER-JSR-01",
    "eta": "18 min",
    "coordinatorUpdate": "Hydraulic spreaders used to free rickshaw passengers.",
    "requiredResources": "Industrial crane, hydraulic cutters, trauma resuscitation kit",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-27 15:50",
        "note": "Report filed by Sandeep Oraon"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-27 15:50",
        "note": "Hydraulic spreaders used to free rickshaw passengers."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-27 15:50",
        "note": "Assigned to Bokaro Heavy Extrication & Disaster Response Unit (ETA: 18 min)"
      }
    ],
    "createdAt": "2026-01-27 15:50"
  },
  {
    "id": "INC-1023",
    "primaryReportId": "RNC-1023",
    "title": "Industrial Recycling Unit Fire - Jugsalai",
    "emergencyType": "FIRE",
    "location": "Jugsalai, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.76812,
      "lng": 86.18452
    },
    "peopleAffected": 20,
    "priorityScore": 60,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-JSR-02",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "High-capacity foam cannons, water tenders, perimeter respirator masks",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-28 20:10",
        "note": "Report filed by Pooja Tirkey"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-28 20:10",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-28 20:10",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-28 20:10"
  },
  {
    "id": "INC-1024",
    "primaryReportId": "RNC-1024",
    "title": "Community Gastroenteritis Outbreak - Baridih",
    "emergencyType": "MEDICAL",
    "location": "Baridih, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.81421,
      "lng": 86.24152
    },
    "peopleAffected": 28,
    "priorityScore": 70,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-9",
    "assignedResponderName": "Jharkhand Emergency ALS Mobile Intensive Care Unit",
    "assignedShelterId": "SHELTER-JSR-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Mobile medical dispensary, IV saline supplies, ORS packets",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-29 09:30",
        "note": "Report filed by Rahul Singh"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-29 09:30",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-29 09:30",
        "note": "Assigned to Jharkhand Emergency ALS Mobile Intensive Care Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-29 09:30"
  },
  {
    "id": "INC-1025",
    "primaryReportId": "RNC-1025",
    "title": "Chemical Processing Ammonia Leak - Adityapur",
    "emergencyType": "GAS_LEAK",
    "location": "Adityapur, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.78452,
      "lng": 86.15241
    },
    "peopleAffected": 15,
    "priorityScore": 100,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-JSR-02",
    "eta": "18 min",
    "coordinatorUpdate": "Leak contained with water fog curtain; 500m radius evacuated.",
    "requiredResources": "Level-A Hazmat suits, ammonia water fog sprayers, evacuation bus",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-30 11:45",
        "note": "Report filed by Md. Imran"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-30 11:45",
        "note": "Leak contained with water fog curtain; 500m radius evacuated."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-30 11:45",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: 18 min)"
      }
    ],
    "createdAt": "2026-01-30 11:45"
  },
  {
    "id": "INC-1029",
    "primaryReportId": "RNC-1029",
    "title": "Nullah Blockage Flash Flood - Birsanagar",
    "emergencyType": "FLOOD",
    "location": "Birsanagar, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.79152,
      "lng": 86.26241
    },
    "peopleAffected": 16,
    "priorityScore": 55,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-1",
    "assignedResponderName": "Jharkhand NDRF 9th Battalion Quick Response",
    "assignedShelterId": "SHELTER-JSR-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Backhoe loaders for nullah dredging, dewatering pumps, sandbags",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-02-03 07:15",
        "note": "Report filed by Sanjay Soren"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-02-03 07:15",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-02-03 07:15",
        "note": "Assigned to Jharkhand NDRF 9th Battalion Quick Response (ETA: Completed)"
      }
    ],
    "createdAt": "2026-02-03 07:15"
  },
  {
    "id": "INC-1030",
    "primaryReportId": "RNC-1030",
    "title": "Heatwave Mass Triage - Sakchi",
    "emergencyType": "MEDICAL",
    "location": "Sakchi, Jamshedpur, Jharkhand",
    "coordinates": {
      "lat": 22.80682,
      "lng": 86.20312
    },
    "peopleAffected": 9,
    "priorityScore": 63,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-9",
    "assignedResponderName": "Jharkhand Emergency ALS Mobile Intensive Care Unit",
    "assignedShelterId": "SHELTER-JSR-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Cooling mist stations, cold saline infusions, ALS ambulance",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-02-04 13:20",
        "note": "Report filed by Alok Goswami"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-02-04 13:20",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-02-04 13:20",
        "note": "Assigned to Jharkhand Emergency ALS Mobile Intensive Care Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-02-04 13:20"
  },
  {
    "id": "INC-1031",
    "primaryReportId": "RNC-1031",
    "title": "Commercial Complex Structural Collapse - Bank More",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Bank More, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.78921,
      "lng": 86.41852
    },
    "peopleAffected": 16,
    "priorityScore": 100,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-2",
    "assignedResponderName": "Ranchi SDRF Urban Search & Rescue Unit",
    "assignedShelterId": "SHELTER-DHN-01",
    "eta": "8 min",
    "coordinatorUpdate": "2 trapped guards extricated; sniffer dog search in progress.",
    "requiredResources": "Heavy concrete breakers, search cameras, structural shoring timbers",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-10 10:15",
        "note": "Report filed by Bikram Das"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-10 10:15",
        "note": "2 trapped guards extricated; sniffer dog search in progress."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-10 10:15",
        "note": "Assigned to Ranchi SDRF Urban Search & Rescue Unit (ETA: 8 min)"
      }
    ],
    "createdAt": "2026-01-10 10:15"
  },
  {
    "id": "INC-1032",
    "primaryReportId": "RNC-1032",
    "title": "Coal Fire Gas Ingress - Jharia",
    "emergencyType": "GAS_LEAK",
    "location": "Jharia, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.74212,
      "lng": 86.41524
    },
    "peopleAffected": 32,
    "priorityScore": 100,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-4",
    "assignedResponderName": "Dhanbad Coal Mines Rescue Station Squad",
    "assignedShelterId": "SHELTER-DHN-01",
    "eta": "25 min",
    "coordinatorUpdate": "Nitrogen foam injected into fissure; 25 families moved to shelter.",
    "requiredResources": "Self-contained breathing apparatus, air sampling monitors, evacuation fleet",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-11 14:40",
        "note": "Report filed by Sita Devi"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-11 14:40",
        "note": "Nitrogen foam injected into fissure; 25 families moved to shelter."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-11 14:40",
        "note": "Assigned to Dhanbad Coal Mines Rescue Station Squad (ETA: 25 min)"
      }
    ],
    "createdAt": "2026-01-11 14:40"
  },
  {
    "id": "INC-1033",
    "primaryReportId": "RNC-1033",
    "title": "High-Rise Residential Apartment Fire - Saraidhela",
    "emergencyType": "FIRE",
    "location": "Saraidhela, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.82145,
      "lng": 86.45214
    },
    "peopleAffected": 28,
    "priorityScore": 85,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-DHN-02",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Turn-table ladder 42m, high-pressure foam tenders, smoke masks",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-12 18:25",
        "note": "Report filed by Rajesh Agarwal"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-12 18:25",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-12 18:25",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-12 18:25"
  },
  {
    "id": "INC-1034",
    "primaryReportId": "RNC-1034",
    "title": "Substation Transformer Explosion - Hirapur",
    "emergencyType": "POWER_OUTAGE",
    "location": "Hirapur, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.80124,
      "lng": 86.43541
    },
    "peopleAffected": 40,
    "priorityScore": 45,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-10",
    "assignedResponderName": "Jharkhand Disaster Power & Utility Restoration Cell",
    "assignedShelterId": "SHELTER-DHN-02",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Mobile generator 500kVA, emergency transformer van, high-voltage splice crew",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-13 21:50",
        "note": "Report filed by Amitabh Mukherjee"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-13 21:50",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-13 21:50",
        "note": "Assigned to Jharkhand Disaster Power & Utility Restoration Cell (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-13 21:50"
  },
  {
    "id": "INC-1035",
    "primaryReportId": "RNC-1035",
    "title": "River Tributary Inundation - Katras",
    "emergencyType": "FLOOD",
    "location": "Katras, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.81524,
      "lng": 86.28412
    },
    "peopleAffected": 25,
    "priorityScore": 80,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-1",
    "assignedResponderName": "Jharkhand NDRF 9th Battalion Quick Response",
    "assignedShelterId": "SHELTER-DHN-01",
    "eta": "8 min",
    "coordinatorUpdate": "NDRF boats operating; 18 residents evacuated.",
    "requiredResources": "Inflatable rescue dinghies, high-capacity diesel dewatering pumps",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-14 06:30",
        "note": "Report filed by Manoj Pandey"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-14 06:30",
        "note": "NDRF boats operating; 18 residents evacuated."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-14 06:30",
        "note": "Assigned to Jharkhand NDRF 9th Battalion Quick Response (ETA: 8 min)"
      }
    ],
    "createdAt": "2026-01-14 06:30"
  },
  {
    "id": "INC-1036",
    "primaryReportId": "RNC-1036",
    "title": "Chemical Fertilizer Ammonia Leak - Sindri",
    "emergencyType": "GAS_LEAK",
    "location": "Sindri, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.65214,
      "lng": 86.51241
    },
    "peopleAffected": 18,
    "priorityScore": 100,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-4",
    "assignedResponderName": "Dhanbad Coal Mines Rescue Station Squad",
    "assignedShelterId": "SHELTER-DHN-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Hazmat response team, neutralizing spray curtains, oxygen resuscitation",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-15 11:10",
        "note": "Report filed by Pooja Roy"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-15 11:10",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-15 11:10",
        "note": "Assigned to Dhanbad Coal Mines Rescue Station Squad (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-15 11:10"
  },
  {
    "id": "INC-1037",
    "primaryReportId": "RNC-1037",
    "title": "GT Road Highway Multi-Vehicle Collision - Govindpur",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Govindpur, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.83412,
      "lng": 86.52145
    },
    "peopleAffected": 14,
    "priorityScore": 100,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-5",
    "assignedResponderName": "Bokaro Heavy Extrication & Disaster Response Unit",
    "assignedShelterId": "SHELTER-DHN-02",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Hydraulic spreaders, multiple critical care ambulances, highway cranes",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-16 15:45",
        "note": "Report filed by Sunil Marandi"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-16 15:45",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-16 15:45",
        "note": "Assigned to Bokaro Heavy Extrication & Disaster Response Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-16 15:45"
  },
  {
    "id": "INC-1038",
    "primaryReportId": "RNC-1038",
    "title": "Underground Market Fire - Bartand",
    "emergencyType": "FIRE",
    "location": "Bartand, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.80854,
      "lng": 86.42851
    },
    "peopleAffected": 21,
    "priorityScore": 85,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-DHN-02",
    "eta": "25 min",
    "coordinatorUpdate": "Fire enclosed; exhaust fans venting toxic smoke.",
    "requiredResources": "Smoke extraction blowers, breathing apparatus sets, water foam tenders",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-17 19:15",
        "note": "Report filed by Anand Verma"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-17 19:15",
        "note": "Fire enclosed; exhaust fans venting toxic smoke."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-17 19:15",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: 25 min)"
      }
    ],
    "createdAt": "2026-01-17 19:15"
  },
  {
    "id": "INC-1039",
    "primaryReportId": "RNC-1039",
    "title": "Mine Overburden Dump Slide - Putki",
    "emergencyType": "LANDSLIDE",
    "location": "Putki, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.76541,
      "lng": 86.34521
    },
    "peopleAffected": 12,
    "priorityScore": 79,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-6",
    "assignedResponderName": "Hazaribagh Hill & Mountain Rescue Squad",
    "assignedShelterId": "SHELTER-DHN-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Heavy earthmovers, bulldozers, slope stabilization rock-bolters",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-18 08:40",
        "note": "Report filed by Kiran Mahto"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-18 08:40",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-18 08:40",
        "note": "Assigned to Hazaribagh Hill & Mountain Rescue Squad (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-18 08:40"
  },
  {
    "id": "INC-1043",
    "primaryReportId": "RNC-1043",
    "title": "Fuel Tanker Spill & Fire Hazard - Saraidhela",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Saraidhela, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.82412,
      "lng": 86.45512
    },
    "peopleAffected": 4,
    "priorityScore": 38,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-DHN-02",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Chemical foam blanket, sand spreaders, hazardous cleanup team",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-02-02 14:15",
        "note": "Report filed by Manish Singh"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-02-02 14:15",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-02-02 14:15",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: Completed)"
      }
    ],
    "createdAt": "2026-02-02 14:15"
  },
  {
    "id": "INC-1045",
    "primaryReportId": "RNC-1045",
    "title": "Underground Cable Duct Fire - Bank More",
    "emergencyType": "FIRE",
    "location": "Bank More, Dhanbad, Jharkhand",
    "coordinates": {
      "lat": 23.79152,
      "lng": 86.42142
    },
    "peopleAffected": 15,
    "priorityScore": 85,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-DHN-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Carbon dioxide extinguisher batteries, smoke extraction ducts",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-02-04 21:10",
        "note": "Report filed by Praveen Sharma"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-02-04 21:10",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-02-04 21:10",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: Completed)"
      }
    ],
    "createdAt": "2026-02-04 21:10"
  },
  {
    "id": "INC-1046",
    "primaryReportId": "RNC-1046",
    "title": "Scrap Yard Radiant Heat Fire - Sector 4",
    "emergencyType": "FIRE",
    "location": "Sector 4, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.66851,
      "lng": 86.15241
    },
    "peopleAffected": 22,
    "priorityScore": 85,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-BKO-01",
    "eta": "8 min",
    "coordinatorUpdate": "Perimeter water curtains established; main fire knocked down.",
    "requiredResources": "Industrial foam monitors, water tenders, high-pressure hose lines",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-14 11:20",
        "note": "Report filed by Vikram Rathore"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-14 11:20",
        "note": "Perimeter water curtains established; main fire knocked down."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-14 11:20",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: 8 min)"
      }
    ],
    "createdAt": "2026-01-14 11:20"
  },
  {
    "id": "INC-1047",
    "primaryReportId": "RNC-1047",
    "title": "High-Voltage Cable Severance - Sector 1",
    "emergencyType": "POWER_OUTAGE",
    "location": "Sector 1, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.68214,
      "lng": 86.13421
    },
    "peopleAffected": 35,
    "priorityScore": 45,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-10",
    "assignedResponderName": "Jharkhand Disaster Power & Utility Restoration Cell",
    "assignedShelterId": "SHELTER-BKO-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Boom lift trucks, high-tension cable jointers, heavy generators",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-15 15:45",
        "note": "Report filed by Arun Mahato"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-15 15:45",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-15 15:45",
        "note": "Assigned to Jharkhand Disaster Power & Utility Restoration Cell (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-15 15:45"
  },
  {
    "id": "INC-1048",
    "primaryReportId": "RNC-1048",
    "title": "Pump-House Structural Collapse - Sector 9",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Sector 9, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.69124,
      "lng": 86.11541
    },
    "peopleAffected": 6,
    "priorityScore": 97,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-2",
    "assignedResponderName": "Ranchi SDRF Urban Search & Rescue Unit",
    "assignedShelterId": "SHELTER-BKO-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Hydraulic spreaders, concrete cutters, ALS trauma ambulance",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-16 19:10",
        "note": "Report filed by Rameshwar Tudu"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-16 19:10",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-16 19:10",
        "note": "Assigned to Ranchi SDRF Urban Search & Rescue Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-16 19:10"
  },
  {
    "id": "INC-1049",
    "primaryReportId": "RNC-1049",
    "title": "Garga River Water Surge Inundation - Sector 12",
    "emergencyType": "FLOOD",
    "location": "Sector 12, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.65421,
      "lng": 86.17852
    },
    "peopleAffected": 32,
    "priorityScore": 80,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-1",
    "assignedResponderName": "Jharkhand NDRF 9th Battalion Quick Response",
    "assignedShelterId": "SHELTER-BKO-01",
    "eta": "25 min",
    "coordinatorUpdate": "24 residents evacuated to shelter; dewatering pumps running.",
    "requiredResources": "Motorized inflatable boats, life vests, sandbag barriers",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-17 08:30",
        "note": "Report filed by Sunita Soren"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-17 08:30",
        "note": "24 residents evacuated to shelter; dewatering pumps running."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-17 08:30",
        "note": "Assigned to Jharkhand NDRF 9th Battalion Quick Response (ETA: 25 min)"
      }
    ],
    "createdAt": "2026-01-17 08:30"
  },
  {
    "id": "INC-1050",
    "primaryReportId": "RNC-1050",
    "title": "Cold Storage Ammonia Leak - Chas",
    "emergencyType": "GAS_LEAK",
    "location": "Chas, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.63521,
      "lng": 86.18214
    },
    "peopleAffected": 18,
    "priorityScore": 100,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-4",
    "assignedResponderName": "Dhanbad Coal Mines Rescue Station Squad",
    "assignedShelterId": "SHELTER-BKO-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Level-A Hazmat team, vapor suppression water curtains, oxygen kits",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-18 13:15",
        "note": "Report filed by Md. Farooque"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-18 13:15",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-18 13:15",
        "note": "Assigned to Dhanbad Coal Mines Rescue Station Squad (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-18 13:15"
  },
  {
    "id": "INC-1051",
    "primaryReportId": "RNC-1051",
    "title": "Konar Embankment Slope Failure - Bermo",
    "emergencyType": "LANDSLIDE",
    "location": "Bermo, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.77852,
      "lng": 85.94521
    },
    "peopleAffected": 14,
    "priorityScore": 80,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-6",
    "assignedResponderName": "Hazaribagh Hill & Mountain Rescue Squad",
    "assignedShelterId": "SHELTER-BKO-01",
    "eta": "25 min",
    "coordinatorUpdate": "Excavators clearing 500 tons of debris from rail corridor.",
    "requiredResources": "Heavy excavators, hydraulic rock breakers, soil stabilization crews",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-19 17:40",
        "note": "Report filed by Kishore Soren"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-19 17:40",
        "note": "Excavators clearing 500 tons of debris from rail corridor."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-19 17:40",
        "note": "Assigned to Hazaribagh Hill & Mountain Rescue Squad (ETA: 25 min)"
      }
    ],
    "createdAt": "2026-01-19 17:40"
  },
  {
    "id": "INC-1052",
    "primaryReportId": "RNC-1052",
    "title": "Ghat Road Heavy Truck Collision - Phusro",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Phusro, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.76521,
      "lng": 86.01245
    },
    "peopleAffected": 9,
    "priorityScore": 93,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-5",
    "assignedResponderName": "Bokaro Heavy Extrication & Disaster Response Unit",
    "assignedShelterId": "SHELTER-BKO-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Hydraulic cutters, trauma extrication unit, mobile intensive care",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-20 22:05",
        "note": "Report filed by Dinesh Karmakar"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-20 22:05",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-20 22:05",
        "note": "Assigned to Bokaro Heavy Extrication & Disaster Response Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-20 22:05"
  },
  {
    "id": "INC-1053",
    "primaryReportId": "RNC-1053",
    "title": "Transformer Oil Processing Fire - Balidih",
    "emergencyType": "FIRE",
    "location": "Balidih, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.68124,
      "lng": 86.08541
    },
    "peopleAffected": 26,
    "priorityScore": 60,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-BKO-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Dry chemical powder crash tenders, high-expansion foam generators",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-21 07:50",
        "note": "Report filed by Anjali Kumari"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-21 07:50",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-21 07:50",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-21 07:50"
  },
  {
    "id": "INC-1054",
    "primaryReportId": "RNC-1054",
    "title": "Cooling Channel Breach & Flooding - Chandrapura",
    "emergencyType": "WATER_HAZARD",
    "location": "Chandrapura, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.74852,
      "lng": 86.12451
    },
    "peopleAffected": 11,
    "priorityScore": 62,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-1",
    "assignedResponderName": "Jharkhand NDRF 9th Battalion Quick Response",
    "assignedShelterId": "SHELTER-BKO-01",
    "eta": "18 min",
    "coordinatorUpdate": "Dewatering pumps deployed; coffer dam erected.",
    "requiredResources": "Submersible high-head pumps, coffer dam sandbags, diving crew",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-22 12:20",
        "note": "Report filed by Subhash Mahato"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-22 12:20",
        "note": "Dewatering pumps deployed; coffer dam erected."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-22 12:20",
        "note": "Assigned to Jharkhand NDRF 9th Battalion Quick Response (ETA: 18 min)"
      }
    ],
    "createdAt": "2026-01-22 12:20"
  },
  {
    "id": "INC-1057",
    "primaryReportId": "RNC-1057",
    "title": "Banquet Food Toxicity Incident - Cooperative Colony",
    "emergencyType": "MEDICAL",
    "location": "Cooperative Colony, Bokaro, Jharkhand",
    "coordinates": {
      "lat": 23.66214,
      "lng": 86.16852
    },
    "peopleAffected": 30,
    "priorityScore": 70,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-9",
    "assignedResponderName": "Jharkhand Emergency ALS Mobile Intensive Care Unit",
    "assignedShelterId": "SHELTER-BKO-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Mobile medical response team, IV fluid drips, antiemetics",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-02-02 13:40",
        "note": "Report filed by Sangeeta Devi"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-02-02 13:40",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-02-02 13:40",
        "note": "Assigned to Jharkhand Emergency ALS Mobile Intensive Care Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-02-02 13:40"
  },
  {
    "id": "INC-1060",
    "primaryReportId": "RNC-1060",
    "title": "Canary Hill Slope Failure & Road Blockade - Hazaribagh",
    "emergencyType": "LANDSLIDE",
    "location": "Canary Hill Road, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 24.01245,
      "lng": 85.38521
    },
    "peopleAffected": 14,
    "priorityScore": 80,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-6",
    "assignedResponderName": "Hazaribagh Hill & Mountain Rescue Squad",
    "assignedShelterId": "SHELTER-HZB-01",
    "eta": "12 min",
    "coordinatorUpdate": "Heavy equipment deployed; boulder demolition in progress.",
    "requiredResources": "Earthmoving excavators, rock splitters, slope netting crew",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-18 09:10",
        "note": "Report filed by Rohit Soren"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-18 09:10",
        "note": "Heavy equipment deployed; boulder demolition in progress."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-18 09:10",
        "note": "Assigned to Hazaribagh Hill & Mountain Rescue Squad (ETA: 12 min)"
      }
    ],
    "createdAt": "2026-01-18 09:10"
  },
  {
    "id": "INC-1061",
    "primaryReportId": "RNC-1061",
    "title": "Commercial Coaching Hub Fire - Matwari",
    "emergencyType": "FIRE",
    "location": "Matwari, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.99852,
      "lng": 85.36124
    },
    "peopleAffected": 28,
    "priorityScore": 100,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-HZB-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Hydraulic rescue ladder, foam tenders, oxygen therapy masks",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-19 13:30",
        "note": "Report filed by Poonam Devi"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-19 13:30",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-19 13:30",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-19 13:30"
  },
  {
    "id": "INC-1062",
    "primaryReportId": "RNC-1062",
    "title": "Tributary Surge Inundation - Korrah",
    "emergencyType": "FLOOD",
    "location": "Korrah, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.98521,
      "lng": 85.37852
    },
    "peopleAffected": 20,
    "priorityScore": 80,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-1",
    "assignedResponderName": "Jharkhand NDRF 9th Battalion Quick Response",
    "assignedShelterId": "SHELTER-HZB-01",
    "eta": "12 min",
    "coordinatorUpdate": "15 residents evacuated; pumps operating at maximum output.",
    "requiredResources": "Dewatering pumps, rescue dinghies, sandbag barriers",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-20 17:15",
        "note": "Report filed by Sanjay Mahto"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-20 17:15",
        "note": "15 residents evacuated; pumps operating at maximum output."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-20 17:15",
        "note": "Assigned to Jharkhand NDRF 9th Battalion Quick Response (ETA: 12 min)"
      }
    ],
    "createdAt": "2026-01-20 17:15"
  },
  {
    "id": "INC-1063",
    "primaryReportId": "RNC-1063",
    "title": "Quarry Dumper & Bus Collision - Pelawal",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Pelawal, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 24.00852,
      "lng": 85.33412
    },
    "peopleAffected": 16,
    "priorityScore": 100,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-5",
    "assignedResponderName": "Bokaro Heavy Extrication & Disaster Response Unit",
    "assignedShelterId": "SHELTER-HZB-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Heavy extrication jaws, ALS ambulances, rapid blood transport unit",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-21 21:40",
        "note": "Report filed by Md. Shahbaz"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-21 21:40",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-21 21:40",
        "note": "Assigned to Bokaro Heavy Extrication & Disaster Response Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-21 21:40"
  },
  {
    "id": "INC-1064",
    "primaryReportId": "RNC-1064",
    "title": "Highway LPG Bulk Tanker Leak - Demotand",
    "emergencyType": "GAS_LEAK",
    "location": "Demotand, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.94521,
      "lng": 85.38952
    },
    "peopleAffected": 12,
    "priorityScore": 59,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-4",
    "assignedResponderName": "Dhanbad Coal Mines Rescue Station Squad",
    "assignedShelterId": "SHELTER-HZB-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Hazardous material containment crew, water fog spray, gas detection monitors",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-22 07:25",
        "note": "Report filed by Prakash Yadav"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-22 07:25",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-22 07:25",
        "note": "Assigned to Dhanbad Coal Mines Rescue Station Squad (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-22 07:25"
  },
  {
    "id": "INC-1065",
    "primaryReportId": "RNC-1065",
    "title": "Masonry Building Structural Collapse - Okni",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Okni, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.99124,
      "lng": 85.35421
    },
    "peopleAffected": 7,
    "priorityScore": 79,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-2",
    "assignedResponderName": "Ranchi SDRF Urban Search & Rescue Unit",
    "assignedShelterId": "SHELTER-HZB-01",
    "eta": "30 min",
    "coordinatorUpdate": "Debris cleared; structural shoring installed on adjoining wall.",
    "requiredResources": "Shoring beams, rubble clearance team, emergency lighting masts",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-23 11:50",
        "note": "Report filed by Anita Das"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-23 11:50",
        "note": "Debris cleared; structural shoring installed on adjoining wall."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-23 11:50",
        "note": "Assigned to Ranchi SDRF Urban Search & Rescue Unit (ETA: 30 min)"
      }
    ],
    "createdAt": "2026-01-23 11:50"
  },
  {
    "id": "INC-1066",
    "primaryReportId": "RNC-1066",
    "title": "Transmission Tower Storm Collapse - Hurhuru",
    "emergencyType": "POWER_OUTAGE",
    "location": "Hurhuru, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.98412,
      "lng": 85.34215
    },
    "peopleAffected": 32,
    "priorityScore": 45,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-10",
    "assignedResponderName": "Jharkhand Disaster Power & Utility Restoration Cell",
    "assignedShelterId": "SHELTER-HZB-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Heavy tower erection crane, replacement cross-arms, mobile diesel generators",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-24 16:15",
        "note": "Report filed by Rajendra Prasad"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-24 16:15",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-24 16:15",
        "note": "Assigned to Jharkhand Disaster Power & Utility Restoration Cell (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-24 16:15"
  },
  {
    "id": "INC-1067",
    "primaryReportId": "RNC-1067",
    "title": "Wholesale Grain Godown Fire - Sadar Bazar",
    "emergencyType": "FIRE",
    "location": "Sadar Bazar, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 23.99541,
      "lng": 85.36952
    },
    "peopleAffected": 19,
    "priorityScore": 85,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-HZB-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Foam fire engines, high-pressure hose relays, breathing apparatus",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-25 20:30",
        "note": "Report filed by Vikas Gupta"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-25 20:30",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-25 20:30",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-25 20:30"
  },
  {
    "id": "INC-1068",
    "primaryReportId": "RNC-1068",
    "title": "Sal Forest Mountain Search - Mandai Khurd",
    "emergencyType": "MISSING_PERSON",
    "location": "Mandai Khurd, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 24.01521,
      "lng": 85.35241
    },
    "peopleAffected": 1,
    "priorityScore": 27,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-6",
    "assignedResponderName": "Hazaribagh Hill & Mountain Rescue Squad",
    "assignedShelterId": "SHELTER-HZB-01",
    "eta": "8 min",
    "coordinatorUpdate": "Hiker located with minor ankle sprain; escorted to safety.",
    "requiredResources": "Mountain search and rescue squad, thermal UAVs, tracker dogs",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-26 08:45",
        "note": "Report filed by Kailash Murmu"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-26 08:45",
        "note": "Hiker located with minor ankle sprain; escorted to safety."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-26 08:45",
        "note": "Assigned to Hazaribagh Hill & Mountain Rescue Squad (ETA: 8 min)"
      }
    ],
    "createdAt": "2026-01-26 08:45"
  },
  {
    "id": "INC-1069",
    "primaryReportId": "RNC-1069",
    "title": "Fog Multi-Truck Highway Pileup - Barhi",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Barhi, Hazaribagh, Jharkhand",
    "coordinates": {
      "lat": 24.29852,
      "lng": 85.42514
    },
    "peopleAffected": 15,
    "priorityScore": 100,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-5",
    "assignedResponderName": "Bokaro Heavy Extrication & Disaster Response Unit",
    "assignedShelterId": "SHELTER-HZB-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Heavy highway wreckers, hydraulic rescue spreaders, ALS ambulances",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-27 12:10",
        "note": "Report filed by Amitabh Sinha"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-27 12:10",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-27 12:10",
        "note": "Assigned to Bokaro Heavy Extrication & Disaster Response Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-27 12:10"
  },
  {
    "id": "INC-1074",
    "primaryReportId": "RNC-1074",
    "title": "Festival Crowd Surge & Medical Emergency - Tower Chowk",
    "emergencyType": "MEDICAL",
    "location": "Tower Chowk, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.48952,
      "lng": 86.69852
    },
    "peopleAffected": 35,
    "priorityScore": 95,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-7",
    "assignedResponderName": "Deoghar Pilgrim Safety & Mass Emergency Squad",
    "assignedShelterId": "SHELTER-DGH-01",
    "eta": "8 min",
    "coordinatorUpdate": "Triage camp set up; 25 pilgrims rehydrated and stabilized.",
    "requiredResources": "Mass casualty triage tent, ALS ambulances, cardiac defibrillators, oxygen",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-22 08:30",
        "note": "Report filed by Govind Pandey"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-22 08:30",
        "note": "Triage camp set up; 25 pilgrims rehydrated and stabilized."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-22 08:30",
        "note": "Assigned to Deoghar Pilgrim Safety & Mass Emergency Squad (ETA: 8 min)"
      }
    ],
    "createdAt": "2026-01-22 08:30"
  },
  {
    "id": "INC-1075",
    "primaryReportId": "RNC-1075",
    "title": "Pilgrim Bus Overturn Accident - Jasidih",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Jasidih, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.51852,
      "lng": 86.64521
    },
    "peopleAffected": 22,
    "priorityScore": 100,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-5",
    "assignedResponderName": "Bokaro Heavy Extrication & Disaster Response Unit",
    "assignedShelterId": "SHELTER-DGH-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Hydraulic spreaders, fleet of ambulances, emergency blood transport",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-23 12:45",
        "note": "Report filed by Rameshwar Jha"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-23 12:45",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-23 12:45",
        "note": "Assigned to Bokaro Heavy Extrication & Disaster Response Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-23 12:45"
  },
  {
    "id": "INC-1076",
    "primaryReportId": "RNC-1076",
    "title": "Pilgrim Guest House Complex Fire - Castairs Town",
    "emergencyType": "FIRE",
    "location": "Castairs Town, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.48124,
      "lng": 86.70821
    },
    "peopleAffected": 26,
    "priorityScore": 100,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-DGH-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Aerial ladder platform, foam tenders, emergency evacuation chutes",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-24 17:10",
        "note": "Report filed by Anjali Mishra"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-24 17:10",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-24 17:10",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-24 17:10"
  },
  {
    "id": "INC-1077",
    "primaryReportId": "RNC-1077",
    "title": "Dharamsala Verandah Structural Collapse - Williams Town",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Williams Town, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.47541,
      "lng": 86.69214
    },
    "peopleAffected": 12,
    "priorityScore": 89,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-2",
    "assignedResponderName": "Ranchi SDRF Urban Search & Rescue Unit",
    "assignedShelterId": "SHELTER-DGH-01",
    "eta": "30 min",
    "coordinatorUpdate": "4 trapped pilgrims rescued unharmed; structural props placed.",
    "requiredResources": "Hydraulic jacks, concrete shears, stretchers, canine search",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-25 21:20",
        "note": "Report filed by Manoj Dubey"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-25 21:20",
        "note": "4 trapped pilgrims rescued unharmed; structural props placed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-25 21:20",
        "note": "Assigned to Ranchi SDRF Urban Search & Rescue Unit (ETA: 30 min)"
      }
    ],
    "createdAt": "2026-01-25 21:20"
  },
  {
    "id": "INC-1078",
    "primaryReportId": "RNC-1078",
    "title": "Pilgrim Encampment Flash Flood - Baijnathpur",
    "emergencyType": "FLOOD",
    "location": "Baijnathpur, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.49521,
      "lng": 86.71452
    },
    "peopleAffected": 30,
    "priorityScore": 80,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-1",
    "assignedResponderName": "Jharkhand NDRF 9th Battalion Quick Response",
    "assignedShelterId": "SHELTER-DGH-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Rescue boats, dry food packs, high-capacity dewatering pumps",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-26 06:15",
        "note": "Report filed by Sita Devi"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-26 06:15",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-26 06:15",
        "note": "Assigned to Jharkhand NDRF 9th Battalion Quick Response (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-26 06:15"
  },
  {
    "id": "INC-1079",
    "primaryReportId": "RNC-1079",
    "title": "Substation Lightning Strike - Rohini",
    "emergencyType": "POWER_OUTAGE",
    "location": "Rohini, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.45214,
      "lng": 86.63421
    },
    "peopleAffected": 25,
    "priorityScore": 45,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-10",
    "assignedResponderName": "Jharkhand Disaster Power & Utility Restoration Cell",
    "assignedShelterId": "SHELTER-DGH-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Mobile generator 250kVA, high-voltage busbar repair van",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-27 10:40",
        "note": "Report filed by Rajeev Ranjan"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-27 10:40",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-27 10:40",
        "note": "Assigned to Jharkhand Disaster Power & Utility Restoration Cell (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-27 10:40"
  },
  {
    "id": "INC-1080",
    "primaryReportId": "RNC-1080",
    "title": "Temple Queue Lost Child Alert - Satsang Nagar",
    "emergencyType": "MISSING_PERSON",
    "location": "Satsang Nagar, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.47124,
      "lng": 86.68952
    },
    "peopleAffected": 1,
    "priorityScore": 27,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-7",
    "assignedResponderName": "Deoghar Pilgrim Safety & Mass Emergency Squad",
    "assignedShelterId": "SHELTER-DGH-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Pilgrim safety patrol, public address broadcast network, CCTV tracking",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-28 15:05",
        "note": "Report filed by Pratima Das"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-28 15:05",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-28 15:05",
        "note": "Assigned to Deoghar Pilgrim Safety & Mass Emergency Squad (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-28 15:05"
  },
  {
    "id": "INC-1081",
    "primaryReportId": "RNC-1081",
    "title": "Water Distribution Tank Contamination - Bilasi Town",
    "emergencyType": "WATER_HAZARD",
    "location": "Bilasi Town, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.48541,
      "lng": 86.71214
    },
    "peopleAffected": 20,
    "priorityScore": 40,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-10",
    "assignedResponderName": "Jharkhand Disaster Power & Utility Restoration Cell",
    "assignedShelterId": "SHELTER-DGH-01",
    "eta": "22 min",
    "coordinatorUpdate": "Tank drained and sanitized; clean water tankers supplying area.",
    "requiredResources": "Tank drainage pumps, chlorine dosing system, alternative clean water tankers",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-29 19:30",
        "note": "Report filed by Santosh Kumar"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-29 19:30",
        "note": "Tank drained and sanitized; clean water tankers supplying area."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-29 19:30",
        "note": "Assigned to Jharkhand Disaster Power & Utility Restoration Cell (ETA: 22 min)"
      }
    ],
    "createdAt": "2026-01-29 19:30"
  },
  {
    "id": "INC-1082",
    "primaryReportId": "RNC-1082",
    "title": "Bypass Corridor Grassland Fire - Kunda",
    "emergencyType": "FIRE",
    "location": "Kunda, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.46214,
      "lng": 86.73521
    },
    "peopleAffected": 18,
    "priorityScore": 60,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-DGH-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Brush fire beaters, water tenders, fire break plows",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-30 08:15",
        "note": "Report filed by Virendra Singh"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-30 08:15",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-30 08:15",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-30 08:15"
  },
  {
    "id": "INC-1083",
    "primaryReportId": "RNC-1083",
    "title": "Trikut Foothills Rockfall & Road Blockade - Mohanpur",
    "emergencyType": "LANDSLIDE",
    "location": "Mohanpur, Deoghar, Jharkhand",
    "coordinates": {
      "lat": 24.54214,
      "lng": 86.78214
    },
    "peopleAffected": 11,
    "priorityScore": 77,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-6",
    "assignedResponderName": "Hazaribagh Hill & Mountain Rescue Squad",
    "assignedShelterId": "SHELTER-DGH-01",
    "eta": "12 min",
    "coordinatorUpdate": "Front-end loaders clearing 80 tons of boulders from roadway.",
    "requiredResources": "Hydraulic rock splitters, front-end loaders, road clearing crew",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-31 13:00",
        "note": "Report filed by Babulal Soren"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-31 13:00",
        "note": "Front-end loaders clearing 80 tons of boulders from roadway."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-31 13:00",
        "note": "Assigned to Hazaribagh Hill & Mountain Rescue Squad (ETA: 12 min)"
      }
    ],
    "createdAt": "2026-01-31 13:00"
  },
  {
    "id": "INC-1088",
    "primaryReportId": "RNC-1088",
    "title": "Historic Fabric Market Fire - Tin Bazar",
    "emergencyType": "FIRE",
    "location": "Tin Bazar, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.26852,
      "lng": 87.25421
    },
    "peopleAffected": 24,
    "priorityScore": 85,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-3",
    "assignedResponderName": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "assignedShelterId": "SHELTER-DMK-01",
    "eta": "30 min",
    "coordinatorUpdate": "Narrow-alley mist units containing fire; 14 shops saved.",
    "requiredResources": "Foam tenders, narrow-alley water mist quads, smoke exhaust fans",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-26 10:20",
        "note": "Report filed by Shambhu Bhagat"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-26 10:20",
        "note": "Narrow-alley mist units containing fire; 14 shops saved."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-26 10:20",
        "note": "Assigned to Jamshedpur Industrial Fire & Hazmat Brigade (ETA: 30 min)"
      }
    ],
    "createdAt": "2026-01-26 10:20"
  },
  {
    "id": "INC-1089",
    "primaryReportId": "RNC-1089",
    "title": "Mayurakshi River Overflow Inundation - Dudhani",
    "emergencyType": "FLOOD",
    "location": "Dudhani, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.25821,
      "lng": 87.26814
    },
    "peopleAffected": 38,
    "priorityScore": 80,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-8",
    "assignedResponderName": "Dumka Santhal Pargana Flood Relief Squad",
    "assignedShelterId": "SHELTER-DMK-01",
    "eta": "30 min",
    "coordinatorUpdate": "Santhal Pargana rescue boats evacuated 26 residents to shelter.",
    "requiredResources": "Motorized rescue zodiacs, life jackets, high-volume dewatering pumps",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-27 14:35",
        "note": "Report filed by Hopna Marandi"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-27 14:35",
        "note": "Santhal Pargana rescue boats evacuated 26 residents to shelter."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-27 14:35",
        "note": "Assigned to Dumka Santhal Pargana Flood Relief Squad (ETA: 30 min)"
      }
    ],
    "createdAt": "2026-01-27 14:35"
  },
  {
    "id": "INC-1090",
    "primaryReportId": "RNC-1090",
    "title": "Community Center Wall Collapse - Rasikpur",
    "emergencyType": "BUILDING_COLLAPSE",
    "location": "Rasikpur, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.27541,
      "lng": 87.24852
    },
    "peopleAffected": 9,
    "priorityScore": 100,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-2",
    "assignedResponderName": "Ranchi SDRF Urban Search & Rescue Unit",
    "assignedShelterId": "SHELTER-DMK-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Hydraulic spreaders, stretchers, emergency trauma kits",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-28 18:50",
        "note": "Report filed by Chunnu Murmu"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-28 18:50",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-28 18:50",
        "note": "Assigned to Ranchi SDRF Urban Search & Rescue Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-28 18:50"
  },
  {
    "id": "INC-1091",
    "primaryReportId": "RNC-1091",
    "title": "Rural Causeway Torrent Rescue - Bandhdih",
    "emergencyType": "MISSING_PERSON",
    "location": "Bandhdih, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.28124,
      "lng": 87.27124
    },
    "peopleAffected": 2,
    "priorityScore": 54,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-8",
    "assignedResponderName": "Dumka Santhal Pargana Flood Relief Squad",
    "assignedShelterId": "SHELTER-DMK-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "River rescue boat, throwing lines, drone search unit",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-29 07:15",
        "note": "Report filed by Sonaram Soren"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-29 07:15",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-29 07:15",
        "note": "Assigned to Dumka Santhal Pargana Flood Relief Squad (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-29 07:15"
  },
  {
    "id": "INC-1092",
    "primaryReportId": "RNC-1092",
    "title": "Highway Timber Truck Collision - Kathikund Road",
    "emergencyType": "ROAD_ACCIDENT",
    "location": "Kathikund Road, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.26124,
      "lng": 87.29152
    },
    "peopleAffected": 14,
    "priorityScore": 100,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-5",
    "assignedResponderName": "Bokaro Heavy Extrication & Disaster Response Unit",
    "assignedShelterId": "SHELTER-DMK-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Hydraulic cutters, ALS ambulances, spinal stabilization backboards",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-30 11:40",
        "note": "Report filed by Md. Zakir"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-30 11:40",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-30 11:40",
        "note": "Assigned to Bokaro Heavy Extrication & Disaster Response Unit (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-30 11:40"
  },
  {
    "id": "INC-1093",
    "primaryReportId": "RNC-1093",
    "title": "Substation Switchgear Storm Damage - Gilanpara",
    "emergencyType": "POWER_OUTAGE",
    "location": "Gilanpara, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.27012,
      "lng": 87.25952
    },
    "peopleAffected": 22,
    "priorityScore": 45,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-10",
    "assignedResponderName": "Jharkhand Disaster Power & Utility Restoration Cell",
    "assignedShelterId": "SHELTER-DMK-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Mobile diesel generator 150kVA, switchgear replacement team",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-01-31 16:05",
        "note": "Report filed by Arbind Roy"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-01-31 16:05",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-01-31 16:05",
        "note": "Assigned to Jharkhand Disaster Power & Utility Restoration Cell (ETA: Completed)"
      }
    ],
    "createdAt": "2026-01-31 16:05"
  },
  {
    "id": "INC-1094",
    "primaryReportId": "RNC-1094",
    "title": "Post-Flood Malaria Cluster Triage - Babu Para",
    "emergencyType": "MEDICAL",
    "location": "Babu Para, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.26421,
      "lng": 87.25124
    },
    "peopleAffected": 16,
    "priorityScore": 70,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-9",
    "assignedResponderName": "Jharkhand Emergency ALS Mobile Intensive Care Unit",
    "assignedShelterId": "SHELTER-DMK-01",
    "eta": "25 min",
    "coordinatorUpdate": "Mobile medical camp active; 14 patients stabilized.",
    "requiredResources": "Mobile malaria clinic, IV artesunate kits, mosquito fogging units",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-02-01 08:30",
        "note": "Report filed by Sunita Devi"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-02-01 08:30",
        "note": "Mobile medical camp active; 14 patients stabilized."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-02-01 08:30",
        "note": "Assigned to Jharkhand Emergency ALS Mobile Intensive Care Unit (ETA: 25 min)"
      }
    ],
    "createdAt": "2026-02-01 08:30"
  },
  {
    "id": "INC-1095",
    "primaryReportId": "RNC-1095",
    "title": "Stone Quarry Slope Collapse - Shikaripara Road",
    "emergencyType": "LANDSLIDE",
    "location": "Shikaripara Road, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.23521,
      "lng": 87.28452
    },
    "peopleAffected": 12,
    "priorityScore": 79,
    "status": "RESOLVED",
    "assignedResponderId": "TEAM-6",
    "assignedResponderName": "Hazaribagh Hill & Mountain Rescue Squad",
    "assignedShelterId": "SHELTER-DMK-01",
    "eta": "Completed",
    "coordinatorUpdate": "Incident resolved; monitoring closed.",
    "requiredResources": "Heavy excavators, rock breakers, road clearance team",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-02-02 12:15",
        "note": "Report filed by Munna Hansda"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-02-02 12:15",
        "note": "Incident resolved; monitoring closed."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-02-02 12:15",
        "note": "Assigned to Hazaribagh Hill & Mountain Rescue Squad (ETA: Completed)"
      }
    ],
    "createdAt": "2026-02-02 12:15"
  },
  {
    "id": "INC-1096",
    "primaryReportId": "RNC-1096",
    "title": "Barrage Overflow & Causeway Inundation - Raneshwar",
    "emergencyType": "WATER_HAZARD",
    "location": "Raneshwar, Dumka, Jharkhand",
    "coordinates": {
      "lat": 24.16852,
      "lng": 87.35421
    },
    "peopleAffected": 15,
    "priorityScore": 65,
    "status": "DISPATCHED",
    "assignedResponderId": "TEAM-8",
    "assignedResponderName": "Dumka Santhal Pargana Flood Relief Squad",
    "assignedShelterId": "SHELTER-DMK-01",
    "eta": "8 min",
    "coordinatorUpdate": "Causeway closed; villagers ferried safely via rescue boat.",
    "requiredResources": "Inflatable rescue dinghies, warning sirens, life buoy rings",
    "timeline": [
      {
        "status": "REPORT SUBMITTED",
        "time": "2026-02-03 15:40",
        "note": "Report filed by Dinesh Tudu"
      },
      {
        "status": "COORDINATOR VERIFIED",
        "time": "2026-02-03 15:40",
        "note": "Causeway closed; villagers ferried safely via rescue boat."
      },
      {
        "status": "TEAM DISPATCHED",
        "time": "2026-02-03 15:40",
        "note": "Assigned to Dumka Santhal Pargana Flood Relief Squad (ETA: 8 min)"
      }
    ],
    "createdAt": "2026-02-03 15:40"
  }
];

export const INITIAL_MOCK_SHELTERS = [
  {
    "id": "SHELTER-RNC-01",
    "name": "Dhurwa Community Relief Shelter",
    "address": "Sector 3, Dhurwa, Ranchi, Jharkhand",
    "capacity": 350,
    "occupied": 165,
    "status": "OPEN",
    "contactPerson": "Rameshwar Munda",
    "phone": "+91 94311 00101",
    "amenities": [
      "Clean Water",
      "Medical Bay",
      "Power Generator",
      "Emergency Ration",
      "Bedding"
    ]
  },
  {
    "id": "SHELTER-RNC-02",
    "name": "Morabadi Indoor Stadium Relief Center",
    "address": "Morabadi Ground, Ranchi, Jharkhand",
    "capacity": 650,
    "occupied": 410,
    "status": "OPEN",
    "contactPerson": "Sanjay Mahto",
    "phone": "+91 94311 00102",
    "amenities": [
      "Large Capacity",
      "Medical Surgery Bay",
      "Food Kitchen",
      "Helipad Access",
      "Clean Water"
    ]
  },
  {
    "id": "SHELTER-JSR-01",
    "name": "Tata Sports Complex Multi-Purpose Relief Hub",
    "address": "Circuit House Area, Bistupur, Jamshedpur, Jharkhand",
    "capacity": 500,
    "occupied": 230,
    "status": "OPEN",
    "contactPerson": "Arjun Soren",
    "phone": "+91 94311 00103",
    "amenities": [
      "Indoor Arena",
      "Emergency Clinic",
      "Clean Water",
      "Food Distribution",
      "Generator Backup"
    ]
  },
  {
    "id": "SHELTER-JSR-02",
    "name": "Kadma Community Welfare Shelter",
    "address": "Kadma Main Road, Jamshedpur, Jharkhand",
    "capacity": 250,
    "occupied": 115,
    "status": "OPEN",
    "contactPerson": "Praveen Hansda",
    "phone": "+91 94311 00104",
    "amenities": [
      "Clean Water",
      "Medical Bay",
      "Child Care Space",
      "Emergency Ration"
    ]
  },
  {
    "id": "SHELTER-DHN-01",
    "name": "Koyla Nagar Community Relief Camp",
    "address": "Koyla Nagar, Dhanbad, Jharkhand",
    "capacity": 400,
    "occupied": 190,
    "status": "OPEN",
    "contactPerson": "Bikash Sengupta",
    "phone": "+91 94311 00105",
    "amenities": [
      "Clean Water",
      "Respiratory Clinic",
      "Heavy Power Generator",
      "Emergency Ration",
      "Bedding"
    ]
  },
  {
    "id": "SHELTER-DHN-02",
    "name": "Saraidhela Town Hall Emergency Shelter",
    "address": "Saraidhela Main Road, Dhanbad, Jharkhand",
    "capacity": 300,
    "occupied": 140,
    "status": "OPEN",
    "contactPerson": "Manoj Agarwal",
    "phone": "+91 94311 00106",
    "amenities": [
      "Clean Water",
      "First Aid Station",
      "Power Backup",
      "Cooked Meals"
    ]
  },
  {
    "id": "SHELTER-BKO-01",
    "name": "Bokaro Sector 4 Community Relief Center",
    "address": "City Center, Sector 4, Bokaro Steel City, Jharkhand",
    "capacity": 450,
    "occupied": 210,
    "status": "OPEN",
    "contactPerson": "Shailendra Singh",
    "phone": "+91 94311 00107",
    "amenities": [
      "Clean Water",
      "Trauma Bay",
      "Emergency Power",
      "Food Kitchen",
      "Sanitation Blocks"
    ]
  },
  {
    "id": "SHELTER-HZB-01",
    "name": "Hazaribagh District Sports Complex Shelter",
    "address": "Stadium Road, Matwari, Hazaribagh, Jharkhand",
    "capacity": 350,
    "occupied": 125,
    "status": "OPEN",
    "contactPerson": "Kishore Kumar Das",
    "phone": "+91 94311 00108",
    "amenities": [
      "Clean Water",
      "Medical First Aid",
      "Power Generator",
      "Emergency Ration",
      "Bedding"
    ]
  },
  {
    "id": "SHELTER-DGH-01",
    "name": "Deoghar Kunda Mela Ground Emergency Shelter",
    "address": "Baidyanath Dham Bypass, Kunda, Deoghar, Jharkhand",
    "capacity": 600,
    "occupied": 320,
    "status": "OPEN",
    "contactPerson": "Umesh Pandey",
    "phone": "+91 94311 00109",
    "amenities": [
      "Large Hall",
      "Mass Medical Care",
      "Clean Water",
      "Food Counters",
      "High-Mast Power Backup"
    ]
  },
  {
    "id": "SHELTER-DMK-01",
    "name": "Dumka Indoor Stadium Disaster Relief Hub",
    "address": "Dudhani Road, Dumka, Jharkhand",
    "capacity": 350,
    "occupied": 160,
    "status": "OPEN",
    "contactPerson": "Babulal Murmu",
    "phone": "+91 94311 00110",
    "amenities": [
      "Clean Water",
      "Emergency Medical Bay",
      "Food Supplies",
      "Boat Staging Area",
      "Power Generator"
    ]
  }
];

export const INITIAL_MOCK_VOLUNTEERS = [
  {
    "id": "VOL-01",
    "name": "Deepak Tirkey",
    "phone": "+91 94300 20001",
    "skills": [
      "Rescue Boat Operator",
      "First Aid"
    ],
    "location": "Dhurwa, Ranchi",
    "availability": "AVAILABLE"
  },
  {
    "id": "VOL-02",
    "name": "Pooja Bhengra",
    "phone": "+91 94300 20002",
    "skills": [
      "Registered Nurse",
      "Triage Care"
    ],
    "location": "Bariatu, Ranchi",
    "availability": "DEPLOYED"
  },
  {
    "id": "VOL-03",
    "name": "Arvind Mahato",
    "phone": "+91 94300 20003",
    "skills": [
      "Structural Assessment",
      "Civil Defense"
    ],
    "location": "Bistupur, Jamshedpur",
    "availability": "AVAILABLE"
  },
  {
    "id": "VOL-04",
    "name": "Sunita Soren",
    "phone": "+91 94300 20004",
    "skills": [
      "Community Health",
      "First Aid"
    ],
    "location": "Sakchi, Jamshedpur",
    "availability": "DEPLOYED"
  },
  {
    "id": "VOL-05",
    "name": "Amit Hansda",
    "phone": "+91 94300 20005",
    "skills": [
      "Search & Rescue",
      "Swimming Specialist"
    ],
    "location": "Mango, Jamshedpur",
    "availability": "AVAILABLE"
  },
  {
    "id": "VOL-06",
    "name": "Priya Sen",
    "phone": "+91 94300 20006",
    "skills": [
      "Emergency Medical Technician",
      "Triage Care"
    ],
    "location": "Saraidhela, Dhanbad",
    "availability": "DEPLOYED"
  },
  {
    "id": "VOL-07",
    "name": "Rahul Agarwal",
    "phone": "+91 94300 20007",
    "skills": [
      "Ham Radio Operator",
      "Logistics Coordinator"
    ],
    "location": "Bank More, Dhanbad",
    "availability": "AVAILABLE"
  },
  {
    "id": "VOL-08",
    "name": "Sanjay Munda",
    "phone": "+91 94300 20008",
    "skills": [
      "Heavy Vehicle Driver",
      "Road Clearance"
    ],
    "location": "Jharia, Dhanbad",
    "availability": "DEPLOYED"
  },
  {
    "id": "VOL-09",
    "name": "Manisha Kumari",
    "phone": "+91 94300 20009",
    "skills": [
      "First Aid & CPR",
      "Shelter Management"
    ],
    "location": "Sector 4, Bokaro",
    "availability": "AVAILABLE"
  },
  {
    "id": "VOL-10",
    "name": "Vikram Das",
    "phone": "+91 94300 20010",
    "skills": [
      "Electrical Safety",
      "Generator Technician"
    ],
    "location": "Chas, Bokaro",
    "availability": "DEPLOYED"
  },
  {
    "id": "VOL-11",
    "name": "Ananya Mukherjee",
    "phone": "+91 94300 20011",
    "skills": [
      "Mountain Search & Rescue",
      "Rope Rigging"
    ],
    "location": "Matwari, Hazaribagh",
    "availability": "AVAILABLE"
  },
  {
    "id": "VOL-12",
    "name": "Rajesh Murmu",
    "phone": "+91 94300 20012",
    "skills": [
      "Emergency Driver",
      "First Aid"
    ],
    "location": "Korrah, Hazaribagh",
    "availability": "AVAILABLE"
  },
  {
    "id": "VOL-13",
    "name": "Sneha Pandey",
    "phone": "+91 94300 20013",
    "skills": [
      "Crowd Control",
      "Emergency Triage",
      "Child Care"
    ],
    "location": "Tower Chowk, Deoghar",
    "availability": "DEPLOYED"
  },
  {
    "id": "VOL-14",
    "name": "Md. Tariq Alam",
    "phone": "+91 94300 20014",
    "skills": [
      "Paramedic Assistance",
      "Oxygen Administration"
    ],
    "location": "Jasidih, Deoghar",
    "availability": "AVAILABLE"
  },
  {
    "id": "VOL-15",
    "name": "Rohit Karmakar",
    "phone": "+91 94300 20015",
    "skills": [
      "Flood Boat Crew",
      "Water Purification Logistics"
    ],
    "location": "Dudhani, Dumka",
    "availability": "DEPLOYED"
  }
];

export const INITIAL_MOCK_RESPONSE_TEAMS = [
  {
    "id": "TEAM-1",
    "name": "Jharkhand NDRF 9th Battalion Quick Response",
    "type": "FLOOD",
    "members": 18,
    "vehicle": "Motorized Inflatable Boats & Dewatering High-Flow Pumps",
    "status": "ON_MISSION",
    "contact": "Cmdr. Rajesh Soren (+91 94310 11001)"
  },
  {
    "id": "TEAM-2",
    "name": "Ranchi SDRF Urban Search & Rescue Unit",
    "type": "COLLAPSE",
    "members": 14,
    "vehicle": "Heavy Rescue Crane, Hydraulic Cutters & Search Cameras",
    "status": "ON_MISSION",
    "contact": "Insp. Anand Kerketta (+91 94310 11002)"
  },
  {
    "id": "TEAM-3",
    "name": "Jamshedpur Industrial Fire & Hazmat Brigade",
    "type": "FIRE",
    "members": 16,
    "vehicle": "Heavy Foam Tender, Water Cannon & Chemical Neutralizer Van",
    "status": "ON_MISSION",
    "contact": "Chief Officer R. K. Mishra (+91 94310 11003)"
  },
  {
    "id": "TEAM-4",
    "name": "Dhanbad Coal Mines Rescue Station Squad",
    "type": "HAZMAT",
    "members": 12,
    "vehicle": "Mine Rescue Mobile Van & Self-Contained Breathing Units",
    "status": "ON_MISSION",
    "contact": "Supt. Alok Sengupta (+91 94310 11004)"
  },
  {
    "id": "TEAM-5",
    "name": "Bokaro Heavy Extrication & Disaster Response Unit",
    "type": "ACCIDENT",
    "members": 10,
    "vehicle": "Hydraulic Spreader Van & Mobile Trauma Extrication Unit",
    "status": "ON_MISSION",
    "contact": "Officer Vikram Singh (+91 94310 11005)"
  },
  {
    "id": "TEAM-6",
    "name": "Hazaribagh Hill & Mountain Rescue Squad",
    "type": "LANDSLIDE",
    "members": 12,
    "vehicle": "4x4 All-Terrain Slope Rescue Trucks & Earthmovers",
    "status": "AVAILABLE",
    "contact": "Capt. Sunil Marandi (+91 94310 11006)"
  },
  {
    "id": "TEAM-7",
    "name": "Deoghar Pilgrim Safety & Mass Emergency Squad",
    "type": "MEDICAL",
    "members": 20,
    "vehicle": "Advanced Life Support Mobile Clinic & Mass Casualty Van",
    "status": "ON_MISSION",
    "contact": "Dr. Priyaranjan Dubey (+91 94310 11007)"
  },
  {
    "id": "TEAM-8",
    "name": "Dumka Santhal Pargana Flood Relief Squad",
    "type": "FLOOD",
    "members": 14,
    "vehicle": "Rescue Boats, Outboard Motors & Drone Recon Units",
    "status": "AVAILABLE",
    "contact": "Sub-Insp. Babulal Hansda (+91 94310 11008)"
  },
  {
    "id": "TEAM-9",
    "name": "Jharkhand Emergency ALS Mobile Intensive Care Unit",
    "type": "MEDICAL",
    "members": 8,
    "vehicle": "Fleet of Critical Care Ambulances & Portable Ventilators",
    "status": "ON_MISSION",
    "contact": "Dr. Shweta Tirkey (+91 94310 11009)"
  },
  {
    "id": "TEAM-10",
    "name": "Jharkhand Disaster Power & Utility Restoration Cell",
    "type": "UTILITY",
    "members": 15,
    "vehicle": "Heavy Utility Boom Trucks, Mobile Generators & Cable Repair Units",
    "status": "AVAILABLE",
    "contact": "Eng. Manoj Verma (+91 94310 11010)"
  }
];
