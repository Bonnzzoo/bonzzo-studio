import Link from "next/link";

export default async function ClientPortalPage({ params }: { params: Promise<{ client: string }> }) {
  const { client } = await params;
  
  // Use client to generate dynamic data
  const formattedClientName = client
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const data = {
    clientName: formattedClientName,
    projectTitle: `${formattedClientName} High-Fidelity Prototype`,
    status: "Review Phase",
    lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    deliverables: [
      {
        id: "del-1",
        title: "Interactive Prototype",
        type: "Figma Link",
        url: "#",
        status: "Ready",
      },
      {
        id: "del-2",
        title: "Brand Assets Package",
        type: "ZIP Download",
        url: "#",
        status: "Pending",
      },
      {
        id: "del-3",
        title: "Staging Environment",
        type: "Web Link",
        url: "#",
        status: "Ready",
      },
    ],
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      
      {/* Header section */}
      <header className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-serif font-light text-[clamp(40px,5vw,72px)] leading-[1.05] tracking-[-0.03em] uppercase">
            {data.projectTitle}
          </h1>
          <p className="mt-4 text-[17px] text-white/60">
            Welcome to your dedicated project portal, {data.clientName}.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-5 md:min-w-[200px]">
          <span className="text-[11px] uppercase tracking-widest text-white/40">Status</span>
          <span className="text-[15px] text-white">{data.status}</span>
          <div className="mt-2 h-px w-full bg-white/10"></div>
          <span className="mt-2 text-[11px] uppercase tracking-widest text-white/40">Last Updated</span>
          <span className="text-[15px] text-white">{data.lastUpdated}</span>
        </div>
      </header>

      {/* Deliverables Section */}
      <section>
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-[15px] uppercase tracking-widest text-white/80">Deliverables</h2>
          <span className="text-[13px] text-white/40">{data.deliverables.length} Items</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {data.deliverables.map((item) => (
            <Link 
              key={item.id} 
              href={item.url}
              className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl border border-white/10 bg-[#121417] p-6 transition-colors hover:bg-white/5"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-white/60">
                  {item.type}
                </span>
                <span className={`text-[11px] uppercase tracking-widest ${item.status === 'Ready' ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {item.status}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-[24px] font-light">{item.title}</h3>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:bg-white group-hover:text-black">
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h8"></path>
                    <path d="M7.5 3.5L11 7L7.5 10.5"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
    </div>
  );
}
