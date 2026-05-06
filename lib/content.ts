import type { IconName } from "@/components/icon-mark";

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export const homeMetrics = [
  {
    value: "15+",
    label: "AI detections",
    icon: "radar" as IconName,
    description: "Safety, security, behavior, and operational event types running in real time.",
  },
  {
    value: "0",
    label: "New cameras required",
    icon: "camera" as IconName,
    description: "SiteGuard connects to existing CCTV infrastructure through the current video environment.",
  },
  {
    value: "24/7",
    label: "Zero-fatigue monitoring",
    icon: "shield" as IconName,
    description: "Continuous event awareness without relying on manual viewing or inspection rounds.",
  },
  {
    value: "30 days",
    label: "Fast ROI horizon",
    icon: "activity" as IconName,
    description: "Deployment value becomes visible quickly through labor savings, compliance, and response time.",
  },
];

export const operationalPillars = [
  {
    title: "Detect what manual supervision misses",
    icon: "alert" as IconName,
    description:
      "PPE breaches, fire, intrusion, behavior risk, and unattended objects are surfaced as soon as they occur.",
  },
  {
    title: "Alert the right people instantly",
    icon: "bell" as IconName,
    description:
      "Teams can route events to supervisors, managers, or security personnel with evidence and timestamps attached.",
  },
  {
    title: "Turn daily incidents into management insight",
    icon: "dashboard" as IconName,
    description:
      "Dashboard views and reports reveal patterns across shifts, zones, and sites instead of isolated alerts.",
  },
];

export const architectureSteps = [
  {
    step: "01",
    title: "Ingest",
    description:
      "Existing IP cameras stream video into the SiteGuard edge layer through standard CCTV protocols.",
  },
  {
    step: "02",
    title: "Analyze",
    description:
      "AI models monitor multiple event categories simultaneously and assess what needs attention in real time.",
  },
  {
    step: "03",
    title: "Alert",
    description:
      "Incidents trigger immediate notifications with severity, source context, and supporting evidence clips.",
  },
  {
    step: "04",
    title: "Review",
    description:
      "Leadership accesses live feeds, alert history, and performance reporting through a central dashboard.",
  },
];

export const industryHighlights = [
  {
    name: "Construction",
    tag: "High-risk field operations",
    icon: "hardHat" as IconName,
    summary:
      "Improve PPE enforcement, fire awareness, intrusion monitoring, and restricted-zone supervision across dynamic sites.",
    focusAreas: ["Helmet & PPE compliance", "Fire and smoke detection", "No-parking and intrusion monitoring"],
  },
  {
    name: "Manufacturing",
    tag: "Continuous production floors",
    icon: "factory" as IconName,
    summary:
      "Reduce blind spots around machinery, detect unsafe behavior, and maintain floor-wide visibility without adding new hardware.",
    focusAreas: ["Safety vest and mask compliance", "Phone-use detection", "Abandoned object monitoring"],
  },
  {
    name: "Banking",
    tag: "Service and security environments",
    icon: "landmark" as IconName,
    summary:
      "Combine compliance, customer-floor visibility, and security intelligence in high-throughput public spaces.",
    focusAreas: ["Face recognition", "Sleep-on-duty detection", "Altercation and intrusion alerts"],
  },
];

export const platformMoments = [
  {
    eyebrow: "Live operations",
    title: "A clean multi-camera live view.",
    icon: "camera" as IconName,
    description:
      "Monitor several critical zones at once without sacrificing legibility or calm operational control.",
  },
  {
    eyebrow: "Alert intelligence",
    title: "Every incident comes with immediate context.",
    icon: "bell" as IconName,
    description:
      "Severity, camera source, location, and timeline appear together so teams can respond without delay.",
  },
  {
    eyebrow: "Trend reporting",
    title: "Analytics move the product beyond surveillance.",
    icon: "dashboard" as IconName,
    description:
      "Zone trends, event distribution, and repeated violations become visible to both operations and leadership.",
  },
];

export const workflowCarouselSlides = [
  {
    src: "/siteguard/live-feed.png",
    alt: "Live feed view showing multiple camera zones in SiteGuard AI.",
    label: "Live feed monitoring",
  },
  {
    src: "/siteguard/reports.png",
    alt: "Reporting and analytics dashboard in SiteGuard AI.",
    label: "Reporting analytics",
  },
  {
    src: "/siteguard/alerts.png",
    alt: "Alert stream cropped to highlight actionable detections.",
    label: "Actionable alert stream",
    cropped: true,
    objectPosition: "left top",
  },
  {
    src: "/siteguard/dashboard.png",
    alt: "Central SiteGuard dashboard overview.",
    label: "Central command surface",
  },
];

export const homeHeroSignals = [
  {
    title: "Existing CCTV",
    description: "Deploy on the camera estate you already have, without a disruptive hardware reset.",
  },
  {
    title: "15+ AI models",
    description: "Cover safety, security, behavior, and operational events through one coordinated layer.",
  },
  {
    title: "Evidence-led reporting",
    description: "Move from raw footage to timestamped incidents and management-ready operational review.",
  },
];

export const mobileAppSlides = [
  {
    src: "/mobile/dashboard.png",
    alt: "SiteGuard AI mobile dashboard screen.",
    label: "Mobile dashboard",
    description: "A compact command view for camera health, alerts, and daily activity.",
  },
  {
    src: "/mobile/live.png",
    alt: "SiteGuard AI mobile live monitoring screen.",
    label: "Live monitoring",
    description: "Review active camera zones and visual detections in a handheld format.",
  },
  {
    src: "/mobile/alerts.png",
    alt: "SiteGuard AI mobile alert history screen.",
    label: "Alert history",
    description: "Scroll incident timelines, severity, and status updates from the field.",
  },
  {
    src: "/mobile/reports.png",
    alt: "SiteGuard AI mobile reports screen.",
    label: "Reports",
    description: "Track trends and distributions without needing the full desktop dashboard.",
  },
];

export const solutionCategories = [
  {
    id: "safety",
    eyebrow: "Safety and PPE",
    name: "Worker protection and compliance",
    icon: "hardHat" as IconName,
    image: "/hero/solution-safety.svg",
    description:
      "Deploy continuous PPE and environment monitoring without relying on periodic inspections.",
    items: ["Helmet compliance", "Safety vest detection", "Mask compliance", "Fire and flame detection"],
  },
  {
    id: "security",
    eyebrow: "Security and perimeter",
    name: "Restricted access and incident control",
    icon: "shield" as IconName,
    image: "/hero/solution-security.svg",
    description:
      "Turn passive CCTV into a perimeter-aware supervision system with evidence-backed escalation.",
    items: ["Intrusion detection", "Face recognition", "Altercation detection", "Abandoned object tracking"],
  },
  {
    id: "behavior",
    eyebrow: "Behavior and activity",
    name: "Operational behavior awareness",
    icon: "activity" as IconName,
    image: "/hero/solution-behavior.svg",
    description:
      "Catch risky or non-compliant behavior that tends to happen between human supervision rounds.",
    items: ["Sleep on duty", "Smoking detection", "Using phone detection", "Motion-based trigger logic"],
  },
  {
    id: "people",
    eyebrow: "People and movement",
    name: "Density, occupancy, and zone intelligence",
    icon: "users" as IconName,
    image: "/hero/solution-people.svg",
    description:
      "Understand who is where, when occupancy risks build, and how traffic behaves across a site.",
    items: ["Human counting", "Occupancy limits", "Heat-map potential", "Combined identity and movement tracking"],
  },
  {
    id: "traffic",
    eyebrow: "Traffic and access",
    name: "Vehicle and zone discipline",
    icon: "warehouse" as IconName,
    image: "/hero/solution-traffic.svg",
    description:
      "Keep loading zones, emergency access routes, and sensitive site areas operationally clear.",
    items: ["No-parking enforcement", "Vehicle dwell-time rules", "Zone-based escalation", "Central review trail"],
  },
];

export const solutionCategoryTabs = [
  {
    id: "safety",
    eyebrow: "Safety and PPE",
    title: "Worker protection and compliance",
    icon: "hardHat" as IconName,
    description:
      "Deploy continuous visual checks for PPE, life-safety, and hazardous-zone compliance without relying on manual rounds.",
    bullets: [
      "Ideal for construction, manufacturing, and contractor-heavy sites",
      "Flags missing helmet, vest, or mask events in seconds",
      "Keeps a timestamped evidence trail for response and reporting",
    ],
    slides: [
      {
        title: "Helmet compliance",
        description: "Live monitoring highlights missing helmets in active work zones.",
        image: "/solutions/detections/no-helmet.png",
        objectPosition: "left center",
      },
      {
        title: "Safety vest detection",
        description: "Visual rules help verify high-visibility gear in shared operational areas.",
        image: "/solutions/detections/safety-vest.png",
        objectPosition: "center top",
      },
      {
        title: "Fire and flame alerting",
        description: "Immediate escalation path for smoke and flame indicators with evidence context.",
        image: "/solutions/detections/fire-alert.png",
        objectPosition: "left top",
      },
    ],
  },
  {
    id: "security",
    eyebrow: "Security and perimeter",
    title: "Restricted access and incident control",
    icon: "shield" as IconName,
    description:
      "Convert passive CCTV into a perimeter-aware supervision layer that detects unauthorized entry, identity events, and unattended objects.",
    bullets: [
      "Supports after-hours monitoring and sensitive-zone supervision",
      "Pairs movement, identity, and object rules in one alert flow",
      "Works well for branches, gates, storage zones, and corridors",
    ],
    slides: [
      {
        title: "Intrusion detection",
        description: "Restricted zones trigger attention as soon as motion breaks the rule boundary.",
        image: "/solutions/detections/intrusion.png",
        objectPosition: "center center",
      },
      {
        title: "Face recognition",
        description: "Identity-aware workflows help validate who entered and when.",
        image: "/solutions/detections/face-recognition.png",
        objectPosition: "right center",
      },
      {
        title: "Abandoned object alert",
        description: "Unattended items are escalated with a clean review trail.",
        image: "/solutions/detections/abandoned-object.png",
        objectPosition: "left top",
      },
    ],
  },
  {
    id: "behavior",
    eyebrow: "Behavior and activity",
    title: "Operational behavior awareness",
    icon: "activity" as IconName,
    description:
      "Monitor risky human behavior that usually happens between supervision rounds, from fatigue to distraction to smoking.",
    bullets: [
      "Built for floors, branches, control rooms, and gate operations",
      "Brings together posture, movement, and behavior-based triggers",
      "Useful for both safety culture and service-quality oversight",
    ],
    slides: [
      {
        title: "Sleep on duty",
        description: "Fatigue patterns can be surfaced before they become operational failures.",
        image: "/solutions/detections/sleep-on-duty.png",
        objectPosition: "center center",
      },
      {
        title: "Phone-use detection",
        description: "Detects distracted behavior in restricted or high-focus environments.",
        image: "/solutions/detections/phone-use.png",
        objectPosition: "right center",
      },
      {
        title: "Smoking detection",
        description: "Combines visual behavior checks with zone-specific compliance rules.",
        image: "/solutions/detections/smoking.png",
        objectPosition: "left top",
      },
    ],
  },
  {
    id: "people",
    eyebrow: "People and movement",
    title: "Density, occupancy, and zone intelligence",
    icon: "users" as IconName,
    description:
      "Measure movement, occupancy pressure, and crowding trends so teams can understand how people are actually using a site.",
    bullets: [
      "Supports occupancy thresholds and high-footfall areas",
      "Useful for branch floors, lobbies, production lines, and access points",
      "Turns people flow into a reviewable operational signal",
    ],
    slides: [
      {
        title: "People counting",
        description: "Counts footfall and detects crowd build-up in monitored zones.",
        image: "/solutions/detections/human-count.png",
        objectPosition: "center center",
      },
      {
        title: "Occupancy monitoring",
        description: "Helps track density thresholds and queue conditions in real time.",
        image: "/solutions/detections/human-count.png",
        objectPosition: "center top",
      },
      {
        title: "Zone movement review",
        description: "Shows how traffic moves through sensitive or high-throughput spaces.",
        image: "/solutions/detections/human-count.png",
        objectPosition: "left center",
      },
    ],
  },
  {
    id: "traffic",
    eyebrow: "Traffic and access",
    title: "Vehicle and zone discipline",
    icon: "warehouse" as IconName,
    description:
      "Protect loading bays, emergency paths, parking rules, and access routes with clear visual enforcement and evidence capture.",
    bullets: [
      "Helps keep operations clear around service roads and restricted entry zones",
      "Useful for logistics movements, no-parking rules, and zone breaches",
      "Preserves image evidence for supervisors and management review",
    ],
    slides: [
      {
        title: "No-parking enforcement",
        description: "Flags vehicles blocking emergency, service, or restricted access areas.",
        image: "/solutions/detections/no-parking.png",
        objectPosition: "left top",
      },
      {
        title: "Vehicle dwell-time review",
        description: "Measures how long vehicles remain in monitored bays or gate positions.",
        image: "/solutions/detections/no-parking.png",
        objectPosition: "center center",
      },
      {
        title: "Zone-based escalation",
        description: "Combines traffic visibility with event priorities for rapid response.",
        image: "/solutions/detections/intrusion.png",
        objectPosition: "right top",
      },
    ],
  },
];

export const solutionExperienceDetections = [
  {
    id: "helmet-compliance",
    title: "Helmet compliance",
    tag: "PPE",
    categoryId: "safety",
    image: "/solutions/detections/no-helmet.png",
    objectPosition: "left center",
    description: "Detects missing safety helmets and PPE gaps in active work zones.",
  },
  {
    id: "safety-vest",
    title: "Safety vest detection",
    tag: "PPE",
    categoryId: "safety",
    image: "/solutions/detections/safety-vest.png",
    objectPosition: "center center",
    description: "Verifies high-visibility vest compliance across shared operational zones.",
  },
  {
    id: "intrusion-detection",
    title: "Intrusion detection",
    tag: "Security",
    categoryId: "security",
    image: "/solutions/detections/intrusion.png",
    objectPosition: "center center",
    description: "Flags movement inside restricted areas, perimeter zones, or closed spaces.",
  },
  {
    id: "fire-flame",
    title: "Fire and flame",
    tag: "Life safety",
    categoryId: "safety",
    image: "/solutions/detections/fire-alert.png",
    description: "Escalates fire, smoke, and flame indicators with evidence context.",
    objectPosition: "left top",
  },
  {
    id: "face-recognition",
    title: "Face recognition",
    tag: "Identity",
    categoryId: "security",
    image: "/solutions/detections/face-recognition.png",
    objectPosition: "right top",
    description: "Supports identity-aware supervision for controlled environments.",
  },
  {
    id: "abandoned-object",
    title: "Abandoned object",
    tag: "Risk",
    categoryId: "security",
    image: "/solutions/detections/abandoned-object.png",
    objectPosition: "left top",
    description: "Identifies unattended objects and keeps a timestamped review trail.",
  },
  {
    id: "people-counting",
    title: "People counting",
    tag: "Occupancy",
    categoryId: "people",
    image: "/solutions/detections/human-count.png",
    objectPosition: "center center",
    description: "Measures movement, crowding, and zone occupancy for operational insight.",
  },
  {
    id: "sleep-on-duty",
    title: "Sleep on duty",
    tag: "Behavior",
    categoryId: "behavior",
    image: "/solutions/detections/sleep-on-duty.png",
    objectPosition: "center center",
    description: "Surfaces fatigue-related posture patterns in control rooms, guard posts, and service areas.",
  },
  {
    id: "phone-use",
    title: "Phone-use detection",
    tag: "Behavior",
    categoryId: "behavior",
    image: "/solutions/detections/phone-use.png",
    objectPosition: "right center",
    description: "Detects distracted behavior in monitored areas where attention discipline matters.",
  },
  {
    id: "smoking",
    title: "Smoking detection",
    tag: "Behavior",
    categoryId: "behavior",
    image: "/solutions/detections/smoking.png",
    objectPosition: "center center",
    description: "Highlights smoking events in restricted or safety-sensitive areas.",
  },
  {
    id: "no-parking",
    title: "No-parking enforcement",
    tag: "Traffic",
    categoryId: "traffic",
    image: "/solutions/detections/no-parking.png",
    objectPosition: "left top",
    description: "Tracks parked vehicles blocking controlled lanes, service points, or emergency access routes.",
  },
];

export const industryDetails = [
  {
    name: "Construction",
    tag: "Complex field supervision",
    icon: "hardHat" as IconName,
    summary:
      "Fast-changing environments, contractor turnover, heavy equipment, and uneven visibility make manual supervision fragile.",
    challenges: [
      "Heavy machinery hazards across active work zones",
      "Short-term labor with inconsistent safety awareness",
      "Blind spots over large multi-zone sites",
      "Manual PPE checks that miss violations between rounds",
    ],
    focusAreas: [
      "Helmet and vest compliance",
      "Fire and smoke detection",
      "Restricted-zone intrusion alerts",
      "No-parking enforcement",
    ],
  },
  {
    name: "Manufacturing",
    tag: "24/7 production environments",
    icon: "factory" as IconName,
    summary:
      "Machine density, mixed workforces, and line-level safety obligations demand a more scalable layer of visual supervision.",
    challenges: [
      "Floor-wide blind spots between inspection cycles",
      "Intrusions into machinery exclusion zones",
      "Persistent PPE and mask non-compliance",
      "Obstructions and abandoned items on the line",
    ],
    focusAreas: [
      "Safety vest detection",
      "Mask compliance",
      "Phone-use detection",
      "Abandoned object monitoring",
    ],
  },
  {
    name: "Banking",
    tag: "Public-facing controlled spaces",
    icon: "landmark" as IconName,
    summary:
      "Service quality, customer safety, compliance, and restricted-zone security all need to work together in real time.",
    challenges: [
      "Customer mis-service caused by unattended posts or fatigue",
      "Aggressive behavior and restricted-zone incidents",
      "Uniform and policy compliance gaps",
      "Life-safety risks that traditional CCTV does not escalate",
    ],
    focusAreas: [
      "Sleep-on-duty detection",
      "Face recognition",
      "Altercation detection",
      "Uniform and intrusion monitoring",
    ],
  },
];

export const screenshotShowcase = {
  dashboard: {
    src: "/siteguard/dashboard.png",
    alt: "SiteGuard AI dashboard screenshot showing alerts and graph panels.",
  },
};

export const screenshotGallery = {
  dashboard: {
    src: "/siteguard/dashboard.png",
    alt: "SiteGuard AI dashboard screen.",
  },
  live: {
    src: "/siteguard/live-feed.png",
    alt: "SiteGuard AI live feed grid across multiple camera views.",
  },
  alerts: {
    src: "/siteguard/alerts.png",
    alt: "SiteGuard AI alert history screen with filters and status columns.",
  },
  reports: {
    src: "/siteguard/reports.png",
    alt: "SiteGuard AI reports and analytics view with charts.",
  },
};

export const platformStats = [
  { label: "Live feeds", value: "Multi-zone" },
  { label: "Alert latency", value: "0-3 sec" },
  { label: "Evidence", value: "Timestamped" },
];

export const solutionArchitecture = [
  {
    title: "Front-end collecting",
    description: "Integrated IP cameras, dome units, handheld cameras, and NVR sources feed the network edge.",
  },
  {
    title: "Switches pooling",
    description: "Switch and NVR streams are normalized through pooled network routing for stable ingest.",
  },
  {
    title: "Edge data computing",
    description: "Streaming media, storage services, and the SiteGuard AI Box run detection close to the source.",
  },
  {
    title: "Platform accessing",
    description: "Web, admin control, and mobile applications surface live status, evidence, and controls instantly.",
  },
];

export const solutionTechnicalAspects = [
  "RTSP and ONVIF camera ingest across existing CCTV estates",
  "NVR and switch-based pooling for resilient multi-camera routing",
  "Edge AI box with media server and data storage layers",
  "Web, admin, and mobile access for multi-role operations teams",
];

export const solutionStats = [
  {
    value: "15+",
    label: "Detection systems",
    description: "Safety, security, behavior, and access intelligence in one platform.",
  },
  {
    value: "0",
    label: "New cameras required",
    description: "Deploy on top of the existing CCTV estate without replacing hardware.",
  },
  {
    value: "24/7",
    label: "Continuous monitoring",
    description: "Always-on event awareness with evidence-backed alerting.",
  },
  {
    value: "30 days",
    label: "Visible ROI",
    description: "Rapid operational value through automation, response time, and compliance.",
  },
];

export const contactDetails = [
  {
    label: "Contact person",
    value: "Md Ashraf Siddiquee",
    icon: "user" as IconName,
  },
  {
    label: "Email",
    value: "ashraf.siddiquee@maxgroup-bd.com",
    icon: "mail" as IconName,
  },
  {
    label: "Phone",
    value: "01730589252",
    icon: "phone" as IconName,
  },
  {
    label: "Address",
    value: "House B186, Road 20, Mohakhali DOHS, Dhaka 1206, Bangladesh",
    icon: "mapPin" as IconName,
  },
  {
    label: "Website",
    value: "site-guard.ai",
    icon: "radar" as IconName,
  },
];

export const footerInfo = {
  developer: "This solution is developed by NYK Advance Ltd.",
  address: "House B186, Road 20, Mohakhali DOHS, Dhaka 1206, Bangladesh",
  email: "ashraf.siddiquee@maxgroup-bd.com",
  phone: "01730589252",
  website: "site-guard.ai",
};

export const footerSections = [
  {
    title: "Platform",
    links: [
      { href: "/product", label: "Platform overview" },
      { href: "/solutions", label: "Detection systems" },
      { href: "/industries", label: "Industry use cases" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: `https://${footerInfo.website}`, label: "Website" },
      { href: `mailto:${footerInfo.email}`, label: "Email NYK Advance" },
    ],
  },
];
