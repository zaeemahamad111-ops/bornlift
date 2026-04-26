export const products = [
  {
    id: "prod_1",
    handle: "obsidian-kettlebell",
    title: "Full Sleeve Compression Tee",
    description: "Engineered with advanced moisture-wicking technology and a tailored athletic fit. Keeps you cool under extreme pressure.",
    price: 45.00,
    images: ["/gymkha-prod-white.png"],
    category: "Apparel",
    features: ["Moisture-wicking fabric", "Athletic tapered fit", "Anti-odor technology"]
  },
  {
    id: "prod_2",
    handle: "apex-protein-isolate",
    title: "Oversized Pump Cover",
    description: "Premium heavy-weight cotton construction with a drop shoulder design. Built for extreme workouts and casual rest days.",
    price: 55.00,
    images: ["/gymkha-prod-green.png"],
    category: "Apparel",
    features: ["100% Heavyweight Cotton", "Drop-shoulder fit", "Pre-shrunk"]
  },
  {
    id: "prod_3",
    handle: "stealth-performance-tee",
    title: "Stealth Performance Tee",
    description: "The ultimate training tee. Lightweight, breathable, and designed to move with your body.",
    price: 40.00,
    images: ["/gymkha-hero.png"],
    category: "Apparel",
    features: ["4-way stretch", "Breathable mesh panels"]
  },
  {
    id: "prod_4",
    handle: "titan-lifting-belt",
    title: "Pro Ribbed Tank",
    description: "A classic ribbed training tank top built to withstand your most grueling workouts.",
    price: 35.00,
    images: ["/gymkha-prod-white.png"],
    category: "Apparel",
    features: ["Ribbed texture", "Deep armholes"]
  }
];

export function getProduct(handle: string) {
  return products.find(p => p.handle === handle);
}
