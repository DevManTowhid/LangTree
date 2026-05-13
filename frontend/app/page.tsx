import Image from "next/image";
import Link from "next/link";
import commonLanguages from "./CommonLanguages";
import languageFamilies from "./LanguageFamilies";

// Quick links for the bottom section
const popularLanguages = [
  { name: "English", href: "/language/english" },
  { name: "Mandarin", href: "/language/mandarin" },
  { name: "Spanish", href: "/language/spanish" },
  { name: "Hindi", href: "/language/hindi" },
  { name: "Arabic", href: "/language/arabic" },
  { name: "Bengali", href: "/language/bengali" },
];

export default function Home() {
  return (
    // Premium background with subtle radial gradient
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 to-slate-200 dark:from-neutral-900 dark:to-neutral-950 font-sans">
      
      {/* Main Glassmorphic Card */}
      <div className="w-full max-w-4xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50 dark:border-zinc-800/50">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight mb-3">
            Linguistic Explorer
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-lg mx-auto">
            Discover the origins, statistics, and relations of thousands of languages across the globe.
          </p>
        </div>

        {/* Realistic Search Bar */}
        <div className="relative w-full mb-10 group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            {/* Search Icon */}
            <svg className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input 
            type="search" 
            id="global-search" 
            className="block w-full p-4 pl-12 text-sm text-slate-900 bg-slate-50/50 dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:text-white dark:placeholder-slate-500 outline-none transition-all shadow-inner" 
            placeholder="Search for a language, family, or region..." 
            required 
          />
          <button type="button" className="absolute right-2.5 bottom-2.5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600">
            Search
          </button>
        </div>

        {/* 2-Column Dropdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-10">
          
          {/* Left Side: Language Families */}
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="language-family" className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
              Primary Families
            </label>
            <div className="relative">
              <select 
                name="language-family" 
                id="language-family" 
                className="appearance-none w-full p-4 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm text-slate-700 dark:text-slate-200 cursor-pointer"
              >
                <option value="">Browse Families...</option>
                {languageFamilies.map((family) => (
                  <option key={family} value={family}>{family}</option>
                ))}
              </select>
              {/* Custom Chevron for Select */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
              </div>
            </div>
          </div>

          {/* Right Side: Common Languages */}
       

        </div>

        {/* Bottom Section: Quick Links (Pills) */}
        <div className="pt-6 border-t border-slate-100 dark:border-zinc-800">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Trending:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {popularLanguages.map((lang) => (
                <Link 
                  key={lang.name} 
                  href={lang.href}
                  className="px-4 py-1.5 text-sm font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 border border-blue-100 dark:border-blue-800/30 transition-all"
                >
                  {lang.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}