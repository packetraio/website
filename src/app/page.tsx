import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Products } from "@/components/Products";
import { Features } from "@/components/Features";
import { WhyPacketra } from "@/components/WhyPacketra";
import { TechStack } from "@/components/TechStack";
import { Timeline } from "@/components/Timeline";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Products />
        <Features />
        <WhyPacketra />
        <TechStack />
        <Timeline />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
