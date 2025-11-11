import { motion } from 'framer-motion'
import { ArrowLeft, Wind, Settings, BarChart3, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

export default function TitanCFD() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tableOfContents = [
    { id: 'overview', title: 'Overview', icon: Wind },
    { id: 'setup', title: 'CFD Setup', icon: Settings },
    { id: 'analysis', title: 'Analysis', icon: BarChart3 },
    { id: 'validation', title: 'Validation', icon: CheckCircle },
  ]

  return (
    <div className="min-h-screen site-bg text-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Link to="/projects" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Titan Rotor/Airfoil CFD Studies
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6">
              Computational Fluid Dynamics for Titan Atmosphere
            </h2>
            <p className="text-lg text-slate-200 max-w-3xl">
              Set up RANS CFD for Titan atmosphere propeller/airfoil studies; computed Reynolds numbers, 
              validated against literature, and compared to experimental trends
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
                className="flex flex-col items-center p-4 rounded-lg border hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="w-6 h-6 text-slate-600 mb-2 group-hover:scale-110 transition-transform" />
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
              This project involved computational fluid dynamics (CFD) studies for rotor and airfoil 
              configurations designed for operation in Titan's unique atmosphere. Titan's dense, 
              nitrogen-rich atmosphere presents unique challenges and opportunities for aerodynamic 
              design, requiring specialized analysis techniques.
            </p>
            
            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Titan Atmosphere Characteristics</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Dense atmosphere (4.4x Earth's surface pressure)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Low gravity environment affecting Reynolds number calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Unique fluid properties requiring specialized CFD models</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              The CFD studies focused on understanding aerodynamic performance of propellers and airfoils 
              in Titan's atmosphere, with particular attention to Reynolds number effects and validation 
              against experimental data.
            </p>
          </div>
        </motion.section>

        {/* CFD Setup */}
        <motion.section 
          id="setup"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">CFD Setup</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">RANS Solver Configuration</h3>
              <p className="text-slate-700 mb-4">
                Configured Reynolds-Averaged Navier-Stokes (RANS) solver for Titan atmosphere conditions:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Appropriate turbulence models for dense atmosphere conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Boundary conditions matching Titan environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Convergence criteria tuned for accurate results</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Meshing Strategy & y+ Control</h3>
              <p className="text-slate-700 mb-4">
                Developed comprehensive meshing approach:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Structured and unstructured mesh generation for complex geometries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>y+ control to ensure accurate boundary layer resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mesh refinement in critical regions (leading/trailing edges, wake regions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Grid independence studies to ensure mesh quality</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Reynolds Number Computation</h3>
              <p className="text-slate-700">
                Calculated Reynolds numbers for Titan atmosphere conditions, accounting for the unique 
                density and viscosity characteristics. These calculations informed the CFD model 
                selection and validation approach.
              </p>
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
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Analysis & Post-Processing</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Post-Processing Scripts</h3>
              <p className="text-slate-700 mb-4">
                Developed automated scripts for extracting and analyzing key aerodynamic parameters:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Lift coefficient calculation and analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Drag coefficient extraction and comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Pressure distribution analysis across airfoil surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Visualization tools for flow field analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Performance Metrics</h3>
              <p className="text-slate-700">
                Analyzed aerodynamic performance across various operating conditions, including angle of 
                attack sweeps, Reynolds number variations, and comparison between different airfoil 
                geometries optimized for Titan operations.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Validation */}
        <motion.section 
          id="validation"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Validation</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              The CFD results were validated against published literature and experimental trends to 
              ensure accuracy and reliability of the computational approach.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Validation Approach</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Comparison with published aerodynamic data for similar conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Validation against experimental trends from wind tunnel testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Quantitative error analysis and uncertainty assessment</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Key Achievements</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Successfully set up RANS CFD for Titan atmosphere conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Comprehensive meshing strategy with proper y+ control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Automated post-processing scripts for lift/drag analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Validated results against literature and experimental data</span>
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

