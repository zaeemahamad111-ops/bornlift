"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "SHOP", href: "/shop" },
    { name: "GALLERY", href: "/gallery" },
    { name: "PHILOSOPHY", href: "/philosophy" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-md border-b border-zinc-900 flex justify-between items-center px-6 md:px-8 py-6">
        <Link href="/" className="text-2xl font-black text-[#C0FF00] tracking-tighter uppercase italic hover:scale-105 transition-transform duration-300">
          BornLift
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="group font-['Lexend'] uppercase tracking-[0.2em] text-[10px] font-bold text-white/70 hover:text-[#C0FF00] transition-all relative">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C0FF00] group-hover:w-full transition-all"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6 text-[#C0FF00]">
          <Link href="/cart" className="relative hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute -top-2 -right-2 bg-[#C0FF00] text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full">3</span>
          </Link>
          <button className="hidden sm:block hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined">person</span>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-black transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-8 text-center">
           <div className="absolute inset-0 grid-blueprint opacity-20 pointer-events-none"></div>
           {links.map((link, idx) => (
             <Link 
               key={link.href} 
               href={link.href}
               onClick={() => setIsMenuOpen(false)}
               className={`font-display-hero text-4xl uppercase italic tracking-tighter text-white hover:text-[#C0FF00] transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
               style={{ transitionDelay: `${idx * 100}ms` }}
             >
               {link.name}
             </Link>
           ))}
           <div className="mt-12 space-y-4">
              <p className="font-label-technical text-zinc-600 text-[10px] tracking-[0.4em] uppercase">// SECURE_UPLINK</p>
              <div className="flex gap-6 justify-center">
                 <button className="w-12 h-12 border border-zinc-900 rounded-full flex items-center justify-center text-zinc-500 hover:text-[#C0FF00] hover:border-[#C0FF00] transition-all">
                    <span className="material-symbols-outlined text-sm">public</span>
                 </button>
                 <button className="w-12 h-12 border border-zinc-900 rounded-full flex items-center justify-center text-zinc-500 hover:text-[#C0FF00] hover:border-[#C0FF00] transition-all">
                    <span className="material-symbols-outlined text-sm">share</span>
                 </button>
              </div>
           </div>
        </div>
      </div>
    </>
  );
}
