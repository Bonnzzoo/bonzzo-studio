export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Portal Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b border-white/10 bg-[#0A0A0A]/80 px-6 backdrop-blur-md">
        <div className="flex items-center gap-4 text-[13px] uppercase tracking-widest text-white/50">
          <span>Bazaar-OS</span>
          <span className="text-white/20">/</span>
          <span className="text-white">Client Portal</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
          <span className="text-[12px] uppercase tracking-widest text-white/40">Secure Connection</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-14">
        {children}
      </main>
    </div>
  );
}
