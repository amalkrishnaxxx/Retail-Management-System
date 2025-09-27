import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { OrdersTable } from "@/components/orders/orders-table"
import { OrdersHeader } from "@/components/orders/orders-header"
import { OrdersStats } from "@/components/orders/orders-stats"

export default function OrdersPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="animate-fade-in space-y-6">
            <OrdersHeader />
            <OrdersStats />
            <OrdersTable />
          </div>
        </main>
      </div>
    </div>
  )
}
