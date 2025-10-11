import React, { useState } from 'react';
import { Plus, Tag, Percent, Calendar, Package } from 'lucide-react';
import { Button } from '../ui/button';

const DiscountDialog: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [snackbar, setSnackbar] = useState(false);

    // Form state
    const [discountCode, setDiscountCode] = useState('');
    const [description, setDescription] = useState('');
    const [discountType, setDiscountType] = useState('');
    const [flatAmount, setFlatAmount] = useState<number | ''>('');
    const [percentageAmount, setPercentageAmount] = useState<number | ''>('');
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSave = () => {
        // Here you can add your API call to save the discount

        // Show snackbar
        setSnackbar(true);
        setTimeout(() => setSnackbar(false), 3000);

        // Close dialog
        setOpen(false);

        // Reset form (optional)
        // resetForm();
    };

    const resetForm = () => {
        setDiscountCode('');
        setDescription('');
        setDiscountType('');
        setFlatAmount('');
        setPercentageAmount('');
        setCategory('');
        setStartDate('');
        setEndDate('');
    };

    return (
        <>
            <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => setOpen(true)}
            >
                <Percent className="h-4 w-4 mr-2" />
                Create Offer
            </Button>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white text-black rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="px-8 py-6 border-b border-gray-200">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">Create New Discount</h2>
                                <p className="text-sm text-gray-500 mt-1">Set up a new discount for your products</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="overflow-y-auto flex-1 px-8 py-6">
                            <div className="space-y-8">
                                {/* Discount Code */}
                                <section>
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-blue-50 rounded-lg">
                                            <Tag className="h-5 w-5 text-[#0D4C6D]" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Discount Code</h3>
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            value={discountCode}
                                            onChange={(e) => setDiscountCode(e.target.value)}
                                            placeholder="SUMMER2024"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                        />
                                        <p className="text-xs text-gray-500">Enter a unique code for this discount.</p>
                                    </div>
                                </section>

                                {/* Description */}
                                <section className="pt-2">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Description</label>
                                        <textarea
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Discount for summer collection"
                                            rows={3}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all resize-none"
                                        ></textarea>
                                        <p className="text-xs text-gray-500">Provide a brief description of the discount.</p>
                                    </div>
                                </section>

                                {/* Discount Type & Amount */}
                                <section className="pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-green-50 rounded-lg">
                                            <Percent className="h-5 w-5 text-green-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Discount Details</h3>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Discount Type</label>
                                            <select
                                                value={discountType}
                                                onChange={(e) => setDiscountType(e.target.value)}
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all bg-white text-black"
                                            >
                                                <option value="">Flat Discount</option>
                                                <option value="flat">Flat Discount</option>
                                                <option value="percentage">Percentage Discount</option>
                                            </select>
                                            <p className="text-xs text-gray-500">Choose the type of discount to apply.</p>
                                        </div>

                                        {discountType === 'percentage' ? (
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700">Percentage Discount Amount</label>
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        step="0.01"
                                                        value={percentageAmount}
                                                        onChange={(e) => setPercentageAmount(e.target.value ? parseFloat(e.target.value) : '')}
                                                        placeholder="0"
                                                        className="w-full pl-4 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                    />
                                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                                                </div>
                                                <p className="text-xs text-gray-500">Enter the percentage discount amount.</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700">Flat Discount Amount</label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                                    <input
                                                        type="number"
                                                        step="0.01"
                                                        value={flatAmount}
                                                        onChange={(e) => setFlatAmount(e.target.value ? parseFloat(e.target.value) : '')}
                                                        placeholder="0"
                                                        className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                    />
                                                </div>
                                                <p className="text-xs text-gray-500">Enter the flat discount amount.</p>
                                            </div>
                                        )}
                                    </div>
                                </section>

                                {/* Category */}
                                <section className="pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-purple-50 rounded-lg">
                                            <Package className="h-5 w-5 text-purple-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Category</h3>
                                    </div>
                                    <div className="space-y-2">
                                        <select
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all bg-white text-black"
                                        >
                                            <option value="">Select a category</option>
                                            <option value="grocery">Grocery</option>
                                            <option value="beverages">Beverages</option>
                                            <option value="snacks">Snacks</option>
                                            <option value="personal-care">Personal Care</option>
                                            <option value="household">Household</option>
                                            <option value="all">All Categories</option>
                                        </select>
                                        <p className="text-xs text-gray-500">Choose the category for which this discount applies.</p>
                                    </div>
                                </section>

                                {/* Date Range */}
                                <section className="pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-orange-50 rounded-lg">
                                            <Calendar className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Validity Period</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                            <input
                                                type="date"
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                            <p className="text-xs text-gray-500">Choose the start date for the discount.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">End Date</label>
                                            <input
                                                type="date"
                                                value={endDate}
                                                onChange={(e) => setEndDate(e.target.value)}
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                            <p className="text-xs text-gray-500">Choose the end date for the discount.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-8 py-5 border-t border-gray-200 flex justify-end gap-3 bg-gray-50">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-medium transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleSave}
                                className="px-6 py-2.5 bg-[#00A6A6] hover:bg-[#009090] text-white rounded-lg font-medium transition-colors"
                            >
                                Create Discount
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {snackbar && (
                <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
                    Discount created successfully!
                </div>
            )}
        </>
    );
};

export default DiscountDialog;