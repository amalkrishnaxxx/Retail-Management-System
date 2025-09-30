"use client"

import type React from "react"
import { ShoppingCart, Clock, Truck, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string
  icon: React.ReactNode
  delay?: number
  iconBg: string
}

function StatCard({ title, value, icon, delay = 0, iconBg }: StatCardProps) {
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
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 via-transparent to-sky-400/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-400/10 to-transparent rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-sky-400/10 to-transparent rounded-full blur-2xl" />

      <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
          {title}
        </CardTitle>

        <div className={cn(
          "relative flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500",
          "group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl",
          iconBg
        )}>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative text-white transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative">
        <div className="relative mb-3">
          <div className={cn(
            "text-3xl font-bold transition-all duration-300",
            "bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent",
            "group-hover:from-teal-600 group-hover:to-sky-700"
          )}>
            {value}
          </div>
          <div className="h-1 w-0 group-hover:w-16 transition-all duration-500 bg-gradient-to-r from-teal-500 to-sky-600 rounded-full mt-1" />
        </div>
      </CardContent>
    </Card>
  )
}

export function OrdersStats() {
  const stats = [
    {
      title: "Total Orders",
      value: "2,350",
      icon: <ShoppingCart className="h-5 w-5" />,
      iconBg: "bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/40",
    },
    {
      title: "Pending",
      value: "156",
      icon: <Clock className="h-5 w-5" />,
      iconBg: "bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/40",
    },
    {
      title: "In Transit",
      value: "89",
      icon: <Truck className="h-5 w-5" />,
      iconBg: "bg-gradient-to-br from-sky-600 to-sky-700 shadow-lg shadow-sky-600/40",
    },
    {
      title: "Completed",
      value: "2,105",
      icon: <CheckCircle2 className="h-5 w-5" />,
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/40",
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
      `}</style>
    </div>
  )
}
