import { Code2, ChevronRight, ExternalLink } from 'lucide-react'
import { Card, CardContent, Badge, Section } from '../components/UI'

const TAGS = {
  mech: "Mechanical Engineering",
  aero: "Aerospace",
  cfd: "CFD",
  fea: "FEA",
  controls: "Controls",
  manufacturing: "Manufacturing",
  data: "Data Analysis",
  pm: "Program Mgmt",
};

const projects = [
  {
    title: "Pump Torque Emulator via Flywheel",
    period: "2025",
    description:
      "Designed and analyzed a flywheel system to emulate the startup and steady-state torque of a centrifugal water pump so firmware behaves as if a real pump is attached.",
    highlights: [
      "Modeled motor + load dynamics; matched torque ripple and spin-up",
      "Optimized hole pattern to minimize inertia imbalance",
      "Python tooling for torque curves and visualization",
    ],
    tags: [TAGS.mech, TAGS.controls, TAGS.data],
    links: [
      { label: "Code", href: "#" },
      { label: "Write-up", href: "#" },
    ],
  },
  {
    title: "Pressure Sensor Data Analysis",
    period: "2025",
    description:
      "Signal processing and calibration pipeline for multi-region static pressure measurements (p2 = 32.75 kPa, p3 = 23.68 kPa), including uncertainty quantification.",
    highlights: [
      "Automated cleaning + outlier handling",
      "Repeatability study and confidence bounds",
    ],
    tags: [TAGS.data, TAGS.mech],
    links: [],
  },
  {
    title: "Titan Rotor/Airfoil CFD Studies",
    period: "2024–2025",
    description:
      "Set up RANS CFD for Titan atmosphere propeller/airfoil studies; computed Reynolds numbers, validated against literature, and compared to experimental trends.",
    highlights: ["Meshing strategy & y+ control", "Post-processing scripts for lift/drag"],
    tags: [TAGS.aero, TAGS.cfd],
    links: [],
  },
  {
    title: "Two‑Stage Gear Train Design",
    period: "2025",
    description:
      "Designed reduction gearbox (70 kW @ 2600 rpm → ~400 rpm). Included AGMA bending/contact stress checks, fit/tolerance selection (h6/p6), and FEA sanity checks.",
    highlights: ["Sizing + safety factors", "Face width factors 13/12 (pinion/gear)"],
    tags: [TAGS.mech, TAGS.manufacturing, TAGS.fea],
    links: [],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen site-bg text-slate-900">
      <Section label="Selected Projects">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.title} className="group">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-100" />
                <div className="p-6">
                  <div className="text-sm text-slate-600 flex items-center gap-2">
                    <Code2 className="w-4 h-4"/> {p.period}
                  </div>
                  <h3 className="text-lg font-semibold mt-1">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                  <ul className="mt-3 space-y-1 text-sm">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-0.5"/>{h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (<Badge key={p.title + t}>{t}</Badge>))}
                  </div>
                  {p.links?.length ? (
                    <div className="mt-4 flex gap-3">
                      {p.links.map((l) => (
                        <a key={l.label} href={l.href} className="inline-flex items-center gap-1 text-sm underline underline-offset-4">
                          {l.label} <ExternalLink className="w-3 h-3"/>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
