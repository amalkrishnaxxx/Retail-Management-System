"use client"

import type React from "react"

import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ReactNode
  delay?: number
}

function StatCard({ title, value, change, trend, icon, delay = 0 }: StatCardProps) {
  const isPositive = trend === "up"

  return (
    <Card
      className="glass hover:glass-strong transition-all duration-300 hover:scale-105 animate-scale-in border-border/30"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
        <div className="flex items-center text-xs">
          {isPositive ? (
            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
          )}
          <span className={isPositive ? "text-green-500" : "text-red-500"}>{change}</span>
          <span className="text-muted-foreground ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  )
}

export function StatsCards() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up" as const,
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      title: "Orders",
      value: "2,350",
      change: "+180.1%",
      trend: "up" as const,
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      title: "Products Sold",
      value: "12,234",
      change: "+19%",
      trend: "up" as const,
      icon: <Package className="h-4 w-4" />,
    },
    {
      title: "Active Customers",
      value: "573",
      change: "-2.1%",
      trend: "down" as const,
      icon: <Users className="h-4 w-4" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={stat.title} {...stat} delay={index * 0.1} />
      ))}
    </div>
  )
}
