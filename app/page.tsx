"use client";

import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Pillars from "@/components/sections/Pillars";
import Benefits from "@/components/sections/Benefits";
import Plans from "@/components/sections/Plans";
import SocialProof from "@/components/sections/SocialProof";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";


export default function LandingPage() {
  const accent = "#E30613";

  useEffect(() => {
    // Reveal on scroll logic
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
        }
      });
    }, { threshold: .12 });
    
    els.forEach(el => io.observe(el));
    
    return () => io.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Header accent={accent} />
      
      <Hero headline="main" accent={accent} />
      
      <About accent={accent} />
      
      <Pillars accent={accent} />
      
      <Benefits accent={accent} />
      
      <Plans accent={accent} />
      
      <SocialProof accent={accent} />
      
      <Gallery accent={accent} />
      
      <Contact accent={accent} />
      
      <Footer accent={accent} />
    </main>
  );
}
