import { useRef } from 'react'
import { motion } from 'framer-motion'
import img1 from '../assets/IMG_8820_2.JPG'
import img2 from '../assets/IMG_8927.JPG'
import img3 from '../assets/IMG_8928_2.JPG'
import img4 from '../assets/IMG_8929.JPG'
import img5 from '../assets/IMG_9814_2.JPG'
import img6 from '../assets/IMG_9815.JPG'
import img7 from '../assets/IMG_9816.JPG'
import xc8784 from '../assets/XC8784.jpg'
import xc8785 from '../assets/XC8785.jpg'

const athleticSections = [
  {
    id: 'performance',
    title: 'Performance motivated, process oriented',
    image: img1,
    content: `Running cross country has taught me the importance of being performance motivated while staying process oriented. Every race is an opportunity to showcase months of consistent training, early morning runs, and mental preparation. As my coach Jill Miller always says, "Do simple better than everybody else and show your fitness today." This philosophy translates directly to engineering - focusing on fundamentals while delivering exceptional results.`
  },
  {
    id: 'mindset',
    title: 'Shifting mindset',
    image: img2,
    content: `In a team, every day, how you show up to your teammates matters and can make a difference. There is no grey zone when it comes to the energy you bring into a room: every one of us is either positive or negative at any given time. At Northwestern Cross Country we have a "no excuses" culture, where we focus on what we can control—our attitude, our training, our mental prep, and our day-to-day commitment. Instead of complaining about challenges, we use them as opportunities to grow stronger and push our limits. Outside of running, this mindset has shaped how I approach my academics and other challenges in life, especially when working in a team.`
  },
  {
    id: 'failure',
    title: 'Turning failure into growth',
    image: xc8785,
    content: `Cross Country teaches you to embrace failure as part of growth, but it also instills the idea that failure should sting. The kilometers ran to get to a start line are countless compared the 20 minutes the race itself lasts. In 2022, as a freshman, I had the chance to be part of the team that qualified for the first time in program history for the NCAA National Championships. Historically, Northwestern was never a Cross country powerhouse school. Just three years prior we finished 13th in the Midwest Region (only the first two teams make it to Nationals). Witnessing this success was amazing: I'll never forget the moment we knew we were goingto nationals. Even so, having only been with the team for a few months this accomplishmant did not feel completely mine. The year after, we fell short and did not qualify to the National Championship. If the success of the previous year hadn't felt personal, this failure did, and a lot. At the same time, it was very motivating. As a team, we sat down and had the hard conversation of figuring out what had to happen for this not to repeat the next year. These years have taught me to learn form my mistakes and to question myself. This is the beauty of Cross Country: at whatever level you are, there is always something that you can improve, wether it is a consistent part of your process or a small detail.`
  },
  {
    id: 'resilience',
    title: 'Resilience',
    image: img4,
    content: `Now 10 years of running have taught me that obstacles are inevitable and at some point, you will need to learn how to stand back up after a fall. Resilience comes into play every day, in every run: cross country is far from glamorous and most of the time a lot of hard work - and a lot of fun. A big injury in my femor kept me from competing throughout the entire 2023 season. At this time, it was especially hard to feel connected to the team, given I could not run and I was biking and swimming many hours a week. Soon, I had to learn to engage with my teammates in different ways. I had to trust the process even when it was hard to see any results, leaning on the team more than ever. I can now say that setbacks are inevitable but what matters is how you respond to them.`
  },
  {
    id: 'teamwork',
    title: 'Teamwork and Leadership',
    image: xc8784,
    content: `Something people don't know about cross country is that it is both an individual and team sport. Balancing personal performance goals with team objectives has taught me invaluable leadership skills. Supporting teammates through tough races, celebrating victories together, and pushing each other in training has been a joy and a privilege in the past years. If we all could be each other's teammates every day the world would look completely different.`
  }
];

export default function Athletics() {
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <div className="bg-navy-900 blueprint-grid py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <motion.p
            className="tech-label text-accent-light mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Northwestern Cross Country
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-5xl font-bold tracking-tight text-paper mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            D1 Student-Athlete Experience
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-navy-200 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Being a D1 Cross Country Student-Athlete at Northwestern University has been one of the most enriching experiences of my life. Here are some skills and lessons that I have learned thanks to my sport throughout the years.
          </motion.p>
        </div>
      </div>

      {/* Image Sections */}
      <div className="space-y-0">
        {athleticSections.map((section, index) => (
          <div key={section.id} className="relative">
            {/* Image Section with Title at Bottom */}
            <div className="relative h-[70vh] sm:h-screen overflow-hidden">
              <motion.img
                src={section.image}
                alt={section.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <div className="max-w-4xl mx-auto">
                  <motion.p
                    className="tech-label text-accent-light mb-2"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.p>
                  <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {section.title}
                  </motion.h2>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="py-14 sm:py-16 px-6 sm:px-8 bg-paper">
              <div className="max-w-4xl mx-auto">
                <motion.p
                  className="text-lg text-navy-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  {section.content}
                </motion.p>
              </div>
            </div>
          </div>
          ))}
        </div>
    </div>
  );
}
