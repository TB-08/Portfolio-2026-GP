import { useState } from "react";
import { Mail, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  designerProfile,
  experienceTimeline,
  skillList,
  softwareList,
} from "../data/portfolioData";
import { credentialWorks } from "../data/portfolioShowcase";
import Reveal from "./Reveal";

function AboutSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Get all 5 certificates directly from exported credentialWorks
  const certs = credentialWorks.filter(
    (w) => w.colorTag === "Credential"
  );

  const leftCerts = certs.slice(0, 2);
  const rightCerts = certs.slice(2);

  return (
    <section id="about" className="profile-section relative z-10">
      <div className="profile-layout-wrap">
        {/* Left Column Certificates (Desktop only) */}
        <div className="profile-side-column profile-side-left">
          <div className="profile-marquee-inner">
            {leftCerts.map((cert) => (
              <div
                key={cert.id}
                className="profile-cert-card cursor-pointer"
                onClick={() => setSelectedCert(cert)}
                role="button"
                aria-label={`View ${cert.title} full size`}
              >
                <div className="profile-cert-image-wrap">
                  <img src={cert.src} alt={cert.alt} loading="lazy" />
                </div>
                <div className="profile-cert-info">
                  <span>{cert.tone}</span>
                  <strong>{cert.title}</strong>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite seamless scroll */}
            {leftCerts.map((cert) => (
              <div
                key={`${cert.id}-dup`}
                className="profile-cert-card cursor-pointer"
                onClick={() => setSelectedCert(cert)}
                role="button"
                aria-hidden="true"
                aria-label={`View ${cert.title} full size`}
              >
                <div className="profile-cert-image-wrap">
                  <img src={cert.src} alt={cert.alt} loading="lazy" />
                </div>
                <div className="profile-cert-info">
                  <span>{cert.tone}</span>
                  <strong>{cert.title}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Central PROFILE Card */}
        <div className="profile-center-wrap">
          <div className="profile-board-wrapper">
            <div className="profile-board">
            <div className="profile-board-grid" aria-hidden="true" />
            <h2 className="profile-word display-title uppercase text-white">Profile</h2>
            <div className="profile-column">
              <div className="portrait-placeholder">
                <img
                  src={designerProfile.avatar}
                  alt={`Portrait of ${designerProfile.name}`}
                  className="portrait-photo"
                  loading="lazy"
                />
              </div>
              <div className="profile-nameplate">
                <h3>{designerProfile.name}</h3>
                <p>{designerProfile.roles}</p>
              </div>
              <div>
                <p className="profile-label">Software</p>
                <div className="profile-software">
                  {softwareList.map((software, index) => {
                    const iconMap = {
                      Photoshop: "adobephotoshop",
                      Illustrator: "adobeillustrator",
                      CapCut: "capcut",
                      Lightroom: "adobelightroom",
                      "After Effects": "adobeaftereffects",
                    };
                    const brandSlug = iconMap[software] || software.toLowerCase();
                    return (
                      <div 
                        key={software} 
                        className="software-icon-box" 
                        title={software}
                      >
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
              <div className="mt-8">
                <p className="profile-label">Experience</p>
                <ol className="profile-timeline">
                  {experienceTimeline.map((item, index) => (
                    <li key={item.date}>
                      <span>{item.date}</span>
                      <strong>{item.role}</strong>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="profile-details">
              <div className="mb-6">
                <p className="profile-label">About Me</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#C8D4EA]/88 sm:text-base">
                  Là sinh viên năm 2 ngành Social Media – Đại học FPT Đà Nẵng, tôi có hơn 1 năm kinh nghiệm thực chiến trong Graphic Design, Video Editing và UI/UX qua nhiều dự án thuộc lĩnh vực du lịch, F&B, sự kiện và thương mại. Từng làm việc tại Go Media Agency với vai trò Graphic Designer, tôi đã tham gia phát triển sản phẩm truyền thông cho Queen Bus, The New Way, Sea Lavie, Hoi An Unique Travel; thiết kế UI/UX website cho Trung Nguyên Legend, TapGO, Zenith House; và triển khai social post cho PongDang, Ryo Japanese, Yoshino Izakaya Shoten. Ngoài ra, tôi từng đảm nhiệm vai trò Design Coordinator tại AIESEC và thiết kế logo cho sự kiện JCI Leadership Boost. Thành thạo Adobe, CapCut và ứng dụng AI, tôi hướng đến việc tạo ra các sản phẩm thiết kế hiện đại, chỉn chu và có giá trị thực tiễn.
                </p>
              </div>

              <div className="mb-6">
                <p className="profile-label">Skills</p>
                <div className="profile-skills">
                  {skillList.map((skill, index) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
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
            </div>
          </div>
        </div>

        {/* Right Column Certificates (Desktop only) */}
        <div className="profile-side-column profile-side-right">
          <div className="profile-marquee-inner">
            {rightCerts.map((cert) => (
              <div
                key={cert.id}
                className="profile-cert-card cursor-pointer"
                onClick={() => setSelectedCert(cert)}
                role="button"
                aria-label={`View ${cert.title} full size`}
              >
                <div className="profile-cert-image-wrap">
                  <img src={cert.src} alt={cert.alt} loading="lazy" />
                </div>
                <div className="profile-cert-info">
                  <span>{cert.tone}</span>
                  <strong>{cert.title}</strong>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite seamless scroll */}
            {rightCerts.map((cert) => (
              <div
                key={`${cert.id}-dup`}
                className="profile-cert-card cursor-pointer"
                onClick={() => setSelectedCert(cert)}
                role="button"
                aria-hidden="true"
                aria-label={`View ${cert.title} full size`}
              >
                <div className="profile-cert-image-wrap">
                  <img src={cert.src} alt={cert.alt} loading="lazy" />
                </div>
                <div className="profile-cert-info">
                  <span>{cert.tone}</span>
                  <strong>{cert.title}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Grid below PROFILE card for Mobile/Tablet */}
        <div className="profile-mobile-certs-grid">
          <p className="profile-label col-span-full">Credentials & Certifications</p>
          {certs.map((cert) => (
            <Reveal key={cert.id} className="profile-cert-card cursor-pointer">
              <div
                className="profile-cert-image-wrap"
                onClick={() => setSelectedCert(cert)}
                role="button"
                aria-label={`View ${cert.title} full size`}
              >
                <img src={cert.src} alt={cert.alt} loading="lazy" />
              </div>
              <div className="profile-cert-info" onClick={() => setSelectedCert(cert)}>
                <span>{cert.tone}</span>
                <strong>{cert.title}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Full Size Certificate Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-[#01040A]/95 p-3 backdrop-blur-md sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCert.title} preview`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative flex max-h-[92svh] w-full max-w-[76rem] flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#030817] p-2 shadow-2xl sm:p-4"
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-[#01040A]/85 text-white backdrop-blur-md transition hover:border-white/30 hover:scale-105 active:scale-95 cursor-pointer"
                type="button"
                aria-label="Close certificate preview"
                onClick={() => setSelectedCert(null)}
              >
                <X size={18} />
              </button>

              <div className="relative min-h-[50svh] flex-1 overflow-hidden rounded-xl bg-[#01040a] flex items-center justify-center">
                <img
                  className="block max-h-[75svh] w-full object-contain p-1 sm:p-3"
                  src={selectedCert.src}
                  alt={selectedCert.alt}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 px-2 pb-1 pt-3">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[#5d85dbfa]">
                    {selectedCert.categoryLabel || "Credential"} / {selectedCert.tone}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    {selectedCert.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AboutSection;
