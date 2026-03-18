import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/resume-data';

export default function Home() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[80vh] space-y-12 animate-fade-in-up pb-20 mt-8">
      {/* Hero */}
      <section className="w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl md:border border-zinc-800 bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="hidden md:block absolute inset-0 bg-[url('/me/ACM_presentation.png')] bg-cover bg-center" aria-hidden="true" />
          {/* Overlays*/}
          <div
            className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/80"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-black/85 via-black/35 to-black/10"
            aria-hidden="true"
          />
          <div className="absolute inset-0 [box-shadow:inset_0_0_120px_rgba(0,0,0,0.55)]" aria-hidden="true" />
          <div className="relative px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16">
            <div className="space-y-6 max-w-2xl">
              {/* Caption badge */}
              <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-zinc-200 backdrop-blur">
                UWF ACM <span className="text-white/20">-</span> Intro to Web Development
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight">
                Software Engineer <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-500">
                  & Systems Developer.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-200/80 leading-relaxed font-light">
                I am a Full-Stack Software Engineer and Computer Science student passionate about solving complex
                technical challenges. From engineering persistent UNIX-like file systems to building scalable REST
                APIs, I prioritize maintainability, security, and efficiency. I am currently advancing my expertise
                in cybersecurity and modern enterprise backends to continue building resilient infrastructure.
              </p>

              {/* Link To Projects & Contact */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Link
                  to="/projects"
                  className="px-6 py-3 bg-white text-black text-sm font-medium rounded-md shadow-[0_0_20px_rgba(255,255,255,0.10)] hover:shadow-[0_0_25px_rgba(255,255,255,0.18)] transition-all active:scale-95 text-center"
                >
                  View All Projects
                </Link>
                <a
                  href="mailto:brandon.m.hoggatt@gmail.com"
                  className="px-6 py-3 bg-black/50 text-white text-sm font-medium border border-white/10 rounded-md hover:bg-black/60 transition-all active:scale-95 text-center backdrop-blur"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-zinc-200">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-zinc-400 text-sm mb-6 grow leading-relaxed">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-zinc-900">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mr-auto">
                  {project.category}
                </span>
                <div>
                  {/* Limiting mapped languages prevents UI overflow on smaller screens */}
                  {project.languages.slice(0, 2).map(lang => (
                    <span key={lang} className="px-2 py-0.5 mx-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] font-mono rounded-md">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}