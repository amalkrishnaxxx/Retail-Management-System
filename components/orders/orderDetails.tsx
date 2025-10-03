"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Package,
    TrendingUp,
    MapPin,
    CreditCard,
    Truck,
    CheckCircle,
    Clock,
    ArrowLeft,
    Mail,
    Phone,
    Calendar,
    DollarSign
} from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

interface OrderDetailsPageProps {
    onBack: () => void
}

const orderDetails = {
    id: "#3210",
    status: "delivered",
    date: "2024-01-15",
    deliveredDate: "2024-01-18",
    customer: {
        name: "Alice Johnson",
        email: "alice@example.com",
        phone: "+1 (555) 123-4567",
        avatar: "/diverse-user-avatars.png",
    },
    shippingAddress: {
        street: "123 Main Street, Apt 4B",
        city: "San Francisco",
        state: "CA",
        zip: "94102",
        country: "United States"
    },
    billingAddress: {
        street: "123 Main Street, Apt 4B",
        city: "San Francisco",
        state: "CA",
        zip: "94102",
        country: "United States"
    },
    payment: {
        method: "Credit Card",
        last4: "4242",
        brand: "Visa"
    },
    items: [
        {
            id: 1,
            name: "Wireless Headphones",
            description: "Premium noise-canceling headphones",
            quantity: 1,
            price: 249.00,
            image: "/placeholder.svg"
        },
        {
            id: 2,
            name: "Phone Case",
            description: "Protective silicone case",
            quantity: 1,
            price: 50.00,
            image: "/placeholder.svg"
        }
    ],
    subtotal: 299.00,
    shipping: 0.00,
    tax: 26.91,
    total: 325.91,
    timeline: [
        { status: "Order Placed", date: "Jan 15, 2024 10:30 AM", completed: true },
        { status: "Processing", date: "Jan 15, 2024 2:45 PM", completed: true },
        { status: "Shipped", date: "Jan 16, 2024 9:20 AM", completed: true },
        { status: "Out for Delivery", date: "Jan 18, 2024 7:15 AM", completed: true },
        { status: "Delivered", date: "Jan 18, 2024 3:30 PM", completed: true }
    ]
}

const statusColors = {
    pending: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    processing: "bg-[#17A2B8]/10 text-[#17A2B8] border-[#17A2B8]/20",
    shipped: "bg-[#2C5F7C]/10 text-[#2C5F7C] border-[#2C5F7C]/20",
    delivered: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    cancelled: "bg-red-500/10 text-red-600 border-red-500/20",
}

export default function OrderDetailsPage({ onBack }: OrderDetailsPageProps) {

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0D4C6D] to-[#083344] p-6">
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        .animate-slide-in {
          animation: slideIn 0.4s ease-out backwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.4s ease-out backwards;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
      `}</style>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 animate-fade-in">
                    <Button onClick={onBack}>Back to Orders</Button>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2 pt-4">Order {orderDetails.id}</h1>
                            <p className="text-gray-300">Placed on {orderDetails.date}</p>
                        </div>
                        <Badge className={`${statusColors[orderDetails.status as keyof typeof statusColors]} capitalize text-sm px-4 py-2 rounded-full border`}>
                            {orderDetails.status}
                        </Badge>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Order Timeline */}
                        <Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden animate-scale-in card-hover">
                            <CardHeader className="bg-gradient-to-r from-[#17A2B8]/5 to-[#2C5F7C]/5 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-gradient-to-br from-[#17A2B8] to-[#2C5F7C] rounded-xl shadow-md">
                                        <Truck className="h-5 w-5 text-white" />
                                    </div>
                                    <CardTitle className="text-gray-900 text-lg font-semibold">Order Timeline</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    {orderDetails.timeline.map((event, index) => (
                                        <div key={index} className="flex items-start gap-4 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                            <div className={`mt-1 rounded-full p-1 ${event.completed ? 'bg-emerald-500' : 'bg-gray-300'}`}>
                                                <CheckCircle className="h-4 w-4 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className={`font-medium ${event.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                                                    {event.status}
                                                </p>
                                                <p className="text-sm text-gray-500">{event.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Order Items */}
                        <Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden animate-scale-in card-hover" style={{ animationDelay: '0.1s' }}>
                            <CardHeader className="bg-gradient-to-r from-[#17A2B8]/5 to-[#2C5F7C]/5 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-gradient-to-br from-[#17A2B8] to-[#2C5F7C] rounded-xl shadow-md">
                                        <Package className="h-5 w-5 text-white" />
                                    </div>
                                    <CardTitle className="text-gray-900 text-lg font-semibold">Order Items</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    {orderDetails.items.map((item, index) => (
                                        <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors animate-slide-in" style={{ animationDelay: `${(index + 5) * 0.1}s` }}>
                                            <div className="w-20 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                                                <Package className="h-8 w-8 text-[#17A2B8]" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                                <p className="text-sm text-gray-600">{item.description}</p>
                                                <p className="text-sm text-gray-500 mt-1">Quantity: {item.quantity}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold text-gray-900 text-lg">${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Order Summary */}
                                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span className="font-medium">${orderDetails.subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span className="font-medium">
                                            {orderDetails.shipping === 0 ? 'Free' : `$${orderDetails.shipping.toFixed(2)}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax</span>
                                        <span className="font-medium">${orderDetails.tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t border-gray-200">
                                        <span>Total</span>
                                        <span>${orderDetails.total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Customer Info */}
                        <Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden animate-scale-in card-hover" style={{ animationDelay: '0.2s' }}>
                            <CardHeader className="bg-gradient-to-r from-[#17A2B8]/5 to-[#2C5F7C]/5 border-b border-gray-100">
                                <CardTitle className="text-gray-900 text-lg font-semibold">Customer</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Avatar className="h-14 w-14 border-2 border-[#17A2B8]/20 shadow-sm">
                                        <AvatarImage src={orderDetails.customer.avatar || "/placeholder.svg"} alt={orderDetails.customer.name} />
                                        <AvatarFallback className="bg-gradient-to-br from-[#17A2B8] to-[#2C5F7C] text-white font-medium">
                                            {orderDetails.customer.name.split(" ").map((n) => n[0]).join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-gray-900">{orderDetails.customer.name}</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Mail className="h-4 w-4 text-[#17A2B8]" />
                                        <span className="text-gray-600">{orderDetails.customer.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Phone className="h-4 w-4 text-[#17A2B8]" />
                                        <span className="text-gray-600">{orderDetails.customer.phone}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Shipping Address */}
                        <Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden animate-scale-in card-hover" style={{ animationDelay: '0.3s' }}>
                            <CardHeader className="bg-gradient-to-r from-[#17A2B8]/5 to-[#2C5F7C]/5 border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-[#17A2B8]" />
                                    <CardTitle className="text-gray-900 text-lg font-semibold">Shipping Address</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="text-sm text-gray-600 space-y-1">
                                    <p>{orderDetails.shippingAddress.street}</p>
                                    <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zip}</p>
                                    <p>{orderDetails.shippingAddress.country}</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Payment Method */}
                        <Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden animate-scale-in card-hover" style={{ animationDelay: '0.4s' }}>
                            <CardHeader className="bg-gradient-to-r from-[#17A2B8]/5 to-[#2C5F7C]/5 border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <CreditCard className="h-5 w-5 text-[#17A2B8]" />
                                    <CardTitle className="text-gray-900 text-lg font-semibold">Payment Method</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#17A2B8] to-[#2C5F7C] rounded-lg flex items-center justify-center shadow-md">
                                        <CreditCard className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{orderDetails.payment.brand} •••• {orderDetails.payment.last4}</p>
                                        <p className="text-sm text-gray-500">{orderDetails.payment.method}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}