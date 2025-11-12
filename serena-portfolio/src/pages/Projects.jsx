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
    title: "Unducted turbofan CFD simulation",
    period: "2025",
    description:
      "CFD simulation of an unducted turbofan (open rotor) engine to evaluate aerodynamic performance and sustainability potential, removing the nacelle for improved efficiency.",
    highlights: [
      "ANSYS CFX simulation with detailed blade meshing (1.27M nodes)",
      "Achieved 332,000 N thrust and 685 kPa max pressure",
      "Improved simulation accuracy from 3× to 2× error vs GE specs",
      "ME 495 Aerodynamics course project",
    ],

    links: [
      { label: "View Details", href: "/unducted-turbofan" },
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
    title: "Stanford Summer Session: The Origin and Development of the Cosmos",
    period: "2021",
    description:
      "Final poster for 'The Origin and Development of the Cosmos' course offered by Stanford University Summer Session and taught by Professor Ashley Perko.",
    highlights: [
      "Completed Stanford Summer Session course",
      "Created comprehensive final poster on cosmic origins",
      "Explored cosmological theories and development",
    ],

    links: [
      { label: "View Details", href: "/stanford-cosmos" },
    ],
  },
  {
    title: "Mechanical Design and Manufacturing",
    period: "2024",
    description:
      "Designed and tested a robot arm end effector to pick up and move an egg without breaking it, applying CAD, FEA, and mechanical design principles.",
    highlights: [
      "Designed bottom effector component with force constraints (2N at 1mm, under 9N at 2mm deflection)",
      "Conducted finite element analysis and physical testing iterations",
      "Optimized design for weight reduction while maintaining performance",
      "Collaborative project with Charlize Guillen Meija",
    ],

    links: [
      { label: "View Details", href: "/me240" },
    ],
  },
  {
    title: "Topology Optimization of a Truss in ANSYS",
    period: "2025",
    description:
      "A study evaluating and comparing the structural performance of topology-optimized trusses under different loading conditions using ANSYS FEA.",
    highlights: [
      "Analyzed topology optimization of trusses under beam bending, simply supported, and compression loading",
      "Compared optimized geometries to traditional Pratt truss design",
      "Evaluated stress-to-volume ratios across different mass retention thresholds",
      "Collaborative project with Daniel Killioglu, Shane Grayson, and Paulina Hernandez",
    ],

    links: [
      { label: "View Details", href: "/me362" },
    ],
  },
];

// Helper function to render project image
function ProjectImage({ project }) {
  if (project.title === "NASA Big Idea Challenge: METALS") {
    return (
      <div className="aspect-video overflow-hidden bg-slate-200 flex items-center justify-center">
        <img 
          src={metalsRender}
          alt="METALS Final Render"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.className = 'aspect-video bg-gradient-to-br from-slate-100 to-slate-50'
          }}
        />
      </div>
    )
  }
  if (project.title === "Jack in a Box Dynamics") {
    return (
      <div className="aspect-video overflow-hidden bg-white flex items-center justify-center">
        <img 
          src={`${import.meta.env.BASE_URL}state-variables-graph.png`}
          alt="State Variables Graph"
          className="w-full h-full object-contain p-2"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.className = 'aspect-video bg-gradient-to-br from-slate-100 to-slate-50'
          }}
        />
      </div>
    )
  }
  if (project.title === "LeftAware") {
    return (
      <div className="aspect-video overflow-hidden bg-white flex items-center justify-center">
        <img 
          src={`${import.meta.env.BASE_URL}Rotasense.png`}
          alt="Rotasense"
          className="w-full h-full object-contain p-2"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.className = 'aspect-video bg-gradient-to-br from-slate-100 to-slate-50'
          }}
        />
      </div>
    )
  }
  if (project.title === "Unducted turbofan CFD simulation") {
    return (
      <div className="aspect-video overflow-hidden bg-slate-900">
        <img 
          src={`${import.meta.env.BASE_URL}Velocity Streamline - White.png`}
          alt="Velocity Streamline"
          className="w-full h-full object-cover scale-110"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.className = 'aspect-video bg-gradient-to-br from-slate-100 to-slate-50'
          }}
        />
      </div>
    )
  }
  if (project.title === "Three-Shaft Gear Train Design") {
    return (
      <div className="aspect-video overflow-hidden bg-white flex items-center justify-center">
        <img 
          src={`${import.meta.env.BASE_URL}gear.png`}
          alt="Gear Train Design"
          className="w-full h-full object-contain p-2"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.className = 'aspect-video bg-gradient-to-br from-slate-100 to-slate-50'
          }}
        />
      </div>
    )
  }
  if (project.title === "Stanford Summer Session: The Origin and Development of the Cosmos") {
    return (
      <div className="aspect-video overflow-hidden bg-white flex items-center justify-center">
        <img 
          src={`${import.meta.env.BASE_URL}stanford.png`}
          alt="Stanford Cosmos Poster"
          className="w-full h-full object-contain p-2"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.className = 'aspect-video bg-gradient-to-br from-slate-100 to-slate-50'
          }}
        />
      </div>
    )
  }
  if (project.title === "Mechanical Design and Manufacturing") {
    return (
      <div className="aspect-video overflow-hidden bg-white flex items-center justify-center">
        <img 
          src={`${import.meta.env.BASE_URL}end effectors fea.png`}
          alt="End effectors FEA analysis"
          className="w-full h-full object-contain p-2"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.className = 'aspect-video bg-gradient-to-br from-slate-100 to-slate-50'
          }}
        />
      </div>
    )
  }
  if (project.title === "Topology Optimization of a Truss in ANSYS") {
    return (
      <div className="aspect-video overflow-hidden bg-slate-900">
        <img 
          src={`${import.meta.env.BASE_URL}362_1.png`}
          alt="ME 362 Topology Optimization"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.className = 'aspect-video bg-gradient-to-br from-slate-100 to-slate-50'
          }}
        />
      </div>
    )
  }
  return <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-50" />
}

export default function Projects() {
  // Group projects by year
  const projectsByYear = projects.reduce((acc, project) => {
    const year = project.period
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(project)
    return acc
  }, {})

  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(projectsByYear).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <div className="min-h-screen site-bg text-slate-900">
      <Section label="Selected Projects">
        <div className="space-y-12">
          {sortedYears.map((year) => (
            <div key={year} className="flex gap-8">
              {/* Year label on the left */}
              <div className="flex-shrink-0 w-20 pt-2 flex items-start">
                <h2 className="text-5xl font-bold text-slate-400" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                  {year}
                </h2>
              </div>
              
              {/* Horizontal scrollable carousel */}
              <div className="flex-1 overflow-x-auto pb-4" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>
                <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
                  {projectsByYear[year].map((p) => {
                    const detailLink = p.links?.find(l => l.href.startsWith('/'))
                    const CardWrapper = detailLink ? Link : 'div'
                    const wrapperProps = detailLink ? { 
                      to: detailLink.href, 
                      className: 'block',
                      onClick: () => window.scrollTo(0, 0)
                    } : {}
                    
                    return (
                      <CardWrapper key={p.title} {...wrapperProps} className="flex-shrink-0 w-80">
                        <Card className="group h-full cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105">
                          <CardContent className="p-0">
                            <ProjectImage project={p} />
                            <div className="p-6">
                              <h3 className="text-lg font-semibold">{p.title}</h3>
                              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{p.description}</p>
                              <ul className="mt-3 space-y-1 text-sm">
                                {p.highlights.slice(0, 3).map((h) => (
                                  <li key={h} className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0"/>{h}
                                  </li>
                                ))}
                              </ul>

                              {p.links?.length ? (
                                <div className="mt-4">
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
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
