import { motion } from 'framer-motion'
import { Mail, Link as LinkIcon, ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'
import FlowField from '../components/FlowField'
import serenaPhoto from '../assets/serena-photo.jpg'
import nuLogo from '../assets/NU-logo.png'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const LINKS = {
  email: "serenafrolli2026@u.northwestern.edu",
  linkedin: "https://www.linkedin.com/in/serena-frolli-a1794a223",
  // github: "https://github.com/serenafrolli",
};

const ROLES = [
  'a mechanical engineer',
  'a runner',
  'a project manager',
  'an aerospace enthusiast',
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero-kicker', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.3 })
        .fromTo('.hero-line', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.18 }, '-=0.3')
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.2')

      // rotating roles — each word flows in from the left like a streamline,
      // holds, then exits right
      const words = gsap.utils.toArray('.role-word')
      const cycle = gsap.timeline({ repeat: -1, delay: 1.6 })
      words.forEach((w) => {
        cycle.fromTo(w,
          { opacity: 0, x: -40, filter: 'blur(4px)' },
          { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.6, ease: 'power3.out' })
        cycle.to(w,
          { opacity: 0, x: 40, filter: 'blur(4px)', duration: 0.5, ease: 'power3.in' },
          '+=1.8')
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen site-bg text-navy-800">
      {/* Hero — full-bleed CFD flow field */}
      <section ref={heroRef} className="relative min-h-screen bg-navy-900 overflow-hidden flex items-center">
        <FlowField />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 pt-16 pb-24">
          <p className="hero-kicker tech-label text-accent-light mb-6">
            Northwestern University · BS/MS Mechanical Engineering
          </p>
          <h1 className="font-display font-bold tracking-tight text-paper leading-[1.05] text-5xl sm:text-7xl md:text-8xl">
            <span className="hero-line block">Ciao!</span>
            <span className="hero-line block">I'm Serena</span>
          </h1>
          <div className="hero-line relative h-24 sm:h-16 md:h-20 mt-4 overflow-hidden">
            {ROLES.map((role, i) => (
              <span
                key={role}
                className="role-word absolute inset-0 flex items-center font-display font-medium text-accent-light text-3xl sm:text-4xl md:text-5xl"
                style={{ opacity: i === 0 ? undefined : 0 }}
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-navy-300">
            <span className="tech-label mb-3">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative z-10 bg-paper">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="tech-label text-navy-500 mb-3">01 / About</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900">Ciao!</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12 items-start">
            <motion.div
              className="text-navy-700 leading-relaxed md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-6">
                My name is Serena Frolli and I am a fourth-year student at Northwestern University pursuing a Bachelor of Science in Mechanical Engineering as well as a Master of Science in Mechanical Engineering
                within the combined Bachelor's and Master's program at Northwestern.
              </p>

              <p className="text-lg mb-6">
                I am an aspiring professional in the aerospace sector with a passion for engineering that pushes
                the boundaries of technology and has a real impact on the world.
              </p>

              <p className="text-lg mb-6">
                Outside of engineering, up to my Junior year, I was a D1 Cross Country student-athlete at my school.
                I am in love with running as a sport, it has shaped who I am today.
              </p>

              <p className="text-lg mb-8">
                I am originally from Genova, Italy, and I attended high school at the Istituto di Istruzione Superiore
                Savoia Benincasa in Ancona. This portfolio highlights the projects I have worked on and the
                skills I have acquired in my academic career and beyond.
              </p>

              <motion.p
                className="font-display text-2xl font-bold text-navy-700"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Per Aspera Ad Astra!
              </motion.p>

              {/* Contact Buttons */}
              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <div className="relative mt-6 md:mt-2">
                <div className="absolute -inset-3 border border-navy-200 rounded-2xl translate-x-4 translate-y-4 pointer-events-none" />
                <img
                  src={serenaPhoto}
                  alt="Serena Frolli - Mechanical Engineer"
                  className="relative w-72 sm:w-80 h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -top-10 -right-8 sm:-right-10 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <img
                    src={nuLogo}
                    alt="Northwestern University Logo"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 sm:py-28 bg-navy-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="tech-label text-accent-light mb-3">02 / Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-paper">Explore My Work</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              className="lift p-8 rounded-2xl border border-navy-700 bg-navy-800/80 backdrop-blur"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-paper">Experience</h3>
              <p className="text-navy-200 mb-6">My professional journey in mechanical engineering and testing systems</p>
              <Link to="/experience" className="tech-label text-accent-light hover:text-paper transition-colors">View Experience →</Link>
            </motion.div>
            <motion.div
              className="lift p-8 rounded-2xl border border-navy-700 bg-navy-800/80 backdrop-blur relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-15"
                style={{ backgroundImage: 'url(METALS_FinalRender.png)' }}
              />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-paper">Projects</h3>
                <p className="text-navy-200 mb-6">Technical projects from CFD studies to gear train design</p>
                <Link to="/projects" className="tech-label text-accent-light hover:text-paper transition-colors">View Projects →</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
