const ratioClasses = {
  square: "ratio-square",
  vertical: "ratio-vertical",
  wide: "ratio-wide",
  phone: "ratio-phone",
  browser: "ratio-browser",
  logo: "ratio-logo",
};

function PlaceholderImage({
  type = "social",
  title,
  category,
  ratio = "square",
  mark,
  compact = false,
  hideCopy = false,
}) {
  const activeRatio = ratioClasses[ratio] ?? ratioClasses.square;
  const label = category ?? type.replace("-", " ");

  return (
    <div
      className={`placeholder-image placeholder-${type} ${activeRatio} ${
        compact ? "placeholder-compact" : ""
      }`}
      role="img"
      aria-label={`${title} ${label} placeholder visual`}
    >
      <span className="placeholder-grid" aria-hidden="true" />
      <span className="placeholder-halo" aria-hidden="true" />
      <span className="placeholder-halo placeholder-halo-secondary" aria-hidden="true" />
      <span className="placeholder-rule" aria-hidden="true" />
      <span className="placeholder-panel" aria-hidden="true" />
      <span className="placeholder-panel placeholder-panel-secondary" aria-hidden="true" />
      <span className="placeholder-cross" aria-hidden="true">
        +
      </span>
      {type === "logo" ? (
        <div className="placeholder-logo-mark" aria-hidden="true">
          <span>{mark ?? title.split(" ")[0]}</span>
        </div>
      ) : null}
      {type === "uiux" || type === "dashboard" ? (
        <div className="placeholder-ui-lines" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : null}
      {hideCopy ? null : (
        <div className="placeholder-copy">
          <span>{label}</span>
          <strong>{title}</strong>
        </div>
      )}
    </div>
  );
}

export default PlaceholderImage;
