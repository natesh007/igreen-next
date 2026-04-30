import { Reveal } from '@/components/ui/Reveal';

const steps = [
  { number: '01', title: 'Discovery', desc: 'We audit your current systems, identify pain points, and map your digital landscape.' },
  { number: '02', title: 'Strategy', desc: 'We design a transformation roadmap aligned with your business goals and budget.' },
  { number: '03', title: 'Design', desc: 'UX/UI design and system architecture before a single line of code is written.' },
  { number: '04', title: 'Build', desc: 'Agile development with bi-weekly sprints, demos, and continuous integration.' },
  { number: '05', title: 'Deploy', desc: 'Staged rollout with full monitoring, load testing, and zero-downtime deployments.' },
  { number: '06', title: 'Support', desc: 'Ongoing maintenance, performance optimisation, and feature evolution.' },
];

export default function Process() {
  return (
    <section
      className="py-24 relative"
      style={{
        backgroundColor: '#0A0F1C',
        background: 'radial-gradient(ellipse 60% 40% at 50% 100%, #5CB85C06 0%, #0A0F1C 70%)',
      }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #5CB85C25, transparent)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#5CB85C' }}>
            How We Work
          </p>
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Process
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A clear, collaborative process that keeps your project moving from planning to launch.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div
                className="relative rounded-2xl p-7 border h-full transition-all duration-300 hover:border-[#1DBCD630] hover:shadow-[0_0_24px_#1DBCD610]"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
              >
                {/* Step number watermark */}
                <p
                  className="text-6xl font-bold mb-4 select-none"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#1DBCD6', opacity: 0.12 }}
                >
                  {step.number}
                </p>
                {/* Connector dot */}
                <div
                  className="absolute top-7 right-7 w-2 h-2 rounded-full"
                  style={{ backgroundColor: i < 5 ? '#1DBCD640' : '#5CB85C40' }}
                />
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-[15px] text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
