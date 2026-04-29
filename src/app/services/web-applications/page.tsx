import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Web Applications | iGreen',
  description: 'Scalable, high-performance web applications built with React, Next.js, and cloud-native architectures.',
};

export default function WebApplicationsPage() {
  return (
    <ServicePageTemplate
      badge="Digital Delivery"
      accent="#5CB85C"
      title="Web Applications"
      subtitle="We build fast, scalable, and maintainable web applications using modern frameworks and cloud-native architectures — designed to grow with your business."
      features={[
        { title: 'React & Next.js', desc: 'Server-rendered and static applications with excellent SEO, performance, and developer experience using the React ecosystem.' },
        { title: 'Custom Dashboards', desc: 'Data-rich internal tools, IoT dashboards, and analytics platforms tailored to your workflows and KPIs.' },
        { title: 'API Development', desc: 'RESTful and GraphQL APIs built with Node.js, FastAPI, or .NET — documented, versioned, and production-hardened.' },
        { title: 'Enterprise Portals', desc: 'B2B and internal portals with role-based access, SSO integration, and audit trails for complex organisations.' },
        { title: 'PWA Development', desc: 'Progressive Web Apps that work offline, send push notifications, and install like native apps — one codebase, all platforms.' },
        { title: 'Performance & Core Web Vitals', desc: 'Performance-first development with Lighthouse scores, Web Vitals tracking, and CDN optimisation built in from day one.' },
      ]}
      useCases={[
        'SaaS product development',
        'IoT monitoring dashboards',
        'B2B customer portals',
        'Internal business tools',
        'E-commerce platforms',
        'Content management systems',
      ]}
      relatedServices={[
        { href: '/services/mobile-apps', label: 'Mobile Apps' },
        { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
        { href: '/services/digital-transformation', label: 'Digital Transformation' },
      ]}
    />
  );
}
