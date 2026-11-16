const DATE_FORMAT = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatPublishedDate(isoDate: string): string {
  const parsed = new Date(isoDate);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return DATE_FORMAT.format(parsed);
}
