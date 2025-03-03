//Faturamentos diários
const dailyBilling = [1000, 5000, 3000, 2000, 500];

function main() {
  const { minBilling, maxBilling } = calcInvoicingMinAndMax();

  const { countDaysAboveAverage } = countDaysBillingAboveAverage();

  console.log({
    faturamentoMinimo: minBilling,
    faturamentoMaximo: maxBilling,
    totalDiasFaturamentoAcimaDaMedia: countDaysAboveAverage,
  });
}

function calcInvoicingMinAndMax() {
  const minBilling = Math.min(...dailyBilling);
  const maxBilling = Math.max(...dailyBilling);

  return { minBilling, maxBilling };
}

function countDaysBillingAboveAverage() {
  const averageBilling =
    dailyBilling.reduce((acc, curr) => acc + curr, 0) / dailyBilling.length;
  const countDaysAboveAverage = dailyBilling.filter(
    (billing) => billing > averageBilling
  ).length;

  return { countDaysAboveAverage };
}

main();
