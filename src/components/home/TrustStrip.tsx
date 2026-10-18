import { Reveal } from '@/components/ui/Reveal';

const certs = [
  {
    name: 'IEC 62443',
    subtitle: 'Industrial Cybersecurity',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DBCD6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    name: 'GDPR Compliant',
    subtitle: 'Data Privacy',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DBCD6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
        <path d="M9 12h3" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="py-12 relative" style={{ backgroundColor: '#060A12' }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #1DBCD630, transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #1DBCD620, transparent)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: '#6B7280' }}>
            Standards &amp; Frameworks We Work To
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {certs.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.07}>
              <div
                className="flex flex-col items-center text-center gap-3 rounded-2xl px-5 py-6 border transition-all duration-300 hover:border-[#1DBCD640] hover:shadow-[0_0_20px_#1DBCD610]"
                style={{ backgroundColor: '#0A0F1C', borderColor: '#1F2937' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#1DBCD615' }}
                >
                  {cert.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {cert.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{cert.subtitle}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
