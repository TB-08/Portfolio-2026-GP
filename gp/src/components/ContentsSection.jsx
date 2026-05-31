import { portfolioSections } from "../data/portfolioData";
import MockupFrame from "./MockupFrame";
import Reveal from "./Reveal";

function ContentsSection() {
  return (
    <section id="contents" className="contents-section relative z-10">
      <div className="page-wrap">
        <Reveal className="contents-board overflow-hidden">
          <div className="contents-paper">
            <div className="contents-paper-grid" aria-hidden="true" />
            <div className="contents-heading">
              <p className="eyebrow text-[#1740AB]">Portfolio Index</p>
              <h2 className="display-title uppercase text-[#1740AB]">Contents</h2>
            </div>
            <div className="contents-index">
              {portfolioSections.map((section, index) => (
                <a
                  key={section.id}
                  className={`contents-index-item contents-index-item-${index + 1}`}
                  href={`#${section.id}`}
                >
                  <span>{section.number}</span>
                  <strong>{section.title}</strong>
                </a>
              ))}
            </div>
            <div className="contents-laptop">
              <MockupFrame title="future-image-board">
                <div className="contents-screen">
                  <span />
                  <span />
                  <strong>GP</strong>
                  <div />
                </div>
              </MockupFrame>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContentsSection;
