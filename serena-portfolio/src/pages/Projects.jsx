import { useState } from 'react'
import { ChevronRight, ExternalLink, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import projects from '../data/projects.json'

// Resolve a file kept in /public against the app base path
const asset = (p) => (p ? import.meta.env.BASE_URL + p.replace(/^\//, '') : null)

// Logo tile with a graceful fallback if the image file isn't present yet
function LogoTile({ src, title }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="aspect-[16/9] bg-white flex items-center justify-center p-8 border-b border-navy-100">
      {failed ? (
        <span className="font-display font-bold text-navy-800 text-2xl tracking-tight text-center">{title}</span>
      ) : (
        <img
          src={src}
          alt={`${title} logo`}
          onError={() => setFailed(true)}
          className="max-h-full max-w-[70%] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      )}
    </div>
  )
}

function ProjectCard({ p, idx }) {
  return (
    <motion.article
      // `break-inside-avoid` keeps a card whole inside the masonry columns
      className="group mb-6 break-inside-avoid rounded-2xl border border-navy-100 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(11,23,48,0.35)] hover:border-navy-200"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: Math.min(idx * 0.06, 0.3) }}
      viewport={{ once: true, margin: '-8% 0px' }}
    >
      {/* Media — only rendered when there is something to show */}
      {p.image ? (
        <div className="aspect-[16/9] overflow-hidden bg-navy-100">
          <img
            src={asset(p.image)}
            alt={p.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : p.logo ? (
        <LogoTile src={asset(p.logo)} title={p.title} />
      ) : (
        <div className="h-2 bg-accent/70" />
      )}

      <div className="p-6">
        <p className="tech-label text-navy-400">{p.period}</p>

        <h3 className="text-xl font-semibold mt-2 text-navy-900 leading-snug">
          {p.title}
        </h3>

        <p className="mt-3 text-[0.95rem] leading-relaxed text-navy-600">
          {p.description}
        </p>

        {p.highlights?.length ? (
          <ul className="mt-4 space-y-2 text-sm text-navy-700">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[0.5rem] flex-shrink-0" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {p.links?.length ? (
          <div className="mt-6 pt-4 border-t border-navy-100 flex flex-wrap gap-4">
            {p.links.map((l) =>
              l.href.startsWith('/') ? (
                <Link
                  key={l.label}
                  to={l.href}
                  className="tech-label inline-flex items-center gap-1.5 text-navy-700 hover:text-accent transition-colors"
                >
                  {l.label}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="tech-label inline-flex items-center gap-1.5 text-navy-700 hover:text-accent transition-colors"
                >
                  {l.label} <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )
            )}
          </div>
        ) : null}
      </div>

    </motion.article>
  )
}

export default function Projects() {
  return (
    <div className="min-h-screen site-bg text-navy-800">
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="tech-label text-navy-500 mb-3">{projects.length} projects</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy-900 flex items-center gap-3">
              <span className="inline-block w-10 h-[3px] rounded bg-accent" />
              Selected Projects
            </h1>
          </motion.div>

          {/* Masonry: cards flow into columns and keep their natural height,
              so a short card never gets padded out to match a long one. */}
          <div className="columns-1 md:columns-2 xl:columns-3 gap-6 [column-fill:_balance]">
            {projects.map((p, idx) => (
              <ProjectCard key={p.id || p.title} p={p} idx={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
