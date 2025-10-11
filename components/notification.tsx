"use client"

import React, { useState } from "react"
import { AlertTriangle, Bell, CheckCircle, Cog, Gift, X } from "lucide-react"
import { Button } from "./ui/button"

const notifications = [
    {
        id: 1,
        type: "order",
        title: "Order #1234 has been shipped",
        description: "The order for John Doe has been shipped via FedEx. Tracking ID: 7890ABCD.",
        time: "2 mins ago",
        color: "from-[#E0FAF7]/30 to-white",
        icon: <CheckCircle className="text-[#00A6A6] h-6 w-6 mt-1" />,
    },
    {
        id: 2,
        type: "stock",
        title: 'Product "X" stock is low',
        description: "Only 5 items left in the warehouse. Consider restocking to avoid delays.",
        time: "10 mins ago",
        color: "from-[#D6FAF9]/30 to-white",
        icon: <AlertTriangle className="text-[#00B8B8] h-6 w-6 mt-1" />,
    },
    {
        id: 3,
        type: "offer",
        title: "New Offer: 10% off on Product 'Y'",
        description: "Offer valid from 12th Oct to 20th Oct. Promote it on your store homepage.",
        time: "30 mins ago",
        color: "from-[#E0FCFB]/30 to-white",
        icon: <Gift className="text-[#00A6A6] h-6 w-6 mt-1" />,
    },
    {
        id: 4,
        type: "system",
        title: "System Settings updated",
        description: "Changes to store preferences and tax configuration have been saved successfully.",
        time: "1 hour ago",
        color: "from-[#D9FAF7]/30 to-white",
        icon: <Cog className="text-[#00A6A6] h-6 w-6 mt-1" />,
    },
]

export default function NotificationsModal() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Trigger Button */}

            <Button
                variant="ghost"
                size="sm"
                className="relative h-10 w-10 rounded-xl text-[#F5F7FA] hover:bg-white/10 hover:scale-105 hover:text-white"
                onClick={() => setIsOpen(true)}
            >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#DC2626] opacity-75 animate-ping" />
                    <span className="relative inline-flex h-5 w-5 rounded-full bg-[#DC2626] text-[10px] font-bold text-white items-center justify-center shadow-lg">
                        3
                    </span>
                </span>
            </Button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-sm">
                    <div className="relative w-full max-w-8xl min-h-[85vh] mr-4 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden -translate-y-[-370px]">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#00A6A6] to-[#008080] px-8 py-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <AlertTriangle className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Notifications</h2>
                                    <p className="text-white/90 text-sm mt-0.5">
                                        Stay updated on orders, stock, offers, and system alerts
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <X className="h-6 w-6 text-white" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-8 bg-white">
                            {notifications.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {notifications.map((notif) => (
                                        <div
                                            key={notif.id}
                                            className={`bg-gradient-to-r ${notif.color} rounded-xl p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer`}
                                        >
                                            <div className="flex items-start gap-3">
                                                {notif.icon}
                                                <div>
                                                    <h3 className="text-[#083344] font-semibold">{notif.title}</h3>
                                                    <p className="text-[#083344]/70 text-sm mt-1">{notif.description}</p>
                                                    <p className="text-[#083344]/60 text-xs mt-1">{notif.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                        <span className="text-3xl">✓</span>
                                    </div>
                                    <p className="text-lg font-medium text-slate-700">No notifications</p>
                                    <p className="text-sm text-slate-500 mt-1">You're all caught up</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="border-t border-slate-200 bg-white px-8 py-4 flex items-center justify-between">
                            <p className="text-xs text-slate-500">
                                Last updated: {new Date().toLocaleDateString()} at{" "}
                                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-6 py-2 bg-[#00A6A6] hover:bg-[#008080] text-white rounded-lg font-medium transition-colors duration-200"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
