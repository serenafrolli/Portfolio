import { useState } from 'react'
import { Plus, Trash2, Save, ArrowUp, ArrowDown } from 'lucide-react'
import seed from '../data/projects.json'

// Local, dev-only project editor. Reads the current projects.json, lets you
// add / edit / reorder / delete entries, then POSTs back to the Vite dev
// middleware which rewrites src/data/projects.json. After saving, commit & push
// the changed file to publish. This page is not part of the production site.

const BLANK = {
  id: '',
  title: '',
  period: '',
  description: '',
  highlights: [],
  image: '',
  logo: '',
  links: [],
}

const slugify = (s) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const input = 'w-full rounded-lg border border-navy-200 bg-white px-3 py-2 text-sm text-navy-900 focus:outline-none focus:border-accent'
const labelCls = 'tech-label text-navy-500 block mb-1.5'

export default function Admin() {
  const [projects, setProjects] = useState(() => JSON.parse(JSON.stringify(seed)))
  const [status, setStatus] = useState(null)

  if (!import.meta.env.DEV) {
    return (
      <div className="min-h-screen site-bg flex items-center justify-center px-6">
        <p className="text-navy-600 text-center max-w-md">
          The project editor is only available when running the site locally
          (<code className="font-mono text-navy-800">npm run dev</code>). It is intentionally
          excluded from the published site.
        </p>
      </div>
    )
  }

  const update = (i, field, value) =>
    setProjects((ps) => ps.map((p, idx) => (idx === i ? { ...p, [field]: value } : p)))

  const move = (i, dir) =>
    setProjects((ps) => {
      const j = i + dir
      if (j < 0 || j >= ps.length) return ps
      const next = [...ps]
      ;[next[i], next[j]] = [next[j], next[i]]
      return next
    })

  const remove = (i) => setProjects((ps) => ps.filter((_, idx) => idx !== i))

  const add = () =>
    setProjects((ps) => [...ps, { ...BLANK }])

  const save = async () => {
    setStatus({ kind: 'saving', msg: 'Saving…' })
    // normalize: ensure ids, drop empty highlights
    const cleaned = projects.map((p) => ({
      ...p,
      id: p.id || slugify(p.title) || `project-${Math.abs(hash(p.title))}`,
      highlights: p.highlights.filter((h) => h.trim()),
      links: p.links.filter((l) => l.label.trim() && l.href.trim()),
    }))
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleaned, null, 2),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Save failed')
      setProjects(cleaned)
      setStatus({ kind: 'ok', msg: 'Saved to src/data/projects.json — commit & push to publish.' })
    } catch (e) {
      setStatus({ kind: 'err', msg: String(e.message || e) })
    }
  }

  return (
    <div className="min-h-screen site-bg text-navy-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between gap-4 mb-2">
          <h1 className="text-3xl font-bold text-navy-900">Project Editor</h1>
          <span className="tech-label text-navy-400">dev only</span>
        </div>
        <p className="text-navy-600 mb-8">
          Add or edit your projects below, then <strong>Save</strong>. This writes
          <code className="font-mono text-sm"> src/data/projects.json</code>; commit and push that file to publish.
          Images/logos go in the <code className="font-mono text-sm">public/</code> folder — enter just the filename.
        </p>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div key={i} className="rounded-2xl border border-navy-100 bg-white shadow-sm p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="tech-label text-navy-400">#{String(i + 1).padStart(2, '0')}</span>
                <div className="flex items-center gap-1">
                  <button onClick={() => move(i, -1)} className="p-2 rounded-lg hover:bg-navy-50 text-navy-500" title="Move up"><ArrowUp className="w-4 h-4" /></button>
                  <button onClick={() => move(i, 1)} className="p-2 rounded-lg hover:bg-navy-50 text-navy-500" title="Move down"><ArrowDown className="w-4 h-4" /></button>
                  <button onClick={() => remove(i)} className="p-2 rounded-lg hover:bg-red-50 text-red-500" title="Delete"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className={labelCls}>Title</label>
                  <input className={input} value={p.title} onChange={(e) => update(i, 'title', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Period</label>
                  <input className={input} value={p.period} onChange={(e) => update(i, 'period', e.target.value)} placeholder="2025" />
                </div>
                <div>
                  <label className={labelCls}>ID / slug (optional)</label>
                  <input className={input} value={p.id} onChange={(e) => update(i, 'id', e.target.value)} placeholder="auto from title" />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>Description</label>
                  <textarea className={input} rows={3} value={p.description} onChange={(e) => update(i, 'description', e.target.value)} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>Highlights (one per line)</label>
                  <textarea
                    className={input}
                    rows={4}
                    value={p.highlights.join('\n')}
                    onChange={(e) => update(i, 'highlights', e.target.value.split('\n'))}
                  />
                </div>
                <div>
                  <label className={labelCls}>Image filename (in /public)</label>
                  <input className={input} value={p.image} onChange={(e) => update(i, 'image', e.target.value)} placeholder="render.png" />
                </div>
                <div>
                  <label className={labelCls}>Logo filename (in /public)</label>
                  <input className={input} value={p.logo} onChange={(e) => update(i, 'logo', e.target.value)} placeholder="logo.png" />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>Links — one per line, format: Label | /path-or-url</label>
                  <textarea
                    className={input}
                    rows={2}
                    value={p.links.map((l) => `${l.label} | ${l.href}`).join('\n')}
                    onChange={(e) =>
                      update(
                        i,
                        'links',
                        e.target.value
                          .split('\n')
                          .map((line) => {
                            const [label, href] = line.split('|').map((s) => (s || '').trim())
                            return { label: label || '', href: href || '' }
                          })
                          .filter((l) => l.label || l.href)
                      )
                    }
                    placeholder="View Details | /nasa-metals"
                  />
                </div>
              </div>
              <p className="text-xs text-navy-400 mt-3">
                Tip: set <strong>image</strong> for a photo/render, or <strong>logo</strong> for a centered logo. Leave both blank for a blueprint tile.
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <button onClick={add} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-navy-300 text-navy-700 hover:bg-navy-50 transition-colors text-sm font-medium">
            <Plus className="w-4 h-4" /> Add project
          </button>
          <button onClick={save} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-800 text-paper hover:bg-navy-900 transition-colors text-sm font-medium">
            <Save className="w-4 h-4" /> Save
          </button>
          {status && (
            <span className={`text-sm ${status.kind === 'err' ? 'text-red-600' : status.kind === 'ok' ? 'text-green-700' : 'text-navy-500'}`}>
              {status.msg}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function hash(s) {
  let h = 0
  for (let i = 0; i < (s || '').length; i++) h = (h << 5) - h + s.charCodeAt(i)
  return h
}
