import Link from "next/link";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "URBAN_ELITE",
    description: "NIGHT_TRAINING // HONG KONG SECTOR",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArUXDQze2CMUvMpHmXx077pJ2n9I7GtuHHsKUzSppqFDPyQ4GHV1-Z_osI3csXfMOfWWVVstlCZCXOwOAsSM1T4fdQyTvrX1tvyfihQOrVPZt_zwlzcCmlQWWAmP4oFsMKKFswyhccAm4mdtiSmBlO6X39h5ji2N8G4RBrO3iZt_Cpm98_DlIG19YL9vAn7ItD3PwlDZBMyax67QB0cvwBdKBNlBgtUcNX54w8JwUmcUIvXItywcg17K_xkWWFKTfLAUUZwIS4Un4"
  },
  {
    id: 2,
    title: "VOID_STRETCH",
    description: "EXPLOSIVE_POWER // R&D CENTER",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP9zimxaMGrtuj1rq7LSfye-5uvvmiPP8q4gNvNW58tkFXRJd4eWgaNTynfXQbSypXjAPPsSUyrGHNeaE7AB1AT-gAfeJV_dVDVkbEuMUSMJXdu7IZycd-JhVXb744T_gqfAU5LlqSNx1uUzm7tlT4upHZAR-dhCJgfOqUvfCJRWwOWEuzILAqSvUFuo9nFq4Btrvc7nj0y0Lbd3t8RwjeBpigkcIjhjnSfS6kWFalOwe9EWx18USgITIRdImUaT-GGHAImkAApkc"
  },
  {
    id: 3,
    title: "OXYGEN_CORE",
    description: "HIGH_ALTITUDE // ANDES RANGE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQdiCiz6K-TPpcpH360V_jbFK5WHWYh99nA2dRLQnVZlRC4A0j_DIqKgTaPQDaXGBj41_T-Yl5Uyw1vDpvIcVMBceSXu9uSPnzkDH7NcOQgnTSxl_jHWoV5XdgSlZirHE6dn0qGydM2aXzX0fGCRXkkIMNeYFgwuWd0VD0BGh28lCFcbKAB7LKV_R0GXLjj4ONegbr9SJ0p2iwcwAz-QAosYH99BMPWwJtnR6UT4l9j3ch_QLGkc80D7v4iy6ujrZr-WUU3auDw6c"
  },
  {
    id: 4,
    title: "THERMO_SHIFT",
    description: "COLD_EXPOSURE // NORDIC SECTOR",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL5PemMba1hUc8XuYWgGD-WmxnfQblwSPwBXb0oa4a1KkjKCRbp0sVn_EaT108KBZjpg50Q8PWn8YcKmcAfF99uiA2RFPbkRoBshxKhqo4-Sx_Dx08E1TpYH0Fsvg5MK4904fiKBzyJo3KugRhX8beWt3Ag_Kre3Qsi5B9At1-8neOm7bdpowmrhmJuvCLL8XJRmSo63uFWUaD5foUfIwDWbb7u-EYF6HT8lmZgBezQ7EngQ0hHI5nyoWt0k8trptz7QPIfN3rxt8"
  },
  {
    id: 5,
    title: "KINETIC_FRAME",
    description: "AGILITY_DRILLS // UNDERGROUND_LAB",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBruoeIxucCMHUMUlgwIFrudAVyN6YJgi4r_Duq36PRQJjvBMLkyve6IlwkEfzvoQhykF0I9WYnkPlU3rexHXKMGLzF5aTwRGBl5K6SUjazzDB4NnFFRgY1V-R8dKl0A7ujphVteTZ1K94vySJtL0v3Z3X6geIaJmqjk7XQJXbRY9d2uNhEgwKuqpXYXVLdcw-wvS8ijRoRJU697zg6JGkPQ_aDDWi3fq6Nh1qdx04vK1BlIBPP0ATmF7H5dT-k1F9B_HIGW31ANxY"
  },
  {
    id: 6,
    title: "STEALTH_TACTIC",
    description: "DYNAMIC_MOVEMENT // INDUSTRIAL_CORE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChh_1jOc14LTF8VnyUPPwOkOt16TwNOFYCcCdpTdlKB3P9E0MQJaUPzItMJxoaZrvP3r0zYkFk8U-yoxpAK_AP-5JTBuCjo51ik-20cmeYptylzcEo0RoaGQJCyZ2MdETtHtvjNUJ0K9X6gTOZwO1Uv0RUupkJP4aS2TViau2a3ZFhOZtp2rT8m3DaTPfkkXeG45wquTSYV2lWZ7kYuRTqWc1xmOwCXZ21WmfgWk7nuBfQNoG56owN7YQzzJH848FRQBG8r13QL98"
  }
];

export default function Gallery() {
  return (
    <main className="pt-32 min-h-screen bg-black pb-40">
      <section className="px-8 max-w-[1600px] mx-auto mb-16 text-center">
        <span className="font-label-technical text-[#C0FF00] tracking-widest uppercase mb-4 block">// FIELD_TEST_DATA</span>
        <h1 className="font-display-hero text-7xl md:text-8xl text-white uppercase italic tracking-tighter mb-4">GALLERY</h1>
        <p className="font-label-technical text-zinc-500 uppercase tracking-[0.2em]">EQUIPMENT IN DYNAMIC_ENVIRONMENTS</p>
      </section>

      <section className="px-4 md:px-8 max-w-[1800px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
           {GALLERY_ITEMS.map((item) => (
             <div key={item.id} className="relative group overflow-hidden break-inside-avoid mb-4 border border-zinc-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                   <h3 className="font-headline-md text-white text-xl uppercase mb-1 tracking-widest">{item.title}</h3>
                   <p className="font-label-technical text-[#C0FF00] text-[10px] tracking-widest uppercase">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-12 h-[1px] bg-[#C0FF00]"></div>
                </div>
             </div>
           ))}
        </div>
      </section>

      <section className="mt-40 text-center px-8">
         <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-headline-lg text-4xl text-white uppercase italic">WANNA BE FEATURED?</h2>
            <p className="font-body-md text-zinc-500 leading-relaxed uppercase tracking-widest text-xs">
              UPLOAD YOUR LOADOUT TO INSTAGRAM WITH #BORNLIFT PROTOCOL FOR A CHANCE TO BE ARCHIVED IN OUR GALLERY.
            </p>
            <Link href="/contact" className="inline-block border border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
               JOIN_THE_ELITE
            </Link>
         </div>
      </section>
    </main>
  );
}
