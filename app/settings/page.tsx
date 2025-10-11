export default function SettingsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0D4C6D] to-[#052734] p-8 text-white">
            <h1 className="text-2xl font-semibold mb-6">Settings</h1>
            <div className="grid gap-6 max-w-2xl">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h2 className="font-semibold text-lg mb-2">Products Data</h2>
                    <p className="text-[#F5F7FA]/70">Manage product listings, categories, and stock levels.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h2 className="font-semibold text-lg mb-2">Customer Data</h2>
                    <p className="text-[#F5F7FA]/70">View and edit customer information and orders.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h2 className="font-semibold text-lg mb-2">Offers & Campaigns</h2>
                    <p className="text-[#F5F7FA]/70">Configure and track promotional offers.</p>
                </div>
            </div>
        </div>
    )
}
