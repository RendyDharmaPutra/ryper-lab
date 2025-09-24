import type { BlogType } from "@/types/models/blog-type";
import BlogCard from "./BlogCard";

/**
 * BlogGrid.tsx (React)
 *
 * Grid React component untuk menampilkan kumpulan posting blog.
 * Dipakai untuk hidrasi client melalui komponen wrapper (BlogContent).
 *
 * Props:
 * - posts: BlogType[] — daftar posting untuk ditampilkan
 */
export type BlogGridProps = {
  posts: BlogType[];
};

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section
      id="blog-grid"
      className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 "
    >
      {posts.map((post) => (
        <BlogCard post={post} />
      ))}
      {posts.length === 0 && (
        <div className="col-span-full text-center text-gray-400">
          Tidak ada postingan yang cocok.
        </div>
      )}
    </section>
  );
}
