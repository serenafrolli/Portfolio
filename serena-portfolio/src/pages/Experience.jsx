import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import { Card, CardContent } from '../components/UI'

const experience = [
  {
    org: "Zipline",
    role: "Technical Program Management Intern, Avionics",
    location: "South San Francisco",
    period: "Sep 2025 - Dec 2025",
    bullets: [
      "Managed timelines for key products in a cost/mass-reduction campaign",
      "Drove cross-functional execution using Jira and Wrike",
      "Coordinated engineers to resolve blockers",
      "Provided \"source of truth\" documentation",
    ],
  },
  {
    org: "Tesla",
    role: "Mechanical Design Engineering Intern, Manufacturing and Testing Team",
    location: "Gigafactory Berlin Brandenburg",
    period: "Jun 2025 - Sep 2025",
    bullets: [
      "Redesigned a high voltage end effector for Supercharger V4",
      "Designed a precision PCBA tester frame",
      "Improved testing technologies",
    ],
  },
  {
    org: "METALS (Metallic Expandable Technology for Artemis Lunar Structures)",
    role: "Lead Test Engineer",
    location: "Evanston, IL",
    period: "Sep 2023 - Mar 2025",
    bullets: [
      "Led an engineering team for a NASA Big Idea Challenge project",
      "Performed FEA simulations (ANSYS)",
      "Fabricated 40+ metallic prototypes",
      "Executed vacuum chamber and cryogenic testing",
      "Won the Artemis Award securing a $146,000 NASA grant",
    ],
  },
  {
    org: "Northwestern University Space Technology and Rocketry Society",
    role: "Team Member on Wind Tunnel Testing",
    location: "Northwestern University",
    period: "Sep 2024 - Feb 2025",
    bullets: [
      "Conducted wind tunnel testing for the NUSTARS Active Drag System",
      "Optimized test schedules",
      "Analyzed CFD discrepancies",
    ],
  },
];

export default function Experience() {
  // Group experiences by year
  const experiencesByYear = experience.reduce((acc, exp) => {
    // Extract year from period (e.g., "Sep 2025 - Dec 2025" -> "2025")
    const yearMatch = exp.period.match(/\d{4}/)
    const year = yearMatch ? yearMatch[0] : 'Other'
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(exp)
    return acc
  }, {})

  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(experiencesByYear).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <div className="min-h-screen site-bg text-slate-900">
      <section className="scroll-mt-24 py-8">
        <div className="max-w-[90rem] mx-auto px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
            Relevant Experience
          </h2>
          <div className="space-y-12">
            {sortedYears.map((year) => (
              <div key={year} className="flex gap-8">
                {/* Year label on the left */}
                <div className="flex-shrink-0 w-20 pt-2 flex items-start">
                  <h3 className="text-5xl font-bold text-slate-400" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                    {year}
                  </h3>
                </div>
                
                {/* Horizontal scrollable carousel */}
                <div className="flex-1 overflow-x-auto pb-4" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>
                  <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
                    {experiencesByYear[year].map((exp, index) => (
                      <motion.div
                        key={exp.org}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex-shrink-0 w-[42rem]"
                      >
                        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full border-l-4 border-l-blue-600">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 text-sm text-slate-600 mb-1.5">
                                  <Briefcase className="w-4 h-4 text-blue-600"/>
                                  <span className="font-medium">{exp.period}</span>
                                </div>
                                <h3 className="text-lg font-semibold mt-1 text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                                <div className="text-slate-600 flex items-center gap-2 mt-1.5 text-sm">
                                  <MapPin className="w-4 h-4 text-blue-600"/> 
                                  <span className="font-medium">{exp.org}</span>
                                  <span className="text-slate-400">•</span>
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>
                            <ul className="list-none pl-0 mt-3 space-y-1.5">
                              {exp.bullets.map((b, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-700">
                                  <span className="text-blue-600 font-bold mt-1 flex-shrink-0">→</span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
