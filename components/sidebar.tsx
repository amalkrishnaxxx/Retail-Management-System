"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  BarChart3,
  Users,
  Percent,
  Menu,
  ChevronLeft,
  ChevronRight,
  Store,
} from "lucide-react"

import logo from '../public/TejPay-Logo_Original_Final.pdf.jpg'
import Image from "next/image"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Orders", href: "/orders", icon: ShoppingCart },
  { name: "Products", href: "/products", icon: Package },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Offers & Discounts", href: "/discounts", icon: Percent },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Sidebar with gradient background */}
      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-full transition-all duration-500 ease-in-out",
          "flex flex-col border-r border-white/10 shadow-2xl",
          "bg-gradient-to-b from-[#0D4C6D] to-[#083344]",
          isCollapsed ? "w-20" : "w-72",
          "lg:relative lg:z-auto"
        )}
      >
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A6A6]/5 via-transparent to-transparent pointer-events-none" />

        {/* Header with enhanced design */}
        <div className="relative flex h-20 items-center justify-between px-6 border-b border-white/5">
          <div className="flex items-center gap-3 transition-all duration-500">
            <div
              className={cn(
                "transition-all duration-500",
                isCollapsed ? "opacity-0 scale-95 w-0" : "opacity-100 scale-100"
              )}
            >
              <div className="relative w-[160px] h-[65px] overflow-hidden rounded-md">
                <Image
                  src="/Fein_Logo.png"
                  alt="RetailPro Logo"
                  width={160}
                  height={90}
                  className="object-cover object-top translate-y-[-40px]"
                  priority
                />
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "h-10 w-10 p-0 rounded-xl transition-all duration-300 ease-in-out",
              "hover:bg-white/10 text-white hover:scale-110",
              "border border-white/10 hover:border-[#00A6A6]/50"
            )}
          >
            {isCollapsed ? (
              <Image
                src="/Fein_Logo.png"
                alt="Fein Logo"
                width={40}
                height={40}
                className="object-contain mx-auto transition-transform duration-300 hover:scale-105"
                priority
              />
            ) : (
              <ChevronLeft className="h-5 w-5 transition-transform duration-300 hover:-translate-x-1" />
            )}
          </Button>
        </div>

        {/* Navigation with modern styling */}
        <nav className="flex-1 space-y-2 p-4 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "w-full flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-medium transition-all duration-300 relative overflow-hidden group",
                  "hover:translate-x-1",
                  isActive
                    ? "bg-gradient-to-r from-[#00A6A6] to-[#00A6A6]/90 text-white shadow-lg scale-105"
                    : "text-[#F5F7FA] hover:bg-white/5 hover:text-white",
                  isCollapsed && "justify-center px-3"
                )}
              >
                {/* Animated shine effect */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent",
                  "translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                )} />

                <div className={cn(
                  "relative z-10 transition-all duration-300",
                  "group-hover:scale-110",
                  isActive && "scale-110"
                )}>
                  <item.icon className="h-5 w-5" />
                </div>

                <span
                  className={cn(
                    "relative z-10 transition-all duration-300 whitespace-nowrap",
                    isCollapsed ? "opacity-0 w-0 absolute" : "opacity-100"
                  )}
                >
                  {item.name}
                </span>

                {/* Active indicator - modern dot */}
                {isActive && !isCollapsed && (
                  <div className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white" />
                )}

                {/* Collapsed active indicator */}
                {isActive && isCollapsed && (
                  <div className="absolute bottom-2 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-white" />
                )}

                {/* Notification badge on Orders */}
                {item.name === "Orders" && !isCollapsed && (
                  <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#DC2626] text-[10px] font-bold text-white shadow-lg">
                    3
                  </div>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Enhanced footer with status card */}
        <div className="relative border-t border-white/5 p-4">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          <div
            className={cn(
              "relative flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/10",
              "transition-all duration-300",
              isCollapsed && "justify-center px-3"
            )}
          >
            <div className="relative flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-[#16A34A] shadow-lg" />
            </div>

            <div
              className={cn(
                "flex flex-col transition-all duration-300",
                isCollapsed && "opacity-0 w-0 absolute"
              )}
            >
              <span className="text-xs font-semibold text-white">
                System Online
              </span>
              <span className="text-[10px] text-[#F5F7FA]/60">
                All services operational
              </span>
            </div>
          </div>
          <div className={cn(
            "flex items-center justify-center mt-4 space-x-2 transition-all duration-300",
            isCollapsed && "opacity-0"
          )}>
            <p className="text-xs text-slate-300">Powered By</p>
            <Image
              src="/TejPay-Logo_Original_Final.pdf.png"
              alt="RetailPro Logo"
              width={90}
              height={40}
              priority
            />
          </div>

        </div>
      </div>
    </>
  )
}