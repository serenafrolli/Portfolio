import { motion } from 'framer-motion'
import { ArrowLeft, Brain, Lightbulb, Wrench, Smartphone, Users, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

export default function LeftAware() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tableOfContents = [
    { id: 'executive-summary', title: 'Executive Summary', icon: Brain },
    { id: 'design-process', title: 'Design Process', icon: Lightbulb },
    { id: 'final-design', title: 'Final Design', icon: Wrench },
    { id: 'future-development', title: 'Future Development', icon: Target },
    { id: 'takeaways', title: 'Takeaways', icon: Users },
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
              LeftAware
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6">
              Wearable Device System for Left-Side Visuospatial Neglect
            </h2>
            <p className="text-lg text-slate-200 max-w-3xl">
              An affordable, simple, adjustable, and user-friendly device to help patients with left neglect 
              be reminded to scan left visually
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
        
        {/* Executive Summary */}
        <motion.section 
          id="executive-summary"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Executive Summary</h2>
          <div className="prose prose-lg max-w-none pl-0">
            <p className="text-lg leading-relaxed mb-6">
              This project was done in the context of the Design Thinking and Communication Course. The problem 
              that led to the project is the need to create a device to help people who present a form of 
              visuospatial neglect, called left neglect. Patients with this deficit often forget there is an 
              entire world to their left, and have to be constantly reminded to pay attention to the left side 
              by caretakers or therapists.
            </p>
            
            <div className="flex justify-center mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}How might we design a device.png`.replace(/ /g, '%20')}
                alt="How might we design a device"
                className="max-w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  console.error('Failed to load image:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Client Need</h3>
              <p className="text-slate-700">
                Our client, Dr. Enzler, from the Shirley Ryan Ability Lab, was looking for a solution that would 
                "remind patients to visually scan left", possibly a wearable device that they could wear around 
                their neck or head to be a "constant reminder".
              </p>
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              Our goal with this project is to design an affordable, simple, adjustable, and user-friendly device 
              to help patients with left neglect be reminded to scan left visually. To develop this design we 
              first had to research the problem. We achieved this both by performing secondary and primary research 
              on the topic. Secondly, we gathered more information from the client interview with Dr. Enzler.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              After having brainstormed with the class every member of our group created a low-fidelity mockup of 
              their idea and tested it on friends, or on themselves. In our team meetings, our professors offered 
              guidance on the weaknesses and strengths of each of our mockups. After this, we met as a team to 
              decide on which ideas we wanted to focus on the most moving forward. In the following weeks, we 
              created the prototypes and presented them to the class to receive feedback. In addition, we met with 
              the other groups in our section to gain insight into how to implement our app and adapt our product 
              to make it compatible with the other components of our kit.
            </p>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Project Context</h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                <div>
                  <p className="font-semibold mb-1">Prepared for:</p>
                  <p>Dr. Kate Enzler</p>
                  <p>Alexian Rehab Hospital in partnership with Shirley Ryan AbilityLab</p>
                  <p className="mt-2">Elk Grove Village, IL</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Date:</p>
                  <p>March 11, 2023</p>
                  <p className="mt-2 font-semibold">Sponsored by:</p>
                  <p>Design Thinking and Communication Program</p>
                  <p>Professors Laura Pigozzi and Stacey Wolcott</p>
                  <p>McCormick School of Engineering and Applied Science</p>
                  <p>Northwestern University</p>
                  <p>Evanston, Illinois 60208</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Design Process */}
        <motion.section 
          id="design-process"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Design Process</h2>
          
          {/* Research and Analysis */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">2.1 Research and Analysis</h3>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold mb-3 text-slate-900">Primary Research</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Conducted a client interview with Dr. Kate Enzler at the Shirley Ryan AbilityLab to refine user needs and device requirements. Key takeaways included the importance of device adjustability and user simplicity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Observed potential users to identify behavioral patterns and challenges, such as difficulty with complex devices and preference for physical cues.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold mb-3 text-slate-900">Secondary Research</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Investigated left-side neglect's physiological basis, focusing on its neurological causes and the challenges patients face in daily activities, such as difficulty scanning to the left.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Reviewed existing therapeutic interventions like prism glasses, optokinetic stimulation, and neck vibration therapy. While effective in some contexts, these solutions lacked long-term autonomy and user adaptability.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Ideation */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">2.2 Ideation</h3>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold mb-3 text-slate-900">Brainstorming and Mockups</h4>
              <p className="text-slate-700 mb-4">
                Collaborated as a team to generate diverse design ideas. Low-fidelity mockups were built to 
                visualize potential solutions. Early designs emphasized modularity, integrating both visual and 
                tactile feedback mechanisms.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold mb-3 text-slate-900">Feedback Integration</h4>
              <p className="text-slate-700">
                Presented prototypes to peers, instructors, and the client for iterative feedback. Adjusted 
                features such as the size of the glasses, strength of the haptic motor feedback, and the app's 
                interface for user-friendliness based on testing.
              </p>
            </div>
          </div>

          {/* Prototype Development */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">2.3 Prototype Development</h3>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold mb-3 text-slate-900">Key Components</h4>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                <div>
                  <p className="font-semibold mb-2">Glasses:</p>
                  <p className="text-sm">Equipped with left-side cue lines to visually guide the patient's attention.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Haptic Motor Clip:</p>
                  <p className="text-sm">Attaches to a hat or shirt, delivering a tactile reminder to scan left.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Gyroscope:</p>
                  <p className="text-sm">Tracks head rotation, ensuring the haptic feedback is only active when the patient hasn't turned far enough.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Mobile App:</p>
                  <p className="text-sm">Features include: Settings for motor intensity and visual reminders. Progress tracking with simple data visuals.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3 text-slate-900">Testing</h4>
              <p className="text-slate-700 mb-4">
                Prototypes underwent user testing to evaluate comfort, usability, and effectiveness in real-world 
                scenarios. Iterative refinements were made to improve the app's interface, motor responsiveness, 
                and integration of components.
              </p>
              <div className="flex justify-center mt-4">
                <img 
                  src={`${import.meta.env.BASE_URL}User testing.png`.replace(/ /g, '%20')}
                  alt="User testing"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    console.error('Failed to load image:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Final Design */}
        <motion.section 
          id="final-design"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Final Design</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">System Integration</h3>
              <p className="text-slate-700 mb-4">
                All components were designed to work seamlessly together:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>The gyroscope collects movement data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>The glasses and motor clip provide synchronized feedback based on this data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>The app communicates with the hardware via Bluetooth, enabling customization and progress tracking.</span>
                </li>
              </ul>
              <p className="text-slate-700 mt-4">
                A system diagram shows the flow of data and feedback, highlighting user interactions at each step.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">User Interface</h3>
              <p className="text-slate-700 mb-4">
                The mobile app includes:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <Smartphone className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                  <span>A home screen summarizing progress with simple visuals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Smartphone className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                  <span>Settings to adjust the intensity and frequency of reminders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Smartphone className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                  <span>A Bluetooth setup page for seamless pairing of devices.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center mt-6">
              <img 
                src={`${import.meta.env.BASE_URL}Rotasense.png`}
                alt="Rotasense"
                className="max-w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  console.error('Failed to load image:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </motion.section>

        {/* Future Development */}
        <motion.section 
          id="future-development"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Directions for Future Development</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Further Testing</h3>
              <p className="text-slate-700 mb-4">
                Conduct extensive usability studies to ensure the app and devices are intuitive for a diverse 
                user base. Focus on accessibility, such as:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Legible fonts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Larger buttons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Step-by-step guidance for setup</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Additional Features</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Develop an app feature to share progress data with caregivers and therapists, aiding in personalized therapy adjustments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Add functionality for activity-specific settings, such as reminders tailored for reading, walking, or driving.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Takeaways */}
        <motion.section 
          id="takeaways"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Takeaways</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Team Collaboration</h3>
              <p className="text-slate-700 mb-4">
                Emphasized the value of interdisciplinary teamwork. Communication between designers, engineers, 
                and stakeholders was key to balancing user needs and technical feasibility.
              </p>
              <p className="text-slate-700 font-semibold mb-2">Gained skills in:</p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>User-centered design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Iterative prototyping and testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Integration of hardware and software systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Reflection</h3>
              <p className="text-slate-700">
                Through the project witnessing the potential for improved quality of life of the patients 
                reinforced the importance of engineering for social good. The project gave me confidence in 
                creating solutions that prioritize user autonomy, design accessibility, and the importance of 
                designing for a purpose.
              </p>
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

