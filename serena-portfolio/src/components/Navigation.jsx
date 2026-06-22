import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Rocket, Download, Menu, X } from 'lucide-react'

const LINKS = {
  resume: "/resume.pdf",
};

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const onDark = location.pathname === '/';

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    // { label: "Athletics", path: "/athletics" }, // hidden for now
    { label: "Contact", path: "/contact" },
    { label: "Connect", path: "/connect" },
  ];

  const headerClass = onDark
    ? 'bg-navy-900/70 border-navy-700/60 text-paper'
    : 'bg-paper/80 border-navy-100 text-navy-800';

  return (
    <header className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${headerClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-semibold">
          <Rocket className="w-5 h-5" />
          <span>Serena Frolli</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`tech-label transition-colors ${
                location.pathname === path
                  ? 'text-accent'
                  : onDark ? 'text-navy-200 hover:text-paper' : 'text-navy-500 hover:text-navy-900'
              }`}
            >
              {label}
            </Link>
          ))}
          <a href={LINKS.resume} className="tech-label inline-flex items-center gap-1.5 border rounded-full px-3 py-1.5 border-current hover:text-accent transition-colors">
            <Download className="w-3.5 h-3.5" /> Resume
          </a>
        </nav>

        <button className="sm:hidden p-2 -mr-2" onClick={() => setNavOpen(v => !v)} aria-label="Menu">
          {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {navOpen && (
        <div className={`sm:hidden border-t ${onDark ? 'border-navy-700/60' : 'border-navy-100'}`}>
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setNavOpen(false)}
                className={`tech-label px-3 py-3 rounded-lg transition-colors ${
                  location.pathname === path
                    ? 'text-accent'
                    : onDark ? 'text-navy-200' : 'text-navy-600'
                }`}
              >
                {label}
              </Link>
            ))}
            <a href={LINKS.resume} className="tech-label px-3 py-3 inline-flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5"/> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
