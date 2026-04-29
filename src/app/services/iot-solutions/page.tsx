import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'IoT Solutions | iGreen',
  description: 'End-to-end IoT solutions from iGreen — architecture design, sensor integration, real-time data pipelines, and cloud connectivity.',
};

export default function IoTSolutionsPage() {
  return (
    <ServicePageTemplate
      badge="IoT & Digital Transformation"
      accent="#1DBCD6"
      title="IoT Solutions"
      subtitle="We design and build end-to-end IoT systems that connect your physical assets to real-time intelligence — from sensor to dashboard."
      features={[
        { title: 'IoT Architecture Design', desc: 'Scalable system architecture covering device tiers, connectivity protocols (MQTT, CoAP, HTTP), data ingestion, and storage strategy.' },
        { title: 'Sensor Integration', desc: 'Hardware-agnostic integration of temperature, pressure, vibration, GPS, and custom sensors into your existing infrastructure.' },
        { title: 'Real-time Data Pipelines', desc: 'Stream processing with Apache Kafka or AWS Kinesis, transforming raw device telemetry into structured business metrics.' },
        { title: 'Device Management', desc: 'Remote provisioning, OTA firmware updates, health monitoring, and lifecycle management for fleets of thousands of devices.' },
        { title: 'Analytics & Dashboards', desc: 'Custom dashboards and KPI visualizations that turn device data into decisions — from operational alerts to executive reporting.' },
        { title: 'Security & Compliance', desc: 'End-to-end encryption, certificate-based authentication, and compliance with IEC 62443, GDPR, and industry-specific regulations.' },
      ]}
      useCases={[
        'Industrial equipment monitoring',
        'Cold-chain and logistics tracking',
        'Smart building energy management',
        'Agricultural yield optimization',
        'Water and utilities management',
        'Retail footfall and inventory',
        'Healthcare asset tracking',
        'Smart city infrastructure',
      ]}
      relatedServices={[
        { href: '/services/connected-devices', label: 'Connected Devices' },
        { href: '/services/edge-computing', label: 'Edge Computing' },
        { href: '/services/smart-manufacturing', label: 'Smart Manufacturing' },
        { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
      ]}
    />
  );
}
