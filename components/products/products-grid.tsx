"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash2, Eye, Package, Grid3x3 } from "lucide-react"

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
  active: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20",
  low_stock: "bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20",
  out_of_stock: "bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-500/20",
}

const statusLabels = {
  active: "Active",
  low_stock: "Low Stock",
  out_of_stock: "Out of Stock",
}

export function ProductsGrid() {
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
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.4s ease-out backwards;
        }
        
        .product-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -4px rgba(23, 162, 184, 0.12);
        }
        
        .product-image-wrapper {
          overflow: hidden;
          position: relative;
        }
        
        .product-image {
          transition: transform 0.4s ease;
        }
        
        .product-card:hover .product-image {
          transform: scale(1.08);
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
        
        .price-tag {
          background: linear-gradient(135deg, #17A2B8 0%, #2C5F7C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden animate-fade-in">
        <CardHeader className="bg-gradient-to-r from-[#17A2B8]/5 to-[#2C5F7C]/5 border-b border-gray-100 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-[#17A2B8] to-[#2C5F7C] rounded-xl shadow-md">
                <Grid3x3 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Product Catalog</h2>
                <p className="text-sm text-gray-500 mt-0.5">Manage your product inventory</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Package className="h-4 w-4 text-[#17A2B8]" />
              <span className="text-gray-600 font-medium">{products.length} products</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="product-card border border-gray-100 shadow-sm hover:shadow-md bg-white rounded-xl overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="product-image-wrapper aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="product-image w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1 flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm leading-tight">{product.name}</h3>
                        <p className="text-xs text-gray-500 font-medium">{product.category}</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0 action-button rounded-lg hover:bg-[#17A2B8]/10 flex-shrink-0">
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
                            <span className="text-gray-700 text-sm font-medium">Edit Product</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="rounded-lg cursor-pointer hover:bg-red-50 focus:bg-red-50 py-2.5">
                            <Trash2 className="mr-3 h-4 w-4 text-red-600" />
                            <span className="text-red-600 text-sm font-medium">Delete Product</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-lg font-bold price-tag">{product.price}</span>
                      <Badge className={`${statusColors[product.status as keyof typeof statusColors]} status-badge text-xs px-2.5 py-0.5 rounded-full border`}>
                        {statusLabels[product.status as keyof typeof statusLabels]}
                      </Badge>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Stock</span>
                        <span className="text-sm font-semibold text-gray-900">{product.stock} units</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}