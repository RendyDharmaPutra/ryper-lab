import BlogGrid from "./BlogGrid";
import BlogPagination from "./BlogPagination";
import type { BlogType } from "@/types/models/blog-type";

/**
 * BlogContent.tsx
 *
 * Wrapper React component yang merender BlogGrid dan BlogPagination.
 * Digunakan dari halaman Astro dengan directive `client:load` agar ter-hydrate di client.
 *
 * Props:
 * - postsToShow: BlogType[] — daftar posting yang akan ditampilkan pada halaman saat ini
 * - totalPages: number — jumlah total halaman
 * - currentPage: number — halaman aktif
 * - baseQueryString: string — query string dasar (mis. url.searchParams.toString())
 */
type BlogContentProps = {
  postsToShow: BlogType[];
  totalPages: number;
  currentPage: number;
  baseQueryString: string;
};

export const BlogContent = ({
  postsToShow,
  totalPages,
  currentPage,
  baseQueryString,
}: BlogContentProps) => {
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
