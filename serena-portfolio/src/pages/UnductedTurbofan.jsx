import { motion } from 'framer-motion'
import { ArrowLeft, Plane, Settings, Wrench, CheckCircle, ExternalLink, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

export default function UnductedTurbofan() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tableOfContents = [
    { id: 'overview', title: 'Overview', icon: Plane },
    { id: 'history', title: 'History', icon: BookOpen },
    { id: 'specifications', title: 'Specifications', icon: Settings },
    { id: 'design', title: 'Design', icon: Settings },
    { id: 'analysis', title: 'Analysis', icon: Wrench },
    { id: 'results', title: 'Results', icon: CheckCircle },
    { id: 'resources', title: 'Resources', icon: BookOpen },
    { id: 'references', title: 'References', icon: BookOpen },
  ]

  return (
    <div className="min-h-screen site-bg text-slate-900">
      {/* Header */}
      <div className="text-white" style={{ background: 'linear-gradient(to right, #1e293b, #0f172a)' }}>
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
              Unducted turbofan CFD simulation
            </h1>
            <div className="text-lg text-slate-200 mb-4">
              <p className="font-semibold">Serena Frolli, Julia Swanson, Connor Capoot, Finn Hagerty</p>
              <p className="text-sm italic">Each team member contributed equally and approves the submission of this project.</p>
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
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Overview</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="prose prose-lg max-w-none pl-0">
              <p className="text-lg leading-relaxed mb-6">
                This project, conducted as part of the ME 495 Aerodynamics course, modeled and simulated an 
                unducted turbofan (open rotor) engine to evaluate its aerodynamic performance and sustainability 
                potential. Unlike conventional turbofans, the open-rotor design removes the nacelle, reducing 
                weight and improving propulsive efficiency through an ultra-high bypass ratio.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-slate-900 mt-8">Intended Use & Application</h3>
              
              <h4 className="text-lg font-semibold mb-2 text-slate-900">Target Platforms</h4>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Narrow body aircraft</li>
                <li className="ml-6">Airbus A320</li>
                <li className="ml-6">Boeing 737</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 text-slate-900">Sustainability Goals</h4>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Net-zero emissions aviation by 2050</li>
                <li>Compatible with SAF (Sustainable Aviation Fuel) and hydrogen</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 text-slate-900">Why Open Rotor?</h4>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Ultra-high bypass ratio engine</li>
                <li>Higher propulsive efficiency</li>
                <li>Elimination of nacelle → lighter engine and no duct losses</li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}unductedturbofan.png`}
                alt="Unducted Turbofan"
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  console.error('Failed to load turbofan image:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </motion.section>

        {/* History */}
        <motion.section 
          id="history"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">History</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">GE36 UDF Program (1980s)</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Developed as a response to the fuel crises; featured counter-rotating blades</li>
                  <li>Achieved impressive fuel savings (~30%) but shelved due to noise concerns and low oil prices</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">GE RISE Program (Now)</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Launched in 2021, aiming for 20%+ fuel efficiency over LEAP engines</li>
                  <li>New design: single-stage, open fan with noise-reduction technologies</li>
                  <li>Target: 2035 entry into service, compatible with hydrogen and SAF</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technical Specifications */}
        <motion.section 
          id="specifications"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Technical Specifications</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Operational Metrics</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Fan diameter: 12 ft</li>
                  <li>Thrust: 30,000 lbf</li>
                  <li>Cruise speed: M = 0.8 (500 mph)</li>
                  <li>Single stage, variable pitch open rotor</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Sustainability</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Fuel burn reduction: 20% vs. LEAP</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3 text-slate-900 mt-6">Acoustics</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Active noise control, acoustic liners, blade shaping</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Design */}
        <motion.section 
          id="design"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Design & Modeling</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Modeling: Simulation</h3>
            <p className="text-lg leading-relaxed mb-4">
              The simulation process involved three main steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li><strong>CAD:</strong> Acquire CAD for an open-rotor engine from GrabCAD</li>
              <li><strong>Mesh:</strong> Create mesh with focus on propfan blades and exterior surface</li>
              <li><strong>Simulation:</strong> Simulate rotating components using a rotating fluid domain in CFX</li>
            </ol>
            
            <h3 className="text-xl font-semibold mb-3 text-slate-900 mt-8">Geometry</h3>
            <h4 className="text-lg font-semibold mb-2 text-slate-900">Propfan</h4>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Imported external geometry from CAD file</li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-2 text-slate-900">Fluid Domain</h4>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Rotating "Puck" fluid domain in small volume around propfan geometry
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Length = 1.6m, R1 = 1.4m</li>
                </ul>
              </li>
              <li>Larger stationary cylindrical fluid domain (with puck subtracted)
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Length = 11m, R2 = 3.5m</li>
                </ul>
              </li>
            </ul>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}mesh around propfan.png`}
                  alt="Mesh around propfan"
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}Mesh blades.png`}
                  alt="Mesh blades"
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-slate-900 mt-8">Mesh</h3>
            <h4 className="text-lg font-semibold mb-2 text-slate-900">Rotating "Puck" Fluid Domain</h4>
            <h5 className="text-base font-semibold mb-2 text-slate-900">Mesh Sizing</h5>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Inflation layers on shroud, hub, and blades
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>First Layer Thickness 0.01m, Maximum Layers 5, Growth Rate 1.2</li>
                </ul>
              </li>
              <li>Finest near front edges of blades</li>
            </ul>
            <h5 className="text-base font-semibold mb-2 text-slate-900">Mesh Statistics</h5>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Nodes: 1,270,198</li>
              <li>Elements: 5,972,976</li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-2 text-slate-900 mt-6">Stationary Outer Fluid Domain</h4>
            <h5 className="text-base font-semibold mb-2 text-slate-900">Mesh Sizing</h5>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Element Size 0.3m</li>
              <li>Face Sizing on puck cutout
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Element Size 0.1m, Growth Rate 1.2</li>
                </ul>
              </li>
              <li>Finest near edges of puck cutout</li>
            </ul>
            <h5 className="text-base font-semibold mb-2 text-slate-900">Mesh Statistics</h5>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Nodes: 42,170</li>
              <li>Elements: 228,363</li>
            </ul>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}fluid domain and body.png`}
                  alt="Fluid domain and body"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}new mesh inflation layers.png`}
                  alt="New mesh inflation layers"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
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
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">CFD Analysis</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Setup</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Inner Boundary:</strong> Rotated at 800 rpm</li>
              <li><strong>Inlet:</strong> Velocity Inlet
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Simulates 500 mph air flow (M ≈ 0.76)</li>
                </ul>
              </li>
              <li><strong>Outlet:</strong> Modeled as opening</li>
              <li><strong>Environment:</strong> Regular sea level density, pressure, temperature, Ideal Air</li>
            </ul>
            
            <div className="mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}cfx photo of setup.png`}
                alt="CFX photo of setup"
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              Computational fluid dynamics analysis was performed to evaluate the performance characteristics 
              of the unducted turbofan design. The analysis examined flow patterns, pressure distributions, 
              and velocity fields around the exposed fan blades.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}Mach Contour - Front Stationary Frame.png`}
                  alt="Mach Contour - Front Stationary Frame"
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}Mach Contour - Rear Stationary Frame.png`}
                  alt="Mach Contour - Rear Stationary Frame"
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}Pressure Contour - Rear.png`}
                  alt="Pressure Contour - Rear"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}Total Pressure Contour.png`}
                  alt="Total Pressure Contour"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}Velo - Stationary Frame.png`}
                  alt="Velocity - Stationary Frame"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}Velocity Streamline - White.png`}
                  alt="Velocity Streamline"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
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
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Simulation Results</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Force and Torque</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Total axial aerodynamic force: 332,000 N in the negative x-direction</li>
              <li>Torque: 6.07 × 10⁵ Nm clockwise</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-slate-900 mt-6">Pressure</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Max Pressure: 685 kPa</li>
              <li>Min Pressure: 3.61 kPa</li>
            </ul>
            
            <div className="mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}Velocity Streamline - White.png`}
                alt="Velocity Streamline"
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-slate-900 mt-8">Compare to GE Specs</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-slate-300">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-2 text-left">Quantity</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Simulated</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">GE Rise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Thrust</td>
                    <td className="border border-slate-300 px-4 py-2">332,000 N (74,600 lbf)</td>
                    <td className="border border-slate-300 px-4 py-2">30,000 lbf</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Torque</td>
                    <td className="border border-slate-300 px-4 py-2">0.60744 MN-m</td>
                    <td className="border border-slate-300 px-4 py-2">0.39165 MN-m</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Power</td>
                    <td className="border border-slate-300 px-4 py-2">50.89 MW</td>
                    <td className="border border-slate-300 px-4 py-2">32 MW</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-slate-900">Why are the values different?</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Not the same fan blade</li>
                  <li>Oversimplified simulation</li>
                </ul>
              </div>
              <div>
                <p className="text-lg">
                  BUT! Much better than first draft of the simulation. (Factor of ~2 instead of factor of ~3)
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}TE Mach Contour.png`}
                alt="TE Mach Contour"
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </motion.section>

        {/* Resources */}
        <motion.section 
          id="resources"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Resources</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://web.archive.org/web/20150402104200/http://aerosociety.com/Assets/Docs/Greener%20by%20Design/%286%29%20Mark%20Taylor.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Mark Taylor - Greener by Design <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">CAD Models</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://grabcad.com/library/propfan-blades-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Propfan Blades <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://grabcad.com/library/propfan-engine-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Propfan Engine <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://grabcad.com/library/open-rotor-engine-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Open Rotor Engine <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Resources for 3D Fluids Analysis</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-slate-700">ANSYS Wind Blade Analysis for Wind Power Course (3D analysis of wind turbine blade)</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Resources for Rotating Fan Fluids Analysis</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-slate-700">ANSYS Fluent: Simulation of a Rotating Propeller - Part 1 (how to mesh propeller and its enclosure and use sliding mesh method in ANSYS Fluent)</span>
                </li>
                <li>
                  <span className="text-slate-700">CFD on Propeller Fan in Ansys Workbench Fluent</span>
                </li>
                <li>
                  <span className="text-slate-700">ANSYS Fluent Tutorial: Force and Torque of a Propeller (Part 1)</span>
                </li>
                <li>
                  <span className="text-slate-700">ANSYS Fluent Tutorial: Calculating Propeller Noise (Aeroacoustics)</span>
                </li>
              </ul>
            </div>
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
              <li>
                Evolutionary Trail Of The Open-Fan Engine | Aviation Week Network.{" "}
                <a 
                  href="https://aviationweek.com/aerospace/evolutionary-trail-open-fan-engine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                >
                  https://aviationweek.com/aerospace/evolutionary-trail-open-fan-engine
                  <ExternalLink className="w-4 h-4" />
                </a>
                . Accessed 22 May 2025.
              </li>
              <li>
                5 Things to Know About the CFM RISE Program | GE Aerospace News.{" "}
                <a 
                  href="https://www.geaerospace.com/news/articles/5-things-know-about-cfm-rise-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                >
                  https://www.geaerospace.com/news/articles/5-things-know-about-cfm-rise-program
                  <ExternalLink className="w-4 h-4" />
                </a>
                . Accessed 22 May 2025.
              </li>
              <li>
                "GE Resurrects the Propfan Aircraft Engine, Cutting Fuel Burn by 20%." New Atlas, 19 June 2023,{" "}
                <a 
                  href="https://newatlas.com/aircraft/ge-cfm-rise-open-fan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                >
                  https://newatlas.com/aircraft/ge-cfm-rise-open-fan/
                  <ExternalLink className="w-4 h-4" />
                </a>
                .
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
