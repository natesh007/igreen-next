export type Industry = {
  slug: string;
  title: string; // card + page label
  sub: string; // card sub-line
  h1: string;
  intro: string;
  photo: string; // 4:3 card image
  hero: string; // wide page image
  alt: string;
  dot: string;
  solves: string[];
  /** exact project titles from src/data/projects.ts */
  projects: string[];
  /** service page slugs */
  services: string[];
  seoTitle: string;
  seoDescription: string;
};

const CYAN = 'var(--v-cyan)';
const GREEN = 'var(--v-green)';

export const industries: Industry[] = [
  {
    slug: 'smart-buildings',
    title: 'Smart buildings',
    sub: 'Water, energy, air, light',
    h1: 'Smart building management, on one platform',
    intro:
      'An end-to-end IoT platform for sustainable facility management across water, energy, air, light and analytics — from flow meters and AHU control to indoor air quality and preventive maintenance analytics.',
    photo: '/images/industries/smart-buildings.webp',
    hero: '/images/industries/smart-buildings-wide.webp',
    alt: 'Aerial view of a campus with connected buildings',
    dot: CYAN,
    solves: [
      'Water, energy, air and light monitored on one platform',
      'Maintenance planned and tracked instead of reacting to breakdowns',
      'Assets, tickets and documents in a single pane of glass',
    ],
    projects: ['iGreen — Smart Building Management Platform', 'iGreen — Intelligent Facility Operations Platform'],
    services: ['iot-solutions', 'connected-devices', 'digital-transformation'],
    seoTitle: 'Smart Building Management & IoT',
    seoDescription:
      'Smart building management in Hyderabad, India: water, energy, air quality, asset lifecycle and preventive maintenance on one IoT platform from iGreen Systems.',
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    sub: 'Rooms to portfolio',
    h1: 'IoT and facility management for hotels',
    intro:
      'An IoT and facility management platform for hotel enterprises, covering room, property and portfolio levels. It integrates 100+ sensor types with building automation, predictive maintenance and portfolio-wide KPI dashboards for engineering and leadership teams.',
    photo: '/images/industries/hospitality.webp',
    hero: '/images/industries/hospitality-wide.webp',
    alt: 'Hotel room with connected-device icons for climate, lighting, security and Wi-Fi',
    dot: CYAN,
    solves: [
      'Utility costs visible from room to portfolio',
      'Maintenance scheduled across 52 weeks, with predictive alerts',
      'KPI dashboards for engineering and leadership teams',
    ],
    projects: ['iGreen — Hotel & Enterprise Facility Management'],
    services: ['iot-solutions', 'connected-devices', 'cloud-solutions'],
    seoTitle: 'Hotel & Hospitality IoT',
    seoDescription:
      'Hotel facility management IoT from room to portfolio: utilities, HVAC, predictive maintenance and KPI dashboards. Built in Hyderabad, India by iGreen Systems.',
  },
  {
    slug: 'cold-chain',
    title: 'Cold chain & pharma',
    sub: 'Freezers and cold rooms',
    h1: 'Cold storage and freezer monitoring',
    intro:
      'A cloud-based IoT monitoring system for cold storages, island freezers and cold rooms — covering temperature, humidity, door activity, compressor health and energy consumption. It serves pharma, food retail and industrial cold storage operators from a single central platform.',
    photo: '/images/industries/cold-chain.webp',
    hero: '/images/industries/cold-chain-wide.webp',
    alt: 'Cold room with a wireless temperature sensor beside the door',
    dot: CYAN,
    solves: [
      'Temperature, humidity and energy tracked from one central platform',
      'Rooms monitored down to −120 °C, to pharma and vaccine grade',
      'Door, compressor and heat-pump problems flagged with alerts',
    ],
    projects: ['iGreen CSMS — Cold Storage & Freezer Monitoring System'],
    services: ['iot-solutions', 'connected-devices', 'edge-computing'],
    seoTitle: 'Cold Chain & Pharma Monitoring',
    seoDescription:
      'Cold storage and freezer monitoring for pharma, food retail and industrial operators: temperature, humidity, door and compressor monitoring. iGreen Systems, India.',
  },
  {
    slug: 'fire-safety',
    title: 'Fire & life safety',
    sub: 'Pump and pressure monitoring',
    h1: 'Fire pump and life-safety monitoring',
    intro:
      'An IoT-based fire pump monitoring system that makes fire safety measurable and crisis-ready. Real-time dashboards track switch positions, line pressure, motor running hours, fire sump water levels and diesel fuel, with instant anomaly alerts.',
    photo: '/images/industries/fire-safety.webp',
    hero: '/images/industries/fire-safety-wide.webp',
    alt: 'Fire pump room with a control panel and monitoring unit',
    dot: CYAN,
    solves: [
      'Switch positions, line pressure and running hours visible live',
      'Sump water level and diesel fuel monitored',
      'Alerts for pressure drops and unexpected running hours',
    ],
    projects: ['iGreen - Fire Pump, IoT Safety Monitoring System'],
    services: ['iot-solutions', 'connected-devices', 'mobile-apps'],
    seoTitle: 'Fire Pump & Life Safety Monitoring',
    seoDescription:
      'IoT fire pump monitoring: pressure, running hours, sump water level and diesel fuel with instant alerts. iGreen Systems, Hyderabad, India.',
  },
  {
    slug: 'restaurants',
    title: 'Restaurants',
    sub: 'QSR and full service',
    h1: 'Facility automation for restaurants',
    intro:
      'An AI-driven IoT platform for quick-service and full-service restaurants — automating facility operations across utilities, kitchen equipment, HVAC and maintenance workflows, with real-time electricity, water and gas monitoring.',
    photo: '/images/industries/restaurants.webp',
    hero: '/images/industries/restaurants-wide.webp',
    alt: 'Restaurant kitchen with monitoring sensors on the gas line',
    dot: CYAN,
    solves: [
      'Electricity, water and gas consumption monitored in real time',
      'Hot and cold equipment watched with IoT sensors',
      'Maintenance, inventory and vendor workflows digitised',
    ],
    projects: ['iGreen — Restaurant Facility Automation'],
    services: ['iot-solutions', 'connected-devices', 'mobile-apps'],
    seoTitle: 'Restaurant Facility Automation',
    seoDescription:
      'AI-driven IoT for quick-service and full-service restaurants: utilities, kitchen equipment, HVAC and maintenance workflows. iGreen Systems.',
  },
  {
    slug: 'fuel-tank-monitoring',
    title: 'Fuel & tank monitoring',
    sub: 'Remote inventory',
    h1: 'Remote fuel and tank monitoring',
    intro:
      "We built the web portal and software layer on top of Liquidynamics' OilCop wireless tank monitoring hardware. Customers, facility managers and fluid suppliers get secure remote access to live tank inventory across multiple locations, with alarms, delivery reports and discrepancy tracking.",
    photo: '/images/industries/fuel-tank-monitoring.webp',
    hero: '/images/industries/fuel-tank-monitoring-wide.webp',
    alt: 'Fuel station with a wireless monitoring unit on the dispenser',
    dot: CYAN,
    solves: [
      'Tank inventory visible remotely across locations',
      'Suppliers see customer inventory directly through a secure portal',
      'Alarms, reorder alerts and delivery reports automated',
    ],
    projects: ['Liquidynamics OilCop — Tank Monitoring Web Portal'],
    services: ['iot-solutions', 'web-applications', 'cloud-solutions'],
    seoTitle: 'Fuel & Tank Monitoring',
    seoDescription:
      'Remote tank monitoring and supplier portals: live inventory, alarms, reorder alerts and delivery reports across 200+ locations. iGreen Systems.',
  },
  {
    slug: 'travel-visa',
    title: 'Travel & visa services',
    sub: 'Digital transformation',
    h1: 'Digital transformation for visa services',
    intro:
      "End-to-end digital transformation of visa application processing for one of India's leading visa facilitation agencies. Applicants choose destination, visa type and profile, and the system generates a personalised document checklist and auto-verifies each upload.",
    photo: '/images/industries/travel-visa.webp',
    hero: '/images/industries/travel-visa-wide.webp',
    alt: 'Illustration of a passport scan being verified by AI',
    dot: GREEN,
    solves: [
      'A personalised document checklist for every applicant',
      'Each upload verified automatically',
      'Applicants can track their applications in real time',
    ],
    projects: ['VWI — Seamless Visa Processing Platform'],
    services: ['digital-transformation', 'web-applications', 'cloud-solutions'],
    seoTitle: 'Travel & Visa Services Software',
    seoDescription:
      'Digital transformation for visa processing: smart document checklists and automatic verification across 188 countries. iGreen Systems, Hyderabad.',
  },
  {
    slug: 'consumer-platforms',
    title: 'Consumer platforms',
    sub: 'Web and mobile apps',
    h1: 'Consumer web and mobile platforms',
    intro:
      'We transformed a manual, Excel-macro-driven matchmaking operation into an AI-powered digital platform. Intelligent profile analysis surfaces ranked matches instantly, delivered as web, Android and iOS apps with WhatsApp and payment gateway integrations.',
    photo: '/images/industries/consumer-platforms.webp',
    hero: '/images/industries/consumer-platforms-wide.webp',
    alt: 'The iGreen engineering team at work',
    dot: GREEN,
    solves: [
      'Matches ranked instantly from profile analysis',
      'Web, Android and iOS apps with WhatsApp and payment integrations',
      'Manual Excel-based work replaced by an AI-powered platform',
    ],
    projects: ['MubarakRishte — AI-Powered Matrimonial Matching Platform'],
    services: ['web-applications', 'mobile-apps', 'cloud-solutions'],
    seoTitle: 'Consumer Web & Mobile Platforms',
    seoDescription:
      'AI-powered consumer platforms with web, Android and iOS apps, WhatsApp and payment integrations. Built by iGreen Systems, Hyderabad, India.',
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
