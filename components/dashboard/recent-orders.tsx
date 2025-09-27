"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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

const statusColors = {
  completed: "bg-green-500/20 text-green-400 border-green-500/30",
  processing: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  shipped: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
}

export function RecentOrders() {
  return (
    <Card className="glass animate-fade-in">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Orders</CardTitle>
        <CardDescription className="text-muted-foreground">Latest customer orders and their status</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentOrders.map((order, index) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-3 rounded-lg glass-strong animate-slide-in hover:bg-accent/10 transition-colors"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={order.avatar || "/placeholder.svg"} alt={order.customer} />
                <AvatarFallback>
                  {order.customer
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{order.customer}</p>
                <p className="text-sm text-muted-foreground">{order.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className={statusColors[order.status as keyof typeof statusColors]}>{order.status}</Badge>
              <span className="font-medium text-primary">{order.amount}</span>
              <span className="text-sm text-muted-foreground">{order.id}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
