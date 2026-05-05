import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://igreensystems.com';
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/iot-solutions`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/connected-devices`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/smart-manufacturing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/edge-computing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/digital-transformation`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/web-applications`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/mobile-apps`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/cloud-solutions`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/useful-links/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/useful-links/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
