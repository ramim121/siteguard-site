import type { IconName } from "@/components/icon-mark";

/* ------------------------------------------------------------------ Brand */
export const brand = {
  name: "SiteGuard",
  masterTagline: "Turn your cameras into a 24/7 safety system.",
  mission: "Make every camera intelligent, so no critical moment goes unseen.",
  email: "info@site-guard.ai",
  website: "site-guard.ai",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export const campaignLines = [
  "Every camera, now intelligent.",
  "Spotted in seconds, not hindsight.",
  "See everything. Miss nothing.",
  "Any camera. Total awareness.",
  "From footage to foresight.",
];

/* ------------------------------------------------------------ Brand pillars */
export const brandPillars: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Proactive",
    description: "We prevent and warn — we don't just record the past.",
    icon: "radar",
  },
  {
    title: "Real-time",
    description: "Event to alert in 0–3 seconds, every single time.",
    icon: "zap",
  },
  {
    title: "Any camera",
    description: "Works with the CCTV and network you already run.",
    icon: "camera",
  },
  {
    title: "Trustworthy",
    description: "Consent-based, configurable, privacy-aware by design.",
    icon: "shield",
  },
  {
    title: "Always on",
    description: "24/7 coverage with zero fatigue and zero blind spots.",
    icon: "clock",
  },
];

/* --------------------------------------------------------------- Home metrics */
export const homeMetrics: { value: string; label: string; description: string }[] = [
  {
    value: "90+",
    label: "Detection models",
    description: "Across threat, fire, PPE, behaviour, people, vehicles and environment.",
  },
  {
    value: "0–3s",
    label: "Event to alert",
    description: "From the moment a detection fires to the right person being notified.",
  },
  {
    value: "0",
    label: "New cameras needed",
    description: "Runs on the existing CCTV and network estate you already operate.",
  },
  {
    value: "24/7",
    label: "Zero-fatigue coverage",
    description: "Every feed analysed at once, continuously, with no blind spots.",
  },
];

/* ------------------------------------------------------- Operational pillars */
export const operationalPillars: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Detect what supervision misses",
    icon: "scan",
    description:
      "Weapons, fire, intrusion, PPE breaches and unsafe behaviour are surfaced the instant they happen.",
  },
  {
    title: "Alert the right person instantly",
    icon: "bell",
    description:
      "Push, SMS or email routes each event to the right staff with the exact camera and an evidence clip.",
  },
  {
    title: "Turn incidents into insight",
    icon: "dashboard",
    description:
      "One dashboard for live feeds, event logs and exportable reports across every shift, zone and site.",
  },
];

/* --------------------------------------------------------------- How it works */
export const howItWorks: { step: string; title: string; description: string; icon: IconName }[] = [
  {
    step: "01",
    title: "Connect",
    icon: "plug",
    description:
      "Plugs into existing IP cameras and NVRs over RTSP / ONVIF — no rewiring, no new hardware in most cases.",
  },
  {
    step: "02",
    title: "Detect",
    icon: "cpu",
    description:
      "AI models run on the edge box, analysing every feed in real time, 24/7, across all event categories.",
  },
  {
    step: "03",
    title: "Alert",
    icon: "bell",
    description:
      "Instant push, SMS or email to the right staff — with the exact camera, a clip and full context.",
  },
  {
    step: "04",
    title: "Analyze",
    icon: "dashboard",
    description:
      "One dashboard for live feeds, event logs and exportable reports for review and compliance.",
  },
];

/* --------------------------------------------------------- System architecture */
export const systemArchitecture: { step: string; title: string; description: string }[] = [
  {
    step: "01",
    title: "Front-end collecting",
    description:
      "Integrated, dome, semi-dome and handheld network cameras feed the existing CCTV environment.",
  },
  {
    step: "02",
    title: "Switches pooling",
    description:
      "Network switches and the NVR normalise and pool every stream for stable, resilient ingest.",
  },
  {
    step: "03",
    title: "Edge data computing",
    description:
      "The SiteGuard AI Box runs detection beside a streaming-media server and local data storage.",
  },
  {
    step: "04",
    title: "Platform accessing",
    description:
      "Web platform, admin control and mobile app surface live status, evidence and controls instantly.",
  },
];

/* ----------------------------------------------------------- Detection families */
export const detectionFamilies: {
  id: string;
  name: string;
  count: string;
  color: string;
  icon: IconName;
  description: string;
  models: string[];
}[] = [
  {
    id: "people",
    name: "People & Access",
    count: "12 models",
    color: "#1c8c7a",
    icon: "users",
    description: "Identity, occupancy and movement across entries, perimeters and zones.",
    models: [
      "Face Recognition",
      "People Counting",
      "Enter / Leave Area",
      "Cross-line",
      "Tripwire",
      "Overcrowding",
      "Intrusion",
      "License-Plate (LPC)",
    ],
  },
  {
    id: "threat",
    name: "Threat & Fire",
    count: "16 models",
    color: "#c1473d",
    icon: "flame",
    description: "The highest-stakes, life-safety detections demanding instant action.",
    models: [
      "Knife / Stick",
      "Fight",
      "Fall",
      "Fire",
      "Smoke & Fume",
      "Gas Leak",
      "Oil Leak",
      "Blocked Evacuation Route",
      "No Fire Extinguisher",
    ],
  },
  {
    id: "ppe",
    name: "PPE & Compliance",
    count: "13 models",
    color: "#c57a1c",
    icon: "hardHat",
    description: "Continuous checks for protective equipment and dress-code rules.",
    models: [
      "Helmet",
      "Hi-Vis Vest",
      "Face Mask",
      "Gloves",
      "Goggles",
      "Safety Belt",
      "Chef Hat / Uniform",
      "Exposed Long Hair",
      "Work Clothes",
    ],
  },
  {
    id: "behaviour",
    name: "Behaviour & Activity",
    count: "14 models",
    color: "#5b6ccb",
    icon: "activity",
    description: "Risky or non-compliant behaviour that happens between rounds.",
    models: [
      "Smoking",
      "Phone / Calling",
      "Sleeping / Absence",
      "Long Stay",
      "People Gathering",
      "Quick Moving",
      "Inadequate Worker",
    ],
  },
  {
    id: "vehicle",
    name: "Vehicle & Traffic",
    count: "18 models",
    color: "#3e7c8c",
    icon: "car",
    description: "Parking, speed, congestion and access discipline for vehicles.",
    models: [
      "Illegal Parking",
      "Overspeed",
      "Forklift",
      "Congestion",
      "Wrong-Way",
      "Traffic Accident",
      "Pedestrian Intrusion",
      "Emergency Lane",
    ],
  },
  {
    id: "environment",
    name: "Environment & Housekeeping",
    count: "19 models",
    color: "#5e8a4e",
    icon: "leaf",
    description: "Sanitation, hazards and site upkeep across community settings.",
    models: [
      "Trash Overflow",
      "Debris Stacking",
      "Exposed / Bagged Trash",
      "Water Accumulation",
      "Rat",
      "Dog",
      "Bare Soil",
      "Dump-Truck Tarp",
    ],
  },
];

/* ------------------------------------------------------------- Scenario packs */
export type ScenarioPack = {
  slug: string;
  name: string;
  count: string;
  icon: IconName;
  focus: string;
  models: string[];
  why: string;
  badge?: string;
  href?: string;
};

export const scenarioPacks: ScenarioPack[] = [
  {
    slug: "safe-school",
    name: "Safe School",
    count: "16 models",
    icon: "school",
    focus: "Safeguarding, behaviour, access",
    models: ["Knife / Stick", "Fire", "Smoke & Fume", "Smoking", "Phone / Calling", "Sleeping / Absence", "Enter / Leave Area", "People Counting", "Face Recognition", "Fall", "Intrusion", "Fight"],
    why: "Schools carry a duty of care across corridors, gates and yards that no team can watch at once. This pack front-loads life-safety detections — weapons, fire and falls — alongside safeguarding and access models, so staff are alerted in seconds and every event is evidence-backed for later review.",
  },
  {
    slug: "smart-hospital",
    name: "Smart Hospital",
    count: "18 models",
    icon: "heart",
    focus: "Falls, wandering, ward safety",
    models: ["Fall", "Long Stay", "People Gathering", "Enter / Leave Area", "Intrusion", "Face Mask", "Face Recognition", "Smoking", "Fire", "Abandoned Object"],
    why: "Wards balance patient welfare with restricted-area control. The pack watches for falls, wandering and gatherings as a quiet welfare check rather than a public alarm, while guarding drug stores and staff-only zones — helping thin overnight teams reach the right patient faster.",
  },
  {
    slug: "construction-site",
    name: "Construction Site",
    count: "12 models",
    icon: "hardHat",
    focus: "Helmet/vest, intrusion, falls",
    models: ["Helmet", "Hi-Vis Vest", "Safety Belt", "Fall", "Intrusion", "Fire", "Forklift", "Illegal Parking", "Dump-Truck Tarp", "People Counting"],
    why: "Fast-changing sites with contractor turnover make manual PPE checks impossible to sustain. The pack enforces helmet, vest and harness compliance, flags falls and after-hours intrusion, and keeps plant and vehicles in order — cutting incidents and evidencing compliance without a marshal at every gate.",
  },
  {
    slug: "bright-kitchen",
    name: "Bright Kitchen",
    count: "10 models",
    icon: "chefHat",
    focus: "Hygiene, uniform, fire",
    models: ["Chef Hat / Uniform", "Face Mask", "Gloves", "Exposed Long Hair", "Smoking", "Phone / Calling", "Fire", "Rat", "Work Clothes"],
    why: "Commercial kitchens must prove hygiene and fire discipline continuously. The pack verifies chef hats, masks, gloves and uniform, flags smoking or phone use on the line, and watches for fire and pests — turning occasional spot-checks into constant, auditable assurance.",
  },
  {
    slug: "safe-community",
    name: "Safe Community",
    count: "19 models",
    icon: "building",
    focus: "Housekeeping, access, behaviour",
    models: ["Trash Overflow", "Debris Stacking", "Exposed / Bagged Trash", "Water Accumulation", "Illegal Parking", "Intrusion", "People Gathering", "Dog", "Fire", "Face Recognition"],
    why: "Residential and mixed-use estates juggle housekeeping, access and safety. The pack blends sanitation and upkeep detection with perimeter, parking and gathering awareness, so facilities teams act on issues before residents report them and keep shared spaces orderly.",
  },
  {
    slug: "safe-production",
    name: "Safe Production",
    count: "18 models",
    icon: "factory",
    focus: "PPE, leaks, restricted zones",
    models: ["Helmet", "Hi-Vis Vest", "Gloves", "Goggles", "Gas Leak", "Oil Leak", "Fire", "Forklift", "Intrusion", "Fall"],
    why: "Production floors combine PPE rules, exclusion zones and leak risk. The pack enforces protective equipment, guards machinery zones, and raises gas, oil and fire events instantly — reducing recordable incidents and downtime without new hardware on the floor.",
  },
  {
    slug: "gas-station",
    name: "Gas Station",
    count: "10 models",
    icon: "fuel",
    focus: "Fuelling safety, fire, loitering",
    models: ["Smoking", "Fire", "Phone / Calling", "Fall", "Intrusion", "People Counting", "Illegal Parking", "Congestion", "Long Stay"],
    why: "Forecourts mix fuel, vehicles and the public — a high-consequence environment. The pack enforces no-smoking and no-phone rules at the pump, watches for fire and falls, and manages vehicle flow and after-hours loitering, protecting people and property around the clock.",
  },
  {
    slug: "highway",
    name: "Highway",
    count: "15 models",
    icon: "route",
    focus: "Accidents, wrong-way, congestion",
    models: ["Traffic Accident", "Wrong-Way", "Congestion", "Overspeed", "Emergency Lane", "Pedestrian Intrusion", "Illegal Parking", "Debris Stacking"],
    why: "Highways need incidents seen the moment they happen. The pack detects accidents, wrong-way driving, congestion and emergency-lane abuse across long stretches, feeding control rooms faster than patrol or manual review and shortening response to keep traffic moving.",
  },
  {
    slug: "expressway-service",
    name: "Expressway Service",
    count: "18 models",
    icon: "warehouse",
    focus: "Housekeeping, behaviour, vehicles",
    models: ["Illegal Parking", "People Gathering", "Trash Overflow", "Smoking", "Fire", "Intrusion", "People Counting", "Congestion"],
    why: "Service areas are busy public sites attached to fast roads. The pack keeps housekeeping, behaviour and parking in order while guarding fuel and building safety, so a small team can run a large footprint with consistent standards.",
  },
  {
    slug: "rural-road",
    name: "Rural Road",
    count: "12 models",
    icon: "truck",
    focus: "Dumping, vehicles, gatherings",
    models: ["Debris Stacking", "Congestion", "Wrong-Way", "People Gathering", "Overspeed", "Intrusion", "Traffic Accident"],
    why: "Rural roads are lightly staffed but still see illegal dumping, accidents and unsafe driving. The pack brings automated oversight to spread-out routes, flagging dumping, congestion and collisions without a control room on site.",
  },
  {
    slug: "banking",
    name: "Smart Banking",
    count: "Live pack",
    icon: "landmark",
    focus: "Counter, cash, ATM, anti-fraud",
    badge: "Live",
    href: "/industries/banking",
    models: ["Cash Handoff & Count", "No Staff at Counter", "Sleeping / Phone Use", "Machine-Room Door", "Fight", "Fall", "Abandoned Object", "Fire & Smoke", "Watchlist Face", "Loitering"],
    why: "Banks own dozens of cameras per branch, yet supervision stays manual and reactive. The Smart Banking pack links video to the transaction record — verifying counter conduct and cash handling, guarding ATMs and cash rooms, and fusing branch and ATM cues into real-time anti-fraud warnings.",
  },
  {
    slug: "common",
    name: "Common",
    count: "20 models",
    icon: "radar",
    focus: "The cross-industry baseline",
    models: ["Face Recognition", "People Counting", "Intrusion", "Enter / Leave Area", "Fire", "Smoke & Fume", "Fall", "Smoking", "Illegal Parking", "Abandoned Object"],
    why: "The cross-industry baseline. Common bundles the detections almost every site needs — identity, occupancy, intrusion, fire and core safety — as a starting profile you extend with sector-specific models as requirements grow.",
  },
];

/* ------------------------------------------------------------- Severity model */
export const severityLevels: {
  key: string;
  name: string;
  code: string;
  hex: string;
  description: string;
  examples: string;
}[] = [
  {
    key: "critical",
    name: "Critical",
    code: "DANGER",
    hex: "#D6453C",
    description: "Immediate risk to life or security. Can trigger lockdown, PA or call-out.",
    examples: "Weapon · Fire · Fall · Intrusion",
  },
  {
    key: "warning",
    name: "Warning",
    code: "WARN",
    hex: "#E2922E",
    description: "Policy or safety breach needing review. Logged and routed to the right staff.",
    examples: "Smoking · Missing PPE · Overspeed",
  },
  {
    key: "info",
    name: "Info",
    code: "INFO",
    hex: "#5B6CCB",
    description: "Operational awareness and analytics. No action required — feeds counts and trends.",
    examples: "People counting · Enter / Leave · Long stay",
  },
  {
    key: "access",
    name: "Resolved",
    code: "OK",
    hex: "#1C8C7A",
    description: "Acknowledged, cleared or system-healthy. The calm, all-clear state.",
    examples: "Acknowledged · Cameras online",
  },
];

/* ----------------------------------------------------------------- Industries */
export const industries: {
  slug: string;
  name: string;
  tag: string;
  icon: IconName;
  pack: string;
  summary: string;
  focus: string[];
  status: "live" | "soon";
  href?: string;
}[] = [
  {
    slug: "schools",
    name: "Schools & Campuses",
    tag: "Safeguarding · behaviour · access",
    icon: "school",
    pack: "Safe School pack",
    summary:
      "Corridors, gates and yards become a continuous safety system — weapons, fire, vaping, wandering and access detected in seconds.",
    focus: ["Weapon & fire", "Vaping & phones", "Area entry / exit", "Face recognition"],
    status: "live",
    href: "/industries/schools",
  },
  {
    slug: "construction",
    name: "Construction Sites",
    tag: "PPE · intrusion · falls",
    icon: "hardHat",
    pack: "Construction Site pack",
    summary:
      "Fast-changing, multi-zone sites get continuous PPE enforcement, fall and intrusion alerts, and clear vehicle discipline.",
    focus: ["Helmet & harness", "Fall detection", "Intrusion", "Dump-truck tarp"],
    status: "live",
    href: "/industries/construction",
  },
  {
    slug: "banking",
    name: "Banking & Finance",
    tag: "Counter conduct · cash · ATM security",
    icon: "landmark",
    pack: "Smart Banking pack",
    summary:
      "Branches, cash rooms and ATMs become an always-on supervision system — counter conduct, cash handling, fraud cues and after-hours intrusion, on the cameras the bank already runs.",
    focus: ["Counter & cash handling", "ATM security", "Anti-fraud warning", "Watchlist faces"],
    status: "live",
    href: "/industries/banking",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Warehousing",
    tag: "PPE · hazards · restricted zones",
    icon: "factory",
    pack: "Safe Production pack",
    summary:
      "Floor-wide supervision for PPE compliance, machinery exclusion zones, leaks and unsafe behaviour — with no added hardware.",
    focus: ["Helmet & vest", "Gas / oil leak", "Forklift safety", "Restricted zones"],
    status: "soon",
  },
  {
    slug: "healthcare",
    name: "Healthcare & Aged Care",
    tag: "Falls · wandering · ward safety",
    icon: "heart",
    pack: "Smart Hospital pack",
    summary:
      "Ward-safe supervision for falls, wandering, gatherings and restricted-area access — a quiet welfare check, not a public call-out.",
    focus: ["Fall detection", "Long stay", "Area entry", "People gathering"],
    status: "soon",
  },
  {
    slug: "retail",
    name: "Retail & Commercial",
    tag: "Loss prevention · crowding · queues",
    icon: "store",
    pack: "Common pack",
    summary:
      "Service-floor visibility that pairs loss prevention with crowd and queue analytics, plus perimeter and incident awareness.",
    focus: ["Intrusion", "Crowd density", "Queue analytics", "Face recognition"],
    status: "soon",
  },
  {
    slug: "hospitality",
    name: "Hospitality & Kitchens",
    tag: "Hygiene · uniform · fire",
    icon: "chefHat",
    pack: "Bright Kitchen pack",
    summary:
      "Commercial kitchens prove hygiene and fire discipline continuously — chef hats, masks, gloves and uniform, with smoking and fire alerts.",
    focus: ["Chef hat & mask", "Gloves", "Smoking", "Fire & pests"],
    status: "soon",
  },
  {
    slug: "community",
    name: "Communities & Facilities",
    tag: "Housekeeping · access · behaviour",
    icon: "building",
    pack: "Safe Community pack",
    summary:
      "Residential and mixed-use estates combine sanitation and upkeep detection with perimeter, parking and gathering awareness.",
    focus: ["Housekeeping", "Intrusion", "Illegal parking", "People gathering"],
    status: "soon",
  },
  {
    slug: "transport",
    name: "Transport & Logistics",
    tag: "Perimeter · vehicles · loading bays",
    icon: "truck",
    pack: "Expressway Service pack",
    summary:
      "Perimeter security, vehicle discipline and loading-bay supervision across yards, depots and service areas.",
    focus: ["Perimeter", "Overspeed", "Wrong-way", "Loading bays"],
    status: "soon",
  },
  {
    slug: "roads",
    name: "Roads & Highways",
    tag: "Accidents · wrong-way · congestion",
    icon: "route",
    pack: "Highway pack",
    summary:
      "Traffic incidents seen the moment they happen — accidents, wrong-way driving, congestion and emergency-lane abuse across long stretches.",
    focus: ["Accident", "Wrong-way", "Congestion", "Emergency lane"],
    status: "soon",
  },
  {
    slug: "fuel",
    name: "Fuel & Energy",
    tag: "Fuelling safety · fire · loitering",
    icon: "fuel",
    pack: "Gas Station pack",
    summary:
      "High-consequence forecourts enforce no-smoking and no-phone rules at the pump, watch for fire and falls, and manage vehicle flow.",
    focus: ["No smoking", "Fire", "Vehicle flow", "Loitering"],
    status: "soon",
  },
];

/* --------------------------------------------------------------- Outcomes */
export const outcomes: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Faster response",
    icon: "zap",
    description: "Alerts in seconds to the right staff — not a review of footage after the fact.",
  },
  {
    title: "Safer behaviour",
    icon: "shield",
    description: "People self-correct when they know risks are detected consistently.",
  },
  {
    title: "Evidence on demand",
    icon: "fileChart",
    description: "Time-stamped clips for records, incident reviews and audits.",
  },
  {
    title: "Lighter staff load",
    icon: "users",
    description: "No more watching a wall of monitors hoping to catch the one thing that matters.",
  },
  {
    title: "No new hardware",
    icon: "camera",
    description: "Runs on the CCTV and network you already operate — most sites add nothing.",
  },
  {
    title: "Multi-site view",
    icon: "dashboard",
    description: "Manage many sites from one dashboard, with consistent rules everywhere.",
  },
];

/* --------------------------------------------------------- Detection frames */
export type FrameData = {
  category: "critical" | "hazard" | "behaviour" | "access";
  cam: string;
  zone: string;
  timestamp: string;
  objectTag: string;
  model: string;
  label: string;
  confidence: string;
  glyph: string;
};

export const heroFrames: FrameData[] = [
  {
    category: "critical",
    cam: "CAM 01 · GATE A",
    zone: "ZONE A",
    timestamp: "29 JUN 2026 · 13:47:34",
    objectTag: "OBJ-01 · KNIFE",
    model: "KnifeStickDetection",
    label: "Weapon detected",
    confidence: "96",
    glyph: "/brand/no-weapons.png",
  },
  {
    category: "access",
    cam: "CAM 16 · ENTRANCE",
    zone: "ZONE A",
    timestamp: "29 JUN 2026 · 13:48:02",
    objectTag: "FACE · MATCH",
    model: "FaceRecognition",
    label: "Identity verified",
    confidence: "99",
    glyph: "/brand/face_recognition.png",
  },
];

export const sectionFrames: FrameData[] = [
  {
    category: "critical",
    cam: "CAM 09 · SCIENCE LAB 2",
    zone: "ZONE C",
    timestamp: "29 JUN 2026 · 09:14:51",
    objectTag: "OBJ · FLAME",
    model: "FireDetection",
    label: "Fire detected",
    confidence: "97",
    glyph: "/brand/fire_flame.png",
  },
  {
    category: "hazard",
    cam: "CAM 15 · WASHROOM 3",
    zone: "ZONE B",
    timestamp: "29 JUN 2026 · 12:40:51",
    objectTag: "OBJ · CIGARETTE",
    model: "SmokingAlarm",
    label: "Smoking detected",
    confidence: "93",
    glyph: "/brand/smoking.png",
  },
  {
    category: "behaviour",
    cam: "CAM 18 · EXAM HALL",
    zone: "ZONE A",
    timestamp: "29 JUN 2026 · 10:22:08",
    objectTag: "OBJ · PHONE",
    model: "PlayMobilePhoneDetection",
    label: "Phone in use",
    confidence: "95",
    glyph: "/brand/using_phone.png",
  },
  {
    category: "access",
    cam: "CAM 06 · MAIN HALL",
    zone: "ZONE A",
    timestamp: "29 JUN 2026 · 08:31:12",
    objectTag: "COUNT · 132",
    model: "AreaPeopleCounting",
    label: "Occupancy 132 / 150",
    confidence: "—",
    glyph: "/brand/human_counting.png",
  },
];

/* ----------------------------------------------------------- Live ticker feed */
export const tickerEvents: { name: string; loc: string; severity: string }[] = [
  { name: "Knife / Stick", loc: "NYK OLD KI", severity: "critical" },
  { name: "Smoking", loc: "NYK NEW FL", severity: "warning" },
  { name: "Fire / Smoke", loc: "LAB 2", severity: "critical" },
  { name: "People Gathering", loc: "NYK OLD KI", severity: "info" },
  { name: "No Helmet", loc: "GATE A", severity: "warning" },
  { name: "Fall Detected", loc: "WARD 4", severity: "critical" },
  { name: "Enter Area", loc: "DOCK 3", severity: "info" },
  { name: "Overspeed", loc: "LOT B", severity: "warning" },
  { name: "Phone Use", loc: "ROOM 12", severity: "info" },
  { name: "Face Match", loc: "RECEPTION", severity: "access" },
  { name: "Mask Compliance", loc: "SICK BAY", severity: "warning" },
  { name: "Sleeping", loc: "NYK OLD IM", severity: "warning" },
];

/* ----------------------------------------------------------- Platform screens */
export const platformScreens = {
  dashboard: {
    src: "/app/dashboard.png",
    alt: "SiteGuard command dashboard with camera health, severity counts and recent alerts.",
    label: "Dashboard · Live Monitor",
  },
  live: {
    src: "/app/live.png",
    alt: "SiteGuard live multi-camera monitoring grid.",
    label: "Live · Camera wall",
  },
  alerts: {
    src: "/app/alerts.png",
    alt: "SiteGuard alert history table with severity pills, cameras and evidence thumbnails.",
    label: "Alerts · History",
  },
  alertDetail: {
    src: "/app/alert-detail.png",
    alt: "SiteGuard alert detail modal showing a detection frame with bounding box and actions.",
    label: "Alerts · Detail",
  },
  faces: {
    src: "/app/face-recognition.png",
    alt: "SiteGuard facial recognition view matching a face against enrolled records.",
    label: "Faces · Recognition",
  },
  reports: {
    src: "/app/reports.png",
    alt: "SiteGuard reports and analytics with alert trends, per-camera and distribution charts.",
    label: "Reports · Analytics",
  },
  cameras: {
    src: "/app/cameras.png",
    alt: "SiteGuard camera management view.",
    label: "Cameras · Management",
  },
};

export const platformMoments: { eyebrow: string; title: string; description: string; icon: IconName }[] = [
  {
    eyebrow: "Live operations",
    title: "A clean multi-camera live wall.",
    icon: "camera",
    description:
      "Monitor critical zones at once without losing legibility or calm operational control.",
  },
  {
    eyebrow: "Alert intelligence",
    title: "Every incident arrives with context.",
    icon: "bell",
    description:
      "Severity, model, camera, location, confidence and a clip appear together so teams act fast.",
  },
  {
    eyebrow: "Trend reporting",
    title: "From incidents to patterns.",
    icon: "dashboard",
    description:
      "Alert trends, per-camera severity and detection distribution for operations and leadership.",
  },
];

export const platformStats = [
  { num: "48 / 48", lbl: "Feeds online" },
  { num: "0–3s", lbl: "Alert latency" },
  { num: "569", lbl: "Alerts logged" },
];

/* ------------------------------------------------------ Experience center */
export const experienceCategories: {
  id: string;
  name: string;
  icon: IconName;
}[] = [
  { id: "people", name: "People & Access", icon: "users" },
  { id: "threat", name: "Threat & Fire", icon: "flame" },
  { id: "ppe", name: "PPE & Compliance", icon: "hardHat" },
  { id: "behaviour", name: "Behaviour & Activity", icon: "activity" },
  { id: "vehicle", name: "Vehicle & Traffic", icon: "car" },
  { id: "environment", name: "Environment & Housekeeping", icon: "leaf" },
];

export type ExperienceDetection = {
  id: string;
  categoryId: string;
  name: string;
  severity: "critical" | "warning" | "info" | "access";
  image: string | null;
  glyph: string;
  description: string;
};

const DET = "/solutions/detections";

export const experienceDetections: ExperienceDetection[] = [
  // People & Access
  { id: "face-recognition", categoryId: "people", name: "Face Recognition", severity: "access", image: `${DET}/face-recognition.png`, glyph: "/brand/face_recognition.png", description: "Matches faces against enrolled staff, visitor and watchlist records at entry points." },
  { id: "people-counting", categoryId: "people", name: "People Counting", severity: "info", image: `${DET}/total-number-count-clean.png`, glyph: "/brand/human_counting.png", description: "Keeps an accurate, real-time headcount in any monitored area." },
  { id: "human-count", categoryId: "people", name: "Occupancy & Footfall", severity: "info", image: `${DET}/human-count.png`, glyph: "/brand/human_counting.png", description: "Tracks live occupancy and footfall trends for capacity planning and peak-time insight." },
  { id: "crowd-density", categoryId: "people", name: "Crowd Density", severity: "info", image: `${DET}/scenario-crowd-density.png`, glyph: "/brand/human_counting.png", description: "Flags density build-up in lobbies, halls, queues and access points." },
  { id: "queue-monitoring", categoryId: "people", name: "Queue Monitoring", severity: "info", image: `${DET}/scenario-queue-monitoring.png`, glyph: "/brand/human_counting.png", description: "Tracks waiting-line pressure and service-area congestion." },
  { id: "intrusion", categoryId: "people", name: "Intrusion", severity: "critical", image: `${DET}/intrusion.png`, glyph: "/brand/intrusion.png", description: "Flags movement inside restricted zones, perimeters or closed spaces." },
  { id: "enter-leave", categoryId: "people", name: "Enter / Leave Area", severity: "info", image: `${DET}/enter-leave-area.png`, glyph: "/brand/people-access.png", description: "Flags the moment a person enters or leaves a defined virtual zone." },
  { id: "cross-line", categoryId: "people", name: "Cross-line", severity: "info", image: null, glyph: "/brand/people-access.png", description: "Detects a person or object crossing a drawn tripwire line." },
  { id: "lpc", categoryId: "people", name: "License-Plate (LPC)", severity: "info", image: null, glyph: "/brand/cctv-camera.png", description: "Reads and logs vehicle plates at gates and entrances." },

  // Threat & Fire
  { id: "fire", categoryId: "threat", name: "Fire / Flame", severity: "critical", image: `${DET}/fire-alert.png`, glyph: "/brand/fire_flame.png", description: "Spots visible flame in any monitored area, indoors or out, day or night." },
  { id: "abandoned-object", categoryId: "threat", name: "Abandoned Object", severity: "critical", image: `${DET}/abandoned-object.png`, glyph: "/brand/critical-threat.png", description: "Identifies unattended objects and keeps a timestamped review trail." },
  { id: "knife-stick", categoryId: "threat", name: "Knife / Stick", severity: "critical", image: null, glyph: "/brand/no-weapons.png", description: "Identifies knives, sticks and similar handheld weapons on sight." },
  { id: "fall", categoryId: "threat", name: "Fall Detection", severity: "critical", image: `${DET}/fall.png`, glyph: "/brand/critical-threat.png", description: "Recognises a person falling or collapsing anywhere in view." },
  { id: "fight", categoryId: "threat", name: "Fight Detection", severity: "critical", image: `${DET}/fight.png`, glyph: "/brand/critical-threat.png", description: "Recognises aggressive grappling and striking between people." },
  { id: "smoke-fume", categoryId: "threat", name: "Smoke & Fume", severity: "critical", image: `${DET}/smoke-fume.png`, glyph: "/brand/fire_flame.png", description: "Confirms genuine fire events from combined smoke and flame signatures." },
  { id: "gas-leak", categoryId: "threat", name: "Gas Leak", severity: "critical", image: null, glyph: "/brand/hazard.png", description: "Flags visible gas or vapour escape in industrial settings." },

  // PPE & Compliance
  { id: "ppe-compliance", categoryId: "ppe", name: "PPE Compliance", severity: "warning", image: null, glyph: "/brand/hazard.png", description: "Verifies helmets, vests and worker PPE compliance in live footage." },
  { id: "no-helmet", categoryId: "ppe", name: "No Helmet", severity: "warning", image: null, glyph: "/brand/hazard.png", description: "Escalates missing-helmet events with evidence-ready context." },
  { id: "helmet-violation", categoryId: "ppe", name: "Helmet Violation", severity: "warning", image: null, glyph: "/brand/hazard.png", description: "Flags helmet non-compliance across active work zones." },
  { id: "hi-vis", categoryId: "ppe", name: "Hi-Vis Vest", severity: "warning", image: `${DET}/safety-vest.png`, glyph: "/brand/people-access.png", description: "Verifies high-visibility vest compliance in shared zones." },
  { id: "mask", categoryId: "ppe", name: "Mask Compliance", severity: "warning", image: `${DET}/scenario-mask-compliance.png`, glyph: "/brand/hazard.png", description: "Flags missing face masks in zones where one is required." },
  { id: "ppe-scene", categoryId: "ppe", name: "Multi-Worker PPE Check", severity: "warning", image: null, glyph: "/brand/hazard.png", description: "Whole-scene PPE check across multiple workers at once." },
  { id: "harness", categoryId: "ppe", name: "Safety Harness", severity: "warning", image: null, glyph: "/brand/hazard.png", description: "Checks for a worn safety harness when working at height." },
  { id: "gloves-goggles", categoryId: "ppe", name: "Gloves & Goggles", severity: "warning", image: null, glyph: "/brand/hazard.png", description: "Verifies hand and eye protection in hazardous tasks." },

  // Behaviour & Activity
  { id: "smoking", categoryId: "behaviour", name: "Smoking", severity: "warning", image: `${DET}/smoking.png`, glyph: "/brand/smoking.png", description: "Identifies lit cigarettes, vapes and e-cigarettes anywhere in view." },
  { id: "phone-use", categoryId: "behaviour", name: "Phone Use", severity: "warning", image: `${DET}/phone-use.png`, glyph: "/brand/using_phone.png", description: "Recognises hand-to-screen and phone-holding postures." },
  { id: "sleeping", categoryId: "behaviour", name: "Sleeping / Absence", severity: "warning", image: `${DET}/sleep-on-duty.png`, glyph: "/brand/behaviour.png", description: "Spots head-down, prolonged-stillness postures or an empty post." },
  { id: "gathering", categoryId: "behaviour", name: "People Gathering", severity: "info", image: `${DET}/people-gathering.png`, glyph: "/brand/behaviour.png", description: "Flags sudden or abnormal grouping and crowd formation — distinct from steady headcount." },
  { id: "long-stay", categoryId: "behaviour", name: "Long Stay", severity: "info", image: `${DET}/long-stay.png`, glyph: "/brand/behaviour.png", description: "Detects a person loitering in an area beyond a set duration." },
  { id: "quick-moving", categoryId: "behaviour", name: "Quick Moving", severity: "warning", image: null, glyph: "/brand/behaviour.png", description: "Detects sudden running or scattering that can signal panic." },

  // Vehicle & Traffic
  { id: "illegal-parking", categoryId: "vehicle", name: "Illegal Parking", severity: "warning", image: `${DET}/no-parking.png`, glyph: "/brand/cctv-camera.png", description: "Flags vehicles blocking emergency, service or restricted access." },
  { id: "overspeed", categoryId: "vehicle", name: "Overspeed", severity: "warning", image: null, glyph: "/brand/cctv-camera.png", description: "Flags vehicles moving too fast on access roads and lots." },
  { id: "forklift", categoryId: "vehicle", name: "Forklift", severity: "info", image: null, glyph: "/brand/cctv-camera.png", description: "Detects forklift presence and movement near pedestrians." },
  { id: "wrong-way", categoryId: "vehicle", name: "Wrong-Way", severity: "critical", image: null, glyph: "/brand/cctv-camera.png", description: "Flags vehicles driving against the permitted direction." },

  // Environment & Housekeeping
  { id: "trash-overflow", categoryId: "environment", name: "Trash Overflow", severity: "info", image: null, glyph: "/brand/hazard.png", description: "Detects overflowing bins and exposed waste for housekeeping." },
  { id: "bare-soil", categoryId: "environment", name: "Bare Soil", severity: "info", image: null, glyph: "/brand/hazard.png", description: "Flags uncovered bare soil that should be sheeted on site." },
  { id: "debris", categoryId: "environment", name: "Debris Stacking", severity: "info", image: null, glyph: "/brand/hazard.png", description: "Detects improper debris and material stacking in walkways." },
];

/* ----------------------------------------------------------------- Schools */
export const schools = {
  kicker: "Tracking · 11 live models",
  title: "AI-powered campus safety",
  lead: "Turn the cameras you already have into a 24/7 safety system — protecting students on every corridor, gate and yard, around the clock.",
  heroFrame: {
    category: "critical" as const,
    cam: "CAM 01 · GATE A",
    zone: "ZONE A",
    timestamp: "29 JUN 2026 · 13:47:34",
    objectTag: "OBJ-01 · KNIFE",
    model: "KnifeStickDetection",
    label: "Weapon detected",
    confidence: "96",
    glyph: "/brand/no-weapons.png",
  },
  stats: [
    { num: "11", lbl: "Live detection models" },
    { num: "0–3s", lbl: "Event to the right person" },
    { num: "24/7", lbl: "Coverage, zero fatigue" },
  ],
  challenge: [
    {
      step: "01",
      title: "Many cameras, few eyes",
      description: "One or two staff cannot watch dozens of corridors, gates and yards at once.",
    },
    {
      step: "02",
      title: "Incidents happen between rounds",
      description: "Trespassing, vaping and hazards occur in the seconds nobody is looking.",
    },
    {
      step: "03",
      title: "Footage is reviewed too late",
      description: "CCTV records the past — it cannot warn anyone, or prevent harm, in the moment.",
    },
    {
      step: "04",
      title: "Duty of care keeps rising",
      description: "Parents, boards and regulators expect demonstrable, around-the-clock safeguarding.",
    },
  ],
  categories: [
    { key: "critical", label: "Critical Threats" },
    { key: "hazard", label: "Hazard & Health" },
    { key: "behaviour", label: "Behaviour & Wellbeing" },
    { key: "access", label: "People & Access" },
  ],
  detections: [
    {
      category: "critical" as const,
      title: "Weapon Detection",
      model: "KnifeStickDetection",
      cam: "CAM 01 · GATE A",
      zone: "ZONE A",
      timestamp: "29 JUN 2026 · 13:47:34",
      objectTag: "OBJ · KNIFE",
      confidence: "96",
      glyph: "/brand/no-weapons.png",
      lead: "Identifies knives, sticks and similar handheld weapons the moment they appear in view.",
      onCampus: [
        "Gate and entrance screening without slow, manual bag searches.",
        "Instant alert can trigger lockdown and notify security and police.",
        "After-hours intruders carrying weapons caught, even in low light.",
      ],
      impact: "The earliest possible warning for the highest-stakes threat a school can face.",
    },
    {
      category: "critical" as const,
      title: "Fire Detection",
      model: "FireDetection",
      cam: "CAM 09 · SCIENCE LAB 2",
      zone: "ZONE C",
      timestamp: "29 JUN 2026 · 09:14:51",
      objectTag: "OBJ · FLAME",
      confidence: "97",
      glyph: "/brand/fire_flame.png",
      lead: "Spots visible flame in any monitored area — indoors or outdoors, day or night.",
      onCampus: [
        "Covers labs, kitchens, boiler rooms and storage — the usual ignition points.",
        "Often faster than smoke detectors in open halls and outdoor areas.",
        "Pinpoints the exact room to speed a calm, targeted evacuation.",
      ],
      impact: "Seconds of early warning, before a small flame becomes a full evacuation.",
    },
    {
      category: "critical" as const,
      title: "Smoke & Fume Event",
      model: "SmokeAndFireDetectionEvent",
      cam: "CAM 12 · WORKSHOP",
      zone: "ZONE C",
      timestamp: "29 JUN 2026 · 09:18:20",
      objectTag: "OBJ · SMOKE",
      confidence: "95",
      glyph: "/brand/critical-threat.png",
      lead: "Confirms genuine fire events from combined smoke and flame signatures — built to cut false alarms.",
      onCampus: [
        "Tells a real fire apart from steam, dust or a vape cloud.",
        "Can trigger the fire alarm and public-address system automatically.",
        "Covers blind spots between conventional smoke detectors.",
      ],
      impact: "Escalation you can trust: fewer false alarms, faster response to real ones.",
    },
    {
      category: "hazard" as const,
      title: "Smoking Detection",
      model: "SmokingAlarm",
      cam: "CAM 15 · WASHROOM 3",
      zone: "ZONE B",
      timestamp: "29 JUN 2026 · 12:40:51",
      objectTag: "OBJ · CIGARETTE",
      confidence: "93",
      glyph: "/brand/smoking.png",
      lead: "Identifies lit cigarettes, vapes and e-cigarettes anywhere a camera can see.",
      onCampus: [
        "Covers washrooms, stairwells and back fields — the vaping hotspots.",
        "Logs repeat offenders to support pastoral follow-up.",
        "Enforces a smoke-free policy without stationing staff at every door.",
      ],
      impact: "A healthier, smoke-free campus, enforced consistently and without patrols.",
    },
    {
      category: "hazard" as const,
      title: "Mask Compliance",
      model: "NoMaskAlarm",
      cam: "CAM 02 · SICK BAY",
      zone: "ZONE A",
      timestamp: "29 JUN 2026 · 11:05:30",
      objectTag: "FACE · NO MASK",
      confidence: "92",
      glyph: "/brand/hazard.png",
      lead: "Flags anyone without a face mask in zones where one is required.",
      onCampus: [
        "Switch on instantly during a flu season or health emergency.",
        "Keep it on permanently for clinic, sick-bay and lab zones.",
        "Flexible rules per zone and per period — no blanket policy needed.",
      ],
      impact: "Stand up a health protocol overnight, and show evidence of compliance.",
    },
    {
      category: "behaviour" as const,
      title: "Phone Use Detection",
      model: "PlayMobilePhoneDetection",
      cam: "CAM 18 · EXAM HALL",
      zone: "ZONE A",
      timestamp: "29 JUN 2026 · 10:22:08",
      objectTag: "OBJ · PHONE",
      confidence: "95",
      glyph: "/brand/using_phone.png",
      lead: "Recognises hand-to-screen and phone-holding postures during lessons and exams.",
      onCampus: [
        "Enforce phone-free exam halls and classrooms automatically.",
        "Flag distraction during lessons for the teacher to address.",
        "Provide time-stamped evidence to support exam-integrity cases.",
      ],
      impact: "Protect learning time and exam fairness without confiscation battles.",
    },
    {
      category: "behaviour" as const,
      title: "Sleeping Detection",
      model: "SleepingDetectionAlarm",
      cam: "CAM 22 · LIBRARY",
      zone: "ZONE B",
      timestamp: "29 JUN 2026 · 14:02:44",
      objectTag: "POSE · HEAD-DOWN",
      confidence: "90",
      glyph: "/brand/behaviour.png",
      lead: "Spots head-down, prolonged-stillness postures that may signal a problem.",
      onCampus: [
        "A pupil unwell or asleep in class or the library gets noticed.",
        "Night security or boarding supervisors asleep on duty are flagged.",
        "Prompts a quiet welfare check rather than a public call-out.",
      ],
      impact: "Surface wellbeing and duty-of-care concerns early, before they're missed.",
    },
    {
      category: "access" as const,
      title: "Area Entry",
      model: "EnterArea",
      cam: "CAM 11 · ROOFTOP DOOR",
      zone: "ZONE D",
      timestamp: "29 JUN 2026 · 19:31:02",
      objectTag: "ZONE · ENTER",
      confidence: "96",
      glyph: "/brand/intrusion.png",
      lead: "Flags the moment a person enters a defined virtual zone on any camera.",
      onCampus: [
        "Protect out-of-bounds areas — rooftops, plant rooms, pools and labs.",
        "Alert on after-hours access to classrooms, offices and stores.",
        "Draw and redraw zones in software — no fences or sensors to fit.",
      ],
      impact: "Virtual fencing on any camera, protecting off-limits areas with no new hardware.",
    },
    {
      category: "access" as const,
      title: "Area Exit",
      model: "LeaveArea",
      cam: "CAM 03 · PERIMETER WEST",
      zone: "ZONE D",
      timestamp: "29 JUN 2026 · 15:12:55",
      objectTag: "ZONE · LEAVE",
      confidence: "95",
      glyph: "/brand/people-access.png",
      lead: "Flags the moment a person leaves a defined zone or crosses the perimeter.",
      onCampus: [
        "Catch a pupil wandering off-campus or out of a supervised area.",
        "Alert on perimeter and gate breaches the instant they happen.",
        "Extra safeguarding for early-years and SEN pupils who may stray.",
      ],
      impact: "Know the moment a child leaves a safe zone, and act before they're gone.",
    },
    {
      category: "access" as const,
      title: "People Counting",
      model: "AreaPeopleCounting",
      cam: "CAM 06 · MAIN HALL",
      zone: "ZONE A",
      timestamp: "29 JUN 2026 · 08:31:12",
      objectTag: "COUNT · 132 / 150",
      confidence: "—",
      glyph: "/brand/human_counting.png",
      lead: "Keeps an accurate, real-time headcount in any area, indoors or outdoors.",
      onCampus: [
        "Enforce assembly, hall and lab capacity limits automatically.",
        "Support evacuation roll-call with a live zone-by-zone count.",
        "Plan canteen and corridor flow around real peak-time data.",
      ],
      impact: "Live occupancy you can act on, for safety today and planning tomorrow.",
    },
    {
      category: "access" as const,
      title: "Face Recognition",
      model: "FaceRecognition",
      cam: "CAM 01 · MAIN ENTRANCE",
      zone: "ZONE A",
      timestamp: "29 JUN 2026 · 07:58:14",
      objectTag: "MATCH · WATCHLIST",
      confidence: "99",
      glyph: "/brand/face_recognition.png",
      lead: "Matches faces against enrolled staff, visitor and watchlist records at entry points.",
      onCampus: [
        "Flag banned or non-custodial individuals at the gate, silently.",
        "Automate staff and visitor access logs — no manual sign-in.",
        "Recognise expected visitors for a faster, warmer welcome.",
      ],
      impact: "Know who is on campus, automatically, with consent-based, configurable enrolment.",
    },
  ],
  roadmap: [
    { num: "01", title: "Uniform compliance", description: "Flags students out of dress code in monitored zones." },
    { num: "02", title: "Shirtless person", description: "Detects exposed-torso individuals in public areas." },
    { num: "03", title: "Illegal parking", description: "Spots vehicles stopped in fire lanes, gates and no-park zones." },
    { num: "04", title: "Exposed long hair", description: "Flags untied long hair near labs, machinery and kitchens." },
    { num: "05", title: "Climbing detection", description: "Catches climbing on fences, gates, roofs and railings." },
    { num: "06", title: "Fight detection", description: "Recognises aggressive grappling and striking between people." },
    { num: "07", title: "Quick movement", description: "Detects sudden running or scattering that signals panic." },
    { num: "08", title: "Overspeed detection", description: "Flags vehicles moving too fast on access roads and lots." },
  ],
};

/* -------------------------------------------------------------- Construction */
export const construction = {
  kicker: "Construction Site pack · Live",
  lead: "Fast-changing, multi-zone sites with contractor turnover and heavy plant are hard to supervise by eye. SiteGuard enforces PPE, catches falls and intrusion, and keeps vehicles in check — on the cameras already on site.",
  heroFrame: {
    category: "hazard" as const,
    cam: "CAM 04 · TOWER CRANE ZONE",
    zone: "ZONE B",
    timestamp: "29 JUN 2026 · 08:12:40",
    objectTag: "PPE · NO HELMET",
    model: "NoHelmetDetection",
    label: "No helmet",
    confidence: "94",
    glyph: "/brand/hazard.png",
  },
  stats: [
    { num: "12+", lbl: "Models in the pack" },
    { num: "0–3s", lbl: "Event to the right person" },
    { num: "24/7", lbl: "Coverage, zero fatigue" },
  ],
  challenge: [
    {
      step: "01",
      title: "Heavy machinery hazards",
      description: "Plant, lifts and exclusion zones create constant risk across active work areas.",
    },
    {
      step: "02",
      title: "Short-term, mixed crews",
      description: "Contractor turnover means inconsistent safety awareness and PPE discipline.",
    },
    {
      step: "03",
      title: "Blind spots over large sites",
      description: "Multi-zone, multi-level sites can't be watched by one or two pairs of eyes.",
    },
    {
      step: "04",
      title: "Manual checks miss violations",
      description: "PPE walk-rounds catch a moment; breaches happen in the gaps between them.",
    },
  ],
  detections: [
    {
      category: "hazard" as const,
      title: "Helmet Compliance",
      model: "NoHelmetDetection",
      cam: "CAM 04 · TOWER CRANE ZONE",
      zone: "ZONE B",
      timestamp: "29 JUN 2026 · 08:12:40",
      objectTag: "PPE · NO HELMET",
      confidence: "94",
      glyph: "/brand/hazard.png",
      lead: "Flags workers without a hard hat in any zone where one is mandatory.",
      onCampus: [
        "Enforce hard-hat rules at gates, lifts and active zones.",
        "Log repeat breaches by zone for toolbox-talk follow-up.",
        "No marshal needed at every entry point.",
      ],
      impact: "Continuous helmet enforcement, not a once-a-shift walk-round.",
    },
    {
      category: "hazard" as const,
      title: "Hi-Vis Vest Detection",
      model: "NoReflectiveClothing",
      cam: "CAM 07 · HAUL ROAD",
      zone: "ZONE C",
      timestamp: "29 JUN 2026 · 08:31:55",
      objectTag: "PPE · NO VEST",
      confidence: "92",
      glyph: "/brand/people-access.png",
      lead: "Verifies high-visibility clothing around plant, traffic and haul roads.",
      onCampus: [
        "Keep workers visible to vehicle and crane operators.",
        "Tighten rules on haul roads and loading zones.",
        "Pair with intrusion rules for exclusion areas.",
      ],
      impact: "Visibility enforced where a missed step meets a moving machine.",
    },
    {
      category: "hazard" as const,
      title: "Safety Harness Detection",
      model: "NoSafetyHarness",
      cam: "CAM 11 · SCAFFOLD L4",
      zone: "ZONE D",
      timestamp: "29 JUN 2026 · 09:48:12",
      objectTag: "PPE · NO HARNESS",
      confidence: "93",
      glyph: "/brand/hazard.png",
      lead: "Checks for a worn safety harness when working at height.",
      onCampus: [
        "Watch scaffold levels, edges and elevated platforms.",
        "Catch unclipped work before a fall, not after.",
        "Evidence trail for height-work compliance audits.",
      ],
      impact: "Address the leading cause of construction fatalities, proactively.",
    },
    {
      category: "critical" as const,
      title: "Fall Detection",
      model: "FallDetection",
      cam: "CAM 09 · EXCAVATION EDGE",
      zone: "ZONE D",
      timestamp: "29 JUN 2026 · 10:05:30",
      objectTag: "POSE · FALL",
      confidence: "95",
      glyph: "/brand/critical-threat.png",
      lead: "Recognises a person falling or collapsing anywhere in view.",
      onCampus: [
        "Trigger an immediate medical response with the exact location.",
        "Cover excavations, edges, voids and lone-worker zones.",
        "Day or night, indoors or out.",
      ],
      impact: "Seconds saved on a fall response can be the whole outcome.",
    },
    {
      category: "critical" as const,
      title: "Fire & Extinguisher",
      model: "FireDetection",
      cam: "CAM 02 · FUEL STORE",
      zone: "ZONE A",
      timestamp: "29 JUN 2026 · 11:20:08",
      objectTag: "OBJ · FLAME",
      confidence: "97",
      glyph: "/brand/fire_flame.png",
      lead: "Spots visible flame and flags missing or blocked fire extinguishers.",
      onCampus: [
        "Cover fuel stores, hot-works and cabins.",
        "Flag a missing or removed extinguisher at its station.",
        "Faster than waiting for someone to raise the alarm.",
      ],
      impact: "Early fire warning where ignition sources cluster.",
    },
    {
      category: "access" as const,
      title: "Restricted-Zone Intrusion",
      model: "EnterArea",
      cam: "CAM 14 · NORTH PERIMETER",
      zone: "ZONE E",
      timestamp: "29 JUN 2026 · 21:42:17",
      objectTag: "ZONE · ENTER",
      confidence: "96",
      glyph: "/brand/intrusion.png",
      lead: "Flags people entering exclusion zones or the site after hours.",
      onCampus: [
        "Virtual fencing around plant and exclusion zones.",
        "After-hours intrusion and theft alerts on existing cameras.",
        "Draw and redraw zones in software — no physical barriers.",
      ],
      impact: "Perimeter and exclusion-zone security with zero new hardware.",
    },
    {
      category: "behaviour" as const,
      title: "Dump-Truck Tarp",
      model: "DumpTruckWithoutTarp",
      cam: "CAM 18 · SITE EXIT",
      zone: "ZONE C",
      timestamp: "29 JUN 2026 · 14:09:44",
      objectTag: "VEH · NO TARP",
      confidence: "90",
      glyph: "/brand/cctv-camera.png",
      lead: "Detects dump trucks leaving with an uncovered load.",
      onCampus: [
        "Enforce covered-load rules at the site exit.",
        "Reduce spillage, dust and roadway complaints.",
        "Support environmental and local-authority compliance.",
      ],
      impact: "Keep loads covered and the site's reputation clean.",
    },
    {
      category: "access" as const,
      title: "Site Headcount",
      model: "AreaPeopleCounting",
      cam: "CAM 01 · MUSTER POINT",
      zone: "ZONE A",
      timestamp: "29 JUN 2026 · 07:02:11",
      objectTag: "COUNT · 38 / 40",
      confidence: "—",
      glyph: "/brand/human_counting.png",
      lead: "Keeps a live headcount for muster points and zone capacity.",
      onCampus: [
        "Support evacuation roll-call with a live count.",
        "Track who is in which zone for permit-to-work.",
        "Plan welfare and access around real peak data.",
      ],
      impact: "A reliable headcount when an evacuation actually happens.",
    },
  ],
};

/* ------------------------------------------------------------------ Banking */
export const bank = {
  kicker: "Smart Banking pack · Live",
  lead: "A bank already owns dozens of cameras per branch, yet supervision stays fragmented, reactive and manual. SiteGuard links that video to business operations — turning the existing security estate into an intelligent supervision system, with no rip-and-replace.",
  heroFrame: {
    category: "access" as const,
    cam: "CAM 03 · COUNTER 02",
    zone: "ZONE B",
    timestamp: "06 JUL 2026 · 11:04:52",
    objectTag: "PROC · CASH HANDOFF",
    model: "CashHandoffDetection",
    label: "Cash handoff verified",
    confidence: "97",
    glyph: "/brand/human_counting.png",
  },
  stats: [
    { num: "400+", lbl: "Algorithms in the library" },
    { num: "95%", lbl: "Production accuracy" },
    { num: "100%", lbl: "Transaction coverage" },
  ],
  gaps: [
    { step: "01", title: "Siloed departments", description: "Ops, security and compliance each review the same footage separately." },
    { step: "02", title: "Supervision lags events", description: "Spot checks surface problems only after they've happened." },
    { step: "03", title: "Manpower-bound coverage", description: "Too many branches, too few staff — only sampling is realistic." },
    { step: "04", title: "Video that's never watched", description: "Recorders fill with footage no one ever analyses." },
  ],
  zones: [
    { name: "Lobby", icon: "users" as IconName, description: "Queue build-up, crowding, falls and after-hours intrusion across the public hall." },
    { name: "Inside counter", icon: "user" as IconName, description: "Teller conduct, cash handoffs and counts, attire and away-from-post time." },
    { name: "Cash room", icon: "shield" as IconName, description: "Dual-control checks, door-open duration and out-of-hours access alerts." },
    { name: "ATM area", icon: "cpu" as IconName, description: "Fighting, falls, gatherings, abandoned items, fire and watchlist matches." },
  ],
  sections: [
    {
      id: "coverage",
      eyebrow: "Coverage",
      title: "Every zone of the branch, covered.",
      description: "One inference platform, tailored per area — lobby, counter, cash room and ATM, with cameras and algorithms matched to what each zone needs to see.",
      image: "/bank/coverage-map.jpg",
      alt: "Branch layout showing SiteGuard coverage of lobby, inside counter, cash room and ATM area",
    },
    {
      id: "counter",
      eyebrow: "Counter & cash",
      title: "Every counter step, verified on camera.",
      description: "Cash handoff, count check and deposit are detected and tied to the transaction record — with live customer counts and serving and waiting times per counter.",
      image: "/bank/counter-detections.jpg",
      alt: "Bank counter detection models: cash handoff, count check, cash receive and customer service times",
    },
    {
      id: "personnel",
      eyebrow: "Personnel & compliance",
      title: "Conduct flagged as it happens.",
      description: "Empty counters, improper attire, phone use, sleeping on duty, staff arrival times and machine-room doors — continuous, evidence-backed and auditable.",
      image: "/bank/personnel-detections.jpg",
      alt: "Banking personnel detection models: no staff at counter, machine-room door, screen lock, attire, sleeping, phone use",
    },
    {
      id: "atm",
      eyebrow: "ATM security",
      title: "The ATM and its backroom, watched around the clock.",
      description: "Fighting, falls, crowd gathering, abandoned items, fire and smoke, restricted-entry breaches and blacklisted-face matches — most exposed exactly when no one is looking.",
      image: "/bank/atm-detections.jpg",
      alt: "ATM detection models: fighting, fall, restricted backroom entry, crowd gathering, abandoned item, fire and smoke, wandering, blacklist",
    },
    {
      id: "practice",
      eyebrow: "In practice",
      title: "Deployed to a proven standard.",
      description: "Camera positioning is codified from field experience — counter, cash-replenishment room and behaviour zones tuned per area, on the equipment you already run.",
      image: "/bank/deployed-standard.jpg",
      alt: "Real SiteGuard bank deployment: counter area, cash replenishment room, smoking and sleeping detection",
    },
    {
      id: "deployments",
      eyebrow: "In the field",
      title: "Warnings that work in production.",
      description: "Fight, loitering, suspicious-person, entry/exit, fall, device-tampering and fire warnings — running live across branch and ATM deployments.",
      image: "/bank/deployments.jpg",
      alt: "SiteGuard deployment examples: fight, loitering, suspicious person, entry and exit, fall, device tampering and fire warnings",
    },
  ],
  fraud: {
    title: "Anti-fraud early warning",
    description: "The model fuses risk cues across the counter and the machine to flag telecom and social-engineering fraud patterns in real time.",
    branch: ["Same individual visiting frequently", "Mask + cap + large withdrawal"],
    atm: ["Unusually long ATM session", "Mask + baseball cap", "Frequent card swapping"],
  },
  security: [
    { title: "Physical isolation", description: "One-way transmission behind data diodes — never touching the core banking system." },
    { title: "Non-sensitive only", description: "Matching uses transaction codes, numbers and times. Identity and accounts are never captured." },
    { title: "Internal network", description: "Runs without connecting to the public internet — no data-leakage path." },
    { title: "Encrypted & logged", description: "Encrypted in motion and at rest; every action recorded and permission-controlled." },
  ],
  roi: [
    { num: "10×", lbl: "More violations detected", sub: "5–10× the efficiency of manual spot-checks" },
    { num: "90%", lbl: "Lower manpower cost", sub: "About one-tenth of traditional review time" },
    { num: "100%", lbl: "Transaction coverage", sub: "Every item reviewed continuously, not sampled" },
  ],
};

/* ------------------------------------------------------------------ Contact */
export const contactDetails: { label: string; value: string; icon: IconName }[] = [
  { label: "Contact person", value: "Md Ashraf Siddiquee", icon: "user" },
  { label: "Email", value: "ashraf.siddiquee@maxgroup-bd.com", icon: "mail" },
  { label: "General enquiries", value: "info@site-guard.ai", icon: "mail" },
  { label: "Phone", value: "01730589252", icon: "phone" },
  { label: "Address", value: "House B186, Road 20, Mohakhali DOHS, Dhaka 1206, Bangladesh", icon: "mapPin" },
  { label: "Website", value: "site-guard.ai", icon: "radar" },
];

export const footerInfo = {
  developer: "Developed by NYK Advance Ltd.",
  email: "info@site-guard.ai",
  salesEmail: "ashraf.siddiquee@maxgroup-bd.com",
  phone: "01730589252",
  website: "site-guard.ai",
  address: "House B186, Road 20, Mohakhali DOHS, Dhaka 1206, Bangladesh",
};

export const footerSections = [
  {
    title: "Platform",
    links: [
      { href: "/product", label: "Detection models" },
      { href: "/product", label: "Live monitoring" },
      { href: "/product", label: "Alerts & reports" },
      { href: "/product", label: "Face recognition" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/industries/schools", label: "Schools" },
      { href: "/industries/construction", label: "Construction" },
      { href: "/industries/banking", label: "Banking" },
      { href: "/industries", label: "All industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/solutions", label: "Detection library" },
      { href: "/contact", label: "Book a demo" },
      { href: "mailto:info@site-guard.ai", label: "info@site-guard.ai" },
      { href: "https://site-guard.ai", label: "site-guard.ai" },
    ],
  },
];
