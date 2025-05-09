"use client";
import { FinancialData } from "@/types/financial";

export default function FinancialTable({ data }: { data: FinancialData }) {
  return (
    <div>
    <h2 className="text-lg font-semibold mb-4">Detailed Financial Data</h2>
  
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-2 border text-left">Month</th>
            <th className="px-4 py-2 border text-right">Revenue</th>
            <th className="px-4 py-2 border text-right">Expenses</th>
            <th className="px-4 py-2 border text-right">Profit Margin (avg)</th>
          </tr>
        </thead>
        <tbody>
          {data.revenue.map((row, i) => {
            const month = row.month;
            const revenue = row.revenue;
  
            const expense = data.expenses.reduce((sum, e) => sum + e.amount, 0);
            const avgProfit =
              data.profitMargins.reduce((sum, p) => sum + p.profitMargin, 0) /
              data.profitMargins.length;
  
            return (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2 border">{month}</td>
                <td className="px-4 py-2 border text-right">
                  ${revenue.toLocaleString()}
                </td>
                <td className="px-4 py-2 border text-right">
                  ${expense.toLocaleString()}
                </td>
                <td className="px-4 py-2 border text-right">
                  {avgProfit.toFixed(2)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  
  );
}
