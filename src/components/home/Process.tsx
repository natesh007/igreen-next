const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We audit your current systems, identify pain points, and map your digital landscape.',
  },
  {
    number: '02',
    title: 'Strategy',
    desc: 'We design a transformation roadmap aligned with your business goals and budget.',
  },
  {
    number: '03',
    title: 'Design',
    desc: 'UX/UI design and system architecture before a single line of code is written.',
  },
  {
    number: '04',
    title: 'Build',
    desc: 'Agile development with bi-weekly sprints, demos, and continuous integration.',
  },
  {
    number: '05',
    title: 'Deploy',
    desc: 'Staged rollout with full monitoring, load testing, and zero-downtime deployments.',
  },
  {
    number: '06',
    title: 'Support',
    desc: 'Ongoing maintenance, performance optimisation, and feature evolution.',
  },
];

export default function Process() {
  return (
    <section className="py-24" style={{ backgroundColor: '#0A0F1C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#5CB85C' }}>
            How We Work
          </p>
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Process
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A structured, transparent approach that keeps you in the loop from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl p-7 border"
              style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
            >
              <p
                className="text-5xl font-bold mb-4 opacity-20"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#1DBCD6' }}
              >
                {step.number}
              </p>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
