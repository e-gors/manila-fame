import React from "react";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Manila FAME is the only show where I find truly unique, hand-crafted pieces that haven't been seen by everyone else yet. The quality of Filipino design is world-class.",
    author: "Elena Rossi",
    company: "Lux Interiors",
    country: "Italy",
  },
  {
    quote:
      "As a sourcing agent for high-end retail, the ability to meet makers directly and see their process is invaluable. I found three new sustainable suppliers this year.",
    author: "David Chen",
    company: "Global Lifestyle Group",
    country: "USA",
  },
  {
    quote:
      "The curation at Manila FAME is outstanding. It captures both the cultural richness of the Philippines and a very modern, export-ready aesthetic.",
    author: "Sophie Dubois",
    company: "Maison & Style",
    country: "France",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#2D3A27] text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F47C7C]/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-[#C2A888] mb-4 font-bold">
            Social Proof
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">
            Voice of Our Buyers
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm flex flex-col h-full hover:bg-white/10 transition-colors"
            >
              <div className="mb-8 text-[#D4AF37]">
                <Quote size={40} fill="currentColor" fillOpacity={0.1} />
              </div>
              <p className="text-lg text-white/90 font-light italic leading-relaxed mb-10 flex-grow">
                "{t.quote}"
              </p>
              <div className="border-t border-white/10 pt-8">
                <h4 className="font-bold text-white text-lg">{t.author}</h4>
                <p className="text-[#C2A888] text-sm font-medium">
                  {t.company}
                </p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">
                  {t.country}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand logos section - simplified for now */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <p className="text-center text-white/30 text-xs uppercase tracking-[0.3em] mb-10 font-bold">
            Trusted by global design leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale contrast-200">
            {/* Using text representations as logo placeholders */}
            <span className="text-2xl font-serif tracking-widest">VOGUE</span>
            <span className="text-2xl font-serif tracking-widest uppercase">
              Maison Objet
            </span>
            <span className="text-2xl font-serif tracking-widest">ELLE</span>
            <span className="text-2xl font-serif tracking-widest">
              ARCHDIGEST
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
