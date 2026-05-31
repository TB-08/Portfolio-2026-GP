import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { designerProfile } from "../data/portfolioData";

function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero-section cover-sheet relative z-10 overflow-hidden">
      <div className="page-wrap relative flex min-h-[inherit] flex-col justify-between pb-8 pt-9 sm:pb-10 lg:pt-14">
        <div className="absolute left-[8%] top-[18%] font-mono text-xl text-[#5D85DB]/75" aria-hidden="true">
          +
        </div>
        <div className="absolute right-[7%] top-[13%] font-mono text-lg text-white/50" aria-hidden="true">
          +
        </div>
        <div className="absolute right-[12%] top-[62%] font-mono text-2xl text-[#5D85DB]/55" aria-hidden="true">
          +
        </div>

        <div className="relative isolate flex flex-1 flex-col justify-center">
          <motion.div
            className="relative z-20 flex flex-wrap items-center gap-3 text-xs font-medium uppercase text-[#C8D4EA]/84 sm:text-sm"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Graphic Design</span>
            <span className="h-px w-11 bg-white/18" />
            <span className="min-w-0 break-words">Social Media / Logo / Website UI UX</span>
          </motion.div>

          <div className="hero-object" aria-hidden="true">
            <span className="hero-object-core" />
            <span className="hero-object-face" />
            <span className="hero-object-glass" />
          </div>
          <span className="hero-stroke" aria-hidden="true" />

          <motion.h1
            className="portfolio-cover relative z-10 mt-7 uppercase text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 44 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Portfolio
          </motion.h1>

          <motion.div
            className="cover-caption relative z-20 mt-7 grid max-w-5xl gap-5 lg:grid-cols-[1fr_auto] lg:items-end"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
          >
            <div>
              <p className="text-lg font-black uppercase text-white sm:text-2xl">
                {designerProfile.portfolioTitle}
              </p>
              <p className="mt-3 text-2xl font-semibold text-white sm:text-[2rem]">
                {designerProfile.name}
              </p>
              <p className="mt-2 max-w-xl break-words text-base leading-7 text-[#C8D4EA]/82">
                {designerProfile.roles}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="blue-button inline-flex justify-center" href="#social-media">
                View Projects
                <ArrowDown size={16} />
              </a>
              <a className="ghost-button inline-flex justify-center" href={`mailto:${designerProfile.email}`}>
                Contact Me
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="cover-strip relative z-20 mt-8 grid gap-px overflow-hidden border border-white/14 lg:grid-cols-4"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
        >
          {[
            ["Designer", designerProfile.name],
            ["Based in", designerProfile.location],
            ["Focus", "Social / Logo / UI UX"],
            ["Contact", designerProfile.email],
          ].map(([label, value]) => (
            <div key={label} className="cover-strip-cell">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
