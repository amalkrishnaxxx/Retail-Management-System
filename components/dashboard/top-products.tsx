"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, TrendingUp, Package } from "lucide-react"

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

const getRankColor = (index: number) => {
  switch (index) {
    case 0: return "from-yellow-400 to-amber-500"
    case 1: return "from-slate-300 to-slate-400"
    case 2: return "from-orange-300 to-amber-600"
    default: return "from-teal-400 to-teal-600"
  }
}

const getRankIcon = (index: number) => {
  if (index < 3) {
    return <Trophy className="w-4 h-4 text-white" />
  }
  return <span className="text-white text-xs font-bold">{index + 1}</span>
}

export function TopProducts() {
  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-sky-400/10 to-transparent rounded-full blur-3xl" />

      <CardHeader className="relative z-10 space-y-3 pb-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-sky-700 bg-clip-text text-transparent">
              Top Products
            </CardTitle>
            <CardDescription className="text-slate-600 text-sm">
              Best performing products this month
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <div className="p-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 transition-colors duration-200">
              <Trophy className="w-4 h-4 text-teal-600" />
            </div>
            <div className="p-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 transition-colors duration-200">
              <TrendingUp className="w-4 h-4 text-sky-700" />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 space-y-3">
        {topProducts.map((product, index) => (
          <div
            key={product.name}
            className="group relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/60 hover:border-teal-300 hover:shadow-md transition-all duration-300 p-4"
            style={{
              animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative flex items-start gap-4">
              {/* Rank Badge */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${getRankColor(index)} shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                {getRankIcon(index)}
              </div>

              <div className="flex-1 space-y-3 min-w-0">
                {/* Product Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-800 group-hover:text-teal-700 transition-colors duration-200 truncate">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Package className="w-3 h-3 text-slate-400" />
                      <span className="text-xs text-slate-500">{product.sales} sold</span>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="flex-shrink-0 text-xs bg-teal-500/10 text-teal-700 border-teal-200 hover:bg-teal-500/20 transition-colors duration-200"
                  >
                    {product.category}
                  </Badge>
                </div>

                {/* Progress Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-600">Performance</span>
                    <span className="text-sm font-bold bg-gradient-to-r from-teal-600 to-sky-700 bg-clip-text text-transparent">
                      {product.revenue}
                    </span>
                  </div>

                  {/* Custom Progress Bar */}
                  <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-500 to-sky-600 rounded-full transition-all duration-1000 ease-out shadow-sm"
                      style={{
                        width: `${product.progress}%`,
                        animationDelay: `${index * 0.1 + 0.3}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{product.progress}% of target</span>
                    {product.progress >= 70 && (
                      <span className="text-xs font-medium text-teal-600 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        High demand
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </Card>
  )
}