import type { BlogType } from "@/types/models/blog-type";
import { hashId } from "@/utils/encrypt/hash-id";
import { formatWIB } from "@/utils/formatter/time_formatter";

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
      className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 bg-red-500"
    >
      {posts.map((post) => (
        <div
          key={post.id}
          className="blog-card rounded-2xl overflow-hidden fade-in cursor-pointer transition-transform hover:scale-[1.02]"
        >
          <a href={`/blog/detail?id=${hashId(post.id)}`} className="block">
            <div className="image-wrapper relative">
              <img src={post.gambar} alt="Blog Image" />
              <div className="category-badge absolute top-2 right-2 bg-white text-black px-3 py-1 text-xs font-semibold rounded-full shadow">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 line-clamp-2 text-black hover:text-blue-400 transition-colors">
                {post.judul}
              </h3>
              <p className="text-black text-sm mb-4">
                {formatWIB(post.createdAt)}
              </p>
              <p className="text-black text-sm leading-relaxed line-clamp-6">
                {post.deskripsi}
              </p>
            </div>
          </a>
        </div>
      ))}
      {posts.length === 0 && (
        <div className="col-span-full text-center text-gray-400">
          Tidak ada postingan yang cocok.
        </div>
      )}
    </section>
  );
}
