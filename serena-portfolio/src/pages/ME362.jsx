import { motion } from 'framer-motion'
import { ArrowLeft, Settings, BarChart3, CheckCircle, Users, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

export default function ME362() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tableOfContents = [
    { id: 'overview', title: 'Overview', icon: Settings },
    { id: 'methods', title: 'Methodology', icon: Settings },
    { id: 'results', title: 'Results', icon: BarChart3 },
    { id: 'references', title: 'References', icon: ExternalLink },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              ME 362: Stress Analysis
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6">
              Topology Optimization of a Truss in ANSYS
            </h2>
            <p className="text-lg text-slate-200 max-w-3xl">
              A study evaluating and comparing the structural performance of topology-optimized trusses under 
              different loading conditions, analyzing efficiency in load distribution, material usage, and structural integrity.
            </p>
            <div className="mt-4 text-slate-300">
              <p className="text-sm">Spring 2025 · Group 10</p>
              <p className="text-sm mt-2">
                By Daniel Killioglu, Serena Frolli, Shane Grayson, and Paulina Hernandez
              </p>
            </div>
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
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Objective</h2>
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              This project explores how topology optimization can reduce material usage while maintaining structural 
              performance in truss systems. Using ANSYS, we analyzed how trusses respond to different load cases and 
              compared traditional Pratt trusses to topology-optimized versions in terms of stress distribution, 
              mass efficiency, and load path integrity.
            </p>
          </div>
        </motion.section>


        {/* Methods */}
        <motion.section 
          id="methods"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Methodology</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              We modeled and tested trusses under three loading conditions:
            </p>

            <div className="mb-8">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={`${import.meta.env.BASE_URL}base truss 362.png`}
                  alt="Base Truss Design - 275 x 50 x 6 mm"
                  className="w-full h-auto object-contain"
                  style={{ imageRendering: 'auto' }}
                  onError={(e) => {
                    console.error('Failed to load base truss image:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <p className="text-sm text-slate-600 mt-2 italic">Figure 0. Base Truss Design - Dimensions: 275 × 50 × 6 mm</p>
            </div>
            
            <div className="space-y-6 mb-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-slate-900">1. Beam Bending</h4>
                <p className="text-slate-700">Uniform distributed load on the top surface, fixed at one end.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-slate-900">2. Simply Supported Beam</h4>
                <p className="text-slate-700">Uniform distributed load with supports on both ends.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-slate-900">3. Compression</h4>
                <p className="text-slate-700">Axial load applied to one side with the opposite face fixed.</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              All analyses used structural steel (E = 2×10¹¹ Pa, ρ = 7850 kg/m³, ν = 0.3) and applied a 50% mass 
              retention constraint in ANSYS Topology Optimization. The optimization goal was to minimize maximum 
              principal stress while preserving essential load paths.
            </p>
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
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Key Findings</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="space-y-6 mb-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Beam Bending</h3>
                <p className="text-slate-700 mb-6">
                  Topology optimization preserved the top and support regions under high bending stress while removing 
                  non-critical diagonals.
                </p>
                <p className="text-sm text-slate-600 mb-6 italic">
                  The following images show the beam bending case results at different retained mass thresholds:
                </p>
                <div className="space-y-8">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                    <img 
                      src={`${import.meta.env.BASE_URL}beam bend threshold 0.2.png`}
                      alt="Beam Bending - Retained Threshold 0.2"
                      className="w-full h-auto"
                      onError={(e) => {
                        console.error('Failed to load beam bend 0.2 image:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="px-6 py-4 bg-slate-50">
                      <p className="text-base text-slate-700 font-medium">Beam Bending Case - Retained Threshold 0.2</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                    <img 
                      src={`${import.meta.env.BASE_URL}beam bend thresh 0.4.png`}
                      alt="Beam Bending - Retained Threshold 0.4"
                      className="w-full h-auto"
                      onError={(e) => {
                        console.error('Failed to load beam bend 0.4 image:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="px-6 py-4 bg-slate-50">
                      <p className="text-base text-slate-700 font-medium">Beam Bending Case - Retained Threshold 0.4</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                    <img 
                      src={`${import.meta.env.BASE_URL}beam bend thresh 0.6.png`}
                      alt="Beam Bending - Retained Threshold 0.6"
                      className="w-full h-auto"
                      onError={(e) => {
                        console.error('Failed to load beam bend 0.6 image:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="px-6 py-4 bg-slate-50">
                      <p className="text-base text-slate-700 font-medium">Beam Bending Case - Retained Threshold 0.6</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Simply Supported Beam</h3>
                <p className="text-slate-700">
                  Material concentrated near supports and load zones, forming an arch-like geometry—unexpectedly inverted, 
                  hinting at setup limitations.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Compression</h3>
                <p className="text-slate-700">
                  Central regions lost too much material, increasing buckling risk. Vertical load paths were mostly preserved, 
                  forming a dense core structure.
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Across cases, stress increased sharply as volume decreased, showing that extreme mass reduction degrades 
              performance. Beam and simple load cases showed exponential stress growth, while compression showed a more 
              linear trend.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-slate-900 mt-8">Limitations and Insights</h3>
            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg mb-6">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>The ANSYS topology optimizer sometimes produced unrealistic hollow shapes that violated stress constraints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Optimization results were inconsistent across similar runs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Overall, while topology optimization offers strong potential for lightweight design, current implementations remain unreliable for precise stress-limited cases.</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-slate-900 mt-8">Tools and Data</h3>
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2 text-slate-700">
                <li><strong>Software:</strong> ANSYS Workbench (Topology Optimization, Static Structural)</li>
                <li><strong>Mesh size:</strong> 3 mm</li>
                <li><strong>Retained mass ratios:</strong> 0.2, 0.4, 0.6</li>
                <li><strong>Plots generated:</strong> Minimum principal stress (|σ|min) vs. retained volume for all cases</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-slate-900 mt-8">Outcome</h3>
            <p className="text-lg leading-relaxed mb-6">
              The project demonstrated both the promise and the limits of topology optimization for truss design. While 
              optimized geometries showed material efficiency and stress-driven forms, their sensitivity to solver setup, 
              mesh, and boundary conditions highlighted the need for more robust algorithms before widespread engineering adoption.
            </p>

          </div>
        </motion.section>

        {/* References */}
        <motion.section 
          id="references"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">References</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <ol className="list-decimal list-inside space-y-3">
              <li className="break-words">
                ASTM A36 Steel Datasheet – MatWeb
              </li>
              <li className="break-words">
                ANSYS Help Documentation – Topology Optimization Module
              </li>
              <li className="break-words">
                Beghini, D., et al. "Structural optimization using natural forms." Engineering Structures, 2014.
              </li>
              <li className="break-words">
                Gere, J.M., Mechanics of Materials, 8th Edition
              </li>
            </ol>
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

