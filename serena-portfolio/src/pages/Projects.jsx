import { Code2, ChevronRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent, Section } from '../components/UI'
import metalsRender from '../assets/METALS_FinalRender.png'
import nuLogo from '../assets/NU-logo.png'



const projects = [
  {
    title: "NASA Big Idea Challenge: METALS",
    period: "2024",
    description:
      "Advanced the development of inflatable metal systems for lunar infrastructure through innovative Free Inner Pressure Deformation (FIDU) technology.",
    highlights: [
      "Received $146,000 funding as one of six finalist schools",
      "Developed inflatable metal systems for lunar infrastructure",
      "Optmized the geometry of the inflatables for stress optimization",
      "Manufactured 50+ inflatables with various materials and shapes",
      "Received the ARTEMIS Award as top prize in the Challenge",
    ],

    links: [
      { label: "View Details", href: "/nasa-metals" },
    ],
  },
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

    links: [],
  },
  {
    title: "Titan Rotor/Airfoil CFD Studies",
    period: "2024–2025",
    description:
      "Set up RANS CFD for Titan atmosphere propeller/airfoil studies; computed Reynolds numbers, validated against literature, and compared to experimental trends.",
    highlights: ["Meshing strategy & y+ control", "Post-processing scripts for lift/drag"],

    links: [],
  },
  {
    title: "Two‑Stage Gear Train Design",
    period: "2025",
    description:
      "Designed reduction gearbox (70 kW @ 2600 rpm → ~400 rpm). Included AGMA bending/contact stress checks, fit/tolerance selection (h6/p6), and FEA sanity checks.",
    highlights: ["Sizing + safety factors", "Face width factors 13/12 (pinion/gear)"],

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
                {p.title === "NASA Big Idea Challenge: METALS" ? (
                  <div className="aspect-video overflow-hidden bg-slate-200 flex items-center justify-center">
                    <img 
                      src={metalsRender}
                      alt="METALS Final Render"
                      className="w-full h-full object-cover"
                      onLoad={() => console.log('METALS render loaded successfully!')}
                      onError={(e) => {
                        console.error('METALS render failed to load');
                        console.error('Image src:', e.target.src);
                        console.error('metalsRender value:', metalsRender);
                      }}
                    />
                    {/* Debug info */}
                    <div className="absolute top-2 left-2 text-xs text-white bg-black/50 p-1 rounded">
                      Debug: {metalsRender ? 'Image imported' : 'No image'}
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50" />
                )}
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

                  {p.links?.length ? (
                    <div className="mt-4 flex gap-3">
                      {p.links.map((l) => (
                        l.href.startsWith('/') ? (
                          <Link key={l.label} to={l.href} className="inline-flex items-center gap-1 text-sm underline underline-offset-4">
                            {l.label} <ChevronRight className="w-3 h-3"/>
                          </Link>
                        ) : (
                          <a key={l.label} href={l.href} className="inline-flex items-center gap-1 text-sm underline underline-offset-4">
                            {l.label} <ExternalLink className="w-3 h-3"/>
                          </a>
                        )
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
