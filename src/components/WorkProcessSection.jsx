import { GitBranch, Spline, PenTool, CheckCircle } from "lucide-react";
import Reveal from "./Reveal";

const processes = [
  {
    num: "01.",
    title: "Brief & Goals",
    icon: <GitBranch size={22} strokeWidth={2} />,
  },
  {
    num: "02.",
    title: "Concept & Direction",
    icon: <Spline size={22} strokeWidth={2} />,
  },
  {
    num: "03.",
    title: "Design & Editing",
    icon: <PenTool size={22} strokeWidth={2} />,
  },
  {
    num: "04.",
    title: "Final Delivery",
    icon: <CheckCircle size={22} strokeWidth={2} />,
  },
];

import { motion } from "motion/react";

function WorkProcessSection() {
  return (
    <section className="content-section relative z-10 overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto w-full max-w-[112rem] px-4 md:px-6 lg:px-10 2xl:px-16">
        <header className="mb-8 grid gap-7 border-b border-white/10 pb-8 lg:mb-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:pb-12">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#78A4FF]">
              Workflow / 2026
            </p>
            <h2 className="display-title mt-4 text-[clamp(3.2rem,8vw,7.2rem)] uppercase leading-[0.9] text-white">
              Work
              <br />
              Process
            </h2>
          </Reveal>
          <Reveal className="max-w-3xl lg:justify-self-end" delay={0.1}>
            <p className="text-lg leading-8 text-[#C8D4EA]/86 sm:text-xl">
              A glimpse into my collaborative and iterative design process.
            </p>
          </Reveal>
        </header>

        <div className="relative mt-8 lg:mt-16">
          {/* Background Track */}
          <div className="absolute left-[12%] top-[3.5rem] hidden h-[1px] w-[76%] bg-white/10 lg:block"></div>
          
          {/* Glowing Line that draws itself */}
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "76%" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
            className="absolute left-[12%] top-[3.5rem] hidden h-[2px] bg-gradient-to-r from-transparent via-[#5D85DB] to-[#A3C2FF] lg:block shadow-[0_0_20px_rgba(93,133,219,0.8)]"
          ></motion.div>

          {/* Shooting Star / Comet on the line */}
          <motion.div
            initial={{ left: "12%", opacity: 0, scale: 0 }}
            whileInView={{ left: "88%", opacity: [0, 1, 1, 0], scale: [0, 1.5, 1, 0] }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2, times: [0, 0.1, 0.9, 1] }}
            className="absolute top-[3.4rem] -ml-6 hidden h-[4px] w-[120px] rounded-full bg-gradient-to-r from-transparent via-white to-transparent blur-[2px] lg:block z-20"
          ></motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 relative z-10 perspective-[2000px]">
            {processes.map((process, i) => (
              <motion.div
                key={process.num}
                initial={{ rotateX: 60, rotateY: i % 2 === 0 ? 10 : -10, opacity: 0, y: 100, z: -200 }}
                whileInView={{ rotateX: 0, rotateY: 0, opacity: 1, y: 0, z: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 80, 
                  damping: 12, 
                  delay: i * 0.35 + 0.3
                }}
                style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
                className="group relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0a1430]/90 to-[#040914]/90 backdrop-blur-2xl p-6 transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] hover:border-[#5D85DB]/50 hover:bg-gradient-to-b hover:from-[#122452]/90 hover:to-[#0a1430]/90 hover:shadow-[0_20px_50px_rgba(93,133,219,0.3)] sm:p-8"
              >
                {/* Dynamic Spotlight on Hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute -inset-x-20 -top-20 h-40 w-full bg-gradient-to-b from-[#5D85DB]/20 to-transparent blur-3xl"></div>
                </div>
                
                <div className="flex items-start justify-between relative z-10">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.35 + 0.6 }}
                    viewport={{ once: true }}
                    className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#5D85DB]/40 bg-[#0B1A42] text-[#A3C2FF] shadow-[0_0_20px_rgba(93,133,219,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:border-white/60 group-hover:bg-[#153075] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    {/* Ripple effect on appear */}
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 1 }}
                      whileInView={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut", delay: i * 0.35 + 0.7 }}
                      viewport={{ once: true }}
                      className="absolute inset-0 rounded-2xl border-2 border-[#5D85DB]"
                    />
                    {process.icon}
                  </motion.div>
                  <div className="font-mono text-7xl font-black tracking-tighter text-white/[0.04] transition duration-700 group-hover:text-white/[0.15] group-hover:-translate-y-2 sm:text-8xl">
                    {process.num}
                  </div>
                </div>

                <div className="mt-auto pt-16 relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.35 + 0.8 }}
                    viewport={{ once: true }}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-bold tracking-wide text-[#C8D4EA] transition-all duration-500 group-hover:border-[#5D85DB]/40 group-hover:bg-[#5D85DB]/10 group-hover:text-white group-hover:shadow-[inset_0_0_20px_rgba(93,133,219,0.1)]"
                  >
                    {process.title}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkProcessSection;
