"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Search, Filter, Download, Plus, Grid, List } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import ProductDialog from "./products-dialogue"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import ImportProductsDialog from "./ImportProductsDialog"

export function ProductsHeader() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [open, setOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      {/* Left section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Products</h1>
        <p className="text-muted-foreground">
          Manage your product inventory and catalog
        </p>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10 w-64 glass border-border/30 focus:border-primary/50"
          />
        </div>

        {/* View Toggle */}
        <div className="flex items-center border border-border/30 rounded-lg p-1 glass">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className="h-8 w-8 p-0"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
            className="h-8 w-8 p-0"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>

        {/* Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="glass border-border/30 bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-background/95 backdrop-blur-sm border z-50"
            align="end"
            sideOffset={5}
          >
            <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>All Products</DropdownMenuItem>
            <DropdownMenuItem>Electronics</DropdownMenuItem>
            <DropdownMenuItem>Fashion</DropdownMenuItem>
            <DropdownMenuItem>Home & Garden</DropdownMenuItem>
            <DropdownMenuItem>Sports</DropdownMenuItem>
            <DropdownMenuItem>Books</DropdownMenuItem>
          </DropdownMenuContent>


        </DropdownMenu>

        {/* Export */}
        <Button
          variant="outline"
          className="glass border-border/30 bg-transparent"
        >
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>

        {/* Add Product Dialog */}
        <ProductDialog />
        <ImportProductsDialog />
      </div>
    </div >
  )
}

