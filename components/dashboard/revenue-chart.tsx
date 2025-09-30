"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, Package } from "lucide-react"

const data = [
  { name: "Jan", revenue: 4000, orders: 240 },
  { name: "Feb", revenue: 3000, orders: 139 },
  { name: "Mar", revenue: 2000, orders: 980 },
  { name: "Apr", revenue: 2780, orders: 390 },
  { name: "May", revenue: 1890, orders: 480 },
  { name: "Jun", revenue: 2390, orders: 380 },
  { name: "Jul", revenue: 3490, orders: 430 },
  { name: "Aug", revenue: 4000, orders: 520 },
  { name: "Sep", revenue: 3200, orders: 450 },
  { name: "Oct", revenue: 4100, orders: 580 },
  { name: "Nov", revenue: 4500, orders: 620 },
  { name: "Dec", revenue: 5200, orders: 720 },
]

export function RevenueChart() {
  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-sky-400/10 to-transparent rounded-full blur-3xl" />

      <CardHeader className="relative z-10 space-y-3 pb-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-sky-700 bg-clip-text text-transparent">
              Revenue Overview
            </CardTitle>
            <CardDescription className="text-slate-600 text-sm">
              Monthly revenue and order trends for the past year
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <div className="p-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 transition-colors duration-200">
              <TrendingUp className="w-4 h-4 text-teal-600" />
            </div>
            <div className="p-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 transition-colors duration-200">
              <Package className="w-4 h-4 text-sky-700" />
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-6 pt-2">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-teal-500 shadow-sm group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xs font-medium text-slate-700">Revenue</span>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-sky-600 shadow-sm group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xs font-medium text-slate-700">Orders</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="rounded-xl bg-white/50 backdrop-blur-sm p-4 border border-slate-200/60">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#0891b2" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0369a1" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#0c4a6e" stopOpacity={0.3} />
                </linearGradient>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
                </filter>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#cbd5e1"
                opacity={0.3}
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="#64748b"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
              />
              <YAxis
                stroke="#64748b"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  padding: "12px"
                }}
                labelStyle={{
                  color: "#1e293b",
                  fontWeight: 600,
                  marginBottom: "4px"
                }}
                itemStyle={{
                  color: "#475569",
                  fontSize: "13px"
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#14b8a6"
                strokeWidth={3}
                dot={{
                  fill: "#14b8a6",
                  strokeWidth: 2,
                  r: 4,
                  stroke: "#fff",
                  filter: "url(#shadow)"
                }}
                activeDot={{
                  r: 7,
                  stroke: "#fff",
                  strokeWidth: 3,
                  fill: "#14b8a6",
                  filter: "url(#shadow)"
                }}
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#0369a1"
                strokeWidth={3}
                dot={{
                  fill: "#0369a1",
                  strokeWidth: 2,
                  r: 4,
                  stroke: "#fff",
                  filter: "url(#shadow)"
                }}
                activeDot={{
                  r: 7,
                  stroke: "#fff",
                  strokeWidth: 3,
                  fill: "#0369a1",
                  filter: "url(#shadow)"
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}