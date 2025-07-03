import { getMdxBySlug, getSlugs, markdownToHtml } from '../../lib/mdx';
import Sidebar from '../components/Sidebar';
import Nav from '../components/navfixed'
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function DocPage({ params }) {
  const { slug } = await params;
  
  // Get valid slugs
  const validSlugs = getSlugs();
  
  // If slug is not in our valid MDX files, return 404
  if (!validSlugs.includes(slug)) {
    notFound();
  }
  
  try {
    const { content } = await getMdxBySlug(slug);
    const htmlContent = markdownToHtml(content);
    
    return (
      <div>
        <Nav />

        <div className="flex ">
          <Sidebar />
          <article className="mt-24 sm:ml-60 w-screen grid prose prose-sm prose-a:text-blue-600 prose-a:underline prose-ul:list-disc prose-ol:list-decimal prose-headings:my-2 prose-headings:font-semibold font-mono max-w-4xl mx-0 pl-6 text-left">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </article>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

