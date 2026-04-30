import { Reveal } from '@/components/ui/Reveal';

const testimonials = [
  {
    quote:
      'iGreen built the core IoT infrastructure that powers the WIS platform. What impressed us most was their ability to handle the complexity — 10+ monitoring modules, hardware integration, and a real-time dashboard — delivered on schedule. They don\'t just write code; they understand the engineering problem.',
    name: 'Hriday',
    title: 'Co-Founder',
    company: 'Wenalytics IoT Solutions',
    accent: '#1DBCD6',
    initial: 'H',
  },
  {
    quote:
      'Before iGreen, our visa processing was largely manual and error-prone. They completely transformed our workflow — 80% faster application processing, no paperwork bottlenecks, and clients can now track their applications in real time. The difference was immediate.',
    name: 'Ghanshyam Power',
    title: 'Director',
    company: 'VWI Travel Pvt Ltd (Visa World India)',
    accent: '#5CB85C',
    initial: 'G',
  },
  {
    quote:
      'Building a matrimonial platform with AI matchmaking, WhatsApp integration, and apps on both Android and iOS is no small task. iGreen delivered all of it — on time, with the polish our users expect. The AI features alone have transformed how families connect on our platform.',
    name: 'Mohd Maqdoom Shahnawaz',
    title: 'Founder',
    company: 'MubarakRishte.com',
    accent: '#1DBCD6',
    initial: 'M',
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 relative"
      style={{ backgroundColor: '#060A12' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #1DBCD625, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#1DBCD6' }}>
            What Our Clients Say
          </p>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Trusted by Builders, Operators, and Founders
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real feedback from clients who trusted us to build, improve, and support critical systems.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className="rounded-2xl p-8 border h-full flex flex-col transition-all duration-300 hover:border-[#1DBCD630] hover:shadow-[0_0_24px_#1DBCD608]"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937', borderLeftWidth: '3px', borderLeftColor: t.accent }}
              >
                {/* Quote mark */}
                <div className="text-4xl font-serif leading-none mb-4 select-none" style={{ color: t.accent, opacity: 0.4 }}>
                  &ldquo;
                </div>
                <p className="text-[15px] text-gray-200 leading-relaxed flex-1 italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t" style={{ borderColor: '#1F2937' }}>
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white"
                    style={{ backgroundColor: t.accent }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-sm mt-0.5">{t.title}, {t.company}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
