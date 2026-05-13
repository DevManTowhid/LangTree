import Link from 'next/link';
import Image from 'next/image';

// Paste the JSON object here or import it from your data layer
const familyData = {
  "id": "indo-european",
  "name": "Indo-European",
  "parent": null,
  "children": [
    { "name": "Albanian", "slug": "albanian", "status": "living" },
    { "name": "Anatolian", "slug": "anatolian", "status": "extinct" },
    { "name": "Armenian", "slug": "armenian", "status": "living" },
    { "name": "Balto-Slavic", "slug": "balto-slavic", "status": "living" },
    { "name": "Celtic", "slug": "celtic", "status": "living" },
    { "name": "Germanic", "slug": "germanic", "status": "living" },
    { "name": "Hellenic", "slug": "hellenic", "status": "living" },
    { "name": "Indo-Iranian", "slug": "indo-iranian", "status": "living" },
    { "name": "Italic", "slug": "italic", "status": "living" },
    { "name": "Tocharian", "slug": "tocharian", "status": "extinct" }
  ],
  "detailed": "The Indo-European languages are a language family native to the northern Indian subcontinent, most of Europe, and the Iranian plateau, with additional native branches found in regions such as parts of Central Asia and Armenia. Historically, they were also spoken in Anatolia and the Tarim Basin. Today, over 3.4 billion people (42% of the global population) speak an Indo-European language as a first language, making it by far the most spoken language family in the world. All Indo-European languages are descended from a single prehistoric language, reconstructed as Proto-Indo-European, spoken sometime during the Neolithic or early Bronze Age, likely in the Pontic–Caspian steppe.",
  "images": [
    { "file_name": "Indo-European Language Family Branches in Eurasia.png", "caption": "Present-day distribution of native speakers." },
    { "file_name": "Indo-European language tree (with major international languages highlighted).svg", "caption": "Family tree in order of first attestation." }
  ],
  "references": [
    "Ethnologue: What are the largest language families?",
    "Bryce, Trevor (2005). Kingdom of the Hittites.",
    "Anthony, David W. (2007). The Horse, the Wheel, and Language."
  ],
  "metadata": {
    "speakers_estimate": "3.4 billion",
    "living_languages_count": 446,
    "iso_codes": ["ine"],
    "proto_language": "Proto-Indo-European",
    "homeland_hypothesis": "Kurgan hypothesis"
  }
};

export default function IndoEuropeanPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb / Parent Info */}
        <nav className="mb-8 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          <Link href="/family" className="hover:underline">Language Families</Link>
          <span className="mx-2 text-slate-400">/</span>
          {familyData.parent ? (
             <Link href={`/family/${familyData.parent}`} className="hover:underline capitalize">{familyData.parent}</Link>
          ) : (
            <span className="text-slate-500">Root Family</span>
          )}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Header */}
            <header>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
                {familyData.name}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 italic">
                Descended from {familyData.metadata.proto_language}
              </p>
            </header>

            {/* Detailed Description */}
            <section className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <p className="leading-relaxed text-xl first-letter:text-6xl first-letter:font-black first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left">
                {familyData.detailed}
              </p>
            </section>

            {/* Branches Grid */}
            <section>
              <h2 className="text-3xl font-bold mb-6 border-b pb-4 dark:border-zinc-800">
                Primary Branches
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {familyData.children.map((branch) => (
                  <Link 
                    href={`/family/indo-european/${branch.slug}`} 
                    key={branch.slug}
                    className="group relative flex items-center justify-between p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 hover:border-indigo-500 hover:shadow-lg transition-all"
                  >
                    <div>
                      <h3 className={`text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 ${branch.status === 'extinct' ? 'text-slate-500 line-through decoration-slate-300' : ''}`}>
                        {branch.name}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                        {branch.status === 'extinct' ? '† Extinct' : 'Living'}
                      </p>
                    </div>
                    <span className="text-indigo-200 group-hover:text-indigo-500 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Image Gallery */}
            <section>
              <h2 className="text-3xl font-bold mb-6 border-b pb-4 dark:border-zinc-800">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {familyData.images.map((img, idx) => (
                  <figure key={idx} className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm">
                    <div className="aspect-video bg-slate-200 dark:bg-zinc-800 rounded-xl mb-4 flex items-center justify-center text-slate-400 font-mono text-sm overflow-hidden relative">
                      {/* Placeholder for actual image. In production, use next/image with actual URL */}
                      <span className="absolute z-10 text-center px-4">{img.file_name}</span>
                      <div className="absolute inset-0 bg-slate-100 dark:bg-zinc-800 opacity-90"></div>
                    </div>
                    <figcaption className="text-sm text-slate-600 dark:text-slate-400 text-center">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar / Infobox */}
          <aside className="lg:col-span-1 space-y-8">
            
            {/* Stats Card */}
            <div className="bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-200 mb-6">
                Family Profile
              </h3>
              <dl className="space-y-6">
                <div>
                  <dt className="text-indigo-200 text-sm mb-1">Total Speakers</dt>
                  <dd className="text-3xl font-black">{familyData.metadata.speakers_estimate}</dd>
                </div>
                <div>
                  <dt className="text-indigo-200 text-sm mb-1">Living Languages</dt>
                  <dd className="text-2xl font-bold">{familyData.metadata.living_languages_count}</dd>
                </div>
                <div>
                  <dt className="text-indigo-200 text-sm mb-1">Proposed Homeland</dt>
                  <dd className="text-lg">{familyData.metadata.homeland_hypothesis}</dd>
                </div>
                <div>
                  <dt className="text-indigo-200 text-sm mb-1">ISO 639-5 Code</dt>
                  <dd className="font-mono bg-indigo-800/50 inline-block px-3 py-1 rounded-lg mt-1">
                    {familyData.metadata.iso_codes.join(', ')}
                  </dd>
                </div>
              </dl>
            </div>

            {/* References Card */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                References
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 list-disc list-outside ml-4">
                {familyData.references.map((ref, idx) => (
                  <li key={idx} className="leading-relaxed">{ref}</li>
                ))}
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}