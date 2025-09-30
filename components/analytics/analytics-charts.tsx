"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { TrendingUp, BarChart3 } from "lucide-react"

const revenueData = [
  { month: "Jan", revenue: 4000, orders: 240 },
  { month: "Feb", revenue: 3000, orders: 139 },
  { month: "Mar", revenue: 2000, orders: 980 },
  { month: "Apr", revenue: 2780, orders: 390 },
  { month: "May", revenue: 1890, orders: 480 },
  { month: "Jun", revenue: 2390, orders: 380 },
  { month: "Jul", revenue: 3490, orders: 430 },
  { month: "Aug", revenue: 4000, orders: 520 },
  { month: "Sep", revenue: 3200, orders: 450 },
  { month: "Oct", revenue: 4100, orders: 580 },
  { month: "Nov", revenue: 4500, orders: 620 },
  { month: "Dec", revenue: 5200, orders: 720 },
]

const categoryData = [
  { category: "Electronics", sales: 4000 },
  { category: "Fashion", sales: 3000 },
  { category: "Home", sales: 2000 },
  { category: "Sports", sales: 2780 },
  { category: "Books", sales: 1890 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-3 backdrop-blur-sm">
        <p className="text-sm font-semibold text-gray-900 mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs text-gray-600">
            <span className="font-medium">{entry.name}:</span> ${entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function AnalyticsCharts() {
  return (
    <div className="w-full">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        .chart-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .chart-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px -4px rgba(23, 162, 184, 0.12);
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <Card className="chart-card border-none shadow-lg bg-white rounded-2xl overflow-hidden animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-[#17A2B8]/5 to-[#2C5F7C]/5 border-b border-gray-100 pb-5">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-gradient-to-br from-[#17A2B8] to-[#2C5F7C] rounded-xl shadow-md flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-gray-900 text-lg font-semibold">Revenue Trend</CardTitle>
                <CardDescription className="text-gray-500 text-sm mt-1">Monthly revenue over the past year</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#17A2B8" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#17A2B8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.5} />
                <XAxis
                  dataKey="month"
                  stroke="#6B7280"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis
                  stroke="#6B7280"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#17A2B8"
                  fill="url(#revenueGradient)"
                  strokeWidth={3}
                  dot={{ fill: '#17A2B8', strokeWidth: 2, r: 4, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sales by Category */}
        <Card className="chart-card border-none shadow-lg bg-white rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <CardHeader className="bg-gradient-to-r from-[#17A2B8]/5 to-[#2C5F7C]/5 border-b border-gray-100 pb-5">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-gradient-to-br from-[#17A2B8] to-[#2C5F7C] rounded-xl shadow-md flex-shrink-0">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-gray-900 text-lg font-semibold">Sales by Category</CardTitle>
                <CardDescription className="text-gray-500 text-sm mt-1">Performance across product categories</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#17A2B8" stopOpacity={1} />
                    <stop offset="95%" stopColor="#2C5F7C" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.5} />
                <XAxis
                  dataKey="category"
                  stroke="#6B7280"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis
                  stroke="#6B7280"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="sales"
                  fill="url(#barGradient)"
                  radius={[8, 8, 0, 0]}
                  maxBarSize={60}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}