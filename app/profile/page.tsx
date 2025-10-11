"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ProfilePage() {
    const [open, setOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0D4C6D] to-[#052734] p-8 text-white flex flex-col items-center justify-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full max-w-sm text-center">
                <div className="text-3xl font-semibold mb-4">John Doe</div>
                <p className="text-[#F5F7FA]/70 mb-8">User ID: #12345</p>
                <Button
                    variant="destructive"
                    onClick={() => setOpen(true)}
                    className="rounded-xl bg-[#DC2626] hover:bg-[#b91c1c] text-white"
                >
                    Logout
                </Button>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-gradient-to-b from-[#0D4C6D] to-[#052734] border border-white/10 text-white rounded-2xl">
                    <DialogHeader>
                        <DialogTitle>Confirm Logout</DialogTitle>
                    </DialogHeader>
                    <p className="text-[#F5F7FA]/70 mb-4">Are you sure you want to log out?</p>
                    <DialogFooter className="flex justify-end gap-3">
                        <Button variant="secondary" onClick={() => setOpen(false)}>
                            No
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={() => alert("Logged out")}
                        >
                            Yes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
