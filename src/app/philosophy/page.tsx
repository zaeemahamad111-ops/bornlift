import Link from "next/link";

export default function Philosophy() {
  return (
    <main className="pt-32 min-h-screen bg-black">
      <section className="px-8 max-w-4xl mx-auto mb-20 text-center">
        <span className="font-label-technical text-label-technical text-[#C0FF00] uppercase mb-4 block tracking-[0.4em] animate-pulse">// OUR_ETHOS</span>
        <h1 className="font-display-hero text-6xl md:text-8xl text-white uppercase italic tracking-tighter mb-12">THE BORNLIFT <br/> DOCTRINE</h1>
        <div className="w-24 h-1 bg-[#C0FF00] mx-auto mb-12"></div>
      </section>

      <section className="px-8 max-w-6xl mx-auto pb-40 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="border-l-2 border-[#C0FF00] pl-8 space-y-4">
            <h2 className="font-headline-md text-3xl text-white uppercase">Beyond Physicality</h2>
            <p className="font-body-lg text-zinc-400 leading-relaxed">
              We believe that performance is not just about the body, but the seamless integration of technical gear and human intent. BornLift is engineered for those who treat training as a protocol, not a hobby.
            </p>
          </div>
          
          <div className="border-l-2 border-zinc-800 pl-8 space-y-4">
            <h2 className="font-headline-md text-3xl text-white uppercase">Architectural Integrity</h2>
            <p className="font-body-lg text-zinc-400 leading-relaxed">
              Every seam, every weave, and every micron of fabric is scrutinized. We utilize ultrasonic welding and bio-mapped ventilation to ensure zero distraction during high-output sessions.
            </p>
          </div>
        </div>

        <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden border border-zinc-800 group">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQeSWqoSzQM6Hs8oXkOAGfmMe6V__JK6iii0_7VgJxkq_67c7tioA8IaVQvq4dchqsSIfv91m2-4GOAeC3L6Efe4NiQA5mo5Su6X9vDwsI4GY4_BKt_ITygxrYQBfy-k511z4Xr8BbaUNfwXs7Ho-K_UOBNL8XMSmDTBAOL_ZUo0X5NFzFPQOmGTr4Xxn4yDI1L9FSouOCqLAWiRCt7sl2Fu5QiqArU05vP0wZQn0TNTlekTcFrqi3zAjsHpFSCrwXQkdHYDGrTMM" 
            alt="Philosophy Visual" 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-transform duration-[3s]"
          />
          <div className="absolute inset-0 grid-blueprint opacity-20"></div>
          <div className="absolute bottom-8 left-8">
             <span className="font-label-technical text-[#C0FF00] text-[10px] tracking-widest uppercase bg-black/80 px-3 py-1 border border-zinc-800 backdrop-blur-sm">RESEARCH_LABS // 0.1%</span>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-32 border-y border-zinc-900 text-center px-8">
        <h3 className="font-headline-lg text-4xl text-white uppercase italic mb-8">EQUIP YOURSELF FOR THE INEVITABLE.</h3>
        <Link href="/shop" className="inline-block bg-[#C0FF00] text-black px-12 py-5 font-black uppercase tracking-widest hover:bg-white transition-colors duration-300">
           ACCESS_CATALOG
        </Link>
      </section>
    </main>
  );
}
