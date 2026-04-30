'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

const stats = [
  { value: '18+', label: 'Years of Experience', desc: 'Building technology solutions since 2008', color: '#1DBCD6' },
  { value: '25', label: 'Team Members', desc: 'Engineers, designers, and consultants', color: '#5CB85C' },
  { value: '232+', label: 'Happy Clients', desc: 'From startups to global enterprises', color: '#1DBCD6' },
  { value: '521+', label: 'Projects Delivered', desc: 'Across IoT, web, mobile, and cloud', color: '#5CB85C' },
];

function AnimatedNumber({ raw, color }: { raw: string; color: string }) {
  const num = parseInt(raw.replace(/\D/g, ''), 10);
  const suffix = raw.replace(/[0-9]/g, '');
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(num / 45));
    const id = setInterval(() => {
      current += step;
      if (current >= num) { setDisplay(num); clearInterval(id); }
      else setDisplay(current);
    }, 28);
    return () => clearInterval(id);
  }, [inView, num]);

  return (
    <span ref={ref} style={{ color }}>{display}{suffix}</span>
  );
}

export default function Stats() {
  return (
    <section
      className="py-20 relative"
      style={{
        background: 'linear-gradient(180deg, #060A12 0%, #0A0F1C 50%, #060A12 100%)',
      }}
    >
      {/* Subtle top border glow */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #1DBCD630, transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #5CB85C30, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center p-8 rounded-2xl border relative overflow-hidden"
              style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ borderColor: `${s.color}40`, boxShadow: `0 0 24px ${s.color}12` }}
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-10"
                style={{ backgroundColor: s.color }}
              />
              <p className="text-5xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <AnimatedNumber raw={s.value} color={s.color} />
              </p>
              <p className="font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {s.label}
              </p>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
