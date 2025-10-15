"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Package, TrendingUp } from "lucide-react"
import { useRouter } from "next/navigation"

interface OrdersTableProps {
  onViewDetails: () => void
}

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
  pending: "bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20",
  processing: "bg-[#17A2B8]/10 text-[#17A2B8] border-[#17A2B8]/20 hover:bg-[#17A2B8]/20",
  shipped: "bg-[#2C5F7C]/10 text-[#2C5F7C] border-[#2C5F7C]/20 hover:bg-[#2C5F7C]/20",
  delivered: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20",
  cancelled: "bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-500/20",
}

export function OrdersTable({ onViewDetails }: OrdersTableProps) {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)
  const router = useRouter();

  const handleViewDetails = () => {
    router.push("/orders/orderDetails");
  };


  return (
    <div className="w-full">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-slide-in {
          animation: slideIn 0.4s ease-out backwards;
        }
        
        .table-row-hover {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .table-row-hover:hover {
          background: linear-gradient(90deg, transparent, rgba(23, 162, 184, 0.03), transparent);
          transform: translateX(2px);
        }
        
        .status-badge {
          transition: all 0.2s ease;
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        
        .status-badge:hover {
          transform: scale(1.05);
        }
        
        .action-button {
          transition: all 0.2s ease;
        }
        
        .action-button:hover {
          background-color: rgba(23, 162, 184, 0.1);
          transform: scale(1.1);
        }
        
        .avatar-wrapper {
          transition: transform 0.2s ease;
        }
        
        .avatar-wrapper:hover {
          transform: scale(1.1);
        }
        
        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
        }
        
        th {
          text-align: left;
          font-weight: 600;
        }
        
        td, th {
          padding: 1rem;
        }
      `}</style>

      <Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden animate-fade-in">
        <CardHeader className="bg-gradient-to-r from-[#17A2B8]/5 to-[#2C5F7C]/5 border-b border-gray-100 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-[#17A2B8] to-[#2C5F7C] rounded-xl shadow-md">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-gray-900 text-xl font-semibold">Recent Orders</CardTitle>
                <p className="text-sm text-gray-500 mt-0.5">Track and manage your latest transactions</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-[#17A2B8]" />
              <span className="text-gray-600 font-medium">{orders.length} orders</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0" style={{ overflow: 'none' }}>
          <div className="overflow-x-hidden">
            <table>
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4 pl-6">Order ID</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Customer</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Products</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Amount</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Status</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Date</th>
                </tr>
              </thead>
              <tbody style={{ overflow: 'none' }}>
                {orders.map((order, index) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-100 table-row-hover animate-slide-in"
                    style={{ animationDelay: `${index * 0.05}s`, overflow: 'hidden' }}
                    onMouseEnter={() => setHoveredRow(order.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="font-semibold text-gray-900 py-4 pl-6">
                      <Button onClick={onViewDetails}>
                        View Details
                      </Button>
                    </td>
                    <td className="py-4" style={{ overflow: 'none' }}>
                      <div className="flex items-center gap-3">
                        <div className="avatar-wrapper">
                          <Avatar className="h-10 w-10 border-2 border-[#17A2B8]/20 shadow-sm">
                            <AvatarImage src={order.customer.avatar || "/placeholder.svg"} alt={order.customer.name} />
                            <AvatarFallback className="bg-gradient-to-br from-[#17A2B8] to-[#2C5F7C] text-white text-sm font-medium">
                              {order.customer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{order.customer.name}</p>
                          <p className="text-xs text-gray-500">{order.customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div>
                        <p className="text-sm text-gray-900 font-medium">{order.products[0]}</p>
                        {order.items > 1 && (
                          <p className="text-xs text-[#17A2B8] font-medium mt-0.5">+{order.items - 1} more items</p>
                        )}
                      </div>
                    </td>
                    <td className="font-semibold text-gray-900 py-4 text-base">{order.amount}</td>
                    <td className="py-4">
                      <Badge className={`${statusColors[order.status as keyof typeof statusColors]} status-badge capitalize text-xs px-3 py-1 rounded-full border`}>
                        {order.status}
                      </Badge>
                    </td>
                    <td className="text-gray-600 py-4 text-sm">{order.date}</td>
                    {/* <td className="py-4 pr-6">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="h-9 w-9 p-0 action-button rounded-lg hover:bg-[#17A2B8]/10"
                          >
                            <MoreHorizontal className="h-4 w-4 text-gray-600" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 bg-white shadow-xl border-gray-200 rounded-xl p-1">
                          <DropdownMenuItem className="rounded-lg cursor-pointer hover:bg-gray-50 focus:bg-gray-50 py-2.5">
                            <Eye className="mr-3 h-4 w-4 text-[#17A2B8]" />
                            <span className="text-gray-700 text-sm font-medium">View Details</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="rounded-lg cursor-pointer hover:bg-gray-50 focus:bg-gray-50 py-2.5">
                            <Edit className="mr-3 h-4 w-4 text-[#2C5F7C]" />
                            <span className="text-gray-700 text-sm font-medium">Edit Order</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="rounded-lg cursor-pointer hover:bg-red-50 focus:bg-red-50 py-2.5">
                            <Trash2 className="mr-3 h-4 w-4 text-red-600" />
                            <span className="text-red-600 text-sm font-medium">Cancel Order</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}