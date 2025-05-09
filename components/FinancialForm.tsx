"use client";

import { useState } from "react";
import { addMonthlyData, fetchFinancialData } from "@/services/financialServices";
import { ExpenseCategory, MonthlyRevenue, FinancialData } from "@/types/financial";

interface Props {
  onClose: () => void;
  onUpdate: (data: FinancialData) => void;
}

export default function FinancialForm({ onClose, onUpdate }: Props) {
  const [month, setMonth] = useState("");
  const [revenue, setRevenue] = useState("");
  const [expenses, setExpenses] = useState([{ category: "", amount: "" }]);

  const handleAddExpense = () => {
    setExpenses([...expenses, { category: "", amount: "" }]);
  };

  const handleChangeExpense = (index: number, field: string, value: string) => {
    const updated = [...expenses];
    updated[index] = { ...updated[index], [field]: value };
    setExpenses(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validate inputs (optional but good practice)
    if (!month || !revenue || expenses.length === 0) {
      alert("Please fill in all fields.");
      return;
    }
  
    const newRevenue: MonthlyRevenue = {
      month,
      revenue: parseFloat(revenue),
    };
  
    const newExpenses: ExpenseCategory[] = expenses.map((e) => ({
      category: e.category,
      amount: parseFloat(e.amount),
    }));
  
    try {
      // 1. Update mock data
      await addMonthlyData(newRevenue, newExpenses);
  
      // 2. Re-fetch latest data
      const updatedData = await fetchFinancialData();
  
      // 3. Send updated data to parent for charts + table
      onUpdate(updatedData);
  
      // 4. Close the modal
      onClose();
  
      // 5. (Optional) Reset the form fields
      setMonth("");
      setRevenue("");
      setExpenses([{ category: "", amount: "" }]);
    } catch (err) {
      console.error("Failed to submit new data:", err);
      alert("Something went wrong while updating the data.");
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
  <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add Financial Data</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Month</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Revenue</label>
            <input
              type="number"
              className="w-full border px-3 py-2 rounded"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Expenses</label>
            {expenses.map((exp, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input
                  className="flex-1 border px-2 py-1 rounded"
                  placeholder="Category"
                  value={exp.category}
                  onChange={(e) => handleChangeExpense(i, "category", e.target.value)}
                  required
                />
                <input
                  type="number"
                  className="w-24 border px-2 py-1 rounded"
                  placeholder="Amount"
                  value={exp.amount}
                  onChange={(e) => handleChangeExpense(i, "amount", e.target.value)}
                  required
                />
              </div>
            ))}
            <button type="button" onClick={handleAddExpense} className="text-sm text-blue-600 mt-1">
              + Add Another Expense
            </button>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
