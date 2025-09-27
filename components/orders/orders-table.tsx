"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const orders = [
  {
    id: "#3210",
    customer: {
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "/diverse-user-avatars.png",
    },
    products: ["Wireless Headphones", "Phone Case"],
    amount: "$299.00",
    status: "delivered",
    date: "2024-01-15",
    items: 2,
  },
  {
    id: "#3209",
    customer: {
      name: "Bob Smith",
      email: "bob@example.com",
      avatar: "/diverse-user-avatars.png",
    },
    products: ["Smart Watch", "Charging Cable"],
    amount: "$149.00",
    status: "processing",
    date: "2024-01-14",
    items: 2,
  },
  {
    id: "#3208",
    customer: {
      name: "Carol Davis",
      email: "carol@example.com",
      avatar: "/diverse-user-avatars.png",
    },
    products: ["Running Shoes"],
    amount: "$399.00",
    status: "shipped",
    date: "2024-01-13",
    items: 1,
  },
  {
    id: "#3207",
    customer: {
      name: "David Wilson",
      email: "david@example.com",
      avatar: "/diverse-user-avatars.png",
    },
    products: ["Coffee Maker", "Coffee Beans"],
    amount: "$199.00",
    status: "pending",
    date: "2024-01-12",
    items: 2,
  },
  {
    id: "#3206",
    customer: {
      name: "Eva Brown",
      email: "eva@example.com",
      avatar: "/diverse-user-avatars.png",
    },
    products: ["Yoga Mat", "Water Bottle"],
    amount: "$89.00",
    status: "delivered",
    date: "2024-01-11",
    items: 2,
  },
  {
    id: "#3205",
    customer: {
      name: "Frank Miller",
      email: "frank@example.com",
      avatar: "/diverse-user-avatars.png",
    },
    products: ["Gaming Mouse"],
    amount: "$79.00",
    status: "cancelled",
    date: "2024-01-10",
    items: 1,
  },
]

const statusColors = {
  pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  processing: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  shipped: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  delivered: "bg-green-500/20 text-green-400 border-green-500/30",
  cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
}

export function OrdersTable() {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])

  return (
    <Card className="glass animate-fade-in border-border/30">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border/30 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/30 hover:bg-muted/50">
                <TableHead className="text-muted-foreground">Order ID</TableHead>
                <TableHead className="text-muted-foreground">Customer</TableHead>
                <TableHead className="text-muted-foreground">Products</TableHead>
                <TableHead className="text-muted-foreground">Amount</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Date</TableHead>
                <TableHead className="text-muted-foreground w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow
                  key={order.id}
                  className="border-border/30 hover:bg-muted/30 animate-slide-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <TableCell className="font-medium text-foreground">{order.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={order.customer.avatar || "/placeholder.svg"} alt={order.customer.name} />
                        <AvatarFallback>
                          {order.customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{order.customer.name}</p>
                        <p className="text-sm text-muted-foreground">{order.customer.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm text-foreground">{order.products[0]}</p>
                      {order.items > 1 && (
                        <p className="text-xs text-muted-foreground">+{order.items - 1} more items</p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-primary">{order.amount}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[order.status as keyof typeof statusColors]}>{order.status}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{order.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="glass-strong">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Order
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Cancel Order
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
