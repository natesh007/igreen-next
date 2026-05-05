import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Edge Computing',
  description: 'Edge computing solutions from iGreen Systems, Hyderabad — low-latency IoT architectures that process data at the source, reduce bandwidth costs, and enable offline-first operations across India.',
};

export default function EdgeComputingPage() {
  return (
    <ServicePageTemplate
      badge="IoT & Digital Transformation"
      accent="#1DBCD6"
      title="Edge Computing"
      subtitle="Move processing to where the data is born. Our edge architectures cut latency, reduce cloud bandwidth costs, and keep systems running even when connectivity drops."
      features={[
        { title: 'Edge Node Design', desc: 'Selection and deployment of edge compute hardware — from industrial PCs and Raspberry Pi clusters to ruggedized IoT gateways.' },
        { title: 'Local Inference', desc: 'Deploy lightweight ML models at the edge for real-time anomaly detection, image classification, and predictive analytics — no cloud round-trip.' },
        { title: 'Offline-First Architecture', desc: 'Store-and-forward patterns, local SQLite/InfluxDB storage, and conflict-free synchronization when connectivity resumes.' },
        { title: 'Edge Orchestration', desc: 'Kubernetes edge distributions (K3s, MicroK8s) and container orchestration across distributed edge fleets.' },
        { title: 'Bandwidth Optimization', desc: 'Intelligent data aggregation, compression, and edge filtering to reduce cloud ingestion costs by up to 80%.' },
        { title: 'Remote Management', desc: 'Centralized monitoring, configuration, and OTA updates for edge nodes regardless of network reliability.' },
      ]}
      useCases={[
        'Remote industrial sites with poor connectivity',
        'Real-time safety and anomaly detection',
        'Video analytics at the edge',
        'Autonomous vehicles and drones',
        'Retail in-store AI applications',
        'Bandwidth-constrained deployments',
      ]}
      relatedServices={[
        { href: '/services/iot-solutions', label: 'IoT Solutions' },
        { href: '/services/connected-devices', label: 'Connected Devices' },
        { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
      ]}
      path="/services/edge-computing"
    />
  );
}
