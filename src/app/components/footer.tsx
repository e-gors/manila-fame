import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#2D3A27] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-2xl font-serif tracking-tighter">
              MANILA{" "}
              <span className="text-[#C2A888] font-light italic">FAME</span>
            </span>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Asia's premier lifestyle and design event. Celebrating{" "}
              <span className="text-[#D4AF37]">
                artisanal Filipino craftsmanship
              </span>{" "}
              and creativity since 1983.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/50 hover:text-[#F47C7C] transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-[#D4AF37] transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-[#3A86FF] transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 font-serif text-[#C2A888]">
              Quick Links
            </h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About the Show
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="hover:text-white transition-colors"
                >
                  Sourcing Categories
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="hover:text-white transition-colors"
                >
                  Buyer Incentives
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  className="hover:text-white transition-colors"
                >
                  Export Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 font-serif text-[#C2A888]">
              Contact Manila
            </h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 text-[#D4AF37]" />
                <span>
                  CITEM, Golden Shell Pavilion, Roxas Blvd, Pasay City,
                  Philippines
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-[#F47C7C]" />
                <span>+63 2 8831 2201</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-[#3A86FF]" />
                <span>manilafame@citem.com.ph</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 font-serif text-[#C2A888]">
              Stay Informed
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe for the latest design trends and sourcing updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm flex-grow focus:outline-none focus:border-[#C2A888]/40"
              />
              <button className="bg-[#C2A888] text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#D4AF37] transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">
          <p>© 2026 CITEM Philippines. Exporting Filipino Excellence.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
