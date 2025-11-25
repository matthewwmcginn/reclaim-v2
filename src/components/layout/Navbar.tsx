"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="h-8 w-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                                <Wallet className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                                Reclaim
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
                            Features
                        </Link>
                        <Link href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">
                            Pricing
                        </Link>
                        <Link href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">
                            Reviews
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="/login">
                            <Button variant="ghost" className="hidden sm:inline-flex">
                                Log in
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button>Get Started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
