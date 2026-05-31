import { ArrowUpRight } from "lucide-react";
import { keyVisualProjects } from "../data/portfolioData";
import PortfolioVisual from "./PortfolioVisual";
import Reveal from "./Reveal";

function KeyVisualShowcase() {
  const [feature, ...supporting] = keyVisualProjects;

  return (
    <Reveal className="key-visual-frame glass-panel p-4 sm:p-6 lg:p-7">
      <div className="mb-5 flex flex-col justify-between gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-end">
        <div>
          <span className="project-tag static inline-flex">KEY VISUAL</span>
          <h3 className="mt-4 text-3xl font-semibold uppercase text-white sm:text-4xl">
            Key Visual
          </h3>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-[#C8D4EA]/78 sm:text-base">
          Selected hero visuals, campaign main visuals and commercial advertising key visuals
          designed for digital campaigns.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.45fr_0.95fr]">
        <article className="group">
          <div className="overflow-hidden rounded-lg border border-white/10">
            <PortfolioVisual
              project={feature}
              ratio="wide"
              className="transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </article>

        <div className="grid gap-4">
          <article className="border-b border-white/10 pb-4">
            <p className="eyebrow">{feature.category}</p>
            <div className="mt-3 flex items-start justify-between gap-3">
              <h4 className="text-2xl font-semibold leading-8 text-white">{feature.title}</h4>
              <ArrowUpRight className="mt-1 shrink-0 text-[#5D85DB]" size={20} />
            </div>
            <p className="mt-3 text-sm leading-6 text-[#C8D4EA]/76">{feature.description}</p>
            <dl className="mt-4 grid gap-2 text-sm text-[#C8D4EA]/74">
              <div className="flex gap-3">
                <dt className="w-14 text-white/48">Role</dt>
                <dd>{feature.role}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-14 text-white/48">Tools</dt>
                <dd>{feature.tools.join(", ")}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-14 text-white/48">Year</dt>
                <dd>{feature.year}</dd>
              </div>
            </dl>
          </article>

          <div className="grid gap-3 sm:grid-cols-2">
            {supporting.map((project) => (
              <article key={project.id} className="group">
                <div className="overflow-hidden rounded-lg border border-white/10">
                  <PortfolioVisual
                    project={project}
                    ratio={project.ratio}
                    compact
                    className="transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-white">{project.title}</p>
                <p className="mt-1 font-mono text-[0.66rem] uppercase text-[#5D85DB]">
                  {project.category} / {project.year}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default KeyVisualShowcase;
