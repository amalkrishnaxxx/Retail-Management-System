import React, { useState } from "react";
import { UploadCloud, FileText } from "lucide-react";
import { Button } from "../ui/button";

const ImportProductsDialog: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [snackbar, setSnackbar] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleImport = () => {
        if (!file) return alert("Please select a CSV file first.");
        // Simulate upload success
        setSnackbar(true);
        setTimeout(() => setSnackbar(false), 3000);
        setOpen(false);
        setFile(null);
    };

    return (
        <>
            <Button
                className="bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200"
                onClick={() => setOpen(true)}
            >
                <UploadCloud className="h-4 w-4 mr-2" />
                Import Products
            </Button>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white text-gray-800 rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
                        {/* Header */}
                        <div className="px-8 py-6 border-b border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Import Products
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Import multiple products using a CSV file
                            </p>
                        </div>

                        {/* Instructions */}
                        <div className="px-8 py-6 space-y-4">
                            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 leading-relaxed">
                                <p className="font-semibold mb-2">Instructions:</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Download the template CSV file for the correct format</li>
                                    <li>Fill in your product data following the template structure</li>
                                    <li>Make sure all required fields are filled</li>
                                    <li>Upload your CSV file using the import tool below</li>
                                </ul>
                            </div>

                            <div className="flex flex-col items-center justify-center gap-4 border-2 border-dashed border-gray-300 rounded-lg py-10 hover:border-teal-500 transition-colors">
                                <FileText className="h-10 w-10 text-gray-400" />
                                <label
                                    htmlFor="csv-upload"
                                    className="cursor-pointer bg-teal-50 hover:bg-teal-100 text-teal-700 px-4 py-2 rounded-lg font-medium border border-teal-200"
                                >
                                    Choose CSV File
                                </label>
                                <input
                                    id="csv-upload"
                                    type="file"
                                    accept=".csv"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                {file && (
                                    <p className="text-sm text-gray-600">
                                        Selected file: <span className="font-medium">{file.name}</span>
                                    </p>
                                )}
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
                                onClick={handleImport}
                                className="px-6 py-2.5 bg-[#00A6A6] hover:bg-[#009090] text-white rounded-lg font-medium transition-colors"
                            >
                                Import Products
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Snackbar */}
            {snackbar && (
                <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
                    Products imported successfully!
                </div>
            )}
        </>
    );
};

export default ImportProductsDialog;
