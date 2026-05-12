import Image from "next/image";
import commonLanguages from "./CommonLanguages";
import languageFamilies from "./LanguageFamilies";


export default function Home() {
  return (
    // Centering wrapper
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-neutral-950">
      
      <div className="w-full max-w-4xl bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-neutral-800">
        
        <h1 className="mb-8 text-2xl font-bold text-center text-gray-800 dark:text-white">
          Linguistic Selection Tool
        </h1>

        {/* 2-Column Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Side: Language Families */}
          <div className="flex flex-col gap-2">
            <label htmlFor="language-family" className="text-sm font-medium text-gray-500">
              Primary Language Families
            </label>
            <select 
              name="language-family" 
              id="language-family" 
              className="w-full p-3 bg-transparent border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            >
              <option value="">Select a Family</option>
              {languageFamilies.map((family) => (
                <option key={family} value={family}>{family}</option>
              ))}
            </select>
          </div>

          {/* Right Side: Common Languages */}
          <div className="flex flex-col gap-2">
            <label htmlFor="common-language" className="text-sm font-medium text-gray-500">
              Common Global Languages
            </label>
            <select 
              name="common-language" 
              id="common-language" 
              className="w-full p-3 bg-transparent border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            >
              <option value="">Select a Language</option>
              {commonLanguages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

        </div>
      </div>
    </main>
  );
}