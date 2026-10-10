import { ServiceItem } from "@/lib/types";

export const PLUMBING_SERVICES: ServiceItem[] = [
  {
    id: "pipe-repair",
    title: "Pipe Repair & Replacement",
    category: "plumbing",
    shortDescription: "Expert repair and renewal of burst, cracked, corroded, or rattling water and drain pipes.",
    fullDescription: "Our licensed plumbers utilize non-invasive acoustic and thermal detection to locate concealed pipe bursts and structural leaks within walls and foundations. We replace substandard conduits with PPRC, CPVC, and high-grade copper piping, guaranteeing pressure balance and long-term durability.",
    icon: "Wrench",
    features: [
      "Concealed wall & slab leak detection",
      "PPRC, CPVC, and UPVC pipe fitting & fusion",
      "Corrosion-resistant copper & PEX line upgrades",
      "High-pressure water line reinforcement",
    ],
    commonIssues: [
      "Sudden drops in tap water pressure",
      "Damp patches or peeling paint on walls",
      "Unexplained spikes in water utility consumption",
      "Noisy or vibrating pipes during water flow",
    ],
    benefits: [
      "Prevents catastrophic property water damage",
      "Restores optimal water pressure to all fixtures",
      "Extended pipe longevity with certified joints",
    ],
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "water-leakage",
    title: "Water Leakage & Seepage Repair",
    category: "plumbing",
    shortDescription: "Precision leak diagnosis, waterproof sealing, and moisture abatement for ceilings, slabs, and bathrooms.",
    fullDescription: "Unaddressed water leakage compromises structural integrity and breeds hazardous mold. We deploy electronic moisture meters and hydrostatic pressure testing to pinpoint hidden leaks behind tiles and beneath floors, repairing the root cause without excessive demolition.",
    icon: "Droplets",
    features: [
      "Sub-surface moisture testing & pinpointing",
      "Grouting and chemical membrane waterproofing",
      "Bathroom floor trap and joint resealing",
      "Overhead water tank leakage rectifications",
    ],
    commonIssues: [
      "Water dripping through ceiling plaster",
      "Efflorescence (white mineral salt crusts) on walls",
      "Persistent musty odor in restrooms",
      "Spongy or discoloration on flooring",
    ],
    benefits: [
      "Safeguards building masonry and reinforcement steel",
      "Eliminates allergen and mold breeding grounds",
      "Clean, non-destructive diagnostic process",
    ],
    imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "drain-cleaning",
    title: "Drain Cleaning & Unclogging",
    category: "plumbing",
    shortDescription: "Industrial-strength motorized snaking, hydro-jetting, and blockage clearing for sinks, toilets, and mains.",
    fullDescription: "From grease build-up in kitchen lines to root intrusions and heavy sediment in external sewer tracks, our motorized drain augers and pressurized hydro-jet equipment quickly clear heavy obstructions, ensuring uninterrupted free drainage.",
    icon: "RotateCw",
    features: [
      "Motorized mechanical snake drain unclogging",
      "Pressurized high-velocity hydro-jetting",
      "Main sewer line cleanout & descaling",
      "Grease trap maintenance for commercial kitchens",
    ],
    commonIssues: [
      "Water backing up into sinks or shower pans",
      "Gurgling sounds from toilet when running taps",
      "Foul sewer odors emerging from floor drains",
      "Slow water evacuation across multiple fixtures",
    ],
    benefits: [
      "Complete removal of grease, soap scum, and roots",
      "Eliminates recurring clogs and unpleasant odors",
      "Eco-friendly mechanical clearing with zero pipe damage",
    ],
    imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bathroom-plumbing",
    title: "Bathroom Plumbing & Sanitary Fixtures",
    category: "plumbing",
    shortDescription: "Complete sanitary installations, shower mixers, commodes, vanity basins, and luxury bathroom overhauls.",
    fullDescription: "We provide master sanitary engineering for modern bathrooms. Whether installing concealed wall-hung commodes, thermostatic rain showers, designer basin mixers, or repairing faulty flush cisterns, our technicians ensure flawless alignment and leak-free performance.",
    icon: "Bath",
    features: [
      "Wall-hung & floor-mount commode installation",
      "Concealed mixer valve & diverter setups",
      "Vanity basin & luxury sanitary fittings",
      "Jacuzzi, bathtub, and shower enclosure plumbing",
    ],
    benefits: [
      "Flawless aesthetic and ergonomic fixture placement",
      "100% leak-proof sealing with anti-fungal silicones",
      "Smooth, high-flow water distribution",
    ],
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kitchen-plumbing",
    title: "Kitchen Plumbing & RO Water Systems",
    category: "plumbing",
    shortDescription: "Sink plumbing, waste disposers, dishwasher connections, and Reverse Osmosis (RO) filtration setups.",
    fullDescription: "The kitchen is the hydraulic engine of any household. We handle sink drain configurations, double-bowl trap balancing, under-sink RO water filtration line integrations, gas geyser water tie-ins, and heavy-duty grease management.",
    icon: "Utensils",
    features: [
      "Stainless steel & granite sink installations",
      "Under-sink RO water filter plumbing",
      "Dishwasher & washing machine drain inlets/outlets",
      "Hot/cold water mixer faucet replacements",
    ],
    benefits: [
      "Safe, pure drinking water integration",
      "Zero grease blockages and leak-free under-counter space",
      "Optimized drain flow for heavy culinary use",
    ],
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "water-supply-pumps",
    title: "Water Supply Lines & Motor Pumps",
    category: "plumbing",
    shortDescription: "Installation and troubleshooting of pressure booster pumps, submersible motors, and automated float systems.",
    fullDescription: "Ensure steady, pressurized water supply throughout your building. We install, calibrate, and repair suction pumps, automatic water level controllers, pressure booster systems, and high-capacity storage tank balance lines.",
    icon: "Activity",
    features: [
      "Automatic water pump level controller wiring & installation",
      "In-line booster pump setups for upper floors",
      "Submersible pump lowering & electrical tie-in",
      "Overhead & underground water tank pipeline interconnects",
    ],
    benefits: [
      "Never run out of water with intelligent automation",
      "Consistent high pressure on all taps and showers",
      "Protection against pump motor dry-run burnouts",
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "emergency-plumbing",
    title: "Emergency Plumbing Response",
    category: "plumbing",
    shortDescription: "Rapid 24/7 on-call dispatch for severe pipe bursts, overflowing drains, and main valve failures.",
    fullDescription: "Plumbing emergencies can cause thousands of dollars in water damage within minutes. Our emergency dispatch team arrives equipped with heavy-duty diagnostic tools, replacement valves, and rapid-curing fusion equipment to restore safety immediately.",
    icon: "ShieldAlert",
    features: [
      "Priority response dispatch within minutes",
      "Main shut-off valve emergency replacement",
      "Flooded basement & drain water evacuation",
      "Temporary bypass routing during major repairs",
    ],
    benefits: [
      "Immediate mitigation of flooding and structural damage",
      "Available 24 hours a day, 7 days a week",
      "Direct technical hotline with no automated queues",
    ],
    imageUrl: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80",
  },
];

export const ELECTRICAL_SERVICES: ServiceItem[] = [
  {
    id: "house-wiring",
    title: "Complete House & Building Wiring",
    category: "electrical",
    shortDescription: "Certified residential and commercial conduit wiring, cable sizing, and earthing/grounding systems.",
    fullDescription: "Faulty or undersized wiring is the leading cause of electrical fires. Shahji's certified electricians perform end-to-end conduit laying, pure copper cable pull-throughs, phase balancing, and dedicated copper earth-rod installations complying with international IEC & NEC electrical standards.",
    icon: "Zap",
    features: [
      "Pure copper multicore & single-core wiring (99.9% purity)",
      "3-Phase load calculation and phase balancing",
      "Chemical earthing & ground rod resistance testing",
      "PVC conduit channeling and distribution trunking",
    ],
    commonIssues: [
      "Burning smell or warm spots around switchboards",
      "Flickering lights when high-load appliances start",
      "Frequent circuit breaker tripping during peak hours",
      "Tingling sensations when touching metallic appliance bodies",
    ],
    benefits: [
      "Total protection against short-circuits and electrical fires",
      "Even voltage distribution across all rooms and floors",
      "Code-compliant, certified electrical infrastructure",
    ],
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "electrical-repairs",
    title: "Distribution Boards & Circuit Repairs",
    category: "electrical",
    shortDescription: "MCB, MCCB, RCD/ELCB breaker installations, short-circuit troubleshooting, and main panel upgrades.",
    fullDescription: "We build and overhaul Main Distribution Boards (MDB) and Sub-Distribution Boards (SDB) using premium circuit breakers, Residual Current Devices (RCDs), and surge protection units (SPDs) to safeguard sensitive appliances and prevent electrocution.",
    icon: "Sliders",
    features: [
      "RCD / ELCB earth-leakage breaker installations",
      "Distribution board rewiring and clean circuit labeling",
      "Surge protection devices (SPD) for lightning and grid spikes",
      "Short-circuit and neutral-fault diagnostic isolation",
    ],
    commonIssues: [
      "Main breaker immediately trips when turned ON",
      "Burnt or charred busbars inside the electrical panel",
      "Neutral wire melting or sparking under load",
      "Appliance damage caused by sudden power surges",
    ],
    benefits: [
      "Instant trip protection against lethal electric shocks",
      "Organized, labeled electrical panels for easy future service",
      "Safeguards air conditioners, computers, and home theater setups",
    ],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "switch-socket",
    title: "Switches, Sockets & Smart Automation",
    category: "electrical",
    shortDescription: "Modern modular switchboard replacements, industrial sockets, smart Wi-Fi relays, and USB outlets.",
    fullDescription: "Upgrade your living space with aesthetic modular plates, high-amperage AC/geyser switch sockets, weather-resistant outdoor points, and smart home automation relays controllable via smartphone or voice assistants.",
    icon: "ToggleRight",
    features: [
      "Modular plate installations with LED indicators",
      "20A / 32A heavy-load DP switches for ACs and geysers",
      "Smart Wi-Fi touch switches and dimming automation",
      "IP66 waterproof outdoor sockets with protective flaps",
    ],
    benefits: [
      "Sleek architectural look matching interior design",
      "Heavy load capacity eliminating melted socket faceplates",
      "Remote control and energy scheduling convenience",
    ],
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lighting-installation",
    title: "Architectural & LED Lighting Systems",
    category: "electrical",
    shortDescription: "Concealed COB downlights, magnetic track lights, LED strip ambiance, chandeliers, and landscape illumination.",
    fullDescription: "Lighting transforms architectural spaces. Our specialists execute precision ceiling cutouts, false ceiling cove lighting, magnetic track rails, dimmable LED ambiance, crystal chandelier hanging, and outdoor weatherproof floodlighting.",
    icon: "Lightbulb",
    features: [
      "COB spotlights, panel lights & magnetic track systems",
      "False ceiling concealed RGBW/Warm-White LED strip profiles",
      "Heavy crystal chandelier anchoring and electrical support",
      "Façade, garden, and security motion-sensor floodlights",
    ],
    benefits: [
      "Up to 80% energy savings with modern LED drivers",
      "Stunning ambient, accent, and task illumination",
      "Safe, vibration-resistant structural hanging",
    ],
    imageUrl: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fault-diagnosis",
    title: "Advanced Fault Diagnosis & Load Audits",
    category: "electrical",
    shortDescription: "Digital thermal imaging, insulation resistance testing (Megger), harmonic analysis, and voltage stabilization.",
    fullDescription: "Intermittent electrical issues can be dangerous and elusive. We use thermal cameras to detect overheating connections, Megohmmeter insulation testers to find deteriorated cable insulation inside walls, and digital analyzers to measure load symmetry.",
    icon: "Search",
    features: [
      "FLIR thermal imaging of panels and junction boxes",
      "Megger cable insulation breakdown testing",
      "Voltage fluctuation and neutral drift diagnosis",
      "Load balancing audits to prevent transformer trips",
    ],
    benefits: [
      "Zero guesswork — pinpoint hidden faults in minutes",
      "Prevents unexpected electrical shutdowns and equipment failure",
      "Detailed health report with corrective action roadmap",
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "commercial-electrical",
    title: "Commercial & Industrial Power Systems",
    category: "electrical",
    shortDescription: "Generator changeover switches (ATS/AMF), Solar inverter wiring, 3-phase machinery hookups, and backup systems.",
    fullDescription: "We provide commercial engineering for offices, retail plazas, factories, and residential buildings. Specializing in Automatic Transfer Switches (ATS), solar hybrid inverter synchronizations, industrial motor starters, and uninterrupted UPS power grids.",
    icon: "Building2",
    features: [
      "Manual & Automatic Generator Changeover (ATS/AMF panels)",
      "Solar on-grid / hybrid inverter AC/DC wiring & DB boxes",
      "Star-Delta and DOL industrial motor starters",
      "Sub-station and transformer maintenance support",
    ],
    benefits: [
      "Uninterrupted business continuity during grid power outages",
      "Optimal solar harvest and clean power distribution",
      "Heavy industrial compliance and safety standards",
    ],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
];

/**
 * NEW HOME & OFFICE MAINTENANCE SERVICES
 * (Available in Islamabad, Pakistan)
 */
export interface AdditionalServiceCategory {
  id: string;
  serviceKey: "Carpenter" | "AC Services" | "Refrigerator" | "Cleaning";
  title: string;
  tagline: string;
  description: string;
  iconName: "Hammer" | "Wind" | "Snowflake" | "Sparkles";
  imageUrl: string;
  features: string[];
  badgeColor: "amber" | "blue" | "teal" | "green";
  availableLocation: string;
}

export const NEW_MAINTENANCE_SERVICES: AdditionalServiceCategory[] = [
  {
    id: "carpenter-services",
    serviceKey: "Carpenter",
    title: "Carpenter Services",
    tagline: "Professional Woodwork & Furniture Craftsmanship",
    description:
      "Reliable residential and office carpentry solutions delivered by skilled craftsmen across Islamabad. From luxury wooden furniture restoration to precision door alignment and custom storage installations.",
    iconName: "Hammer",
    imageUrl: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    features: [
      "Furniture repair and maintenance",
      "Door and cabinet handle repairs",
      "Door fitting and woodwork",
      "Cupboard and shelf installation",
    ],
    badgeColor: "amber",
    availableLocation: "Available in Islamabad, Pakistan",
  },
  {
    id: "ac-services",
    serviceKey: "AC Services",
    title: "AC Installation & Repairing",
    tagline: "Split, Inverter & Window Air Conditioning Mastery",
    description:
      "Comprehensive cooling solutions across Islamabad, Pakistan. Organized into 3 dedicated divisions: Installation, Component Repairing, and Deep Servicing.",
    iconName: "Wind",
    imageUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    features: [
      "AC Installation: New ACs, splits, shifting & relocation",
      "AC Repairing: Cooling faults, gas leaks & compressor repairs",
      "AC Servicing: Deep jet-wash, indoor & outdoor maintenance",
      "Emergency: Gas leak inspection & drainage unclogging",
    ],
    badgeColor: "blue",
    availableLocation: "Available in Islamabad, Pakistan",
  },
  {
    id: "refrigerator-services",
    serviceKey: "Refrigerator",
    title: "Refrigerator Services",
    tagline: "Precision Fridge & Freezer Troubleshooting",
    description:
      "Prompt on-site diagnosis and repair for single-door, double-door, side-by-side, and deep freezer cooling units across Islamabad. Fast turnaround to safeguard your food storage.",
    iconName: "Snowflake",
    imageUrl: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    features: [
      "Refrigerator repair",
      "Cooling problem diagnosis",
      "General maintenance",
      "Refrigerator troubleshooting",
    ],
    badgeColor: "teal",
    availableLocation: "Available in Islamabad, Pakistan",
  },
  {
    id: "cleaning-services",
    serviceKey: "Cleaning",
    title: "Cleaning Services",
    tagline: "Sanitized Home & Commercial Deep Cleaning",
    description:
      "Thorough, hygienic cleaning solutions utilizing industrial-grade equipment and eco-safe sanitizing agents. Dedicated teams available for residential residences and corporate office facilities in Islamabad.",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    features: [
      "Home cleaning",
      "Office cleaning",
      "Kitchen and bathroom cleaning",
      "Deep cleaning services",
    ],
    badgeColor: "green",
    availableLocation: "Available in Islamabad, Pakistan",
  },
];

export interface ServiceSubcategoryGroup {
  id: string;
  categoryName: string;
  tagline: string;
  iconName: string;
  division: "electrical" | "plumbing" | "ac";
  items: {
    name: string;
    description: string;
    isPopular?: boolean;
  }[];
}

export const DETAILED_AC_CATEGORIES: ServiceSubcategoryGroup[] = [
  {
    id: "ac-installation-category",
    categoryName: "AC Installation Services",
    tagline: "Precision indoor & outdoor unit mounting, copper piping & secure relocation",
    iconName: "Wind",
    division: "ac",
    items: [
      { name: "New AC installation", description: "Complete professional mounting and electrical connection for brand new split and inverter AC units in Islamabad.", isPopular: true },
      { name: "Split AC installation", description: "Precision bracket anchoring, indoor unit leveling, and outdoor condenser positioning.", isPopular: true },
      { name: "Window AC installation", description: "Solid frame mounting, acoustic sealing, and weather-tight insulation.", isPopular: true },
      { name: "AC removal and reinstallation", description: "Safe refrigerant pump-down, careful unmounting, and re-hanging at new premises.", isPopular: true },
      { name: "AC indoor and outdoor unit installation", description: "Vibration-damped wall brackets, core drilling, and clean cable channeling.", isPopular: true },
      { name: "AC shifting and relocation", description: "Careful transit and re-commissioning of air conditioning systems across Islamabad sectors.", isPopular: true },
      { name: "AC pipe and drainage installation", description: "Insulated copper refrigerant piping, flare nut torquing, and gravity drain line routing.", isPopular: true },
      { name: "AC installation inspection", description: "Vacuum testing, vacuum hold pressure verification, and electrical amp-draw safety check.", isPopular: true },
    ],
  },
  {
    id: "ac-repairing-category",
    categoryName: "AC Repairing Services",
    tagline: "Prompt on-site diagnosis for cooling loss, electrical faults, gas leaks & compressors",
    iconName: "Wrench",
    division: "ac",
    items: [
      { name: "Split AC repair", description: "Comprehensive mechanical, electrical, and electronic PCB inverter circuit repair.", isPopular: true },
      { name: "Window AC repair", description: "Motor fan replacement, thermostat recalibration, and sealed system repairs.", isPopular: true },
      { name: "AC not cooling troubleshooting", description: "Complete triage of gas pressure, clogged coils, capillary blockages, and sensor drift.", isPopular: true },
      { name: "AC not turning on diagnosis", description: "Testing main power breakers, PCB fuses, display cards, and wiring continuity.", isPopular: true },
      { name: "AC water leakage repair", description: "Clearing clogged drain pans, clearing algae slime, and fixing indoor unit tilts.", isPopular: true },
      { name: "AC gas leakage inspection and repair", description: "Electronic refrigerant sniffing, soap bubble leak pinpointing, and silver brazing repair.", isPopular: true },
      { name: "AC remote and thermostat troubleshooting", description: "IR receiver sensor board replacement, remote setup, and thermistor calibration.", isPopular: true },
      { name: "AC unusual noise diagnosis", description: "Blower fan wheel balancing, motor bushing replacement, and vibration isolation.", isPopular: true },
      { name: "AC electrical fault diagnosis", description: "Fixing tripping breakers, burnt contactors, and high starting capacitor failures.", isPopular: true },
      { name: "AC compressor troubleshooting", description: "Compressor winding ohm check, start capacitor renewal, and overload protector repair.", isPopular: true },
      { name: "AC sensor and control board diagnosis", description: "Inverter board IPM diagnostic testing, room/pipe temperature sensor renewal.", isPopular: true },
      { name: "AC drainage blockage clearing", description: "Pressurized drain line flushing to stop indoor ceiling and wall moisture damage.", isPopular: true },
    ],
  },
  {
    id: "ac-servicing-maintenance-category",
    categoryName: "AC Servicing & Maintenance",
    tagline: "Deep pressure-wash cleaning, chemical fin care & cooling efficiency tuning",
    iconName: "Sparkles",
    division: "ac",
    items: [
      { name: "AC filter cleaning", description: "Removal of accumulated dust, pollen, and allergen buildup from washable mesh filters.", isPopular: true },
      { name: "AC indoor unit cleaning", description: "Coil sanitization, cross-flow blower deep cleaning, and drain tray disinfection.", isPopular: true },
      { name: "AC outdoor unit cleaning", description: "High-pressure water jetting of exterior condenser fins to restore optimum heat release.", isPopular: true },
      { name: "AC general servicing", description: "Seasonal multi-point service covering electrical terminals, gas pressures, and cleanliness.", isPopular: true },
      { name: "AC preventive maintenance", description: "Scheduled periodic tune-ups for homes, corporate offices, and commercial facilities in Islamabad.", isPopular: true },
      { name: "Cooling performance inspection", description: "Temperature differential (Delta T) measurement between return and supply air.", isPopular: true },
    ],
  },
];

export const DETAILED_ELECTRICAL_CATEGORIES: ServiceSubcategoryGroup[] = [
  {
    id: "elec-installation",
    categoryName: "Electrical Installation",
    tagline: "Precision residential & commercial conduit, panel, and fixture wiring",
    iconName: "Zap",
    division: "electrical",
    items: [
      { name: "New electrical wiring", description: "Complete internal conduit wiring for new residential & commercial structures in Islamabad.", isPopular: true },
      { name: "House and office wiring", description: "Full building rewiring, cable capacity upgrades, and conduit expansions.", isPopular: true },
      { name: "Switch and socket installation", description: "Aesthetic modular switch plates, USB ports, and high-amperage power outlets.", isPopular: true },
      { name: "Electrical panel and distribution board installation", description: "Main DB and sub-distribution board assembly with balanced phase loads.", isPopular: true },
      { name: "Circuit breaker installation", description: "MCB, MCCB, and RCD/ELCB shock prevention breaker setups.", isPopular: true },
      { name: "Light and ceiling light installation", description: "Concealed downlights, panel fixtures, and ambient architectural lighting." },
      { name: "LED light installation", description: "Energy-saving COB spotlights, false-ceiling warm LED strips, and drivers.", isPopular: true },
      { name: "Ceiling fan installation", description: "Standard, inverter, and decorative ceiling fan balancing and hookup.", isPopular: true },
      { name: "Exhaust fan installation", description: "High-velocity kitchen and bathroom ventilation exhaust fan mounting." },
      { name: "Chandelier installation", description: "Heavy crystal and architectural chandelier structural anchoring and wiring.", isPopular: true },
      { name: "Outdoor and security lighting", description: "Weatherproof IP65 security motion-sensor floodlights and garden lighting." },
      { name: "Electrical point installation", description: "New AC points, refrigerator dedicated circuits, and appliance points." },
    ],
  },
  {
    id: "elec-repair",
    categoryName: "Electrical Repair",
    tagline: "Rapid emergency troubleshooting, short-circuit containment & component repairs",
    iconName: "AlertTriangle",
    division: "electrical",
    items: [
      { name: "Faulty wiring repair", description: "Isolation and renewal of damaged, burnt, or deteriorated internal wires.", isPopular: true },
      { name: "Short-circuit troubleshooting", description: "Diagnostic meter testing to locate and neutralize hidden short-circuits.", isPopular: true },
      { name: "Power failure diagnosis", description: "Full system continuity testing for sudden phase drops and total blackouts.", isPopular: true },
      { name: "Switch and socket repair", description: "Repairing sparking, stuck, melted, or loose switchboard connections." },
      { name: "Circuit breaker tripping issues", description: "In-depth root cause analysis of frequent MCB or RCD trip anomalies.", isPopular: true },
      { name: "Flickering light repair", description: "Resolving loose neutral lines, voltage spikes, and driver faults." },
      { name: "Fan repair", description: "Capacitor replacement, bearing lubrication, and regulator repair." },
      { name: "Electrical panel troubleshooting", description: "Restoring burnt busbars, overheated terminals, and phase imbalances." },
      { name: "Loose connection repair", description: "Tightening high-resistance terminal points to stop sparking and power loss." },
      { name: "Burning smell or overheating diagnosis", description: "Immediate safety shutdown and thermal scan of overheating junction boxes.", isPopular: true },
    ],
  },
  {
    id: "elec-maintenance",
    categoryName: "Electrical Maintenance",
    tagline: "Proactive condition inspections, load audits & preventive care",
    iconName: "ShieldCheck",
    division: "electrical",
    items: [
      { name: "Electrical safety inspections", description: "Thorough multi-point safety verification of all domestic & commercial lines.", isPopular: true },
      { name: "Wiring condition checks", description: "Megger insulation resistance tests to prevent sudden dielectric breakdowns." },
      { name: "Electrical load assessment", description: "Amperage measurement across phases to prevent transformer overload.", isPopular: true },
      { name: "Distribution board maintenance", description: "Dust cleaning, contact tightening, and breaker thermal integrity checks." },
      { name: "Preventive electrical maintenance", description: "Scheduled periodic audits for homes, residential compounds, and plazas." },
      { name: "Lighting system maintenance", description: "Driver replacements, illumination optimization, and luminaire cleaning." },
      { name: "Office electrical maintenance", description: "Dedicated commercial maintenance contracts for corporate premises in Islamabad.", isPopular: true },
    ],
  },
  {
    id: "elec-backup-power",
    categoryName: "Backup Power & Other Services",
    tagline: "Alternative energy tie-ins, UPS/Inverter setups & security cabling",
    iconName: "BatteryCharging",
    division: "electrical",
    items: [
      { name: "UPS installation and troubleshooting", description: "Pure sine wave home UPS setup, battery wiring, and load segregation.", isPopular: true },
      { name: "Inverter installation and repair", description: "Solar and hybrid inverter AC/DC breaker box connections.", isPopular: true },
      { name: "Generator electrical connections", description: "Manual and Automatic Transfer Switch (ATS) changeover panel installation.", isPopular: true },
      { name: "Doorbell installation and repair", description: "Wired and wireless doorbell chime system fitting and power routing." },
      { name: "CCTV power wiring", description: "Dedicated 12V/24V CCTV power supply units and surge protected outlets." },
      { name: "Earthing and grounding checks", description: "Earth pit moisture check, copper plate resistance audit, and ground bonding.", isPopular: true },
    ],
  },
];

export const DETAILED_PLUMBING_CATEGORIES: ServiceSubcategoryGroup[] = [
  {
    id: "plumb-pipe-install-repair",
    categoryName: "Pipe Installation & Repair",
    tagline: "Concealed leak diagnosis, PPRC/CPVC line renewal & water supply piping",
    iconName: "Wrench",
    division: "plumbing",
    items: [
      { name: "Water pipe installation", description: "New PPRC, CPVC, and high-density polyethylene pipeline laying in Islamabad.", isPopular: true },
      { name: "Leaking pipe repair", description: "Precision sealing and pipe segment replacement for leaking wall and floor lines.", isPopular: true },
      { name: "Burst pipe repair", description: "Rapid emergency isolation and replacement of ruptured high-pressure water pipes.", isPopular: true },
      { name: "Concealed pipe leak diagnosis", description: "Acoustic and electronic moisture testing without unnecessary wall demolition.", isPopular: true },
      { name: "Water supply line repair", description: "Restoring low-pressure or corroded municipal and tank feed lines." },
      { name: "Drainpipe installation and repair", description: "UPVC sanitary waste and soil pipe fitting with leak-proof rubber ring joints." },
      { name: "Bathroom plumbing installation", description: "Complete hot and cold rough-in pipe routing for modern bathroom suites.", isPopular: true },
      { name: "Kitchen plumbing installation", description: "Custom sink feeds, grease trap exits, and appliance connection lines." },
    ],
  },
  {
    id: "plumb-tap-sink-bath",
    categoryName: "Tap, Sink & Bathroom Services",
    tagline: "Sanitary fitting replacements, vanity setups, mixers & commode overhauls",
    iconName: "Bath",
    division: "plumbing",
    items: [
      { name: "Tap and faucet installation", description: "Designer basin mixers, bib taps, sink faucets, and pillar taps.", isPopular: true },
      { name: "Leaking tap repair", description: "Cartridge, washer, and spindle replacement to end constant dripping.", isPopular: true },
      { name: "Washbasin installation", description: "Pedestal, wall-hung, and vanity counter washbasin installations.", isPopular: true },
      { name: "Sink installation and repair", description: "Stainless steel and granite kitchen sink mounting and silicone sealing." },
      { name: "Shower installation and repair", description: "Overhead rain showers, concealed diverters, and hand shower kits.", isPopular: true },
      { name: "Shower mixer replacement", description: "Hot/cold thermostatic mixer valve replacements and recalibrations." },
      { name: "Toilet installation and repair", description: "Western commodes, wall-hung concealed cisterns, and Asian toilets.", isPopular: true },
      { name: "Flush tank repair", description: "Replacing siphon valves, fill valves, and push buttons to stop running water.", isPopular: true },
      { name: "Toilet seat replacement", description: "Standard and soft-close ergonomic toilet seat installations." },
      { name: "Bathroom fittings installation", description: "Towel rails, glass shelves, soap dispensers, mirrors, and muslim showers.", isPopular: true },
      { name: "Floor drain cleaning", description: "Unclogging hair, soap scum, and grime from bathroom floor waste traps." },
      { name: "Bathroom leakage troubleshooting", description: "Grouting, tile seam waterproofing, and waste trap seal rectifications.", isPopular: true },
    ],
  },
  {
    id: "plumb-drainage",
    categoryName: "Drainage Services",
    tagline: "Motorized snaking, hydro-jetting, and sewer line blockage clearing",
    iconName: "RotateCw",
    division: "plumbing",
    items: [
      { name: "Blocked kitchen sink clearing", description: "Clearing stubborn food oil, grease, and sediment blockages with specialized tools.", isPopular: true },
      { name: "Blocked bathroom drain clearing", description: "Motorized spiral snake clearing of hair and sludge from bathroom drains.", isPopular: true },
      { name: "Drainpipe blockage troubleshooting", description: "Locating obstruction points across internal and external drainage lines.", isPopular: true },
      { name: "Slow-draining sink repair", description: "P-trap disassembly, grease clearing, and vent line vacuum relief." },
      { name: "Sewer line blockage diagnosis", description: "Main sewer cleanout opening and mechanical auger clearing for severe clogs.", isPopular: true },
      { name: "Drain trap cleaning", description: "Removal of foul odor causes and debris from gully and bottle traps." },
    ],
  },
  {
    id: "plumb-water-systems",
    categoryName: "Water Systems",
    tagline: "Water pumps, overhead storage tanks, pressure boosters & filtration",
    iconName: "Activity",
    division: "plumbing",
    items: [
      { name: "Water motor installation and repair", description: "Suction pumps, monoblock motors, and deep-well submersible pump setups.", isPopular: true },
      { name: "Water pump troubleshooting", description: "Impeller repair, mechanical seal renewal, and motor rewiring diagnosis.", isPopular: true },
      { name: "Water tank installation and maintenance", description: "Overhead poly / fiberglass tank fitting, overflow valves, and washouts.", isPopular: true },
      { name: "Water pressure problem diagnosis", description: "Testing low flow across floors and installing automatic booster pumps.", isPopular: true },
      { name: "Water leakage detection", description: "Advanced hydrostatic pressure testing to verify zero underground seepage.", isPopular: true },
      { name: "Water filter installation", description: "Under-sink RO systems, whole-house sediment filters, and UV purifiers.", isPopular: true },
      { name: "Water heater installation and repair, where qualified", description: "Gas geyser, instant electric geyser, and hybrid water heater plumbing.", isPopular: true },
      { name: "Overhead tank supply connection repair", description: "Repairing tank inlet float valves, union joints, and delivery manifold lines." },
    ],
  },
  {
    id: "plumb-commercial",
    categoryName: "Commercial Plumbing",
    tagline: "Multi-story facilities, retail shops, restaurants & corporate plumbing",
    iconName: "Building2",
    division: "plumbing",
    items: [
      { name: "Office plumbing maintenance", description: "Scheduled servicing of executive and staff restrooms in Islamabad corporate offices.", isPopular: true },
      { name: "Shop plumbing repairs", description: "Fast repair of commercial restroom taps, basins, and drainage in shopping plazas." },
      { name: "Commercial washroom maintenance", description: "Sensor urinals, automatic faucets, and heavy-use flush valve servicing.", isPopular: true },
      { name: "Restaurant sink and drainage maintenance", description: "Commercial kitchen grease trap descaling and high-flow waste clearance.", isPopular: true },
      { name: "Routine plumbing inspections", description: "Preventive facility audit to arrest silent water leaks and pressure drops.", isPopular: true },
    ],
  },
];
