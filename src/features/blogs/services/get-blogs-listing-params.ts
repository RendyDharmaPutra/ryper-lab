export function getBlogsListingParams(url: URL) {
  const category = (url.searchParams.get("filter") ?? "all").toLowerCase();
  const searchQuery = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const currentPage = Number(url.searchParams.get("page") ?? "1");

  return { category, searchQuery, currentPage };
}
