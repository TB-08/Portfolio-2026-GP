import { ArrowRight, MonitorSmartphone } from "lucide-react";
import { getPortfolioSection } from "../data/portfolioData";
import MockupFrame from "./MockupFrame";
import PortfolioVisual from "./PortfolioVisual";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function CaseStudyCard({ project, delay }) {
  return (
    <Reveal className="ui-case glass-panel p-4 sm:p-5" delay={delay}>
      <div className="overflow-hidden rounded-lg border border-white/10">
        <PortfolioVisual project={project} ratio="wide" compact />
      </div>
      <div className="mt-4">
        <p className="project-tag static inline-flex">{project.category}</p>
        <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#C8D4EA]/75">{project.description}</p>
        <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 text-sm">
          <div>
            <p className="panel-label">Problem</p>
            <p className="mt-2 leading-6 text-[#C8D4EA]/74">{project.problem}</p>
          </div>
          <div>
            <p className="panel-label">Solution</p>
            <p className="mt-2 leading-6 text-[#C8D4EA]/74">{project.solution}</p>
          </div>
        </div>
        <button
          className="ghost-button mt-5 inline-flex"
          type="button"
          aria-label={`View ${project.title} case study placeholder`}
        >
          View Case Study
          <ArrowRight size={16} />
        </button>
      </div>
    </Reveal>
  );
}

function WebsiteUIUXSection() {
  const section = getPortfolioSection("website-ui-ux");
  const [featuredWebsite, ...caseStudies] = section.projects;

  return (
    <section id={section.id} className="content-section relative z-10">
      <div className="page-wrap">
        <SectionHeader
          number={section.number}
          title="Website UI UX"
          description={section.description}
          kicker="Responsive Interfaces"
        />

        <div className="grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
          <Reveal className="ui-feature glass-panel p-4 sm:p-6">
            <MockupFrame title="go-media-landing-page">
              <PortfolioVisual project={featuredWebsite} ratio="browser" compact />
            </MockupFrame>
            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="project-tag static inline-flex">{featuredWebsite.category}</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{featuredWebsite.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#C8D4EA]/76">
                  {featuredWebsite.description}
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4 text-sm text-[#C8D4EA]/76">
                <p className="panel-label">Screens</p>
                <p className="mt-2 max-w-60">{featuredWebsite.screens.join(", ")}</p>
                <p className="mt-3 font-mono text-[0.66rem] uppercase text-[#5D85DB]">
                  {featuredWebsite.responsive}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="glass-panel p-4 sm:p-6" delay={0.08}>
            <div className="mb-5 flex items-end justify-between gap-3 border-b border-white/10 pb-5">
              <div>
                <p className="panel-label">Responsive preview</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Desktop to mobile</h3>
              </div>
              <MonitorSmartphone size={24} className="text-[#5D85DB]" />
            </div>
            <div className="responsive-device-stack">
              <MockupFrame title="desktop" className="responsive-browser">
                <PortfolioVisual project={caseStudies[0]} ratio="browser" compact />
              </MockupFrame>
              <MockupFrame variant="tablet" className="responsive-tablet">
                <PortfolioVisual project={caseStudies[1]} ratio="wide" compact />
              </MockupFrame>
              <MockupFrame variant="phone" className="responsive-phone">
                <PortfolioVisual project={caseStudies[2]} ratio="phone" compact />
              </MockupFrame>
            </div>
          </Reveal>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {caseStudies.slice(0, 4).map((project, index) => (
            <Reveal key={project.id} className="ui-screen glass-panel p-3" delay={index * 0.04}>
              <PortfolioVisual project={project} ratio={index === 3 ? "wide" : "browser"} compact />
              <div className="px-2 pb-2 pt-4">
                <p className="text-sm font-medium text-white">{project.title}</p>
                <p className="mt-1 font-mono text-[0.66rem] uppercase text-[#5D85DB]">
                  {project.screens.slice(0, 2).join(" / ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-2">
          {caseStudies.slice(0, 2).map((project, index) => (
            <CaseStudyCard key={project.id} project={project} delay={index * 0.06} />
          ))}
        </div>

        <Reveal className="mt-5 glass-panel p-4 sm:p-6">
          <div className="mb-5 grid gap-3 border-b border-white/10 pb-5 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="panel-label">Before / After Redesign</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Cleaner hierarchy for fast interface scans
              </h3>
            </div>
            <p className="text-sm leading-6 text-[#C8D4EA]/74">
              A compact comparison block keeps the case study presentation visual without turning it
              into a long research document.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <MockupFrame title="before-layout">
              <PortfolioVisual project={caseStudies[0]} ratio="browser" compact />
            </MockupFrame>
            <MockupFrame title="after-layout">
              <PortfolioVisual project={featuredWebsite} ratio="browser" compact />
            </MockupFrame>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default WebsiteUIUXSection;
