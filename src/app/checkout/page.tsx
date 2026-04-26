import Link from "next/link";

export default function Checkout() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-8 bg-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8 md:mb-12">
          <Link href="/cart" className="text-zinc-500 font-label-technical text-[10px] hover:text-[#C0FF00] transition-colors flex items-center gap-2 mb-4 uppercase tracking-widest">
             <span className="material-symbols-outlined text-[14px]">arrow_back</span>
             BACK_TO_CART
          </Link>
          <h1 className="font-headline-lg text-4xl md:text-headline-lg uppercase text-white tracking-tighter italic leading-none">CHECKOUT_TERMINAL</h1>
        </div>

        <div className="grid grid-cols-12 gap-16">
          {/* Checkout Form */}
          <section className="col-span-12 lg:col-span-7 space-y-12">
            {/* Shipping Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full border border-[#C0FF00] text-[#C0FF00] flex items-center justify-center font-label-technical text-xs">01</span>
                <h2 className="font-headline-md text-white uppercase tracking-widest text-lg">SHIPPING_DATA</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1 space-y-2">
                  <label className="font-label-technical text-[10px] text-zinc-600 uppercase tracking-widest">FIRST_NAME</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#C0FF00] focus:ring-0 text-white p-4 font-label-technical" />
                </div>
                <div className="col-span-1 space-y-2">
                  <label className="font-label-technical text-[10px] text-zinc-600 uppercase tracking-widest">LAST_NAME</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#C0FF00] focus:ring-0 text-white p-4 font-label-technical" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="font-label-technical text-[10px] text-zinc-600 uppercase tracking-widest">DESTINATION_ADDRESS</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#C0FF00] focus:ring-0 text-white p-4 font-label-technical" />
                </div>
                <div className="col-span-1 space-y-2">
                  <label className="font-label-technical text-[10px] text-zinc-600 uppercase tracking-widest">SECTOR_CITY</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#C0FF00] focus:ring-0 text-white p-4 font-label-technical" />
                </div>
                <div className="col-span-1 space-y-2">
                  <label className="font-label-technical text-[10px] text-zinc-600 uppercase tracking-widest">POSTAL_CODE</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#C0FF00] focus:ring-0 text-white p-4 font-label-technical" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full border border-[#C0FF00] text-[#C0FF00] flex items-center justify-center font-label-technical text-xs">02</span>
                <h2 className="font-headline-md text-white uppercase tracking-widest text-lg">PAYMENT_PROTOCOL</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 border border-[#C0FF00] bg-zinc-950/40 flex justify-between items-center cursor-pointer">
                   <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-[#C0FF00]">credit_card</span>
                      <span className="font-label-technical text-white text-sm">ENCRYPTED_CARD_GATEWAY</span>
                   </div>
                   <div className="w-4 h-4 rounded-full border-4 border-[#C0FF00]"></div>
                </div>
                <div className="p-6 border border-zinc-900 bg-zinc-950/20 flex justify-between items-center opacity-50 cursor-not-allowed">
                   <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-zinc-600">account_balance_wallet</span>
                      <span className="font-label-technical text-zinc-500 text-sm">CRYPTO_ASSET_TRANSFER</span>
                   </div>
                   <div className="w-4 h-4 rounded-full border border-zinc-800"></div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <div className="space-y-2">
                  <label className="font-label-technical text-[10px] text-zinc-600 uppercase tracking-widest">CARD_IDENTIFIER</label>
                  <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#C0FF00] focus:ring-0 text-white p-4 font-label-technical" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-1 space-y-2">
                    <label className="font-label-technical text-[10px] text-zinc-600 uppercase tracking-widest">EXPIRY_DATE</label>
                    <input type="text" placeholder="MM / YY" className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#C0FF00] focus:ring-0 text-white p-4 font-label-technical" />
                  </div>
                  <div className="col-span-1 space-y-2">
                    <label className="font-label-technical text-[10px] text-zinc-600 uppercase tracking-widest">SECURITY_KEY (CVV)</label>
                    <input type="text" placeholder="XXX" className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#C0FF00] focus:ring-0 text-white p-4 font-label-technical" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Order Summary Sidebar */}
          <aside className="col-span-12 lg:col-span-5">
            <div className="sticky top-32 border border-zinc-900 bg-zinc-950 p-8 space-y-8">
               <h3 className="font-headline-md text-white uppercase tracking-widest text-sm border-b border-zinc-900 pb-4">SPECIMEN_SUMMARY</h3>
               
               <div className="space-y-6 max-h-[300px] overflow-y-auto custom-scrollbar pr-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 overflow-hidden flex-none">
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtRquK6orU6JBRH6tFuHe5ZV13zZmNtp-OMmScjyir3ouj87f2JKAGegcMY0WY-OBWvWft6P3neWfGv99EY2jPf5dWkIMxe2A007jONqpueblWJbtTh7t5QaPzHpOoBBM28wLWs0RuRx-UUlImBrzS8SRgfl-_9kjjz1vi8u_cCT-_imdxIS0uVQALipLUNWbzuAnhBSOOxudT_ab6wm4g_2ZVOgevYu2f7q5NpPawj0bcSS4woK-4XitYbVc9m2W9pP6NMBQeqFs" alt="item" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-label-technical text-white text-xs uppercase">Kinetic Shell v2</h4>
                      <p className="font-label-technical text-[9px] text-zinc-500">SIZE: L // QTY: 01</p>
                    </div>
                    <span className="font-label-technical text-white text-xs">$185.00</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 overflow-hidden flex-none">
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBQjJv-FrPH5N1ufvONxPqnWZHwQBS8TKt_Yw-0f6KqAgbWsPDoipftLiOGD4-GmRJOp7lEv47P0bedLnB5MbMo5FBiFZxDXUwz4hydmPtrDAdLljshCmtUTneV86RuFyWsy2JZyPpMb59DlkORIvsxOzIpIFxvjtrUfddRzAOMS1byeG8PZys23HBkDfNuMTPA7SaXCVrgmRUTE-gwLvwwQJSb6tjOcfQS2VonrgdmfO1TLbQ8j4bo8v_KRv9QioVoNqVIMFtCUo" alt="item" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-label-technical text-white text-xs uppercase">Tech-Cargo 04</h4>
                      <p className="font-label-technical text-[9px] text-zinc-500">SIZE: 32 // QTY: 01</p>
                    </div>
                    <span className="font-label-technical text-white text-xs">$240.00</span>
                  </div>
               </div>

               <div className="space-y-4 pt-8 border-t border-zinc-900">
                 <div className="flex justify-between text-zinc-500 font-label-technical text-xs uppercase">
                    <span>SUBTOTAL</span>
                    <span>$425.00</span>
                 </div>
                 <div className="flex justify-between text-zinc-500 font-label-technical text-xs uppercase">
                    <span>SHIPPING_PRIORITY</span>
                    <span>$12.00</span>
                 </div>
                 <div className="flex justify-between text-zinc-500 font-label-technical text-xs uppercase">
                    <span>EST_TAXES</span>
                    <span>$34.15</span>
                 </div>
                 <div className="flex justify-between text-[#C0FF00] font-headline-md text-xl uppercase pt-4">
                    <span>TOTAL_DUE</span>
                    <span>$471.15</span>
                 </div>
               </div>

               <button className="w-full bg-[#C0FF00] text-black font-black py-6 uppercase tracking-widest hover:bg-white active:scale-[0.98] transition-all duration-300">
                  AUTHORIZE_PAYMENT
               </button>
               
               <p className="text-[9px] text-zinc-700 font-label-technical text-center uppercase tracking-widest italic leading-relaxed">
                  By authorizing, you agree to the BornLift Deployment Protocols and Data Encryption Standards.
               </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
