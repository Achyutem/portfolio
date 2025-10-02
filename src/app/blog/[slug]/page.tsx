import { getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
  const post = await getPost(params.slug);
  if (!post) return;
  const { title, summary, publishedAt, image } = post.metadata;
  const ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;
  return {
    title,
    description: summary,
    openGraph: { title, description: summary, images: [{ url: ogImage }], type: 'article', publishedTime: publishedAt, url: `${DATA.url}/blog/${params.slug}` },
    twitter: { card: 'summary_large_image', title, description: summary, images: [ogImage] },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <section id="blog">
      {post.metadata.image && (
        <Image src={post.metadata.image} alt={post.metadata.title} width={1200} height={630} className="rounded-md" />
      )}
      <h1>{post.metadata.title}</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <p>{formatDate(post.metadata.publishedAt)}</p>
      </Suspense>
      <article dangerouslySetInnerHTML={{ __html: post.source }} />
    </section>
  );
}
