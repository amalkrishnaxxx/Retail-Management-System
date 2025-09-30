"use client"

import type React from "react"
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ReactNode
  delay?: number
  iconBg: string
}

function StatCard({ title, value, change, trend, icon, delay = 0, iconBg }: StatCardProps) {
  const isPositive = trend === "up"

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]",
        "bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm",
        "border-none shadow-lg hover:shadow-xl"
      )}
      style={{
        animation: `slideUp 0.6s ease-out ${delay}s both`,
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 via-transparent to-sky-400/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-400/10 to-transparent rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-sky-400/10 to-transparent rounded-full blur-2xl" />

      <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
          {title}
        </CardTitle>

        {/* Icon with enhanced animation */}
        <div className={cn(
          "relative flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500",
          "group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl",
          iconBg
        )}>
          {/* Shine effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-2xl bg-white/30 animate-ping opacity-0 group-hover:opacity-75" style={{ animationDuration: '2s' }} />

          <div className="relative text-white transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative">
        {/* Value with gradient animation */}
        <div className="relative mb-3">
          <div className={cn(
            "text-3xl font-bold transition-all duration-300",
            "bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent",
            "group-hover:from-teal-600 group-hover:to-sky-700"
          )}>
            {value}
          </div>

          {/* Animated underline */}
          <div className="h-1 w-0 group-hover:w-16 transition-all duration-500 bg-gradient-to-r from-teal-500 to-sky-600 rounded-full mt-1" />
        </div>

        {/* Trend indicator with enhanced styling */}
        <div className="flex items-center gap-2 mb-3">
          <div className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 shadow-sm",
            isPositive
              ? "bg-emerald-500/15 text-emerald-700 border border-emerald-200/50 group-hover:bg-emerald-500/25 group-hover:shadow-emerald-500/20"
              : "bg-rose-500/15 text-rose-700 border border-rose-200/50 group-hover:bg-rose-500/25 group-hover:shadow-rose-500/20"
          )}>
            {isPositive ? (
              <TrendingUp className="h-3.5 w-3.5" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5" />
            )}
            <span className="font-bold">{change}</span>
          </div>
          <span className="text-xs text-slate-500 transition-colors duration-300 group-hover:text-slate-700 font-medium">
            vs last month
          </span>
        </div>

        {/* Bottom accent bar with shimmer */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200/50 overflow-hidden rounded-b-lg">
          <div className={cn(
            "h-full w-0 group-hover:w-full transition-all duration-1000 ease-out relative",
            isPositive
              ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-600"
              : "bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500"
          )}>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </div>
        </div>
      </CardContent>

      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-teal-500/20 to-transparent rounded-tl-full" />
      </div>
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
      icon: <DollarSign className="h-5 w-5" />,
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/40",
    },
    {
      title: "Orders",
      value: "2,350",
      change: "+180.1%",
      trend: "up" as const,
      icon: <ShoppingCart className="h-5 w-5" />,
      iconBg: "bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/40",
    },
    {
      title: "Products Sold",
      value: "12,234",
      change: "+19%",
      trend: "up" as const,
      icon: <Package className="h-5 w-5" />,
      iconBg: "bg-gradient-to-br from-sky-600 to-sky-700 shadow-lg shadow-sky-600/40",
    },
    {
      title: "Active Customers",
      value: "573",
      change: "-2.1%",
      trend: "down" as const,
      icon: <Users className="h-5 w-5" />,
      iconBg: "bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-600/40",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={stat.title} {...stat} delay={index * 0.1} />
      ))}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}