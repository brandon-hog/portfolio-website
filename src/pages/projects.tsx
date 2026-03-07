// pages/projects.tsx
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/resume-data';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const allLanguages = Array.from(new Set(PROJECTS_DATA.flatMap(p => p.languages))).sort();
  const allCategories = Array.from(new Set(PROJECTS_DATA.map(p => p.category))).sort();

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLanguage = languageFilter === '' || project.languages.includes(languageFilter);
      const matchesCategory = categoryFilter === '' || project.category === categoryFilter;
      
      return matchesSearch && matchesLanguage && matchesCategory;
    });
  }, [searchQuery, languageFilter, categoryFilter]);

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-8 text-white tracking-tight">Technical Projects</h1>
      
      {/* Vercel inspired inputs: dark backgrounds, subtle rings on focus */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Search projects..."
          className="flex-1 bg-zinc-950 border border-zinc-800 text-sm text-white rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all placeholder:text-zinc-600"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="w-full md:w-48 bg-zinc-950 border border-zinc-800 text-sm text-zinc-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all appearance-none"
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
        >
          <option value="">All Languages</option>
          {allLanguages.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
        <select
          className="w-full md:w-48 bg-zinc-950 border border-zinc-800 text-sm text-zinc-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all appearance-none"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {allCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 text-zinc-500 border border-dashed border-zinc-800 rounded-lg">
          No projects match your criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="group bg-black border border-zinc-800 rounded-xl p-6 flex flex-col h-full hover:border-zinc-600 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top gradient line for visual interest */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-semibold text-white group-hover:text-zinc-200">
                  {project.title}
                </h2>
              </div>
              
              <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap items-center gap-2 mt-auto pt-4 border-t border-zinc-900">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mr-auto">
                  {project.category}
                </span>
                {project.languages.map(lang => (
                  <span key={lang} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] font-mono rounded-md">
                    {lang}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}