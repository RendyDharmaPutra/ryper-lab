import type { BlogType } from "@/types/models/blog-type";

export const processBlogsService = (
  blogs: BlogType[],
  filter: string,
  query: string,
  page: number
) => {
  // Early return for empty blogs to avoid unnecessary processing
  if (!blogs || blogs.length === 0) {
    return { postsToShow: [], totalPages: 1, currentPage: 1 };
  }

  // Apply filters in a single pass if possible
  const isFilterAll = filter === "all";
  const hasQuery = !!query && query.length > 0;

  const filtered = blogs.filter((post) => {
    // Only check category if we're not showing all categories
    const matchesCategory =
      isFilterAll || post.category.toLowerCase() === filter;

    // Only perform text search if there's a query and category matched
    if (matchesCategory && hasQuery) {
      const q = query.toLowerCase();
      return (
        post.judul.toLowerCase().includes(q) ||
        post.deskripsi.toLowerCase().includes(q)
      );
    }

    return matchesCategory;
  });

  // Calculate pagination values
  const postsPerPage = 9;
  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / postsPerPage));
  const currentPage = Math.min(Math.max(1, isNaN(page) ? 1 : page), totalPages);
  const startIndex = (currentPage - 1) * postsPerPage;

  // Slice only once for better performance
  const postsToShow = filtered.slice(startIndex, startIndex + postsPerPage);

  return { postsToShow, totalPages, currentPage };
};
