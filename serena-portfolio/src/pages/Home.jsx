import { motion } from 'framer-motion'
import { Mail, Link as LinkIcon } from 'lucide-react'
import { Button, Badge } from '../components/UI'
import serenaPhoto from '../assets/serena-photo.jpg'
import nuLogo from '../assets/NU-logo.png'

const LINKS = {
  email: "serenafrolli2026@u.northwestern.edu",
  linkedin: "https://www.linkedin.com/in/serena-frolli-a1794a223",
  // github: "https://github.com/serenafrolli",
};

const TAGS = {
  mech: "Mechanical Engineering",
  aero: "Aerospace Engineering",
  CAD: "CAD",
  cfd: "CFD",
  fea: "FEA",
  controls: "Controls",
  manufacturing: "Manufacturing",
  data: "Data Analysis",
  pm: "Program Management",
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
              Serena Frolli
            </h1>
            <p className="text-lg sm:text-xl text-blue-800 font-medium mt-2 whitespace-nowrap">
              Mechanical Engineer in the making. Aerospace enthusiast. Runner. Daughter and friend. Italian.
            </p>
            <p className="mt-4 text-slate-600">
              
              Ciao! <br /><br />
              My name is Serena Frolli and I am a fourth-year student at Northwestern University pursuing a 
              Bachelor of Science in Mechanical Engineering as well as a Master of Science in Mechanical Engineering 
              within the combined Baherlor's and Master's program at Northwestern. <br />I am an asprining professional in the 
              aerospace sector with a passion for engineering that pushes the boundaries of technology and has a real impact 
              on the world. <br /><br /> Outside of engineering, up to my Junior year, I was a D1 Cross Country student-athlete at my school. 
              I am in love with running as a sport, it has shaped who I am today. <br /><br /> I am originally from Genova, Italy and I 
              attended high school at the Istituto di Istruzione Superiore Savoia Benincasa in Ancona, Italy. <br /> This portfolio 
              highlights the projects I have worked on and the skills I have acquired in my academic career and beyond. 
              <br /><br /> Per Aspera Ad Astra!

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
            className="flex justify-center"
          >
            <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem]">
              {/* Serena Photo */}
              <img 
                src={serenaPhoto}
                alt="Serena Frolli - Mechanical Engineer"
                className="aspect-[3/4] rounded-2xl object-cover border shadow-lg w-full h-full"
              />
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-cyan-100 border overflow-hidden shadow-lg hidden" />
              
              {/* Northwestern Logo */}
              <div className="absolute -top-20 -right-20 w-70 h-70 sm:w-48 sm:h-48 bg-white rounded-full shadow-lg border-2 border-white flex items-center justify-center">
                <img 
                  src={nuLogo}
                  alt="Northwestern University Logo"
                  className="w-28 h-28 sm:w-40 sm:h-40 object-contain"
                />
              </div>
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
