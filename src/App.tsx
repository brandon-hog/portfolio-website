// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Education from './pages/education';
import Projects from './pages/projects';
import ProjectDetail from './pages/project-detail';

export default function App() {
  // Utilizing a standard flex layout for the main application shell guarantees footer placement and responsive behavior.
  return (
    <Router>
      <div className="min-h-screen min-w-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
        <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold tracking-tight hover:text-blue-400 transition-colors">
              Brandon Hoggatt
            </Link>
            <div className="space-x-6 font-medium">
              <Link to="/education" className="hover:text-blue-400 transition-colors">Education</Link>
              <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        <footer className="bg-slate-900 text-slate-400 text-center py-6 mt-auto">
          <p>© {new Date().getFullYear()} Brandon Hoggatt. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}