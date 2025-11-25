"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Zap, Shield, PiggyBank, Sparkles, TrendingUp, DollarSign, Clock, Target, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Features() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Powered by Advanced AI
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Everything you need to <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                            master your money
                        </span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Reclaim isn't just a tracker. It's an active financial agent that works 24/7 to put money back in your pocket.
                    </p>
                </motion.div>

                {/* Main Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Feature 1: Live AI Monitoring */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        onMouseEnter={() => setHoveredCard(1)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className="lg:col-span-2"
                    >
                        <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full overflow-hidden relative">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-800 opacity-0"
                                animate={{ opacity: hoveredCard === 1 ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <CardHeader className="relative z-10">
                                <div className="h-14 w-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                                    <Zap className="h-7 w-7 text-white" />
                                </div>
                                <CardTitle className="text-3xl text-white mb-3">24/7 AI Monitoring</CardTitle>
                                <p className="text-indigo-100 text-lg">
                                    Our intelligent system scans thousands of transactions in real-time, catching fees, price drops, and refund opportunities the moment they appear.
                                </p>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center text-white/90">
                                                <Clock className="h-4 w-4 mr-2" />
                                                <span className="text-sm">Real-time scanning</span>
                                            </div>
                                            <div className="flex items-center text-white/90">
                                                <Target className="h-4 w-4 mr-2" />
                                                <span className="text-sm">Smart detection</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center text-white/90">
                                                <TrendingUp className="h-4 w-4 mr-2" />
                                                <span className="text-sm">Instant alerts</span>
                                            </div>
                                            <div className="flex items-center text-white/90">
                                                <DollarSign className="h-4 w-4 mr-2" />
                                                <span className="text-sm">Auto-recovery</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Feature 2: AI Brain */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onMouseEnter={() => setHoveredCard(2)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
                            <CardHeader>
                                <motion.div
                                    className="h-14 w-14 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6"
                                    animate={{
                                        scale: hoveredCard === 2 ? 1.1 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <BrainCircuit className="h-7 w-7 text-indigo-600" />
                                </motion.div>
                                <CardTitle className="text-3xl mb-3">Smart AI</CardTitle>
                                <p className="text-gray-600 text-lg">
                                    Machine learning models trained on millions of transactions to maximize your savings.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0">
                                            <span className="text-indigo-600 font-bold text-sm">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Pattern Detection</h4>
                                            <p className="text-sm text-gray-600">Identifies hidden charges</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0">
                                            <span className="text-indigo-600 font-bold text-sm">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Auto Negotiation</h4>
                                            <p className="text-sm text-gray-600">Handles claims for you</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Bottom Features Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Security */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        onMouseEnter={() => setHoveredCard(3)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                            <CardHeader>
                                <motion.div
                                    className="h-14 w-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6"
                                    animate={{
                                        scale: hoveredCard === 3 ? 1.1 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Shield className="h-7 w-7 text-green-600" />
                                </motion.div>
                                <CardTitle className="text-2xl mb-3">Bank-Grade Security</CardTitle>
                                <p className="text-gray-600">
                                    256-bit encryption and SOC 2 Type II certified. Your data is protected at every step.
                                </p>
                            </CardHeader>
                        </Card>
                    </motion.div>

                    {/* Gamification */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        onMouseEnter={() => setHoveredCard(4)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className="md:col-span-2"
                    >
                        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <motion.div
                                            className="h-14 w-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6"
                                            animate={{
                                                rotate: hoveredCard === 4 ? 360 : 0,
                                            }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Award className="h-7 w-7 text-white" />
                                        </motion.div>
                                        <CardTitle className="text-2xl mb-3">Save & Level Up</CardTitle>
                                        <p className="text-gray-700">
                                            Turn saving into a game. Earn rewards, unlock badges, and compete on leaderboards.
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-3 gap-4">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white rounded-xl p-5 text-center shadow-md border border-orange-100"
                                    >
                                        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                                            Lvl 5
                                        </div>
                                        <div className="text-xs text-gray-600 mt-1 font-medium">Saver Status</div>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white rounded-xl p-5 text-center shadow-md border border-green-100"
                                    >
                                        <div className="text-3xl font-bold text-green-600">$450</div>
                                        <div className="text-xs text-gray-600 mt-1 font-medium">Reclaimed</div>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white rounded-xl p-5 text-center shadow-md border border-orange-100"
                                    >
                                        <div className="text-3xl font-bold text-orange-600">12</div>
                                        <div className="text-xs text-gray-600 mt-1 font-medium">Day Streak</div>
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
