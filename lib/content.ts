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

export const solutionCategories = [
  {
    eyebrow: "Safety and PPE",
    name: "Worker protection and compliance",
    icon: "hardHat" as IconName,
    image: "/hero/solution-safety.svg",
    description:
      "Deploy continuous PPE and environment monitoring without relying on periodic inspections.",
    items: ["Helmet compliance", "Safety vest detection", "Mask compliance", "Fire and flame detection"],
  },
  {
    eyebrow: "Security and perimeter",
    name: "Restricted access and incident control",
    icon: "shield" as IconName,
    image: "/hero/solution-security.svg",
    description:
      "Turn passive CCTV into a perimeter-aware supervision system with evidence-backed escalation.",
    items: ["Intrusion detection", "Face recognition", "Altercation detection", "Abandoned object tracking"],
  },
  {
    eyebrow: "Behavior and activity",
    name: "Operational behavior awareness",
    icon: "activity" as IconName,
    image: "/hero/solution-behavior.svg",
    description:
      "Catch risky or non-compliant behavior that tends to happen between human supervision rounds.",
    items: ["Sleep on duty", "Smoking detection", "Using phone detection", "Motion-based trigger logic"],
  },
  {
    eyebrow: "People and movement",
    name: "Density, occupancy, and zone intelligence",
    icon: "users" as IconName,
    image: "/hero/solution-people.svg",
    description:
      "Understand who is where, when occupancy risks build, and how traffic behaves across a site.",
    items: ["Human counting", "Occupancy limits", "Heat-map potential", "Combined identity and movement tracking"],
  },
  {
    eyebrow: "Traffic and access",
    name: "Vehicle and zone discipline",
    icon: "warehouse" as IconName,
    image: "/hero/solution-traffic.svg",
    description:
      "Keep loading zones, emergency access routes, and sensitive site areas operationally clear.",
    items: ["No-parking enforcement", "Vehicle dwell-time rules", "Zone-based escalation", "Central review trail"],
  },
];

export const industryDetails = [
  {
    name: "Construction",
    tag: "Complex field supervision",
    icon: "hardHat" as IconName,
    image: "/industries/construction.svg",
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
    image: "/industries/manufacturing.svg",
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
    image: "/industries/banking.svg",
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

export const contactDetails = [
  {
    label: "Contact person",
    value: "Md Ashraf Siddiquee",
    icon: "users" as IconName,
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
