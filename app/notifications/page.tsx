export default function NotificationsPage() {
    const notifications = [
        { id: 1, message: "Low stock alert: 5 items remaining in Laptops", time: "2h ago" },
        { id: 2, message: "New customer registered: Arjun M", time: "4h ago" },
        { id: 3, message: "Offer campaign launched: Festive Bonanza", time: "1d ago" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0D4C6D] to-[#052734] p-8 text-white">
            <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
            <div className="space-y-4">
                {notifications.map((n) => (
                    <div
                        key={n.id}
                        className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#00A6A6]/40 transition"
                    >
                        <p className="font-medium">{n.message}</p>
                        <p className="text-sm text-[#F5F7FA]/60 mt-1">{n.time}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
