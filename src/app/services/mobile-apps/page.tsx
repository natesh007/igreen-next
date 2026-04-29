import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Mobile Apps | iGreen',
  description: 'Cross-platform and native mobile applications for iOS and Android — from concept through App Store launch.',
};

export default function MobileAppsPage() {
  return (
    <ServicePageTemplate
      badge="Digital Delivery"
      accent="#5CB85C"
      title="Mobile Apps"
      subtitle="We build mobile applications that users love — from React Native cross-platform apps to native Swift and Kotlin solutions for performance-critical requirements."
      features={[
        { title: 'React Native', desc: 'Cross-platform apps from a single codebase — 90%+ code sharing, native performance, and rapid iteration across iOS and Android.' },
        { title: 'Native iOS (Swift)', desc: 'SwiftUI and UIKit development for apps that demand the full power of the Apple platform — ARKit, HealthKit, and beyond.' },
        { title: 'Native Android (Kotlin)', desc: 'Jetpack Compose and Material 3 Android apps with deep OS integration, background processing, and hardware access.' },
        { title: 'IoT Mobile Companion Apps', desc: 'Bluetooth (BLE), Wi-Fi, and cloud-connected companion apps that let users configure, monitor, and control IoT devices.' },
        { title: 'App Store Submission', desc: 'End-to-end support for Apple App Store and Google Play submission including review preparation and compliance.' },
        { title: 'Push Notifications & Real-time', desc: 'Firebase FCM, APNs integration, and WebSocket-based real-time data sync for apps that need to stay current.' },
      ]}
      useCases={[
        'IoT device companion apps',
        'Field service and inspection apps',
        'Logistics and fleet management',
        'Customer-facing retail apps',
        'Healthcare and patient apps',
        'Industrial operator interfaces',
      ]}
      relatedServices={[
        { href: '/services/web-applications', label: 'Web Applications' },
        { href: '/services/iot-solutions', label: 'IoT Solutions' },
        { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
      ]}
    />
  );
}
