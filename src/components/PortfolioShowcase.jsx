import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useMemo, useState, useRef } from "react";
import { portfolioCategories, portfolioShowcase } from "../data/portfolioShowcase";

const categoryThemes = {
  "social-media": {
    eyebrow: "Campaign / Social Content",
    description: "Bold food and digital-growth posts sequenced by warm reds and performance violet.",
    accent: "text-red-300",
    tag: "border-red-400/25 bg-red-500/10 text-red-100",
    surface: "showcase-media-social",
    active: "border-red-400/35 bg-red-500/16 text-white shadow-[0_0_32px_rgba(220,38,38,0.18)]",
  },
  logo: {
    eyebrow: "Identity / Marks",
    description: "Reduced identity marks presented with generous negative space and clear silhouette.",
    accent: "text-slate-100",
    tag: "border-white/18 bg-white/[0.08] text-white",
    surface: "showcase-media-logo",
    active: "border-white/24 bg-white/[0.1] text-white shadow-[0_0_32px_rgba(226,232,240,0.12)]",
  },
  "website-ui-ux": {
    eyebrow: "Digital Product / Responsive UI",
    description: "Interface concepts and a live TapGo marketplace project framed across real breakpoints.",
    accent: "text-cyan-200",
    tag: "border-cyan-300/25 bg-cyan-400/10 text-cyan-100",
    surface: "showcase-media-ui",
    active: "border-cyan-300/30 bg-cyan-400/12 text-white shadow-[0_0_32px_rgba(34,211,238,0.16)]",
  },

  credentials: {
    eyebrow: "Profile / Credentials",
    description: "Professional presence and verified learning milestones, kept separate from client work.",
    accent: "text-amber-100",
    tag: "border-amber-300/20 bg-amber-300/[0.08] text-amber-100",
    surface: "showcase-media-credentials",
    active: "border-amber-300/25 bg-amber-300/[0.1] text-white shadow-[0_0_32px_rgba(251,191,36,0.12)]",
  },
};

const categoryByAnchor = Object.fromEntries(
  portfolioCategories.map((category) => [category.anchor, category.id]),
);

function ProjectPreview({ work, onClose }) {
  const theme = categoryThemes[work.category];

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-[#01040A]/92 p-3 backdrop-blur-lg sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title} full image preview`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={onClose}
    >
      <motion.div
        className="relative flex max-h-[94svh] w-full max-w-[96rem] flex-col overflow-hidden rounded-3xl border border-white/12 bg-[#030817] p-3 shadow-2xl sm:p-5"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.985 }}
        transition={{ duration: 0.3 }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-[#01040A]/80 text-white backdrop-blur-md transition hover:border-white/30"
          type="button"
          aria-label="Close project preview"
          onClick={onClose}
        >
          <X size={18} />
        </button>
        <div className={`relative min-h-[62svh] w-full overflow-hidden rounded-2xl ${theme.surface}`}>
          <img
            className="absolute inset-0 block h-full w-full object-contain object-center p-3 sm:p-7"
            src={work.src}
            alt={work.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-1 pt-4">
          <div>
            <p className={`font-mono text-[0.68rem] uppercase tracking-[0.18em] ${theme.accent}`}>
              {work.categoryLabel} / {work.colorTag}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{work.title}</h3>
          </div>
          <span className="text-sm text-[#C8D4EA]/72">{work.tone}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function BrowserBar({ url }) {
  return (
    <div className="flex h-11 items-center gap-3 border-b border-white/[0.08] bg-[#090f1f]/92 px-4">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff6159]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbf2f]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#29cc42]" />
      <span className="ml-2 min-w-0 flex-1 truncate rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 font-mono text-[0.62rem] text-[#C8D4EA]/62">
        {url}
      </span>
    </div>
  );
}

function WebsiteFeature({ work, onPreview }) {
  const reduceMotion = useReducedMotion();
  const theme = categoryThemes[work.category];

  return (
    <motion.article
      layout
      className="website-feature col-span-full"
      initial={reduceMotion ? false : { opacity: 0, y: 60, rotateX: 15, scale: 0.95 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.95 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ transformPerspective: 1200, transformOrigin: "top center" }}
    >
      <div className="website-case-study overflow-hidden rounded-[1.7rem] border border-white/10">
        <div className="grid gap-5 px-5 pb-4 pt-5 sm:px-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className={`font-mono text-[0.68rem] uppercase tracking-[0.2em] ${theme.accent}`}>
              Website / Live UI Project
            </p>
            <h4 className="mt-3 text-2xl font-semibold text-white sm:text-4xl">{work.title}</h4>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#C8D4EA]/70 sm:text-base">
              {work.description}
            </p>
          </div>
          <a
            className="ghost-button inline-flex shrink-0"
            href={work.websiteUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Live Website
            <ExternalLink size={16} />
          </a>
        </div>
        <div className="tapgo-mockup-stage">
          <div className="tapgo-browser">
            <BrowserBar url={work.browserUrl || work.id} />
            <div className="tapgo-browser-screen">
              <img
                src={work.src}
                alt={work.alt}
                className="block h-full w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 pb-6 pt-4 sm:px-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full border px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] ${theme.tag}`}>
              {work.categoryLabel}
            </span>
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#C8D4EA]/56">
              Desktop + Mobile / {work.colorTag}
            </span>
          </div>
          <button
            className={`inline-flex items-center gap-2 text-sm transition hover:text-white ${theme.accent}`}
            type="button"
            onClick={() => onPreview(work)}
          >
            Inspect desktop layout
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function FeaturedCard({ work, index, onPreview }) {
  const reduceMotion = useReducedMotion();
  const theme = categoryThemes[work.category];

  return (
    <motion.figure
      layout
      className={`featured-card featured-card-${work.featurePlacement} group`}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.985 }}
      transition={{ duration: 0.48, delay: Math.min(index * 0.04, 0.14), ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-2.5 transition duration-500 sm:p-3.5">
        <div 
          className={`featured-media relative flex flex-1 items-center justify-center overflow-hidden rounded-[1.2rem] ${work.customBackground || work.matchImageBackground ? "" : theme.surface}`}
          style={{
            background: work.customBackground || undefined,
            backgroundImage: work.matchImageBackground ? `url('${work.src}')` : undefined,
            backgroundSize: work.matchImageBackground ? "10px 10px" : undefined,
            backgroundPosition: work.matchImageBackground ? "top left" : undefined,
            backgroundRepeat: work.matchImageBackground ? "repeat" : undefined,
            aspectRatio: work.customAspectRatio || undefined,
            minHeight: work.customAspectRatio ? "auto" : undefined
          }}
        >
          <img
            src={work.src}
            alt={work.alt}
            className={`absolute inset-0 block h-full max-h-full w-full max-w-full object-center ${
              work.noPadding ? "p-0" : "p-3 sm:p-5"
            } ${work.imageFit === "cover" ? "object-cover" : "object-contain"}`}
            style={work.customScale ? { transform: `scale(${work.customScale})` } : undefined}
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="flex items-end justify-between gap-3 p-3.5 sm:p-5">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className={`rounded-full border px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] ${theme.tag}`}>
                {work.categoryLabel}
              </span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[#C8D4EA]/55">
                {work.colorTag}
              </span>
            </div>
            <h4 className={`font-semibold leading-tight text-white ${work.featurePlacement === "primary" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
              {work.title}
            </h4>
            <p className="mt-2 text-sm text-[#C8D4EA]/68">{work.tone}</p>
          </div>
          <button
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.045] transition hover:border-white/25 ${theme.accent}`}
            type="button"
            aria-label={`View full image for ${work.title}`}
            onClick={() => onPreview(work)}
          >
            <ArrowUpRight size={18} />
          </button>
        </figcaption>
      </div>
    </motion.figure>
  );
}

function FeaturedSelection({ works, onPreview }) {
  return (
    <motion.section
      layout
      className="featured-selection"
      aria-label="Featured works"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.32 }}
    >
      <header className="featured-heading">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#78A4FF]">
            Main Selection / Lead Projects
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-4xl">Featured Works</h3>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[#C8D4EA]/68 sm:text-base">
          Four signature visuals placed at gallery scale: campaign impact, event atmosphere and
          branded social storytelling. Each artwork appears once in this view.
        </p>
      </header>
      <div className="featured-grid">
        {works.map((work, index) => (
          <FeaturedCard key={work.id} work={work} index={index} onPreview={onPreview} />
        ))}
      </div>
    </motion.section>
  );
}

function ArtworkCard({ work, index, isLead, onPreview }) {
  const reduceMotion = useReducedMotion();
  const theme = categoryThemes[work.category];
  const cardClass = work.layout === "full" ? "editorial-card-full" : work.layout === "half" ? "editorial-card-half" : work.layout === "hero-left" ? "editorial-card-hero-left" : work.layout === "lead" || isLead ? "editorial-card-lead" : work.layout === "wide" ? "editorial-card-wide" : "";
  const mediaClass =
    work.orientation === "portrait"
      ? "editorial-media-portrait"
      : work.orientation === "panorama"
        ? "editorial-media-panorama"
        : "editorial-media-default";

  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current || reduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (reduceMotion) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.figure
      layout
      ref={cardRef}
      className={`editorial-card group ${cardClass}`}
      initial={reduceMotion ? false : { opacity: 0, y: 35, scale: 0.95 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: 15, scale: 0.985 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.15), ease: "easeOut" }}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.03] p-2.5 transition duration-500 sm:p-3">
        <div 
          className={`relative flex flex-1 items-center justify-center overflow-hidden rounded-[1.15rem] ${work.customBackground || work.matchImageBackground ? "" : theme.surface} ${mediaClass}`}
          style={{
            background: work.customBackground || undefined,
            backgroundImage: work.matchImageBackground ? `url('${work.src}')` : undefined,
            backgroundSize: work.matchImageBackground ? "10px 10px" : undefined,
            backgroundPosition: work.matchImageBackground ? "top left" : undefined,
            backgroundRepeat: work.matchImageBackground ? "repeat" : undefined,
            aspectRatio: work.customAspectRatio || undefined,
            minHeight: work.customAspectRatio ? "auto" : undefined
          }}
        >
          <img
            src={work.src}
            alt={work.alt}
            className={`absolute inset-0 block h-full max-h-full w-full max-w-full object-center ${
              work.noPadding ? "p-0" : "p-3 sm:p-4 lg:p-5"
            } ${work.imageFit === "cover" ? "object-cover" : "object-contain"}`}
            style={work.customScale ? { transform: `scale(${work.customScale})` } : undefined}
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="flex flex-col p-3 sm:p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full border px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] ${theme.tag}`}>
              {work.categoryLabel}
            </span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[#C8D4EA]/54">
              {work.colorTag}
            </span>
          </div>
          <div className="mt-4 flex items-start justify-between gap-3">
            <div>
              <h4 className={`font-semibold leading-tight text-white ${isLead ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>
                {work.title}
              </h4>
              <p className="mt-2 text-sm text-[#C8D4EA]/68">{work.tone}</p>
            </div>
            <button
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.045] transition hover:border-white/25 ${theme.accent}`}
              type="button"
              aria-label={`View full image for ${work.title}`}
              onClick={() => onPreview(work)}
            >
              <ArrowUpRight size={17} />
            </button>
          </div>
        </figcaption>
      </div>
    </motion.figure>
  );
}

function Collection({ category, works, onPreview }) {
  const theme = categoryThemes[category.id];

  return (
    <motion.section
      layout
      className="portfolio-collection"
      aria-label={category.label}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <header className="mb-12 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className={`block h-1.5 w-1.5 rounded-full shadow-[0_0_10px_currentColor] ${theme.accent}`} style={{ backgroundColor: "currentColor" }} />
            <p className={`font-mono text-[0.65rem] uppercase tracking-[0.3em] ${theme.accent}`}>
              {theme.eyebrow}
            </p>
          </div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#C8D4EA]/50">
            {works.length} {works.length === 1 ? "PIECE" : "PIECES"} / INDEXED
          </p>
        </div>
        
        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <h3 className="display-title text-[clamp(3rem,6vw,5.5rem)] uppercase leading-none tracking-tight text-white">
            {category.label}
          </h3>
          <div className="max-w-md lg:border-l lg:border-white/10 lg:pl-6">
            <p className="text-base font-light leading-relaxed text-[#C8D4EA]/80 sm:text-lg">
              {theme.description}
            </p>
          </div>
        </div>
      </header>
      <div className="editorial-grid">
        {works.map((work, index) =>
          work.kind === "website-mockup" ? (
            <WebsiteFeature key={work.id} work={work} onPreview={onPreview} />
          ) : (
            <ArtworkCard key={work.id} work={work} index={index} isLead={index === 0} onPreview={onPreview} />
          ),
        )}
      </div>
    </motion.section>
  );
}

function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [previewWork, setPreviewWork] = useState(null);
  const featuredWorks = useMemo(
    () =>
      portfolioShowcase
        .filter((work) => work.featured)
        .sort((first, second) => first.featureOrder - second.featureOrder),
    [],
  );

  useEffect(() => {
    const filterFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (categoryByAnchor[hash]) {
        setActiveCategory(categoryByAnchor[hash]);
      }
    };

    filterFromHash();
    window.addEventListener("hashchange", filterFromHash);
    return () => window.removeEventListener("hashchange", filterFromHash);
  }, []);

  const selectedCollections = useMemo(() => {
    const categories =
      activeCategory === "all"
        ? portfolioCategories.slice(1)
        : portfolioCategories.filter((category) => category.id === activeCategory);

    return categories.map((category) => ({
      category,
      works: portfolioShowcase.filter(
        (work) => work.category === category.id && (activeCategory !== "all" || !work.featured),
      ),
    }));
  }, [activeCategory]);

  const selectCategory = (category) => {
    setActiveCategory(category.id);
    window.history.replaceState(null, "", `#${category.anchor}`);
  };

  return (
    <section id="selected-works" className="showcase-section content-section relative z-10 overflow-hidden">
      {portfolioCategories.slice(1).map((category) => (
        <span key={category.anchor} id={category.anchor} className="pointer-events-none absolute top-0" aria-hidden="true" />
      ))}
      <div className="showcase-ambient" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[112rem] px-4 md:px-6 lg:px-10 2xl:px-16">
        <header className="mb-10 lg:mb-16">
          <div className="flex items-center gap-4 border-b border-white/10 pb-5">
            <span className="h-1.5 w-1.5 bg-[#78A4FF]" />
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[#C8D4EA]/80">
              Selected Works &mdash; 2026
            </p>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_auto_0.8fr] lg:items-end lg:gap-12">
            <h2 className="display-title text-[clamp(4rem,9vw,8rem)] uppercase leading-[0.85] tracking-tight text-white">
              Visual
              <span className="block ml-[10%] text-[#C8D4EA]/90">Archive</span>
            </h2>
            <div className="hidden h-[70%] w-px bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block" />
            <div className="max-w-xl pb-3 lg:justify-self-end lg:border-l lg:border-white/10 lg:pl-8">
              <p className="text-xl font-light leading-relaxed text-white">
                A curated archive of campaign design, identity, digital interfaces and visual direction.
              </p>
              <p className="mt-5 font-mono text-[0.7rem] leading-6 tracking-wide text-[#C8D4EA]/50">
                Each submitted visual appears once only. Every artwork is displayed full frame at its
                original ratio, with no crop applied.
              </p>
            </div>
          </div>
        </header>

        <nav
          className="mb-10 flex w-full snap-x gap-2 overflow-x-auto rounded-[1.25rem] border border-white/10 bg-[#020613]/50 p-2 backdrop-blur-xl lg:mb-14 lg:w-fit"
          role="tablist"
          aria-label="Portfolio work categories"
        >
          {portfolioCategories.map((category) => {
            const isActive = category.id === activeCategory;

            return (
              <button
                key={category.id}
                className={`relative shrink-0 snap-start rounded-xl px-5 py-3 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-[#C8D4EA]/70 hover:text-white"
                }`}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectCategory(category)}
              >
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-[#1740AB]/60 border border-white/10" />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </nav>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={activeCategory} className="grid gap-10 lg:gap-14">
            {activeCategory === "all" ? (
              <FeaturedSelection works={featuredWorks} onPreview={setPreviewWork} />
            ) : null}
            {selectedCollections.map(({ category, works }) => (
              <Collection key={category.id} category={category} works={works} onPreview={setPreviewWork} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {previewWork ? <ProjectPreview work={previewWork} onClose={() => setPreviewWork(null)} /> : null}
      </AnimatePresence>
    </section>
  );
}

export default PortfolioShowcase;
