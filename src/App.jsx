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
    // Handle initial route hash or hash changes for native mobile/touch
    const scrollToHash = (hash, lenisInstance) => {
      if (!hash) return;
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        if (lenisInstance) {
          lenisInstance.scrollTo(targetElement, {
            offset: -20,
            duration: 1.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const isMobileOrTouch =
      window.matchMedia("(max-width: 1023px)").matches || "ontouchstart" in window;

    if (isMobileOrTouch) {
      if (window.location.hash) {
        setTimeout(() => scrollToHash(window.location.hash, null), 150);
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
    });

    let rafId;
    function raf(time) {
      if (!document.hidden) {
        lenis.raf(time);
      }
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Initial load hash scroll
    if (window.location.hash) {
      setTimeout(() => scrollToHash(window.location.hash, lenis), 200);
    }

    // Global listener for smooth anchor scroll via Lenis on desktop
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          window.history.pushState(null, "", href);
          window.dispatchEvent(new HashChangeEvent("hashchange"));
          lenis.scrollTo(targetElement, {
            offset: -20,
            duration: 1.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    const handleHashChange = () => {
      scrollToHash(window.location.hash, lenis);
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="portfolio-shell min-h-screen overflow-x-clip bg-[#01040A] text-white">
      <GlowBackground />
      <Header />
      <main>
        <HeroSection />
        <div className="desktop-zoom-wrapper">
          <AboutSection />
          <ContentsSection />
          <PortfolioShowcase />
          <WorkProcessSection />
          <ContactSection />
        </div>
      </main>
      <div className="desktop-zoom-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
