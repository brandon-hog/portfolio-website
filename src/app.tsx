import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Education from './pages/education';
import Projects from './pages/projects';
import ProjectDetail from './pages/project-detail';
import { Button } from './components/ui/button';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen min-w-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
        
        {/* Navigation */}
        <nav className="bg-black/50 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
          <div className="max-w-[90%] mx-auto px-6 py-4 flex justify-between items-center">
            <Link
              to="/"
              className="text-xl font-bold tracking-tighter text-white hover:text-zinc-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Brandon Hoggatt
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-3 text-sm font-medium text-zinc-400">
              <Button className="hover:bg-white hover:text-black transition-colors">
                <Link to="/education">Education</Link>
              </Button>
              <Button className="hover:bg-white hover:text-black transition-colors">
                <Link to="/projects">Projects</Link>
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md border border-zinc-800 px-2.5 py-2 text-zinc-200 hover:bg-zinc-900 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                    isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                    isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile menu overlay */}
          {isMobileMenuOpen && (
            <div
              className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div
                className="absolute inset-x-0 top-[64px] border-b border-zinc-800 bg-black/90"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="max-w-[90%] mx-auto px-6 py-4 space-y-3">
                  <Button
                    className="w-full justify-start text-base font-medium text-zinc-100 hover:bg-white hover:text-black transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    asChild
                  >
                    <Link to="/education">Education</Link>
                  </Button>
                  <Button
                    className="w-full justify-start text-base font-medium text-zinc-100 hover:bg-white hover:text-black transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    asChild
                  >
                    <Link to="/projects">Projects</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>

        <main className="flex justify-center align-center w-full max-w-[85%] mx-auto px-6 py-12 md:py-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        <footer className="border-t border-zinc-800 bg-black text-zinc-500 text-sm text-center py-8 mt-auto">
          <p>© {new Date().getFullYear()} Brandon Hoggatt. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
