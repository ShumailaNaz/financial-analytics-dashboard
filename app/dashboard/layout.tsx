export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <nav className="bg-gray-800 text-white p-4 text-xl font-semibold cursor-pointer">
          Financial Dashboard
        </nav>
        <main className="p-4">{children}</main>
      </div>
    );
  }