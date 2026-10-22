import type { ProjectArtKind } from '@/components/visuals/ProjectArt';

export type Project = {
  title: string;
  client?: string;
  description: string;
  category: string;
  tag: string;
  tagColor: string;
  capabilities?: string[];
  highlights?: string[];
  featured?: boolean;
  art?: ProjectArtKind;
  isReal: boolean;
};

export const projects: Project[] = [
  {
    title: 'iGreen — Smart Building Management Platform',
    client: 'iGreen Systems & Technologies, Hyderabad',
    description:
      'End-to-end IoT platform enabling sustainable facility management across Water, Energy, Air, Light & Analytics. Covers 10+ monitoring and automation modules for smart buildings — from flow meters and AHU control to indoor air quality and preventive maintenance analytics.',
    category: 'IoT',
    tag: 'IoT',
    tagColor: '#1DBCD6',
    capabilities: ['Water', 'Energy', 'Air', 'Light', 'Analytics'],
    highlights: [
      '10+ IoT monitoring & automation modules',
      'Real-time web & mobile dashboards',
      'Intelligent alerts & anomaly detection',
    ],
    featured: true,
    art: 'building',
    isReal: true,
  },
  {
    title: 'iGreen — Restaurant Facility Automation',
    client: 'iGreen Systems & Technologies (Americas)',
    description:
      'AI-driven IoT platform for Quick Service and Full Service Restaurants — automating facility operations across utilities, kitchen equipment, HVAC and maintenance workflows. Delivers real-time electricity, water and gas monitoring with measurable cost savings.',
    category: 'IoT',
    tag: 'IoT',
    tagColor: '#1DBCD6',
    capabilities: ['Utilities', 'HVAC', 'Kitchen', 'Workflow', 'Analytics'],
    highlights: [
      'Save up to 20% on energy, water & gas costs',
      'Hot & cold equipment monitoring with IoT sensors',
      'Condition-based HVAC automation & indoor air quality',
      'Full workflow digitization: PPM, inventory & vendor mgmt',
    ],
    art: 'restaurant',
    isReal: true,
  },
  {
    title: 'iGreen — Hotel & Enterprise Facility Management',
    client: 'iGreen Systems & Technologies (Hospitality Enterprises)',
    description:
      'End-to-end IoT and facility management platform for hotel enterprises — covering Room, Property and Portfolio levels. Integrates 100+ sensor types with building automation, predictive maintenance, and portfolio-wide KPI dashboards for engineering and C-suite teams.',
    category: 'IoT',
    tag: 'IoT',
    tagColor: '#1DBCD6',
    capabilities: ['Water', 'Energy', 'HVAC', 'Rooms', 'Portfolio'],
    highlights: [
      'Save up to 30% on utility costs across the property',
      '100+ IoT sensor types: water, energy, HVAC & occupancy',
      'Room-to-portfolio visibility with 3-level management hierarchy',
      '52-week PPM, predictive maintenance & ESG reporting',
    ],
    art: 'hotel',
    isReal: true,
  },
  {
    title: 'iGreen — Intelligent Facility Operations Platform',
    client: 'iGreen Systems & Technologies',
    description:
      'A Digital Twin platform that digitizes your entire property portfolio in two steps. Unifies asset tagging, helpdesk ticketing, document management, planned preventive maintenance and manpower management — giving every stakeholder a single pane of glass.',
    category: 'Digital Transformation',
    tag: 'Digital Transformation',
    tagColor: '#5CB85C',
    capabilities: ['Digital Twin', 'Asset Mgmt', 'Helpdesk', 'PPM', 'Manpower'],
    highlights: [
      'Digital Twin setup in 2 steps — Masters + Configuration',
      'Asset lifecycle management with unique QR-code tagging',
      'Integrated helpdesk, document vault & PPM scheduling',
      'Single Pane of Glass: portfolio-wide visibility & standardization',
    ],
    art: 'twin',
    isReal: true,
  },
  {
    title: 'iGreen - Fire Pump, IoT Safety Monitoring System',
    client: 'iGreen Systems & Technologies, Hyderabad',
    description:
      'IoT-based fire pump monitoring system that makes fire safety measurable and crisis-ready. Real-time dashboards track switch positions, line pressure, motor running hours, fire sump water levels and diesel fuel — with instant anomaly alerts before a crisis strikes.',
    category: 'IoT',
    tag: 'IoT',
    tagColor: '#1DBCD6',
    capabilities: ['Pressure', 'Water Level', 'Diesel', 'Alerts', 'Safety'],
    highlights: [
      '6-sensor system: switch status, pressure, motor hours & water level',
      'Real-time diesel pump monitoring: fuel level & battery voltage',
      'Instant alerts for pressure drops & unexpected running hours',
    ],
    art: 'firepump',
    isReal: true,
  },
  {
    title: 'iGreen CSMS — Cold Storage & Freezer Monitoring System',
    client: 'iGreen Systems & Technologies',
    description:
      'Cloud-based IoT monitoring system for cold storages, island freezers and cold rooms — covering temperature, humidity, door activity, compressor health and energy consumption. Serves pharma, food retail and industrial cold storage operators from a single central platform.',
    category: 'IoT',
    tag: 'IoT',
    tagColor: '#1DBCD6',
    capabilities: ['Temperature', 'Humidity', 'Energy', 'Compressor', 'Alerts'],
    highlights: [
      'Save up to 40% on energy consumption',
      'Monitor cold rooms down to -120°C (pharma & vaccine grade)',
      'Door open count & duration with buzzer alerts on breach',
      'Central monitoring: compressors, heat pumps & ODU performance',
    ],
    art: 'cold',
    isReal: true,
  },
  {
    title: 'VWI — Seamless Visa Processing Platform',
    client: 'VWI Travel Pvt Ltd (Visa World India)',
    description:
      'End-to-end digital transformation of visa application processing for one of India\'s leading visa facilitation agencies. Applicants select their destination country, visa type and profile — the system instantly generates a personalised document checklist and auto-verifies each upload, slashing manual admin effort.',
    category: 'Digital Transformation',
    tag: 'Digital Transformation',
    tagColor: '#5CB85C',
    capabilities: ['188 Countries', 'Smart Checklists', 'Auto Verification', 'Web App', 'Live'],
    highlights: [
      'Covers all 188 countries & all major visa types (Tourist, Business, Transit)',
      'Dynamic doc checklist driven by country + visa type + applicant profile',
      'Automated document verification — 80% reduction in admin review effort',
      'Thousands of applications processed — live in production',
    ],
    art: 'visa',
    isReal: true,
  },
  {
    title: 'MubarakRishte — AI-Powered Matrimonial Matching Platform',
    client: 'MubarakRishte.com, Hyderabad',
    description:
      'Transformed a manual, Excel-macro-driven matchmaking operation into an AI-powered digital platform. Intelligent profile analysis understands each bride or groom\'s expectations and surfaces ranked matches instantly — turning hours of counsellor search time into a single click. Delivered as web, Android and iOS apps with WhatsApp and payment gateway integrations.',
    category: 'Digital Transformation',
    tag: 'Digital Transformation',
    tagColor: '#5CB85C',
    capabilities: ['AI Matching', 'Android & iOS', 'WhatsApp', 'Payments', 'Live'],
    highlights: [
      '6× throughput gain: 1,500 profiles in 2 hours vs. 1,000 profiles per day',
      'Single-click match generation — replaced hours of manual Excel searches',
      'Intelligent analysis of groom/bride expectations for precise matching',
      'WhatsApp integration, payment gateway & native Android/iOS apps',
    ],
    art: 'matching',
    isReal: true,
  },
  {
    title: 'Liquidynamics OilCop — Tank Monitoring Web Portal',
    client: 'Liquidynamics, USA',
    description:
      'Built the web portal and software layer on top of Liquidynamics\' OilCop wireless tank monitoring hardware. Gives customers, facility managers and fluid suppliers secure remote access to live tank inventory across multiple locations — with alarms, delivery reports and discrepancy tracking at zero recurring cost.',
    category: 'IoT',
    tag: 'IoT',
    tagColor: '#1DBCD6',
    capabilities: ['Tank Monitoring', 'Multi-Location', 'Supplier Portal', 'Alerts', 'Live'],
    highlights: [
      '200+ locations monitored remotely via secure web portal',
      'Supplier portal: fluid vendors access customer tank inventory directly',
      'Equipment Sentry + Discrepancy Tracking System (DTS) for anomaly management',
      'User-defined high/low alarms, reorder alerts & automated delivery reports',
    ],
    art: 'tank',
    isReal: true,
  },
];
