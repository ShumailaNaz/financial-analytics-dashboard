"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { MonthlyRevenue } from "@/types/financial";

export default function RevenueChart({ data }: { data: MonthlyRevenue[] }) {
    console.log(data,"data")
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Revenue Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
