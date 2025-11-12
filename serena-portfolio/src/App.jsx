import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import NASAMETALS from './pages/NASA-METALS'
import LeftAware from './pages/LeftAware'
import JackInBox from './pages/JackInBox'
import UnductedTurbofan from './pages/UnductedTurbofan'
import PressureSensorAnalysis from './pages/PressureSensorAnalysis'
import TitanCFD from './pages/TitanCFD'
import GearTrainDesign from './pages/GearTrainDesign'
import StanfordCosmos from './pages/StanfordCosmos'
import ME240 from './pages/ME240'
import ME362 from './pages/ME362'
import Athletics from './pages/Athletics'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <div className="min-h-screen site-bg text-slate-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/nasa-metals" element={<NASAMETALS />} />
          <Route path="/leftaware" element={<LeftAware />} />
          <Route path="/jack-in-box" element={<JackInBox />} />
          <Route path="/unducted-turbofan" element={<UnductedTurbofan />} />
          <Route path="/pressure-sensor-analysis" element={<PressureSensorAnalysis />} />
          <Route path="/titan-cfd" element={<TitanCFD />} />
          <Route path="/gear-train-design" element={<GearTrainDesign />} />
          <Route path="/stanford-cosmos" element={<StanfordCosmos />} />
          <Route path="/me240" element={<ME240 />} />
          <Route path="/me362" element={<ME362 />} />
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
