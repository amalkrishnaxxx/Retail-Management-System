"use client"

import React, { useState } from "react"
import { AlertTriangle, Package, X } from "lucide-react"

// Example product data
const products = [
    {
        id: "4",
        name: "Coffee Maker",
        category: "Home",
        price: "89.99",
        stock: 12,
        status: "low_stock",
        image: "/modern-coffee-maker.png",
    },
    {
        id: "5",
        name: "Yoga Mat",
        category: "Sports",
        price: "39.99",
        stock: 9,
        status: "low_stock",
        image: "/rolled-yoga-mat.png",
    },
    {
        id: "6",
        name: "Premium Yoga Mat",
        category: "Sports",
        price: "24.99",
        stock: 8,
        status: "low_stock",
        image: "/rolled-yoga-mat.png",
    },
    {
        id: "4",
        name: "Coffee Maker",
        category: "Home",
        price: "89.99",
        stock: 12,
        status: "low_stock",
        image: "/modern-coffee-maker.png",
    },
    {
        id: "5",
        name: "Yoga Mat",
        category: "Sports",
        price: "39.99",
        stock: 9,
        status: "low_stock",
        image: "/rolled-yoga-mat.png",
    },
    {
        id: "6",
        name: "Premium Yoga Mat",
        category: "Sports",
        price: "24.99",
        stock: 8,
        status: "low_stock",
        image: "/rolled-yoga-mat.png",
    },
]

export default function LowStockButton() {
    const [isOpen, setIsOpen] = useState(false)
    const lowStockProducts = products.filter((p) => p.status === "low_stock")

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-200"
            >
                <AlertTriangle className="h-5 w-5" />
                <span>Low Stock ({lowStockProducts.length})</span>
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <AlertTriangle className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Low Stock Alert</h2>
                                    <p className="text-white/90 text-sm mt-0.5">
                                        {lowStockProducts.length} {lowStockProducts.length === 1 ? 'product needs' : 'products need'} restocking
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
                        <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
                            {lowStockProducts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {lowStockProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
                                        >
                                            {/* Product Image */}
                                            <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
                                                <img
                                                    src={product.image || "/placeholder.svg"}
                                                    alt={product.name}
                                                    className="product-image w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Product Info */}
                                            <div className="p-5">
                                                <h3 className="font-semibold text-lg text-slate-900 mb-1">
                                                    {product.name}
                                                </h3>
                                                <p className="text-sm text-slate-500 mb-4">
                                                    {product.category}
                                                </p>

                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-2xl font-bold text-slate-900">
                                                        ₹{product.price}
                                                    </span>
                                                </div>

                                                <div className="flex gap-2">
                                                    <div className="flex-1 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-center">
                                                        <p className="text-xs text-amber-600 font-medium mb-0.5">Stock</p>
                                                        <p className="text-lg font-bold text-amber-700">{product.stock}</p>
                                                    </div>
                                                    <div className="flex-1 bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-center">
                                                        <p className="text-xs text-red-600 font-medium mb-0.5">Status</p>
                                                        <p className="text-sm font-semibold text-red-700">Low Stock</p>
                                                    </div>
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
                                    <p className="text-lg font-medium text-slate-700">
                                        All Products Well Stocked
                                    </p>
                                    <p className="text-sm text-slate-500 mt-1">
                                        No items require immediate attention
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="border-t border-slate-200 bg-white px-8 py-4 flex items-center justify-between">
                            <p className="text-xs text-slate-500">
                                Last updated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors duration-200"
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