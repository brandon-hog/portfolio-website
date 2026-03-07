// pages/home.tsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center min-h-[60vh] space-y-10 animate-fade-in-up max-w-3xl">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight">
          Software Engineer <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
            & Systems Developer.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-light">
          Passionate about architecting secure, scalable systems and robust full-stack applications. 
          Leveraging advanced problem-solving abilities demonstrated as an <strong className="text-zinc-200 font-medium">ICPC Silver Medalist</strong> to deliver 
          production-grade software solutions in collaborative, high-pressure environments.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        {/* Primary button: High contrast white. Secondary: Outline dark. */}
        <Link 
          to="/projects" 
          className="px-6 py-3 bg-white text-black text-sm font-medium rounded-md shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all active:scale-95 text-center"
        >
          View Projects
        </Link>
        <a 
          href="mailto:brandon.m.hoggatt@gmail.com" 
          className="px-6 py-3 bg-black text-white text-sm font-medium border border-zinc-800 rounded-md hover:bg-zinc-900 transition-all active:scale-95 text-center"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}