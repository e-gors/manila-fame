import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion } from "motion/react";

const categories = [
  {
    title: "Furniture & Home",
    description:
      "Bespoke furniture and home accents showcasing tropical modernism and artisanal weaving.",
    image:
      "https://images.unsplash.com/photo-1719396922410-8f65005b77b1?q=80&w=800",
    tags: ["Furniture", "Lighting", "Decor"],
  },
  {
    title: "Fashion & Accessories",
    description:
      "Contemporary jewelry and wearables inspired by heritage textiles and intricate metalwork.",
    image:
      "https://images.unsplash.com/photo-1763194984371-d03d713a7eaa?q=80&w=800",
    tags: ["Jewelry", "Apparel", "Footwear"],
  },
  {
    title: "Gifts & Lifestyle",
    description:
      "Uniquely crafted gifts and stationery that embody the playful and creative spirit of Manila.",
    image:
      "https://images.unsplash.com/photo-1761062404254-8e19c9e77d6f?q=80&w=800",
    tags: ["Gifts", "Holiday", "Eco-Lifestyle"],
  },
];

export function Categories() {
  return (
    <section id="categories" className="py-24 bg-[#F3EFE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#C2A888] mb-4 font-bold">
              Curated Showcase
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#2D3A27]">
              Event Categories
            </h3>
          </div>
          <p className="text-muted-foreground max-w-sm pb-1">
            Explore a meticulously curated selection of products designed for
            the modern global marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-[2rem] overflow-hidden border border-[#D4AF37]/10 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A27]/80 via-transparent to-transparent opacity-60" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl font-serif mb-2">{category.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {category.description}
                </p>
                <button className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest inline-flex items-center group/btn">
                  Explore Category
                  <span className="ml-2 w-8 h-px bg-[#D4AF37] group-hover:w-12 transition-all duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
