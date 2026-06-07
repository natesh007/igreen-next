import CybercoreBackground from '@/components/ui/cybercore-section-hero';

export const metadata = { title: 'Cybercore Demo' };

export default function CybercoreDemo() {
  return (
    <>
      <CybercoreBackground beamCount={70} />

      <div className="relative z-10">
        <header className="flex items-center justify-between px-10 py-6">
          <div className="text-xl font-bold tracking-widest text-[#00e5ff]">CYBERCORE</div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-[#00e5ff] transition-colors">Protocols</a>
            <a href="#" className="hover:text-[#00e5ff] transition-colors">Network</a>
            <a href="#" className="hover:text-[#00e5ff] transition-colors">Developers</a>
            <a href="#" className="hover:text-[#00e5ff] transition-colors">Connect</a>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-8 text-center">
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 tracking-tight"
            style={{ textShadow: '0 0 40px rgba(0,229,255,0.4)' }}>
            Enter the Grid
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            Experience the next evolution of decentralised infrastructure, where data
            flows with unparalleled speed and security.
          </p>
          <button
            className="px-8 py-3.5 rounded-xl text-sm font-semibold border border-[#00e5ff40]
              text-[#00e5ff] bg-[#00e5ff10] hover:bg-[#00e5ff20] transition-all
              hover:shadow-[0_0_24px_rgba(0,229,255,0.3)]"
          >
            Explore the Network
          </button>
        </main>
      </div>
    </>
  );
}
