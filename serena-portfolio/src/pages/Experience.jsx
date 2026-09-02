import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const experience = [
  {
    id: 'zipline-2026',
    org: 'Zipline',
    year: 2026,
    role: 'Technical Program Management Intern',
    team: 'Avionics · Antennas & Air Data Systems',
    location: 'South San Francisco, CA',
    period: 'Jun 2026 – Sep 2026',
    bullets: [
      'Led Antennas and Air Data program execution toward scaled production, establishing milestones, owners, and decision points to advance production readiness',
      'Directed change control for 12 high-impact design changes, guiding electrical, mechanical, systems, and program stakeholders through review, approval, and implementation',
      'Mapped dependencies between the retuning campaign and other line-replaceable units on the aircraft, surfacing integration risks and sequencing work to protect aircraft-level performance',
    ],
  },
  {
    id: 'zipline-2025',
    org: 'Zipline',
    year: 2025,
    role: 'Technical Program Management Intern',
    team: 'Avionics · Flex Harnesses & Zip Cameras',
    location: 'South San Francisco, CA',
    period: 'Sep 2025 – Dec 2025',
    bullets: [
      'Managed timelines for flex harnesses and camera systems in a company-wide cost and mass-reduction redesign campaign, enabling timely integration into next-generation aircraft builds',
      'Drove cross-functional execution by facilitating goal alignment, tracking dependencies, and communicating progress between engineering and leadership stakeholders using Jira and Wrike',
      'Coordinated between electrical, mechanical, and systems engineers to resolve blockers during design iterations',
    ],
  },
  {
    id: 'tesla',
    org: 'Tesla',
    year: 2025,
    role: 'Mechanical Design Engineering Intern',
    team: 'Manufacturing & Testing Team',
    location: 'Gigafactory Berlin Brandenburg',
    period: 'Jun 2025 – Sep 2025',
    bullets: [
      'Owned the redesign of a high-voltage end effector for a top-level assembly tester for Supercharger V4, improving manufacturability, durability, and ergonomics while ensuring unit defect detection capabilities',
      'Designed an end-of-line precision PCBA tester considering electrical routing and tolerance requirements for fine alignment of tester pins with the unit under test',
      'Improved testing technologies and equipment reliability through continuous troubleshooting, defect detection optimization, and long-term system enhancements',
    ],
  },
  {
    id: 'nustars',
    org: 'NUSTARS Rocketry',
    year: 2024,
    role: 'Wind Tunnel Testing Engineer',
    team: 'Space Technology & Rocketry Society',
    location: 'Northwestern University',
    period: 'Sep 2024 – Feb 2025',
    bullets: [
      'Conducted wind tunnel testing for the NUSTARS Active Drag System (ADS) for the 2025 NASA Student Launch Competition Rocket, mapping actuation states to drag coefficients',
      'Optimized a 16-hour test schedule, maximizing design points by varying velocity (up to Mach 0.31), angle of attack, and ADS actuation state',
      'Analyzed discrepancies between CFD and empirical results to inform future simulations',
    ],
  },
  {
    id: 'metals',
    org: 'METALS',
    year: 2023,
    role: 'Lead Test Engineer',
    team: 'Metallic Expandable Technology for Artemis Lunar Structures',
    location: 'Evanston, IL',
    period: 'Sep 2023 – Mar 2025',
    bullets: [
      'Led a diverse engineering team, managing budget constraints and technical development to deliver a functional final product as part of the 2024 NASA BIG Idea Challenge',
      'Performed FEA simulations in ANSYS, optimizing the design to achieve a 35% reduction in stowed volume while maintaining structural integrity in lunar gravity conditions',
      'Fabricated 40+ prototypes using TIG welding, water jet cutting, and hydroforming, reducing design cycle time',
      'Executed vacuum chamber and cryogenic testing, elevating the structure’s Technology Readiness Level (TRL) from 3 to 5',
      'Won the Artemis Award for outstanding innovation in space technology and secured a $146,000 NASA grant',
    ],
  },
]

const years = [...new Set(experience.map((e) => e.year))].sort((a, b) => b - a)

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0)
  const panelRefs = useRef([])

  useEffect(() => {
    // Whichever panel's center sits closest to the middle of the viewport wins.
    const update = () => {
      const mid = window.innerHeight / 2
      let best = 0
      let bestDist = Infinity
      panelRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top + rect.height / 2 - mid)
        if (dist < bestDist) {
          bestDist = dist
          best = i
        }
      })
      setActiveIdx((prev) => (prev === best ? prev : best))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const activeYear = experience[activeIdx]?.year

  const jumpToYear = (year) => {
    const idx = experience.findIndex((e) => e.year === year)
    if (idx !== -1) panelRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-navy-900 text-paper">
      {/* Intro */}
      <section className="relative blueprint-grid border-b border-navy-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
          <motion.p
            className="tech-label text-accent-light mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            2023 — 2026
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Experience
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-navy-200 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Program management, mechanical design, and test engineering — from lunar structures
            to autonomous aircraft.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <div className="relative">
        {/* Sticky year rail (desktop) */}
        <div className="hidden lg:block fixed left-10 top-1/2 -translate-y-1/2 z-30">
          <div className="relative flex flex-col gap-8">
            <span className="absolute left-[5px] top-2 bottom-2 w-px bg-navy-700" aria-hidden="true" />
            {years.map((year) => {
              const isActive = year === activeYear
              return (
                <button
                  key={year}
                  onClick={() => jumpToYear(year)}
                  className="relative flex items-center gap-4 group"
                  aria-label={`Jump to ${year}`}
                >
                  <span
                    className={`relative z-10 block rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-[11px] h-[11px] bg-accent ring-4 ring-accent/20 -ml-[1px]'
                        : 'w-[9px] h-[9px] bg-navy-600 group-hover:bg-navy-400'
                    }`}
                  />
                  <span
                    className={`tech-label transition-all duration-300 ${
                      isActive ? 'text-accent' : 'text-navy-500 group-hover:text-navy-300'
                    }`}
                  >
                    {year}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Full-viewport panels */}
        {experience.map((exp, idx) => (
          <section
            key={exp.id}
            ref={(el) => (panelRefs.current[idx] = el)}
            className="relative min-h-screen flex items-center border-b border-navy-800/60 overflow-hidden"
          >
            {/* oversized index watermark */}
            <span
              className="pointer-events-none select-none absolute right-4 sm:right-10 bottom-4 font-display font-bold text-navy-800/50 leading-none text-[7rem] sm:text-[12rem]"
              aria-hidden="true"
            >
              {String(idx + 1).padStart(2, '0')}
            </span>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:pl-32 py-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
              >
                <p className="tech-label text-accent-light mb-5">{exp.period}</p>

                <h2 className="font-display font-bold tracking-tight text-5xl sm:text-7xl mb-5 leading-[1.05]">
                  {exp.org}
                </h2>

                <p className="text-xl sm:text-2xl text-paper font-medium">{exp.role}</p>
                <p className="text-base sm:text-lg text-accent-light mt-1">{exp.team}</p>

                <p className="flex items-center gap-2 text-navy-300 text-sm mt-3">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {exp.location}
                </p>

                <span className="block w-16 h-px bg-navy-600 my-8" aria-hidden="true" />

                <ul className="space-y-4 max-w-3xl">
                  {exp.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-4 text-navy-100 text-base sm:text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                      viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
