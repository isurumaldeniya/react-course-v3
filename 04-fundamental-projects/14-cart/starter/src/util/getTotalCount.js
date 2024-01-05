export default function calculateTotal(cart) {
  let totalCount = 0;
  let totalCost = 0;

  for (let [key, value] of cart) {
    totalCount += value.amount;
    totalCost += Number(value.price) * value.amount;
  }

  return { totalCount, totalCost };
}