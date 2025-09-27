import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { CustomersHeader } from "@/components/customers/customers-header"
import { CustomersStats } from "@/components/customers/customers-stats"
import { CustomersTable } from "@/components/customers/customers-table"

export default function CustomersPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="animate-fade-in space-y-6">
            <CustomersHeader />
            <CustomersStats />
            <CustomersTable />
          </div>
        </main>
      </div>
    </div>
  )
}
