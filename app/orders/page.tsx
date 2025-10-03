"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { OrdersTable } from "@/components/orders/orders-table"
import { OrdersHeader } from "@/components/orders/orders-header"
import { OrdersStats } from "@/components/orders/orders-stats"
import OrderDetailsPage from "@/components/orders/orderDetails"

export default function OrdersPage() {
  const [showDetails, setShowDetails] = useState(false)

  const handleViewDetails = () => {
    setShowDetails(true)
  }

  const handleBackToTable = () => {
    setShowDetails(false)
  }

  return (
    <div className="flex h-screen bg-gradient-to-b from-[#0D4C6D] to-[#083344]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="animate-fade-in space-y-6">
            {!showDetails ? (
              <>
                <OrdersHeader />
                <OrdersStats />
                <OrdersTable onViewDetails={handleViewDetails} />
              </>
            ) : (
              <OrderDetailsPage onBack={handleBackToTable} />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
