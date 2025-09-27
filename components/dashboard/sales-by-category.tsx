"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Electronics", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Fashion", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Home & Garden", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Sports", value: 12, color: "hsl(var(--chart-4))" },
  { name: "Books", value: 8, color: "hsl(var(--chart-5))" },
]

export function SalesByCategory() {
  return (
    <Card className="glass animate-fade-in">
      <CardHeader>
        <CardTitle className="text-foreground">Sales by Category</CardTitle>
        <CardDescription className="text-muted-foreground">
          Distribution of sales across product categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={120} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                backdropFilter: "blur(12px)",
              }}
            />
            <Legend
              wrapperStyle={{
                color: "hsl(var(--foreground))",
                fontSize: "12px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
