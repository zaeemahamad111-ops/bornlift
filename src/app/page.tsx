import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[921px] w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-60">
          <img className="w-full h-full object-cover" alt="cinematic close-up of athlete" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSXACbAOlDR6reh_NDB3h0pOEfAmA4SMe-tejToIM-VHJwdrAOFJC_z9hqcM3OcvPHOFC56A5lZnwJiYJAoOmawU-4WOCBwTPJEHcicOcUADKDT19wyxkp4q6VkI-Gi7-2JNazUcsnbHTSd4bQZz1Sw0jXJ0TtaHaWR7cqRYXIyAxR63YECiHN-pHYPcB2jkFnCsfrktJN5vD7HYXDfxskkZSX8g75RZ1CqlHBn64E70S1letlVwT7ORSYXn9Sv7TlstMnAy8yERs"/>
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #333 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        <div className="relative z-20 text-center px-6">
          <h1 className="font-display-hero text-6xl sm:text-8xl md:text-display-hero uppercase mb-4 text-white mix-blend-difference tracking-tighter">BORNLIFT</h1>
          <p className="font-label-technical text-[10px] md:text-label-technical text-zinc-400 mb-8 md:mb-12 tracking-[0.2em] md:tracking-[0.5em] uppercase">// PERFORMANCE PROTOCOL FOR THE 0.1%</p>
          <Link href="/shop" className="inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-5 bg-[#C0FF00] text-black font-headline-md text-xs md:text-sm rounded-full tracking-widest hover:scale-105 active:scale-95 transition-transform duration-300 font-bold uppercase">
            EXECUTE_COMMAND
          </Link>
        </div>
        <div className="absolute left-8 bottom-24 rotate-[-90deg] origin-left z-20 hidden lg:block">
          <span className="font-label-technical text-label-technical text-[#C0FF00]">SYSTEM_STATUS: ACTIVE</span>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-black py-4 border-y border-zinc-900 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-8 md:gap-12 items-center">
          <span className="font-label-technical text-[10px] md:text-label-technical text-white/50 tracking-[0.3em]">BEYOND HUMAN LIMITS — ZERO DISTRACTION — COMPRESSION LABS — ARCHITECTURAL INTEGRITY — </span>
          <span className="font-label-technical text-[10px] md:text-label-technical text-white/50 tracking-[0.3em]">BEYOND HUMAN LIMITS — ZERO DISTRACTION — COMPRESSION LABS — ARCHITECTURAL INTEGRITY — </span>
        </div>
      </div>

      {/* Product Slider - ELITE ARMOR */}
      <section className="bg-black py-20 md:py-32 overflow-hidden">
        <div className="px-6 md:px-8 mb-12 md:mb-20 flex justify-between items-end">
          <div>
            <span className="font-label-technical text-label-technical text-[#C0FF00] mb-4 block">01 // THE SELECTION</span>
            <h2 className="font-headline-lg text-4xl md:text-headline-lg text-white uppercase italic">ELITE_ARMOR</h2>
          </div>
          <div className="hidden md:block font-label-technical text-label-technical text-zinc-500 text-right uppercase">
            SWIPE TO EXPLORE_PROTOTYPES<br/>TECH_VERSION 4.2.0
          </div>
        </div>
        
        <div className="flex overflow-x-auto custom-scrollbar gap-6 md:gap-8 px-6 md:px-8 pb-12 snap-x snap-mandatory">
          <div className="flex-none w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] snap-start relative group cursor-pointer">
            <Link href="/product/oxygen-core">
              <div className="relative overflow-hidden aspect-[3/4] mb-6 border border-zinc-900 group-hover:border-[#C0FF00]/50 transition-colors">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="product shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVHC-_rmQ1Ysjw0CNW7LhaPphYcHl1XLn0CgUZ7TQ4Qs2cJ7juAJBGWujSYDWHDtmifvC0l0cdVP-zEG-sdY5aF71IUjiJcvQXKOqRwkM6VAc6CkhBeftZhTCcpVpf7mGepQEmxu74giLZESW5en9atxSGi-GKZbFG8WGncW1o8bHVuc4jkD5QDNyAnqNWrasyIx9vdnztDj3jWtFYJoEowO3sBlI4JNs2UVy319FiLYDpHNkJ_qOrsbDtewPK7FFHJQJzyyzroIk"/>
              </div>
            </Link>
            <div className="flex justify-between items-start">
              <div className="max-w-[70%]">
                <h3 className="font-headline-md text-lg md:text-xl text-white mb-1 uppercase">KINETIC_SHELL V1</h3>
                <p className="font-label-annotation text-label-annotation text-zinc-500 uppercase tracking-widest text-[8px] md:text-[10px]">ADVANCED COMPRESSION LAYER</p>
              </div>
              <span className="font-headline-md text-base md:text-lg text-[#C0FF00]">$185</span>
            </div>
          </div>

          <div className="flex-none w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] snap-start relative group cursor-pointer">
            <Link href="/product/void-pant">
              <div className="relative overflow-hidden aspect-[3/4] mb-6 border border-zinc-900 group-hover:border-[#C0FF00]/50 transition-colors">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="action shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP9zimxaMGrtuj1rq7LSfye-5uvvmiPP8q4gNvNW58tkFXRJd4eWgaNTynfXQbSypXjAPPsSUyrGHNeaE7AB1AT-gAfeJV_dVDVkbEuMUSMJXdu7IZycd-JhVXb744T_gqfAU5LlqSNx1uUzm7tlT4upHZAR-dhCJgfOqUvfCJRWwOWEuzILAqSvUFuo9nFq4Btrvc7nj0y0Lbd3t8RwjeBpigkcIjhjnSfS6kWFalOwe9EWx18USgITIRdImUaT-GGHAImkAApkc"/>
              </div>
            </Link>
            <div className="flex justify-between items-start">
              <div className="max-w-[70%]">
                <h3 className="font-headline-md text-lg md:text-xl text-white mb-1 uppercase">VOID_PANT 02</h3>
                <p className="font-label-annotation text-label-annotation text-zinc-500 uppercase tracking-widest text-[8px] md:text-[10px]">FOUR-WAY STRETCH</p>
              </div>
              <span className="font-headline-md text-base md:text-lg text-[#C0FF00]">$210</span>
            </div>
          </div>
          
          <div className="flex-none w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] snap-start relative group cursor-pointer">
            <Link href="/product/synapse-tank">
              <div className="relative overflow-hidden aspect-[3/4] mb-6 border border-zinc-900 group-hover:border-[#C0FF00]/50 transition-colors">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQdiCiz6K-TPpcpH360V_jbFK5WHWYh99nA2dRLQnVZlRC4A0j_DIqKgTaPQDaXGBj41_T-Yl5Uyw1vDpvIcVMBceSXu9uSPnzkDH7NcOQgnTSxl_jHWoV5XdgSlZirHE6dn0qGydM2aXzX0fGCRXkkIMNeYFgwuWd0VD0BGh28lCFcbKAB7LKV_R0GXLjj4ONegbr9SJ0p2iwcwAz-QAosYH99BMPWwJtnR6UT4l9j3ch_QLGkc80D7v4iy6ujrZr-WUU3auDw6c"/>
              </div>
            </Link>
            <div className="flex justify-between items-start">
              <div className="max-w-[70%]">
                <h3 className="font-headline-md text-lg md:text-xl text-white mb-1 uppercase">SYNAPSE_TANK</h3>
                <p className="font-label-annotation text-label-annotation text-zinc-500 uppercase tracking-widest text-[8px] md:text-[10px]">MOISTURE-WICKING TECH</p>
              </div>
              <span className="font-headline-md text-base md:text-lg text-[#C0FF00]">$95</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE TECHNOLOGY */}
      <section className="bg-black py-20 md:py-32 px-6 md:px-8 border-y border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1600px] mx-auto items-center">
          <div className="col-span-1 lg:col-span-6 relative aspect-square md:aspect-[4/3] group overflow-hidden border border-zinc-800">
             <img src="/gymkha-hero.png" alt="Performance Technology" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" />
             <div className="absolute inset-0 grid-blueprint opacity-30 pointer-events-none"></div>
             <div className="absolute top-6 left-6">
               <span className="font-label-technical text-[#C0FF00] tracking-[0.1em] md:tracking-[0.2em] bg-black/80 px-4 py-2 border border-zinc-800 backdrop-blur-md text-[10px] md:text-xs uppercase">TECH_READOUT // X-90</span>
             </div>
          </div>
          <div className="col-span-1 lg:col-span-6 space-y-10 md:space-y-12">
            <div>
              <span className="font-label-technical text-label-technical text-[#C0FF00] mb-4 block uppercase">02 // RESEARCH & DEVELOPMENT</span>
              <h2 className="font-headline-lg text-4xl md:text-headline-lg text-white uppercase italic leading-[1.1]">ENGINEERED <br className="hidden md:block"/> ANATOMY</h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4 md:gap-6 items-start">
                <span className="text-[#C0FF00] font-label-technical mt-1">01</span>
                <div>
                  <h4 className="font-headline-md text-lg md:text-xl text-white mb-2 uppercase">Zero-Friction Architecture</h4>
                  <p className="font-body-md text-sm md:text-body-md text-zinc-400">Ultrasonic welded seams eliminate chafing during high-frequency movements, ensuring the garment acts as a secondary epidermis.</p>
                </div>
              </div>
              
              <div className="flex gap-4 md:gap-6 items-start">
                <span className="text-[#C0FF00] font-label-technical mt-1">02</span>
                <div>
                  <h4 className="font-headline-md text-lg md:text-xl text-white mb-2 uppercase">Thermodynamic Regulation</h4>
                  <p className="font-body-md text-sm md:text-body-md text-zinc-400">Phase-change materials embedded at the molecular level absorb, store, and release heat to maintain optimal core temperature.</p>
                </div>
              </div>
            </div>
            
            <Link href="/shop" className="inline-block mt-4 border-b-2 border-[#C0FF00] pb-1 text-[#C0FF00] font-label-technical hover:text-white hover:border-white transition-colors duration-300 uppercase text-xs">
              EXPLORE THE SCIENCE
            </Link>
          </div>
        </div>
      </section>

      {/* THE ORIGIN_STORY */}
      <section className="px-6 md:px-8 py-20 md:py-32 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-1 lg:col-span-8 h-[500px] md:h-[600px] border border-zinc-900 relative overflow-hidden group cursor-pointer">
            <img className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2s]" alt="gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQeSWqoSzQM6Hs8oXkOAGfmMe6V__JK6iii0_7VgJxkq_67c7tioA8IaVQvq4dchqsSIfv91m2-4GOAeC3L6Efe4NiQA5mo5Su6X9vDwsI4GY4_BKt_ITygxrYQBfy-k511z4Xr8BbaUNfwXs7Ho-K_UOBNL8XMSmDTBAOL_ZUo0X5NFzFPQOmGTr4Xxn4yDI1L9FSouOCqLAWiRCt7sl2Fu5QiqArU05vP0wZQn0TNTlekTcFrqi3zAjsHpFSCrwXQkdHYDGrTMM"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 max-w-xl">
              <span className="font-label-technical text-label-technical text-[#C0FF00] mb-4 block uppercase">03 // PHILOSOPHY</span>
              <h4 className="font-headline-lg text-3xl md:text-headline-lg text-white mb-4 italic uppercase leading-none">THE ORIGIN_STORY</h4>
              <p className="font-body-lg text-base md:text-body-lg text-zinc-300 leading-relaxed">Forged in the darkness of elite training facilities. We don't build fashion. We engineer tactical equipment for high-output human performance.</p>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4 grid grid-rows-2 gap-6">
            <div className="bg-zinc-900/30 border border-zinc-900 p-8 flex flex-col justify-between">
              <span className="material-symbols-outlined text-[#C0FF00] text-4xl">monitoring</span>
              <div>
                <h5 className="font-headline-md text-xl md:text-headline-md text-white mb-2 uppercase">BIOMETRIC_STITCH</h5>
                <p className="font-label-annotation text-label-annotation text-zinc-500 uppercase text-[9px] md:text-[10px]">REAL-TIME FEEDBACK INTEGRATION READY.</p>
              </div>
            </div>
            <Link href="/shop" className="bg-[#C0FF00] p-8 flex flex-col justify-between hover:bg-white transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-black text-4xl group-hover:rotate-45 transition-transform">bolt</span>
              <div>
                <h5 className="font-headline-md text-xl md:text-headline-md text-black mb-2 uppercase">JOIN_THE_ELITE</h5>
                <p className="font-label-annotation text-label-annotation text-black/60 uppercase text-[9px] md:text-[10px]">EXCLUSIVE PROTOCOL ACCESS.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* JOIN THE ELITE FULL CTA */}
      <section className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden border-t border-zinc-900">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuArUXDQze2CMUvMpHmXx077pJ2n9I7GtuHHsKUzSppqFDPyQ4GHV1-Z_osI3csXfMOfWWVVstlCZCXOwOAsSM1T4fdQyTvrX1tvyfihQOrVPZt_zwlzcCmlQWWAmP4oFsMKKFswyhccAm4mdtiSmBlO6X39h5ji2N8G4RBrO3iZt_Cpm98_DlIG19YL9vAn7ItD3PwlDZBMyax67QB0cvwBdKBNlBgtUcNX54w8JwUmcUIvXItywcg17K_xkWWFKTfLAUUZwIS4Un4" alt="Join Elite" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-[2px]"></div>
        
        <div className="relative z-20 text-center max-w-3xl px-8">
           <span className="material-symbols-outlined text-[#C0FF00] text-4xl md:text-5xl mb-6">fingerprint</span>
           <h2 className="font-headline-lg text-4xl md:text-7xl lg:text-headline-lg text-white uppercase italic leading-none mb-6">UNYIELDING <br/> PERFORMANCE</h2>
           <p className="font-body-lg text-sm md:text-body-lg text-zinc-300 mb-8 md:mb-10 leading-relaxed">Stop wearing activewear. Start equipping armor. Join the 0.1% of athletes who demand more from their gear.</p>
           <Link href="/shop" className="inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-5 bg-white text-black font-headline-md text-xs md:text-sm rounded-full tracking-widest hover:bg-[#C0FF00] hover:scale-105 active:scale-95 transition-all duration-300 font-bold uppercase">
              ACQUIRE GEAR
           </Link>
        </div>
      </section>
    </main>
  );
}
