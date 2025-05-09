"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { ExpenseCategory } from "@/types/financial";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function ExpensesChart({ data }: { data: ExpenseCategory[] }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Expense Breakdown</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="amount" nameKey="category" outerRadius={100}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
