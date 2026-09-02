import { motion } from 'framer-motion'
import { ArrowLeft, Cpu, SlidersHorizontal, Plane, Camera } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

// Drop a plot into /public and put its filename here to fill a slot.
function Figure({ src, caption }) {
  if (!src) {
    return (
      <figure className="my-8">
        <div className="w-full aspect-[16/7] rounded-lg border-2 border-dashed border-navy-200 bg-navy-50 flex items-center justify-center">
          <span className="tech-label text-navy-300">Figure — {caption}</span>
        </div>
        <figcaption className="tech-label text-navy-400 mt-2 text-center">{caption}</figcaption>
      </figure>
    )
  }
  return (
    <figure className="my-8">
      <img
        src={import.meta.env.BASE_URL + src}
        alt={caption}
        className="w-full rounded-lg shadow-md"
      />
      <figcaption className="tech-label text-navy-400 mt-2 text-center">{caption}</figcaption>
    </figure>
  )
}

const weeks = [
  {
    w: '01',
    title: 'Inertial Measurement Unit',
    body: 'Brought up a BMI088 IMU on a Raspberry Pi Zero 2W over I²C. Configured the accelerometer to ±3 g (register 0x41) and the gyroscope to ±1000 °/s (register 0x0F), read all six axes, and scaled the raw 16-bit values into g and °/s. Roll and pitch were derived from the accelerometer with atan2, then calibrated by averaging 1000 samples per channel and subtracting the resulting offsets.',
  },
  {
    w: '02',
    title: 'Complementary filter, joystick & safety',
    body: 'Fused the accelerometer angles with integrated gyro rates in a complementary filter, weighted by a tunable constant A — the accelerometer anchors the long-term angle while the gyro supplies fast response without its drift. Interfaced a joystick through shared memory alongside the receiver process, then added the safety layer: abort on gyro rates over 300 °/s, roll or pitch beyond 45°, a kill button, or a joystick timeout longer than 0.35 s.',
    fig: {
      src: 'quad-complementary-filter.png',
      caption: 'Why fusion is needed — the raw accelerometer angle (blue) is noisy, the integrated gyro (red) drifts away, and the filtered output (orange) tracks cleanly',
    },
  },
  {
    w: '03',
    title: 'PID control on pitch',
    body: 'Built the pitch controller one term at a time — proportional torque against angle error, derivative damping against gyro rate to stop overshoot, and an integral term (with saturation) to erase steady-state offset — then combined them into a full PID driving the four motor commands.',
    fig: {
      src: 'quad-pid-full.png',
      caption: 'Full PID on the rig — large pitch disturbances early on settle to level flight, with motor commands opposing the tilt',
    },
  },
  {
    w: '04',
    title: 'Motors, props & tuning on the rig',
    body: 'Assembled the airframe, verified propeller orientation, and tuned on the test rig. Isolating the terms made their behavior tangible: derivative-only control felt viscous, actively resisting any pitch motion. Tuned P up to the onset of oscillation, then damped with D, and characterized how the IMU low-pass filter bandwidth changed the measured angle.',
    fig: {
      src: 'quad-pd-flight.png',
      caption: 'Full PD controller in flight — holding attitude while tracking commanded pitch from the joystick',
    },
  },
  {
    w: '05',
    title: 'Pitch, roll & yaw',
    body: 'Extended to all three axes. Final pitch gains settled at P = −7.5, D = −3, I = −0.035, with the trade-off that raising P for faster response amplified vibration. Roll ran its own loop (P = 15, D = 7), and yaw used proportional control on yaw rate (P = −2.0) mixed into diagonal motor pairs, since opposite-spinning rotors are what generate yaw torque. A motor-pause toggle was added for safe handling.',
  },
  {
    w: '06',
    title: 'Ground-effect flight',
    body: 'First flight off the rig. Achieved a stable hover in ground effect and flew the quadrotor to a marked spot on the floor while staying under 5 cm, keeping the airframe pointed away from the pilot so roll and pitch mapped intuitively to left/right and forward/back.',
  },
  {
    w: '07',
    title: 'Free-flight hover',
    body: 'Full flight out of ground effect: holding a hover inside a 2 ft diameter virtual sphere at roughly 2 ft altitude for 5 seconds. Diagnosed a developing forward-pitch bias by plotting commanded against filtered pitch to rule out a bad setpoint.',
  },
  {
    w: '08',
    title: 'Camera integration — autonomous yaw',
    body: 'Added an overhead webcam tracking an ArUco marker on the airframe, streaming x, y, z and yaw into the flight code. Closed the first autonomy loop on heading: the camera yaw estimate feeds a high-level controller that commands the yaw-rate loop underneath it.',
    fig: {
      src: 'quad-camera-yaw.png',
      caption: 'First closed camera loop — measured yaw (blue) against the commanded yaw rate (orange), whose spikes show the high-level gain set too aggressively at 0.1',
    },
  },
  {
    w: '09',
    title: 'Camera XY position hold',
    body: 'Cascaded outer-loop PD controllers on camera x and y position error, producing pitch and roll setpoints for the inner attitude loops. This was the hardest tuning of the quarter — the drone drifted persistently, and the culprits turned out to be the ~30 FPS ArUco pipeline adding latency, and testing inside ground effect, which badly distorted the response.',
  },
  {
    w: '10',
    title: 'Autonomous altitude & full position hold',
    body: 'Closed the last axis with a shared-autonomy thrust loop — half pilot stick, half PID on the camera-reported height. After correcting a sign error on the camera z gains (camera z measures distance from the camera down to the drone) and tuning P and D before introducing I, the quadrotor held position autonomously in x, y, z and yaw.',
  },
]

export default function Quadrotor() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const toc = [
    { id: 'overview', title: 'Overview', icon: Cpu },
    { id: 'architecture', title: 'Architecture', icon: SlidersHorizontal },
    { id: 'log', title: 'Build Log', icon: Plane },
    { id: 'outcome', title: 'Outcome', icon: Camera },
  ]

  return (
    <div className="min-h-screen site-bg text-navy-800">
      {/* Header */}
      <div className="bg-navy-900 blueprint-grid text-paper">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <Link to="/projects" className="tech-label inline-flex items-center gap-2 text-navy-300 hover:text-paper mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="tech-label text-accent-light mb-4">CS/ME 410 · March – June 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quadrotor Design and Control</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent-light mb-6">
              From bare IMU to autonomous vision-guided hover
            </h2>
            <p className="text-lg text-navy-200 max-w-3xl">
              Over ten weeks, a quadrotor built up from an unconfigured sensor to a vehicle that holds
              its own position in x, y, z and yaw — writing every layer of the stack in C: sensor
              fusion, safety interlocks, cascaded PID attitude control, and a camera-driven outer loop.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white border-b border-navy-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <h3 className="text-xl font-semibold mb-6 text-navy-900">Table of Contents</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {toc.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center p-4 rounded-lg border border-navy-100 hover:border-accent hover:bg-navy-50 transition-all duration-200 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="w-6 h-6 text-accent mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-navy-700">{item.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        {/* Overview */}
        <motion.section
          id="overview"
          className="mb-16 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-navy-900">Overview</h2>
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed mb-6">
                CS/ME 410 builds a quadrotor from the ground up. Nothing is handed over working: the
                flight code is written incrementally in C on a Raspberry Pi Zero 2W, starting from raw
                I²C register reads and ending with closed-loop autonomy driven by an overhead camera.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The through-line is that every layer depends on the one beneath it. A noisy angle
                estimate makes attitude control impossible to tune; an untuned attitude loop makes
                position hold hopeless. Each week's milestone had to genuinely work before the next
                could be attempted.
              </p>
              <div className="bg-navy-50 border-l-4 border-accent p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-3 text-navy-900">Hardware</h3>
                <ul className="space-y-1 text-navy-700">
                  <li>• Raspberry Pi Zero 2W flight computer, C flight code</li>
                  <li>• BMI088 6-axis IMU over I²C (±3 g, ±1000 °/s)</li>
                  <li>• Four brushless motors, joystick over shared memory</li>
                  <li>• Overhead webcam with ArUco marker tracking</li>
                </ul>
              </div>
            </div>
            <Figure
              src="quad-aruco-tracking.jpg"
              caption="ArUco pose estimation — the overhead camera resolving the drone's x, y, z and yaw in real time"
            />
          </div>
        </motion.section>

        {/* Architecture */}
        <motion.section
          id="architecture"
          className="mb-16 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-navy-900">Control Architecture</h2>
          <p className="text-lg leading-relaxed mb-8">
            The final system is a cascade. A fast inner loop stabilizes attitude from IMU data; a
            slower outer loop turns camera position error into attitude setpoints for that inner loop
            to chase.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-navy-50 p-6 rounded-lg">
              <p className="tech-label text-accent mb-3">Layer 1</p>
              <h3 className="text-lg font-semibold mb-3 text-navy-900">State estimation</h3>
              <p className="text-navy-700 text-sm">
                Complementary filter blending accelerometer angles with integrated gyro rates —
                the accelerometer for long-term truth, the gyro for fast response without drift.
              </p>
            </div>
            <div className="bg-navy-50 p-6 rounded-lg">
              <p className="tech-label text-accent mb-3">Layer 2</p>
              <h3 className="text-lg font-semibold mb-3 text-navy-900">Attitude PID</h3>
              <p className="text-navy-700 text-sm">
                Independent pitch, roll and yaw loops mixed into four motor commands. Yaw acts on
                diagonal motor pairs, exploiting the counter-rotating props.
              </p>
            </div>
            <div className="bg-navy-50 p-6 rounded-lg">
              <p className="tech-label text-accent mb-3">Layer 3</p>
              <h3 className="text-lg font-semibold mb-3 text-navy-900">Vision outer loop</h3>
              <p className="text-navy-700 text-sm">
                Camera x/y/z/yaw errors feed PD/PID controllers that output pitch, roll, yaw-rate and
                thrust commands into the attitude layer.
              </p>
            </div>
          </div>

          <div className="bg-navy-50 border-l-4 border-accent p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-3 text-navy-900">Safety interlocks</h3>
            <p className="text-navy-700">
              Motors cut immediately on gyro rates above 300 °/s, roll or pitch beyond 45°, a kill
              button, or a joystick timeout over 0.35 s — with a separate pause mode that idles the
              motors at a low command rather than zero, so the control loop is never interrupted
              mid-flight.
            </p>
          </div>
        </motion.section>

        {/* Weekly log */}
        <motion.section
          id="log"
          className="mb-16 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-navy-900">Build Log</h2>
          <div className="relative">
            <span className="absolute left-[7px] top-2 bottom-2 w-px bg-navy-200 hidden sm:block" aria-hidden="true" />
            <div className="space-y-8">
              {weeks.map((wk, i) => (
                <motion.div
                  key={wk.w}
                  className="relative sm:pl-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.3) }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                >
                  <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-[3px] border-accent bg-white hidden sm:block" aria-hidden="true" />
                  <p className="tech-label text-navy-400 mb-1">Week {wk.w}</p>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{wk.title}</h3>
                  <p className="text-navy-700 leading-relaxed">{wk.body}</p>
                  {wk.fig ? <Figure src={wk.fig.src} caption={wk.fig.caption} /> : null}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Outcome */}
        <motion.section
          id="outcome"
          className="mb-16 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-navy-900">Outcome</h2>
          <p className="text-lg leading-relaxed mb-6">
            By the end of the quarter the quadrotor flew autonomously, holding position under an
            overhead camera in all four controlled degrees of freedom — with thrust shared between
            pilot and controller — on a flight stack written from scratch over ten weeks.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-navy-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-navy-900">Delivered</h3>
              <ul className="space-y-1 text-navy-700 text-sm">
                <li>• Calibrated IMU driver and complementary filter</li>
                <li>• Tuned PID on pitch, roll and yaw</li>
                <li>• Piloted hover in and out of ground effect</li>
                <li>• Autonomous yaw, x/y and altitude hold</li>
              </ul>
            </div>
            <div className="bg-navy-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-navy-900">Lessons</h3>
              <ul className="space-y-1 text-navy-700 text-sm">
                <li>• Ground effect distorts tuning — test where you'll fly</li>
                <li>• Sensor latency (~30 FPS vision) caps outer-loop gain</li>
                <li>• Check sign conventions before chasing gains</li>
                <li>• Tune P and D to stability before adding I</li>
              </ul>
            </div>
          </div>

          <p className="tech-label text-navy-400">Team: Serena Frolli · Davi Gutkin</p>
        </motion.section>

        <motion.div
          className="text-center pt-8 border-t border-navy-100"
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
