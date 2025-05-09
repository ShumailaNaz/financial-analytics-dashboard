import { FinancialData } from "@/types/financial";

const mockFinancialData: FinancialData = {
  revenue: [
    { month: "January", revenue: 50000 },
    { month: "February", revenue: 47000 },
    { month: "March", revenue: 53000 },
    { month: "April", revenue: 60000 },
    { month: "May", revenue: 62000 },
    { month: "June", revenue: 65000 },
  ],
  expenses: [
    { category: "Salaries", amount: 30000 },
    { category: "Rent", amount: 5000 },
    { category: "Utilities", amount: 2000 },
    { category: "Marketing", amount: 4000 },
  ],
  profitMargins: [
    { department: "Sales", profitMargin: 30 },
    { department: "Engineering", profitMargin: 25 },
    { department: "HR", profitMargin: 15 },
  ],
};
export default mockFinancialData;