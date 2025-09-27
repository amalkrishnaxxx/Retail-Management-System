"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"

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

export function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue Trend */}
      <Card className="glass animate-fade-in border-border/30">
        <CardHeader>
          <CardTitle className="text-foreground">Revenue Trend</CardTitle>
          <CardDescription className="text-muted-foreground">Monthly revenue over the past year</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  backdropFilter: "blur(12px)",
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Sales by Category */}
      <Card className="glass animate-fade-in border-border/30">
        <CardHeader>
          <CardTitle className="text-foreground">Sales by Category</CardTitle>
          <CardDescription className="text-muted-foreground">Performance across product categories</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  backdropFilter: "blur(12px)",
                }}
              />
              <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
