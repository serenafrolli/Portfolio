import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Rocket, Download, ChevronRight } from 'lucide-react'

const LINKS = {
  email: "serenafrolli@example.com",
  linkedin: "https://www.linkedin.com/in/serena-frolli/",
  // github: "https://github.com/serenafrolli",
  resume: "/Resume_Serena_Frolli.pdf",
};

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Athletics", path: "/athletics" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Rocket className="w-5 h-5" />
          <span>Serena Frolli</span>
        </Link>
        
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`hover:opacity-80 transition-colors ${
                location.pathname === path ? 'text-blue-600 font-medium' : ''
              }`}
            >
              {label}
            </Link>
          ))}
          <a href={LINKS.resume} className="inline-flex items-center gap-1">
            <Download className="w-4 h-4" /> Resume
          </a>
        </nav>
        
        <button className="sm:hidden" onClick={() => setNavOpen(v => !v)} aria-label="Menu">
          <ChevronRight className={`w-6 h-6 transition-transform ${navOpen ? "rotate-90" : "rotate-0"}`} />
        </button>
      </div>
      
      {navOpen && (
        <div className="sm:hidden border-t">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-4 text-sm">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setNavOpen(false)}
                className={`px-2 py-1 rounded transition-colors ${
                  location.pathname === path 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {label}
              </Link>
            ))}
            <a href={LINKS.resume} className="px-2 py-1 rounded border inline-flex items-center gap-1">
              <Download className="w-4 h-4"/> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
