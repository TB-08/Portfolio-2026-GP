import { useEffect } from "react";
import Lenis from "lenis";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ContentsSection from "./components/ContentsSection";
import Footer from "./components/Footer";
import GlowBackground from "./components/GlowBackground";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PortfolioShowcase from "./components/PortfolioShowcase";
import WorkProcessSection from "./components/WorkProcessSection";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      syncTouch: true, // Optimizes touch scrolling
      syncTouchLerp: 0.1, // Smooth touch interpolation
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="portfolio-shell min-h-screen overflow-x-clip bg-[#01040A] text-white">
      <GlowBackground />
      <Header />
      <main>
        <HeroSection />
        <div className="optimize-render" style={{ zoom: "0.85" }}>
          <AboutSection />
          <ContentsSection />
          <PortfolioShowcase />
          <WorkProcessSection />
          <ContactSection />
        </div>
      </main>
      <div className="optimize-render" style={{ zoom: "0.85" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
