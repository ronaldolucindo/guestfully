export function formatCurrency(currencyCode: string, value: number) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
    useGrouping: true,
    minimumFractionDigits: 2,
  }).format(value)
}
