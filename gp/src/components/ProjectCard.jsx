import { ArrowUpRight, ScanSearch } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import PortfolioVisual from "./PortfolioVisual";

function ProjectCard({
  project,
  ratio,
  featured = false,
  showDescription = true,
  showMeta = true,
  onPreview,
  className = "",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`project-card group ${featured ? "project-card-featured" : ""} ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#040C23]/78">
        <PortfolioVisual
          project={project}
          ratio={ratio}
          className="transition duration-500 group-hover:scale-[1.02]"
        />
        <span className="project-tag absolute left-4 top-4">{project.category}</span>
        {onPreview ? (
          <button
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-[#01040A]/72 text-white backdrop-blur-md transition hover:border-[#5D85DB]/60 hover:bg-[#1740AB]/80"
            type="button"
            aria-label={`Preview ${project.title}`}
            onClick={() => onPreview(project)}
          >
            <ScanSearch size={17} />
          </button>
        ) : null}
      </div>
      <div className="mt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold leading-7 text-white">{project.title}</h3>
            <p className="mt-1 font-mono text-xs uppercase text-[#5D85DB]">{project.year}</p>
          </div>
          <ArrowUpRight
            className="mt-1 shrink-0 text-[#C8D4EA]/45 transition group-hover:text-[#5D85DB]"
            size={21}
            aria-hidden="true"
          />
        </div>
        {showDescription ? (
          <p className="mt-3 text-sm leading-6 text-[#C8D4EA]/76">{project.description}</p>
        ) : null}
        {showMeta ? (
          <dl className="mt-4 grid gap-2 text-sm text-[#C8D4EA]/72">
            <div className="flex gap-2">
              <dt className="min-w-12 text-white/46">Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="min-w-12 text-white/46">Tools</dt>
              <dd>{project.tools.join(", ")}</dd>
            </div>
          </dl>
        ) : null}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
