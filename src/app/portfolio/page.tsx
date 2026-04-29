import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | iGreen',
  description: 'Explore iGreen\'s project portfolio — IoT deployments, digital transformation initiatives, and web & mobile applications.',
};

const categories = ['All', 'IoT', 'Digital Transformation', 'Web & Mobile', 'Cloud'];

const placeholderProjects = [
  { title: 'Smart Factory Monitoring', category: 'IoT', tag: 'IoT', tagColor: '#1DBCD6' },
  { title: 'Enterprise Digital Transformation', category: 'Digital Transformation', tag: 'Digital', tagColor: '#5CB85C' },
  { title: 'Fleet Tracking Platform', category: 'IoT', tag: 'IoT', tagColor: '#1DBCD6' },
  { title: 'E-Commerce Web App', category: 'Web & Mobile', tag: 'Web', tagColor: '#5CB85C' },
  { title: 'Connected Sensor Network', category: 'IoT', tag: 'IoT', tagColor: '#1DBCD6' },
  { title: 'Cloud Migration Project', category: 'Cloud', tag: 'Cloud', tagColor: '#5CB85C' },
];

export default function PortfolioPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      {/* Header */}
      <section className="py-24 text-center" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#1DBCD6' }}>
            Our Work
          </p>
          <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Projects That Define Us
          </h1>
          <p className="text-gray-400 text-lg">
            From IoT deployments to full digital transformations — here&apos;s a selection of the
            work we&apos;re proud of.
          </p>
        </div>
      </section>

      {/* Filter tabs (static, no JS for now) */}
      <section className="py-6 border-b" style={{ borderColor: '#1F2937', backgroundColor: '#060A12' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button
                key={c}
                className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors"
                style={
                  i === 0
                    ? { backgroundColor: '#1DBCD6', borderColor: '#1DBCD6', color: '#fff' }
                    : { backgroundColor: 'transparent', borderColor: '#374151', color: '#9CA3AF' }
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderProjects.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border overflow-hidden transition-all hover:-translate-y-1"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
              >
                {/* Image placeholder */}
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)' }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${p.tagColor}20` }}
                  >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={p.tagColor} strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                    </svg>
                  </div>
                </div>

                <div className="p-6">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${p.tagColor}20`, color: p.tagColor }}
                  >
                    {p.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-3 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500">Case study coming soon.</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon note */}
          <div
            className="mt-14 rounded-2xl p-10 text-center border"
            style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
          >
            <p className="text-white font-semibold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Detailed Case Studies Coming Soon
            </p>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              We&apos;re preparing in-depth write-ups of our IoT and digital transformation projects.
              In the meantime, reach out and we&apos;ll walk you through our work directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
