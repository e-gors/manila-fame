import React from "react";
import { Users, TrendingUp, Leaf, Star } from "lucide-react";
import { motion } from "motion/react";

const benefitPoints = [
  {
    icon: <Users className="w-10 h-10" />,
    title: "Source Directly",
    description:
      "Meet and build lasting relationships with hundreds of top Philippine exporters and direct manufacturers.",
    accent: "#3A86FF", // Blue
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Discover New Trends",
    description:
      "Be the first to see the latest collections and design innovations emerging from Southeast Asia.",
    accent: "#D4AF37", // Gold
  },
  {
    icon: <Leaf className="w-10 h-10" />,
    title: "Sustainable & Ethical",
    description:
      "Find products with a story, made with sustainable local materials and ethical, fair-trade practices.",
    accent: "#2D3A27", // Green
  },
  {
    icon: <Star className="w-10 h-10" />,
    title: "Exclusive Access",
    description:
      "Gain entry to special showcases, industry-leading talks, and elite networking events with design peers.",
    accent: "#F47C7C", // Coral
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-[#C2A888] mb-4 font-bold">
            Value Proposition
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#2D3A27]">
            Why Visit Manila FAME?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefitPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white border border-[#F3EFE9] hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300"
            >
              <div
                className="mb-8 inline-flex p-4 rounded-2xl"
                style={{
                  backgroundColor: `${point.accent}10`,
                  color: point.accent,
                }}
              >
                {point.icon}
              </div>
              <h4 className="text-xl font-bold text-[#2D3A27] mb-4">
                {point.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>

              {/* Decorative accent dot */}
              <div
                className="absolute top-6 right-6 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: point.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
