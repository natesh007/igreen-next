import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Connected Devices',
  description: 'Connected device ecosystems from iGreen Systems, Hyderabad — hardware selection, firmware development, and cloud connectivity for industrial and commercial IoT deployments across India.',
};

export default function ConnectedDevicesPage() {
  return (
    <ServicePageTemplate
      badge="IoT & Digital Transformation"
      accent="#1DBCD6"
      title="Connected Devices"
      subtitle="We help you design, deploy, and manage intelligent connected device ecosystems — from hardware selection through to cloud-scale device management."
      features={[
        { title: 'Hardware Consultancy', desc: 'Vendor-neutral evaluation and selection of microcontrollers, SBCs, and industrial gateways suited to your environment and budget.' },
        { title: 'Firmware Development', desc: 'Low-level embedded software development in C/C++ and MicroPython, optimized for power efficiency and reliability.' },
        { title: 'Connectivity Protocols', desc: 'Implementation of LoRaWAN, Zigbee, BLE, Wi-Fi, NB-IoT, and cellular connectivity with seamless cloud handoff.' },
        { title: 'Edge-to-Cloud Pipeline', desc: 'Seamless data flow from device to cloud, including local buffering, compression, and secure transmission over constrained networks.' },
        { title: 'Device Fleet Management', desc: 'Scalable platform for provisioning, monitoring, updating, and decommissioning thousands of devices from a single dashboard.' },
        { title: 'Certification Support', desc: 'Guidance through CE, FCC, and regional certifications for connected hardware products.' },
      ]}
      useCases={[
        'Industrial sensor networks',
        'Consumer IoT product development',
        'Smart metering (energy, water, gas)',
        'Environmental monitoring stations',
        'Vehicle and fleet telematics',
        'Wearable and health devices',
      ]}
      relatedServices={[
        { href: '/services/iot-solutions', label: 'IoT Solutions' },
        { href: '/services/edge-computing', label: 'Edge Computing' },
        { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
      ]}
      path="/services/connected-devices"
    />
  );
}
