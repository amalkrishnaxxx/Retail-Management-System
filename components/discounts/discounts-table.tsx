"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, Copy, Trash2, Calendar, Tag, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const discounts = [
  {
    id: "1",
    name: "Summer Sale 2024",
    code: "SUMMER24",
    type: "Percentage",
    value: "25%",
    status: "active",
    startDate: "2024-06-01",
    endDate: "2024-08-31",
    used: 234,
    limit: 1000,
    revenue: "$12,450.00",
  },
  {
    id: "2",
    name: "New Customer Welcome",
    code: "WELCOME10",
    type: "Fixed Amount",
    value: "$10",
    status: "active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    used: 89,
    limit: 500,
    revenue: "$890.00",
  },
  {
    id: "3",
    name: "Black Friday Mega Sale",
    code: "BLACKFRIDAY",
    type: "Percentage",
    value: "50%",
    status: "scheduled",
    startDate: "2024-11-29",
    endDate: "2024-12-02",
    used: 0,
    limit: 2000,
    revenue: "$0.00",
  },
  {
    id: "4",
    name: "VIP Customer Exclusive",
    code: "VIP15",
    type: "Percentage",
    value: "15%",
    status: "active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    used: 67,
    limit: 200,
    revenue: "$3,245.50",
  },
  {
    id: "5",
    name: "Spring Clearance",
    code: "SPRING20",
    type: "Percentage",
    value: "20%",
    status: "expired",
    startDate: "2024-03-01",
    endDate: "2024-05-31",
    used: 456,
    limit: 500,
    revenue: "$8,920.00",
  },
  {
    id: "6",
    name: "Free Shipping Weekend",
    code: "FREESHIP",
    type: "Free Shipping",
    value: "Free",
    status: "draft",
    startDate: "2024-02-01",
    endDate: "2024-02-03",
    used: 0,
    limit: 1000,
    revenue: "$0.00",
  },
]

const statusColors = {
  active: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20",
  scheduled: "bg-[#17A2B8]/10 text-[#17A2B8] border-[#17A2B8]/20 hover:bg-[#17A2B8]/20",
  expired: "bg-gray-500/10 text-gray-600 border-gray-500/20 hover:bg-gray-500/20",
  draft: "bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20",
}

export function DiscountsTable() {
  const totalRevenue = discounts.reduce((sum, d) => sum + parseFloat(d.revenue.replace(/[$,]/g, '')), 0)

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
        
        .code-badge {
          transition: all 0.2s ease;
        }
        
        .code-badge:hover {
          background-color: rgba(23, 162, 184, 0.1);
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
                <Tag className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-gray-900 text-xl font-semibold">Discount Campaigns</CardTitle>
                <p className="text-sm text-gray-500 mt-0.5">Manage promotional codes and offers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Total Revenue</p>
                <p className="text-lg font-bold text-gray-900">${totalRevenue.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-5 w-5 text-[#17A2B8]" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4 pl-6">Campaign</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Code</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Type & Value</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Status</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Usage</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Period</th>
                  <th className="text-gray-700 font-semibold text-xs uppercase tracking-wider py-4">Revenue</th>
                  <th className="w-12 py-4 pr-6"></th>
                </tr>
              </thead>
              <tbody>
                {discounts.map((discount, index) => {
                  const usagePercentage = (discount.used / discount.limit) * 100
                  return (
                    <tr
                      key={discount.id}
                      className="border-b border-gray-100 table-row-hover animate-slide-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <td className="py-4 pl-6">
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{discount.name}</p>
                          <p className="text-xs text-gray-500">Campaign #{discount.id}</p>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <code className="code-badge px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono text-gray-900 font-medium">
                            {discount.code}
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 w-7 p-0 action-button rounded-lg hover:bg-[#17A2B8]/10"
                          >
                            <Copy className="h-3.5 w-3.5 text-gray-600" />
                          </Button>
                        </div>
                      </td>
                      <td className="py-4">
                        <div>
                          <p className="text-xs text-gray-500 font-medium">{discount.type}</p>
                          <p className="font-bold text-sm text-gray-900 mt-0.5">{discount.value}</p>
                        </div>
                      </td>
                      <td className="py-4">
                        <Badge className={`${statusColors[discount.status as keyof typeof statusColors]} status-badge capitalize text-xs px-3 py-1 rounded-full border`}>
                          {discount.status}
                        </Badge>
                      </td>
                      <td className="py-4">
                        <div className="space-y-2 min-w-[120px]">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-gray-900">{discount.used}</span>
                            <span className="text-gray-500">/ {discount.limit}</span>
                          </div>
                          <Progress
                            value={usagePercentage}
                            className="h-2 bg-gray-100"
                            style={{
                              ['--progress-background' as any]: 'linear-gradient(90deg, #17A2B8, #2C5F7C)'
                            }}
                          />
                          <p className="text-xs text-gray-500 text-right">{usagePercentage.toFixed(0)}%</p>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="space-y-1.5">
                          <div className="flex items-center text-xs text-gray-600">
                            <Calendar className="h-3.5 w-3.5 mr-1.5 text-[#17A2B8]" />
                            <span>{discount.startDate}</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-600">
                            <Calendar className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                            <span>{discount.endDate}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 font-semibold text-gray-900 text-base">{discount.revenue}</td>
                      <td className="py-4 pr-6">
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
                              <span className="text-gray-700 text-sm font-medium">Edit Campaign</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="rounded-lg cursor-pointer hover:bg-gray-50 focus:bg-gray-50 py-2.5">
                              <Copy className="mr-3 h-4 w-4 text-gray-600" />
                              <span className="text-gray-700 text-sm font-medium">Duplicate</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="rounded-lg cursor-pointer hover:bg-red-50 focus:bg-red-50 py-2.5">
                              <Trash2 className="mr-3 h-4 w-4 text-red-600" />
                              <span className="text-red-600 text-sm font-medium">Delete Campaign</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}