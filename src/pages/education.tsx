import { EDUCATION_DATA } from '../data/resume-data';

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <h1 className="text-4xl font-bold mb-8 text-slate-900 border-b pb-4">Education</h1>
      <div className="space-y-8">
        {EDUCATION_DATA.map((edu) => (
          <div key={edu.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">{edu.institution}</h2>
                <h3 className="text-lg font-medium text-blue-600 mt-1">{edu.degree}</h3>
                <p className="text-slate-500 mt-2">{edu.location}</p>
              </div>
              <div className="text-left md:text-right">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-medium text-sm mb-2">
                  Graduation: {edu.date}
                </span>
                <p className="font-semibold text-slate-700">GPA: <span className="text-green-600">{edu.gpa}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}