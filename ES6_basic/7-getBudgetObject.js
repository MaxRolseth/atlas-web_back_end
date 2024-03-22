export default function getBudgetObject(income, gdp, capita) {
    const budget = { a: income, b: gdp, c: capita };
    return budget;
  }