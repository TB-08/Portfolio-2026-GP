import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ContentsSection from "./components/ContentsSection";
import Footer from "./components/Footer";
import GlowBackground from "./components/GlowBackground";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LogoSection from "./components/LogoSection";
import OtherProjectsSection from "./components/OtherProjectsSection";
import SocialMediaSection from "./components/SocialMediaSection";
import WebsiteUIUXSection from "./components/WebsiteUIUXSection";

function App() {
  return (
    <div className="portfolio-shell min-h-screen overflow-x-clip bg-[#01040A] text-white">
      <GlowBackground />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ContentsSection />
        <SocialMediaSection />
        <LogoSection />
        <WebsiteUIUXSection />
        <OtherProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
