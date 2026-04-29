import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0A0F1C' }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(#1DBCD620 1px, transparent 1px), linear-gradient(90deg, #1DBCD620 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: '#1DBCD6' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: '#5CB85C' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8"
          style={{ borderColor: '#1DBCD630', backgroundColor: '#1DBCD610', color: '#1DBCD6' }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#1DBCD6' }} />
          IoT & Digital Transformation
        </div>

        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Connecting the Future,
          <br />
          <span style={{ color: '#1DBCD6' }}>Transforming</span>{' '}
          <span style={{ color: '#5CB85C' }}>Business</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
          End-to-end IoT solutions, intelligent connected systems, and digital transformation
          strategies that turn data into competitive advantage.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #1DBCD6, #5CB85C)' }}
          >
            Explore Solutions
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl text-base font-semibold border transition-all hover:bg-white/5"
            style={{ borderColor: '#374151', color: '#D1D5DB' }}
          >
            Contact Us →
          </Link>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mt-20 pt-10 border-t"
          style={{ borderColor: '#1F2937' }}
        >
          {[
            { value: '12+', label: 'Years Experience' },
            { value: '25', label: 'Team Members' },
            { value: '232+', label: 'Clients' },
            { value: '521+', label: 'Projects Delivered' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-3xl font-bold"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#1DBCD6' }}
              >
                {s.value}
              </p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
