import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'iGreen Systems project portfolio — IoT platforms, smart building management, digital transformation, visa processing, and web & mobile applications delivered for clients in Hyderabad, India, and the USA.',
};

type Project = {
  title: string;
  client?: string;
  description: string;
  category: string;
  tag: string;
  tagColor: string;
  capabilities?: string[];
  highlights?: string[];
  featured?: boolean;
  isReal: boolean;
};

const projects: Project[] = [
  {
    title: 'WIS — Smart Building Management Platform',
    client: 'Wenalytics IoT Solutions, Hyderabad',
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
      'ISO 9001:2015 · IGBC certified product',
    ],
    featured: true,
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
    isReal: true,
  },
  {
    title: 'WIS — Hotel & Enterprise Facility Management',
    client: 'Wenalytics IoT Solutions (Hospitality Enterprises)',
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
    isReal: true,
  },
  {
    title: 'WIS — Intelligent Facility Operations Platform',
    client: 'Wenalytics IoT Solutions',
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
    isReal: true,
  },
  {
    title: 'WIS - Fire Pump, IoT Safety Monitoring System',
    client: 'Wenalytics IoT Solutions, Hyderabad',
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
      'ISO 9001:2015 certified hardware, Make in India',
    ],
    isReal: true,
  },
  {
    title: 'WIS CSMS — Cold Storage & Freezer Monitoring System',
    client: 'Wenalytics IoT Solutions',
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
    isReal: true,
  },
  {
    title: 'WIS — Restaurant Facility Automation',
    client: 'Wenalytics IoT Solutions (Americas)',
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
    isReal: true,
  },
];

const categories = ['All', 'IoT', 'Digital Transformation', 'Web & Mobile', 'Cloud'];

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="#1DBCD620" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#1DBCD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RealCard({ p }: { p: Project }) {
  return (
    <div
      className="group rounded-2xl border overflow-hidden transition-all hover:-translate-y-1 flex flex-col"
      style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ backgroundColor: p.tagColor }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Header row: tag + featured badge */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: `${p.tagColor}20`, color: p.tagColor }}
          >
            {p.tag}
          </span>
          {p.featured && (
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: '#1DBCD615', color: '#1DBCD6', border: '1px solid #1DBCD640' }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold text-white mb-1 leading-snug"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {p.title}
        </h3>

        {/* Client */}
        {p.client && (
          <p className="text-xs text-gray-500 mb-3">{p.client}</p>
        )}

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{p.description}</p>

        {/* Capability pills */}
        {p.capabilities && p.capabilities.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.capabilities.map((cap) => (
              <span
                key={cap}
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: `${p.tagColor}15`, color: p.tagColor, border: `1px solid ${p.tagColor}30` }}
              >
                {cap}
              </span>
            ))}
          </div>
        )}

        {/* Highlights */}
        {p.highlights && p.highlights.length > 0 && (
          <ul className="mt-auto space-y-1.5">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-gray-400">
                <CheckIcon />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function PlaceholderCard({ p }: { p: Project }) {
  return (
    <div
      className="group rounded-2xl border overflow-hidden transition-all hover:-translate-y-1"
      style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
    >
      <div
        className="h-48 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)' }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: `${p.tagColor}20` }}
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={p.tagColor} strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: `${p.tagColor}20`, color: p.tagColor }}
        >
          {p.tag}
        </span>
        <h3
          className="text-lg font-semibold text-white mt-3 mb-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {p.title}
        </h3>
        <p className="text-sm text-gray-500">Case study coming soon.</p>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const sorted = [...projects].sort((a, b) => {
    if (a.isReal !== b.isReal) return a.isReal ? -1 : 1;
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return 0;
  });

  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      {/* Header */}
      <section
        className="py-24 text-center relative overflow-hidden"
        style={{ backgroundColor: '#060A12' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #1DBCD610 0%, transparent 70%)' }}
        />
        <div className="max-w-3xl mx-auto px-4 relative">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#1DBCD6' }}>
              Our Work
            </p>
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Projects That Define Us
            </h1>
            <p className="text-gray-400 text-lg">
              From IoT deployments to full digital transformations — here&apos;s a selection of the
              work we&apos;re proud of.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-6 border-b" style={{ borderColor: '#1F2937', backgroundColor: '#060A12' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button
                key={c}
                className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors"
                style={
                  i === 0
                    ? { backgroundColor: '#1DBCD6', borderColor: '#1DBCD6', color: '#fff' }
                    : { backgroundColor: 'transparent', borderColor: '#374151', color: '#9CA3AF' }
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                {p.isReal ? <RealCard p={p} /> : <PlaceholderCard p={p} />}
              </Reveal>
            ))}
          </div>

          {/* Banner */}
          <div
            className="mt-14 rounded-2xl p-10 text-center border"
            style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
          >
            <p className="text-white font-semibold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              More Case Studies in Preparation
            </p>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              More detailed case studies are in preparation — reach out and we&apos;ll walk you through our work directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
