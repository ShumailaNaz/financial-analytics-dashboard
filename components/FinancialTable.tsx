"use client";

import { useState } from "react";
import { FinancialData } from "@/types/financial";

const ALL_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function FinancialTable({ data }: { data: FinancialData }) {
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const filteredProfitMargins = selectedDepartment
    ? data.profitMargins.filter((p) => p.department === selectedDepartment)
    : data.profitMargins;

  const filteredDepartments = Array.from(
    new Set(data.profitMargins.map((p) => p.department))
  );

  const monthInRange = (month: string) => {
    const monthIndex = ALL_MONTHS.indexOf(month);
    const startIndex = startMonth ? ALL_MONTHS.indexOf(startMonth) : 0;
    const endIndex = endMonth ? ALL_MONTHS.indexOf(endMonth) : ALL_MONTHS.length - 1;
    return monthIndex >= startIndex && monthIndex <= endIndex;
  };

  const availableMonths = data.revenue.map((r) => r.month);

  const rows = ALL_MONTHS
    .filter((month) => availableMonths.includes(month) && monthInRange(month))
    .map((month) => {
      const revenueData = data.revenue.find((r) => r.month === month);
      const revenue = revenueData ? revenueData.revenue : 0;

      const expenses = data.expenses.map((e) => `${e.category}: $${e.amount.toLocaleString()}`).join(", ");
      const profitMargins = filteredProfitMargins.map((p) => `${p.department}: ${p.profitMargin.toFixed(2)}%`).join(", ");

      return {
        month,
        revenue,
        expenses,
        profitMargins,
      };
    });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Detailed Financial Data</h2>

      <div className="flex flex-wrap gap-4 items-center">
        <div>
          <label className="block text-sm font-medium">Start Month</label>
          <select
            className="border rounded px-2 py-1"
            value={startMonth}
            onChange={(e) => setStartMonth(e.target.value)}
          >
            <option value="">All</option>
            {ALL_MONTHS.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">End Month</label>
          <select
            className="border rounded px-2 py-1"
            value={endMonth}
            onChange={(e) => setEndMonth(e.target.value)}
          >
            <option value="">All</option>
            {ALL_MONTHS.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Department</label>
          <select
            className="border rounded px-2 py-1"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">All</option>
            {filteredDepartments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border text-left">Month</th>
              <th className="px-4 py-2 border text-right">Revenue</th>
              <th className="px-4 py-2 border text-right">Expenses</th>
              <th className="px-4 py-2 border text-right">Profit Margins</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2 border">{row.month}</td>
                <td className="px-4 py-2 border text-right">${row.revenue.toLocaleString()}</td>
                <td className="px-4 py-2 border text-right">{row.expenses}</td>
                <td className="px-4 py-2 border text-right">{row.profitMargins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
