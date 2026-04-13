import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden pt-20">
      {/* Background Image - Capturing the essence of craftsmanship */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761062404254-8e19c9e77d6f?q=80&w=2000"
          alt="Handcrafted Ceramics and Decor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1 mb-6 border border-[#D4AF37]/50 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold backdrop-blur-md text-[#D4AF37] bg-black/20">
            October 2026 | World Trade Center Metro Manila
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1]">
            Discover the Soul of <br />
            <span className="italic text-[#D4AF37]">Filipino Design</span>
          </h1>
          <p className="text-lg md:text-2xl mb-12 text-white/80 leading-relaxed font-light max-w-2xl">
            Manila FAME is Asia's premier lifestyle and design trade show.
            Source unique, handcrafted pieces from the Philippines' most
            innovative artisans and sustainable manufacturers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#register"
              className="group inline-flex items-center justify-center bg-[#D4AF37] text-[#2D3A27] px-10 py-5 rounded-full text-lg font-bold hover:bg-[#C2A888] transition-all shadow-2xl"
            >
              Get Your Free Buyer Pass
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center border border-white/30 text-white backdrop-blur-md px-10 py-5 rounded-full text-lg font-medium hover:bg-white/10 transition-all"
            >
              Why Visit Manila FAME?
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical label */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-6">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 rotate-180 [writing-mode:vertical-lr]">
          Est. 1983 • Manila Philippines
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />
      </div>
    </div>
  );
}
