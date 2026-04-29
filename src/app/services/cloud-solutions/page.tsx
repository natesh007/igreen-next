import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Cloud Solutions | iGreen',
  description: 'AWS, Azure, and GCP architecture design, cloud migration, and DevOps automation from iGreen.',
};

export default function CloudSolutionsPage() {
  return (
    <ServicePageTemplate
      badge="Digital Delivery"
      accent="#5CB85C"
      title="Cloud Solutions"
      subtitle="We architect, migrate, and operate cloud infrastructure on AWS, Azure, and GCP — with a DevOps-first approach that makes deployment a competitive advantage."
      features={[
        { title: 'Cloud Architecture', desc: 'Well-architected cloud designs covering security, reliability, performance efficiency, cost optimisation, and operational excellence.' },
        { title: 'Cloud Migration', desc: 'Lift-and-shift, re-platform, and re-architect migration strategies with minimal downtime and full rollback plans.' },
        { title: 'Infrastructure as Code', desc: 'Terraform, AWS CDK, and Pulumi for reproducible, version-controlled infrastructure across all environments.' },
        { title: 'IoT Cloud Backend', desc: 'AWS IoT Core, Azure IoT Hub, and GCP IoT Core integration for scalable device connectivity, telemetry storage, and rules processing.' },
        { title: 'CI/CD & DevOps', desc: 'GitHub Actions, AWS CodePipeline, and Azure DevOps pipelines with automated testing, staging, and progressive deployment.' },
        { title: 'Cost Optimisation', desc: 'FinOps practices — reserved instances, auto-scaling, right-sizing, and tagging strategy to keep cloud bills in check.' },
      ]}
      useCases={[
        'On-premise to cloud migration',
        'Multi-cloud and hybrid architectures',
        'IoT data ingestion at scale',
        'Serverless application backends',
        'Data lake and analytics platforms',
        'Disaster recovery and HA setup',
      ]}
      relatedServices={[
        { href: '/services/iot-solutions', label: 'IoT Solutions' },
        { href: '/services/web-applications', label: 'Web Applications' },
        { href: '/services/edge-computing', label: 'Edge Computing' },
      ]}
    />
  );
}
