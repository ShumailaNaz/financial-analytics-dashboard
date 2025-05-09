// /services/financialServices.ts

import mockFinancialData from "@/data/financialData";
import { FinancialData, MonthlyRevenue, ExpenseCategory } from "@/types/financial";

// Keep the mock data mutable for simulation
let mockData: FinancialData = { ...mockFinancialData };

/**
 * Simulate fetching financial data (used across the app)
 */
export const fetchFinancialData = async (): Promise<FinancialData> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...mockData }), 500); // return a fresh copy
  });
};

/**
 * Add new revenue and expenses, then return updated data
 */
export const addMonthlyData = async (
  newRevenue: MonthlyRevenue,
  newExpenses: ExpenseCategory[]
): Promise<FinancialData> => {
  // 1. Append the new revenue
  mockData.revenue.push(newRevenue);

  // 2. Merge new expenses by category
  newExpenses.forEach((expense) => {
    const existing = mockData.expenses.find((e) => e.category === expense.category);
    if (existing) {
      existing.amount += expense.amount;
    } else {
      mockData.expenses.push(expense);
    }
  });

  // 3. Return the updated data (simulate network latency)
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...mockData }), 500);
  });
};
