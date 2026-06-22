import { Briefcase, MapPin } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'

const experience = [
  {
    org: "Zipline",
    role: "Technical Program Management Intern, Avionics",
    location: "South San Francisco, CA",
    period: "Sep 2024 - Dec 2024",
    bullets: [
      "Led cross-functional teams in redesigning three critical aircraft systems for next-generation builds",
      "Streamlined project execution using Jira/Wrike to eliminate blockers and accelerate delivery",
      "Bridged engineering and leadership teams to ensure seamless integration across avionics systems",
    ],
  },
  {
    org: "Tesla",
    role: "Mechanical Design Engineering Intern",
    location: "Gigafactory Berlin Brandenburg",
    period: "Jun 2024 - Sep 2024",
    bullets: [
      "Redesigned high-voltage test equipment for Supercharger V4, enhancing manufacturability and precision",
      "Engineered precision PCBA test frames with micron-level alignment for production quality control",
      "Optimized testing reliability through data-driven improvements and systematic troubleshooting",
    ],
  },
  {
    org: "NASA Big Idea Challenge - METALS",
    role: "Lead Test Engineer",
    location: "Evanston, IL",
    period: "Sep 2023 - Mar 2025",
    bullets: [
      "Won NASA's Artemis Award and secured $146K grant for revolutionary lunar structure technology",
      "Achieved 35% volume reduction through advanced ANSYS FEA simulations for lunar gravity conditions",
      "Elevated Technology Readiness Level from 3 to 5 through rigorous vacuum and cryogenic testing",
      "Fabricated 40+ prototypes using advanced manufacturing techniques (TIG welding, hydroforming)",
    ],
  },
  {
    org: "NUSTARS Rocketry",
    role: "Wind Tunnel Testing Engineer",
    location: "Northwestern University",
    period: "Sep 2024 - Feb 2025",
    bullets: [
      "Pioneered wind tunnel testing for NASA Student Launch Competition rocket's Active Drag System",
      "Optimized 16-hour test campaigns reaching Mach 0.31 with comprehensive aerodynamic mapping",
      "Validated CFD models against empirical data to enhance simulation accuracy for future designs",
    ],
  },
];

export default function Experience() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.7", "end 0.7"],
  })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })

  return (
    <div className="min-h-screen site-bg text-navy-800">
      <section className="scroll-mt-24 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-14 flex items-center gap-3 text-navy-900">
            <span className="inline-block w-10 h-[3px] rounded bg-accent" />
            Experience
          </h2>

          <div ref={timelineRef} className="relative">
            {/* static track */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-navy-200 sm:-translate-x-1/2" />
            {/* animated progress line that grows as you scroll */}
            <motion.div
              className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-accent origin-top sm:-translate-x-1/2"
              style={{ scaleY: lineProgress }}
            />

            <div className="space-y-12 sm:space-y-20">
              {experience.map((exp, idx) => {
                const left = idx % 2 === 0
                return (
                  <div key={exp.org} className="relative grid sm:grid-cols-2 gap-0 sm:gap-12">
                    {/* node on the line */}
                    <motion.span
                      className="absolute left-4 sm:left-1/2 top-7 w-4 h-4 -translate-x-1/2 rounded-full border-[3px] border-accent bg-paper z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.15 }}
                      viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
                    />

                    {/* period label on the opposite side (desktop) */}
                    <div className={`hidden sm:flex items-start pt-6 ${left ? 'order-2 justify-start' : 'order-1 justify-end'}`}>
                      <motion.span
                        className="tech-label text-navy-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
                      >
                        {exp.period}
                      </motion.span>
                    </div>

                    {/* card */}
                    <motion.div
                      className={`pl-12 sm:pl-0 ${left ? 'order-1' : 'order-2'}`}
                      initial={{ opacity: 0, y: 40, x: 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
                    >
                      <div className="rounded-2xl border border-navy-100 shadow-sm bg-white lift p-6">
                        <div className="flex items-center gap-2 tech-label text-navy-400 sm:hidden">
                          <Briefcase className="w-4 h-4"/>
                          <span>{exp.period}</span>
                        </div>
                        <h3 className="text-lg font-semibold mt-2 sm:mt-0 text-navy-900">{exp.role}</h3>
                        <div className="text-navy-500 flex items-center gap-2 mt-1 text-sm">
                          <MapPin className="w-4 h-4 flex-shrink-0"/> {exp.org} • {exp.location}
                        </div>
                        <ul className="mt-4 space-y-2 text-navy-700 text-[0.95rem]">
                          {exp.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
