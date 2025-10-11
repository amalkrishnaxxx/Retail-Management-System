import React, { useState } from 'react';
import { Plus, Package, DollarSign, Archive, Receipt, Info } from 'lucide-react';
import { Button } from '../ui/button';
import ImportProductsDialog from './ImportProductsDialog';

const ProductDialog: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [snackbar, setSnackbar] = useState(false);

    // Form state
    const [productName, setProductName] = useState('');
    const [barcode, setBarcode] = useState('');
    const [sku, setSku] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [status, setStatus] = useState(true);
    const [purchaseCost, setPurchaseCost] = useState<number | ''>('');
    const [salePrice, setSalePrice] = useState<number | ''>('');
    const [mrp, setMrp] = useState<number | ''>('');
    const [margin, setMargin] = useState<number | ''>('');
    const [skuBasicPrice, setSkuBasicPrice] = useState<number | ''>('');
    const [landedPrice, setLandedPrice] = useState<number | ''>('');
    const [currentStock, setCurrentStock] = useState<number | ''>('');
    const [thresholdStock, setThresholdStock] = useState<number | ''>('');
    const [packSize, setPackSize] = useState('');
    const [unitsPerCase, setUnitsPerCase] = useState<number | ''>('');
    const [gst, setGst] = useState<number | ''>('');
    const [cess, setCess] = useState<number | ''>('');
    const [gstValue, setGstValue] = useState<number | ''>('');
    const [hsnCode, setHsnCode] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [distributor, setDistributor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        // Here you can also add your API call to save the product

        // Show snackbar
        setSnackbar(true);
        setTimeout(() => setSnackbar(false), 3000);

        // Close dialog
        setOpen(false);

        // Reset form (optional)
        // resetForm();
    };

    const resetForm = () => {
        setProductName('');
        setBarcode('');
        setSku('');
        setCategory('');
        setBrand('');
        setStatus(true);
        setPurchaseCost('');
        setSalePrice('');
        setMrp('');
        setMargin('');
        setSkuBasicPrice('');
        setLandedPrice('');
        setCurrentStock('');
        setThresholdStock('');
        setPackSize('');
        setUnitsPerCase('');
        setGst('');
        setCess('');
        setGstValue('');
        setHsnCode('');
        setManufacturer('');
        setDistributor('');
        setImageUrl('');
        setDescription('');
    };

    return (
        <>
            <Button
                className="bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200"
                onClick={() => setOpen(true)}
            >
                <Plus className="h-4 w-4" />
                Add Product
            </Button>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white text-black rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="px-8 py-6 border-b border-gray-200">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">Add New Product</h2>
                                <p className="text-sm text-gray-500 mt-1">Fill in the product details to add to your inventory</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="overflow-y-auto flex-1 px-8 py-6">
                            <div className="space-y-8">
                                {/* Basic Information */}
                                <section>
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-blue-50 rounded-lg">
                                            <Package className="h-5 w-5 text-[#0D4C6D]" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Product Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={productName}
                                                onChange={(e) => setProductName(e.target.value)}
                                                placeholder="Enter product name"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Barcode</label>
                                            <input
                                                type="text"
                                                value={barcode}
                                                onChange={(e) => setBarcode(e.target.value)}
                                                placeholder="Scan or enter barcode"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">SKU</label>
                                            <input
                                                type="text"
                                                value={sku}
                                                onChange={(e) => setSku(e.target.value)}
                                                placeholder="Stock keeping unit"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Category <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all bg-white text-black"
                                            >
                                                <option value="">Select category</option>
                                                <option value="grocery">Grocery</option>
                                                <option value="beverages">Beverages</option>
                                                <option value="snacks">Snacks</option>
                                                <option value="personal-care">Personal Care</option>
                                                <option value="household">Household</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Brand</label>
                                            <input
                                                type="text"
                                                value={brand}
                                                onChange={(e) => setBrand(e.target.value)}
                                                placeholder="Brand name"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Status</label>
                                            <div className="flex items-center h-[42px]">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="sr-only peer"
                                                        checked={status}
                                                        onChange={(e) => setStatus(e.target.checked)}
                                                    />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]  after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A6A6]"></div>
                                                    <span className="ml-3 text-sm font-medium text-gray-700">Active</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Pricing Information */}
                                <section className="pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-green-50 rounded-lg">
                                            <DollarSign className="h-5 w-5 text-green-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Pricing Information</h3>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Purchase Cost</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={purchaseCost}
                                                    onChange={(e) => setPurchaseCost(e.target.value ? parseFloat(e.target.value) : '')}
                                                    placeholder="0.00"
                                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Sale Price</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={salePrice}
                                                    onChange={(e) => setSalePrice(e.target.value ? parseFloat(e.target.value) : '')}
                                                    placeholder="0.00"
                                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">MRP</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={mrp}
                                                    onChange={(e) => setMrp(e.target.value ? parseFloat(e.target.value) : '')}
                                                    placeholder="0.00"
                                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Margin</label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={margin}
                                                    onChange={(e) => setMargin(e.target.value ? parseFloat(e.target.value) : '')}
                                                    placeholder="0.00"
                                                    className="w-full pl-4 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">SKU Basic Price</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={skuBasicPrice}
                                                    onChange={(e) => setSkuBasicPrice(e.target.value ? parseFloat(e.target.value) : '')}
                                                    placeholder="0.00"
                                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Landed Price</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={landedPrice}
                                                    onChange={(e) => setLandedPrice(e.target.value ? parseFloat(e.target.value) : '')}
                                                    placeholder="0.00"
                                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Stock Information */}
                                <section className="pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-purple-50 rounded-lg">
                                            <Archive className="h-5 w-5 text-purple-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Stock Information</h3>
                                    </div>
                                    <div className="grid grid-cols-4 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Current Stock</label>
                                            <input
                                                type="number"
                                                value={currentStock}
                                                onChange={(e) => setCurrentStock(e.target.value ? parseInt(e.target.value) : '')}
                                                placeholder="0"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Threshold Stock</label>
                                            <input
                                                type="number"
                                                value={thresholdStock}
                                                onChange={(e) => setThresholdStock(e.target.value ? parseInt(e.target.value) : '')}
                                                placeholder="0"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Pack Size</label>
                                            <input
                                                type="text"
                                                value={packSize}
                                                onChange={(e) => setPackSize(e.target.value)}
                                                placeholder="e.g., 500g, 1L"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Units Per Case</label>
                                            <input
                                                type="number"
                                                value={unitsPerCase}
                                                onChange={(e) => setUnitsPerCase(e.target.value ? parseInt(e.target.value) : '')}
                                                placeholder="0"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                </section>

                                {/* Tax Information */}
                                <section className="pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-orange-50 rounded-lg">
                                            <Receipt className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Tax Information</h3>
                                    </div>
                                    <div className="grid grid-cols-4 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">GST Percentage</label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={gst}
                                                    onChange={(e) => setGst(e.target.value ? parseFloat(e.target.value) : '')}
                                                    placeholder="18"
                                                    className="w-full pl-4 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Cess Percentage</label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={cess}
                                                    onChange={(e) => setCess(e.target.value ? parseFloat(e.target.value) : '')}
                                                    placeholder="0"
                                                    className="w-full pl-4 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">GST Value</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={gstValue}
                                                    onChange={(e) => setGstValue(e.target.value ? parseFloat(e.target.value) : '')}
                                                    placeholder="0.00"
                                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">HSN Code</label>
                                            <input
                                                type="text"
                                                value={hsnCode}
                                                onChange={(e) => setHsnCode(e.target.value)}
                                                placeholder="HSN code"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                </section>

                                {/* Additional Information */}
                                <section className="pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 bg-teal-50 rounded-lg">
                                            <Info className="h-5 w-5 text-teal-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Manufacturer Name</label>
                                            <input
                                                type="text"
                                                value={manufacturer}
                                                onChange={(e) => setManufacturer(e.target.value)}
                                                placeholder="Manufacturer"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Distributor Name</label>
                                            <input
                                                type="text"
                                                value={distributor}
                                                onChange={(e) => setDistributor(e.target.value)}
                                                placeholder="Distributor"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2 col-span-2">
                                            <label className="block text-sm font-medium text-gray-700">Product Image URL</label>
                                            <input
                                                type="url"
                                                value={imageUrl}
                                                onChange={(e) => setImageUrl(e.target.value)}
                                                placeholder="https://example.com/image.jpg"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4C6D] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2 col-span-2">
                                            <label className="block text-sm font-medium text-gray-700">Description</label>
                                            <textarea
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                placeholder="Short description of the product..."
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
                                Save Product
                            </button>
                        </div>
                    </div>

                </div>
            )}
            {snackbar && (
                <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
                    Product added successfully!
                </div>
            )}
        </>
    );
};

export default ProductDialog;