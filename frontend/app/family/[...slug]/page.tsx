// app/family/[...slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';

/**
 * Builds a full hierarchical path string for links.
 */
function generatePath(basePath: string[], targetId: string) {
    const segments = [...basePath, targetId];
    return `/family/${segments.join('/')}`;
}

// 1. Fetch function that talks to your Express backend
async function getLanguageData(slug: string) {
    try {
        // We still only need the final slug to query Firestore
        const res = await fetch(`http://127.0.0.1:5000/api/languages/${slug}`, {
            cache: 'no-store' 
        });

        if (!res.ok) {
            if (res.status === 404) return null;
            throw new Error('Failed to fetch language data');
        }

        const json = await res.json();
        return json.data;
    } catch (error) {
        console.error("🚨 Fetch error:", error);
        return null;
    }
}

// 2. The Server Component (Next.js 15+ compatible)
export default async function LanguagePage({ 
    params 
}: { 
    params: Promise<{ slug: string[] }> // Changed to string array for catch-all
}) {
    const { slug } = await params;
    
    // The actual language we want is always the LAST segment of the URL
    const currentSlug = slug[slug.length - 1];
    const language = await getLanguageData(currentSlug);

    if (!language) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Visual Language Hierarchy (Nested Path Version) */}
                <nav className="mb-10 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        Phylogenetic Hierarchy
                    </h3>
                    <ol className="flex flex-wrap items-center text-sm font-medium">
                        
                        {/* Root Link */}
                        <li className="flex items-center">
                            <Link href="/family" className="text-indigo-600 dark:text-indigo-400 hover:underline hover:text-indigo-800 transition-colors">
                                Families Index
                            </Link>
                            <svg className="w-4 h-4 mx-2 text-slate-300 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </li>

                        {/* Map through ancestors and build the chain links */}
                        {language.ancestry && language.ancestry.map((ancestor: any, index: number) => {
                            // Create the path for this specific ancestor by slicing the chain array
                            const pathSegments = language.ancestry.slice(0, index).map((a: any) => a.ref_id);
                            const fullAncestralLink = generatePath(pathSegments, ancestor.ref_id);

                            return (
                                <li key={ancestor.ref_id} className="flex items-center">
                                    <Link 
                                        href={fullAncestralLink} 
                                        className="text-indigo-600 dark:text-indigo-400 hover:underline hover:text-indigo-800 transition-colors"
                                    >
                                        {ancestor.name}
                                    </Link>
                                    <svg className="w-4 h-4 mx-2 text-slate-300 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </li>
                            );
                        })}

                        {/* The Current Language */}
                        <li className="flex items-center">
                            <span className="text-slate-800 dark:text-slate-200 font-bold bg-slate-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                                {language.name}
                            </span>
                        </li>

                    </ol>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    <div className="lg:col-span-2 space-y-12">
                        <header>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
                                {language.name}
                            </h1>
                            {language.other_names && (
                                <p className="text-xl text-slate-600 dark:text-slate-400 italic">
                                    Also known as {language.other_names.join(', ')}
                                </p>
                            )}
                        </header>

                        <section className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                            <p className="leading-relaxed text-xl first-letter:text-6xl first-letter:font-black first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left">
                                {language.details}
                            </p>
                        </section>

                        {/* Descendant Branches (Modified to create nested URLs) */}
                        {language.children && language.children.length > 0 && (
                            <section>
                                <h2 className="text-3xl font-bold mb-6 border-b pb-4 dark:border-zinc-800">
                                    Descendant Branches
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {language.children.map((branch: any) => (
                                        <Link 
                                            // Build the child link by appending to the CURRENT full path
                                            href={generatePath(slug, branch.ref_id)} 
                                            key={branch.ref_id}
                                            className="group relative flex items-center justify-between p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 hover:border-indigo-500 hover:shadow-lg transition-all"
                                        >
                                            <div>
                                                <h3 className={`text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 ${branch.status === 'extinct' ? 'text-slate-500 line-through decoration-slate-300' : ''}`}>
                                                    {branch.name}
                                                </h3>
                                                {branch.status && (
                                                    <p className="text-sm text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                                                        {branch.status === 'extinct' ? '† Extinct' : 'Living'}
                                                    </p>
                                                )}
                                            </div>
                                            <span className="text-indigo-200 group-hover:text-indigo-500 group-hover:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Gallery remains same */}
                        {language.images && language.images.length > 0 && (
                            <section>
                                <h2 className="text-3xl font-bold mb-6 border-b pb-4 dark:border-zinc-800">Gallery</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {language.images.map((img: any, idx: number) => (
                                        <figure key={idx} className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm">
                                            <div className="aspect-video bg-slate-200 dark:bg-zinc-800 rounded-xl mb-4 flex items-center justify-center text-slate-400 font-mono text-sm overflow-hidden relative">
                                                <span className="absolute z-10 text-center px-4">{img.file_name}</span>
                                                <div className="absolute inset-0 bg-slate-100 dark:bg-zinc-800 opacity-90"></div>
                                            </div>
                                            <figcaption className="text-sm text-slate-600 dark:text-slate-400 text-center mt-2">
                                                {img.caption}
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar / Infobox remains same */}
                    <aside className="lg:col-span-1 space-y-8">
                        {language.metadata && (
                            <div className="bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-200 mb-6">
                                    Language Profile
                                </h3>
                                <dl className="space-y-6">
                                    {language.metadata.total_speakers && (
                                        <div>
                                            <dt className="text-indigo-200 text-sm mb-1">Total Speakers</dt>
                                            <dd className="text-3xl font-black">{language.metadata.total_speakers}</dd>
                                        </div>
                                    )}
                                    {language.metadata.native_speakers && (
                                        <div>
                                            <dt className="text-indigo-200 text-sm mb-1">Native Speakers</dt>
                                            <dd className="text-2xl font-bold">{language.metadata.native_speakers}</dd>
                                        </div>
                                    )}
                                    {language.metadata.script && (
                                        <div>
                                            <dt className="text-indigo-200 text-sm mb-1">Primary Script</dt>
                                            <dd className="text-lg">{language.metadata.script}</dd>
                                        </div>
                                    )}
                                    {language.metadata.iso_codes && (
                                        <div>
                                            <dt className="text-indigo-200 text-sm mb-1">ISO Codes</dt>
                                            <dd className="font-mono bg-indigo-800/50 inline-block px-3 py-1 rounded-lg mt-1">
                                                {language.metadata.iso_codes.join(', ')}
                                            </dd>
                                        </div>
                                    )}
                                </dl>
                            </div>
                        )}

                        {language.references && language.references.length > 0 && (
                            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-sm">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    References
                                </h3>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 list-disc list-outside ml-4">
                                    {language.references.map((ref: string, idx: number) => (
                                        <li key={idx} className="leading-relaxed">{ref}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </aside>
                </div>
            </div>
        </main>
    );
}