"use client"

import { useState } from "react"
import { Bell, Search, Settings, User, LogOut, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export function Header() {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-r from-[#0D4C6D] to-[#083344] backdrop-blur-xl shadow-xl">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A6A6] to-transparent" />

      <div className="flex h-16 items-center justify-between px-6 gap-6">
        {/* Search Section */}
        <div className="flex flex-1 items-center gap-4 max-w-2xl">
          <div className="relative flex-1 group">
            <Search className={cn(
              "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transition-all duration-300",
              searchFocused ? "text-[#00A6A6] scale-110" : "text-[#F5F7FA]/60"
            )} />
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
            {/* Search glow effect */}
            <div className={cn(
              "absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00A6A6]/0 via-[#00A6A6]/10 to-[#00A6A6]/0 opacity-0 transition-opacity duration-300 pointer-events-none",
              searchFocused && "opacity-100"
            )} />
          </div>
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-2">
          {/* Notifications Button */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "relative h-10 w-10 rounded-xl transition-all duration-300",
                "hover:bg-white/10 hover:scale-105 text-[#F5F7FA] hover:text-white",
                "border border-transparent hover:border-white/20"
              )}
            >
              <Bell className="h-5 w-5" />
            </Button>

            {/* Notification badge with pulse */}
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#DC2626] opacity-75 animate-ping" />
              <span className="relative inline-flex h-5 w-5 rounded-full bg-[#DC2626] items-center justify-center text-[10px] font-bold text-white shadow-lg">
                3
              </span>
            </span>
          </div>

          {/* Settings Button */}
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "h-10 w-10 rounded-xl transition-all duration-300",
              "hover:bg-white/10 hover:scale-105 hover:rotate-90 text-[#F5F7FA] hover:text-white",
              "border border-transparent hover:border-white/20"
            )}
          >
            <Settings className="h-5 w-5" />
          </Button>

          {/* Divider */}
          <div className="h-8 w-px bg-white/20 mx-1" />

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
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

                {/* Online status indicator */}
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#16A34A] border-2 border-white shadow-sm" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className={cn(
                "w-64 mt-2 rounded-2xl border border-white/10",
                "bg-gradient-to-b from-[#0D4C6D] to-[#083344] backdrop-blur-xl shadow-2xl",
                "animate-in fade-in-0 zoom-in-95 duration-200"
              )}
              align="end"
              forceMount
            >
              {/* User Info Header */}
              <DropdownMenuLabel className="font-normal p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 ring-2 ring-[#00A6A6]/20">
                    <AvatarImage src="/diverse-user-avatars.png" alt="User" />
                    <AvatarFallback className="bg-gradient-to-br from-[#00A6A6] to-[#0D4C6D] text-white font-semibold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold text-white leading-none">
                      John Doe
                    </p>
                    <p className="text-xs text-[#F5F7FA]/70 leading-none">
                      john@retailpro.com
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] text-[#16A34A] font-medium mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                      Active now
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator className="bg-white/10" />

              {/* Menu Items */}
              <div className="p-2 space-y-1">
                <DropdownMenuItem className={cn(
                  "rounded-xl px-3 py-2.5 cursor-pointer transition-all duration-200",
                  "hover:bg-white/10 focus:bg-white/10",
                  "text-[#F5F7FA] hover:text-white"
                )}>
                  <UserCircle className="mr-3 h-4 w-4" />
                  <span className="font-medium text-sm">Profile</span>
                </DropdownMenuItem>

                <DropdownMenuItem className={cn(
                  "rounded-xl px-3 py-2.5 cursor-pointer transition-all duration-200",
                  "hover:bg-white/10 focus:bg-white/10",
                  "text-[#F5F7FA] hover:text-white"
                )}>
                  <Settings className="mr-3 h-4 w-4" />
                  <span className="font-medium text-sm">Settings</span>
                </DropdownMenuItem>
              </div>

              <DropdownMenuSeparator className="bg-white/10" />

              {/* Logout */}
              <div className="p-2">
                <DropdownMenuItem className={cn(
                  "rounded-xl px-3 py-2.5 cursor-pointer transition-all duration-200",
                  "hover:bg-[#DC2626]/10 focus:bg-[#DC2626]/10",
                  "text-[#DC2626] hover:text-[#DC2626] font-medium"
                )}>
                  <LogOut className="mr-3 h-4 w-4" />
                  <span className="text-sm">Log out</span>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}