import Link from "next/link";

export default function Cart() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-8 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:justify-between md:items-end border-b border-zinc-900 pb-8 gap-6">
          <div>
            <h1 className="font-headline-lg text-4xl md:text-headline-lg uppercase text-white mb-2 italic">CART_PROTOCOL</h1>
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#C0FF00]"></span>
              <p className="font-label-technical text-label-technical text-white/40 tracking-[0.3em] uppercase">ACTIVE_SESSIONS: 02</p>
            </div>
          </div>
          <Link href="/shop" className="text-zinc-500 font-label-technical hover:text-[#C0FF00] transition-colors underline underline-offset-8">CONTINUE_SHOPPING</Link>
        </div>

        <div className="grid grid-cols-12 gap-12">
          {/* Cart Items List */}
          <section className="col-span-12 lg:col-span-8 space-y-4">
            <div className="grid grid-cols-12 px-6 py-4 border border-zinc-900 bg-zinc-950 text-zinc-600 font-label-technical text-[10px] uppercase tracking-widest hidden md:grid">
              <div className="col-span-6">SPECIMEN_DETAILS</div>
              <div className="col-span-2 text-center">QUANTITY</div>
              <div className="col-span-2 text-right">UNIT_PRICE</div>
              <div className="col-span-2 text-right">TOTAL</div>
            </div>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="group relative grid grid-cols-12 items-center gap-6 p-6 border border-zinc-900 hover:border-[#C0FF00]/30 transition-all bg-zinc-950/20">
                <div className="col-span-12 md:col-span-6 flex gap-6 items-center">
                  <div className="w-24 aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800">
                    <img className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700" alt="item" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtRquK6orU6JBRH6tFuHe5ZV13zZmNtp-OMmScjyir3ouj87f2JKAGegcMY0WY-OBWvWft6P3neWfGv99EY2jPf5dWkIMxe2A007jONqpueblWJbtTh7t5QaPzHpOoBBM28wLWs0RuRx-UUlImBrzS8SRgfl-_9kjjz1vi8u_cCT-_imdxIS0uVQALipLUNWbzuAnhBSOOxudT_ab6wm4g_2ZVOgevYu2f7q5NpPawj0bcSS4woK-4XitYbVc9m2W9pP6NMBQeqFs"/>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-white uppercase group-hover:text-[#C0FF00] transition-colors"><Link href="/product/kinetic-shell-v1">Kinetic Shell v2</Link></h3>
                    <p className="font-label-technical text-[10px] text-zinc-500 mt-1 tracking-widest">SIZE: L // COL: ONYX</p>
                    <button className="text-zinc-600 hover:text-red-500 font-label-technical text-[10px] uppercase mt-4 block transition-colors">REMOVE_ENTRY</button>
                  </div>
                </div>
                
                <div className="col-span-4 md:col-span-2 flex justify-center">
                   <div className="flex items-center border border-zinc-800 h-10">
                      <button className="px-3 hover:text-[#C0FF00] transition-colors">-</button>
                      <span className="px-4 font-label-technical text-white text-sm">01</span>
                      <button className="px-3 hover:text-[#C0FF00] transition-colors">+</button>
                   </div>
                </div>
                
                <div className="col-span-4 md:col-span-2 text-right font-label-technical text-zinc-500">
                  $185.00
                </div>
                
                <div className="col-span-4 md:col-span-2 text-right font-headline-md text-white text-lg">
                  $185.00
                </div>
              </div>

              {/* Item 2 */}
              <div className="group relative grid grid-cols-12 items-center gap-6 p-6 border border-zinc-900 hover:border-[#C0FF00]/30 transition-all bg-zinc-950/20">
                <div className="col-span-12 md:col-span-6 flex gap-6 items-center">
                  <div className="w-24 aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800">
                    <img className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700" alt="item" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBQjJv-FrPH5N1ufvONxPqnWZHwQBS8TKt_Yw-0f6KqAgbWsPDoipftLiOGD4-GmRJOp7lEv47P0bedLnB5MbMo5FBiFZxDXUwz4hydmPtrDAdLljshCmtUTneV86RuFyWsy2JZyPpMb59DlkORIvsxOzIpIFxvjtrUfddRzAOMS1byeG8PZys23HBkDfNuMTPA7SaXCVrgmRUTE-gwLvwwQJSb6tjOcfQS2VonrgdmfO1TLbQ8j4bo8v_KRv9QioVoNqVIMFtCUo"/>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-white uppercase group-hover:text-[#C0FF00] transition-colors"><Link href="/product/tech-cargo-04">Tech-Cargo 04</Link></h3>
                    <p className="font-label-technical text-[10px] text-zinc-500 mt-1 tracking-widest">SIZE: 32 // COL: PHANTOM</p>
                    <button className="text-zinc-600 hover:text-red-500 font-label-technical text-[10px] uppercase mt-4 block transition-colors">REMOVE_ENTRY</button>
                  </div>
                </div>
                
                <div className="col-span-4 md:col-span-2 flex justify-center">
                   <div className="flex items-center border border-zinc-800 h-10">
                      <button className="px-3 hover:text-[#C0FF00] transition-colors">-</button>
                      <span className="px-4 font-label-technical text-white text-sm">01</span>
                      <button className="px-3 hover:text-[#C0FF00] transition-colors">+</button>
                   </div>
                </div>
                
                <div className="col-span-4 md:col-span-2 text-right font-label-technical text-zinc-500">
                  $240.00
                </div>
                
                <div className="col-span-4 md:col-span-2 text-right font-headline-md text-white text-lg">
                  $240.00
                </div>
              </div>
            </div>
          </section>

          {/* Summary Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-6 h-fit sticky top-32">
            <div className="border border-zinc-800 p-8 bg-zinc-950/40 backdrop-blur-md">
              <h2 className="font-headline-md text-white uppercase mb-8 border-b border-zinc-900 pb-4 tracking-widest text-sm">// SUMMARY_DATA</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center">
                  <span className="font-label-technical text-[11px] text-zinc-500 uppercase">SUBTOTAL_VAL</span>
                  <span className="font-body-md text-white">$425.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label-technical text-[11px] text-zinc-500 uppercase">EST_SHIPPING</span>
                  <span className="font-body-md text-white">$12.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label-technical text-[11px] text-zinc-500 uppercase">TAXES</span>
                  <span className="font-body-md text-white">$34.15</span>
                </div>
                <div className="pt-6 border-t border-zinc-900 flex justify-between items-end">
                  <span className="font-headline-md text-[#C0FF00] text-lg uppercase tracking-widest">TOTAL</span>
                  <span className="font-headline-md text-white text-2xl tracking-tighter">$471.15</span>
                </div>
              </div>

              <Link href="/checkout" className="block w-full">
                <button className="w-full bg-[#C0FF00] text-black font-black py-6 uppercase tracking-widest hover:bg-white active:scale-[0.98] transition-all duration-300">
                  INITIATE_CHECKOUT
                </button>
              </Link>
            </div>

            <div className="p-6 border border-zinc-900 bg-zinc-950/20">
               <label className="font-label-technical text-[10px] text-zinc-600 mb-3 block tracking-widest">PROMO_PROTOCOL_KEY</label>
               <div className="relative">
                  <input 
                    type="text" 
                    placeholder="ENTER_CODE" 
                    className="w-full bg-transparent border-0 border-b border-zinc-800 focus:border-[#C0FF00] focus:ring-0 font-label-technical text-white uppercase py-2 placeholder:text-zinc-800"
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#C0FF00] font-label-technical text-[10px] hover:text-white transition-colors">APPLY</button>
               </div>
            </div>

            <div className="flex items-center gap-3 justify-center text-[10px] text-zinc-700 font-label-technical uppercase tracking-widest">
               <span className="material-symbols-outlined text-[14px]">lock</span>
               SECURE_ENCRYPTED_SESSION
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
