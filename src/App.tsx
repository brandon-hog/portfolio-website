// App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Education from './pages/education';
import Projects from './pages/projects';
import ProjectDetail from './pages/project-detail';

export default function App() {
  // Vercel aesthetic: Pure black background, stark white text, and subtle transparent borders with backdrop blur for nav.
  return (
    <Router>
      <div className="min-h-screen min-w-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
        <nav className="bg-black/50 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
          <div className="max-w-[90%] mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold tracking-tighter text-white hover:text-zinc-300 transition-colors">
              Brandon Hoggatt
            </Link>
            <div className="space-x-6 text-sm font-medium text-zinc-400">
              <Link to="/education" className="hover:text-white transition-colors">Education</Link>
              <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-12 md:py-20">
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