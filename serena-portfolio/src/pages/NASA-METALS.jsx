import { motion } from 'framer-motion'
import { ArrowLeft, Rocket, FlaskConical, Wrench, TestTube } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

export default function NASAMETALS() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction', icon: Rocket },
    { id: 'applications', title: 'Proposed Applications', icon: FlaskConical },
    { id: 'analysis', title: 'Analysis', icon: Wrench },
    { id: 'manufacturing', title: 'Manufacturing', icon: Wrench },
    { id: 'testing', title: 'Testing', icon: TestTube },
  ]

  return (
    <div className="min-h-screen site-bg text-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Link to="/projects" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              NASA Big Idea Challenge 2024
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-6">
              METALS: Inflatable Metal Systems for Lunar Infrastructure
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl">
              Advancing the development of inflatable metal systems for lunar infrastructure through innovative 
              Free Inner Pressure Deformation (FIDU) technology
            </p>
          </motion.div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h3 className="text-xl font-semibold mb-6">Table of Contents</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {tableOfContents.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center p-4 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-slate-700">{item.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        
        {/* Introduction */}
        <motion.section 
          id="introduction"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Introduction</h2>
          <div className="grid md:grid-cols-3 gap-16 items-start">
            <div className="md:col-span-2 prose prose-lg max-w-none pl-0">
              <p className="text-lg leading-relaxed mb-6">
                The "Breakthrough, Innovative, and Game-Changing (BIG) Idea Challenge" is a program designed to 
                support NASA's Space Technology Mission Directorate (STMD) and its Game Changing Development 
                Program (GCD) in advancing cutting-edge technologies and capabilities for future NASA missions.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">The 2024 Big Idea Challenge Team: METALS</h3>
                <p className="text-blue-800">
                  The challenge was to develop novel technologies for luner infrastructure and applications 
                  that utilize inflatable systems to support Artemis missions.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed">
                As part of the Northwestern University Space Technology and Rocketry Society (NUSTARS), our team 
                submitted a proposal for the challenge and received $146,000 funding as one of six finalist schools.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <img 
                src="METALS_Logo.png"
                alt="METALS Project Logo"
                className="w-48 h-48 object-contain rounded-lg"
              />
              <img 
                src="SpaceTech Team Photo_retouched.jpg"
                alt="Space Tech Team Photo"
                className="w-[28rem] h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.section>

        {/* Proposed Applications */}
        <motion.section 
          id="applications"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Proposed Applications</h2>
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              METALS is advancing the development of inflatable metal systems for lunar infrastructure. The core 
              design element consists of cutting and welding two layers of sheet metal at their aligned edges to 
              create a small enclosed volume.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Once on the lunar surface, pressurization within the welded layers will inflate and plastically 
              deform the metal into its final operational configuration. This process (called Free Inner Pressure 
              Deformation, or FIDU) has been previously applied to applications ranging from automotive frames 
              to wind turbines while demonstrating outstanding structural strength-to-weight ratios.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Key Applications</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Load bearing structures
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Storage vessels for fuels and materials
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Conduits for resource transportation
                </li>
              </ul>
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              The deployable design enhances volumetric efficiency, optimizing the feasibility of prolonged 
              lunar missions. These technologies offer significant advantages for NASA by enabling scalable, 
              on-demand storage and transportation of fuels and materials, while minimizing mass and volume 
              to address the constraints of launch vehicle capacity.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Technology Demonstration Goal</h3>
              <p className="text-blue-800">
                The goal towards the Technology Demonstration (final phase of the Challenge) was to advance 
                the Technology Readiness Level (TRL) of the FIDU manufacturing method for lunar applications by:
              </p>
              <ol className="list-decimal list-inside mt-3 space-y-1 text-blue-800">
                <li>Demonstrating the scalability of FIDU for infrastructure-level deployment</li>
                <li>Designing a variety of lunar-relevant systems engineered for the containment of critical life-support resources for manufacturing</li>
              </ol>
            </div>
          </div>
        </motion.section>

        {/* Analysis */}
        <motion.section 
          id="analysis"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Analysis</h2>
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              Ansys Mechanical was utilized to optimize the geometry of storage vessels, with the focus on 
              maximizing volume and minimizing stress. When manufacturing samples in-house, it was found that 
              buckling on circular shaped samples occurred at specific points on the edge.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Sinusoidal Wave Function Implementation</h3>
              <p className="text-blue-800 mb-4">
                From this observation, the team decided to implement a sinusoidal wave function to the sheet 
                metal's edge profile. Initial simulations demonstrated that this significantly relieved stress 
                and enhanced volumetric expansion.
              </p>
              <p className="text-blue-800">
                The optimized shape, referred to as the "SEC", is defined by the following equation:
              </p>
              <div className="bg-white p-4 rounded border mt-4 font-mono text-sm">
                r(θ) = R + A × sin(F × θ)
              </div>
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              This equation includes three parameters: base radius (R), amplitude (A), and frequency (F). 
              While the base radius is often fixed for storage purposes, the amplitude and frequency can be 
              adjusted to balance volume and stress.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Advanced Shape: Truncated OTR (TOTR)</h3>
              <p className="text-blue-800 mb-4">
                However, stress was observed to concentrate at the edges and troughs of the shape. To address 
                this issue, a more advanced shape called the "Truncated OTR" (TOTR) was introduced, with a 
                piecewise equation.
              </p>
              <p className="text-blue-800">
                The truncation factor (T), ranging from -1 to 1, allows more precise control of the edge 
                profile by adjusting the relationship between the crests and troughs. Smoother edge transitions 
                are ensured for optimal performance across various configurations.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Manufacturing */}
        <motion.section 
          id="manufacturing"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Manufacturing</h2>
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              The inflatables were manufactured partly in-house, for rapid prototyping, and partly by an 
              external partner, IMS Engineered Products, to ensure consistency and reliability of the welds. 
              In total, more than 50 inflatables have been produced so far.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Shapes Produced</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Circle</li>
                  <li>• Pill</li>
                  <li>• Hexagon</li>
                  <li>• SEC</li>
                  <li>• TSEC</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Materials Used</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Al 6061</li>
                  <li>• Stainless steel 304</li>
                  <li>• Stainless steel 321</li>
                  <li>• Low-carbon steel 1008</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Thickness Range</h4>
                <p className="text-sm text-blue-800">
                  From 0.02" to 0.09"
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Inflation Testing</h3>
              <p className="text-blue-800 mb-4">
                These were inflated using either water or compressed air, reaching pressures of up to 2400 psi 
                and 200 psi, respectively.
              </p>
              <ul className="text-blue-800 space-y-2">
                <li>• Pressure increased in 20 psi increments</li>
                <li>• Volumetric expansion recorded at each step</li>
                <li>• Final volume measured at maximum pressure</li>
                <li>• Failures and corresponding pressures noted for comparison</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Testing */}
        <motion.section 
          id="testing"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Testing</h2>
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              To achieve TRL 5, several tests are being conducted to verify the performance and reliability 
              of the inflatables in simulated lunar conditions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Vacuum Chamber Testing</h3>
                <p className="text-blue-800">
                  Ensures inflation stability under lunar-like vacuum pressures.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Micrometeorite Impact Testing</h3>
                <p className="text-blue-800">
                  Assesses durability against space debris.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Abrasion Resistance Testing</h3>
                <p className="text-blue-800">
                  Via sandblasting to measure surface wear.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Strength & Pressure Testing</h3>
                <p className="text-blue-800">
                  Evaluates mechanical properties after work-hardening and determines safe operational limits.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Back to Projects Button */}
        <motion.div 
          className="text-center pt-8 border-t"
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
