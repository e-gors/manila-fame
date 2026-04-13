import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion } from "motion/react";

const exhibitors = [
  {
    name: "Nature’s Legacy",
    category: "Sustainable Home",
    image:
      "https://images.unsplash.com/photo-1719396922410-8f65005b77b1?q=80&w=600",
    product: "Recycled Stone Vessel",
  },
  {
    name: "Vito Selma",
    category: "Contemporary Furniture",
    image:
      "https://images.unsplash.com/photo-1766603636517-3f97705186fe?q=80&w=600",
    product: "Wave Coffee Table",
  },
  {
    name: "Zacarias 1925",
    category: "Fashion Accessories",
    image:
      "https://images.unsplash.com/photo-1644307961128-8893c3951815?q=80&w=600",
    product: "Hand-woven Monolith Bag",
  },
  {
    name: "Schema",
    category: "Lighting Design",
    image:
      "https://images.unsplash.com/photo-1761062404254-8e19c9e77d6f?q=80&w=600",
    product: "Highwire Pendant Lamp",
  },
  {
    name: "Joanique",
    category: "Fine Jewelry",
    image:
      "https://images.unsplash.com/photo-1763194984371-d03d713a7eaa?q=80&w=600",
    product: "Mask Collection Earrings",
  },
  {
    name: "Lulu HK",
    category: "Lifestyle Gifts",
    image:
      "https://images.unsplash.com/photo-1768102946689-d491066c74a7?q=80&w=600",
    product: "Artisanal Stationery Set",
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-[#C2A888] mb-4 font-bold">
            The Exhibitor List
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#2D3A27] mb-6">
            A Taste of Excellence
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Preview the quality and variety of craftsmanship awaiting you at the
            event.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {exhibitors.map((exhibitor, index) => (
            <motion.div
              key={exhibitor.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-all duration-500">
                <ImageWithFallback
                  src={exhibitor.image}
                  alt={exhibitor.product}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-2">
                <span className="text-[10px] uppercase tracking-widest text-[#C2A888] font-bold block mb-1">
                  {exhibitor.category}
                </span>
                <h4 className="text-xl font-serif text-[#2D3A27] group-hover:text-[#D4AF37] transition-colors">
                  {exhibitor.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-1 italic">
                  Featured: {exhibitor.product}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
