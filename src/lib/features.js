import { format, subMonths } from "date-fns";

// ── existing ──────────────────────────────────────────────────────────────────

export const getLast6Months = () => {
  const currentDate = new Date();
  const last6Months = [];
  for (let i = 0; i < 6; i++) {
    const monthDate = subMonths(currentDate, i);
    last6Months.unshift(format(monthDate, "MMMM"));
  }
  return last6Months;
};

export const getFormattedLast6Months = () => {
  const currentDate = new Date();
  const last6Months = [];
  for (let i = 0; i < 6; i++) {
    const monthDate = subMonths(currentDate, i);
    last6Months.unshift(format(monthDate, "MMM"));
  }
  return last6Months;
};

export const getCategoryStats = (categories, breakdown, monthlyData) => {
  const categoryTotals = categories.reduce((acc, cat) => {
    acc[cat] = monthlyData.reduce((s, m) => s + (m[cat] ?? 0), 0);
    return acc;
  }, {});

  const sortedCategories = [...breakdown].sort((a, b) => b.value - a.value);
  const topCategory = sortedCategories[0];
  const topCategoryTotal = categoryTotals[topCategory.label] ?? topCategory.value;

  return { sortedCategories, topCategory, topCategoryTotal };
};

export const getMonthlyChange = (categories, monthlyData) => {
  if (!monthlyData || monthlyData.length < 2) return 0;
  const lastMonth = monthlyData[monthlyData.length - 1];
  const prevMonth = monthlyData[monthlyData.length - 2];
  const lastTotal = categories.reduce((s, c) => s + (lastMonth[c] ?? 0), 0);
  const prevTotal = categories.reduce((s, c) => s + (prevMonth[c] ?? 0), 0);
  return prevTotal > 0 ? Math.round(((lastTotal - prevTotal) / prevTotal) * 100) : 0;
};

export const getSavingsRate = (incomeArr, expenseArr) => {
  const totalIncome  = incomeArr.reduce((s, v) => s + v, 0);
  const totalExpense = expenseArr.reduce((s, v) => s + v, 0);
  return totalIncome > 0 ? Math.round(((totalIncome - totalExpense) / totalIncome) * 100) : 0;
};

// ── new — derive summary numbers from transactionData rows ───────────────────

/** Total of all Income rows */
export const getTotalIncome = (transactions = []) =>
  transactions
    .filter((t) => t.type === "Income")
    .reduce((s, t) => s + t.amount, 0);

/** Total of all Expense rows */
export const getTotalExpense = (transactions = []) =>
  transactions
    .filter((t) => t.type === "Expense")
    .reduce((s, t) => s + t.amount, 0);

/** Savings = Income - Expense (can be negative) */
export const getSavings = (transactions = []) =>
  getTotalIncome(transactions) - getTotalExpense(transactions);