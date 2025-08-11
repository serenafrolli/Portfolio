import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Rocket, Wrench, Cpu, Mail, Link as LinkIcon, Github, ExternalLink, Download, School, Trophy, Briefcase, ChevronRight, MapPin } from 'lucide-react'

// --- Lightweight UI primitives (replace shadcn/ui) ---
function Card({ className = '', children }) {
  return <div className={`rounded-2xl border shadow-sm bg-white ${className}`}>{children}</div>
}
function CardContent({ className = '', children }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}
function Button({ variant='default', asChild=false, className='', children, ...props }) {
  const base = variant === 'outline'
    ? 'border bg-white hover:bg-gray-50'
    : 'bg-black text-white hover:bg-gray-800'
  const el = (
    <button className={`px-4 py-2 rounded-xl text-sm transition ${base} ${className}`} {...props}>
      {children}
    </button>
  )
  if (asChild) return children
  return el
}

// --- Editable data ---
const LINKS = {
  email: "serenafrolli@example.com", // TODO: replace with your real email
  linkedin: "https://www.linkedin.com/in/serena-frolli/", // TODO
  github: "https://github.com/serenafrolli", // TODO
  resume: "/Serena_Frolli_Resume.pdf", // place your resume file at public/Serena_Frolli_Resume.pdf
};

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
];

const academics = [
  {
    school: "Northwestern University",
    degree: "B.S. Mechanical Engineering",
    period: "2019–2025",
    details: [
      "StrengthsFinder: Activator, Learner, Ideation, Arranger, Restorative",
      "Aerospace focus; NASA-related research; ME 315/363/364/495 highlights",
    ],
  },
];

const athletics = [
  {
    team: "Northwestern University – Women’s Cross Country",
    role: "Student‑Athlete",
    period: "2019–2023",
    notes: ["Discipline, endurance, and team leadership carry into engineering"]
  }
];

const skills = [
  {
    title: "Core",
    items: ["Mechanical Design", "DFM/DFA", "GD&T", "Tolerance Stacks", "Materials"],
  },
  {
    title: "Analysis",
    items: ["CFD (RANS)", "ANSYS/FEA", "Dynamics", "Controls", "Heat Transfer"],
  },
  {
    title: "Software",
    items: ["Python", "MATLAB", "SolidWorks/Onshape", "Fusion 360", "Altium (basic)"]
  },
  {
    title: "PM",
    items: ["Agile for hardware", "Risk Mgmt", "Requirements", "Test planning"],
  },
];

const Section = ({ id, label, children }) => (
  <section id={id} className="scroll-mt-24 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 flex items-center gap-2">
        <span className="inline-block w-2 h-6 rounded bg-gradient-to-b from-purple-500 to-blue-500" />
        {label}
      </h2>
      {children}
    </div>
  </section>
);

const Badge = ({ children }) => (
  <span className="text-xs rounded-full px-2 py-1 border bg-white/50 backdrop-blur">{children}</span>
);

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button className="flex items-center gap-2 font-semibold" onClick={() => scrollTo('home')}>
            <Rocket className="w-5 h-5" />
            <span>Serena Frolli</span>
          </button>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            {[
              ["About", "about"],
              ["Experience", "experience"],
              ["Projects", "projects"],
              ["Skills", "skills"],
              ["Athletics", "athletics"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:opacity-80">
                {label}
              </button>
            ))}
            <a href={LINKS.resume} className="inline-flex items-center gap-1">
              <Download className="w-4 h-4" /> Resume
            </a>
          </nav>
          <button className="sm:hidden" onClick={() => setNavOpen(v => !v)} aria-label="Menu">
            <ChevronRight className={`w-6 h-6 transition-transform ${navOpen ? "rotate-90" : "rotate-0"}`} />
          </button>
        </div>
        {navOpen && (
          <div className="sm:hidden border-t">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-4 text-sm">
              {["about","experience","projects","skills","athletics","contact"].map((id) => (
                <button key={id} onClick={() => { setNavOpen(false); scrollTo(id); }} className="px-2 py-1 rounded bg-slate-100">
                  {id.charAt(0).toUpperCase()+id.slice(1)}
                </button>
              ))}
              <a href={LINKS.resume} className="px-2 py-1 rounded border inline-flex items-center gap-1">
                <Download className="w-4 h-4"/> Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="pt-10 pb-8 sm:pt-16 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Mechanical Engineer • Aerospace & Systems
            </h1>
            <p className="mt-4 text-slate-600">
              I design and analyze hardware that ships. From CFD and FEA to shop‑floor fixtures and
              end‑of‑line testers, I love turning ambiguous problems into reliable products.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${LINKS.email}`}><Button><span className="inline-flex items-center gap-2"><Mail className="w-4 h-4"/> Contact</span></Button></a>
              <a href={LINKS.linkedin}><Button variant="outline"><span className="inline-flex items-center gap-2"><LinkIcon className="w-4 h-4"/> LinkedIn</span></Button></a>
              <a href={LINKS.github}><Button variant="outline"><span className="inline-flex items-center gap-2"><Github className="w-4 h-4"/> GitHub</span></Button></a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[TAGS.mech, TAGS.aero, TAGS.cfd, TAGS.fea, TAGS.manufacturing, TAGS.pm].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-200 via-blue-200 to-teal-200 border overflow-hidden shadow-lg" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-white/70 backdrop-blur border grid place-content-center shadow">
                <Cpu className="w-10 h-10"/>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-white/70 backdrop-blur border grid place-content-center shadow">
                <Wrench className="w-10 h-10"/>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" label="About">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <p>
                Hi! I’m Serena Frolli, originally from Italy and graduating with a B.S. in Mechanical
                Engineering from Northwestern University. I’ve worked across aerospace, power
                electronics testing, and manufacturing. My happy place is the boundary where analysis
                meets build: quick loops from model → prototype → data → iterate.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Love: clean mechanisms, robust test plans, and tidy BOMs.</li>
                <li>Toolbelt: Python, MATLAB, ANSYS/FEA, SolidWorks/Onshape, tolerance analysis.</li>
                <li>Bonus: Student‑athlete mindset from NCAA Cross Country—consistency wins.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2 font-medium"><School className="w-4 h-4"/> Northwestern University</div>
              <div className="text-sm text-slate-600">B.S. Mechanical Engineering (2019–2025)</div>
              <div className="flex flex-wrap gap-2 pt-2">
                {academics[0].details.map((d) => (<Badge key={d}>{d}</Badge>))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" label="Experience">
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

      {/* Projects */}
      <Section id="projects" label="Selected Projects">
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
                      <li key={h} className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5"/>{h}</li>
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

      {/* Skills */}
      <Section id="skills" label="Skills">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <Card key={s.title}>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (<Badge key={it}>{it}</Badge>))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Athletics */}
      <Section id="athletics" label="Athletics">
        <div className="grid md:grid-cols-2 gap-6">
          {athletics.map((a) => (
            <Card key={a.team}>
              <CardContent className="p-6">
                <div className="text-sm text-slate-600 flex items-center gap-2">
                  <Trophy className="w-4 h-4"/> {a.period}
                </div>
                <h3 className="text-lg font-semibold mt-1">{a.team}</h3>
                <p className="mt-2">{a.role}</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  {a.notes.map((n) => (<li key={n}>{n}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" label="Get in touch">
        <Card>
          <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold">Let’s build something.</h4>
              <p className="text-slate-600 mt-1">Open to Mechanical/TPM roles in aerospace, electrification, and test engineering.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${LINKS.email}`}><Button><span className="inline-flex items-center gap-2"><Mail className="w-4 h-4"/> Email</span></Button></a>
              <a href={LINKS.linkedin}><Button variant="outline"><span className="inline-flex items-center gap-2"><LinkIcon className="w-4 h-4"/> LinkedIn</span></Button></a>
              <a href={LINKS.github}><Button variant="outline"><span className="inline-flex items-center gap-2"><Github className="w-4 h-4"/> GitHub</span></Button></a>
            </div>
          </CardContent>
        </Card>
      </Section>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Serena Frolli · Built with React & Tailwind · Vite
      </footer>
    </div>
  )
}
