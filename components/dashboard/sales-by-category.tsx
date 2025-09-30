"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { ShoppingBag, TrendingUp } from "lucide-react"

const data = [
  { name: "Electronics", value: 35, color: "#14b8a6" },
  { name: "Fashion", value: 25, color: "#0891b2" },
  { name: "Home & Garden", value: 20, color: "#0369a1" },
  { name: "Sports", value: 12, color: "#0c4a6e" },
  { name: "Books", value: 8, color: "#67e8f9" },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 shadow-lg">
        <p className="font-semibold text-slate-800 mb-1">{payload[0].name}</p>
        <p className="text-sm text-slate-600">
          <span className="font-medium">{payload[0].value}%</span> of total sales
        </p>
      </div>
    )
  }
  return null
}

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180)
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180)

  if (percent < 0.05) return null

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="font-semibold text-sm"
      style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export function SalesByCategory() {
  const totalValue = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-sky-400/10 to-transparent rounded-full blur-3xl" />

      <CardHeader className="relative z-10 space-y-3 pb-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-sky-700 bg-clip-text text-transparent">
              Sales by Category
            </CardTitle>
            <CardDescription className="text-slate-600 text-sm">
              Distribution of sales across product categories
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <div className="p-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 transition-colors duration-200">
              <ShoppingBag className="w-4 h-4 text-teal-600" />
            </div>
            <div className="p-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 transition-colors duration-200">
              <TrendingUp className="w-4 h-4 text-sky-700" />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="rounded-xl bg-white/50 backdrop-blur-sm p-4 border border-slate-200/60">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <defs>
                {data.map((entry, index) => (
                  <filter key={`shadow-${index}`} id={`shadow-${index}`}>
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.2" />
                  </filter>
                ))}
              </defs>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={110}
                paddingAngle={3}
                dataKey="value"
                label={CustomLabel}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    style={{
                      filter: `url(#shadow-${index})`,
                      transition: 'all 0.3s ease'
                    }}
                    className="hover:opacity-90 cursor-pointer"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              {/* <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                iconSize={10}
                wrapperStyle={{
                  fontSize: "13px",
                  color: "#475569",
                  fontWeight: 500,
                  paddingTop: "20px"
                }}
                formatter={(value, entry: any) => (
                  <span className="text-slate-700 hover:text-teal-600 transition-colors duration-200 cursor-pointer">
                    {value} ({entry.payload.value}%)
                  </span>
                )}
              /> */}
            </PieChart>
          </ResponsiveContainer>

          {/* Center statistic */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <div className="text-3xl font-bold bg-gradient-to-br from-teal-600 to-sky-700 bg-clip-text text-transparent">
              {totalValue}%
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">Total</div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-5 gap-2 mt-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="text-center p-2 rounded-lg bg-white/60 border border-slate-200/60 hover:border-teal-300 hover:shadow-sm transition-all duration-200 cursor-pointer group"
            >
              <div
                className="w-3 h-3 rounded-full mx-auto mb-1 group-hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: item.color }}
              />
              <div className="text-lg font-bold text-slate-800">{item.value}%</div>
              <div className="text-[10px] text-slate-500 font-medium truncate">{item.name}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}