"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash2, Eye } from "lucide-react"

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    category: "Electronics",
    price: "$199.99",
    stock: 45,
    status: "active",
    image: "/wireless-headphones.png",
  },
  {
    id: "2",
    name: "Smart Watch",
    category: "Electronics",
    price: "$299.99",
    stock: 23,
    status: "active",
    image: "/smartwatch-lifestyle.png",
  },
  {
    id: "3",
    name: "Running Shoes",
    category: "Fashion",
    price: "$129.99",
    stock: 67,
    status: "active",
    image: "/running-shoes.jpg",
  },
  {
    id: "4",
    name: "Coffee Maker",
    category: "Home",
    price: "$89.99",
    stock: 12,
    status: "low_stock",
    image: "/modern-coffee-maker.png",
  },
  {
    id: "5",
    name: "Yoga Mat",
    category: "Sports",
    price: "$39.99",
    stock: 89,
    status: "active",
    image: "/rolled-yoga-mat.png",
  },
  {
    id: "6",
    name: "Gaming Mouse",
    category: "Electronics",
    price: "$79.99",
    stock: 0,
    status: "out_of_stock",
    image: "/gaming-mouse.png",
  },
]

const statusColors = {
  active: "bg-green-500/20 text-green-400 border-green-500/30",
  low_stock: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  out_of_stock: "bg-red-500/20 text-red-400 border-red-500/30",
}

const statusLabels = {
  active: "Active",
  low_stock: "Low Stock",
  out_of_stock: "Out of Stock",
}

export function ProductsGrid() {
  return (
    <Card className="glass animate-fade-in border-border/30">
      <CardHeader>
        <h2 className="text-xl font-semibold text-foreground">Product Catalog</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="glass-strong hover:glass transition-all duration-300 hover:scale-105 animate-scale-in border-border/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4">
                <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-muted/20">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium text-foreground line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
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
                          Edit Product
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Product
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Badge className={statusColors[product.status as keyof typeof statusColors]}>
                      {statusLabels[product.status as keyof typeof statusLabels]}
                    </Badge>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Stock: <span className="font-medium text-foreground">{product.stock} units</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
