import { motion } from 'framer-motion'
import { Mail, Link as LinkIcon } from 'lucide-react'
import { Button, Badge } from '../components/UI'

const LINKS = {
  email: "serenafrolli@example.com",
  linkedin: "https://www.linkedin.com/in/serena-frolli/",
  // github: "https://github.com/serenafrolli",
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

export default function Home() {
  return (
    <div className="min-h-screen site-bg text-slate-900">
      {/* Hero */}
      <section className="pt-10 pb-8 sm:pt-16 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Mechanical Engineer • Aerospace & Systems
            </h1>
            <p className="mt-4 text-slate-600">
              I design and analyze hardware that ships. From CFD and FEA to shop‑floor fixtures and
              end‑of‑line testers, I love turning ambiguous problems into reliable products.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${LINKS.email}`}>
                <Button>
                  <span className="inline-flex items-center gap-2">
                    <Mail className="w-4 h-4"/> Contact
                  </span>
                </Button>
              </a>
              <a href={LINKS.linkedin}>
                <Button variant="outline">
                  <span className="inline-flex items-center gap-2">
                    <LinkIcon className="w-4 h-4"/> LinkedIn
                  </span>
                </Button>
              </a>
              {/* GitHub link removed */}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[TAGS.mech, TAGS.aero, TAGS.cfd, TAGS.fea, TAGS.manufacturing, TAGS.pm].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-cyan-100 border overflow-hidden shadow-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 text-center">
            Explore My Work
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 rounded-2xl border bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className="text-slate-600 mb-4">My professional journey in mechanical engineering and testing systems</p>
              <a href="/experience" className="text-blue-600 hover:underline">View Experience →</a>
            </div>
            <div className="text-center p-6 rounded-2xl border bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Projects</h3>
              <p className="text-slate-600 mb-4">Technical projects from CFD studies to gear train design</p>
              <a href="/projects" className="text-blue-600 hover:underline">View Projects →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
