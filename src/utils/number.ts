export function formatNumber(num: number): string {
  if (num < 1000) return String(num);
  return Math.floor(num / 1000) + 'K';
}
