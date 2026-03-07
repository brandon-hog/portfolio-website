import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/resume-data';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  
  // Directly targeting the array prevents needing a separate state/effect cycle for data fetching in this synchronous setup.
  const project = PROJECTS_DATA.find(p => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-blue-600 hover:underline">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <Link to="/projects" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-6 transition-colors">
        <span className="mr-2">←</span> Back to Projects
      </Link>
      
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{project.title}</h1>
        <div className="flex flex-wrap items-center gap-4">
          <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">
            {project.category}
          </span>
          <div className="flex gap-2">
            {project.languages.map(lang => (
              <span key={lang} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded border border-blue-100">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section>
        <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Implementation Details</h2>
        <ul className="space-y-4 list-disc list-inside text-slate-700 leading-relaxed">
          {project.detailedDescription.map((desc, index) => (
            <li key={index} className="pl-2">{desc}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}