import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading with subtle separator */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="mb-8">
          <h1 className="font-medium text-3xl tracking-tighter">Blog</h1>
          <div className="mt-2 h-0.5 w-16 bg-neutral-700 dark:bg-neutral-300 rounded-full" />
        </div>
      </BlurFade>

      {/* Blog posts */}
      {sortedPosts.map((post, index) => (
        <BlurFade
          key={post.slug}
          delay={BLUR_FADE_DELAY * 2 + index * 0.05}
        >
          <div className="py-4">
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col space-y-1 group"
            >
              <p className="tracking-tight font-medium group-hover:underline group-hover:text-black dark:group-hover:text-white transition-colors">
                {post.metadata.title}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {post.metadata.publishedAt}
              </p>
            </Link>

            {/* Separator line between posts */}
            {index < sortedPosts.length - 1 && (
              <div className="mt-4 border-t border-neutral-200 dark:border-neutral-700" />
            )}
          </div>
        </BlurFade>
      ))}
    </section>
  );
}


// import BlurFade from "@/components/magicui/blur-fade";
// import { getBlogPosts } from "@/data/blog";
// import Link from "next/link";

// export const metadata = {
//   title: "Blog",
//   description: "My thoughts on software development, life, and more.",
// };

// const BLUR_FADE_DELAY = 0.04;

// export default async function BlogPage() {
//   const posts = await getBlogPosts();

//   return (
//     <section>
//       <BlurFade delay={BLUR_FADE_DELAY}>
//         <h1 className="font-medium text-3xl mb-8 tracking-tighter">Blog</h1>
//       </BlurFade>
//       {posts
//         .sort((a, b) => {
//           if (
//             new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
//           ) {
//             return -1;
//           }
//           return 1;
//         })
//         .map((post, id) => (
//           <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
//             <Link
//               className="flex flex-col space-y-1 mb-4"
//               href={`/blog/${post.slug}`}
//             >
//               <div className="w-full flex flex-col">
//                 <p className="tracking-tight">{post.metadata.title}</p>
//                 <p className="h-6 text-xs text-muted-foreground">
//                   {post.metadata.publishedAt}
//                 </p>
//               </div>
//             </Link>
//           </BlurFade>
//         ))}
//     </section>
//   );
// }
