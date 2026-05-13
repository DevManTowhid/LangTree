// app/family/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';

// 1. Fetch function that talks to your Express backend
async function getLanguageData(slug: string) {
    try {
        const res = await fetch(`http://localhost:5000/api/languages/${slug}`, {
            // 'no-store' means it always fetches fresh data. 
            // Change to 'force-cache' later for blazing fast static pages.
            cache: 'no-store' 
        });

        if (!res.ok) {
            if (res.status === 404) return null; // Handle your Soft Links gracefully
            throw new Error('Failed to fetch language data');
        }

        const json = await res.json();
        return json.data;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}


// 2. The Server Component (Updated for Next.js 15+)
export default async function LanguagePage({ 
    params 
}: { 
    params: Promise<{ slug: string }> 
}) {
    // We must 'await' the params Promise to unwrap it now
    const { slug } = await params;
    
    const language = await getLanguageData(slug);

    return (
        <main className="max-w-4xl mx-auto p-8 font-sans">
            {/* Header */}
            <h1 className="text-5xl font-bold text-gray-900 mb-2">{language.name}</h1>
            {language.other_names && (
                <p className="text-gray-500 italic mb-6">Also known as: {language.other_names.join(', ')}</p>
            )}

            {/* Ancestry Link */}
            {language.immediate_parent && (
                <div className="mb-8">
                    <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Parent Branch</span>
                    <br />
                    <Link 
                        href={`/family/${language.immediate_parent.ref_id}`}
                        className="text-blue-600 hover:underline text-lg"
                    >
                        ← {language.immediate_parent.name}
                    </Link>
                </div>
            )}

            {/* Details */}
            <div className="prose prose-lg mb-12">
                <p>{language.details}</p>
            </div>

            {/* Children Branches */}
            {language.children && language.children.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">Descendant Branches</h2>
                    <ul className="space-y-2">
                        {language.children.map((child: any) => (
                            <li key={child.ref_id} className="flex items-center gap-2">
                                <span className="text-gray-400">•</span>
                                <Link 
                                    href={`/family/${child.ref_id}`}
                                    className="text-blue-600 hover:underline font-medium"
                                >
                                    {child.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
}