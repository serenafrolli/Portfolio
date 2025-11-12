import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI'

export default function StanfordCosmos() {
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
              Stanford Summer Session
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6">
              The Origin and Development of the Cosmos
            </h2>
            <p className="text-lg text-slate-200 max-w-3xl">
              Final poster for "The Origin and Development of the Cosmos" course offered by Stanford University Summer Session and taught by Professor Ashley Perko. 2021.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Full Screen Image */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <img 
            src={`${import.meta.env.BASE_URL}stanford.png`}
            alt="Stanford Cosmos Poster"
            className="w-full h-auto"
            onError={(e) => {
              console.error('Failed to load Stanford poster:', e.target.src);
            }}
          />
        </motion.div>
      </div>

      {/* References */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">References</h2>
          
          <div className="prose prose-lg max-w-none pl-0">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Paul J. Steinhardt</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a 
                    href="https://phy.princeton.edu/people/paul-j-steinhardt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Princeton University Profile <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://paulsteinhardt.org/inflationarycosmology/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Inflationary Cosmology <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://arxiv.org/pdf/1803.01961.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    arXiv:1803.01961 <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://paulsteinhardt.org/wp-content/uploads/2020/10/0411036.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Paper: 0411036 <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://paulsteinhardt.org/wp-content/uploads/2020/10/Ijjas-1P-120616.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Paper: Ijjas-1P-120616 <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Andrei Linde</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a 
                    href="https://web.stanford.edu/~alinde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Stanford University Profile <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://web.stanford.edu/~alinde/1984.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Paper: 1984 <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://inspirehep.net/literature/1753587"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    INSPIRE-HEP: 1753587 <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://arxiv.org/pdf/hep-th/0211048.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    arXiv:hep-th/0211048 <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://arxiv.org/pdf/1909.04687.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    arXiv:1909.04687 <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://slideplayer.com/slide/8161076/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    SlidePlayer: Inflationary Multiverse <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://slidetodoc.com/inflationary-multiverse-andrei-linde-contents-from-the-big/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    SlideToDoc: Inflationary Multiverse <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Other Articles</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a 
                    href="https://astronomy.com/magazine/2018/07/inflation-leaves-its-mark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Astronomy.com: Inflation Leaves Its Mark <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.bbc.com/future/article/20200117-what-if-the-universe-has-no-end"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    BBC Future: What If The Universe Has No End <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://lweb.cfa.harvard.edu/~cbischoff/cmb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Harvard CMB Resources <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://phys.org/news/2015-02-cosmic-inflation-bicep2-results.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Phys.org: Cosmic Inflation BICEP2 Results <ExternalLink className="w-4 h-4" />
                  </a>
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

