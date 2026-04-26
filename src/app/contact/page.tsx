import Link from "next/link";

export default function Contact() {
  return (
    <main className="pt-32 min-h-screen bg-black">
      <section className="px-8 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <span className="font-label-technical text-zinc-500 tracking-widest uppercase mb-4 block">// GET IN TOUCH</span>
            <h1 className="font-display-hero text-7xl text-white uppercase italic tracking-tighter mb-8">CONTACT_US</h1>
            <p className="font-body-lg text-zinc-400 mb-12">
              For technical support, order inquiries, or sponsorship requests, please contact us using the form below.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center flex-none">
                    <span className="material-symbols-outlined text-[#C0FF00]">mail</span>
                 </div>
                  <div>
                    <h4 className="text-white font-label-technical uppercase text-xs tracking-widest mb-1">EMAIL</h4>
                    <p className="text-zinc-500 font-body-md text-sm">SUPPORT@BORNLIFT.TECH</p>
                  </div>
              </div>
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center flex-none">
                    <span className="material-symbols-outlined text-[#C0FF00]">location_on</span>
                 </div>
                  <div>
                    <h4 className="text-white font-label-technical uppercase text-xs tracking-widest mb-1">HEADQUARTERS</h4>
                    <p className="text-zinc-500 font-body-md text-sm">TECH DISTRICT<br/>SAN FRANCISCO, CA</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950/40 border border-zinc-900 p-10 backdrop-blur-md">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="font-label-technical text-[10px] text-zinc-600 uppercase tracking-widest">FULL NAME</label>
                <input type="text" className="w-full bg-black border border-zinc-800 focus:border-[#C0FF00] focus:ring-0 text-white p-4 font-label-technical" placeholder="YOUR NAME" />
              </div>
              <div className="space-y-2">
                <label className="font-label-technical text-[10px] text-zinc-600 uppercase tracking-widest">EMAIL ADDRESS</label>
                <input type="email" className="w-full bg-black border border-zinc-800 focus:border-[#C0FF00] focus:ring-0 text-white p-4 font-label-technical" placeholder="YOUR EMAIL" />
              </div>
              <div className="space-y-2">
                <label className="font-label-technical text-[10px] text-zinc-600 uppercase tracking-widest">INQUIRY_TYPE</label>
                <select className="w-full bg-black border border-zinc-800 focus:border-[#C0FF00] focus:ring-0 text-white p-4 font-label-technical appearance-none">
                  <option>TECHNICAL SUPPORT</option>
                  <option>ORDER INQUIRY</option>
                  <option>SPONSORSHIP</option>
                  <option>OTHER</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-technical text-[10px] text-zinc-600 uppercase tracking-widest">MESSAGE</label>
                <textarea rows={4} className="w-full bg-black border border-zinc-800 focus:border-[#C0FF00] focus:ring-0 text-white p-4 font-label-technical resize-none" placeholder="YOUR MESSAGE..."></textarea>
              </div>
              <button className="w-full bg-[#C0FF00] text-black font-black py-5 uppercase tracking-widest hover:bg-white transition-all duration-300">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
