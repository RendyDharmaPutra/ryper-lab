export const formatWIB = (dateISO: string): string => {
  const date = new Date(dateISO);
  const formatted = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  return `${formatted} WIB`;
};
