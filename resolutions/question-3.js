const dailyBilling = require("../data/data-billings.js");

//Faturamentos diários
const dataDailyBilling = dailyBilling;

function main() {
  const { valuesValidates } = validateDataDailyBilling();
  const { minBilling, maxBilling } = calcInvoicingMinAndMax(valuesValidates);

  const { countDaysAboveAverage } =
    countDaysBillingAboveAverage(valuesValidates);

  console.log({
    faturamentoMinimo: minBilling.toFixed(2),
    faturamentoMaximo: maxBilling.toFixed(2),
    totalDiasFaturamentoAcimaDaMedia: countDaysAboveAverage,
  });
}

function validateDataDailyBilling() {
  const valuesValidates = dataDailyBilling
    .map((data) => data.valor)
    .filter((valor) => valor > 0);

  return { valuesValidates };
}

function calcInvoicingMinAndMax(valuesValidates) {
  const minBilling = Math.min(...valuesValidates);
  const maxBilling = Math.max(...valuesValidates);

  return { minBilling, maxBilling };
}

function countDaysBillingAboveAverage(valuesValidates) {
  const averageBilling =
    valuesValidates.reduce((acc, curr) => acc + curr, 0) /
    valuesValidates.length;

  console.log("averageBilling", averageBilling);

  const countDaysAboveAverage = valuesValidates.filter(
    (billing) => billing > averageBilling
  ).length;

  return { countDaysAboveAverage };
}

main();
