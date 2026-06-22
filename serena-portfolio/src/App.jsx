import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import NASAMETALS from './pages/NASA-METALS'
// Athletics hidden for now — restore the import and route to reactivate
// import Athletics from './pages/Athletics'
import Contact from './pages/Contact'
import Connect from './pages/Connect'
import Admin from './pages/Admin'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ScrollToTop />
      <div className="min-h-screen site-bg text-navy-800">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/nasa-metals" element={<NASAMETALS />} />
          {/* Athletics page hidden for now — uncomment to reactivate */}
          {/* <Route path="/athletics" element={<Athletics />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/connect" element={<Connect />} />
          {/* Dev-only project editor — see src/pages/Admin.jsx */}
          {import.meta.env.DEV && <Route path="/admin" element={<Admin />} />}
        </Routes>

        <footer className="py-10 text-center tech-label text-navy-400">
          © {new Date().getFullYear()} Serena Frolli · Built with React & Tailwind · Vite
        </footer>
      </div>
    </Router>
  )
}
