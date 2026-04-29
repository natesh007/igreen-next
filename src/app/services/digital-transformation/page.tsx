import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Digital Transformation | iGreen',
  description: 'End-to-end digital transformation consulting — process digitization, legacy modernization, and technology-aligned business strategy.',
};

export default function DigitalTransformationPage() {
  return (
    <ServicePageTemplate
      badge="IoT & Digital Transformation"
      accent="#1DBCD6"
      title="Digital Transformation"
      subtitle="We align technology with your business goals and drive the change. From strategy to execution — process digitization, legacy modernization, and adoption that sticks."
      features={[
        { title: 'Digital Maturity Assessment', desc: 'Benchmark your current digital capabilities across people, process, and technology to identify the highest-impact transformation opportunities.' },
        { title: 'Transformation Roadmap', desc: 'A prioritized, phased plan that balances quick wins with strategic long-term initiatives — sized for your budget and risk appetite.' },
        { title: 'Process Digitization', desc: 'Convert manual, paper-based, and spreadsheet-driven workflows into automated, data-rich digital processes.' },
        { title: 'Legacy Modernization', desc: 'Pragmatic approaches to retiring or re-platforming aging systems — strangler fig migrations, API wrappers, and selective rewrites.' },
        { title: 'Change Management', desc: 'Stakeholder alignment, training programs, and adoption tracking to ensure technology investments actually get used.' },
        { title: 'KPI & ROI Tracking', desc: 'Define measurable success metrics upfront and track transformation ROI throughout delivery and beyond.' },
      ]}
      useCases={[
        'Enterprise process automation',
        'ERP and CRM modernization',
        'Supply chain digitization',
        'Customer experience transformation',
        'Data-driven decision making',
        'Regulatory compliance digitization',
      ]}
      relatedServices={[
        { href: '/services/iot-solutions', label: 'IoT Solutions' },
        { href: '/services/web-applications', label: 'Web Applications' },
        { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
      ]}
    />
  );
}
