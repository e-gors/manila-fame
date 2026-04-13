import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-[#C2A888] mb-4 font-semibold">
              The Story Behind the Design
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-primary">
              Where Soulful Artistry <br />
              <span className="italic text-[#6D4C3D]">Meets Global Scale</span>
            </h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                For the design-savvy professional, Manila FAME isn't just a
                trade show—it's a discovery of{" "}
                <span className="text-primary font-medium">
                  narrative-driven design
                </span>
                . We connect architects and interior designers with artisans who
                spend months perfecting a single weave, ensuring every piece in
                your project has a unique cultural lineage.
              </p>
              <p>
                Our collections are curated for{" "}
                <span className="text-primary font-medium">
                  high-end lifestyle brands
                </span>{" "}
                and sourcing agents who value traceability, quality, and the
                human hands behind the luxury.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <span className="block text-4xl font-serif text-[#D4AF37]">
                  3,000+
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                  Unique SKUs
                </span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-[#F47C7C]">
                  Bespoke
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                  Custom Capabilities
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768102946689-d491066c74a7?q=80&w=1200"
                alt="Filipino Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay Accent */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent -z-10 rounded-2xl" />
            <div className="absolute -top-8 -right-8 w-48 h-48 border border-primary/10 -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
