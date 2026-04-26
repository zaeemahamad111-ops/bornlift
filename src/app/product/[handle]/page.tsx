import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const resolvedParams = await params;
  const handle = resolvedParams.handle;
  
  const product = PRODUCTS.find(p => p.id === handle);
  
  if (!product) {
    notFound();
  }

  return (
    <main className="pt-24 md:pt-32 bg-black">
      <section className="grid grid-cols-12 gap-6 px-6 md:px-10 relative">
        <div className="absolute inset-0 grid-line-overlay opacity-20 pointer-events-none"></div>
        
        <div className="col-span-12 lg:col-span-7 space-y-12">
          <div className="relative group aspect-[4/5] bg-surface-container overflow-hidden border border-zinc-900">
            <img 
              alt={product.name} 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700" 
              src={product.image}
            />
            <div className="absolute top-[20%] right-[15%] group-hover:opacity-100 opacity-80 transition-opacity">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-[#C0FF00]"></div>
                <span className="font-label-technical text-label-technical text-[#C0FF00]">V-01 BREATHABLE MATRIX</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square bg-surface-container-low border border-zinc-900">
              <img alt="Detail view" className="w-full h-full object-cover grayscale opacity-60" src={product.image} />
            </div>
            <div className="aspect-square bg-surface-container-low border border-zinc-800 flex flex-col items-center justify-center p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-[#C0FF00] mb-4">air</span>
              <h4 className="font-headline-md text-headline-md mb-2 text-white">THERMO-FLOW</h4>
              <p className="font-body-md text-body-md text-zinc-400">Intelligent heat dissipation through mapped ventilation zones.</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:pl-12 lg:sticky lg:top-40 h-fit space-y-12 z-10">
          <div className="space-y-4">
            <span className="font-label-technical text-label-technical text-zinc-500 tracking-widest uppercase">// PRODUCT_CODE: {product.id.toUpperCase()}</span>
            <h1 className="font-display-hero text-5xl sm:text-7xl md:text-[80px] leading-none text-white tracking-tighter uppercase italic">{product.name}</h1>
            <div className="flex items-baseline space-x-4">
              <span className="font-headline-md text-headline-md text-[#C0FF00]">${product.price}.00</span>
              <span className="font-label-technical text-label-technical text-zinc-500 uppercase">VAT EXCL // READY TO SHIP</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="font-body-lg text-body-lg text-zinc-300 leading-relaxed max-w-md">
              {product.tag}. Engineered for sub-zero to high-intensity threshold training. Utilizing our proprietary hyper-static weave for zero-drag movement and instantaneous moisture expulsion.
            </p>
            <div className="space-y-4">
              <label className="font-label-technical text-label-technical text-zinc-500 block uppercase">SELECT SIZE</label>
              <div className="grid grid-cols-4 gap-2">
                {['XS-01', 'S-02', 'M-03', 'L-04'].map((size) => (
                  <button key={size} className="border border-zinc-800 py-3 font-label-technical text-label-technical hover:border-[#C0FF00] hover:text-[#C0FF00] transition-colors text-zinc-500">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <Link href="/cart" className="block w-full">
              <button className="w-full bg-[#C0FF00] text-black font-['Lexend'] font-black py-6 text-xl tracking-tighter uppercase flex items-center justify-center space-x-4 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                <span>ADD TO CART</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </Link>
            <p className="mt-4 font-label-annotation text-label-annotation text-zinc-500 italic text-center uppercase tracking-widest text-[9px]">Discounts applied at checkout.</p>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-12 border-t border-zinc-900">
            <div className="px-3 py-1 border border-zinc-800 font-label-technical text-[10px] text-zinc-400">84% RECYCLED POLY</div>
            <div className="px-3 py-1 border border-zinc-800 font-label-technical text-[10px] text-zinc-400">16% REACTIVE ELASTANE</div>
            <div className="px-3 py-1 border border-zinc-800 font-label-technical text-[10px] text-zinc-400">ANTI-MICROBIAL COATING</div>
            <div className="px-3 py-1 border border-zinc-800 font-label-technical text-[10px] text-zinc-400">0.2s EVAP RATE</div>
          </div>
        </div>
      </section>

      <section className="mt-40 px-10 bg-zinc-950 py-32 border-y border-zinc-900 relative overflow-hidden">
        <div className="grid grid-cols-12 gap-6 max-w-[1440px] mx-auto">
          <div className="col-span-12 mb-16 flex items-center justify-between">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-2 uppercase">SPECIFICATIONS</h2>
              <div className="w-24 h-1 bg-[#C0FF00]"></div>
            </div>
            <div className="text-right font-label-technical text-label-technical text-zinc-500 hidden md:block uppercase">
              DOCUMENT_ID: BL-{product.id.split('-')[0]}<br/>
              CLASSIFICATION: PERFORMANCE_WEAR
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-8 font-label-technical text-zinc-400 z-10 relative">
            <div className="p-6 border border-zinc-800 bg-black hover:border-[#C0FF00]/50 transition-colors duration-500">
              <h3 className="text-[#C0FF00] mb-4 text-sm font-bold">// PRODUCT PERFORMANCE</h3>
              <p className="leading-relaxed text-xs">Utilizing targeted muscular stabilization to reduce oscillation during high-impact explosive movements. The fabric mimics fascia elasticity to enhance proprioceptive feedback loops.</p>
              <div className="mt-6 flex justify-between items-end">
                <span className="text-[32px] text-white">92.4%</span>
                <span className="text-[10px] uppercase opacity-50">Stability Rating</span>
              </div>
            </div>
            <div className="p-6 border border-zinc-800 bg-black hover:border-[#C0FF00]/50 transition-colors duration-500">
              <h3 className="text-[#C0FF00] mb-4 text-sm font-bold">// MOISTURE WICKING</h3>
              <p className="leading-relaxed text-xs">Capillary action fibers transport sweat from the skin surface to the outer layer within 200ms. Surface tension is minimized for ultra-fast evaporation in extreme climates.</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 relative">
            <div className="border border-zinc-800 bg-black h-full p-8 relative overflow-hidden group">
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-2 h-2 bg-[#C0FF00] rounded-full animate-pulse"></div>
                <span className="text-[10px] font-label-technical text-zinc-500 uppercase">Technical Analysis</span>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between h-full gap-12">
                <div className="w-full md:w-1/2 aspect-square relative border border-zinc-900 flex items-center justify-center bg-zinc-950">
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                    <div className="border-r border-b border-zinc-900"></div><div className="border-r border-b border-zinc-900"></div><div className="border-r border-b border-zinc-900"></div><div className="border-b border-zinc-900"></div>
                    <div className="border-r border-b border-zinc-900"></div><div className="border-r border-b border-zinc-900"></div><div className="border-r border-b border-zinc-900"></div><div className="border-b border-zinc-900"></div>
                    <div className="border-r border-b border-zinc-900"></div><div className="border-r border-b border-zinc-900"></div><div className="border-r border-b border-zinc-900"></div><div className="border-b border-zinc-900"></div>
                    <div className="border-r border-zinc-900"></div><div className="border-r border-zinc-900"></div><div className="border-r border-zinc-900"></div><div></div>
                  </div>
                  <span className="material-symbols-outlined text-[120px] text-zinc-800 scale-150 group-hover:scale-110 group-hover:text-[#C0FF00]/20 transition-all duration-700">biotech</span>
                  <div className="absolute bottom-4 left-4 font-label-technical text-[10px] text-zinc-600 uppercase">FIG_A: FABRIC STRUCTURE</div>
                </div>
                <div className="w-full md:w-1/2 space-y-6 z-10">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-label-technical text-zinc-500 uppercase">
                      <span>Aerodynamics</span>
                      <span>98/100</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-900">
                      <div className="bg-[#C0FF00] h-full w-[98%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-label-technical text-zinc-500 uppercase">
                      <span>Thermal Reg.</span>
                      <span>84/100</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-900">
                      <div className="bg-[#C0FF00] h-full w-[84%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-label-technical text-zinc-500 uppercase">
                      <span>Durability Index</span>
                      <span>MAX</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-900">
                      <div className="bg-[#C0FF00] h-full w-full"></div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="font-label-technical text-[11px] text-zinc-500 leading-relaxed italic uppercase">
                      *Testing conducted in 100% humidity environments with athletes at 90% peak VO2 max. No performance degradation observed over 500 wash cycles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 px-10 pb-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4 relative group overflow-hidden border border-zinc-900 aspect-square">
            <img 
              alt="STRUCTURE" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-75 transition-all duration-700" 
              src={product.image}
            />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-headline-md text-headline-md text-white uppercase">ARCHITECTURAL SEAMS</h3>
              <p className="font-label-technical text-label-technical text-zinc-400">DESIGNED TO MOVE WITH YOU</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1 border border-zinc-900 p-12 flex flex-col justify-end min-h-[400px] hover:border-[#C0FF00]/50 transition-colors duration-500 group">
              <span className="material-symbols-outlined text-4xl text-[#C0FF00] mb-6 group-hover:scale-125 transition-transform duration-500 origin-left">security</span>
              <h4 className="font-headline-md text-headline-md text-white mb-2 uppercase">DURABILITY SHIELD</h4>
              <p className="font-body-md text-body-md text-zinc-400 leading-relaxed">Reinforced contact zones for floor-work and heavy resistance sessions. Engineered for longevity.</p>
            </div>
            <div className="col-span-2 md:col-span-1 bg-[#C0FF00] p-12 flex flex-col justify-between min-h-[400px] hover:bg-white transition-colors duration-500 cursor-pointer">
              <div className="font-black text-6xl text-black tracking-tighter opacity-10 italic">0.1%</div>
              <div>
                <h4 className="font-headline-md text-headline-md text-black mb-2 uppercase">PREMIUM_GEAR</h4>
                <p className="font-body-md text-body-md text-black/80 font-bold">Specifically crafted for the top 0.1% of performance athletes who demand the absolute best.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
