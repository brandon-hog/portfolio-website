import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Education from './pages/education';
import Projects from './pages/projects';
import ProjectDetail from './pages/project-detail';
import { Button } from './components/ui/button';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen min-w-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
        
        {/* Navigation */}
        <nav className="bg-black/50 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
          <div className="max-w-[90%] mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold tracking-tighter text-white hover:text-zinc-300 transition-colors">
              Brandon Hoggatt
            </Link>
            <div className="space-x-3 text-sm font-medium text-zinc-400">
              <Button className="hover:bg-white hover:text-black transition-colors">
                <Link to="/education">Education</Link>
              </Button>
              <Button className="hover:bg-white hover:text-black transition-colors">
                <Link to="/projects">Projects</Link>
              </Button>
            </div>
          </div>
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
