export function mergeSearchParams(
  base: URLSearchParams,
  params: Record<string, string | number | undefined>
): string {
  const searchParams = new URLSearchParams(base);

  Object.entries(params).forEach(([paramKey, paramValue]) => {
    paramValue === undefined || paramValue === null || paramValue === ""
      ? searchParams.delete(paramKey)
      : searchParams.set(paramKey, String(paramValue));
  });

  return `?${searchParams.toString()}`;
}
