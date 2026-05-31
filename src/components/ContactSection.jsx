import { ArrowUpRight, Download, Mail, MapPin, MessageSquare, Camera, Palette, Briefcase } from "lucide-react";
import { designerProfile } from "../data/portfolioData";
import Reveal from "./Reveal";

function ContactSection() {
  return (
    <section id="contact" className="contact-section relative z-10 overflow-hidden py-24 lg:py-32">
      <div className="page-wrap relative">
        <span className="contact-cross contact-cross-one" aria-hidden="true">
          +
        </span>
        <span className="contact-cross contact-cross-two" aria-hidden="true">
          +
        </span>
        <Reveal className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold tracking-widest text-[#78A4FF] uppercase backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5D85DB] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#78A4FF]"></span>
              </span>
              Available for work
            </div>
            <h2 className="display-title mt-5 text-[4rem] uppercase leading-[0.95] text-white sm:text-[6.5rem] lg:text-[6rem]">
              Thank You
              <span className="block text-outline opacity-80 mt-2">For Watching</span>
            </h2>
          </div>

          <div className="group relative min-w-0 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0B1630]/90 to-[#040A18]/90 p-8 shadow-2xl backdrop-blur-3xl transition-all duration-700 hover:border-[#5D85DB]/40 hover:bg-gradient-to-br hover:from-[#0E1F42]/90 hover:to-[#050C1D]/90 hover:shadow-[0_30px_60px_rgba(93,133,219,0.15)] sm:p-12">
            {/* Ambient Glow */}
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#5D85DB]/20 blur-[80px] transition-opacity duration-700 opacity-40 group-hover:opacity-100"></div>
            
            <h3 className="relative z-10 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Let&apos;s create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D85DB] to-[#A3C2FF]">extraordinary</span> together.
            </h3>
            
            <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2">
              <a className="group/btn relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#5D85DB] to-[#436ecb] px-6 py-4 font-semibold text-white shadow-[0_10px_20px_rgba(93,133,219,0.2)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_30px_rgba(93,133,219,0.4)] hover:brightness-110" href={`mailto:${designerProfile.email}`}>
                <span className="relative z-10">Get in touch</span>
                <Mail size={18} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
              <button className="group/btn relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] hover:border-white/30" type="button">
                <span>Download CV</span>
                <Download size={18} className="transition-transform duration-300 group-hover/btn:-translate-y-1" />
              </button>
            </div>

            <div className="relative z-10 mt-10 space-y-8 border-t border-white/10 pt-8">
              <div className="flex flex-col gap-5 text-sm font-medium text-[#C8D4EA]">
                <a className="group/link inline-flex items-center gap-4 transition-colors hover:text-white" href={`mailto:${designerProfile.email}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover/link:scale-110 group-hover/link:border-[#5D85DB]/40 group-hover/link:bg-[#5D85DB]/20 group-hover/link:text-[#78A4FF] group-hover/link:shadow-[0_0_20px_rgba(93,133,219,0.2)]">
                    <Mail size={18} />
                  </div>
                  <span className="text-base tracking-wide">{designerProfile.email}</span>
                </a>
                <span className="group/link inline-flex items-center gap-4 transition-colors hover:text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover/link:scale-110 group-hover/link:border-[#5D85DB]/40 group-hover/link:bg-[#5D85DB]/20 group-hover/link:text-[#78A4FF] group-hover/link:shadow-[0_0_20px_rgba(93,133,219,0.2)]">
                    <MapPin size={18} />
                  </div>
                  <span className="text-base tracking-wide">{designerProfile.location}</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {[
                  { icon: <MessageSquare size={20} strokeWidth={1.5} />, label: "Facebook" },
                  { icon: <Camera size={20} strokeWidth={1.5} />, label: "Instagram" },
                  { icon: <Palette size={20} strokeWidth={1.5} />, label: "Behance" },
                  { icon: <Briefcase size={20} strokeWidth={1.5} />, label: "LinkedIn" }
                ].map((social, i) => (
                  <a key={i} href="#" aria-label={social.label} className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#C8D4EA] transition-all duration-300 hover:-translate-y-2 hover:border-[#5D85DB]/50 hover:bg-[#5D85DB]/20 hover:text-white hover:shadow-[0_10px_20px_rgba(93,133,219,0.25)]">
                    {social.icon}
                  </a>
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
