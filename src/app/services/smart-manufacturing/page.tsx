import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Smart Manufacturing | iGreen',
  description: 'Industry 4.0 solutions — real-time production monitoring, predictive maintenance, and OEE optimization for modern factories.',
};

export default function SmartManufacturingPage() {
  return (
    <ServicePageTemplate
      badge="IoT & Digital Transformation"
      accent="#1DBCD6"
      title="Smart Manufacturing"
      subtitle="Transform your production environment with Industry 4.0 intelligence — real-time monitoring, AI-driven maintenance, and data-backed operational decisions."
      features={[
        { title: 'OEE Monitoring', desc: 'Live Overall Equipment Effectiveness tracking across Availability, Performance, and Quality — with root-cause drill-down on every loss event.' },
        { title: 'Predictive Maintenance', desc: 'Machine learning models trained on vibration, temperature, and current signatures to predict failures days before they happen.' },
        { title: 'Production Line Digitization', desc: 'Retrofit legacy machinery with non-invasive sensors and edge gateways — no downtime, no rip-and-replace.' },
        { title: 'Quality Control Analytics', desc: 'Vision-based and sensor-driven defect detection integrated with your MES and ERP for closed-loop quality management.' },
        { title: 'Energy Optimization', desc: 'Sub-meter energy monitoring by machine and production run, with automated alerts for anomalous consumption patterns.' },
        { title: 'MES / ERP Integration', desc: 'Bidirectional integration with SAP, Oracle, Microsoft Dynamics, and custom MES platforms for unified production intelligence.' },
      ]}
      useCases={[
        'Discrete and process manufacturing',
        'Automotive component production',
        'Food and beverage processing',
        'Pharmaceutical batch tracking',
        'Electronics assembly',
        'Metals and mining operations',
      ]}
      relatedServices={[
        { href: '/services/iot-solutions', label: 'IoT Solutions' },
        { href: '/services/edge-computing', label: 'Edge Computing' },
        { href: '/services/digital-transformation', label: 'Digital Transformation' },
      ]}
    />
  );
}
