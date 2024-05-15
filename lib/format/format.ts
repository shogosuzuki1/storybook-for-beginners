export function amountFormat(amount: number) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function dateFormat(dateStr: string, fullMonthFlag: boolean = false) {
  const monthDisplayConfig = fullMonthFlag ? "long" : "short";
  const date = new Date(dateStr).getDate();
  const month = new Date(dateStr).getMonth();
  const year = new Date(dateStr).getFullYear();
  return `${date} ${new Intl.DateTimeFormat("en", { month: monthDisplayConfig }).format(month)}, ${year}`;
}

export function dateFormatYYYYMMDDForSlashSplit(date: Date) {
  const formatter = new Intl.DateTimeFormat("jp", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(date);
}
