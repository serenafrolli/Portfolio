import { motion } from 'framer-motion'
import { ArrowLeft, Cog, Settings, CheckCircle, Wrench, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

export default function GearTrainDesign() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tableOfContents = [
    { id: 'overview', title: 'Overview', icon: Cog },
    { id: 'gears', title: 'Gear Design', icon: Settings },
    { id: 'shafts', title: 'Shaft Design', icon: Wrench },
    { id: 'bearings', title: 'Bearings', icon: CheckCircle },
    { id: 'results', title: 'Results', icon: CheckCircle },
  ]

  return (
    <div className="min-h-screen site-bg text-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-gray-900 text-white">
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
              Three-Shaft Gear Train Design
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
              ME 315 - Theory of Machines Design Project
            </h2>
            <p className="text-lg text-slate-200 max-w-3xl">
              Designed a three-shaft gear train reducing input speed from 2400 rpm to 340.45 rpm with 
              56 kW power transmission. Designed for 99% reliability over 5 years of continuous operation.
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
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Introduction</h2>
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              This project focuses on the design of a three-shaft gear train capable of reducing an input 
              speed of 2400 rpm to an output speed of 340.45 rpm. The system is powered by a 56 kW input 
              and is required to operate continuously for 5 years—running 7 days a week, 52 weeks a year, 
              and 8 hours a day. To ensure long-term performance, the gear train is designed to meet a 
              reliability target of 99%, making durability and precision critical aspects of the design.
            </p>
            
            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Design Specifications</h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-800">
                <div>
                  <p className="font-semibold mb-1">Power:</p>
                  <p className="text-xl">56 kW</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Input Speed:</p>
                  <p className="text-xl">2400 rpm</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Output Speed:</p>
                  <p className="text-xl">340.45 rpm</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Reliability Target:</p>
                  <p className="text-xl">99%</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Operating Life:</p>
                  <p className="text-xl">5 years continuous</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Operating Schedule:</p>
                  <p className="text-sm">7 days/week, 52 weeks/year, 8 hours/day</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}gear.png`}
                alt="Gear Train Design"
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  console.error('Failed to load gear image:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Team Members</h3>
              <div className="grid md:grid-cols-3 gap-4 text-slate-800">
                <div>
                  <p className="font-semibold">Serena Frolli</p>
                  <p className="text-sm">Shaft System 1</p>
                </div>
                <div>
                  <p className="font-semibold">Charlize Guillen</p>
                  <p className="text-sm">Shaft System 2</p>
                </div>
                <div>
                  <p className="font-semibold">Paulina Hernandez</p>
                  <p className="text-sm">Shaft System 3</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              For simplicity, 100% efficiency was assumed for each gear pair, and the remaining design 
              parameters—such as gear ratios, shaft dimensions, and bearing selection—were determined 
              based on performance and durability requirements.
            </p>
          </div>
        </motion.section>

        {/* Gear Design */}
        <motion.section 
          id="gears"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Gear Design</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Gear Parameters</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-800">
                  <thead className="bg-slate-200">
                    <tr>
                      <th className="px-4 py-2 text-left">Parameter</th>
                      <th className="px-4 py-2 text-center">Gear 1 (Pinion)</th>
                      <th className="px-4 py-2 text-center">Gear 2</th>
                      <th className="px-4 py-2 text-center">Gear 3 (Pinion)</th>
                      <th className="px-4 py-2 text-center">Gear 4</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-4 py-2 font-semibold">Speed (rpm)</td>
                      <td className="px-4 py-2 text-center">2400</td>
                      <td className="px-4 py-2 text-center">1236.36</td>
                      <td className="px-4 py-2 text-center">1236.36</td>
                      <td className="px-4 py-2 text-center">340.45</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Module (mm)</td>
                      <td className="px-4 py-2 text-center">5</td>
                      <td className="px-4 py-2 text-center">5</td>
                      <td className="px-4 py-2 text-center">6</td>
                      <td className="px-4 py-2 text-center">6</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">No. of Teeth</td>
                      <td className="px-4 py-2 text-center">17</td>
                      <td className="px-4 py-2 text-center">33</td>
                      <td className="px-4 py-2 text-center">19</td>
                      <td className="px-4 py-2 text-center">69</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Pitch Circle Diameter (mm)</td>
                      <td className="px-4 py-2 text-center">85</td>
                      <td className="px-4 py-2 text-center">165</td>
                      <td className="px-4 py-2 text-center">114</td>
                      <td className="px-4 py-2 text-center">414</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Face Width (mm)</td>
                      <td className="px-4 py-2 text-center">60</td>
                      <td className="px-4 py-2 text-center">60</td>
                      <td className="px-4 py-2 text-center">84</td>
                      <td className="px-4 py-2 text-center">84</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Material</td>
                      <td className="px-4 py-2 text-center">Through hardened<br/>Grade 2</td>
                      <td className="px-4 py-2 text-center">Through hardened<br/>Grade 1</td>
                      <td className="px-4 py-2 text-center">Through hardened<br/>Grade 2</td>
                      <td className="px-4 py-2 text-center">Through hardened<br/>Grade 1</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Hardness</td>
                      <td className="px-4 py-2 text-center">500 HB</td>
                      <td className="px-4 py-2 text-center">400 HB</td>
                      <td className="px-4 py-2 text-center">500 HB</td>
                      <td className="px-4 py-2 text-center">400 HB</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Torque (Nm)</td>
                      <td className="px-4 py-2 text-center">222.82</td>
                      <td className="px-4 py-2 text-center">432.53</td>
                      <td className="px-4 py-2 text-center">432.53</td>
                      <td className="px-4 py-2 text-center">1570.76</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Gear Forces</h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-800">
                <div>
                  <p className="font-semibold mb-2">Gear Pair 1-2:</p>
                  <ul className="space-y-1 text-sm">
                    <li>Tangential Force: 5242.75 N</li>
                    <li>Radial Force: 1908.20 N</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Gear Pair 3-4:</p>
                  <ul className="space-y-1 text-sm">
                    <li>Tangential Force: 7588.19 N</li>
                    <li>Radial Force: 2761.88 N</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Safety Factors</h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-800 text-sm">
                <div>
                  <p className="font-semibold mb-2">Gear 1 (Pinion):</p>
                  <p>Bending: F.S = 1.27</p>
                  <p>Contact: F.S = 6.706</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Gear 2:</p>
                  <p>Bending: F.S = 1.57</p>
                  <p>Contact: F.S = 3.03</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Gear 3 (Pinion):</p>
                  <p>Bending: F.S = 4.29</p>
                  <p>Contact: F.S = 2.66</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Gear 4:</p>
                  <p>Bending: F.S = 1.417</p>
                  <p>Contact: F.S = 3.712</p>
                </div>
              </div>
              <p className="text-slate-800 mt-4">
                <span className="font-semibold">Overall Design Factor of Safety:</span> 1.27 (from Gear 1 contact stress)
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Centerline Distances</h3>
              <ul className="space-y-2 text-slate-800">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Between Shafts 1-2: 125 mm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Between Shafts 2-3: 264 mm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Total Centerline Distance AC: 389 mm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Transmission Error: 0.132%</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Shaft Design */}
        <motion.section 
          id="shafts"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Shaft Design</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Shaft Parameters</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-800">
                  <thead className="bg-slate-200">
                    <tr>
                      <th className="px-4 py-2 text-left">Parameter</th>
                      <th className="px-4 py-2 text-center">Shaft 1</th>
                      <th className="px-4 py-2 text-center">Shaft 2</th>
                      <th className="px-4 py-2 text-center">Shaft 3</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-4 py-2 font-semibold">Material</td>
                      <td className="px-4 py-2 text-center" colSpan="3">Chrome Nickel Alloy SAE 3140<br/>σ<sub>y</sub> = 710 MPa</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Speed (rpm)</td>
                      <td className="px-4 py-2 text-center">2400.00</td>
                      <td className="px-4 py-2 text-center">1236.36</td>
                      <td className="px-4 py-2 text-center">340.45</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Maximum Torque (Nm)</td>
                      <td className="px-4 py-2 text-center">222.82</td>
                      <td className="px-4 py-2 text-center">432.53</td>
                      <td className="px-4 py-2 text-center">1570.76</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Maximum Bending Moment (Nm)</td>
                      <td className="px-4 py-2 text-center">217.30</td>
                      <td className="px-4 py-2 text-center">412.25</td>
                      <td className="px-4 py-2 text-center">334.24</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Critical Cross Section</td>
                      <td className="px-4 py-2 text-center">x = 136.5 mm</td>
                      <td className="px-4 py-2 text-center">x = 60.5 mm</td>
                      <td className="px-4 py-2 text-center">x = 60.5 mm</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Goodman F.S.</td>
                      <td className="px-4 py-2 text-center">1.75</td>
                      <td className="px-4 py-2 text-center">1.35</td>
                      <td className="px-4 py-2 text-center">1.686</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Yield F.S.</td>
                      <td className="px-4 py-2 text-center">9.77</td>
                      <td className="px-4 py-2 text-center">5.03</td>
                      <td className="px-4 py-2 text-center">—</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Expected Life</td>
                      <td className="px-4 py-2 text-center" colSpan="3">Infinite</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}shaft.png`}
                  alt="Shaft Design 1"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    console.error('Failed to load shaft image:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}shaft2.png`}
                  alt="Shaft Design 2"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    console.error('Failed to load shaft2 image:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Design Analysis</h3>
              <p className="text-slate-800 mb-4">
                All three shafts were designed using Chrome Nickel Alloy SAE 3140 with a yield strength 
                of 710 MPa. The shafts were analyzed using the Goodman failure criterion to account for 
                combined bending and torsional loading. Critical cross-sections were identified at locations 
                of maximum bending moment, ensuring adequate safety factors for infinite life operation.
              </p>
              <p className="text-slate-800">
                Each shaft was designed by a different team member, with Shaft 1 designed by Serena Frolli, 
                ensuring comprehensive analysis and diverse design approaches across the system.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Bearings */}
        <motion.section 
          id="bearings"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Bearing Selection</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Bearing Parameters</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-800">
                  <thead className="bg-slate-200">
                    <tr>
                      <th className="px-4 py-2 text-left">Parameter</th>
                      <th className="px-4 py-2 text-center">Shaft 1</th>
                      <th className="px-4 py-2 text-center">Shaft 2</th>
                      <th className="px-4 py-2 text-center">Shaft 3</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-4 py-2 font-semibold">Radial Load</td>
                      <td className="px-4 py-2 text-center">3987.25 N</td>
                      <td className="px-4 py-2 text-center">6814.5 N</td>
                      <td className="px-4 py-2 text-center">5524.62 N</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Thrust Load</td>
                      <td className="px-4 py-2 text-center" colSpan="3">None (spur gears)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Bearing Selected</td>
                      <td className="px-4 py-2 text-center">6408</td>
                      <td className="px-4 py-2 text-center">6409</td>
                      <td className="px-4 py-2 text-center">6309</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">ID (mm)</td>
                      <td className="px-4 py-2 text-center">40</td>
                      <td className="px-4 py-2 text-center">45</td>
                      <td className="px-4 py-2 text-center">45</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">OD (mm)</td>
                      <td className="px-4 py-2 text-center">110</td>
                      <td className="px-4 py-2 text-center">120</td>
                      <td className="px-4 py-2 text-center">100</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Width (mm)</td>
                      <td className="px-4 py-2 text-center">27</td>
                      <td className="px-4 py-2 text-center">29</td>
                      <td className="px-4 py-2 text-center">25</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">C (Dynamic Load Rating, N)</td>
                      <td className="px-4 py-2 text-center">63,700</td>
                      <td className="px-4 py-2 text-center">76,100</td>
                      <td className="px-4 py-2 text-center">52,700</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">C<sub>0</sub> (Static Load Rating, N)</td>
                      <td className="px-4 py-2 text-center">36,500</td>
                      <td className="px-4 py-2 text-center">45,000</td>
                      <td className="px-4 py-2 text-center">31,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Service Needed</td>
                      <td className="px-4 py-2 text-center" colSpan="3">None (all bearings designed for infinite life)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Bearing Design Considerations</h3>
              <p className="text-slate-800 mb-4">
                Different bearings are used in each shaft to meet specific load and speed requirements. 
                While this requires various parts and tools for maintenance, it was a trade-off to minimize 
                the housing's size. All bearings are designed to last over five years with proper 
                lubrication.
              </p>
              <p className="text-slate-800">
                To prevent damage during service, bearings should be removed with tools like a bearing 
                puller, which allows for safe extraction without damaging the housing or shaft. When 
                maintenance is needed, proper lubrication is critical—using oil during reassembly helps 
                reduce wear and prevent damage, ensuring smooth operation and extended bearing life.
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
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Overall Results</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Design Summary</h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-800">
                <div>
                  <p className="font-semibold mb-1">Input Speed:</p>
                  <p className="text-xl">2400 rpm</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Output Speed:</p>
                  <p className="text-xl">340.45 rpm</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Overall Design Factor of Safety:</p>
                  <p className="text-xl">1.27</p>
                  <p className="text-sm mt-1">(from Gear 1 contact stress)</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Expected Life:</p>
                  <p className="text-xl">Infinite</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Maintenance Requirements</h3>
              <div className="space-y-4 text-slate-800">
                <div>
                  <p className="font-semibold mb-2">Bearing Change:</p>
                  <p className="text-sm">
                    Different bearings are used in each shaft to meet specific load and speed requirements. 
                    While this requires various parts and tools for maintenance, it was a trade-off to 
                    minimize the housing's size. To prevent damage during service, bearings should be 
                    removed with tools like a bearing puller, which allows for safe extraction without 
                    damaging the housing or shaft.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Oil Change:</p>
                  <p className="text-sm">
                    All bearings are designed to last over five years, but when maintenance is needed, 
                    proper lubrication is critical. Using oil during reassembly helps reduce wear and 
                    prevent damage, ensuring smooth operation and extended bearing life.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Key Achievements</h3>
              <ul className="space-y-2 text-slate-800">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Complete three-shaft gear train design meeting 56 kW power transmission requirement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Speed reduction from 2400 rpm to 340.45 rpm with 99% reliability target</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Comprehensive AGMA stress analysis for all four gears with appropriate safety factors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Three shafts designed with Goodman factor of safety analysis for infinite life</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Bearing selection for infinite life operation over 5-year continuous service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Design optimized for 99% reliability with comprehensive analysis of all components</span>
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
