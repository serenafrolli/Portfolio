import { Briefcase, MapPin } from 'lucide-react'
import { Card, CardContent, Section } from '../components/UI'

const experience = [
  {
    org: "Tesla – Gigafactory Berlin-Brandenburg",
    role: "Mechanical Design Intern (EOL Testing Systems)",
    location: "Berlin, Germany",
    period: "Summer 2025",
    bullets: [
      "EOL testers for Superchargers, Power Electronics, and Battery Packs",
      "Fixture design, tolerance stack-ups, and DFM for rapid iteration",
      "Data-driven validation for throughput + reliability",
    ],
  },
  {
    org: "Zipline (Prospective) – Emerging Talent",
    role: "TPM/Mechanical/Quality Intern (Fall 2025 – pending)",
    location: "South San Francisco, CA",
    period: "Fall 2025",
    bullets: [
      "Prepared TPM playbooks: schedule risk burn-down, cross-team comms",
      "Investigated drone system risks and test strategy",
    ],
  },
  {
    org: "Northwestern University",
    role: "Machine Shop Trainer / Student Researcher",
    location: "Evanston, IL",
    period: "2023–2025",
    bullets: [
      "Trained students on mill/lathe/CNC routing and shop safety",
      "Research on aerodynamics and structural analysis (ANSYS/FEA)",
    ],
  },
  {
    org: "NASA – BIG Idea Challenge",
    role: "Team Lead / Mechanical Engineer",
    location: "Evanston, IL",
    period: "2024",
    bullets: [
      "Led concept development and prototyping for NASA BIG Idea Challenge",
      "Owned mechanical architecture and test planning",
      "Coordinated multi-disciplinary team on aggressive timeline",
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
