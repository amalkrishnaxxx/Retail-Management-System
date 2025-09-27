"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, Crown, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Customers",
    value: "2,847",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    change: "+12.5%",
  },
  {
    title: "Active Customers",
    value: "1,923",
    icon: UserCheck,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    change: "+8.2%",
  },
  {
    title: "VIP Customers",
    value: "156",
    icon: Crown,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    change: "+15.3%",
  },
  {
    title: "Customer Growth",
    value: "+23.1%",
    icon: TrendingUp,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    change: "This month",
  },
]

export function CustomersStats() {
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
