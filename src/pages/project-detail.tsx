import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/resume-data';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS_DATA.find(p => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20 border border-dashed border-zinc-800 rounded-lg mt-10">
        <h2 className="text-xl font-medium text-white mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-sm text-zinc-400 hover:text-white transition-colors">← Return to projects</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/projects" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-white mb-10 transition-colors">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back
      </Link>
      
      <article className="bg-black border border-zinc-800 rounded-xl p-8 md:p-10 relative overflow-hidden">
        {/* Decorative ambient glow */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-zinc-800/20 blur-3xl rounded-full pointer-events-none"></div>

        <header className="mb-10 border-b border-zinc-800 pb-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
             <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.languages.map(lang => (
              <span key={lang} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono rounded-md">
                {lang}
              </span>
            ))}
          </div>
        </header>

        <section className="relative z-10">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-6">Implementation Details</h2>
          <ul className="space-y-4 text-zinc-300 leading-relaxed text-sm md:text-base">
            {project.detailedDescription.map((desc, index) => (
              <li key={index} className="flex items-start">
                <span className="text-zinc-600 mr-3 mt-1.5 leading-none">•</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}