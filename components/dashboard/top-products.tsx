"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const topProducts = [
  {
    name: "Wireless Headphones",
    sales: 1234,
    revenue: "$24,680",
    progress: 85,
    category: "Electronics",
  },
  {
    name: "Smart Watch",
    sales: 987,
    revenue: "$19,740",
    progress: 72,
    category: "Electronics",
  },
  {
    name: "Running Shoes",
    sales: 756,
    revenue: "$15,120",
    progress: 58,
    category: "Fashion",
  },
  {
    name: "Coffee Maker",
    sales: 543,
    revenue: "$10,860",
    progress: 42,
    category: "Home",
  },
  {
    name: "Yoga Mat",
    sales: 432,
    revenue: "$8,640",
    progress: 35,
    category: "Sports",
  },
]

export function TopProducts() {
  return (
    <Card className="glass animate-fade-in">
      <CardHeader>
        <CardTitle className="text-foreground">Top Products</CardTitle>
        <CardDescription className="text-muted-foreground">Best performing products this month</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {topProducts.map((product, index) => (
          <div
            key={product.name}
            className="flex items-center justify-between p-3 rounded-lg glass-strong animate-slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-foreground">{product.name}</h4>
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{product.sales} sold</span>
                <span className="font-medium text-primary">{product.revenue}</span>
              </div>
              <Progress value={product.progress} className="h-2" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
