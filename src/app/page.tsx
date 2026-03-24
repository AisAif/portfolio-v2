"use client";
import Navbar from "@/components/modules/Navbar";
import Hero from "@/components/modules/Hero";
import Services from "@/components/modules/Services";
import Portfolio from "@/components/modules/Portfolio";
import Experience from "@/components/modules/Experiences";
import CTA from "@/components/modules/CTA";
import Footer from "@/components/modules/Footer";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <div className="bg-[#fefff0] min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Experience />
        <CTA />
        <Footer />
      </div>
    </ReactLenis>
  );
}

