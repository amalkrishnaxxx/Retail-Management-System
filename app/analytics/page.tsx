import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { AnalyticsHeader } from "@/components/analytics/analytics-header"
import { AnalyticsOverview } from "@/components/analytics/analytics-overview"
import { AnalyticsCharts } from "@/components/analytics/analytics-charts"

export default function AnalyticsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="animate-fade-in space-y-6">
            <AnalyticsHeader />
            <AnalyticsOverview />
            <AnalyticsCharts />
          </div>
        </main>
      </div>
    </div>
  )
}
