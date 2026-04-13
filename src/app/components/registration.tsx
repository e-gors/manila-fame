import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  company: string;
  country: string;
  buyerType: string;
};

export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    toast.success(
      "Registration successful! Check your email for your digital pass.",
    );
    reset();
  };

  return (
    <section id="register" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2D3A27] rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(45,58,39,0.3)] border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content Side */}
            <div className="p-12 lg:p-20 flex flex-col justify-center text-white relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1768102946689-d491066c74a7?q=80&w=1200')] opacity-5 mix-blend-overlay" />

              <h2 className="text-xs uppercase tracking-[0.4em] text-[#C2A888] mb-4 font-bold relative z-10">
                Exclusive Opportunity
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight relative z-10">
                Register for Your <br />
                <span className="italic text-[#D4AF37]">Free Buyer Pass</span>
              </h3>
              <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-md relative z-10">
                Manila FAME is free for qualified trade buyers. Register today
                for seamless entry, priority concierge access, and a digital
                exhibitor directory.
              </p>

              <ul className="space-y-5 relative z-10">
                {[
                  "Seamless Entry & Digital Badge",
                  "Exclusive Exhibitor Networking",
                  "Access to Design Concierge",
                  "VVIP Lounge Access for Top Buyers",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-white/90 font-medium"
                  >
                    <CheckCircle2 className="text-[#D4AF37] w-6 h-6 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Form Side */}
            <div className="bg-white p-12 lg:p-20">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#2D3A27] mb-3">
                    Full Name
                  </label>
                  <input
                    {...register("fullName", { required: "Name is required" })}
                    className="w-full px-6 py-4 rounded-2xl bg-[#F3EFE9] border border-transparent focus:border-[#C2A888] focus:bg-white transition-all outline-none text-[#2D3A27]"
                    placeholder="e.g. Alexander Hamilton"
                  />
                  {errors.fullName && (
                    <p className="text-[#F47C7C] text-xs mt-2">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#2D3A27] mb-3">
                      Professional Email
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email",
                        },
                      })}
                      className="w-full px-6 py-4 rounded-2xl bg-[#F3EFE9] border border-transparent focus:border-[#C2A888] focus:bg-white transition-all outline-none text-[#2D3A27]"
                      placeholder="alexander@firm.com"
                    />
                    {errors.email && (
                      <p className="text-[#F47C7C] text-xs mt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#2D3A27] mb-3">
                      Company Name
                    </label>
                    <input
                      {...register("company", {
                        required: "Company is required",
                      })}
                      className="w-full px-6 py-4 rounded-2xl bg-[#F3EFE9] border border-transparent focus:border-[#C2A888] focus:bg-white transition-all outline-none text-[#2D3A27]"
                      placeholder="Design Studio Inc."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#2D3A27] mb-3">
                      Country / Region
                    </label>
                    <select
                      {...register("country", {
                        required: "Country is required",
                      })}
                      className="w-full px-6 py-4 rounded-2xl bg-[#F3EFE9] border border-transparent focus:border-[#C2A888] focus:bg-white transition-all outline-none text-[#2D3A27] appearance-none cursor-pointer"
                    >
                      <option value="">Select Origin</option>
                      <option value="PH">Philippines</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="JP">Japan</option>
                      <option value="FR">France</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#2D3A27] mb-3">
                      Professional Role
                    </label>
                    <select
                      {...register("buyerType", {
                        required: "Role is required",
                      })}
                      className="w-full px-6 py-4 rounded-2xl bg-[#F3EFE9] border border-transparent focus:border-[#C2A888] focus:bg-white transition-all outline-none text-[#2D3A27] appearance-none cursor-pointer"
                    >
                      <option value="">Select Role</option>
                      <option value="Wholesaler">Wholesaler / Importer</option>
                      <option value="Retailer">
                        Retailer / Boutique Owner
                      </option>
                      <option value="Interior Designer">
                        Interior Designer / Architect
                      </option>
                      <option value="Sourcing Agent">Sourcing Agent</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={isSubmitting}
                  className="w-full bg-[#2D3A27] text-white py-5 rounded-2xl text-lg font-bold hover:bg-[#1A2417] transition-all disabled:opacity-50 mt-4 shadow-xl border border-white/5 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    "Processing Application..."
                  ) : (
                    <>
                      Register for Free Now
                      <CheckCircle2 size={20} className="text-[#D4AF37]" />
                    </>
                  )}
                </motion.button>
                <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                  Registration takes less than 2 minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
