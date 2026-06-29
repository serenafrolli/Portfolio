import { motion } from 'framer-motion'
import { ArrowLeft, Rocket, Wind, Settings, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

const asset = (f) => import.meta.env.BASE_URL + f

export default function TitanCFD() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const toc = [
    { id: 'mission', title: 'Mission', icon: Rocket },
    { id: 'flow', title: 'Flow Properties', icon: Wind },
    { id: 'setup', title: 'Simulation Setup', icon: Settings },
    { id: 'results', title: 'Results', icon: BarChart3 },
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
            <p className="tech-label text-accent-light mb-4">Rotor Aerodynamics · ANSYS CFX</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Titan Rotor CFD Studies
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent-light mb-6">
              Modeling NASA Dragonfly's rotors in Titan's atmosphere
            </h2>
            <p className="text-lg text-navy-200 max-w-3xl">
              A CFD investigation of the Dragonfly octocopter's coaxial rotors, simulating lift and
              thrust at Titan operating conditions across hover, ascent, and angled-flight cases.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white border-b border-navy-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <h3 className="text-xl font-semibold mb-6 text-navy-900">Table of Contents</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20">

        {/* Mission */}
        <motion.section
          id="mission"
          className="mb-16 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-navy-900">Mission Overview</h2>
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2 prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                NASA's <strong>Dragonfly</strong> is a dual-quadcopter (octocopter) developed to explore Saturn's
                largest moon, Titan. Because Titan's atmosphere is dense and calm, aerial mobility is the most
                efficient form of transportation for the mission. Dragonfly is scheduled to launch in July 2028
                aboard a Falcon Heavy and arrive at Titan in 2034, where it will fly between sites to study the
                moon's geology, methane cycle, and prebiotic chemistry.
              </p>
              <div className="bg-navy-50 border-l-4 border-accent p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold mb-3 text-navy-900">The Craft</h3>
                <ul className="space-y-1 text-navy-700">
                  <li>• Octocopter — 8 rotors, four 1.35 m rotor sets</li>
                  <li>• Mass ~425 kg; 3.85 m long &amp; wide, 1.75 m tall</li>
                  <li>• Powered by a radioisotope thermoelectric generator (plutonium-238 decay)</li>
                  <li>• Aluminum body with polymethacrylimide-based foam fuselage</li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed">
                The goal of this study was to model two of the eight propellers in ANSYS and run CFD
                simulations to extract lift and thrust at Titan operating conditions, then verify the results
                against hand calculations for the rotor system.
              </p>
            </div>

            <div>
              <figure>
                <img
                  src={asset('Draginfly_ship.jpg')}
                  alt="NASA Dragonfly octocopter"
                  className="w-full rounded-lg shadow-md object-cover"
                />
                <figcaption className="tech-label text-navy-400 mt-2 text-center">
                  NASA Dragonfly octocopter
                </figcaption>
              </figure>
            </div>
          </div>
        </motion.section>

        {/* Flow Properties */}
        <motion.section
          id="flow"
          className="mb-16 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-navy-900">Flow Properties</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Titan's atmosphere is roughly <strong>4.4× denser</strong> than Earth's and about
              <strong> 3× less viscous</strong>, owing to its low temperature (94 K) and nitrogen-rich
              composition. As a result, airfoils of the same size and speed see significantly higher
              Reynolds numbers than on Earth — meter-scale rotor blades on Titan operate in a regime
              comparable to much larger terrestrial systems like wind turbines.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-navy-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-navy-900">Operating Regime</h3>
                <ul className="space-y-1 text-navy-700 text-sm">
                  <li>• Rotor tip Mach ~0.4 — compressibility effects minor</li>
                  <li>• Flight speed ~10 m/s at max range</li>
                  <li>• Power draw ~2 kW for the ~420 kg craft</li>
                </ul>
              </div>
              <div className="bg-navy-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-navy-900">CFD Implication</h3>
                <p className="text-navy-700 text-sm">
                  Flow can be modeled with less concern for transitional effects — it is more turbulent
                  even at low speeds, simplifying turbulence modeling assumptions.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Simulation Setup */}
        <motion.section
          id="setup"
          className="mb-16 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-navy-900">Simulation Setup</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Two coaxial propellers were modeled spinning in the same direction for simplicity, each
              enclosed in a cylindrical rotating "rotator" disc within a large cylindrical domain.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-navy-50 p-4 rounded-lg">
                <h4 className="font-semibold text-navy-900 mb-2">Geometry</h4>
                <ul className="text-sm text-navy-700 space-y-1">
                  <li>• Wing surface area: 46,039 mm²</li>
                  <li>• Propeller surface area: 2,636 mm²</li>
                  <li>• Disc rotating at 1200 rpm</li>
                </ul>
              </div>
              <div className="bg-navy-50 p-4 rounded-lg">
                <h4 className="font-semibold text-navy-900 mb-2">Mesh</h4>
                <ul className="text-sm text-navy-700 space-y-1">
                  <li>• 0.1 m cells on outer enclosure</li>
                  <li>• 0.01 m sizing on rotator bodies</li>
                  <li>• 10 inflation layers on propeller</li>
                  <li>• First layer thickness 0.0001 m</li>
                </ul>
              </div>
              <div className="bg-navy-50 p-4 rounded-lg">
                <h4 className="font-semibold text-navy-900 mb-2">Boundary Conditions</h4>
                <ul className="text-sm text-navy-700 space-y-1">
                  <li>• Velocity inlet from top</li>
                  <li>• Symmetry on side wall</li>
                  <li>• Pressure outlet on bottom</li>
                  <li>• −10 m/s ascent, 0 m/s hover</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          id="results"
          className="mb-16 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-navy-900">Results</h2>

          <figure className="mb-8">
            <img
              src={asset('yVelocity9degAOA.jpg')}
              alt="Y-velocity contour at 9 degree angle of attack"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="tech-label text-navy-400 mt-2 text-center">
              Vertical (y) velocity field — 9° angle-of-attack case
            </figcaption>
          </figure>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-navy-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-navy-900">10 m/s, 0° AoA (ascent)</h3>
              <ul className="text-navy-700 text-sm space-y-1">
                <li>• Top propeller thrust: 32.5 N</li>
                <li>• Bottom propeller thrust: 15.2 N</li>
                <li>• Total simulated thrust: 47.7 N</li>
              </ul>
            </div>
            <div className="bg-navy-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-navy-900">0 m/s, 0° AoA (hover)</h3>
              <ul className="text-navy-700 text-sm space-y-1">
                <li>• Top propeller thrust: 119 N</li>
                <li>• Bottom propeller thrust: 122 N</li>
              </ul>
            </div>
            <div className="bg-navy-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-navy-900">9° AoA (angled flight)</h3>
              <ul className="text-navy-700 text-sm space-y-1">
                <li>• Top propeller thrust: 27.39 N</li>
                <li>• Bottom propeller thrust: 25.2 N</li>
                <li>• ~62.1 N total required to sustain flight</li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-50 border-l-4 border-accent p-6 rounded-r-lg mt-6">
            <h3 className="text-xl font-semibold mb-3 text-navy-900">Validation</h3>
            <p className="text-navy-700">
              Simulated thrust was cross-checked against analytical hand calculations for the rotor
              system. The 9° AoA case showed a ~10 N thrust increase on the bottom propeller and a
              ~5 N overall increase relative to level flight, consistent with expectations for the
              tilted inflow.
            </p>
          </div>
        </motion.section>

        {/* Back to Projects */}
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
