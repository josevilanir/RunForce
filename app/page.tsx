import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Audience from "@/components/sections/Audience";
import Benefits from "@/components/sections/Benefits";
import Pillars from "@/components/sections/Pillars";
import Plans from "@/components/sections/Plans";
import SocialProof from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Audience />
        <Benefits />
        <Pillars />
        <Plans />
        <SocialProof />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
