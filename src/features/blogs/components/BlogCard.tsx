import type { BlogType } from "@/types/models/blog-type";
import { formatWIB } from "@/utils/formatter/time_formatter";

/**
 * BlogCard.tsx
 *
 * Kartu individual untuk menampilkan ringkasan sebuah posting blog.
 * Bertanggung jawab menampilkan gambar, kategori, judul, tanggal, dan deskripsi ringkas.
 *
 * Props:
 * - post: BlogType — data posting yang akan ditampilkan
 */

interface BlogCardProps {
  post: BlogType;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="blog-card rounded-2xl overflow-hidden fade-in cursor-pointer transition-transform hover:scale-[1.02]">
      <a href={`/blogs/${post.id_blog}`} className="block">
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
          <p className="text-black text-sm mb-4">{formatWIB(post.createdAt)}</p>
          <p className="text-black text-sm leading-relaxed line-clamp-6">
            {post.deskripsi}
          </p>
        </div>
      </a>
    </div>
  );
}
