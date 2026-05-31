import PlaceholderImage from "./PlaceholderImage";

const visualRatios = {
  square: "ratio-square",
  vertical: "ratio-vertical",
  wide: "ratio-wide",
  phone: "ratio-phone",
  browser: "ratio-browser",
  logo: "ratio-logo",
};

function PortfolioVisual({
  project,
  ratio,
  className = "",
  compact = false,
  hideCopy = false,
  alt,
}) {
  const activeRatio = ratio ?? project.ratio ?? "square";

  if (project.image) {
    return (
      <div className={`real-project-image ${visualRatios[activeRatio] ?? visualRatios.square} ${className}`}>
        <img
          src={project.image}
          alt={alt ?? `${project.title} project preview`}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <PlaceholderImage
        type={project.placeholderType}
        title={project.title}
        category={project.category}
        ratio={activeRatio}
        mark={project.logoMark}
        compact={compact}
        hideCopy={hideCopy}
      />
    </div>
  );
}

export default PortfolioVisual;
