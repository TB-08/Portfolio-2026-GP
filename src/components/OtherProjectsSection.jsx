import { getPortfolioSection } from "../data/portfolioData";
import PortfolioVisual from "./PortfolioVisual";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function OtherProjectsSection() {
  const section = getPortfolioSection("other-projects");

  return (
    <section id={section.id} className="content-section relative z-10">
      <div className="page-wrap">
        <SectionHeader
          number={section.number}
          title="Other Projects"
          description={section.description}
          kicker="Supporting Work"
        />

        <div className="other-project-grid">
          {section.projects.map((project, index) => (
            <Reveal
              key={project.id}
              className={`other-project-card other-project-card-${index + 1}`}
              delay={(index % 4) * 0.04}
            >
              <article className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-[#040C23]/78">
                <PortfolioVisual
                  project={project}
                  ratio={project.ratio}
                  compact
                  hideCopy
                  className="h-full transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="other-project-overlay">
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherProjectsSection;
