export const iotServices = [
  { href: '/services/iot-solutions', title: 'IoT Solutions', desc: '10+ modules — water, energy, air quality, safety — connected and monitored in real time across smart buildings.' },
  { href: '/services/connected-devices', title: 'Connected Devices', desc: 'From sensor hardware to firmware to cloud — deployed in buildings, restaurants and industrial plants across India and the US.' },
  { href: '/services/smart-manufacturing', title: 'Smart Manufacturing', desc: 'Real-time production monitoring and predictive maintenance to minimise unplanned downtime.' },
  { href: '/services/edge-computing', title: 'Edge Computing', desc: 'Process data at source — low-latency architectures with offline capability.' },
  { href: '/services/digital-transformation', title: 'Digital Transformation', desc: 'We turned a paper-based visa workflow into a platform processing thousands of applications.' },
];

export const deliveryServices = [
  { href: '/services/web-applications', title: 'Web Applications', desc: 'Production-grade platforms built to measurable outcomes.' },
  { href: '/services/mobile-apps', title: 'Mobile Apps', desc: 'Native Android and iOS apps — from IoT dashboards to consumer-scale platforms.' },
  { href: '/services/cloud-solutions', title: 'Cloud Solutions', desc: 'AWS, Azure and GCP infrastructure backing live IoT platforms and applications.' },
];

export const stats = [
  { n: 18, suffix: '+', label: 'Years in business', fill: '72%' },
  { n: 521, suffix: '+', label: 'Projects delivered', fill: '88%' },
  { n: 232, suffix: '+', label: 'Clients served', fill: '64%' },
  { n: 25, suffix: '', label: 'Engineers & designers', fill: '40%' },
];

// Approved client testimonials (same wording as the live site).
export const quotes = [
  {
    text: "iGreen built the core IoT infrastructure that powers the Oilcop platform. What impressed us most was their ability to handle the complexity — 10+ monitoring modules, hardware integration, and a real-time dashboard — delivered on schedule. They don't just write code; they understand the engineering problem.",
    name: 'Mark',
    role: 'Manager, Liquidynamics Inc, USA',
  },
  {
    text: 'Before iGreen, our visa processing was largely manual and error-prone. They completely transformed our workflow — 80% faster application processing, no paperwork bottlenecks, and clients can now track their applications in real time.',
    name: 'Ghanshyam Power',
    role: 'Director, VWI Travel Pvt Ltd (Visa World India)',
  },
  {
    text: 'iGreen delivered all of it — on time, with the polish our users expect. The AI features alone have transformed how families connect on our platform.',
    name: 'Mohd Maqdoom Shahnawaz',
    role: 'Founder, MubarakRishte.com',
  },
];

// Add { src, alt, width, height } here once a client has given permission to show their logo.
export const clientLogos: { src: string; alt: string; width: number; height: number }[] = [];

export const flips = [
  {
    key: 'cold',
    title: 'Cold storage & freezer monitoring',
    photo: '/images/home/photo-cold.webp',
    ink: '/images/home/ink-cold.webp',
    pre: 'Up to',
    big: '40%',
    label: 'lower energy consumption',
    chip: 'var(--v-cyan)',
    points: [
      'Rooms monitored down to −120 °C (pharma & vaccine grade)',
      'Door-open count and duration, with buzzer alerts',
      'Compressors, heat pumps and ODU performance in one place',
    ],
    viz: 'bars',
  },
  {
    key: 'pump',
    title: 'Fire pump safety monitoring',
    photo: '/images/home/photo-pump.webp',
    ink: '/images/home/ink-pump.webp',
    pre: '',
    big: '6',
    label: 'sensors watching pressure, pumps and levels',
    chip: 'var(--v-green)',
    points: [
      'Switch status, pressure, motor hours and water level',
      'Diesel pump fuel level and battery voltage, live',
      'Instant alerts for pressure drops and unexpected running hours',
    ],
    viz: 'dots',
  },
  {
    key: 'tank',
    title: 'OilCop tank monitoring portal',
    photo: '/images/home/photo-tank.webp',
    ink: '/images/home/ink-tank.webp',
    pre: '',
    big: '200+',
    label: 'locations monitored remotely',
    chip: 'var(--v-cyan)',
    points: [
      'Supplier portal: vendors see customer tank inventory directly',
      'High/low alarms, reorder alerts and automated delivery reports',
      'Discrepancy tracking for anomaly management',
    ],
    viz: 'grid',
  },
];

export const industries = [
  { title: 'Smart buildings', sub: 'Water, energy, air, light', dot: 'var(--v-cyan)' },
  { title: 'Hospitality', sub: 'Rooms to portfolio', dot: 'var(--v-cyan)' },
  { title: 'Cold chain & pharma', sub: 'Freezers and cold rooms', dot: 'var(--v-cyan)' },
  { title: 'Fire & life safety', sub: 'Pump and pressure monitoring', dot: 'var(--v-cyan)' },
  { title: 'Restaurants', sub: 'QSR and full service', dot: 'var(--v-cyan)' },
  { title: 'Fuel & tank monitoring', sub: 'Remote inventory', dot: 'var(--v-cyan)' },
  { title: 'Travel & visa services', sub: 'Digital transformation', dot: 'var(--v-green)' },
  { title: 'Consumer platforms', sub: 'Web and mobile apps', dot: 'var(--v-green)' },
];

export const why = [
  { title: 'End-to-end capability', text: 'From hardware integration and IoT sensor networks to software platforms and cloud dashboards — we handle the full stack.' },
  { title: 'Real-world deployment experience', text: 'Proven solutions deployed across smart buildings, cold storage, fire safety, hospitality and visa processing.' },
  { title: 'Integration-first approach', text: 'We design systems to work alongside your existing infrastructure, not replace it.' },
  { title: 'Outcome-driven execution', text: 'We measure success by operational impact — not lines of code or feature count.' },
  { title: 'Ongoing support', text: 'Maintenance, performance optimisation and feature evolution after go-live.' },
];

export const tickerWords = ['IoT Solutions', 'Connected Devices', 'Smart Manufacturing', 'Edge Computing', 'Digital Transformation', 'Web Apps', 'Mobile Apps', 'Cloud'];
