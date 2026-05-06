import React from 'react';
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  renderToBuffer,
} from '@react-pdf/renderer';

// ─── Brand colours ────────────────────────────────────────────────────────────
const CYAN   = '#1DBCD6';
const GREEN  = '#5CB85C';
const DARK   = '#1F2937';
const BODY   = '#374151';
const MUTED  = '#9CA3AF';
const BORDER = '#E5E7EB';
const LIGHT  = '#F8FAFC';
const WHITE  = '#FFFFFF';

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  // Pages
  page: {
    backgroundColor: WHITE,
    fontFamily: 'Helvetica',
  },
  coverPage: {
    backgroundColor: WHITE,
    fontFamily: 'Helvetica',
    flexDirection: 'column',
  },

  // Left accent bar (non-cover pages)
  accentBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: CYAN,
  },

  // Content area
  content: {
    marginLeft: 5,
    paddingHorizontal: 40,
    paddingTop: 44,
    paddingBottom: 52,
    flex: 1,
  },

  // Footer (fixed at bottom of each non-cover page)
  footer: {
    position: 'absolute',
    bottom: 18,
    left: 45,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: BORDER,
    paddingTop: 7,
  },
  footerText: { fontSize: 7.5, color: MUTED, fontFamily: 'Helvetica' },

  // Section header pattern
  sectionLabel: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: CYAN,
    letterSpacing: 2,
    marginBottom: 5,
  },
  sectionBar: {
    width: 36,
    height: 2,
    backgroundColor: CYAN,
    marginBottom: 14,
  },

  // Typography
  h1: {
    fontSize: 26,
    fontFamily: 'Helvetica-Bold',
    color: DARK,
    lineHeight: 1.2,
    marginBottom: 14,
  },
  h2: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: DARK,
    lineHeight: 1.25,
    marginBottom: 10,
  },
  h3: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: DARK,
    marginBottom: 3,
  },
  h4: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: DARK,
    marginBottom: 2,
  },
  body: {
    fontSize: 9.5,
    color: BODY,
    lineHeight: 1.65,
    marginBottom: 8,
  },
  small: { fontSize: 8.5, color: MUTED, lineHeight: 1.5 },

  // Stat cards
  statsRow: { flexDirection: 'row', gap: 10, marginTop: 18 },
  statCard: {
    flex: 1,
    backgroundColor: LIGHT,
    borderRadius: 6,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BORDER,
  },
  statValue: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 2,
  },
  statLabel: { fontSize: 7.5, color: MUTED, textAlign: 'center' },

  // Service items
  serviceGroup: { marginBottom: 18 },
  serviceGroupLabel: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.5,
    marginBottom: 8,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  serviceRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  servicePill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    borderWidth: 1,
  },
  servicePillText: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
  },

  // Approach steps
  stepsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 4 },
  stepCard: {
    width: '18%',
    backgroundColor: LIGHT,
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BORDER,
  },
  stepNum: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: CYAN,
    marginBottom: 4,
  },
  stepName: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: DARK,
    textAlign: 'center',
    marginBottom: 3,
  },
  stepDesc: { fontSize: 7, color: MUTED, textAlign: 'center', lineHeight: 1.4 },

  // Portfolio cards
  projectGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  projectCard: {
    width: '47%',
    backgroundColor: LIGHT,
    borderRadius: 6,
    padding: 12,
    borderWidth: 1,
    borderColor: BORDER,
    marginBottom: 4,
  },
  projectTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginBottom: 7,
  },
  projectTagText: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.5,
  },
  projectTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: DARK,
    marginBottom: 3,
    lineHeight: 1.35,
  },
  projectClient: { fontSize: 7.5, color: MUTED, marginBottom: 5 },
  projectDesc: { fontSize: 7.5, color: BODY, lineHeight: 1.45 },

  // Contact cards
  contactGrid: { flexDirection: 'row', gap: 14, marginTop: 10 },
  contactCard: {
    flex: 1,
    backgroundColor: LIGHT,
    borderRadius: 6,
    padding: 14,
    borderWidth: 1,
    borderColor: BORDER,
  },
  contactLabel: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: CYAN,
    letterSpacing: 1,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  contactLine: { fontSize: 8.5, color: BODY, lineHeight: 1.6 },

  // Inline highlight
  highlight: { color: CYAN },
  highlightGreen: { color: GREEN },

  // Divider
  hrFull: { height: 1, backgroundColor: BORDER, marginVertical: 16 },
  hrCyan: { height: 1.5, backgroundColor: CYAN, marginVertical: 14, width: 48 },
});

// ─── Reusable fragments ───────────────────────────────────────────────────────
function PageFooter({ label }: { label: string }) {
  return (
    <View style={s.footer}>
      <Text style={s.footerText}>iGreen Systems &amp; Technologies</Text>
      <Text style={s.footerText}>{label}</Text>
      <Text style={s.footerText}>igreensystems.com</Text>
    </View>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <View style={{ marginBottom: 18 }}>
      <Text style={s.sectionLabel}>{label}</Text>
      <View style={s.sectionBar} />
      <Text style={s.h2}>{title}</Text>
    </View>
  );
}

// ─── Page 1 — Cover ───────────────────────────────────────────────────────────
function CoverPage() {
  return (
    <Page size="A4" style={s.coverPage}>
      {/* Cyan header band */}
      <View
        style={{
          backgroundColor: CYAN,
          paddingHorizontal: 44,
          paddingVertical: 36,
        }}
      >
        <Text
          style={{
            fontSize: 9,
            fontFamily: 'Helvetica-Bold',
            color: WHITE,
            letterSpacing: 3,
            marginBottom: 6,
          }}
        >
          COMPANY PROFILE
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontFamily: 'Helvetica-Bold',
            color: WHITE,
            lineHeight: 1.15,
          }}
        >
          iGreen Systems
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.85)',
            marginTop: 6,
          }}
        >
          &amp; Technologies
        </Text>
      </View>

      {/* Green accent bar below header */}
      <View style={{ height: 5, backgroundColor: GREEN }} />

      {/* Main content */}
      <View style={{ paddingHorizontal: 44, paddingTop: 36, flex: 1 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Helvetica-Bold',
            color: DARK,
            lineHeight: 1.4,
            marginBottom: 14,
            maxWidth: 420,
          }}
        >
          Engineering Intelligent Systems{'\n'}
          for a Connected World
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: BODY,
            lineHeight: 1.65,
            maxWidth: 440,
            marginBottom: 28,
          }}
        >
          We design and deliver IoT-driven solutions that connect infrastructure, assets,
          and operations — enabling real-time visibility, automation, and smarter
          decision-making.
        </Text>

        {/* Stats */}
        <View style={s.statsRow}>
          {[
            { value: '18+', label: 'Years Experience', color: CYAN },
            { value: '25', label: 'Team Members', color: GREEN },
            { value: '232+', label: 'Clients', color: CYAN },
            { value: '521+', label: 'Projects Delivered', color: GREEN },
          ].map((stat) => (
            <View key={stat.label} style={s.statCard}>
              <Text style={[s.statValue, { color: stat.color }]}>{stat.value}</Text>
              <Text style={s.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Divider */}
        <View style={[s.hrFull, { marginTop: 28, marginBottom: 18 }]} />

        {/* Service areas */}
        <Text
          style={{
            fontSize: 8,
            fontFamily: 'Helvetica-Bold',
            color: MUTED,
            letterSpacing: 1.5,
            marginBottom: 10,
          }}
        >
          CORE CAPABILITIES
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 7 }}>
          {[
            'Smart Building Automation',
            'Asset Lifecycle Management',
            'Connected Field Operations',
            'System Integrations',
            'Predictive Maintenance',
            'Web Applications',
            'Mobile Apps',
            'Cloud Solutions',
          ].map((cap) => (
            <View
              key={cap}
              style={{
                paddingHorizontal: 9,
                paddingVertical: 4,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: BORDER,
                backgroundColor: LIGHT,
              }}
            >
              <Text style={{ fontSize: 8, color: BODY }}>{cap}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Cover footer */}
      <View
        style={{
          backgroundColor: DARK,
          paddingHorizontal: 44,
          paddingVertical: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.6)' }}>
          Hyderabad · Kakinada · India
        </Text>
        <Text
          style={{ fontSize: 9, fontFamily: 'Helvetica-Bold', color: CYAN }}
        >
          igreensystems.com
        </Text>
        <Text style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.6)' }}>
          Since 2008
        </Text>
      </View>
    </Page>
  );
}

// ─── Page 2 — Who We Are ─────────────────────────────────────────────────────
function AboutPage() {
  return (
    <Page size="A4" style={s.page}>
      <View style={s.accentBar} />
      <View style={s.content}>
        <SectionHeader label="WHO WE ARE" title="From Software to Intelligent Infrastructure" />

        <Text style={s.body}>
          Founded in 2008, iGreen Systems &amp; Technologies began as a software engineering company
          focused on solving business problems through technology. As we worked closely with
          organisations, we recognised a larger challenge — many critical operations still depended on
          disconnected systems, manual processes, and limited visibility.
        </Text>
        <Text style={s.body}>
          This led to our evolution. Today, we specialise in building intelligent, connected systems
          that bring together sensors, software, and real-time data to transform how physical
          infrastructure is monitored, managed, and optimised.
        </Text>

        <View style={s.hrCyan} />

        <Text
          style={{
            fontSize: 8,
            fontFamily: 'Helvetica-Bold',
            color: MUTED,
            letterSpacing: 1.5,
            marginBottom: 6,
          }}
        >
          OUR FOUNDER&#39;S INSIGHT
        </Text>
        <View
          style={{
            borderLeftWidth: 3,
            borderLeftColor: CYAN,
            paddingLeft: 14,
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: 11,
              fontFamily: 'Helvetica-BoldOblique',
              color: CYAN,
              lineHeight: 1.5,
            }}
          >
            &#8220;What if these systems could think, respond, and optimise themselves?&#8221;
          </Text>
          <Text style={[s.small, { marginTop: 5 }]}>
            This question drove our expansion from traditional software development into building
            integrated systems that connect physical environments with digital intelligence.
          </Text>
        </View>

        <View style={s.hrFull} />

        {/* Stats */}
        <Text
          style={{
            fontSize: 8,
            fontFamily: 'Helvetica-Bold',
            color: MUTED,
            letterSpacing: 1.5,
            marginBottom: 10,
          }}
        >
          BY THE NUMBERS
        </Text>
        <View style={s.statsRow}>
          {[
            { value: '18+', label: 'Years Experience', color: CYAN },
            { value: '25', label: 'Team Members', color: GREEN },
            { value: '232+', label: 'Clients', color: CYAN },
            { value: '521+', label: 'Projects Delivered', color: GREEN },
          ].map((stat) => (
            <View key={stat.label} style={s.statCard}>
              <Text style={[s.statValue, { color: stat.color }]}>{stat.value}</Text>
              <Text style={s.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Our Vision highlight */}
        <View style={[s.hrFull, { marginTop: 20 }]} />
        <Text
          style={{
            fontSize: 8,
            fontFamily: 'Helvetica-Bold',
            color: MUTED,
            letterSpacing: 1.5,
            marginBottom: 8,
          }}
        >
          OUR VISION
        </Text>
        <Text style={s.body}>
          We envision a world where physical environments are no longer passive, but intelligent and
          responsive. By combining IoT, data, and software, we are building systems that make
          infrastructure smarter, more reliable, and future-ready.
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {[
            'Complete operational visibility',
            'Automated decision-making',
            'Improved sustainability',
            'Clarity, control and confidence',
          ].map((goal) => (
            <View
              key={goal}
              style={{ flexDirection: 'row', alignItems: 'flex-start', width: '47%', gap: 6 }}
            >
              <View
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 3,
                  backgroundColor: CYAN,
                  marginTop: 3,
                  flexShrink: 0,
                }}
              />
              <Text style={{ fontSize: 8.5, color: BODY, lineHeight: 1.5, flex: 1 }}>{goal}</Text>
            </View>
          ))}
        </View>
      </View>
      <PageFooter label="About iGreen" />
    </Page>
  );
}

// ─── Page 3 — Services ────────────────────────────────────────────────────────
function ServicesPage() {
  const iotServices = [
    {
      title: 'IoT Solutions',
      desc: 'End-to-end IoT platforms connecting sensors, devices, and enterprise systems for full operational visibility.',
    },
    {
      title: 'Smart Building Automation',
      desc: 'Real-time monitoring and control of HVAC, energy, lighting, and facility infrastructure.',
    },
    {
      title: 'Asset Lifecycle Management',
      desc: 'Track, manage, and extend the life of critical operational assets across the enterprise.',
    },
    {
      title: 'Connected Field Operations',
      desc: 'Digitize service workflows and improve execution efficiency with connected field teams.',
    },
    {
      title: 'Predictive Maintenance',
      desc: 'Move from reactive fixes to data-driven maintenance with AI-powered alerts and analytics.',
    },
    {
      title: 'Edge Computing',
      desc: 'Process data at the source for faster decisions, reduced bandwidth, and resilient operations.',
    },
    {
      title: 'Digital Transformation',
      desc: 'Strategy and execution to modernise legacy processes with data-driven, automated systems.',
    },
  ];

  const deliveryServices = [
    {
      title: 'Web Applications',
      desc: 'Custom enterprise web platforms — portals, dashboards, and workflow management systems.',
    },
    {
      title: 'Mobile Apps',
      desc: 'Flutter-based Android &amp; iOS applications for field operations, monitoring, and customer engagement.',
    },
    {
      title: 'Cloud Solutions',
      desc: 'Cloud architecture, migration, and managed services on AWS, Azure, and GCP.',
    },
  ];

  return (
    <Page size="A4" style={s.page}>
      <View style={s.accentBar} />
      <View style={s.content}>
        <SectionHeader label="WHAT WE DO" title="Turning Operations into Intelligent Systems" />

        {/* IoT & Digital group */}
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 8,
              fontFamily: 'Helvetica-Bold',
              color: CYAN,
              letterSpacing: 1.5,
              marginBottom: 10,
              paddingBottom: 6,
              borderBottomWidth: 1.5,
              borderBottomColor: CYAN,
            }}
          >
            IoT &amp; DIGITAL TRANSFORMATION
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {iotServices.map((svc, i) => (
              <View
                key={svc.title}
                style={{
                  width: '47%',
                  backgroundColor: LIGHT,
                  borderRadius: 5,
                  padding: 10,
                  borderWidth: 1,
                  borderColor: BORDER,
                  borderLeftWidth: 3,
                  borderLeftColor: i % 2 === 0 ? CYAN : '#1DBCD680',
                }}
              >
                <Text style={s.h4}>{svc.title}</Text>
                <Text style={{ fontSize: 7.5, color: BODY, lineHeight: 1.45 }}>{svc.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Digital Delivery group */}
        <View>
          <Text
            style={{
              fontSize: 8,
              fontFamily: 'Helvetica-Bold',
              color: GREEN,
              letterSpacing: 1.5,
              marginBottom: 10,
              paddingBottom: 6,
              borderBottomWidth: 1.5,
              borderBottomColor: GREEN,
            }}
          >
            DIGITAL DELIVERY
          </Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            {deliveryServices.map((svc) => (
              <View
                key={svc.title}
                style={{
                  flex: 1,
                  backgroundColor: LIGHT,
                  borderRadius: 5,
                  padding: 10,
                  borderWidth: 1,
                  borderColor: BORDER,
                  borderLeftWidth: 3,
                  borderLeftColor: GREEN,
                }}
              >
                <Text style={s.h4}>{svc.title}</Text>
                <Text style={{ fontSize: 7.5, color: BODY, lineHeight: 1.45 }}>{svc.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Approach */}
        <View style={[s.hrFull, { marginTop: 18 }]} />
        <Text
          style={{
            fontSize: 8,
            fontFamily: 'Helvetica-Bold',
            color: MUTED,
            letterSpacing: 1.5,
            marginBottom: 10,
          }}
        >
          OUR APPROACH — FROM IDEA TO IMPACT
        </Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {['Discover', 'Design', 'Build', 'Deploy', 'Optimize'].map((step, i) => (
            <View
              key={step}
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: LIGHT,
                borderRadius: 5,
                padding: 9,
                borderWidth: 1,
                borderColor: BORDER,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Helvetica-Bold',
                  color: CYAN,
                  marginBottom: 3,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </Text>
              <Text
                style={{
                  fontSize: 7.5,
                  fontFamily: 'Helvetica-Bold',
                  color: DARK,
                  textAlign: 'center',
                }}
              >
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <PageFooter label="Services" />
    </Page>
  );
}

// ─── Page 4 — Portfolio ───────────────────────────────────────────────────────
function PortfolioPage() {
  const projects = [
    {
      title: 'WIS — Smart Building Management Platform',
      client: 'Wenalytics IoT Solutions, Hyderabad',
      category: 'IoT',
      color: CYAN,
      desc: 'Comprehensive smart building platform with 10+ modules covering energy management, HVAC control, access control, and real-time facility operations.',
    },
    {
      title: 'VWI — Seamless Visa Processing Platform',
      client: 'VWI Travel Pvt Ltd (Visa World India)',
      category: 'Digital Transformation',
      color: GREEN,
      desc: 'End-to-end visa processing system that reduced application processing time by 80%, enabling faster turnaround for 10,000+ applications.',
    },
    {
      title: 'WIS — Fire Pump IoT Safety Monitoring',
      client: 'Wenalytics IoT Solutions, Hyderabad',
      category: 'IoT',
      color: CYAN,
      desc: 'Real-time IoT monitoring system for fire pump health, pressure, and flow — enabling predictive maintenance and regulatory compliance.',
    },
    {
      title: 'WIS CSMS — Cold Storage Monitoring',
      client: 'Wenalytics IoT Solutions',
      category: 'IoT',
      color: CYAN,
      desc: 'Connected sensor network for cold storage and freezer monitoring with real-time alerts, compliance logging, and remote management.',
    },
    {
      title: 'MubarakRishte — AI Matrimonial Platform',
      client: 'MubarakRishte.com, Hyderabad',
      category: 'Digital Transformation',
      color: GREEN,
      desc: 'AI-powered matrimonial platform with intelligent matching algorithms, profile verification, and mobile-first user experience.',
    },
    {
      title: 'Liquidynamics OilCop — Tank Monitoring',
      client: 'Liquidynamics, USA',
      category: 'IoT',
      color: CYAN,
      desc: 'Web portal for real-time tank level monitoring and inventory management for petroleum and industrial fluid assets across the Americas.',
    },
  ];

  return (
    <Page size="A4" style={s.page}>
      <View style={s.accentBar} />
      <View style={s.content}>
        <SectionHeader label="PORTFOLIO" title="Proven Solutions Across Industries" />

        <View style={s.projectGrid}>
          {projects.map((p) => (
            <View key={p.title} style={s.projectCard}>
              <View
                style={[
                  s.projectTag,
                  {
                    backgroundColor: p.color === CYAN ? '#1DBCD615' : '#5CB85C15',
                  },
                ]}
              >
                <Text
                  style={[s.projectTagText, { color: p.color }]}
                >
                  {p.category}
                </Text>
              </View>
              <Text style={s.projectTitle}>{p.title}</Text>
              <Text style={s.projectClient}>{p.client}</Text>
              <Text style={s.projectDesc}>{p.desc}</Text>
            </View>
          ))}
        </View>
      </View>
      <PageFooter label="Portfolio" />
    </Page>
  );
}

// ─── Page 5 — Why iGreen + Contact ────────────────────────────────────────────
function ContactPage() {
  const differentiators = [
    { title: 'End-to-End Capability', desc: 'From hardware integration to software platforms' },
    { title: 'Real-World Deployment', desc: 'Proven across buildings, cold storage, safety & more' },
    { title: 'Scalable Architecture', desc: 'Built to start small and grow to enterprise scale' },
    { title: 'Integration-First', desc: 'Works alongside your existing systems and infrastructure' },
    { title: 'Outcome-Driven', desc: 'We measure success by your operational impact' },
  ];

  return (
    <Page size="A4" style={s.page}>
      <View style={s.accentBar} />
      <View style={s.content}>
        {/* Why iGreen */}
        <SectionHeader label="WHY IGREEN" title="What Sets Us Apart" />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
          {differentiators.map((d, i) => (
            <View
              key={d.title}
              style={{
                width: '30%',
                backgroundColor: LIGHT,
                borderRadius: 5,
                padding: 10,
                borderWidth: 1,
                borderColor: BORDER,
                borderTopWidth: 2,
                borderTopColor: i % 2 === 0 ? CYAN : GREEN,
              }}
            >
              <Text style={s.h4}>{d.title}</Text>
              <Text style={{ fontSize: 7.5, color: MUTED, lineHeight: 1.4 }}>{d.desc}</Text>
            </View>
          ))}
        </View>

        <View style={s.hrFull} />

        {/* CTA headline */}
        <View
          style={{
            backgroundColor: '#EFF8FB',
            borderRadius: 8,
            padding: 18,
            borderWidth: 1,
            borderColor: '#B2E7F0',
            marginBottom: 18,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Helvetica-Bold',
              color: DARK,
              textAlign: 'center',
              marginBottom: 6,
            }}
          >
            Let&#39;s Build Something Intelligent
          </Text>
          <Text
            style={{ fontSize: 9, color: BODY, textAlign: 'center', lineHeight: 1.5, maxWidth: 360 }}
          >
            Have a challenge, idea, or opportunity? Let&#39;s explore how technology can transform
            your operations.
          </Text>
        </View>

        {/* Contact info */}
        <Text
          style={{
            fontSize: 8,
            fontFamily: 'Helvetica-Bold',
            color: MUTED,
            letterSpacing: 1.5,
            marginBottom: 10,
          }}
        >
          GET IN TOUCH
        </Text>
        <View style={{ flexDirection: 'row', gap: 12, marginBottom: 14 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: LIGHT,
              borderRadius: 5,
              padding: 12,
              borderWidth: 1,
              borderColor: BORDER,
            }}
          >
            <Text
              style={{
                fontSize: 7.5,
                fontFamily: 'Helvetica-Bold',
                color: CYAN,
                letterSpacing: 1,
                marginBottom: 4,
              }}
            >
              EMAIL
            </Text>
            <Text style={{ fontSize: 9, color: BODY }}>contact@igreensystems.com</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: LIGHT,
              borderRadius: 5,
              padding: 12,
              borderWidth: 1,
              borderColor: BORDER,
            }}
          >
            <Text
              style={{
                fontSize: 7.5,
                fontFamily: 'Helvetica-Bold',
                color: CYAN,
                letterSpacing: 1,
                marginBottom: 4,
              }}
            >
              PHONE
            </Text>
            <Text style={{ fontSize: 9, color: BODY }}>+91 9849481081</Text>
            <Text style={{ fontSize: 9, color: BODY }}>+91 9676067666</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: LIGHT,
              borderRadius: 5,
              padding: 12,
              borderWidth: 1,
              borderColor: BORDER,
            }}
          >
            <Text
              style={{
                fontSize: 7.5,
                fontFamily: 'Helvetica-Bold',
                color: CYAN,
                letterSpacing: 1,
                marginBottom: 4,
              }}
            >
              WEBSITE
            </Text>
            <Text style={{ fontSize: 9, color: CYAN }}>igreensystems.com</Text>
          </View>
        </View>

        {/* Offices */}
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: LIGHT,
              borderRadius: 5,
              padding: 12,
              borderWidth: 1,
              borderColor: BORDER,
            }}
          >
            <Text
              style={{
                fontSize: 7.5,
                fontFamily: 'Helvetica-Bold',
                color: GREEN,
                letterSpacing: 1,
                marginBottom: 5,
              }}
            >
              HYDERABAD OFFICE
            </Text>
            <Text style={{ fontSize: 8, color: BODY, lineHeight: 1.6 }}>
              #1, 1-98/9/12C, Jaihind Enclave,{'\n'}
              Near Image Gardens, Madhapur,{'\n'}
              Hyderabad, Telangana 500081
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: LIGHT,
              borderRadius: 5,
              padding: 12,
              borderWidth: 1,
              borderColor: BORDER,
            }}
          >
            <Text
              style={{
                fontSize: 7.5,
                fontFamily: 'Helvetica-Bold',
                color: GREEN,
                letterSpacing: 1,
                marginBottom: 5,
              }}
            >
              KAKINADA OFFICE
            </Text>
            <Text style={{ fontSize: 8, color: BODY, lineHeight: 1.6 }}>
              4/52-2, Sita Enclave,{'\n'}
              Rama Reddy Nagar, Pratap Nagar Bridge,{'\n'}
              Kakinada, Andhra Pradesh 533004
            </Text>
          </View>
        </View>
      </View>
      <PageFooter label="Contact" />
    </Page>
  );
}

// ─── Main PDF Document ─────────────────────────────────────────────────────────
function IgreenBrochure() {
  return (
    <Document
      title="iGreen Systems — Company Profile"
      author="iGreen Systems & Technologies"
      subject="IoT Solutions & Digital Transformation"
      keywords="IoT, smart building, digital transformation, Hyderabad, India"
      creator="igreensystems.com"
    >
      <CoverPage />
      <AboutPage />
      <ServicesPage />
      <PortfolioPage />
      <ContactPage />
    </Document>
  );
}

// ─── API Route Handler ─────────────────────────────────────────────────────────
export async function GET() {
  const buffer = await renderToBuffer(<IgreenBrochure />);

  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="iGreen-Systems-Company-Profile.pdf"',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
