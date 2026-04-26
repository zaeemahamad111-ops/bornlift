import Link from "next/link";

export default function About() {
  return (
    <main className="pt-32 min-h-screen bg-black">
      <section className="px-8 max-w-6xl mx-auto mb-20">
        <span className="font-label-technical text-[#C0FF00] tracking-widest uppercase mb-4 block">// MISSION_PROFILE</span>
        <h1 className="font-display-hero text-7xl md:text-9xl text-white uppercase italic tracking-tighter mb-12">ORIGIN_STORY</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="font-body-lg text-2xl text-white leading-tight">
              BornLift was forged in the intersection of elite athletics and advanced material science.
            </p>
            <p className="font-body-md text-zinc-400 leading-relaxed">
              We started as a skunkworks project in 2021, focused on one goal: creating a second skin that doesn't just protect, but enhances. Our founders—a team of former aerospace engineers and decathletes—reimagined compression gear from the molecular level up.
            </p>
            <div className="pt-8 border-t border-zinc-900">
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-4xl font-black text-white">42+</span>
                    <p className="font-label-technical text-[10px] text-zinc-500 uppercase tracking-widest mt-2">PROPRIETARY WEAVES</p>
                  </div>
                  <div>
                    <span className="text-4xl font-black text-white">10k+</span>
                    <p className="font-label-technical text-[10px] text-zinc-500 uppercase tracking-widest mt-2">FIELD TEST HOURS</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="relative aspect-square border border-zinc-800 bg-zinc-950 overflow-hidden">
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQr_EYhlj0NDX-0AeHw3cDkdrXsH5IuwBJxiPBzDv4wXycx_T53SkugvSUIRfFVu4oUlQcQQsO580PJ6tF3212mNGHst1n-5YQDuOZ7R-umJwqIjl4LktstCNkG1Rw8HaxMyw4u65IGNWGZQhYFaCW8T9FnS6PWO8gAEUEc8Utw5loCczDcp1SeLGeggon7_YxbWAEegvisZ21At4hLzJ_AEnZzGZPGkRg-gOMmaqR7aI9HIltIYpelYAAptXBTanrBymTmDHRAx8" 
               alt="R&D LAB" 
               className="w-full h-full object-cover grayscale opacity-50"
             />
             <div className="absolute inset-0 grid-blueprint opacity-10"></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-32 border-y border-zinc-900">
         <div className="px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
               <span className="text-[#C0FF00] material-symbols-outlined text-4xl">precision_manufacturing</span>
               <h3 className="text-white font-headline-md uppercase">PRECISION_TECH</h3>
               <p className="text-zinc-500 text-sm leading-relaxed">Laser-cut seams and ultrasonic bonding eliminate friction points entirely.</p>
            </div>
            <div className="space-y-4">
               <span className="text-[#C0FF00] material-symbols-outlined text-4xl">biotech</span>
               <h3 className="text-white font-headline-md uppercase">BIO_MAPPING</h3>
               <p className="text-zinc-500 text-sm leading-relaxed">Ventilation zones placed exactly where the human body dissipates heat most.</p>
            </div>
            <div className="space-y-4">
               <span className="text-[#C0FF00] material-symbols-outlined text-4xl">eco</span>
               <h3 className="text-white font-headline-md uppercase">RECYCLED_CORE</h3>
               <p className="text-zinc-500 text-sm leading-relaxed">80% of our materials are derived from reclaimed oceanic plastics and industrial waste.</p>
            </div>
         </div>
      </section>
    </main>
  );
}
