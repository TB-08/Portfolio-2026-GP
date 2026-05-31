import { Mail } from "lucide-react";
import {
  designerProfile,
  experienceTimeline,
  skillList,
  softwareList,
} from "../data/portfolioData";
import Reveal from "./Reveal";

const metrics = ["30+ Projects", "4 Main Services", "3+ Years Learning & Designing"];

function AboutSection() {
  return (
    <section id="about" className="profile-section relative z-10">
      <div className="page-wrap">
        <Reveal className="profile-board">
          <div className="profile-board-grid" aria-hidden="true" />
          <div className="profile-column">
            <h2 className="profile-word display-title uppercase text-white">Profile</h2>
            <div className="portrait-placeholder">
              <img
                src={designerProfile.avatar}
                alt={`Portrait of ${designerProfile.name}`}
                className="portrait-photo"
                loading="lazy"
              />
              <span aria-hidden="true" />
            </div>
            <div className="profile-nameplate">
              <h3>{designerProfile.name}</h3>
              <p>{designerProfile.roles}</p>
            </div>
            <div>
              <p className="profile-label">Software</p>
              <div className="profile-software">
                {softwareList.map((software) => {
                  const iconMap = {
                    Photoshop: "adobephotoshop",
                    Illustrator: "adobeillustrator",
                    CapCut: "capcut",
                    Lightroom: "adobelightroom",
                    "After Effects": "adobeaftereffects",
                  };
                  const brandSlug = iconMap[software] || software.toLowerCase();
                  return (
                    <div key={software} className="software-icon-box" title={software}>
                       <img 
                        src={`https://cdn.simpleicons.org/${brandSlug}/white`} 
                        alt={software}
                        className="software-mini-logo"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="profile-details">
            <div className="profile-copy-grid">
              <div>
                <p className="profile-label">About Me</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#C8D4EA]/88 sm:text-base">
                  I&apos;m a graphic designer focused on social media design, logo design and website UI/UX.
                  I create bold, clean and commercial visuals for brands, agencies and digital campaigns.
                </p>
              </div>
              <div className="profile-metrics">
                {metrics.map((metric) => (
                  <div key={metric}>
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            <div className="profile-ledgers">
              <div>
                <p className="profile-label">Experience</p>
                <ol className="profile-timeline">
                {experienceTimeline.map((item) => (
                  <li key={item.date}>
                    <span>{item.date}</span>
                    <strong>{item.role}</strong>
                  </li>
                ))}
                </ol>
              </div>
              <div>
                <p className="profile-label">Skills</p>
                <div className="profile-skills">
                  {skillList.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="profile-contact">
              <p className="profile-label">Contact</p>
              <a href={`mailto:${designerProfile.email}`}>
                <Mail size={16} />
                {designerProfile.email}
              </a>
              <span>{designerProfile.availability}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutSection;
