import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { designerProfile } from "../data/portfolioData";
import Reveal from "./Reveal";

function ContactSection() {
  return (
    <section id="contact" className="contact-section relative z-10 overflow-hidden">
      <div className="page-wrap relative">
        <span className="contact-cross contact-cross-one" aria-hidden="true">
          +
        </span>
        <span className="contact-cross contact-cross-two" aria-hidden="true">
          +
        </span>
        <Reveal className="contact-grid grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.62fr)] lg:items-end">
          <div className="min-w-0">
            <p className="eyebrow">Contact</p>
            <h2 className="display-title mt-5 text-[3.6rem] uppercase leading-[0.92] text-white sm:text-[6.2rem] lg:text-[5.7rem]">
              Thank You
              <span className="block text-outline">For Watching</span>
            </h2>
          </div>
          <div className="glass-panel min-w-0 p-5 sm:p-7">
            <p className="text-xl font-semibold leading-8 text-white">
              Have a project in mind? Let&apos;s create something together.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a className="blue-button inline-flex justify-center" href={`mailto:${designerProfile.email}`}>
                Contact Me
                <Mail size={16} />
              </a>
              <button
                className="ghost-button inline-flex justify-center"
                type="button"
                aria-label="Download Portfolio PDF placeholder"
                title="Add the final portfolio PDF path here later"
              >
                Download Portfolio PDF
                <Download size={16} />
              </button>
              <button
                className="ghost-button inline-flex justify-center sm:col-span-2"
                type="button"
                aria-label="View Behance profile placeholder"
                title="Replace this placeholder with the Behance profile link later"
              >
                View Behance
                <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 text-sm text-[#C8D4EA]/78">
              <a className="inline-flex items-center gap-2 transition hover:text-white" href={`mailto:${designerProfile.email}`}>
                <Mail size={16} className="text-[#5D85DB]" />
                {designerProfile.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-[#5D85DB]" />
                {designerProfile.location}
              </span>
              <div className="flex flex-wrap gap-2">
                {["Facebook placeholder", "Instagram placeholder", "Behance placeholder"].map((social) => (
                  <span key={social} className="skill-chip">
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
