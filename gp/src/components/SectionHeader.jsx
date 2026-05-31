import Reveal from "./Reveal";

function SectionHeader({ number, title, description, kicker }) {
  return (
    <Reveal className="section-header deck-divider relative mb-7 overflow-hidden lg:mb-10">
      <div className="deck-divider-grid" aria-hidden="true" />
      <div className="relative z-10 grid gap-4 px-4 py-7 sm:px-8 sm:py-9 lg:grid-cols-[0.42fr_0.58fr] lg:items-end lg:px-11">
        <div className="flex items-end gap-4">
          <span className="deck-divider-number" aria-hidden="true">
            {number}
          </span>
          {kicker ? <p className="eyebrow deck-divider-kicker">{kicker}</p> : null}
        </div>
        <h2 className="deck-divider-title display-title uppercase text-white">{title}</h2>
      </div>
      <div className="deck-divider-meta relative z-10 grid gap-3 border-t border-white/14 px-4 py-4 sm:px-8 lg:grid-cols-[0.42fr_0.58fr] lg:px-11">
        <span className="font-mono text-[0.7rem] uppercase text-white/62">Portfolio Section</span>
        <p className="max-w-3xl text-sm leading-6 text-[#C8D4EA]/88 sm:text-base">
          {description}
        </p>
      </div>
    </Reveal>
  );
}

export default SectionHeader;
