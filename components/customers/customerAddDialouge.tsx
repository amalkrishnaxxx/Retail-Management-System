import React, { useState } from 'react';
import { Plus, User, MapPin, CreditCard, FileText, UserPlus } from 'lucide-react';
import { Button } from '../ui/button';

const CustomerDialog: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [snackbar, setSnackbar] = useState(false);

    // Form state
    const [customerName, setCustomerName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [customerType, setCustomerType] = useState('');
    const [status, setStatus] = useState(true);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [gstNumber, setGstNumber] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [creditLimit, setCreditLimit] = useState<number | ''>('');
    const [openingBalance, setOpeningBalance] = useState<number | ''>('');
    const [notes, setNotes] = useState('');

    const handleSave = () => {
        // Here you can add your API call to save the customer

        // Show snackbar
        setSnackbar(true);
        setTimeout(() => setSnackbar(false), 3000);

        // Close dialog
        setOpen(false);

        // Reset form (optional)
        // resetForm();
    };

    const resetForm = () => {
        setCustomerName('');
        setPhone('');
        setEmail('');
        setCustomerType('');
        setStatus(true);
        setAddress('');
        setCity('');
        setState('');
        setPincode('');
        setGstNumber('');
        setPanNumber('');
        setCreditLimit('');
        setOpeningBalance('');
        setNotes('');
    };

    return (
        <>
            {/* <button
                className="px-4 py-2.5 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200 font-medium flex items-center gap-2"
                onClick={() => setOpen(true)}
            >
                <Plus className="h-4 w-4" />
                Add Customer
            </button> */}
            <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => setOpen(true)}
            >
                <UserPlus className="h-4 w-4 mr-2" />
                Add Customer
            </Button>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white text-black rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="px-8 py-6 border-b border-gray-200">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">Add New Customer</h2>
                                <p className="text-sm text-gray-500 mt-1">Fill in the customer details to add to your records</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="overflow-y-auto flex-1 px-8 py-6">
                            <div className="space-y-8">
                                {/* Basic Information */}
                                <section>
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-blue-50 rounded-lg">
                                            <User className="h-5 w-5 text-[#0D4C6D]" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Customer Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={customerName}
                                                onChange={(e) => setCustomerName(e.target.value)}
                                                placeholder="Enter customer name"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Enter phone number"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter email address"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2 col-span-2">
                                            <label className="block text-sm font-medium text-gray-700">Status</label>
                                            <div className="flex items-center h-[42px]">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="sr-only peer"
                                                        checked={status}
                                                        onChange={(e) => setStatus(e.target.checked)}
                                                    />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A6A6]"></div>
                                                    <span className="ml-3 text-sm font-medium text-gray-700">Active</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Address Information */}
                                <section className="pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-green-50 rounded-lg">
                                            <MapPin className="h-5 w-5 text-green-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Address Information</h3>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Address</label>
                                            <input
                                                type="text"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                placeholder="Street address"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700">City</label>
                                                <input
                                                    type="text"
                                                    value={city}
                                                    onChange={(e) => setCity(e.target.value)}
                                                    placeholder="City"
                                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700">State</label>
                                                <input
                                                    type="text"
                                                    value={state}
                                                    onChange={(e) => setState(e.target.value)}
                                                    placeholder="State"
                                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700">Pincode</label>
                                                <input
                                                    type="text"
                                                    value={pincode}
                                                    onChange={(e) => setPincode(e.target.value)}
                                                    placeholder="Pincode"
                                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Financial Information */}
                                <section className="pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-purple-50 rounded-lg">
                                            <CreditCard className="h-5 w-5 text-purple-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Financial Information</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">GST Number</label>
                                            <input
                                                type="text"
                                                value={gstNumber}
                                                onChange={(e) => setGstNumber(e.target.value)}
                                                placeholder="GST number"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">PAN Number</label>
                                            <input
                                                type="text"
                                                value={panNumber}
                                                onChange={(e) => setPanNumber(e.target.value)}
                                                placeholder="PAN number"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Credit Limit</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={creditLimit}
                                                    onChange={(e) => setCreditLimit(e.target.value ? parseFloat(e.target.value) : '')}
                                                    placeholder="0.00"
                                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Opening Balance</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={openingBalance}
                                                    onChange={(e) => setOpeningBalance(e.target.value ? parseFloat(e.target.value) : '')}
                                                    placeholder="0.00"
                                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Additional Information */}
                                <section className="pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-orange-50 rounded-lg">
                                            <FileText className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Notes</label>
                                            <textarea
                                                value={notes}
                                                onChange={(e) => setNotes(e.target.value)}
                                                placeholder="Additional notes about the customer..."
                                                rows={3}
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all resize-none"
                                            ></textarea>
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
                                Save Customer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {snackbar && (
                <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
                    Customer added successfully!
                </div>
            )}
        </>
    );
};

export default CustomerDialog;