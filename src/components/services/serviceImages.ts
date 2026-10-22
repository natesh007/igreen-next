export interface ServiceImage {
  hero: string;
  alt: string;
  band: string;
  bandAlt: string;
  // caption: real product screen vs generated illustration
  cap: string;
  bandCap?: string;
}

const ILL = 'Illustrative image';

export const serviceImages: Record<string, ServiceImage> = {
  'iot-solutions': {
    hero: '/images/home/photo-pipes.webp',
    alt: 'Flow meter and pressure transmitter with a wireless unit on a water pipeline',
    band: '/images/industries/smart-buildings-wide.webp',
    bandAlt: 'Aerial view of a campus with connected buildings',
    cap: ILL,
  },
  'connected-devices': {
    hero: '/images/home/photo-tank.webp',
    alt: 'Tank site with a wireless level-monitoring device',
    band: '/images/industries/fuel-tank-monitoring-wide.webp',
    bandAlt: 'Fuel station with a wireless monitoring unit on the dispenser',
    cap: ILL,
  },
  'smart-manufacturing': {
    hero: '/images/home/photo-pump.webp',
    alt: 'Pump room with a control panel and monitoring unit',
    band: '/images/industries/fire-safety-wide.webp',
    bandAlt: 'Fire pump room with a control panel and monitoring unit',
    cap: ILL,
  },
  'edge-computing': {
    hero: '/images/home/photo-cold.webp',
    alt: 'Cold room with a wireless temperature sensor beside the door',
    band: '/images/industries/cold-chain-wide.webp',
    bandAlt: 'Cold storage with a wireless temperature sensor',
    cap: ILL,
  },
  'digital-transformation': {
    hero: '/images/industries/travel-visa.webp',
    alt: 'Passport scan being verified by an AI workflow',
    band: '/images/industries/restaurants-wide.webp',
    bandAlt: 'Restaurant kitchen with monitoring sensors on the gas line',
    cap: ILL,
  },
  'web-applications': {
    hero: '/images/industries/smart-buildings.webp',
    alt: 'Aerial view of a campus with connected buildings',
    band: '/images/home/wis-trend.webp',
    bandAlt: 'Trend chart view from the WIS platform',
    cap: ILL,
    bandCap: 'WIS platform screen',
  },
  'mobile-apps': {
    hero: '/images/home/apps-hero.webp',
    alt: 'Three phones showing iGreen-built apps: the MubarakRishte matchmaking app and the WIS motor-pump monitoring screen',
    band: '/images/home/apps-band.webp',
    bandAlt: 'A hand holding a phone with the WIS reservoir tank monitoring app, next to the pump and matchmaking app screens',
    cap: 'App screens',
  },
  'cloud-solutions': {
    hero: '/images/home/night-building.webp',
    alt: 'Connected building at night with live monitoring points',
    band: '/images/industries/smart-buildings-wide.webp',
    bandAlt: 'Aerial view of a campus with connected buildings',
    cap: ILL,
  },
};
