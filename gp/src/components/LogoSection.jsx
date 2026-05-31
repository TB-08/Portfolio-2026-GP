import { ArrowUpRight, PenTool } from "lucide-react";
import {
  getPortfolioSection,
  logoApplications,
  logoVariationLabels,
} from "../data/portfolioData";
import PortfolioVisual from "./PortfolioVisual";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function LogoSection() {
  const section = getPortfolioSection("logo");
  const [featuredLogo, ...logoGrid] = section.projects;

  return (
    <section id={section.id} className="content-section relative z-10">
      <div className="page-wrap">
        <SectionHeader
          number={section.number}
          title="Logo Design"
          description={section.description}
          kicker="Marks & Wordmarks"
        />

        <div className="grid gap-5 xl:grid-cols-[1.18fr_0.82fr]">
          <Reveal className="glass-panel p-4 sm:p-6">
            <div className="overflow-hidden rounded-lg border border-white/10">
              <PortfolioVisual project={featuredLogo} ratio="wide" />
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="project-tag static inline-flex">{featuredLogo.logoType}</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{featuredLogo.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#C8D4EA]/76">
                  {featuredLogo.description}
                </p>
              </div>
              <dl className="grid gap-2 text-sm text-[#C8D4EA]/74">
                <div className="flex gap-4">
                  <dt className="w-16 text-white/48">Industry</dt>
                  <dd>{featuredLogo.category}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-16 text-white/48">Role</dt>
                  <dd>{featuredLogo.role}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-16 text-white/48">Tools</dt>
                  <dd>{featuredLogo.tools.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal className="glass-panel p-5 sm:p-6" delay={0.08}>
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="panel-label">Concept / Process</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Shape first, then lockup.</h3>
              </div>
              <PenTool className="hidden text-[#5D85DB] sm:block" size={25} />
            </div>
            <div className="logo-process mt-5">
              <span>01</span>
              <strong>Symbol logic</strong>
              <span>02</span>
              <strong>Wordmark balance</strong>
              <span>03</span>
              <strong>Mono checks</strong>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#C8D4EA]/76">
              This logo set stays focused on marks, variations and compact applications rather than a
              full guideline presentation.
            </p>
          </Reveal>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {logoGrid.map((project, index) => (
            <Reveal key={project.id} className="logo-tile glass-panel p-3 sm:p-4" delay={index * 0.04}>
              <div className="overflow-hidden rounded-lg border border-white/10">
                <PortfolioVisual project={project} ratio="logo" compact />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-white">{project.title}</p>
                  <p className="mt-1 font-mono text-[0.66rem] uppercase text-[#5D85DB]">
                    {project.logoType}
                  </p>
                </div>
                <ArrowUpRight size={18} className="mt-1 text-[#C8D4EA]/45" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass-panel p-5 sm:p-6">
            <div className="mb-5 border-b border-white/10 pb-5">
              <p className="panel-label">Logo Variations</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Main, icon, horizontal and mono checks
              </h3>
            </div>
            <div className="logo-variation-grid">
              {logoVariationLabels.map((label, index) => (
                <article key={label} className={`logo-variation logo-variation-${index + 1}`}>
                  <span>{label}</span>
                  <strong>{index === 1 ? "G" : "GP"}</strong>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="glass-panel p-5 sm:p-6" delay={0.08}>
            <div className="mb-5 border-b border-white/10 pb-5">
              <p className="panel-label">Mockup application</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Logo surface tests</h3>
            </div>
            <div className="application-grid">
              {logoApplications.map((application, index) => (
                <div key={application} className={`application-chip application-chip-${index + 1}`}>
                  <strong>GP</strong>
                  <span>{application}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
