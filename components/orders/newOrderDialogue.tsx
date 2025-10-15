"use client";

import React, { useState } from "react";
import {
    Plus,
    User,
    MapPin,
    CreditCard,
    ShoppingCart,
    Calendar,
    Receipt,
    Info,
} from "lucide-react";
import { Button } from "../ui/button";

const NewOrderDialog: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [snackbar, setSnackbar] = useState(false);

    // Order Fields
    const [orderId, setOrderId] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [status, setStatus] = useState("Placed");
    const [expectedDelivery, setExpectedDelivery] = useState("");

    // Customer Fields
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");

    // Shipping Fields
    const [addressLine, setAddressLine] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");

    // Payment
    const [paymentMethod, setPaymentMethod] = useState("Credit Card");
    const [cardLast4, setCardLast4] = useState("");

    // Items
    const [items, setItems] = useState([{ name: "", quantity: 1, price: "" }]);

    // Totals
    const [subtotal, setSubtotal] = useState("");
    const [tax, setTax] = useState("");
    const [shipping, setShipping] = useState("");
    const [total, setTotal] = useState("");

    const [notes, setNotes] = useState("");

    const handleAddItem = () => {
        setItems([...items, { name: "", quantity: 1, price: "" }]);
    };

    const handleItemChange = (index: number, field: string, value: any) => {
        const updatedItems = [...items];
        updatedItems[index] = { ...updatedItems[index], [field]: value };
        setItems(updatedItems);
    };

    const handleSave = () => {
        // Save logic here (e.g. API call)
        setSnackbar(true);
        setTimeout(() => setSnackbar(false), 3000);
        setOpen(false);
    };

    return (
        <>
            <Button
                className="bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200"
                onClick={() => setOpen(true)}
            >
                <Plus className="h-4 w-4" /> Add Order
            </Button>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white text-black rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="px-8 py-6 border-b border-gray-200">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    Create New Order
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    Fill in the details to create a new order
                                </p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="overflow-y-auto flex-1 px-8 py-6 space-y-10">
                            {/* Order Details */}
                            <section>
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2 bg-blue-50 rounded-lg">
                                        <Receipt className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Order Details
                                    </h3>
                                </div>

                                <div className="grid grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Order ID
                                        </label>
                                        <input
                                            type="text"
                                            value={orderId}
                                            onChange={(e) => setOrderId(e.target.value)}
                                            placeholder="Auto or manual ID"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Order Date
                                        </label>
                                        <input
                                            type="date"
                                            value={orderDate}
                                            onChange={(e) => setOrderDate(e.target.value)}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Status
                                        </label>
                                        <select
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all"
                                        >
                                            <option>Placed</option>
                                            <option>Processing</option>
                                            <option>Shipped</option>
                                            <option>Out for Delivery</option>
                                            <option>Delivered</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2 col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Expected Delivery
                                        </label>
                                        <input
                                            type="date"
                                            value={expectedDelivery}
                                            onChange={(e) => setExpectedDelivery(e.target.value)}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Customer Details */}
                            <section className="pt-8 border-t border-gray-100">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2 bg-green-50 rounded-lg">
                                        <User className="h-5 w-5 text-green-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Customer Information
                                    </h3>
                                </div>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            value={customerName}
                                            onChange={(e) => setCustomerName(e.target.value)}
                                            placeholder="Customer name"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={customerEmail}
                                            onChange={(e) => setCustomerEmail(e.target.value)}
                                            placeholder="example@email.com"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            value={customerPhone}
                                            onChange={(e) => setCustomerPhone(e.target.value)}
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Shipping */}
                            <section className="pt-8 border-t border-gray-100">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2 bg-purple-50 rounded-lg">
                                        <MapPin className="h-5 w-5 text-purple-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Shipping Address
                                    </h3>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-2 space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Address Line
                                        </label>
                                        <input
                                            type="text"
                                            value={addressLine}
                                            onChange={(e) => setAddressLine(e.target.value)}
                                            placeholder="Street address, Apartment, etc."
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            placeholder="City"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                            placeholder="State"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Postal Code
                                        </label>
                                        <input
                                            type="text"
                                            value={postalCode}
                                            onChange={(e) => setPostalCode(e.target.value)}
                                            placeholder="ZIP / PIN code"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            placeholder="Country"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Order Items */}
                            <section className="pt-8 border-t border-gray-100">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-orange-50 rounded-lg">
                                            <ShoppingCart className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Order Items
                                        </h3>
                                    </div>
                                    <Button
                                        className="bg-[#0D4C6D] hover:bg-[#0b3b54] text-white"
                                        onClick={handleAddItem}
                                    >
                                        <Plus className="h-4 w-4" /> Add Item
                                    </Button>
                                </div>

                                <div className="space-y-4">
                                    {items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-3 gap-6 bg-gray-50 p-4 rounded-lg"
                                        >
                                            <input
                                                type="text"
                                                value={item.name}
                                                onChange={(e) =>
                                                    handleItemChange(index, "name", e.target.value)
                                                }
                                                placeholder="Item name"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D]"
                                            />
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    handleItemChange(index, "quantity", e.target.value)
                                                }
                                                placeholder="Qty"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D]"
                                            />
                                            <input
                                                type="number"
                                                value={item.price}
                                                onChange={(e) =>
                                                    handleItemChange(index, "price", e.target.value)
                                                }
                                                placeholder="Price"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D]"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Payment & Totals */}
                            <section className="pt-8 border-t border-gray-100">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2 bg-yellow-50 rounded-lg">
                                        <CreditCard className="h-5 w-5 text-yellow-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Payment & Totals
                                    </h3>
                                </div>
                                <div className="grid grid-cols-4 gap-6">
                                    <div className="col-span-2 space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Payment Method
                                        </label>
                                        <select
                                            value={paymentMethod}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D]"
                                        >
                                            <option>Credit Card</option>
                                            <option>Debit Card</option>
                                            <option>UPI</option>
                                            <option>Cash on Delivery</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Card Last 4 Digits
                                        </label>
                                        <input
                                            type="text"
                                            value={cardLast4}
                                            onChange={(e) => setCardLast4(e.target.value)}
                                            placeholder="4242"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D]"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-6 mt-6">
                                    <input
                                        type="number"
                                        placeholder="Subtotal"
                                        value={subtotal}
                                        onChange={(e) => setSubtotal(e.target.value)}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D]"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Tax"
                                        value={tax}
                                        onChange={(e) => setTax(e.target.value)}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D]"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Shipping"
                                        value={shipping}
                                        onChange={(e) => setShipping(e.target.value)}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D]"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Total"
                                        value={total}
                                        onChange={(e) => setTotal(e.target.value)}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D]"
                                    />
                                </div>
                            </section>

                            {/* Notes */}
                            <section className="pt-8 border-t border-gray-100">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2 bg-teal-50 rounded-lg">
                                        <Info className="h-5 w-5 text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Additional Notes
                                    </h3>
                                </div>
                                <textarea
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Any special instructions or comments..."
                                    rows={3}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] outline-none transition-all resize-none"
                                />
                            </section>
                        </div>

                        {/* Footer */}
                        <div className="px-8 py-5 border-t border-gray-200 flex justify-end gap-3 bg-gray-50">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-5 py-2.5 rounded-lg bg-[#0D4C6D] text-white hover:bg-[#0b3b54] transition-all shadow-md hover:shadow-lg"
                            >
                                Save Order
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {snackbar && (
                <div className="fixed bottom-5 right-5 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg">
                    ✅ Order created successfully!
                </div>
            )}
        </>
    );
};

export default NewOrderDialog;
