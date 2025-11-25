"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, CheckCircle2, Clock, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function DashboardPreview() {
    const [totalSaved, setTotalSaved] = useState(347.82);
    const [availableNow, setAvailableNow] = useState(101.99);
    const [activeRefunds, setActiveRefunds] = useState(3);

    // Simulate live updates
    useEffect(() => {
        const interval = setInterval(() => {
            // Random chance to add savings
            if (Math.random() > 0.7) {
                const newAmount = Math.random() * 30 + 5;
                setTotalSaved(prev => prev + newAmount);
                setAvailableNow(prev => prev + newAmount);
                setActiveRefunds(prev => prev + 1);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const refunds = [
        { id: 1, title: "Bank Fee Refund", amount: 35.00, status: "completed", merchant: "Chase Bank" },
        { id: 2, title: "Overdraft Fee", amount: 12.00, status: "available", merchant: "Bank of America" },
        { id: 3, title: "Price Drop", amount: 54.99, status: "processing", merchant: "Amazon" },
    ];

    return (
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Your Dashboard</h3>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Live Demo
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                    <motion.div
                        key={totalSaved}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="bg-white rounded-lg p-3 shadow-sm border border-gray-200"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-500">Total Saved</span>
                            <DollarSign className="h-3 w-3 text-indigo-600" />
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                            ${totalSaved.toFixed(2)}
                        </div>
                    </motion.div>

                    <motion.div
                        key={availableNow}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg p-3 shadow-sm text-white"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-indigo-100">Available</span>
                            <Zap className="h-3 w-3 text-white" />
                        </div>
                        <div className="text-xl font-bold">
                            ${availableNow.toFixed(2)}
                        </div>
                    </motion.div>

                    <motion.div
                        key={activeRefunds}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="bg-white rounded-lg p-3 shadow-sm border border-gray-200"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-500">Active</span>
                            <TrendingUp className="h-3 w-3 text-emerald-600" />
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                            {activeRefunds}
                        </div>
                    </motion.div>
                </div>

                {/* Refunds List */}
                <div className="space-y-2 mt-4">
                    {refunds.map((refund, index) => (
                        <motion.div
                            key={refund.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                            className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center space-x-3">
                                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                                    refund.status === 'completed' ? 'bg-green-100' :
                                    refund.status === 'processing' ? 'bg-yellow-100' :
                                    'bg-blue-100'
                                }`}>
                                    {refund.status === 'completed' ? (
                                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                                    ) : refund.status === 'processing' ? (
                                        <Clock className="h-4 w-4 text-yellow-600" />
                                    ) : (
                                        <DollarSign className="h-4 w-4 text-blue-600" />
                                    )}
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-gray-900">{refund.title}</div>
                                    <div className="text-xs text-gray-500">{refund.merchant}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold text-gray-900">${refund.amount.toFixed(2)}</div>
                                <div className={`text-xs capitalize ${
                                    refund.status === 'completed' ? 'text-green-600' :
                                    refund.status === 'processing' ? 'text-yellow-600' :
                                    'text-blue-600'
                                }`}>
                                    {refund.status}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating notification */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 2,
                        repeat: Infinity,
                        repeatDelay: 5,
                        repeatType: "reverse"
                    }}
                    className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-3 flex items-center space-x-2 text-sm"
                >
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-gray-700 font-medium">New opportunity found!</span>
                </motion.div>
            </div>
        </div>
    );
}
