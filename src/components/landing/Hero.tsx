"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
                            New: AI-Powered Subscription Cancellation
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
                            Stop wasting money on <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                                hidden charges.
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Reclaim automatically finds and refunds bank fees, unused subscriptions, and price drops.
                            Join 50,000+ users saving an average of <span className="font-bold text-gray-900">$340/year</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/signup">
                                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8">
                                    Start Reclaiming Free
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <div className="flex items-center text-sm text-gray-500">
                                <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
                                Bank-grade security
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Cards Demo */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-20 relative"
                >
                    <div className="relative mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-xl shadow-2xl p-4 md:p-8">
                        <div className="absolute -top-12 -left-12 md:-left-20 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce-slow">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Refund Approved</p>
                                    <p className="text-xs text-gray-500">+$35.00 Overdraft Fee</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-8 -right-8 md:-right-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce-slow animation-delay-2000">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                                    <span className="text-red-600 font-bold text-xs">-12%</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Subscription Cancelled</p>
                                    <p className="text-xs text-gray-500">Saved $14.99/mo</p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Dashboard Preview */}
                        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-inner aspect-[16/9] relative group">
                            <DashboardPreview />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
