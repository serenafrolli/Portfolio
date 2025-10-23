import { Briefcase, MapPin } from 'lucide-react'
import { Card, CardContent, Section } from '../components/UI'

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
  return (
    <div className="min-h-screen site-bg text-slate-900">
      <Section label="Experience">
        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((exp) => (
            <Card key={exp.org}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Briefcase className="w-4 h-4"/>
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-lg font-semibold mt-1">{exp.role}</h3>
                    <div className="text-slate-600 flex items-center gap-2 mt-1 text-sm">
                      <MapPin className="w-4 h-4"/> {exp.org} • {exp.location}
                    </div>
                  </div>
                </div>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  {exp.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
