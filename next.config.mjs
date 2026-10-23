/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@react-pdf/renderer'],
  // inline the (small) stylesheet in the HTML so it does not block the first paint
  experimental: { inlineCss: true },
  // one canonical host: send www.igreensystems.com to igreensystems.com (permanent redirect)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.igreensystems.com' }],
        destination: 'https://igreensystems.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
