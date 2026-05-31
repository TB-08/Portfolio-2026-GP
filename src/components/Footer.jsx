import { designerProfile } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#01040A]/72">
      <div className="page-wrap flex flex-col gap-3 py-6 text-sm text-[#C8D4EA]/68 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {designerProfile.name}. All rights reserved.</p>
        <p className="font-mono text-[0.68rem] uppercase text-[#5D85DB]">
          Graphic Design Portfolio 2026
        </p>
      </div>
    </footer>
  );
}

export default Footer;
