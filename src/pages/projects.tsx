import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/resume-data';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // Extract unique filter options dynamically to ensure the UI scales seamlessly as new projects are added.
  const allLanguages = Array.from(new Set(PROJECTS_DATA.flatMap(p => p.languages))).sort();
  const allCategories = Array.from(new Set(PROJECTS_DATA.map(p => p.category))).sort();

  // useMemo prevents expensive re-evaluation of the array on unassociated state changes.
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
      <h1 className="text-4xl font-bold mb-8 text-slate-900 border-b pb-4">Technical Projects</h1>
      
      {/* Search and Filter Controls */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-slate-700 mb-1">Search Title</label>
          <input
            id="search"
            type="text"
            placeholder="e.g. File System..."
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="language" className="block text-sm font-medium text-slate-700 mb-1">Filter by Language</label>
          <select
            id="language"
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
          >
            <option value="">All Languages</option>
            {allLanguages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-1">Filter by Category</label>
          <select
            id="category"
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {allCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 text-slate-500">No projects match your current filters.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 block">
                  {project.category}
                </span>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.languages.map(lang => (
                    <span key={lang} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}