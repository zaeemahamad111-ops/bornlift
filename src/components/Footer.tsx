import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 mt-20 bg-black dark:bg-black relative overflow-hidden">
      <div className="grid grid-cols-12 gap-8 px-8 py-24 max-w-full relative z-10">
        
        {/* Massive Branding Banner */}
        <div className="col-span-12 mb-12 border-b border-zinc-900 pb-12">
          <div className="text-[14vw] font-black text-zinc-900 leading-none select-none opacity-50 uppercase tracking-tighter">BORNLIFT</div>
        </div>

        {/* Footer Content Columns */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between pr-12">
          <div className="space-y-6">
            <h5 className="font-label-technical text-label-technical text-white uppercase text-xl italic tracking-tighter">BORNLIFT</h5>
            <p className="font-body-md text-zinc-500 max-w-sm">Premium technical equipment engineered for the highest level of human performance.</p>
          </div>

          <div className="mt-16">
            <p className="font-['Lexend'] font-light tracking-widest text-[10px] leading-relaxed text-zinc-600 uppercase">
              ©2024 BORNLIFT PERFORMANCE EQUIPMENT.<br/>ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 pt-8 lg:pt-0 border-t lg:border-t-0 border-zinc-900">
          <div className="flex flex-col gap-6">
            <span className="font-label-technical text-label-technical text-white uppercase tracking-widest">COLLECTIONS</span>
            <Link href="/shop" className="font-['Lexend'] font-light tracking-widest text-[10px] leading-relaxed text-zinc-500 hover:text-[#C0FF00] transition-all duration-300 ease-in-out">SHOP_ALL</Link>
            <Link href="/shop/compression" className="font-['Lexend'] font-light tracking-widest text-[10px] leading-relaxed text-zinc-500 hover:text-[#C0FF00] transition-all duration-300 ease-in-out">COMPRESSION</Link>
            <Link href="/shop/layers" className="font-['Lexend'] font-light tracking-widest text-[10px] leading-relaxed text-zinc-500 hover:text-[#C0FF00] transition-all duration-300 ease-in-out">LAYERS</Link>
          </div>

          <div className="flex flex-col gap-6">
            <span className="font-label-technical text-label-technical text-white uppercase tracking-widest">SITEMAP</span>
            <Link href="/about" className="font-['Lexend'] font-light tracking-widest text-[10px] leading-relaxed text-zinc-500 hover:text-[#C0FF00] transition-all duration-300 ease-in-out">OUR STORY</Link>
            <Link href="/gallery" className="font-['Lexend'] font-light tracking-widest text-[10px] leading-relaxed text-zinc-500 hover:text-[#C0FF00] transition-all duration-300 ease-in-out">GALLERY</Link>
            <Link href="/philosophy" className="font-['Lexend'] font-light tracking-widest text-[10px] leading-relaxed text-zinc-500 hover:text-[#C0FF00] transition-all duration-300 ease-in-out">PHILOSOPHY</Link>
            <Link href="/contact" className="font-['Lexend'] font-light tracking-widest text-[10px] leading-relaxed text-zinc-500 hover:text-[#C0FF00] transition-all duration-300 ease-in-out">CONTACT US</Link>
          </div>

          <div className="flex flex-col gap-6">
            <span className="font-label-technical text-label-technical text-white uppercase tracking-widest">LEGAL</span>
            <Link href="#" className="font-['Lexend'] font-light tracking-widest text-[10px] leading-relaxed text-zinc-500 hover:text-[#C0FF00] transition-all duration-300 ease-in-out">PRIVACY POLICY</Link>
            <Link href="#" className="font-['Lexend'] font-light tracking-widest text-[10px] leading-relaxed text-zinc-500 hover:text-[#C0FF00] transition-all duration-300 ease-in-out">TERMS & CONDITIONS</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
