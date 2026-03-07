import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 animate-fade-in-up">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
          Brandon Hoggatt {/* [cite: 1] */}
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-600">
          Software Engineer & Systems Developer
        </h2>
        {/* Calling out the clearance immediately in a distinct badge style quickly captures defense/cyber employer attention. */}
        <div className="inline-block mt-4 px-4 py-2 bg-red-100 text-red-800 border border-red-200 rounded-full font-bold text-sm tracking-wide shadow-sm">
          Active TS/SCI Security Clearance {/* [cite: 3] */}
        </div>
      </div>

      <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
        Passionate about architecting secure, scalable systems and robust full-stack applications. 
        Leveraging advanced problem-solving abilities demonstrated as an ICPC Silver Medalist {/* [cite: 49, 52] */} to deliver 
        production-grade software solutions in collaborative, high-pressure environments. {/* [cite: 52] */}
      </p>

      <div className="flex space-x-4 pt-4">
        <Link 
          to="/projects" 
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all active:scale-95"
        >
          View Projects
        </Link>
        <a 
          href="mailto:brandon.m.hoggatt@gmail.com" // [cite: 2]
          className="px-6 py-3 bg-white text-slate-900 font-semibold border border-slate-300 rounded-lg shadow-sm hover:bg-slate-50 transition-all active:scale-95"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}