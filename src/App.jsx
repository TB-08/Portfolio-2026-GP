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

    // Global listener for smooth anchor scroll via Lenis
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, {
            offset: -20, // Small comfortable offset from the top
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="portfolio-shell min-h-screen overflow-x-clip bg-[#01040A] text-white">
      <GlowBackground />
      <Header />
      <main>
        <HeroSection />
        <div style={{ zoom: "0.85" }}>
          <div className="optimize-render">
            <AboutSection />
          </div>
          <div className="optimize-render">
            <ContentsSection />
          </div>
          <div className="optimize-render">
            <PortfolioShowcase />
          </div>
          <div className="optimize-render">
            <WorkProcessSection />
          </div>
          <div className="optimize-render">
            <ContactSection />
          </div>
        </div>
      </main>
      <div style={{ zoom: "0.85" }}>
        <div className="optimize-render">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
