import { EDUCATION_DATA } from '../data/resume-data';

export default function Education() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-8 text-white tracking-tight">Education</h1>
      <div className="grid gap-6">
        {EDUCATION_DATA.map((edu) => (
          // Minimalist card design: pure black, thin border, slight background lighten on hover.
          <div key={edu.id} className="bg-black border border-zinc-800 rounded-xl p-6 md:p-8 hover:bg-zinc-900/50 transition-colors group">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white group-hover:text-zinc-200 transition-colors">{edu.institution}</h2>
                <h3 className="text-zinc-400 mt-1">{edu.degree}</h3>
                <p className="text-sm font-mono text-zinc-500 mt-3">{edu.location}</p>
              </div>
              <div className="text-left md:text-right flex flex-col gap-2">
                <span className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full font-mono text-xs w-fit md:ml-auto">
                  Class of {edu.date.split(' ')[1] || edu.date}
                </span>
                <p className="text-sm text-zinc-400 font-mono">GPA <span className="text-white font-medium">{edu.gpa}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}