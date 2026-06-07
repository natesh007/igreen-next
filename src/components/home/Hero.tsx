'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0A0F1C' }}
    >
      {/* Animated gradient background */}
      <BackgroundGradientAnimation
        containerClassName="absolute inset-0 h-full w-full"
        gradientBackgroundStart="rgb(10, 15, 28)"
        gradientBackgroundEnd="rgb(6, 10, 18)"
        firstColor="29, 188, 214"
        secondColor="92, 184, 92"
        thirdColor="29, 188, 214"
        fourthColor="0, 80, 120"
        fifthColor="0, 120, 60"
        pointerColor="29, 188, 214"
        blendingValue="screen"
        size="70%"
        interactive={false}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#1DBCD640 1px, transparent 1px), linear-gradient(90deg, #1DBCD640 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* IoT node network — interconnected nodes hinting at connected devices / smart buildings */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.18 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <style>{`
            @keyframes iot-pulse {
              0%, 100% { opacity: 0.25; r: 3; }
              50% { opacity: 0.9; r: 5; }
            }
            @keyframes iot-pulse-slow {
              0%, 100% { opacity: 0.15; r: 2.5; }
              50% { opacity: 0.7; r: 4.5; }
            }
            @keyframes iot-line-flow {
              0% { stroke-dashoffset: 40; opacity: 0.1; }
              50% { opacity: 0.45; }
              100% { stroke-dashoffset: 0; opacity: 0.1; }
            }
            .iot-node { animation: iot-pulse 3.5s ease-in-out infinite; fill: #1DBCD6; }
            .iot-node-green { animation: iot-pulse-slow 4.5s ease-in-out infinite; fill: #5CB85C; }
            .iot-node-2 { animation-delay: 0.8s; }
            .iot-node-3 { animation-delay: 1.6s; }
            .iot-node-4 { animation-delay: 2.4s; }
            .iot-node-5 { animation-delay: 3.2s; }
            .iot-line { stroke: #1DBCD6; stroke-width: 0.8; stroke-dasharray: 6 34; fill: none; animation: iot-line-flow 4s ease-in-out infinite; }
            .iot-line-green { stroke: #5CB85C; stroke-width: 0.8; stroke-dasharray: 5 30; fill: none; animation: iot-line-flow 5s ease-in-out infinite; animation-delay: 1s; }
            .iot-line-2 { animation-delay: 1.3s; }
            .iot-line-3 { animation-delay: 2.6s; }
          `}</style>
        </defs>
        {/* Left cluster — smart building nodes */}
        <line className="iot-line" x1="8%" y1="20%" x2="18%" y2="38%" />
        <line className="iot-line iot-line-2" x1="18%" y1="38%" x2="28%" y2="25%" />
        <line className="iot-line iot-line-3" x1="18%" y1="38%" x2="22%" y2="58%" />
        <circle className="iot-node" cx="8%" cy="20%" r="3" />
        <circle className="iot-node iot-node-2" cx="18%" cy="38%" r="3" />
        <circle className="iot-node iot-node-3" cx="28%" cy="25%" r="3" />
        <circle className="iot-node-green iot-node-4" cx="22%" cy="58%" r="2.5" />

        {/* Right cluster — connected device nodes */}
        <line className="iot-line-green" x1="72%" y1="18%" x2="82%" y2="32%" />
        <line className="iot-line-green iot-line-2" x1="82%" y1="32%" x2="90%" y2="20%" />
        <line className="iot-line iot-line-3" x1="82%" y1="32%" x2="78%" y2="52%" />
        <line className="iot-line iot-line-2" x1="78%" y1="52%" x2="88%" y2="62%" />
        <circle className="iot-node iot-node-2" cx="72%" cy="18%" r="3" />
        <circle className="iot-node-green" cx="82%" cy="32%" r="3" />
        <circle className="iot-node iot-node-3" cx="90%" cy="20%" r="2.5" />
        <circle className="iot-node-green iot-node-5" cx="78%" cy="52%" r="3" />
        <circle className="iot-node iot-node-4" cx="88%" cy="62%" r="2.5" />

        {/* Bottom edge — subtle infrastructure grid anchor nodes */}
        <line className="iot-line iot-line-3" x1="12%" y1="78%" x2="25%" y2="70%" />
        <line className="iot-line-green iot-line-2" x1="75%" y1="72%" x2="88%" y2="80%" />
        <circle className="iot-node-green iot-node-3" cx="12%" cy="78%" r="2.5" />
        <circle className="iot-node iot-node-2" cx="25%" cy="70%" r="2.5" />
        <circle className="iot-node iot-node-4" cx="75%" cy="72%" r="2.5" />
        <circle className="iot-node-green iot-node-5" cx="88%" cy="80%" r="2.5" />
      </svg>

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
          From safeguarding critical infrastructure to powering large-scale digital platforms, we engineer solutions that bridge the physical and digital worlds—solving real business problems with precision and impact.
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

      </div>
    </section>
  );
}
