"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    CreditCard,
    BrainCircuit,
    Settings,
    LogOut,
    Wallet
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Transactions", href: "/transactions", icon: CreditCard },
    { name: "Insights", href: "/insights", icon: BrainCircuit },
    { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
            <div className="p-6 flex items-center space-x-2 border-b border-gray-100">
                <div className="h-8 w-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    <Wallet className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold text-gray-900">Reclaim</span>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                                isActive
                                    ? "bg-indigo-50 text-indigo-600"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                        >
                            <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-indigo-600" : "text-gray-400")} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center p-4 bg-gray-50 rounded-xl mb-4">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                        S
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Sarah</p>
                        <p className="text-xs text-gray-500">Pro Plan</p>
                    </div>
                </div>
                <Link
                    href="/"
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-600 rounded-lg transition-colors"
                >
                    <LogOut className="mr-3 h-5 w-5" />
                    Sign out
                </Link>
            </div>
        </div>
    );
}
