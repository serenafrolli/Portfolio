import { motion } from 'framer-motion'
import { ArrowLeft, Gauge, BarChart3, TrendingUp, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

export default function PressureSensorAnalysis() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tableOfContents = [
    { id: 'overview', title: 'Overview', icon: Gauge },
    { id: 'methodology', title: 'Methodology', icon: BarChart3 },
    { id: 'calibration', title: 'Calibration', icon: TrendingUp },
    { id: 'results', title: 'Results', icon: CheckCircle },
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
              Pressure Sensor Data Analysis
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6">
              Signal Processing and Calibration Pipeline
            </h2>
            <p className="text-lg text-slate-200 max-w-3xl">
              Signal processing and calibration pipeline for multi-region static pressure measurements 
              (p2 = 32.75 kPa, p3 = 23.68 kPa), including uncertainty quantification
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
              This project involved developing a comprehensive signal processing and calibration pipeline 
              for multi-region static pressure measurements. The system was designed to handle pressure 
              data from multiple sensor locations, providing accurate measurements with quantified 
              uncertainty bounds.
            </p>
            
            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Measurement Regions</h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                <div>
                  <p className="font-semibold mb-1">Region p2:</p>
                  <p className="text-2xl font-bold">32.75 kPa</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Region p3:</p>
                  <p className="text-2xl font-bold">23.68 kPa</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              The pipeline ensures accurate pressure measurements through automated data cleaning, outlier 
              handling, and comprehensive uncertainty quantification. This enables reliable analysis and 
              validation of experimental data.
            </p>
          </div>
        </motion.section>

        {/* Methodology */}
        <motion.section 
          id="methodology"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Methodology</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Automated Data Cleaning</h3>
              <p className="text-slate-700 mb-4">
                Developed algorithms to automatically clean pressure sensor data:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Removed noise and artifacts from raw sensor readings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Applied filtering techniques to smooth data while preserving signal integrity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Handled missing data points and sensor dropouts</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Outlier Handling</h3>
              <p className="text-slate-700 mb-4">
                Implemented robust outlier detection and handling mechanisms:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Statistical methods to identify anomalous readings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Automated flagging and removal of outliers based on confidence intervals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Documentation of outlier characteristics for system diagnostics</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Calibration */}
        <motion.section 
          id="calibration"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Calibration & Uncertainty Quantification</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Calibration Pipeline</h3>
              <p className="text-slate-700 mb-4">
                Developed a systematic calibration approach:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Multi-point calibration using known reference pressures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Linear and non-linear calibration curve fitting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Temperature compensation for accurate measurements across operating conditions</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Uncertainty Quantification</h3>
              <p className="text-slate-700 mb-4">
                Comprehensive uncertainty analysis including:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Repeatability study to assess measurement consistency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Confidence bounds calculation for each measurement region</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Propagation of uncertainty through the calibration and measurement process</span>
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
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Results</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              The signal processing and calibration pipeline successfully provided accurate pressure 
              measurements with quantified uncertainty. The automated data cleaning and outlier handling 
              ensured reliable data quality, while the comprehensive uncertainty analysis enabled 
              confident interpretation of results.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Key Achievements</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Automated cleaning and outlier handling pipeline for reliable data quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Comprehensive repeatability study with confidence bounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Accurate pressure measurements: p2 = 32.75 kPa, p3 = 23.68 kPa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Quantified uncertainty enabling confident data interpretation</span>
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

