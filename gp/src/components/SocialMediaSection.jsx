import { ChevronRight, Smartphone } from "lucide-react";
import { useState } from "react";
import { getPortfolioSection } from "../data/portfolioData";
import ImageLightbox from "./ImageLightbox";
import KeyVisualShowcase from "./KeyVisualShowcase";
import MockupFrame from "./MockupFrame";
import PortfolioVisual from "./PortfolioVisual";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function SocialMediaSection() {
  const section = getPortfolioSection("social-media");
  const [previewProject, setPreviewProject] = useState(null);
  const [heroProject] = section.projects;
  const gridProjects = section.projects.slice(1);

  const floatingPosts = section.projects.slice(1, 5);
  const campaignSet = section.projects.slice(2, 5);

  return (
    <section id={section.id} className="content-section relative z-10">
      <div className="page-wrap">
        <SectionHeader
          number={section.number}
          title="Social Media Design"
          description={section.description}
          kicker="Selected Work"
        />

        <div className="social-hero-spread grid gap-5 xl:grid-cols-[1.42fr_0.58fr]">
          <ProjectCard
            project={heroProject}
            ratio="wide"
            featured
            onPreview={setPreviewProject}
          />

          <Reveal className="glass-panel flex flex-col justify-between p-5 sm:p-6" delay={0.08}>
            <div>
              <p className="panel-label">Project hero</p>
              <h3 className="mt-4 text-3xl font-semibold uppercase leading-tight text-white">
                Commercial social layouts with campaign-grade focus.
              </h3>
              <p className="mt-4 text-base leading-7 text-[#C8D4EA]/76">
                Built around offer clarity, retouched depth and reusable post systems for digital
                campaigns.
              </p>
            </div>
            <div className="mt-8 grid gap-3 border-t border-white/10 pt-5">
              {["Social post grid", "Instagram-style cards", "Phone preview set"].map((item) => (
                <div key={item} className="flex items-center justify-between gap-3 text-sm text-[#C8D4EA]/78">
                  <span>{item}</span>
                  <ChevronRight size={16} className="text-[#5D85DB]" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="social-feed-grid mt-5 grid gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {gridProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              ratio={project.ratio}
              showDescription={false}
              showMeta={false}
              onPreview={setPreviewProject}
            />
          ))}
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch">
          <Reveal className="phone-showcase glass-panel p-4 sm:p-6">
            <div className="mb-6 flex flex-col justify-between gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
              <div>
                <p className="panel-label">Phone mockup showcase</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Social feed preview</h3>
              </div>
              <span className="inline-flex items-center gap-2 text-sm text-[#C8D4EA]/72">
                <Smartphone size={16} className="text-[#5D85DB]" />
                Story and post rhythm
              </span>
            </div>

            <div className="phone-stage">
              {floatingPosts.map((project, index) => (
                <div key={project.id} className={`floating-post floating-post-${index + 1}`}>
                  <PortfolioVisual project={project} ratio="square" compact />
                </div>
              ))}
              <MockupFrame variant="phone" className="phone-stage-device">
                <PortfolioVisual project={heroProject} ratio="phone" compact />
              </MockupFrame>
            </div>
          </Reveal>

          <Reveal className="glass-panel p-4 sm:p-6" delay={0.08}>
            <div className="mb-5 border-b border-white/10 pb-5">
              <p className="panel-label">Campaign set layout</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Offer, content and conversion frames
              </h3>
            </div>
            <div className="campaign-stack">
              {campaignSet.map((project, index) => (
                <article key={project.id} className={`campaign-sheet campaign-sheet-${index + 1}`}>
                  <PortfolioVisual project={project} ratio="vertical" compact />
                  <div>
                    <p>{project.title}</p>
                    <span>{project.tags[0]}</span>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12">
          <KeyVisualShowcase />
        </div>
      </div>

      <ImageLightbox project={previewProject} onClose={() => setPreviewProject(null)} />
    </section>
  );
}

export default SocialMediaSection;
