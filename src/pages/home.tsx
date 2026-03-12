import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/resume-data';

export default function Home() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="flex flex-col items-start justify-center min-h-[80vh] space-y-12 animate-fade-in-up max-w-4xl pb-20 mt-8">
      <div className="space-y-6">

        {/* Hero Section */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight">
          Software Engineer <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
            & Systems Developer.
          </span>
        </h1>
        
        {/* Brief Description */}
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-light">
          I am a Full-Stack Software Engineer and Computer Science student passionate about solving complex
          technical challenges. From engineering persistent UNIX-like file systems to building scalable REST
          APIs, I prioritize maintainability, security, and efficiency. I am currently advancing my expertise
          in cybersecurity and modern enterprise backends to continue building resilient infrastructure.
        </p>
      </div>

      {/* Link To Projects & Contact */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link 
          to="/projects" 
          className="px-6 py-3 bg-white text-black text-sm font-medium rounded-md shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all active:scale-95 text-center"
        >
          View All Projects
        </Link>
        <a 
          href="mailto:brandon.m.hoggatt@gmail.com" 
          className="px-6 py-3 bg-black text-white text-sm font-medium border border-zinc-800 rounded-md hover:bg-zinc-900 transition-all active:scale-95 text-center"
        >
          Contact Me
        </a>
      </div>

      {/* Featured Projects Grid */}
      <div className="w-full pt-16 border-t border-zinc-800/50 mt-12">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h2>
          <Link to="/projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            View all →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="group bg-black border border-zinc-800 rounded-xl p-6 flex flex-col h-full hover:border-zinc-600 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-zinc-200">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap items-center gap-2 mt-auto pt-4 border-t border-zinc-900">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mr-auto">
                  {project.category}
                </span>
                {/* Limiting mapped languages prevents UI overflow on smaller screens */}
                {project.languages.slice(0, 2).map(lang => (
                  <span key={lang} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] font-mono rounded-md">
                    {lang}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}