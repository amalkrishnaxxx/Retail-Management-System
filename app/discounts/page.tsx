import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { DiscountsHeader } from "@/components/discounts/discounts-header"
import { DiscountsStats } from "@/components/discounts/discounts-stats"
import { DiscountsTable } from "@/components/discounts/discounts-table"

export default function DiscountsPage() {
  return (
    <div className="flex h-screen bg-gradient-to-b from-[#0D4C6D] to-[#083344]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="animate-fade-in space-y-6">
            <DiscountsHeader />
            <DiscountsStats />  
            <DiscountsTable />
          </div>
        </main>
      </div>
    </div>
  )
}
