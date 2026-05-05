'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const stats = [
  { value: '18+', label: 'Years Experience' },
  { value: '25', label: 'Team Members' },
  { value: '232+', label: 'Clients' },
  { value: '521+', label: 'Projects Delivered' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0A0F1C' }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: '#0A0F1C', opacity: 0.4 }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#1DBCD640 1px, transparent 1px), linear-gradient(90deg, #1DBCD640 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial spotlight behind heading */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, #1DBCD612 0%, transparent 70%)',
        }}
      />

      {/* Glow blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: '#1DBCD6' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.10, 0.15, 0.10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: '#5CB85C' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.10, 0.14, 0.10] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8"
          style={{ borderColor: '#1DBCD630', backgroundColor: '#1DBCD610', color: '#1DBCD6' }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#1DBCD6' }} />
          IoT & Digital Transformation
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span style={{ color: '#1DBCD6' }}>Smart Buildings.</span>{' '}
          <span style={{ color: '#5CB85C', whiteSpace: 'nowrap' }}>Connected Devices.</span>
          <br />
          Real Results — Since 2008.
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
          From fire pump monitoring in Hyderabad to large-scale visa processing platforms, we deliver
          practical technology solutions that solve real business problems.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/services" className="btn-primary px-8 py-3.5 rounded-xl text-base">
            Explore Solutions
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3.5 rounded-xl text-base font-semibold border transition-all hover:bg-white/5 hover:border-white/20"
            style={{ borderColor: '#374151', color: '#D1D5DB' }}
          >
            View Our Work →
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          {...fadeUp(0.45)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mt-20 pt-10 border-t"
          style={{ borderColor: '#1F2937' }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <p
                className="text-3xl font-bold"
                style={{ fontFamily: 'Poppins, sans-serif', color: i % 2 === 0 ? '#1DBCD6' : '#5CB85C' }}
              >
                {s.value}
              </p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
