"use client"

import { useState } from "react"
import { Bell, Settings, UserCircle, CheckCircle, AlertTriangle, Cog, LogOut, CreditCard, ShoppingBag, Users, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import NotificationsModal from "./notification"

export function Header() {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-r from-[#0D4C6D] to-[#083344] backdrop-blur-xl shadow-xl">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A6A6] to-transparent" />
      <div className="flex h-16 items-center justify-between px-6 gap-6">

        {/* Search Section */}
        <div className="flex flex-1 items-center gap-4 max-w-2xl">
          <div className="relative flex-1 group">
            <Input
              placeholder="Search products, orders, customers..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className={cn(
                "pl-11 pr-4 h-11 rounded-2xl transition-all duration-300",
                "bg-white/5 border-white/10",
                "focus:bg-white/10 focus:border-[#00A6A6]/50 focus:shadow-lg focus:shadow-[#00A6A6]/20",
                "placeholder:text-[#F5F7FA]/60 text-white"
              )}
            />
            <div className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300",
              searchFocused ? "text-[#00A6A6] scale-110" : "text-[#F5F7FA]/60"
            )}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Notifications Dialog */}

          <NotificationsModal />

          {/* Settings Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 w-10 rounded-xl text-[#F5F7FA] hover:bg-white/10 hover:scale-105 hover:rotate-90 hover:text-white"
              >
                <Settings className="h-5 w-5" />
              </Button>
            </DialogTrigger>

            <DialogContent className="w-[900px] max-h-[80vh] max-w-full bg-gradient-to-b from-[#0D4C6D] to-[#083344] rounded-3xl shadow-2xl p-8">
              <DialogHeader>
                <DialogTitle className="text-white font-bold text-2xl mb-2">Settings</DialogTitle>
                <p className="text-white/70 text-sm">
                  Manage your account, system, notifications, and store preferences from one place.
                </p>
              </DialogHeader>

              <div className="grid grid-cols-2 gap-6 mt-6">
                {/* Account Settings */}
                <div className="flex flex-col bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">
                  <div className="flex items-center mb-2">
                    <UserCircle className="h-6 w-6 text-white mr-2" />
                    <h3 className="text-white font-semibold">Account Settings</h3>
                  </div>
                  <p className="text-white/70 text-sm">Update your profile and personal info.</p>
                </div>

                {/* System Settings */}
                <div className="flex flex-col bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">
                  <div className="flex items-center mb-2">
                    <Cog className="h-6 w-6 text-white mr-2" />
                    <h3 className="text-white font-semibold">System Settings</h3>
                  </div>
                  <p className="text-white/70 text-sm">Configure system behavior and preferences.</p>
                </div>

                {/* Notifications */}
                <div className="flex flex-col bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">
                  <div className="flex items-center mb-2">
                    <Bell className="h-6 w-6 text-white mr-2" />
                    <h3 className="text-white font-semibold">Notifications</h3>
                  </div>
                  <p className="text-white/70 text-sm">Manage alerts and notifications.</p>
                </div>

                {/* Payment Settings */}
                <div className="flex flex-col bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">
                  <div className="flex items-center mb-2">
                    <CreditCard className="h-6 w-6 text-white mr-2" />
                    <h3 className="text-white font-semibold">Payment Settings</h3>
                  </div>
                  <p className="text-white/70 text-sm">Manage payment methods.</p>
                </div>

                {/* Store Preferences */}
                <div className="flex flex-col bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">
                  <div className="flex items-center mb-2">
                    <ShoppingBag className="h-6 w-6 text-white mr-2" />
                    <h3 className="text-white font-semibold">Store Preferences</h3>
                  </div>
                  <p className="text-white/70 text-sm">Customize store appearance and settings.</p>
                </div>

                {/* User Roles & Permissions */}
                <div className="flex flex-col bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">
                  <div className="flex items-center mb-2">
                    <Users className="h-6 w-6 text-white mr-2" />
                    <h3 className="text-white font-semibold">User Roles & Permissions</h3>
                  </div>
                  <p className="text-white/70 text-sm">Assign roles and access levels.</p>
                </div>

              </div>

            </DialogContent>
          </Dialog>

          {/* Divider */}
          <div className="h-8 w-px bg-white/20 mx-1" />

          {/* Profile Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "relative h-10 w-10 rounded-xl p-0 transition-all duration-300",
                  "hover:scale-105 hover:shadow-lg hover:shadow-[#00A6A6]/20",
                  "border-2 border-transparent hover:border-[#00A6A6]/30"
                )}
              >
                <Avatar className="h-9 w-9 ring-2 ring-[#00A6A6]/20 ring-offset-2">
                  <AvatarImage src="/diverse-user-avatars.png" alt="User" />
                  <AvatarFallback className="bg-gradient-to-br from-[#00A6A6] to-[#0D4C6D] text-white font-semibold text-sm">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DialogTrigger>

            <DialogContent className="w-96 bg-gradient-to-b from-[#0D4C6D] to-[#083344] rounded-2xl shadow-2xl p-6">
              <DialogHeader>
                <DialogTitle className="text-white font-semibold text-lg">Profile</DialogTitle>
              </DialogHeader>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 ring-2 ring-[#00A6A6]/20">
                    <AvatarImage src="/diverse-user-avatars.png" alt="User" />
                    <AvatarFallback className="bg-gradient-to-br from-[#00A6A6] to-[#0D4C6D] text-white font-semibold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-white font-semibold">User</p>
                    <p className="text-[#F5F7FA]/70 text-sm">user@retailpro.com</p>
                  </div>
                </div>
                <Button variant="destructive" className="w-full justify-start">
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}
