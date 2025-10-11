import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ProductsHeader } from "@/components/products/products-header"
import { ProductsStats } from "@/components/products/products-stats"
import { ProductsGrid } from "@/components/products/products-grid"
import LowStockButton from "@/components/products/lowStockProducts"

export default function ProductsPage() {
  return (
    <div className="flex h-screen bg-gradient-to-b from-[#0D4C6D] to-[#083344]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="animate-fade-in space-y-6">
            <ProductsHeader />
            <LowStockButton />
            <ProductsStats />
            <ProductsGrid />
          </div>
        </main>
      </div>
    </div>
  )
}
