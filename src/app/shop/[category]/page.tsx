import Link from "next/link";
import { PRODUCTS } from "@/data/products";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = resolvedParams.category || "";
  const filteredProducts = PRODUCTS.filter(p => p.category === category);
  
  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ') : "Collection";

  return (
    <main className="pt-24 md:pt-32 min-h-screen bg-black">
      <section className="px-6 md:px-8 max-w-[1600px] mx-auto mb-10 md:mb-16">
        <span className="font-label-technical text-label-technical text-zinc-500 uppercase mb-4 block">// CATEGORY</span>
        <h1 className="font-headline-lg text-4xl md:text-headline-lg uppercase text-white mb-8 md:mb-12 italic">{categoryTitle}</h1>
        
        <div className="flex flex-wrap gap-3 md:gap-4 border-b border-zinc-900 pb-8">
          <Link href="/shop" className="px-4 md:px-6 py-2 border border-zinc-800 text-zinc-400 font-label-technical text-xs md:text-sm hover:border-white hover:text-white transition-all">SHOP_ALL</Link>
          <Link href="/shop/compression" className={`px-4 md:px-6 py-2 border font-label-technical text-xs md:text-sm transition-all ${category === 'compression' ? 'border-[#C0FF00] bg-[#C0FF00] text-black' : 'border-zinc-800 text-zinc-400 hover:border-white hover:text-white'}`}>COMPRESSION</Link>
          <Link href="/shop/layers" className={`px-4 md:px-6 py-2 border font-label-technical text-xs md:text-sm transition-all ${category === 'layers' ? 'border-[#C0FF00] bg-[#C0FF00] text-black' : 'border-zinc-800 text-zinc-400 hover:border-white hover:text-white'}`}>LAYERS</Link>
          <Link href="/shop/accessories" className={`px-4 md:px-6 py-2 border font-label-technical text-xs md:text-sm transition-all ${category === 'accessories' ? 'border-[#C0FF00] bg-[#C0FF00] text-black' : 'border-zinc-800 text-zinc-400 hover:border-white hover:text-white'}`}>ACCESSORIES</Link>
        </div>
      </section>

      <section className="px-8 max-w-[1600px] mx-auto pb-40">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col">
                <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden mb-6 border border-zinc-900 group-hover:border-[#C0FF00]/50 transition-colors">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="flex flex-col flex-grow">
                  <span className="font-label-technical text-[10px] text-zinc-500 mb-2 block tracking-widest uppercase">{product.tag}</span>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-lg text-white group-hover:text-[#C0FF00] transition-colors">{product.name}</h3>
                    <span className="font-label-technical text-sm text-[#C0FF00]">${product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-zinc-900 bg-zinc-950/30">
            <span className="material-symbols-outlined text-4xl text-zinc-800 mb-4">inventory_2</span>
            <p className="font-label-technical text-zinc-500 uppercase tracking-widest">No products found in this category.</p>
            <Link href="/shop" className="inline-block mt-8 text-[#C0FF00] font-label-technical underline underline-offset-8">BACK TO SHOP</Link>
          </div>
        )}
      </section>
    </main>
  );
}
