export function formatMoney(value: number) {
  const valueFomatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)

  return valueFomatted
}
