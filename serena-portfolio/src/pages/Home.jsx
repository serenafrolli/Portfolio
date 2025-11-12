import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, Link as LinkIcon } from 'lucide-react'
import { Button } from '../components/UI'
import serenaPhoto from '../assets/serena-photo.jpg'
import nuLogo from '../assets/NU-logo.png'
import { useRef, useState, useEffect } from 'react'

const LINKS = {
  email: "serenafrolli2026@u.northwestern.edu",
  linkedin: "https://www.linkedin.com/in/serena-frolli-a1794a223",
  // github: "https://github.com/serenafrolli",
};



export default function Home() {
  const containerRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const nameY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const bioOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const bioY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0])
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <div ref={containerRef} className="min-h-screen site-bg text-slate-900 relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Video with Overlay */}
        <motion.div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ scale: backgroundScale }}
        >
          {!videoError && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: `scale(${backgroundScale})` }}
              onLoadStart={() => {
                console.log('Video loading started');
                setVideoLoaded(false);
              }}
              onCanPlay={() => {
                console.log('Video can play');
                setVideoLoaded(true);
              }}
              onError={(e) => {
                console.log('Video failed to load:', e);
                setVideoError(true);
              }}
            >
              <source src="/background-video.mp4" type="video/mp4" />
              <source src="/background-video.mov" type="video/quicktime" />
            </video>
          )}
          {/* Fallback background image - shows immediately and stays if video fails */}
          <img
            src={`${import.meta.env.BASE_URL}rocket_hor.jpg`}
            alt="Background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } ${videoLoaded && !videoError ? 'opacity-0' : ''}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="eager"
            style={{ transform: `scale(${backgroundScale})` }}
          />
          {imageError && (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900" />
          )}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))`
            }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Centered Name */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{ y: nameY, opacity: nameOpacity }}
        >
          <div className="text-center">
            <motion.h1 
              className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-tight text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Serena Frolli
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-slate-200 font-medium mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Mechanical Engineer - Aerospace Enthusiast - Runner 
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div 
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="relative z-10 bg-white">
        <div className="w-full px-48 py-20">
          <motion.div 
            className="text-center"
            style={{ opacity: bioOpacity, y: bioY }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ciao! 
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-4 items-start w-full">
              <motion.div 
                className="prose prose-lg prose-max-w-none text-slate-700 leading-relaxed text-left md:col-span-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
              <p className="text-lg mb-6">
                My name is Serena Frolli and I am a fourth-year student at Northwestern University pursuing a Bachelor of Science in Mechanical Engineering as well as a Master of Science in Mechanical Engineering 
                within the combined Bachelor's and Master's program at Northwestern.
              </p>
              
              <p className="text-lg mb-6">
                I am an aspiring professional in the aerospace sector with a passion for engineering that pushes 
                the boundaries of technology and has a real impact on the world.
              </p>
              
              <p className="text-lg mb-6">
                Outside of engineering, up to my Junior year, I was a D1 Cross Country student-athlete at my school. 
                I am in love with running as a sport, it has shaped who I am today.
              </p>
              
              <p className="text-lg mb-8">
                I am originally from Genova, Italy, and I attended high school at the Istituto di Istruzione Superiore 
                Savoia Benincasa in Ancona. This portfolio highlights the projects I have worked on and the 
                skills I have acquired in my academic career and beyond.
              </p>
              
              <motion.p 
                className="text-2xl font-bold text-blue-600"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Per Aspera Ad Astra!
              </motion.p>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              className="flex justify-end items-start pr-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Serena's Photo */}
                <img 
                  src={serenaPhoto}
                  alt="Serena Frolli - Mechanical Engineer"
                  className="w-80 h-96 object-cover rounded-2xl shadow-lg"
                />
                
                {/* Northwestern Logo */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white rounded-full shadow-lg border-2 border-white flex items-center justify-center">
                  <img 
                    src={nuLogo}
                    alt="Northwestern University Logo"
                    className="w-28 h-28 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Buttons */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a href={`mailto:${LINKS.email}`}>
              <Button>
                <span className="inline-flex items-center gap-2">
                  <Mail className="w-4 h-4"/> Contact
                </span>
              </Button>
            </a>
            <a href={LINKS.linkedin}>
              <Button variant="outline">
                <span className="inline-flex items-center gap-2">
                  <LinkIcon className="w-4 h-4"/> LinkedIn
                </span>
              </Button>
            </a>
          </motion.div>


          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Explore My Work
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="text-center p-8 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <p className="text-slate-600 mb-6">My professional journey in mechanical engineering and testing systems</p>
              <a href="/experience" className="text-blue-600 hover:underline font-medium">View Experience →</a>
            </motion.div>
            <motion.div 
              className="text-center p-8 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: 'url(METALS_FinalRender.png)' }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">Projects</h3>
                <p className="text-slate-600 mb-6">Technical projects from CFD studies to gear train design</p>
                <a href="/projects" className="text-blue-600 hover:underline font-medium">View Projects →</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
