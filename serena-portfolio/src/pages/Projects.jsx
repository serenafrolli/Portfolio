import { useState } from 'react'
import { Code2, ChevronRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card, CardContent, Section } from '../components/UI'
import projects from '../data/projects.json'

// Resolve a file kept in /public against the app base path
const asset = (p) => (p ? import.meta.env.BASE_URL + p.replace(/^\//, '') : null)

// Logo tile with a graceful fallback if the image file isn't present yet
function LogoTile({ src, title }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="aspect-video bg-white flex items-center justify-center p-8">
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

export default function Projects() {
  return (
    <div className="min-h-screen site-bg text-navy-800">
      <Section label="Selected Projects">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id || p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden h-full">
                <CardContent className="p-0">
                  {p.image ? (
                    <div className="aspect-video overflow-hidden bg-navy-100">
                      <img
                        src={asset(p.image)}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : p.logo ? (
                    <LogoTile src={asset(p.logo)} title={p.title} />
                  ) : (
                    <div className="aspect-video bg-navy-800 blueprint-grid" />
                  )}
                  <div className="p-6">
                    <div className="tech-label text-navy-400 flex items-center gap-2">
                      <Code2 className="w-4 h-4"/> {p.period}
                    </div>
                    <h3 className="text-lg font-semibold mt-2 text-navy-900">{p.title}</h3>
                    <p className="mt-2 text-sm text-navy-600">{p.description}</p>
                    <ul className="mt-3 space-y-1 text-sm text-navy-700">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-accent flex-shrink-0"/>{h}
                        </li>
                      ))}
                    </ul>

                    {p.links?.length ? (
                      <div className="mt-4 flex gap-3">
                        {p.links.map((l) => (
                          l.href.startsWith('/') ? (
                            <Link key={l.label} to={l.href} className="tech-label inline-flex items-center gap-1 text-navy-700 hover:text-accent transition-colors">
                              {l.label} <ChevronRight className="w-3 h-3"/>
                            </Link>
                          ) : (
                            <a key={l.label} href={l.href} className="tech-label inline-flex items-center gap-1 text-navy-700 hover:text-accent transition-colors">
                              {l.label} <ExternalLink className="w-3 h-3"/>
                            </a>
                          )
                        ))}
                      </div>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
