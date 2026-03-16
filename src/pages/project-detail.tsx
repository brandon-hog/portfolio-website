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
    <div className="max-w-full mx-auto">
      <Link to="/projects" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-white mb-10 transition-colors">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back
      </Link>
      
      <article className="bg-black border border-zinc-800 rounded-xl p-8 md:p-10 relative overflow-hidden">
        {/* Decorative ambient glow */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-zinc-800/20 blur-3xl rounded-full pointer-events-none"></div>

        {/* Project Title */} 
        <header className="flex flex-col gap-1 mb-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{project.title}</h1>
          {/* Project Category and Languages */}
            <span className="text-lg font-mono uppercase tracking-widest text-zinc-500 mr-auto">
              {project.category}
            </span>
            <div>
              {project.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-2 py-0.5 mr-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] font-mono rounded-md"
                >
                  {lang}
                </span>
              ))}
            </div>
        </header>

        <div className="relative z-10 space-y-8">
          <section className="flex flex-col md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.5fr)] md:gap-10 items-start">

            {/* Project Image */}
            {project.imageUrl && (
              <div className="mb-6 md:mb-0">
                <div className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
                  <img
                    src={project.imageUrl}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-left aspect-4/3"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* Project Image & Brief Description */}
            <div className={!project.imageUrl ? 'md:col-span-2' : ''}>
              <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-4">
                Brief Description
              </h2>
              {project.description && (
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
              )}
              {!project.description && project.detailedDescription.length > 0 && (
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                  {project.detailedDescription[0]}
                </p>
              )}
            </div>
          </section>

          {/* Implementation Details */}
          <section className="border-t border-zinc-900 pt-6">
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-4">
              Implementation Details
            </h2>
            <ul className="space-y-4 text-zinc-300 leading-relaxed text-sm md:text-base">
              {project.detailedDescription.map((desc, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-zinc-600 mr-3 mt-1.5 leading-none">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Additional Notes */}
          {project.additionalNotes && (
            <section className="border-t border-zinc-900 pt-6 space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Additional Notes
              </h2>
              <div className="text-sm md:text-base text-zinc-300 leading-relaxed space-y-2">
                {Array.isArray(project.additionalNotes) ? (
                  project.additionalNotes.map((note, index) => (
                    <p key={index}>{note}</p>
                  ))
                ) : (
                  <p>{project.additionalNotes}</p>
                )}
              </div>
            </section>
          )}

        </div>
      </article>
    </div>
  );
}