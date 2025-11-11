import { Code2, ChevronRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent, Section } from '../components/UI'
import metalsRender from '../assets/METALS_FinalRender.png'
import nuLogo from '../assets/NU-logo.png'
// Import will be added once image file is in assets folder
// import jackInBoxGraph from '../assets/jack-in-box-graph.png'



const projects = [
  {
    title: "NASA Big Idea Challenge: METALS",
    period: "2024",
    description:
      "Advanced the development of inflatable metal systems for lunar infrastructure through innovative Free Inner Pressure Deformation (FIDU) technology.",
    highlights: [
      "Received $146,000 funding as one of six finalist schools",
      "Developed inflatable metal systems for lunar infrastructure",
      "Optmized the geometry of the inflatables for stress optimization",
      "Manufactured 50+ inflatables with various materials and shapes",
      "Received the ARTEMIS Award as top prize in the Challenge",
    ],

    links: [
      { label: "View Details", href: "/nasa-metals" },
    ],
  },
  {
    title: "LeftAware",
    period: "2023",
    description:
      "Designed an affordable, wearable device system to help patients with left-side visuospatial neglect be reminded to visually scan left, integrating glasses, haptic feedback, and a mobile app.",
    highlights: [
      "Developed integrated system with glasses, haptic motor clip, gyroscope, and mobile app",
      "Conducted primary research through client interviews with Dr. Kate Enzler at Shirley Ryan AbilityLab",
      "Created user-friendly mobile app with Bluetooth connectivity and progress tracking",
      "Designed adjustable, simple device prioritizing user autonomy and accessibility",
      "Iteratively prototyped and tested with real users for comfort and effectiveness",
    ],

    links: [
      { label: "View Details", href: "/leftaware" },
    ],
  },
  {
    title: "Jack in a Box Dynamics",
    period: "2024",
    description:
      "Modeled the dynamics of a jack inside a box for Machine Dynamics final project. Included two rigid bodies, six degrees of freedom, sixteen impact conditions, and two external forces using Euler-Lagrange equations.",
    highlights: [
      "Solved Euler-Lagrange equations for 2D rigid body dynamics",
      "Implemented 16 impact conditions to constrain jack to box edges",
      "Applied piecewise forces for box motion with threshold-based control",
      "Generated animations and state variable plots using SymPy",
    ],

    links: [
      { label: "View Details", href: "/jack-in-box" },
    ],
  },
  {
    title: "Unducted turbofan CFD simulation",
    period: "2024",
    description:
      "Analysis and presentation of unducted turbofan engine technology, featuring exposed fan blade design for improved efficiency and performance in aircraft propulsion systems.",
    highlights: [
      "Analyzed unducted turbofan design with exposed fan blades",
      "Evaluated performance characteristics and efficiency improvements",
      "Examined integration challenges and design trade-offs",
      "Collaborative team project with equal contributions",
    ],

    links: [
      { label: "View Details", href: "/unducted-turbofan" },
    ],
  },
  {
    title: "Pressure Sensor Data Analysis",
    period: "2025",
    description:
      "Signal processing and calibration pipeline for multi-region static pressure measurements (p2 = 32.75 kPa, p3 = 23.68 kPa), including uncertainty quantification.",
    highlights: [
      "Automated cleaning + outlier handling",
      "Repeatability study and confidence bounds",
    ],

    links: [
      { label: "View Details", href: "/pressure-sensor-analysis" },
    ],
  },
  {
    title: "Titan Rotor/Airfoil CFD Studies",
    period: "2024–2025",
    description:
      "Set up RANS CFD for Titan atmosphere propeller/airfoil studies; computed Reynolds numbers, validated against literature, and compared to experimental trends.",
    highlights: ["Meshing strategy & y+ control", "Post-processing scripts for lift/drag"],

    links: [
      { label: "View Details", href: "/titan-cfd" },
    ],
  },
  {
    title: "Three-Shaft Gear Train Design",
    period: "2025",
    description:
      "Designed a three-shaft gear train reducing input speed from 2400 rpm to 340.45 rpm with 56 kW power transmission. Designed for 99% reliability over 5 years of continuous operation.",
    highlights: [
      "Comprehensive design of shafts, gears, and bearings with AGMA analysis",
      "Gear design with through-hardened steel materials and safety factors",
      "Bearing selection for infinite life with proper load ratings",
    ],

    links: [
      { label: "View Details", href: "/gear-train-design" },
    ],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen site-bg text-slate-900">
      <Section label="Selected Projects">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => {
            const detailLink = p.links?.find(l => l.href.startsWith('/'))
            const CardWrapper = detailLink ? Link : 'div'
            const wrapperProps = detailLink ? { to: detailLink.href, className: 'block' } : {}
            
            return (
              <CardWrapper key={p.title} {...wrapperProps}>
                <Card className="group h-full cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                {p.title === "NASA Big Idea Challenge: METALS" ? (
                  <div className="aspect-video overflow-hidden bg-slate-200 flex items-center justify-center">
                    <img 
                      src={metalsRender}
                      alt="METALS Final Render"
                      className="w-full h-full object-cover"
                      onLoad={() => console.log('METALS render loaded successfully!')}
                      onError={(e) => {
                        console.error('METALS render failed to load');
                        console.error('Image src:', e.target.src);
                        console.error('metalsRender value:', metalsRender);
                      }}
                    />
                    {/* Debug info */}
                    <div className="absolute top-2 left-2 text-xs text-white bg-black/50 p-1 rounded">
                      Debug: {metalsRender ? 'Image imported' : 'No image'}
                    </div>
                  </div>
                ) : p.title === "Jack in a Box Dynamics" ? (
                  <div className="aspect-video overflow-hidden bg-white flex items-center justify-center">
                    <img 
                      src={`${import.meta.env.BASE_URL}state-variables-graph.png`}
                      alt="State Variables Graph - xb, yb, θb, xj, yj, θj vs Time"
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        // Fallback to gradient if image not found
                        e.target.style.display = 'none'
                        e.target.parentElement.className = 'aspect-video bg-gradient-to-br from-amber-100 to-orange-50'
                      }}
                    />
                  </div>
                ) : p.title === "LeftAware" ? (
                  <div className="aspect-video overflow-hidden bg-white flex items-center justify-center">
                    <img 
                      src={`${import.meta.env.BASE_URL}Rotasense.png`}
                      alt="Rotasense"
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        // Fallback to gradient if image not found
                        e.target.style.display = 'none'
                        e.target.parentElement.className = 'aspect-video bg-gradient-to-br from-purple-100 to-pink-50'
                      }}
                    />
                  </div>
                ) : p.title === "Unducted turbofan CFD simulation" ? (
                  <div className="aspect-video overflow-hidden bg-slate-900">
                    <img 
                      src={`${import.meta.env.BASE_URL}Velocity Streamline - White.png`}
                      alt="Velocity Streamline"
                      className="w-full h-full object-cover scale-110"
                      onError={(e) => {
                        // Fallback to gradient if image not found
                        e.target.style.display = 'none'
                        e.target.parentElement.className = 'aspect-video bg-gradient-to-br from-blue-100 to-blue-50'
                      }}
                    />
                  </div>
                ) : p.title === "Three-Shaft Gear Train Design" ? (
                  <div className="aspect-video overflow-hidden bg-white flex items-center justify-center">
                    <img 
                      src={`${import.meta.env.BASE_URL}gear.png`}
                      alt="Gear Train Design"
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        // Fallback to gradient if image not found
                        e.target.style.display = 'none'
                        e.target.parentElement.className = 'aspect-video bg-gradient-to-br from-blue-100 to-blue-50'
                      }}
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50" />
                )}
                <div className="p-6">
                  <div className="text-sm text-slate-600 flex items-center gap-2">
                    <Code2 className="w-4 h-4"/> {p.period}
                  </div>
                  <h3 className="text-lg font-semibold mt-1">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                  <ul className="mt-3 space-y-1 text-sm">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-0.5"/>{h}
                      </li>
                    ))}
                  </ul>

                    {p.links?.length ? (
                      <div className="mt-4 flex gap-3">
                        {p.links.map((l) => (
                          l.href.startsWith('/') ? (
                            <span key={l.label} className="inline-flex items-center gap-1 text-sm text-slate-700 group-hover:text-blue-600 transition-colors">
                              {l.label} <ChevronRight className="w-3 h-3"/>
                            </span>
                          ) : (
                            <a 
                              key={l.label} 
                              href={l.href} 
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-sm underline underline-offset-4"
                            >
                              {l.label} <ExternalLink className="w-3 h-3"/>
                            </a>
                          )
                        ))}
                      </div>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </CardWrapper>
          )
        })}
        </div>
      </Section>
    </div>
  );
}
