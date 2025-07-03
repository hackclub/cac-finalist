import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMdxBySlug, getSlugs } from '../../lib/mdx';
import Sidebar from '../components/Sidebar';
import Nav from '../components/navfixed'


export async function generateStaticParams() {
  const slugs = getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function DocPage({ params }) {
  const { slug } = await params;
  const { content } = await getMdxBySlug(slug); // await here 
  return (
    <div>
      <Nav />

      <div className="flex ">
        <Sidebar />
        <article className="mt-24 sm:ml-60 w-screen grid prose prose-sm prose-a:text-blue-600 prose-a:underline prose-ul:list-disc prose-ol:list-decimal prose-headings:my-2 prose-headings:font-semibold font-mono max-w-4xl mx-0 pl-6 text-left">
          <MDXRemote source={content} />
        </article>
      </div>
    </div>


  );
}

