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
