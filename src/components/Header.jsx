import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Profile", href: "#about" },
  { label: "Projects", href: "#selected-works" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setHasScrolled(window.scrollY > 16);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${hasScrolled || isMenuOpen
          ? "border-white/10 bg-[#01040A]/78 shadow-[0_18px_70px_rgba(1,4,10,0.38)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
        }`}
    >
      <div className="page-wrap flex h-[4.7rem] items-center justify-between gap-4">
        <a className="group flex items-center" href="#top" aria-label="Gia Phát portfolio home">
          <img src="./images/logo.png" alt="Gia Phát Logo" className="h-10 w-auto object-contain brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100 sm:h-12" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              className="text-base font-semibold text-[#C8D4EA]/90 transition hover:text-white"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="blue-button hidden sm:inline-flex" href="#contact">
            Contact
            <ArrowUpRight size={16} />
          </a>
          <button
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/12 bg-white/[0.05] text-white lg:hidden"
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav
          className="page-wrap grid gap-2 border-t border-white/10 pb-4 pt-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              className="rounded-lg px-3 py-3 text-[#C8D4EA] transition hover:bg-white/[0.07] hover:text-white"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="blue-button mt-1 inline-flex justify-center sm:hidden" href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
            <ArrowUpRight size={16} />
          </a>
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
