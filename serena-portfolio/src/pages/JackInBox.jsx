import { motion } from 'framer-motion'
import { ArrowLeft, Box, Settings, Code, BarChart3, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

export default function JackInBox() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tableOfContents = [
    { id: 'overview', title: 'Overview', icon: Box },
    { id: 'method', title: 'Method', icon: Settings },
    { id: 'implementation', title: 'Implementation', icon: Code },
    { id: 'results', title: 'Results', icon: BarChart3 },
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
              Jack in a Box Dynamics
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6">
              Machine Dynamics Final Project
            </h2>
            <p className="text-lg text-slate-200 max-w-3xl">
              Modeled the dynamics of a jack inside a box with two rigid bodies, six degrees of freedom, 
              sixteen impact conditions, and two external forces using Euler-Lagrange equations
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
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Context</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="prose prose-lg max-w-none pl-0">
              <p className="text-lg leading-relaxed mb-6">
                For the final project of the Machine Dynamics class I took in the Fall of my junior year, 
                I modeled the dynamics of a jack inside a box. This included two rigid bodies, six degrees 
                of freedom, sixteen impact conditions, and two external forces. The dynamics were solved 
                considering the objects in 2D.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <video 
                src={`${import.meta.env.BASE_URL}jack_vid.mov`}
                controls
                className="w-full max-w-md rounded-lg shadow-lg"
                onError={(e) => {
                  console.error('Failed to load video:', e.target.src);
                  e.target.style.display = 'none';
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="prose prose-lg max-w-none pl-0">
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">System Components</h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                <div>
                  <p className="font-semibold mb-2">Rigid Bodies:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Box (rotating container)</li>
                    <li>• Jack (internal object with prongs)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">System Characteristics:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 6 degrees of freedom</li>
                    <li>• 16 impact conditions</li>
                    <li>• 2 external forces</li>
                    <li>• 2D dynamics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Project Objectives</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Derive Euler-Lagrange equations for the two-body system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Implement impact detection and collision handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Apply piecewise external forces for box motion control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Generate animations and visualize state variables</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Code Access</h3>
              <div className="relative">
                <div className="bg-slate-900 rounded-lg p-4 mb-4 font-mono text-sm text-slate-100 overflow-hidden relative">
                  <div className="max-h-32 overflow-y-auto pr-2">
                    <pre className="whitespace-pre-wrap">
{`import sympy as sym
from IPython.display import display, Markdown
import numpy as np
import matplotlib.pyplot as plt

def custom_latex_printer(exp,**options):
    from google.colab.output._publish import javascript
    url = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.1.1/latest.js?config=TeX-AMS_HTML"
    javascript(url=url)
    return sym.printing.latex(exp,**options)
sym.init_printing(use_latex="mathjax",latex_printer=custom_latex_printer)`}
                    </pre>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent pointer-events-none"></div>
                </div>
                <div className="flex items-center justify-center">
                  <a 
                    href="https://colab.research.google.com/drive/1xec5u6E6WbTfSJVYU5FVt_rf0IYNMLhe?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold underline underline-offset-4 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm"
                  >
                    <Code className="w-5 h-5" />
                    View Google Colab Notebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Method */}
        <motion.section 
          id="method"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Method</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Kinetic and Potential Energy</h3>
              <p className="text-slate-700 mb-4">
                To calculate the Euler-Lagrange equations, I first had to find the Kinetic and Potential 
                energy of the system. The most challenging was the kinetic energy, as I had to use the rigid 
                body transformations to compute the velocities of both rigid bodies.
              </p>
              <p className="text-slate-700 mb-4">
                This required finding the inertia matrix for both the box and the jack. To do so, I used 
                the "unhat" operation—which transforms a 4x4 matrix (the transformation) to a 6x1 vector 
                (the body velocity)—and involved taking the inverse of an SE3 matrix, which I computed by 
                defining appropriate help functions.
              </p>
              <div className="bg-white p-4 rounded border mt-4">
                <div className="flex justify-center">
                  <img 
                    src={`${import.meta.env.BASE_URL}Eq1_Body%20velocities.png`}
                    alt="Equation 1: Body velocities"
                    className="max-w-md h-auto rounded"
                    onError={(e) => {
                      console.error('Failed to load Eq1 image:', e.target.src);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Euler-Lagrange Equations</h3>
              <p className="text-slate-700 mb-4">
                Once kinetic energy (KE) and potential energy (PE) were found, I used the Lagrangian 
                equation. Then, following the Euler-Lagrange equations with an added generalized force, 
                I computed the equations of motion for each state variable.
              </p>
              <div className="bg-white p-4 rounded border mt-4">
                <p className="text-sm font-semibold text-slate-700 mb-2">Eq. 2 (Lagrangian):</p>
                <div className="text-lg font-mono text-center py-2 bg-slate-50 rounded">
                  ℒ = KE - PE
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Piecewise External Forces</h3>
              <p className="text-slate-700 mb-4">
                When it came to adding the forces, I made the force a piecewise function so that:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>If the box's center falls below a certain threshold, the box is pushed back up with an increased force</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>If the box hits a ceiling, the force pushes it back down</span>
                </li>
              </ul>
              <p className="text-slate-700 mt-4">
                I used the function <code className="bg-white px-2 py-1 rounded">sym.Piecewise</code> for 
                this implementation. In this system, the jack's motion is constrained by the box's edges.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Impact Conditions</h3>
              <p className="text-slate-700 mb-4">
                The system includes 16 impact frames defined to constrain each prong of the jack to the 
                edges of the box. Initially, I tried to detect an impact condition concerning the center 
                of the box's frame, but introducing these frames relative to the box's sides greatly improves 
                computation and clarity.
              </p>
              <p className="text-slate-700 mb-4">
                The constraints are defined such that when a prong contacts an edge, the impact condition 
                is satisfied. Impacts were detected by inspecting whether elements of the constraints matrix 
                were close to zero or below a certain set threshold.
              </p>
              <div className="bg-white p-4 rounded border mt-4 mb-4">
                <p className="text-sm font-semibold text-slate-700 mb-2">Eq. 3 (Constraints):</p>
                <div className="text-lg font-mono text-center py-2 bg-slate-50 rounded">
                  φ<sub>b<sub>n</sub>j<sub>n</sub></sub> = y<sub>b<sub>n</sub>j<sub>n</sub></sub> = 0
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                If an impact occurs, then the impact update laws compute the velocity right after the impact, 
                which changes instantaneously. The instant before impact is represented by "-" and the one 
                right after by "+". The function in my code called "generate_impact_equations" essentially 
                computes the difference in generalized momentum before and after impact. This is then solved 
                for the values right after impact using the function "impact_update," provided there is a solution.
              </p>
              <div className="bg-white p-4 rounded border mt-4">
                <p className="text-sm font-semibold text-slate-700 mb-3">Eq. 4 (Impact update laws):</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-600 mb-1">(4a):</p>
                    <div className="text-base font-mono text-center py-2 bg-slate-50 rounded px-2">
                      [∂ℒ/∂q̇ · q̇ - ℒ(q, q̇)]<sub>τ⁻</sub><sup>τ⁺</sup> = 0
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">(4b):</p>
                    <div className="text-base font-mono text-center py-2 bg-slate-50 rounded px-2">
                      ∂ℒ/∂q̇|<sub>τ⁻</sub><sup>τ⁺</sup> = λ · dφ/dq
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Computational Approach</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                  <span>Used SymPy for symbolic computation of equations of motion</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                  <span>Implemented rigid body transformations using SE3 matrices</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                  <span>Defined helper functions for matrix inversions and transformations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                  <span>Created impact detection algorithm with threshold-based constraints</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                  <span>Implemented impact update laws for instantaneous velocity changes</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-amber-900">Visualization</h3>
              <p className="text-amber-800 mb-4">
                The implementation generates:
              </p>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Animation of the jack bouncing inside the rotating box</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Plots of all state variables versus time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Real-time visualization of impact conditions and forces</span>
                </li>
              </ul>
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
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Results & Conclusion</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              The code runs successfully and produces correct animations and plots. The jack bounces off 
              the walls of the box, which is rotating and shaken up and down due to the applied forces 
              and torque.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">State Variables Visualization</h3>
              <p className="text-slate-700 mb-4">
                The graph below shows the temporal evolution of all six state variables (xb, yb, θb, xj, yj, θj) 
                versus time, demonstrating the complex dynamics of the system:
              </p>
              <div className="flex justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}state-variables-graph.png`}
                  alt="State Variables Graph - xb, yb, θb, xj, yj, θj vs Time"
                  className="max-w-full h-auto rounded shadow-lg bg-white p-4"
                  onError={(e) => {
                    console.error('Failed to load state variables graph:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <p className="text-slate-700 mt-4 text-sm">
                The graph illustrates the oscillatory behavior of the jack's position (yj) as it bounces 
                within the box, the steady rotation of the box (θb), and the complex interactions between 
                all state variables over time.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Physical Validation</h3>
              <p className="text-slate-700 mb-4">
                As expected from Newton's second law, the physical parameters influence the motion correctly:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>The masses of the jack and box influence their motion—the box moved significantly slower when mass was increased</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>The moment of inertia (J) has a similar effect—increased inertia slows rotational motion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Impact conditions correctly constrain the jack within the box boundaries</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Challenges & Solutions</h3>
              <p className="text-slate-700 mb-4">
                I had issues with the simulation only when I increased the value of torque unreasonably, 
                for example, above 1500. This made the impacts harder to detect, as the dynamics of the 
                box's frames were harder to compute.
              </p>
              <p className="text-slate-700">
                This was partially alleviated by setting a lower threshold for the impact condition and 
                a lower time step, improving the numerical stability of the simulation.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-amber-900">Key Achievements</h3>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Successfully derived and implemented Euler-Lagrange equations for two rigid bodies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Implemented 16 impact conditions for accurate collision detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Applied piecewise forces for realistic box motion control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Generated accurate animations and state variable visualizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Validated physics through parameter sensitivity analysis</span>
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

