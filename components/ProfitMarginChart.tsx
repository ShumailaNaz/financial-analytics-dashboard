"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { DepartmentProfit } from "@/types/financial";

export default function ProfitMarginChart({ data }: { data: DepartmentProfit[] }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Profit Margin by Department</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="profitMargin" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
