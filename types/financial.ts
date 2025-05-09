export interface MonthlyRevenue {
    month: string;
    revenue: number;
  }
  
  export interface ExpenseCategory {
    category: string;
    amount: number;
  }
  
  export interface DepartmentProfit {
    department: string;
    profitMargin: number;
  }
  
  export interface FinancialData {
    revenue: MonthlyRevenue[];
    expenses: ExpenseCategory[];
    profitMargins: DepartmentProfit[];
  }
  