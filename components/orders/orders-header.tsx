"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, Plus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function OrdersHeader() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold text-white">Orders</h1>
          <p className="text-slate-300 text-base">Manage and track all customer orders</p>
        </div>

        <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
          {/* Search */}
          <div className="relative group">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-hover:text-teal-400" />
            <Input
              placeholder="Search orders..."
              className="pl-10 w-64 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-300 focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30 transition-all duration-200 hover:bg-white/15"
            />
          </div>

          {/* Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0D4C6D] border-white/20 text-white backdrop-blur-xl" align="end">
              <DropdownMenuLabel className="text-teal-300">Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/20" />
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white cursor-pointer">All Orders</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white cursor-pointer">Pending</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white cursor-pointer">Processing</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white cursor-pointer">Shipped</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white cursor-pointer">Delivered</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white cursor-pointer">Cancelled</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Export */}
          <Button
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>

          {/* Add Order */}
          <Button className="bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200">
            <Plus className="h-4 w-4 mr-2" />
            New Order
          </Button>
        </div>
      </div>
    </div>
  )
}