import { X } from "lucide-react";
import { useEffect } from "react";
import PortfolioVisual from "./PortfolioVisual";

function ImageLightbox({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-[#01040A]/88 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} preview`}
      onMouseDown={onClose}
    >
      <div
        className="glass-panel relative w-full max-w-5xl overflow-hidden p-3 sm:p-5"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-[#01040A]/80 text-white transition hover:border-[#5D85DB]/65 hover:bg-[#1740AB]/76"
          type="button"
          aria-label="Close project preview"
          onClick={onClose}
        >
          <X size={18} />
        </button>
        <PortfolioVisual project={project} ratio="wide" />
        <div className="grid gap-2 px-2 pb-2 pt-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
          </div>
          <p className="text-sm text-[#C8D4EA]/72">{project.tools.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageLightbox;
