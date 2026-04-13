import React from "react";
import { Navbar } from "@/app/components/navbar";
import { Hero } from "@/app/components/hero";
import { Benefits } from "@/app/components/benefits";
import { Showcase } from "@/app/components/showcase";
import { Categories } from "@/app/components/categories";
import { Testimonials } from "@/app/components/testimonials";
import { RegistrationForm } from "@/app/components/registration";
import { Footer } from "@/app/components/footer";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#D4AF37]/30 selection:text-[#2D3A27]">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Showcase />
        <Categories />
        <Testimonials />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
