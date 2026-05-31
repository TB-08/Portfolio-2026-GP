import { portfolioIndex } from "../data/portfolioShowcase";
import Reveal from "./Reveal";

function ContentsSection() {
  // Only slice 0 to 4 to completely remove "05 KEY VISUAL" text link from the index list
  const activeIndex = portfolioIndex.slice(0, 4);

  return (
    <section id="contents" className="contents-section relative z-10">
      <div className="page-wrap">
        <Reveal className="contents-board overflow-hidden">
          <div className="contents-paper">
            <div className="contents-paper-grid" aria-hidden="true" />
            
            <div className="contents-index">
              {activeIndex.map((section, index) => (
                <a
                  key={section.id}
                  className={`contents-index-item contents-index-item-${index + 1}`}
                  href={`#${section.id}`}
                >
                  <span>{section.number}</span>
                  <strong>
                    {section.title.includes('\n') ? (
                      section.title.split('\n').map((line, i) => (
                        <span key={i} className="block">{line}</span>
                      ))
                    ) : (
                      section.title
                    )}
                  </strong>
                </a>
              ))}
            </div>
            
            {/* Clickable 3D Floating Boy - Complete background & laptop removal */}
            <a 
              href="#key-visual" 
              className="contents-center-link-group block"
            >
              <div className="contents-popout-avatar-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}images/showcase/gphat2-Photoroom.png`}
                  alt="Gia Phat Floating Portrait"
                  className="contents-popout-avatar"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContentsSection;
