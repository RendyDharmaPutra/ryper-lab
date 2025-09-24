import { mergeSearchParams } from "@/utils/url";

/**
 * BlogPagination.tsx (React)
 *
 * Kontrol pagination untuk daftar blog (client-side hydrated).
 *
 * Props:
 * - currentPage: number — halaman aktif saat ini
 * - totalPages: number — jumlah total halaman
 * - baseQueryString: string — query string dasar (mis. "foo=1&bar=2") yang akan di-merge
 */
export type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  baseQueryString: string;
};

export default function BlogPagination({
  currentPage,
  totalPages,
  baseQueryString,
}: BlogPaginationProps) {
  const base = new URLSearchParams(baseQueryString);

  return (
    <section id="pagination" className="flex justify-center space-x-2 pb-20 ">
      {totalPages > 1 && (
        <>
          <a
            className={`pagination-btn ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-900"
            }`}
            aria-disabled={currentPage === 1}
            href={
              currentPage === 1
                ? "#"
                : mergeSearchParams(base, { page: currentPage - 1 })
            }
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </a>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(
              Math.max(0, currentPage - 3),
              Math.max(0, currentPage - 3) + 5
            )
            .map((i) => (
              <a
                key={i}
                href={mergeSearchParams(base, { page: i })}
                className={`pagination-btn ${
                  i === currentPage
                    ? "active"
                    : "bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-900"
                }`}
              >
                {i}
              </a>
            ))}

          <a
            className={`pagination-btn ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-900"
            }`}
            aria-disabled={currentPage === totalPages}
            href={
              currentPage === totalPages
                ? "#"
                : mergeSearchParams(base, { page: currentPage + 1 })
            }
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </>
      )}
    </section>
  );
}
