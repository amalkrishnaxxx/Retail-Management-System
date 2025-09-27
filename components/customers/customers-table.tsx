"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, Mail, Phone } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
  active: "bg-green-500/20 text-green-400 border-green-500/30",
  inactive: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  new: "bg-blue-500/20 text-blue-400 border-blue-500/30",
}

const tierColors = {
  VIP: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Regular: "bg-blue-500/20 text-blue-400 border-blue-500/30",
}

export function CustomersTable() {
  return (
    <Card className="glass animate-fade-in border-border/30">
      <CardHeader>
        <CardTitle className="text-foreground">Customer Directory</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border/30 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/30 hover:bg-muted/50">
                <TableHead className="text-muted-foreground">Customer</TableHead>
                <TableHead className="text-muted-foreground">Contact</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Tier</TableHead>
                <TableHead className="text-muted-foreground">Orders</TableHead>
                <TableHead className="text-muted-foreground">Total Spent</TableHead>
                <TableHead className="text-muted-foreground">Last Order</TableHead>
                <TableHead className="text-muted-foreground w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer, index) => (
                <TableRow
                  key={customer.id}
                  className="border-border/30 hover:bg-muted/30 animate-slide-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                        <AvatarFallback>
                          {customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{customer.name}</p>
                        <p className="text-sm text-muted-foreground">Joined {customer.joinDate}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-foreground">
                        <Mail className="h-3 w-3 mr-2 text-muted-foreground" />
                        {customer.email}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Phone className="h-3 w-3 mr-2" />
                        {customer.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[customer.status as keyof typeof statusColors]}>
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={tierColors[customer.tier as keyof typeof tierColors]}>{customer.tier}</Badge>
                  </TableCell>
                  <TableCell className="text-foreground">{customer.orders}</TableCell>
                  <TableCell className="font-medium text-primary">{customer.totalSpent}</TableCell>
                  <TableCell className="text-muted-foreground">{customer.lastOrder}</TableCell>
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
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Customer
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
