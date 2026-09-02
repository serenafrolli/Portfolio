import { motion } from 'framer-motion'
import { ArrowLeft, Wrench, Gauge, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

const asset = (f) => import.meta.env.BASE_URL + f

export default function ME240() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const toc = [
    { id: 'overview', title: 'Overview', icon: Wrench },
    { id: 'analysis', title: 'Analysis', icon: Gauge },
    { id: 'iterations', title: 'Iterations', icon: RefreshCw },
  ]

  return (
    <div className="min-h-screen site-bg text-navy-800">
      {/* Header */}
      <div className="bg-navy-900 blueprint-grid text-paper">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <Link to="/projects" className="tech-label inline-flex items-center gap-2 text-navy-300 hover:text-paper mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="tech-label text-accent-light mb-4">ME 240 · Mechanical Design &amp; Manufacturing</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Robot Arm End Effector</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent-light mb-6">
              Lifting an egg without breaking it
            </h2>
            <p className="text-lg text-navy-200 max-w-3xl">
              Designed and tested a solenoid-actuated end effector for a TinkerKit Braccio robot arm,
              applying CAD, FEA, load calculations, and physical testing across multiple design
              iterations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white border-b border-navy-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <h3 className="text-xl font-semibold mb-6 text-navy-900">Table of Contents</h3>
          <div className="grid grid-cols-3 gap-4">
            {toc.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center p-4 rounded-lg border border-navy-100 hover:border-accent hover:bg-navy-50 transition-all duration-200 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="w-6 h-6 text-accent mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-navy-700">{item.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        {/* Overview */}
        <motion.section
          id="overview"
          className="mb-16 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-navy-900">Overview</h2>
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed mb-6">
                In <em>Introduction to Mechanical Design and Manufacturing</em> (ME 240), the task was to
                design and test a robot arm end effector that could pick up and move an egg without
                breaking it. The effector mounted onto a TinkerKit Braccio robot arm, and our job — working
                in pairs — was to redesign two components to accommodate a solenoid actuator: a static part
                fixed to the arm, and a moving part driven by the solenoid. The solenoid subassembly itself
                was already built.
              </p>
              <p className="text-lg leading-relaxed">
                The broader goal was to work through the full process of developing functional mechanical
                elements: CAD, theoretical load calculations, mechanical drawings, and repeated design
                iteration against real test results.
              </p>
            </div>
            <figure>
              <img
                src={asset('robot arm.png')}
                alt="TinkerKit Braccio robot arm"
                className="w-full rounded-lg shadow-md"
              />
              <figcaption className="tech-label text-navy-400 mt-2 text-center">
                TinkerKit Braccio robot arm
              </figcaption>
            </figure>
          </div>

          <figure className="mt-10">
            <img
              src={asset('testing setup with solenoid.jpg')}
              alt="Testing setup with solenoid"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="tech-label text-navy-400 mt-2 text-center">
              Testing setup with the solenoid actuator
            </figcaption>
          </figure>
        </motion.section>

        {/* Analysis */}
        <motion.section
          id="analysis"
          className="mb-16 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-navy-900">Analysis &amp; Testing</h2>
          <p className="text-lg leading-relaxed mb-6">
            Physical testing turned out to be the most useful method for finding areas to improve.
            Actually inserting the part into the structure exposed manufacturing flaws and fragile
            regions that simulation did not surface — the first design had to be modified simply because
            it did not fit the mounting holes.
          </p>

          <div className="bg-navy-50 border-l-4 border-accent p-6 rounded-r-lg mb-8">
            <h3 className="text-xl font-semibold mb-3 text-navy-900">When FEA and reality disagreed</h3>
            <p className="text-navy-700">
              The FEA returned forces far too high (above 100 N) to be useful, and the simulated and
              measured results simply did not match. Rather than trust either blindly, we established a
              ratio between the FEA and physical results from a first round of matched testing, then
              applied that correction when evaluating the modified design. Measurement itself was tricky:
              the physically measured forces oscillated, making a single precise value hard to pin down.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <figure>
              <img
                src={asset('end effectors fea.png')}
                alt="End effectors FEA analysis"
                className="w-full rounded-lg shadow-md"
              />
              <figcaption className="tech-label text-navy-400 mt-2 text-center">
                Nodal force simulation — bottom (left) and upper (right) effector
              </figcaption>
            </figure>
            <figure>
              <img
                src={asset('bottom effector nodal stress.png')}
                alt="Bottom effector nodal stress analysis"
                className="w-full rounded-lg shadow-md"
              />
              <figcaption className="tech-label text-navy-400 mt-2 text-center">
                Bottom effector, second iteration — nodal stress
              </figcaption>
            </figure>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-navy-900">Why the model missed</h3>
          <p className="text-lg leading-relaxed">
            Literature on Nylon PA 12 produced by Selective Laser Sintering shows that its mechanical
            properties depend on wall thickness and build direction — samples built horizontally are
            stronger than those built vertically. FEA, by contrast, assumes an isotropic material. At the
            microscopic scale, porosity from particles of differing diameters (roughly 30 and 60 µm)
            further affects real strength in ways the simulation does not capture. That anisotropy and
            porosity together help explain the gap between predicted and measured behavior.
          </p>
        </motion.section>

        {/* Iterations */}
        <motion.section
          id="iterations"
          className="mb-16 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-navy-900">Iterations &amp; Future Work</h2>
          <p className="text-lg leading-relaxed mb-6">
            Between rounds of FEA, the effector's weight was reduced further by adding holes through the
            section between the mounting holes. Looking ahead, a circular cutout where the egg sits would
            increase contact surface and lower the applied force, and trusses or additional holes could
            lighten the design without meaningfully raising stress. For mass production, combining the top
            and bottom effectors into a single piece would cut material use and simplify manufacturing.
          </p>

          <div className="bg-navy-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-3 text-navy-900">Material &amp; sustainability</h3>
            <p className="text-navy-700">
              Nylon 12 processed by SLS carries high greenhouse gas emissions. Polylactic acid (PLA), a
              biopolymer from natural sources, offers markedly lower emissions with mechanical properties
              adequate for this application — the trade-off being reduced heat resistance and strength.
              Its ubiquity in mass production makes it a credible sustainable alternative.
            </p>
          </div>

          <div className="bg-navy-50 border-l-4 border-accent p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-3 text-navy-900">Result</h3>
            <p className="text-navy-700">
              The final assembly successfully lifted the egg without breaking it, staying within the
              required force limits.
            </p>
          </div>

          <p className="tech-label text-navy-400 mt-8">Team: Serena Frolli · Charlize Guillen Mejia</p>
        </motion.section>

        <motion.div
          className="text-center pt-8 border-t border-navy-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/projects">
            <Button variant="outline" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
