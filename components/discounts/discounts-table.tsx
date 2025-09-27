"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, Copy, Trash2, Calendar } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
  active: "bg-green-500/20 text-green-400 border-green-500/30",
  scheduled: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  expired: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  draft: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
}

export function DiscountsTable() {
  return (
    <Card className="glass animate-fade-in border-border/30">
      <CardHeader>
        <CardTitle className="text-foreground">Discount Campaigns</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border/30 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/30 hover:bg-muted/50">
                <TableHead className="text-muted-foreground">Campaign</TableHead>
                <TableHead className="text-muted-foreground">Code</TableHead>
                <TableHead className="text-muted-foreground">Type & Value</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Usage</TableHead>
                <TableHead className="text-muted-foreground">Period</TableHead>
                <TableHead className="text-muted-foreground">Revenue</TableHead>
                <TableHead className="text-muted-foreground w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {discounts.map((discount, index) => {
                const usagePercentage = (discount.used / discount.limit) * 100
                return (
                  <TableRow
                    key={discount.id}
                    className="border-border/30 hover:bg-muted/30 animate-slide-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground">{discount.name}</p>
                        <p className="text-sm text-muted-foreground">Campaign #{discount.id}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <code className="px-2 py-1 bg-muted/50 rounded text-sm font-mono text-foreground">
                          {discount.code}
                        </code>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm text-foreground">{discount.type}</p>
                        <p className="font-medium text-primary">{discount.value}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusColors[discount.status as keyof typeof statusColors]}>
                        {discount.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-foreground">{discount.used}</span>
                          <span className="text-muted-foreground">/ {discount.limit}</span>
                        </div>
                        <Progress value={usagePercentage} className="h-2" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {discount.startDate}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {discount.endDate}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-primary">{discount.revenue}</TableCell>
                    <TableCell>
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
                            Edit Campaign
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Campaign
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
