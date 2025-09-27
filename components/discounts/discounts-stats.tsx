"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Percent, TrendingUp, Users, DollarSign } from "lucide-react"

const stats = [
  {
    title: "Active Discounts",
    value: "12",
    icon: Percent,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    change: "+3 this month",
  },
  {
    title: "Total Savings",
    value: "$8,947.50",
    icon: DollarSign,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    change: "+15.2% vs last month",
  },
  {
    title: "Redemptions",
    value: "1,247",
    icon: TrendingUp,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    change: "+23.1% usage rate",
  },
  {
    title: "Customers Reached",
    value: "892",
    icon: Users,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    change: "31.3% of customer base",
  },
]

export function DiscountsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={stat.title}
          className="glass hover:glass-strong transition-all duration-300 hover:scale-105 animate-scale-in border-border/30"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
            <p className="text-xs text-primary">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
