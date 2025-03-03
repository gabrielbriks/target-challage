const billings = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function main() {
  const total = Object.values(billings).reduce((acc, curr) => acc + curr, 0);
  const { percentages } = calcPercentages(billings, total);

  console.log(total, percentages);
}

function calcPercentages(billings, total) {
  const percentages = Object.entries(billings).map(([state, value]) => ({
    state,
    percentage: ((value / total) * 100).toFixed(2),
  }));

  return { percentages };
}

main();
