import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  CookingPot,
  Droplets,
  Fan,
  PackageCheck,
  Refrigerator,
  Snowflake,
  WashingMachine,
  Warehouse,
  Wrench,
} from "lucide-react";
import heroImg from "@/assets/hero-technician.jpg";
import acImg from "@/assets/service-ac.jpg";
import fridgeImg from "@/assets/service-fridge.jpg";
import washerImg from "@/assets/service-washer.jpg";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  slug: string;
  category:
    | "air-conditioning"
    | "refrigeration"
    | "laundry"
    | "kitchen"
    | "commercial-cooling";
  title: string;
  shortTitle: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  intro: string;
  h1: string;
  heroTitle: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  badge: string;
  serviceType: string;
  problems: string[];
  whyChooseUs: string[];
  process: string[];
  faqs: ServiceFaq[];
  related: string[];
  keywords: string[];
  featured?: boolean;
};

const commonWhyChooseUs = [
  "Same-day doorstep visits across Pune and nearby service areas.",
  "Experienced technicians for home appliances and cooling systems.",
  "Transparent diagnosis, clear quotations, and no hidden charges.",
  "Support for genuine spare parts and post-service workmanship warranty.",
];

const commonProcess = [
  "Call, WhatsApp, or submit the booking form with your appliance issue.",
  "Our team confirms your location, service need, and preferred time slot.",
  "A technician visits your site, diagnoses the fault, and shares pricing.",
  "After approval, we complete the repair, test the appliance, and close with service guidance.",
];

const createService = (
  item: Omit<ServiceItem, "whyChooseUs" | "process"> & {
    whyChooseUs?: string[];
    process?: string[];
  },
): ServiceItem => ({
  ...item,
  whyChooseUs: item.whyChooseUs ?? commonWhyChooseUs,
  process: item.process ?? commonProcess,
});

export const SERVICES: ServiceItem[] = [
  createService({
    slug: "ac-repair-service-pune",
    category: "air-conditioning",
    title: "AC Repair Service",
    shortTitle: "AC Repair",
    seoTitle:
      "AC Repair Service in Pune | Same-Day AC Technician | SkyCooling Pune",
    metaDescription:
      "Book trusted AC repair service in Pune for split, window, and inverter AC units. Same-day technician visits, transparent pricing, and doorstep cooling solutions.",
    excerpt:
      "Fast AC troubleshooting and cooling restoration for homes, offices, and rental properties across Pune.",
    intro:
      "When your AC stops cooling, leaks water, or shows an error, our Pune technicians diagnose the fault quickly and restore reliable performance with doorstep support.",
    h1: "AC Repair Service in Pune",
    heroTitle:
      "Quick AC diagnosis, repair, and cooling restoration across Pune",
    image: acImg,
    imageAlt: "Technician performing AC repair service at a home in Pune",
    icon: Snowflake,
    badge: "Same Day Service Available",
    serviceType: "Air Conditioner Repair Service",
    problems: [
      "AC not cooling or taking too long to cool the room",
      "Water leakage from the indoor unit",
      "Indoor or outdoor unit making unusual noise",
      "AC not turning on or tripping the power supply",
      "Weak airflow, bad smell, or ice formation on coils",
      "Inverter AC error codes and PCB-related faults",
    ],
    faqs: [
      {
        question: "Do you repair split and window AC units in Pune?",
        answer:
          "Yes. We handle split, window, inverter, and tower AC systems for homes, shops, and offices across Pune.",
      },
      {
        question: "Can I get same-day AC repair?",
        answer:
          "In most Pune locations, yes. We try to assign the nearest technician for urgent AC breakdowns and summer cooling issues.",
      },
      {
        question: "Do you provide an estimate before repair?",
        answer:
          "Yes. After diagnosis, we explain the fault, required parts if any, and the final service cost before starting work.",
      },
    ],
    related: [
      "ac-gas-refilling-pune",
      "ac-installation-pune",
      "ac-pcb-repair-pune",
      "ac-compressor-repair-pune",
    ],
    keywords: [
      "AC repair service in Pune",
      "home AC repair in Pune",
      "best AC service near me",
    ],
    featured: true,
  }),
  createService({
    slug: "ac-gas-refilling-pune",
    category: "air-conditioning",
    title: "AC Gas Refilling",
    shortTitle: "AC Gas Refilling",
    seoTitle:
      "AC Gas Refilling in Pune | AC Gas Filling Service | SkyCooling Pune",
    metaDescription:
      "Professional AC gas refilling in Pune with leak inspection, pressure testing, and cooling performance checks for split and window AC units.",
    excerpt:
      "Leak detection, gas top-up, and proper pressure balancing for stronger cooling and lower power wastage.",
    intro:
      "Low refrigerant can reduce cooling, increase electricity bills, and stress your compressor. We provide proper AC gas refilling in Pune after checking for leaks and system condition.",
    h1: "AC Gas Refilling in Pune",
    heroTitle: "Restore cooling performance with safe AC gas refilling",
    image: acImg,
    imageAlt:
      "AC gas refilling service being performed by a technician in Pune",
    icon: Droplets,
    badge: "Cooling Performance Check Included",
    serviceType: "AC Gas Refilling Service",
    problems: [
      "AC cooling is weak even after regular servicing",
      "Gas leakage causing repeated cooling drop",
      "Indoor coil icing or uneven cooling",
      "Compressor overheating because of low refrigerant",
      "AC taking a long time to cool rooms",
      "Need refrigerant check before peak summer usage",
    ],
    faqs: [
      {
        question: "How do I know if my AC needs gas refilling?",
        answer:
          "Common signs include weak cooling, coil ice, higher power usage, and long cooling cycles. Our technician verifies refrigerant pressure before recommending a refill.",
      },
      {
        question: "Do you check for leaks before gas filling?",
        answer:
          "Yes. We inspect for leak points first because filling gas without solving the root cause often leads to repeat breakdowns.",
      },
      {
        question: "Is AC gas refilling available for inverter AC units?",
        answer:
          "Yes. We service both inverter and non-inverter AC systems with model-appropriate handling.",
      },
    ],
    related: [
      "ac-repair-service-pune",
      "ac-compressor-repair-pune",
      "ac-annual-maintenance-contract-pune",
    ],
    keywords: [
      "AC gas refilling in Pune",
      "AC gas filling in Pune",
      "AC cooling issue repair Pune",
    ],
  }),
  createService({
    slug: "ac-installation-pune",
    category: "air-conditioning",
    title: "AC Installation",
    shortTitle: "AC Installation",
    seoTitle:
      "AC Installation in Pune | Split & Window AC Installation | SkyCooling Pune",
    metaDescription:
      "Book AC installation in Pune for split and window AC systems. Safe mounting, copper piping, drainage setup, and performance testing by trained technicians.",
    excerpt:
      "Professional AC fitting with proper alignment, piping checks, and clean installation support.",
    intro:
      "A correct AC installation affects cooling, energy use, and long-term reliability. Our Pune team installs new and shifted AC units with proper mounting, drainage, wiring, and testing.",
    h1: "AC Installation in Pune",
    heroTitle:
      "Professional AC installation for clean fitting and reliable cooling",
    image: acImg,
    imageAlt: "Split AC installation service at a residential property in Pune",
    icon: Fan,
    badge: "Clean and Safe Installation",
    serviceType: "AC Installation Service",
    problems: [
      "New split AC installation for homes and offices",
      "Window AC fitting and alignment support",
      "Incorrect slope causing water leakage",
      "Poor cooling after low-quality installation",
      "Need relocation and fresh piping after shifting",
      "Drainage or electrical connection issues",
    ],
    faqs: [
      {
        question: "Do you install both split and window AC units?",
        answer:
          "Yes. We provide installation support for split AC, window AC, and shifting-related reinstallations in Pune.",
      },
      {
        question: "Do you help with copper pipe and drainage checks?",
        answer:
          "Yes. We inspect mounting, piping, insulation, drainage slope, and basic electrical safety before handover.",
      },
      {
        question: "Can I book installation for a newly purchased AC?",
        answer:
          "Yes. Share the brand and model details while booking, and we will schedule the right technician.",
      },
    ],
    related: [
      "ac-uninstallation-pune",
      "ac-repair-service-pune",
      "ac-annual-maintenance-contract-pune",
    ],
    keywords: [
      "AC installation in Pune",
      "split AC installation Pune",
      "window AC installation Pune",
    ],
  }),
  createService({
    slug: "ac-uninstallation-pune",
    category: "air-conditioning",
    title: "AC Uninstallation",
    shortTitle: "AC Uninstallation",
    seoTitle:
      "AC Uninstallation in Pune | Safe AC Removal Service | SkyCooling Pune",
    metaDescription:
      "Safe AC uninstallation in Pune for shifting, renovation, or replacement. We remove split and window AC units with proper gas care and component handling.",
    excerpt:
      "Careful AC dismantling support for relocation, replacement, and site renovations.",
    intro:
      "If you are moving, renovating, or replacing your air conditioner, our AC uninstallation service in Pune removes the unit safely to prevent gas loss and part damage.",
    h1: "AC Uninstallation in Pune",
    heroTitle: "Safe AC removal for shifting, renovation, or replacement",
    image: acImg,
    imageAlt: "Technician uninstalling an AC unit for a Pune customer",
    icon: Wrench,
    badge: "Safe Dismantling Support",
    serviceType: "AC Uninstallation Service",
    problems: [
      "Need to shift AC to a new home or office",
      "Renovation work requiring AC removal",
      "Old AC unit replacement or disposal planning",
      "Improper dismantling causing gas loss",
      "Broken brackets, wiring, or drainage during removal",
      "Need reinstall support after uninstallation",
    ],
    faqs: [
      {
        question: "Do you uninstall split and window AC units?",
        answer:
          "Yes. We provide careful dismantling for both types and can also help with reinstallation at the new site.",
      },
      {
        question: "Will you help reduce the risk of gas loss?",
        answer:
          "Yes. Our team follows a safe removal process to protect the equipment and reduce avoidable refrigerant loss.",
      },
      {
        question: "Can I book uninstallation and installation together?",
        answer:
          "Yes. Many customers in Pune book both services together when shifting homes or offices.",
      },
    ],
    related: ["ac-installation-pune", "ac-repair-service-pune"],
    keywords: [
      "AC uninstallation in Pune",
      "AC dismantling Pune",
      "AC shifting service Pune",
    ],
  }),
  createService({
    slug: "ac-pcb-repair-pune",
    category: "air-conditioning",
    title: "AC PCB Repair",
    shortTitle: "AC PCB Repair",
    seoTitle:
      "AC PCB Repair in Pune | Inverter AC PCB Service | SkyCooling Pune",
    metaDescription:
      "Expert AC PCB repair in Pune for inverter and split AC units with error-code diagnosis, board testing, and repair support by trained technicians.",
    excerpt:
      "Board-level diagnosis for ACs showing startup faults, sensor issues, or recurring error codes.",
    intro:
      "Modern AC units depend on healthy control boards for sensors, inverter control, and power management. Our AC PCB repair service in Pune addresses board faults before they cause bigger failures.",
    h1: "AC PCB Repair in Pune",
    heroTitle:
      "Targeted control-board diagnosis for AC error and startup issues",
    image: acImg,
    imageAlt: "Technician diagnosing AC PCB issues in Pune",
    icon: BriefcaseBusiness,
    badge: "Error-Code Diagnosis Available",
    serviceType: "AC PCB Repair Service",
    problems: [
      "AC not turning on even with power supply available",
      "Blinking lights or repeated error codes",
      "Sensor communication issues",
      "Outdoor unit not responding to indoor commands",
      "Burnt PCB sections or voltage damage",
      "Random shutdown or unstable inverter performance",
    ],
    faqs: [
      {
        question: "Can all AC PCB issues be repaired?",
        answer:
          "Not all boards are repairable, but many faults can be diagnosed and resolved. If replacement is the safer option, we explain that clearly.",
      },
      {
        question: "Do you handle inverter AC PCB problems?",
        answer:
          "Yes. We inspect inverter control issues, communication faults, and power board symptoms for compatible models.",
      },
      {
        question: "Will you test the AC after PCB repair?",
        answer:
          "Yes. Post-repair performance testing is part of the service so we can confirm startup and cooling stability.",
      },
    ],
    related: ["ac-repair-service-pune", "ac-compressor-repair-pune"],
    keywords: [
      "AC PCB repair in Pune",
      "inverter AC PCB service Pune",
      "AC board repair Pune",
    ],
  }),
  createService({
    slug: "ac-compressor-repair-pune",
    category: "air-conditioning",
    title: "AC Compressor Repair",
    shortTitle: "AC Compressor Repair",
    seoTitle:
      "AC Compressor Repair in Pune | Compressor Service | SkyCooling Pune",
    metaDescription:
      "AC compressor repair in Pune for low cooling, startup failures, overload trips, and compressor performance issues in residential and commercial AC systems.",
    excerpt:
      "Compressor-focused checks for cooling loss, high load, and repeated shutdown complaints.",
    intro:
      "The compressor is the heart of your AC system. Our Pune technicians inspect compressor health, current load, refrigerant conditions, and related faults before recommending repair or replacement.",
    h1: "AC Compressor Repair in Pune",
    heroTitle:
      "Protect cooling performance with proper AC compressor diagnosis",
    image: acImg,
    imageAlt: "AC compressor repair service in Pune",
    icon: Wrench,
    badge: "Compressor Load Check Included",
    serviceType: "AC Compressor Repair Service",
    problems: [
      "Compressor not starting or short-cycling",
      "AC running but room not cooling properly",
      "High current load or overload tripping",
      "Noisy compressor operation",
      "Repeated gas issues affecting compressor health",
      "Need expert opinion before compressor replacement",
    ],
    faqs: [
      {
        question: "Do you repair compressors or only replace them?",
        answer:
          "We first diagnose whether the issue is with the compressor itself or with related parts such as capacitors, gas level, or PCB controls. Replacement is recommended only when necessary.",
      },
      {
        question: "Can low gas affect compressor performance?",
        answer:
          "Yes. Low refrigerant and leaks can strain the compressor over time, which is why we inspect the full cooling circuit.",
      },
      {
        question: "Do you handle compressor issues for inverter AC units?",
        answer:
          "Yes. We inspect both inverter and non-inverter systems based on model type and fault symptoms.",
      },
    ],
    related: [
      "ac-gas-refilling-pune",
      "ac-repair-service-pune",
      "ac-pcb-repair-pune",
    ],
    keywords: [
      "AC compressor repair in Pune",
      "AC cooling compressor issue Pune",
      "compressor service Pune",
    ],
  }),
  createService({
    slug: "ac-annual-maintenance-contract-pune",
    category: "air-conditioning",
    title: "AC Annual Maintenance Contract",
    shortTitle: "AC AMC",
    seoTitle:
      "AC Annual Maintenance Contract in Pune | AC AMC Service | SkyCooling Pune",
    metaDescription:
      "Book AC AMC in Pune for regular servicing, filter cleaning, cooling checks, and preventive maintenance for homes, offices, and commercial spaces.",
    excerpt:
      "Preventive AC care plans designed to improve cooling efficiency and reduce breakdowns.",
    intro:
      "Our AC annual maintenance contract in Pune helps households and businesses reduce sudden breakdowns with scheduled inspections, cleaning, and performance checks.",
    h1: "AC Annual Maintenance Contract in Pune",
    heroTitle:
      "Planned AC maintenance for better efficiency and fewer breakdowns",
    image: acImg,
    imageAlt: "Technician performing preventive AC maintenance in Pune",
    icon: PackageCheck,
    badge: "Planned Preventive Care",
    serviceType: "AC Annual Maintenance Contract",
    problems: [
      "Need routine servicing for home AC units",
      "High dust build-up reducing cooling efficiency",
      "Repeated seasonal issues before summer",
      "Office or shop AC units needing preventive checks",
      "Unexpected downtime due to neglected maintenance",
      "Need scheduled service reminders and follow-up",
    ],
    faqs: [
      {
        question: "Who should choose an AC AMC plan?",
        answer:
          "AMC is ideal for homes with multiple AC units, rental properties, offices, clinics, and shops that need planned upkeep instead of reactive repairs.",
      },
      {
        question: "Does AMC include repair parts?",
        answer:
          "Coverage depends on the agreed plan. We explain what is included in service visits and what would be separately chargeable if any major parts fail.",
      },
      {
        question: "Do you offer AMC support in nearby Pune areas too?",
        answer:
          "Yes. We serve Pune and key nearby localities such as Wakad, Baner, Hinjewadi, Kharadi, and Pimpri Chinchwad.",
      },
    ],
    related: [
      "ac-repair-service-pune",
      "ac-installation-pune",
      "ac-gas-refilling-pune",
    ],
    keywords: [
      "AC AMC in Pune",
      "AC annual maintenance contract Pune",
      "preventive AC service Pune",
    ],
  }),
  createService({
    slug: "refrigerator-repair-pune",
    category: "refrigeration",
    title: "Refrigerator Repair",
    shortTitle: "Refrigerator Repair",
    seoTitle:
      "Refrigerator Repair in Pune | Fridge Repair Service | SkyCooling Pune",
    metaDescription:
      "Trusted refrigerator repair in Pune for cooling issues, compressor problems, gas filling, leakage, and thermostat faults across all major fridge brands.",
    excerpt:
      "Doorstep fridge repair for cooling faults, leakage, noise, and compressor issues.",
    intro:
      "From single-door fridges to side-by-side models, we provide refrigerator repair in Pune with practical diagnosis, transparent pricing, and same-day support in many areas.",
    h1: "Refrigerator Repair in Pune",
    heroTitle: "Reliable fridge repair for homes, tenants, and family kitchens",
    image: fridgeImg,
    imageAlt: "Technician repairing a refrigerator in Pune",
    icon: Refrigerator,
    badge: "Doorstep Fridge Service",
    serviceType: "Refrigerator Repair Service",
    problems: [
      "Fridge not cooling or overcooling",
      "Water leakage or frost build-up",
      "Compressor noise or startup failure",
      "Thermostat and sensor issues",
      "Door seal and gasket problems",
      "Power trip or unstable performance",
    ],
    faqs: [
      {
        question: "Do you repair all refrigerator types?",
        answer:
          "Yes. We service single-door, double-door, side-by-side, and multi-door refrigerators in Pune.",
      },
      {
        question: "Can you fix a refrigerator that is running but not cooling?",
        answer:
          "Yes. That issue can be caused by gas leakage, compressor trouble, thermostat faults, or airflow blockage. We diagnose the actual cause before repair.",
      },
      {
        question: "Do you also handle commercial refrigerator jobs?",
        answer:
          "Yes. We have a separate commercial refrigerator repair service for stores, cafes, and commercial kitchen setups.",
      },
    ],
    related: [
      "refrigerator-gas-filling-pune",
      "refrigerator-compressor-repair-pune",
      "commercial-refrigerator-repair-pune",
      "deep-freezer-repair-pune",
    ],
    keywords: [
      "refrigerator repair in Pune",
      "fridge repair Pune",
      "home appliance repair in Pune",
    ],
    featured: true,
  }),
  createService({
    slug: "refrigerator-gas-filling-pune",
    category: "refrigeration",
    title: "Refrigerator Gas Filling",
    shortTitle: "Fridge Gas Filling",
    seoTitle:
      "Refrigerator Gas Filling in Pune | Fridge Gas Refill | SkyCooling Pune",
    metaDescription:
      "Professional refrigerator gas filling in Pune with leak inspection, cooling checks, and safe refrigerant handling for household refrigerators.",
    excerpt:
      "Leak-aware fridge gas refill service to bring back stable cooling performance.",
    intro:
      "If your fridge has lost cooling because of low refrigerant, we provide refrigerator gas filling in Pune after checking for leaks, compressor stress, and cooling-line condition.",
    h1: "Refrigerator Gas Filling in Pune",
    heroTitle: "Restore cooling with proper fridge gas filling and leak checks",
    image: fridgeImg,
    imageAlt: "Refrigerator gas filling service in Pune",
    icon: Droplets,
    badge: "Leak Check Before Refill",
    serviceType: "Refrigerator Gas Filling Service",
    problems: [
      "Fridge is not cooling properly",
      "Cooling drops over time after previous repair",
      "Possible gas leakage from cooling line",
      "Freezer cooling but fridge section warm",
      "Compressor heating due to low refrigerant",
      "Need gas refill after leak correction",
    ],
    faqs: [
      {
        question: "Will gas filling alone fix my refrigerator?",
        answer:
          "Only if low refrigerant is the root issue. We inspect leak points and overall cooling performance before recommending a refill.",
      },
      {
        question: "How long does refrigerator gas filling take?",
        answer:
          "Timing depends on diagnosis and any leak repair needed first, but many standard jobs are completed during the same visit.",
      },
      {
        question: "Do you support major fridge brands in Pune?",
        answer:
          "Yes. We work on many popular household refrigerator brands and models commonly used in Pune homes.",
      },
    ],
    related: [
      "refrigerator-repair-pune",
      "refrigerator-compressor-repair-pune",
    ],
    keywords: [
      "refrigerator gas filling in Pune",
      "fridge gas refill Pune",
      "fridge cooling service Pune",
    ],
  }),
  createService({
    slug: "refrigerator-compressor-repair-pune",
    category: "refrigeration",
    title: "Refrigerator Compressor Repair",
    shortTitle: "Fridge Compressor Repair",
    seoTitle:
      "Refrigerator Compressor Repair in Pune | Fridge Compressor Service | SkyCooling Pune",
    metaDescription:
      "Refrigerator compressor repair in Pune for low cooling, unusual noise, startup issues, and overload trips. Expert diagnosis before part replacement.",
    excerpt:
      "Targeted compressor diagnosis for fridges showing cooling failure or heavy load symptoms.",
    intro:
      "A weak or failing compressor can cause major cooling loss. Our refrigerator compressor repair service in Pune focuses on root-cause checks so you do not overspend on unnecessary replacements.",
    h1: "Refrigerator Compressor Repair in Pune",
    heroTitle: "Compressor checks that protect your fridge and your budget",
    image: fridgeImg,
    imageAlt: "Refrigerator compressor repair in Pune",
    icon: Wrench,
    badge: "Compressor Diagnosis First",
    serviceType: "Refrigerator Compressor Repair Service",
    problems: [
      "Fridge compressor not starting",
      "Clicking sound and repeated shutdown",
      "Compressor overheating or drawing high load",
      "Cooling loss even though the fan is working",
      "Need opinion before compressor replacement",
      "Repeated gas or relay-related compressor stress",
    ],
    faqs: [
      {
        question: "Do all compressor issues require replacement?",
        answer:
          "No. Sometimes the fault is related to relay, overload, gas level, or thermostat conditions. We verify that before recommending major work.",
      },
      {
        question:
          "Can you repair double-door and side-by-side fridge compressors?",
        answer:
          "Yes. We inspect compressor-related issues across common household refrigerator formats.",
      },
      {
        question: "Do you test cooling after compressor work?",
        answer:
          "Yes. Performance checks are part of the process so you can confirm proper operation before closure.",
      },
    ],
    related: [
      "refrigerator-repair-pune",
      "refrigerator-gas-filling-pune",
      "deep-freezer-repair-pune",
    ],
    keywords: [
      "refrigerator compressor repair in Pune",
      "fridge compressor repair Pune",
      "fridge not cooling Pune",
    ],
  }),
  createService({
    slug: "washing-machine-repair-pune",
    category: "laundry",
    title: "Washing Machine Repair",
    shortTitle: "Washing Machine Repair",
    seoTitle:
      "Washing Machine Repair in Pune | Same-Day Washer Service | SkyCooling Pune",
    metaDescription:
      "Book washing machine repair in Pune for front-load, top-load, and semi-automatic machines. Drum, motor, drainage, PCB, and spin issue support available.",
    excerpt:
      "Quick doorstep washing machine repair for drainage, spin, vibration, and power issues.",
    intro:
      "We repair top-load, front-load, and semi-automatic washing machines across Pune with practical fault diagnosis, clean service, and transparent pricing.",
    h1: "Washing Machine Repair in Pune",
    heroTitle: "Doorstep washing machine repair for daily home convenience",
    image: washerImg,
    imageAlt: "Washing machine repair service at a Pune home",
    icon: WashingMachine,
    badge: "Top-Load and Front-Load Experts",
    serviceType: "Washing Machine Repair Service",
    problems: [
      "Machine not spinning or not starting",
      "Drainage and water inlet problems",
      "Heavy noise, vibration, or shaking",
      "Display, PCB, or sensor issues",
      "Door lock and latch faults",
      "Motor, belt, or bearing-related problems",
    ],
    faqs: [
      {
        question: "Do you repair front-load and top-load washing machines?",
        answer:
          "Yes. We handle front-load, top-load, and semi-automatic machines from major brands used in Pune homes.",
      },
      {
        question: "Can you fix same-day drainage or spin issues?",
        answer:
          "In many Pune localities, yes. We prioritise common household breakdowns that disrupt daily laundry use.",
      },
      {
        question: "Do you provide drum repair separately?",
        answer:
          "Yes. We also offer a dedicated washing machine drum repair service when the issue is specifically related to the drum, bearings, or support assembly.",
      },
    ],
    related: [
      "washing-machine-drum-repair-pune",
      "microwave-oven-heating-issue-repair-pune",
    ],
    keywords: [
      "washing machine repair in Pune",
      "washer repair Pune",
      "home appliance repair Pune",
    ],
    featured: true,
  }),
  createService({
    slug: "washing-machine-drum-repair-pune",
    category: "laundry",
    title: "Washing Machine Drum Repair",
    shortTitle: "Drum Repair",
    seoTitle:
      "Washing Machine Drum Repair in Pune | Drum Noise & Spin Repair | SkyCooling Pune",
    metaDescription:
      "Washing machine drum repair in Pune for noise, wobble, spin failure, bearing issues, and damaged drum support in top-load and front-load machines.",
    excerpt:
      "Specialized drum, bearing, and spin assembly repair for noisy or unstable washing machines.",
    intro:
      "If your machine makes loud noise, shakes heavily, or struggles to spin, our washing machine drum repair service in Pune can inspect bearings, shafts, suspension, and drum alignment.",
    h1: "Washing Machine Drum Repair in Pune",
    heroTitle: "Fix drum noise, wobble, and spin issues before they get worse",
    image: washerImg,
    imageAlt: "Technician performing washing machine drum repair in Pune",
    icon: Wrench,
    badge: "Noise and Spin Issue Experts",
    serviceType: "Washing Machine Drum Repair Service",
    problems: [
      "Loud grinding noise during spin cycle",
      "Drum wobbling or hitting cabinet walls",
      "Bearing wear causing rough movement",
      "Machine not spinning clothes properly",
      "Shock absorber or support issues",
      "Rust, damage, or imbalance in drum assembly",
    ],
    faqs: [
      {
        question: "What causes washing machine drum noise?",
        answer:
          "Common causes include worn bearings, loose drum supports, suspension faults, imbalance, or damaged internal parts.",
      },
      {
        question: "Do you repair front-load drum issues in Pune?",
        answer:
          "Yes. We inspect both front-load and top-load machines depending on the noise or spin symptom.",
      },
      {
        question: "Can drum issues damage the machine further?",
        answer:
          "Yes. If ignored, they can strain the motor, cabinet, and support components, so early diagnosis is recommended.",
      },
    ],
    related: ["washing-machine-repair-pune"],
    keywords: [
      "washing machine drum repair in Pune",
      "washing machine noise repair Pune",
      "spin issue repair Pune",
    ],
  }),
  createService({
    slug: "dishwasher-repair-pune",
    category: "kitchen",
    title: "Dishwasher Repair Service",
    shortTitle: "Dishwasher Repair",
    seoTitle:
      "Dishwasher Repair in Pune | Dishwasher Service Near Me | SkyCooling Pune",
    metaDescription:
      "Dishwasher repair in Pune for wash cycle issues, drainage faults, poor cleaning, and power problems. Same-day technician support for home dishwashers.",
    excerpt:
      "Convenient dishwasher diagnosis and repair for homes that need clean, hassle-free kitchen support.",
    intro:
      "If your dishwasher is not cleaning properly, not draining, or not starting, we provide reliable dishwasher repair in Pune with doorstep support and practical troubleshooting.",
    h1: "Dishwasher Repair in Pune",
    heroTitle: "Keep your kitchen routine moving with quick dishwasher repair",
    image: heroImg,
    imageAlt: "Dishwasher repair service for a Pune household",
    icon: CookingPot,
    badge: "Kitchen Appliance Experts",
    serviceType: "Dishwasher Repair Service",
    problems: [
      "Dishwasher not starting or stopping mid-cycle",
      "Water not draining after wash",
      "Poor cleaning results or cloudy utensils",
      "Water leakage from the dishwasher base or door",
      "Spray arm, pump, or inlet valve issues",
      "Error lights, unusual sounds, or heating faults",
    ],
    faqs: [
      {
        question: "Do you repair built-in and freestanding dishwashers?",
        answer:
          "Yes. We inspect and repair common issues in both built-in and freestanding dishwasher units used in Pune homes.",
      },
      {
        question: "Can you fix drainage and cleaning issues on the same visit?",
        answer:
          "Many common dishwasher faults can be handled during the same visit once the technician confirms the required work and parts.",
      },
      {
        question: "Do you also provide dishwasher installation?",
        answer:
          "Yes. We offer separate dishwasher installation and maintenance services as well.",
      },
    ],
    related: [
      "dishwasher-installation-pune",
      "dishwasher-maintenance-pune",
      "microwave-oven-heating-issue-repair-pune",
    ],
    keywords: [
      "dishwasher repair in Pune",
      "dishwasher service near me",
      "kitchen appliance repair Pune",
    ],
  }),
  createService({
    slug: "dishwasher-installation-pune",
    category: "kitchen",
    title: "Dishwasher Installation Service",
    shortTitle: "Dishwasher Installation",
    seoTitle:
      "Dishwasher Installation in Pune | Dishwasher Fitting Service | SkyCooling Pune",
    metaDescription:
      "Dishwasher installation in Pune with inlet, outlet, drain, and placement checks for safe and proper kitchen appliance setup.",
    excerpt:
      "Professional dishwasher fitting for new kitchens, replacements, and modular setups.",
    intro:
      "A proper dishwasher installation helps avoid leaks, poor drainage, and unstable performance. We provide reliable dishwasher fitting service in Pune for new and replacement units.",
    h1: "Dishwasher Installation in Pune",
    heroTitle: "Neat dishwasher fitting with utility checks and clean handover",
    image: heroImg,
    imageAlt: "Dishwasher installation service in a Pune kitchen",
    icon: PackageCheck,
    badge: "Leak-Safe Installation Support",
    serviceType: "Dishwasher Installation Service",
    problems: [
      "New dishwasher setup for modular kitchens",
      "Need inlet and outlet utility alignment",
      "Replacement unit installation after old appliance removal",
      "Drain hose placement and leak prevention",
      "Poor leveling affecting wash performance",
      "Need startup testing after installation",
    ],
    faqs: [
      {
        question: "Do you install both built-in and freestanding dishwashers?",
        answer:
          "Yes. We support both common dishwasher formats, depending on kitchen utility access and space availability.",
      },
      {
        question: "Will you check for leaks after installation?",
        answer:
          "Yes. Functional testing and leak checks are part of the installation handover process.",
      },
      {
        question: "Can I book installation for a dishwasher purchased online?",
        answer:
          "Yes. Share the model details and site condition during booking so we can plan the visit properly.",
      },
    ],
    related: ["dishwasher-repair-pune", "dishwasher-maintenance-pune"],
    keywords: [
      "dishwasher installation in Pune",
      "dishwasher fitting Pune",
      "dishwasher setup service Pune",
    ],
  }),
  createService({
    slug: "dishwasher-maintenance-pune",
    category: "kitchen",
    title: "Dishwasher Maintenance Service",
    shortTitle: "Dishwasher Maintenance",
    seoTitle:
      "Dishwasher Maintenance in Pune | Preventive Dishwasher Service | SkyCooling Pune",
    metaDescription:
      "Dishwasher maintenance in Pune for filter cleaning, spray arm checks, drainage care, and preventive inspection to avoid kitchen appliance breakdowns.",
    excerpt:
      "Preventive dishwasher care to improve cleaning results and reduce repeat service calls.",
    intro:
      "Regular dishwasher maintenance keeps wash quality consistent and reduces sudden kitchen disruptions. Our preventive service in Pune focuses on cleaning, inspection, and performance checks.",
    h1: "Dishwasher Maintenance in Pune",
    heroTitle:
      "Preventive care for cleaner wash cycles and fewer dishwasher problems",
    image: heroImg,
    imageAlt: "Dishwasher preventive maintenance service in Pune",
    icon: BriefcaseBusiness,
    badge: "Preventive Kitchen Care",
    serviceType: "Dishwasher Maintenance Service",
    problems: [
      "Need regular cleaning for filters and spray arms",
      "Bad smell or residue inside the dishwasher",
      "Drainage slowing down over time",
      "Performance drop due to hard-water build-up",
      "Need preventive checks before heavy family use",
      "Recurring minor issues after long gaps in servicing",
    ],
    faqs: [
      {
        question: "How often should a dishwasher be serviced?",
        answer:
          "Usage level matters, but regular preventive maintenance helps households avoid drainage and cleaning issues before they become major faults.",
      },
      {
        question: "Does maintenance help with bad smell and residue?",
        answer:
          "Yes. Cleaning filters, interior sections, and water-flow parts often improves smell and wash quality.",
      },
      {
        question: "Can maintenance reduce future repair costs?",
        answer:
          "In many cases, yes. Early cleaning and inspection can prevent strain on pumps, valves, and heating components.",
      },
    ],
    related: ["dishwasher-repair-pune", "dishwasher-installation-pune"],
    keywords: [
      "dishwasher maintenance in Pune",
      "dishwasher service Pune",
      "dishwasher cleaning Pune",
    ],
  }),
  createService({
    slug: "microwave-oven-heating-issue-repair-pune",
    category: "kitchen",
    title: "Microwave/Oven Heating Issue Repair",
    shortTitle: "Microwave Heating Repair",
    seoTitle:
      "Microwave Oven Repair in Pune | Heating Issue Repair | SkyCooling Pune",
    metaDescription:
      "Microwave oven repair in Pune for heating issues, sparking, turntable faults, and power problems. Quick diagnosis for solo, grill, and convection ovens.",
    excerpt:
      "Reliable microwave and oven troubleshooting for heating loss, noise, and display issues.",
    intro:
      "If your microwave or oven is running without heating properly, we provide practical microwave oven repair in Pune for common kitchen appliance faults and unsafe operation symptoms.",
    h1: "Microwave Oven Repair in Pune",
    heroTitle:
      "Fix microwave heating problems with careful, appliance-safe diagnosis",
    image: heroImg,
    imageAlt: "Microwave oven heating issue repair service in Pune",
    icon: CookingPot,
    badge: "Heating Issue Diagnosis",
    serviceType: "Microwave Oven Repair Service",
    problems: [
      "Microwave running but not heating food",
      "Sparking or burning smell during use",
      "Turntable not rotating properly",
      "Panel, timer, or display malfunction",
      "Door switch or latch issue",
      "Convection oven uneven heating complaints",
    ],
    faqs: [
      {
        question: "Do you repair solo, grill, and convection microwaves?",
        answer:
          "Yes. We inspect common faults across multiple microwave and oven types used in Pune households.",
      },
      {
        question: "Is it safe to keep using a microwave that sparks?",
        answer:
          "No. It is best to stop using the appliance and schedule an inspection to avoid further damage or safety risk.",
      },
      {
        question: "Can you handle heating issues and panel problems together?",
        answer:
          "Yes. We diagnose the full complaint and explain whether one or multiple parts are involved before repair.",
      },
    ],
    related: ["dishwasher-repair-pune", "washing-machine-repair-pune"],
    keywords: [
      "microwave oven repair in Pune",
      "microwave heating issue repair Pune",
      "oven repair Pune",
    ],
  }),
  createService({
    slug: "deep-freezer-repair-pune",
    category: "refrigeration",
    title: "Deep Freezer Repair",
    shortTitle: "Deep Freezer Repair",
    seoTitle: "Deep Freezer Repair in Pune | Freezer Service | SkyCooling Pune",
    metaDescription:
      "Deep freezer repair in Pune for cooling failure, compressor issues, icing, and commercial or household freezer breakdowns.",
    excerpt:
      "Freezer repair support for homes, retail counters, and frozen storage needs.",
    intro:
      "We provide deep freezer repair in Pune for households, shops, and food businesses that need stable low-temperature performance without long downtime.",
    h1: "Deep Freezer Repair in Pune",
    heroTitle:
      "Protect frozen stock and daily use with dependable freezer repair",
    image: fridgeImg,
    imageAlt: "Deep freezer repair service in Pune",
    icon: Snowflake,
    badge: "Low-Temperature Cooling Support",
    serviceType: "Deep Freezer Repair Service",
    problems: [
      "Deep freezer not cooling properly",
      "Compressor noise or startup failure",
      "Excess ice build-up or thermostat trouble",
      "Water leakage or door seal problems",
      "Cabinet cooling inconsistency",
      "Commercial usage causing repeated breakdowns",
    ],
    faqs: [
      {
        question: "Do you repair both home and commercial deep freezers?",
        answer:
          "Yes. We support many common freezer units used in homes, stores, and food businesses in Pune.",
      },
      {
        question: "Can poor door sealing affect cooling?",
        answer:
          "Yes. Bad door sealing can increase frost build-up, reduce efficiency, and make the freezer work harder.",
      },
      {
        question: "Do you also service commercial refrigerators?",
        answer:
          "Yes. We offer separate commercial refrigerator repair for display and business-use cooling units.",
      },
    ],
    related: [
      "commercial-refrigerator-repair-pune",
      "refrigerator-repair-pune",
      "refrigerator-compressor-repair-pune",
    ],
    keywords: [
      "deep freezer repair in Pune",
      "freezer repair Pune",
      "commercial freezer repair Pune",
    ],
  }),
  createService({
    slug: "commercial-refrigerator-repair-pune",
    category: "commercial-cooling",
    title: "Commercial Refrigerator Repair",
    shortTitle: "Commercial Refrigerator Repair",
    seoTitle:
      "Commercial Refrigerator Repair in Pune | Business Cooling Service | SkyCooling Pune",
    metaDescription:
      "Commercial refrigerator repair in Pune for cafes, restaurants, shops, and commercial kitchens. Fast diagnosis for cooling loss, compressor issues, and downtime reduction.",
    excerpt:
      "Business-focused cooling support to protect stock, storage quality, and service continuity.",
    intro:
      "Commercial refrigeration downtime can disrupt sales and spoil inventory. Our commercial refrigerator repair service in Pune focuses on quick diagnosis, practical repair planning, and reliable cooling restoration.",
    h1: "Commercial Refrigerator Repair in Pune",
    heroTitle:
      "Business cooling support for retail, food service, and commercial kitchens",
    image: fridgeImg,
    imageAlt: "Commercial refrigerator repair service in Pune",
    icon: BriefcaseBusiness,
    badge: "Commercial Cooling Experts",
    serviceType: "Commercial Refrigerator Repair Service",
    problems: [
      "Display refrigerator not maintaining temperature",
      "Cooling loss affecting stock safety",
      "Compressor overload and high downtime risk",
      "Water leakage or fan airflow issues",
      "Door closure and gasket problems",
      "Need urgent service for restaurants and retail counters",
    ],
    faqs: [
      {
        question: "Do you handle urgent commercial cooling breakdowns?",
        answer:
          "Yes. We understand that business cooling failures can affect stock and operations, so we prioritise urgent requests where possible.",
      },
      {
        question: "Which businesses use this service most?",
        answer:
          "Common customers include cafes, bakeries, restaurants, grocery shops, medical stores, and commercial kitchens in Pune.",
      },
      {
        question: "Do you also provide cold room and chiller services?",
        answer:
          "Yes. We support cold room maintenance, cold storage repair, and chiller repair as separate services.",
      },
    ],
    related: [
      "cold-storage-repair-pune",
      "cold-room-maintenance-pune",
      "chiller-repair-service-pune",
      "deep-freezer-repair-pune",
    ],
    keywords: [
      "commercial refrigerator repair in Pune",
      "business cooling service Pune",
      "display fridge repair Pune",
    ],
  }),
  createService({
    slug: "cold-storage-repair-pune",
    category: "commercial-cooling",
    title: "Cold Storage Repair Service",
    shortTitle: "Cold Storage Repair",
    seoTitle:
      "Cold Storage Repair Service in Pune | Industrial Cooling Support | SkyCooling Pune",
    metaDescription:
      "Cold storage repair service in Pune for temperature instability, compressor faults, panel issues, and cooling breakdowns in storage and commercial facilities.",
    excerpt:
      "Responsive cold storage repair support for temperature-sensitive commercial operations.",
    intro:
      "Cold storage systems need stable performance to protect inventory and operational reliability. We provide cold storage repair service in Pune for businesses that depend on uninterrupted cooling.",
    h1: "Cold Storage Repair Service in Pune",
    heroTitle:
      "Protect inventory with responsive cold storage diagnostics and repair",
    image: heroImg,
    imageAlt: "Cold storage repair service in Pune",
    icon: Warehouse,
    badge: "Commercial Response Support",
    serviceType: "Cold Storage Repair Service",
    problems: [
      "Temperature fluctuations inside the cold storage unit",
      "Compressor and condenser performance issues",
      "Panel alarms or control system malfunction",
      "Door sealing and insulation loss",
      "Unexpected downtime affecting stored goods",
      "Need emergency cooling support for commercial inventory",
    ],
    faqs: [
      {
        question:
          "Do you support cold storage facilities in Pune industrial areas?",
        answer:
          "Yes. We provide service support across Pune and nearby business zones depending on technician availability and system scope.",
      },
      {
        question: "Can you help when temperature keeps fluctuating?",
        answer:
          "Yes. We inspect control issues, compressor load, airflow, and insulation-related causes behind unstable temperatures.",
      },
      {
        question: "Do you also provide preventive maintenance?",
        answer:
          "Yes. Cold room maintenance and related preventive service options are available as separate offerings.",
      },
    ],
    related: [
      "cold-room-maintenance-pune",
      "commercial-refrigerator-repair-pune",
      "chiller-repair-service-pune",
    ],
    keywords: [
      "cold storage repair service in Pune",
      "cold storage technician Pune",
      "industrial cooling repair Pune",
    ],
  }),
  createService({
    slug: "cold-room-maintenance-pune",
    category: "commercial-cooling",
    title: "Cold Room Maintenance Service",
    shortTitle: "Cold Room Maintenance",
    seoTitle:
      "Cold Room Maintenance in Pune | Preventive Cooling Care | SkyCooling Pune",
    metaDescription:
      "Cold room maintenance in Pune for commercial cooling systems, including inspection, cleaning, temperature checks, and preventive service planning.",
    excerpt:
      "Planned maintenance support for more stable cold room performance and lower downtime risk.",
    intro:
      "Our cold room maintenance service in Pune helps businesses reduce sudden failures with scheduled inspection, cleaning, and temperature-performance checks.",
    h1: "Cold Room Maintenance in Pune",
    heroTitle: "Preventive cold room care for smoother business operations",
    image: heroImg,
    imageAlt: "Cold room maintenance support in Pune",
    icon: PackageCheck,
    badge: "Preventive Commercial Care",
    serviceType: "Cold Room Maintenance Service",
    problems: [
      "Need routine checks for cold room temperature stability",
      "Dust and wear affecting cooling efficiency",
      "Recurring alarms or inconsistent performance",
      "Need preventive servicing to reduce product loss risk",
      "Door, gasket, or panel condition checks",
      "Regular upkeep for food, pharma, or storage operations",
    ],
    faqs: [
      {
        question: "Why is preventive cold room maintenance important?",
        answer:
          "It helps identify wear, airflow issues, and performance problems before they become costly breakdowns or affect stored inventory.",
      },
      {
        question: "Can you create a recurring maintenance schedule?",
        answer:
          "Yes. We can support planned visits for businesses that need periodic cold room upkeep in Pune.",
      },
      {
        question: "Do you also repair cold room breakdowns?",
        answer:
          "Yes. We also provide cold storage repair and related commercial cooling services for urgent issues.",
      },
    ],
    related: [
      "cold-storage-repair-pune",
      "commercial-refrigerator-repair-pune",
    ],
    keywords: [
      "cold room maintenance in Pune",
      "cold room service Pune",
      "preventive cooling maintenance Pune",
    ],
  }),
  createService({
    slug: "water-cooler-repair-pune",
    category: "commercial-cooling",
    title: "Water Cooler Repair",
    shortTitle: "Water Cooler Repair",
    seoTitle:
      "Water Cooler Repair in Pune | Drinking Water Cooler Service | SkyCooling Pune",
    metaDescription:
      "Water cooler repair in Pune for poor cooling, water leakage, compressor issues, and commercial drinking water unit breakdowns.",
    excerpt:
      "Prompt service for water coolers in offices, schools, clinics, and shared facilities.",
    intro:
      "We provide water cooler repair in Pune for homes, offices, schools, clinics, and commercial locations that need dependable drinking water cooling support.",
    h1: "Water Cooler Repair in Pune",
    heroTitle:
      "Reliable cooling support for drinking water systems and shared facilities",
    image: fridgeImg,
    imageAlt: "Water cooler repair service in Pune",
    icon: Droplets,
    badge: "Office and Commercial Support",
    serviceType: "Water Cooler Repair Service",
    problems: [
      "Water cooler not cooling properly",
      "Compressor or thermostat problems",
      "Water leakage from the unit",
      "Slow dispensing or low cooling recovery",
      "Noise, vibration, or electrical trips",
      "Need urgent service for offices or institutions",
    ],
    faqs: [
      {
        question: "Do you repair water coolers used in offices and schools?",
        answer:
          "Yes. We support many water cooler setups used in commercial and institutional environments across Pune.",
      },
      {
        question: "Can poor cooling be related to gas or compressor issues?",
        answer:
          "Yes. Weak cooling may involve refrigerant, compressor, thermostat, or circulation issues, so diagnosis is important before repair.",
      },
      {
        question: "Do you also handle ice machine and chiller systems?",
        answer:
          "Yes. Related commercial cooling services are available separately for those systems.",
      },
    ],
    related: ["ice-machine-repair-pune", "chiller-repair-service-pune"],
    keywords: [
      "water cooler repair in Pune",
      "drinking water cooler service Pune",
      "commercial water cooler repair Pune",
    ],
  }),
  createService({
    slug: "ice-machine-repair-pune",
    category: "commercial-cooling",
    title: "Ice Machine Repair",
    shortTitle: "Ice Machine Repair",
    seoTitle:
      "Ice Machine Repair in Pune | Commercial Ice Maker Service | SkyCooling Pune",
    metaDescription:
      "Ice machine repair in Pune for restaurants, cafes, and commercial setups with issues like low ice production, leakage, and cooling faults.",
    excerpt:
      "Commercial ice maker repair for food-service businesses that need dependable daily output.",
    intro:
      "If your ice machine is not producing enough ice, leaking, or stopping unexpectedly, our Pune team can inspect the system and restore dependable operation.",
    h1: "Ice Machine Repair in Pune",
    heroTitle:
      "Keep commercial beverage and kitchen operations running with quick ice machine service",
    image: heroImg,
    imageAlt: "Ice machine repair service for a Pune business",
    icon: Snowflake,
    badge: "Hospitality Cooling Support",
    serviceType: "Ice Machine Repair Service",
    problems: [
      "Low or no ice production",
      "Machine leaking or draining poorly",
      "Cooling cycle not completing properly",
      "Sensor or control issues",
      "Unusual sound during ice making",
      "Need urgent support for cafes, bars, or restaurants",
    ],
    faqs: [
      {
        question: "Do you service commercial ice makers in Pune?",
        answer:
          "Yes. We support common ice machine issues for cafes, restaurants, and hospitality businesses.",
      },
      {
        question: "Can scaling or maintenance affect ice production?",
        answer:
          "Yes. Build-up, poor water flow, and neglected maintenance can reduce output and affect machine performance.",
      },
      {
        question: "Do you also handle chillers and water coolers?",
        answer:
          "Yes. Those services are available separately for commercial cooling clients.",
      },
    ],
    related: ["water-cooler-repair-pune", "chiller-repair-service-pune"],
    keywords: [
      "ice machine repair in Pune",
      "ice maker repair Pune",
      "commercial ice machine service Pune",
    ],
  }),
  createService({
    slug: "chiller-repair-service-pune",
    category: "commercial-cooling",
    title: "Chiller Repair Service",
    shortTitle: "Chiller Repair",
    seoTitle:
      "Chiller Repair Service in Pune | Commercial Chiller Technician | SkyCooling Pune",
    metaDescription:
      "Chiller repair service in Pune for industrial and commercial cooling systems with temperature instability, compressor faults, and control issues.",
    excerpt:
      "Commercial chiller support to reduce downtime and stabilize cooling performance.",
    intro:
      "Our chiller repair service in Pune supports businesses that rely on uninterrupted cooling. We inspect major system faults, control issues, and performance drops with a practical service-first approach.",
    h1: "Chiller Repair Service in Pune",
    heroTitle:
      "Commercial chiller support for stable performance and lower downtime",
    image: heroImg,
    imageAlt: "Chiller repair service in Pune",
    icon: Warehouse,
    badge: "Commercial Cooling Diagnostics",
    serviceType: "Chiller Repair Service",
    problems: [
      "Chiller not maintaining target temperature",
      "Compressor or pump-related performance issues",
      "Control panel alarms and repeated faults",
      "Cooling inefficiency increasing operating cost",
      "Unexpected shutdown affecting operations",
      "Need service support for office or industrial cooling systems",
    ],
    faqs: [
      {
        question: "Do you handle commercial chiller systems in Pune?",
        answer:
          "Yes. We support many commercial cooling applications, depending on site access and system condition.",
      },
      {
        question:
          "Can you inspect temperature instability and alarms together?",
        answer:
          "Yes. Those symptoms are often related, so we evaluate controls, cooling performance, and major system components together.",
      },
      {
        question: "Do you provide related cold storage services too?",
        answer:
          "Yes. Cold storage repair and cold room maintenance are also available.",
      },
    ],
    related: [
      "cold-storage-repair-pune",
      "cold-room-maintenance-pune",
      "water-cooler-repair-pune",
    ],
    keywords: [
      "chiller repair service in Pune",
      "commercial chiller repair Pune",
      "industrial cooling repair Pune",
    ],
  }),
];

export const SERVICE_MAP = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service]),
) as Record<string, ServiceItem>;

export const FEATURED_SERVICES = SERVICES.filter((service) => service.featured);
