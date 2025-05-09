"use client";

import { useEffect, useState } from "react";
import { fetchFinancialData } from "@/services/financialServices";
import { FinancialData } from "@/types/financial";
import FinancialForm from "@/components/FinancialForm";
import RevenueChart from "@/components/RevenueChart";
import ExpensesChart from "@/components/ExpensesChart";
import ProfitMarginChart from "@/components/ProfitMarginChart";
import FinancialTable from "@/components/FinancialTable";
export default function DashboardPage() {
    const [data, setData] = useState<FinancialData | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchFinancialData().then(setData);
    }, []);
    if (!data) return <p>Loading...</p>;
    return (
        <div className="w-full min-h-screen bg-gray-50 p-4 md:p-6">
         <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📊 Financial Dashboard</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Data
        </button>
      </div>
      {/* Modal */}
      {showModal && (
        <FinancialForm
          onClose={() => setShowModal(false)}
          onUpdate={(newData) => setData(newData)}
        />
      )}
        
        
        {/* Charts Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 rounded-xl shadow-sm bg-white">
            <RevenueChart data={data.revenue} />
          </div>
          <div className="p-4 rounded-xl shadow-sm bg-white">
            <ExpensesChart data={data.expenses} />
          </div>
          <div className="p-4 rounded-xl shadow-sm bg-white">
            <ProfitMarginChart data={data.profitMargins} />
          </div>
        </div>
      
        {/* Financial Table */}
        <div className="mt-8">
          <div className="p-4 rounded-xl shadow-sm bg-white">
            <FinancialTable data={data} />
          </div>
        </div>
      </div>
      
      
    );
}