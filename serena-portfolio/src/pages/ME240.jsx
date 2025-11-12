import { motion } from 'framer-motion'
import { ArrowLeft, Settings, Wrench, BarChart3, CheckCircle, Users, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

export default function ME240() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tableOfContents = [
    { id: 'overview', title: 'Overview', icon: Settings },
    { id: 'design', title: 'Design Approach', icon: Wrench },
    { id: 'analysis', title: 'Analysis Summary', icon: BarChart3 },
    { id: 'iterations', title: 'Further Iterations', icon: Settings },
    { id: 'testing', title: 'Final Testing', icon: CheckCircle },
    { id: 'sources', title: 'Sources', icon: ExternalLink },
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
              Mechanical Design and Manufacturing: ME240
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6">
              Robot Arm End Effector Design
            </h2>
            <p className="text-lg text-slate-200 max-w-3xl">
              Designed and tested a robot arm end effector to pick up and move an egg without breaking it, 
              applying CAD, FEA, and mechanical design principles.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h3 className="text-xl font-semibold mb-6">Table of Contents</h3>
          <div className="grid md:grid-cols-3 gap-4">
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
          <div className="prose prose-lg max-w-none pl-0">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  In the course "Introduction to Mechanical Design and Manufacturing" (ME 240) I had the 
                  opportunity to apply the mechanical design skills taught in class to design and test a robot 
                  arm end effector to pick up and move an egg without breaking it. The effector had to be 
                  mounted on a TINKERKIT BRACCIO robot arm (shown to the side) and our task, in pairs, was to 
                  redesign two components of the end effector to accommodate a solenoid actuator. These two 
                  components had to consist of a static part mounted to the robot arm, and a moving part 
                  actuated by the solenoid. The solenoid subassembly had already been built.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  The general goal of this project was to understand the strategy and process of developing 
                  functional mechanical elements while applying skills in CAD, theoretical load calculations, 
                  mechanical drawings, and general design iterations.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}robot arm.png`}
                  alt="TINKERKIT BRACCIO robot arm"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    console.error('Failed to load robot arm image:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            <div className="mb-6">
              <p className="text-slate-700 mb-2">
                <strong>In collaboration with:</strong>
              </p>
              <p className="text-slate-700">
                Charlize Guillen Meija
              </p>
            </div>
          </div>
        </motion.section>

        {/* Design Approach */}
        <motion.section 
          id="design"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Design Approach</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              In my group, I was in charge of designing the bottom effector. The design approach involved 
              adhering to the guidelines and limitations imposed by the project, both for geometry, 
              manufacturing, and performance metrics. This included maintaining the part's reaction force 
              over 2N at a deflection of 1 mm and under 9N at a deflection of 2mm. I designed to reduce 
              stress concentrations at the critical parts of my component, using fillets where needed while 
              reducing weight with the goal of creating the lightest successful design.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              In the first lab, the main focus of the preliminary design was on the geometric and 
              manufacturing constraints. To define the lengths of the part, hand calculations were performed 
              to estimate the reaction forces for the specific deflections at the egg location. The part was 
              thicker compared to the final iteration of the design.
            </p>

            <div className="mb-6">
              <p className="text-slate-700 mb-4 italic">
                The testing setup including the solenoid.
              </p>
              <img 
                src={`${import.meta.env.BASE_URL}testing setup with solenoid.jpg`}
                alt="Testing setup with solenoid"
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  console.error('Failed to load testing setup image:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>

            <p className="text-lg leading-relaxed mb-6">
              After having conducted finite element analysis it was observed that the design was beyond the 
              assigned force limits and therefore had to be modified. This included reducing the thickness of 
              the part to get to values within the acceptable range. This was done by collecting the data 
              from simulations at different thicknesses in a spreadsheet and determining a trend between 
              thickness and reaction force, at 2mm deflection (max force). Furthermore, after the first 
              physical testing, it was necessary to modify the part because it did not fit into the mounting 
              holes. Before conducting the second cycle of FEA the effector's weight was ulteriorly reduced 
              by adding holes on the section between the mounting holes.
            </p>

            <div className="mb-6">
              <p className="text-slate-700 mb-4 text-sm italic">
                Top image. Bottom effector (left), upper effector (right). Nodal force simulation analysis. 
                Bottom image. Bottom effector (second design iteration). Nodal stress analysis results.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src={`${import.meta.env.BASE_URL}end effectors fea.png`}
                    alt="End effectors FEA analysis"
                    className="w-full h-auto rounded-lg shadow-lg"
                    onError={(e) => {
                      console.error('Failed to load FEA image:', e.target.src);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <img 
                    src={`${import.meta.env.BASE_URL}bottom effector nodal stress.png`}
                    alt="Bottom effector nodal stress analysis"
                    className="w-full h-auto rounded-lg shadow-lg"
                    onError={(e) => {
                      console.error('Failed to load stress analysis image:', e.target.src);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Analysis Summary */}
        <motion.section 
          id="analysis"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Analysis Summary</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              The method of analysis that was most useful to determine areas for improvement was physical 
              testing. Physically inserting the part into the structure was useful to determine flaws in the 
              manufacturing of the part and identify fragile areas.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              The FEA yielded values that were way too high (above 100N) to be of any use, especially for 
              the first iterations of the design. More importantly, the results from FEA and physical testing 
              did not match. After the first round of FEA and physical testing with the same part, which was 
              above the allowed limits, a ratio between the FEA and physical results was determined and then 
              kept into account once the design was modified before final testing. Finally, when physically 
              testing the parts the values of force oscillated which made determining a precise measurement 
              value challenging.
            </p>
            
            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg mb-6">
              <p className="text-slate-700 mb-4">
                The study "Mechanical properties of polyamide 12 manufactured by means of SLS: Influence of 
                wall thickness and build direction" details how the mechanical proprieties of Nylon PA 12 
                manufactured through Sintetic Laser Sintering (SLS), vary based on wall thickness and build 
                direction. In particular, it was found that the Nylon 12 sample manufactured in the horizontal 
                or transverse direction has better values strength values than the vertical one. This is 
                different from the model used by FEA software, as the material is assumed to be isotropic 
                (proprieties are the same when tested in different directions). Also, at a microscopic level, 
                the porosity of the material, composed of particles with different diameters (30 and 60 
                micrometers), greatly affects the properties of the material. This is most likely not 
                accounted for by FEA software.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Further Iterations */}
        <motion.section 
          id="iterations"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Further Iterations</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              To improve the part geometry, I would add a circular cutout where the egg is placed to increase 
              the contact surface, reducing the force applied. Trusses or additional holes could also be added 
              to lighten the design without significantly impacting force values. For mass production, reducing 
              part weight and combining the top and bottom effectors into a single piece would optimize 
              material use and simplify manufacturing.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Material choice and sustainability are key considerations. Nylon 12, used in the current design 
              with SLS, has high greenhouse gas emissions, posing environmental concerns. An alternative is 
              polylactic acid (PLA), a biopolymer derived from natural sources. PLA offers lower emissions than 
              Nylon 12 and adequate mechanical properties for this application, despite being less heat-resistant 
              and strong. Its widespread use in mass production supports its feasibility as a sustainable option.
            </p>

            <div className="mb-6">
              <p className="text-slate-700 mb-4 italic">
                The assembled part with both effectors.
              </p>
              <div className="flex justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}assmbled part.jpg`}
                  alt="Assembled part with both effectors"
                  className="max-w-md w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    console.error('Failed to load assembled part image:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Final Testing */}
        <motion.section 
          id="testing"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Final Testing</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              As can be seen in the video our part was successfully able to lift the egg without breaking it, 
              staying within the desired force limits.
            </p>
            
            <div className="flex justify-center mb-6">
              <video 
                src={`${import.meta.env.BASE_URL}actuation vid.MP4`}
                controls
                className="w-full max-w-2xl rounded-lg shadow-lg"
                onError={(e) => {
                  console.error('Failed to load video:', e.target.src);
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.section>

        {/* Sources */}
        <motion.section 
          id="sources"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Sources</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <ol className="list-decimal list-inside space-y-3">
              <li className="break-words">
                Rezvani Ghomi, Erfan et al. "The Life Cycle Assessment for Polylactic Acid (PLA) to Make It a Low-Carbon Material." Polymers vol. 13,11 1854. 2 Jun. 2021, doi:10.3390/polym13111854{" "}
                <a 
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8199738/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 underline underline-offset-4 inline-flex items-center gap-1 break-all"
                >
                  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8199738/
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                </a>
              </li>
              <li className="break-words">
                Hariri, Azian & Hafidz, Muhammad & Bin Md Fauadi, Muhammad Hafidz Fazli & Alkahari, Mohd Rizal & Omar, Mohamad & Muhamad Damanhuri, Amir Abdullah. (2019). Emission of selected Environmental Exposure from Selective Laser Sintering (SLS) Polyamide Nylon (PA12) 3D printing Process. 1-6.{" "}
                <a 
                  href="https://www.researchgate.net/publication/334558751_Emission_of_selected_Environmental_Exposure_from_Selective_Laser_Sintering_SLS_Polyamide_Nylon_PA12_3D_printing_Process"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 underline underline-offset-4 inline-flex items-center gap-1 break-all"
                >
                  https://www.researchgate.net/publication/334558751_Emission_of_selected_Environmental_Exposure_from_Selective_Laser_Sintering_SLS_Polyamide_Nylon_PA12_3D_printing_Process
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                </a>
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

