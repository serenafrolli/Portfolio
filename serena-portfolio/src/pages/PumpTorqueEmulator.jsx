import { motion } from 'framer-motion'
import { ArrowLeft, Settings, Cpu, Code, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

export default function PumpTorqueEmulator() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tableOfContents = [
    { id: 'overview', title: 'Overview', icon: Settings },
    { id: 'design', title: 'Design & Analysis', icon: Cpu },
    { id: 'implementation', title: 'Implementation', icon: Code },
    { id: 'results', title: 'Results', icon: BarChart3 },
  ]

  return (
    <div className="min-h-screen site-bg text-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Link to="/projects" className="inline-flex items-center gap-2 text-green-200 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pump Torque Emulator via Flywheel
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-green-200 mb-6">
              Mechanical Load Emulation System
            </h2>
            <p className="text-lg text-green-100 max-w-3xl">
              Designed and analyzed a flywheel system to emulate the startup and steady-state torque of a 
              centrifugal water pump so firmware behaves as if a real pump is attached
            </p>
          </motion.div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h3 className="text-xl font-semibold mb-6">Table of Contents</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {tableOfContents.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center p-4 rounded-lg border hover:border-green-300 hover:bg-green-50 transition-all duration-200 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="w-6 h-6 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-slate-700">{item.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        
        {/* Overview */}
        <motion.section 
          id="overview"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Overview</h2>
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              This project involved designing and analyzing a flywheel system to emulate the startup and 
              steady-state torque characteristics of a centrifugal water pump. The goal was to create a 
              mechanical load that would allow firmware testing and validation without requiring an actual 
              pump to be physically connected.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-green-900">Project Objective</h3>
              <p className="text-green-800">
                Develop a flywheel-based emulator that accurately replicates both the transient startup 
                torque and the steady-state torque ripple of a centrifugal water pump, enabling comprehensive 
                firmware testing and validation in a controlled environment.
              </p>
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              The system needed to match the motor-load dynamics, including torque ripple characteristics 
              and spin-up behavior, to ensure the firmware would behave identically whether connected to 
              the emulator or the actual pump.
            </p>
          </div>
        </motion.section>

        {/* Design & Analysis */}
        <motion.section 
          id="design"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Design & Analysis</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-green-900">Motor + Load Dynamics Modeling</h3>
              <p className="text-green-800 mb-4">
                Developed comprehensive models to capture the motor and load dynamics, ensuring accurate 
                representation of the torque characteristics:
              </p>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Matched torque ripple patterns to replicate pump behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Modeled spin-up characteristics to match pump startup dynamics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Analyzed steady-state behavior to ensure consistent operation</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-green-900">Flywheel Optimization</h3>
              <p className="text-green-800 mb-4">
                Optimized the flywheel design to achieve the desired inertia characteristics while 
                maintaining manufacturing feasibility:
              </p>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Optimized hole pattern to minimize inertia imbalance and ensure smooth rotation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Balanced mass distribution to prevent vibration and ensure accurate torque emulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Calculated optimal moment of inertia to match pump load characteristics</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Implementation */}
        <motion.section 
          id="implementation"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Implementation</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-green-900">Python Tooling</h3>
              <p className="text-green-800 mb-4">
                Developed comprehensive Python tools for analysis and visualization:
              </p>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Torque curve generation and analysis tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Data visualization for torque characteristics and system performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Automated analysis scripts for comparing emulator vs. pump behavior</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-900">System Integration</h3>
              <p className="text-green-800">
                The flywheel system was integrated with the motor controller to provide a seamless 
                interface for firmware testing. The system allows for real-time monitoring of torque 
                characteristics and validation of firmware behavior under various operating conditions.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Results */}
        <motion.section 
          id="results"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Results</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              The flywheel-based torque emulator successfully replicated the key characteristics of the 
              centrifugal water pump, enabling comprehensive firmware testing without the need for an actual 
              pump. The optimized design achieved accurate torque ripple matching and spin-up behavior.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-900">Key Achievements</h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Accurate torque ripple emulation matching pump characteristics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Optimized flywheel design with minimal inertia imbalance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Comprehensive Python tooling for analysis and visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Firmware validation confirmed identical behavior to actual pump</span>
                </li>
              </ul>
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

