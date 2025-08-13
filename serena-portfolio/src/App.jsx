import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Athletics from './pages/Athletics'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <div className="min-h-screen site-bg text-slate-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/athletics" element={<Athletics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <footer className="py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Serena Frolli · Built with React & Tailwind · Vite
        </footer>
      </div>
    </Router>
  )
}
