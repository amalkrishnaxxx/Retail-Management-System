"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, Mail, Phone, Users } from "lucide-react"

const customers = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "/diverse-user-avatars.png",
    status: "active",
    tier: "VIP",
    orders: 23,
    totalSpent: "$2,847.50",
    lastOrder: "2024-01-15",
    joinDate: "2023-03-15",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "+1 (555) 234-5678",
    avatar: "/diverse-user-avatars.png",
    status: "active",
    tier: "Regular",
    orders: 12,
    totalSpent: "$1,234.00",
    lastOrder: "2024-01-12",
    joinDate: "2023-06-20",
  },
  {
    id: "3",
    name: "Carol Davis",
    email: "carol@example.com",
    phone: "+1 (555) 345-6789",
    avatar: "/diverse-user-avatars.png",
    status: "active",
    tier: "VIP",
    orders: 34,
    totalSpent: "$4,567.25",
    lastOrder: "2024-01-14",
    joinDate: "2022-11-10",
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david@example.com",
    phone: "+1 (555) 456-7890",
    avatar: "/diverse-user-avatars.png",
    status: "inactive",
    tier: "Regular",
    orders: 5,
    totalSpent: "$567.80",
    lastOrder: "2023-12-01",
    joinDate: "2023-08-05",
  },
  {
    id: "5",
    name: "Eva Brown",
    email: "eva@example.com",
    phone: "+1 (555) 567-8901",
    avatar: "/diverse-user-avatars.png",
    status: "active",
    tier: "Regular",
    orders: 8,
    totalSpent: "$892.40",
    lastOrder: "2024-01-10",
    joinDate: "2023-09-12",
  },
  {
    id: "6",
    name: "Frank Miller",
    email: "frank@example.com",
    phone: "+1 (555) 678-9012",
    avatar: "/diverse-user-avatars.png",
    status: "new",
    tier: "Regular",
    orders: 1,
    totalSpent: "$79.99",
    lastOrder: "2024-01-16",
    joinDate: "2024-01-16",
  },
]

const statusColors = {
  active: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20",
  inactive: "bg-gray-500/10 text-gray-600 border-gray-500/20 hover:bg-gray-500/20",
  new: "bg-[#17A2B8]/10 text-[#17A2B8] border-[#17A2B8]/20 hover:bg-[#17A2B8]/20",
}

const tierColors = {
  VIP: "bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20",
  Regular: "bg-[#2C5F7C]/10 text-[#2C5F7C] border-[#2C5F7C]/20 hover:bg-[#2C5F7C]/20",
}

export function CustomersTable() {
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
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-gray-900 text-xl font-semibold">Customer Directory</CardTitle>
                <p className="text-sm text-gray-500 mt-0.5">Manage and track customer relationships</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600 font-medium">{customers.length} customers</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-hidden">
            <table>
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4 pl-6">Customer</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Contact</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Status</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Tier</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Orders</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Total Spent</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Last Order</th>
                  <th className="w-12 py-4 pr-6"></th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr
                    key={customer.id}
                    className="border-b border-gray-100 table-row-hover animate-slide-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <td className="py-4 pl-6">
                      <div className="flex items-center gap-3">
                        <div className="avatar-wrapper">
                          <Avatar className="h-10 w-10 border-2 border-[#17A2B8]/20 shadow-sm">
                            <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                            <AvatarFallback className="bg-gradient-to-br from-[#17A2B8] to-[#2C5F7C] text-white text-sm font-medium">
                              {customer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{customer.name}</p>
                          <p className="text-xs text-gray-500">Joined {customer.joinDate}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-900">
                          <Mail className="h-3.5 w-3.5 mr-2 text-[#17A2B8]" />
                          <span className="text-xs">{customer.email}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="h-3.5 w-3.5 mr-2 text-gray-400" />
                          <span className="text-xs">{customer.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <Badge className={`${statusColors[customer.status as keyof typeof statusColors]} status-badge capitalize text-xs px-3 py-1 rounded-full border`}>
                        {customer.status}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <Badge className={`${tierColors[customer.tier as keyof typeof tierColors]} status-badge text-xs px-3 py-1 rounded-full border`}>
                        {customer.tier}
                      </Badge>
                    </td>
                    <td className="py-4 text-gray-900 font-medium">{customer.orders}</td>
                    <td className="py-4 font-semibold text-gray-900 text-base">{customer.totalSpent}</td>
                    <td className="py-4 text-gray-600 text-sm">{customer.lastOrder}</td>
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
                            <span className="text-gray-700 text-sm font-medium">View Profile</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="rounded-lg cursor-pointer hover:bg-gray-50 focus:bg-gray-50 py-2.5">
                            <Edit className="mr-3 h-4 w-4 text-[#2C5F7C]" />
                            <span className="text-gray-700 text-sm font-medium">Edit Customer</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="rounded-lg cursor-pointer hover:bg-gray-50 focus:bg-gray-50 py-2.5">
                            <Mail className="mr-3 h-4 w-4 text-gray-600" />
                            <span className="text-gray-700 text-sm font-medium">Send Email</span>
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