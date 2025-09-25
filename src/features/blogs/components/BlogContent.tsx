import { processBlogsService } from "../services/process-blogs";
import BlogGrid from "./BlogGrid";
import BlogPagination from "./BlogPagination";
import type { BlogType } from "@/types/models/blog-type";

/**
 * BlogContent.tsx (React)
 *
 * Wrapper React component yang merender BlogGrid dan BlogPagination.
 * Digunakan dari halaman Astro dengan directive `client:load` agar ter-hydrate di client.
 * Mengelola pemrosesan blog berdasarkan filter, pencarian, dan pagination.
 *
 * Props:
 * - blogs: BlogType[] — daftar semua posting blog yang tersedia
 * - currentFilter: string — kategori filter yang aktif saat ini
 * - searchQuery: string — kueri pencarian yang dimasukkan pengguna
 * - pageParam: number — parameter halaman saat ini
 * - baseQueryString: string — query string dasar untuk pagination
 */
type BlogContentProps = {
  blogs: BlogType[];
  currentFilter: string;
  searchQuery: string;
  pageParam: number;
  baseQueryString: string;
};

export const BlogContent = ({
  blogs,
  currentFilter,
  searchQuery,
  pageParam,
  baseQueryString,
}: BlogContentProps) => {
  const { postsToShow, totalPages, currentPage } = processBlogsService(
    blogs,
    currentFilter,
    searchQuery,
    pageParam
  );
  return (
    <>
      <BlogGrid posts={postsToShow} />

      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        baseQueryString={baseQueryString}
      />
    </>
  );
};
