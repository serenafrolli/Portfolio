import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

// Dev-only API so the /admin form can persist projects to src/data/projects.json.
// This middleware runs ONLY under `vite dev` (apply: 'serve') — it is never part
// of the production build, so the published GitHub Pages site stays fully static.
function projectsApi() {
  const file = fileURLToPath(new URL('./src/data/projects.json', import.meta.url))
  return {
    name: 'projects-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/projects', (req, res) => {
        if (req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          res.end(fs.readFileSync(file, 'utf-8'))
          return
        }
        if (req.method === 'POST') {
          let body = ''
          req.on('data', (c) => { body += c })
          req.on('end', () => {
            try {
              const data = JSON.parse(body)
              if (!Array.isArray(data)) throw new Error('Expected an array of projects')
              fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n')
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: true }))
            } catch (e) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: false, error: String((e && e.message) || e) }))
            }
          })
          return
        }
        res.statusCode = 405
        res.end()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), projectsApi()],
  base: '/Portfolio/', // repo name, case-sensitive
})
