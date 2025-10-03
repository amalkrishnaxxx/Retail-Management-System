"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ShoppingCart, Clock, TrendingUp, CheckCircle, Package, AlertCircle } from "lucide-react"

const recentOrders = [
  {
    id: "#3210",
    customer: "Alice Johnson",
    email: "alice@example.com",
    amount: "$299.00",
    status: "completed",
    avatar: "/diverse-user-avatars.png",
  },
  {
    id: "#3209",
    customer: "Bob Smith",
    email: "bob@example.com",
    amount: "$149.00",
    status: "processing",
    avatar: "/diverse-user-avatars.png",
  },
  {
    id: "#3208",
    customer: "Carol Davis",
    email: "carol@example.com",
    amount: "$399.00",
    status: "shipped",
    avatar: "/diverse-user-avatars.png",
  },
  {
    id: "#3207",
    customer: "David Wilson",
    email: "david@example.com",
    amount: "$199.00",
    status: "pending",
    avatar: "/diverse-user-avatars.png",
  },
  {
    id: "#3206",
    customer: "Eva Brown",
    email: "eva@example.com",
    amount: "$89.00",
    status: "completed",
    avatar: "/diverse-user-avatars.png",
  },
]

const statusConfig = {
  completed: {
    color: "bg-emerald-500/15 text-emerald-700 border-emerald-300/50",
    icon: CheckCircle,
    label: "Completed"
  },
  processing: {
    color: "bg-teal-500/15 text-teal-700 border-teal-300/50",
    icon: Clock,
    label: "Processing"
  },
  shipped: {
    color: "bg-sky-500/15 text-sky-700 border-sky-300/50",
    icon: Package,
    label: "Shipped"
  },
  pending: {
    color: "bg-amber-500/15 text-amber-700 border-amber-300/50",
    icon: AlertCircle,
    label: "Pending"
  },
}

export function RecentOrders() {
  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-sky-400/10 to-transparent rounded-full blur-3xl" />

      <CardHeader className="relative z-10 space-y-3 pb-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-sky-700 bg-clip-text text-transparent">
              Recent Orders
            </CardTitle>
            <CardDescription className="text-slate-600 text-sm">
              Latest customer orders and their status
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <div className="p-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 transition-colors duration-200">
              <ShoppingCart className="w-4 h-4 text-teal-600" />
            </div>
            <div className="p-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 transition-colors duration-200">
              <TrendingUp className="w-4 h-4 text-sky-700" />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 space-y-3">
        {recentOrders.map((order, index) => {
          const statusInfo = statusConfig[order.status as keyof typeof statusConfig]
          const StatusIcon = statusInfo.icon

          return (
            <div
              key={order.id}
              className="group relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/60 hover:border-teal-300 hover:shadow-md transition-all duration-300 p-4"
              style={{
                animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-center justify-between gap-4">
                {/* Customer Info */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="relative">
                    <Avatar className="h-12 w-12 border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <AvatarImage src={order.avatar || "/placeholder.svg"} alt={order.customer} />
                      <AvatarFallback className="bg-gradient-to-br from-teal-500 to-sky-600 text-white font-semibold text-sm">
                        {order.customer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {/* Status indicator dot */}
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm ${order.status === 'completed' ? 'bg-emerald-500' :
                      order.status === 'processing' ? 'bg-teal-500' :
                        order.status === 'shipped' ? 'bg-sky-500' : 'bg-amber-500'
                      }`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-800 group-hover:text-teal-700 transition-colors duration-200 truncate">
                      {order.customer}
                    </p>
                    <p className="text-sm text-slate-500 truncate">{order.email}</p>
                  </div>
                </div>

                {/* Order Details */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  {/* Status Badge */}
                  <Badge
                    className={`${statusInfo.color} border px-3 py-1 font-medium text-xs flex items-center gap-1.5 hover:scale-105 transition-transform duration-200`}
                  >
                    <StatusIcon className="w-3 h-3" />
                    {statusInfo.label}
                  </Badge>

                  {/* Amount */}
                  <div className="text-right">
                    <div className="text-base font-bold bg-gradient-to-r from-teal-600 to-sky-700 bg-clip-text text-transparent">
                      {order.amount}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">{order.id}</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>

      {/* Summary Bar */}
      <div className="relative z-10 px-6 pb-6">
        <div className="rounded-xl bg-gradient-to-r from-teal-500/10 to-sky-500/10 border border-teal-200/50 p-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="font-medium text-slate-700">
                {recentOrders.length} orders displayed
              </span>
            </div>
            <button className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition-all duration-200">
              View all orders →
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </Card>
  )
}