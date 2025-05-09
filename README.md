# 📊 Financial Analytics Dashboard

A responsive and interactive financial dashboard built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Recharts**. It visualizes revenue, expenses, and profit margins using charts and tables. Users can add new financial data via a modal and filter the view by month and department.

---

## 🚀 Features

- ✅ Responsive and modern UI
- 📅 Date range filtering by month
- 🏢 Filter by department (e.g., Sales, HR)
- ➕ Add monthly revenue and expenses
- 📈 Real-time chart and table updates
- 📁 Sortable and filterable financial table
- 💡 Clean, maintainable, and modular codebase

---

## 📂 Project Structure

financial-analytics-dashboard/
├── app/ # Next.js App Router pages
├── components/ # Charts, tables, modals, form UI
├── data/ # Mock financial data
├── services/ # Data fetching and update functions
├── types/ # TypeScript interfaces/types
├── public/ # Static files
├── styles/ # Tailwind CSS configuration
├── README.md # Project documentation
└── package.json # NPM dependencies and scripts

---

## 🧰 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Recharts**
- **React Hooks & Context**
- **Vercel** for deployment

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/financial-analytics-dashboard.git
cd financial-analytics-dashboard
npm install
npm run dev
http://localhost:3000
✍️ Adding New Financial Data
Click the “Add” button to open the modal.

Enter:

Revenue for the selected month

Expenses by category

The dashboard will automatically update the chart and table after submission.

🎛️ Filters
Start Month and End Month: Filters the data to a specific range.

Department: Filters profit margin data by department.

🧪 Mock Data Location
You can find and modify mock data in the following file:
/data/financialData.ts
Data is structured as:

revenue: { month: string; revenue: number }[]

expenses: { category: string; amount: number }[]

profitMargins: { department: string; month: string; profitMargin: number }[]

