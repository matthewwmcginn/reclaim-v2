"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Zap, Shield, PiggyBank } from "lucide-react";

export function Features() {
    return (
        <section id="features" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Everything you need to <br />
                        <span className="text-indigo-600">master your money</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Reclaim isn't just a tracker. It's an active agent that works 24/7 to put money back in your pocket.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1: Simulation Engine */}
                    <Card className="md:col-span-2 bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6 text-indigo-600" />
                            </div>
                            <CardTitle className="text-2xl">Live Simulation Engine</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-6">
                                Our proprietary AI scans thousands of data points in real-time to identify refund opportunities the moment they happen.
                            </p>
                            <div className="bg-gray-100 rounded-xl p-4 h-48 flex items-center justify-center">
                                <span className="text-gray-400 font-medium">Interactive Simulation Demo</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Feature 2: AI Insights */}
                    <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-none shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                <BrainCircuit className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-2xl text-white">AI Insights</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-indigo-100">
                                Detect wasted subscriptions and negotiate bills automatically. Our AI acts as your personal financial assistant.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Feature 3: Security */}
                    <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-green-600" />
                            </div>
                            <CardTitle className="text-2xl">Bank-Grade Security</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Your data is encrypted with 256-bit AES. We never sell your personal information to third parties.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Feature 4: Gamification */}
                    <Card className="md:col-span-2 bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                <PiggyBank className="h-6 w-6 text-orange-600" />
                            </div>
                            <CardTitle className="text-2xl">Save & Level Up</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-6">
                                Turn saving money into a game. Earn XP, unlock badges, and compete with friends to see who can reclaim the most.
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-gray-50 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-indigo-600">Lvl 5</div>
                                    <div className="text-xs text-gray-500">Saver Status</div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-green-600">$450</div>
                                    <div className="text-xs text-gray-500">Reclaimed</div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-orange-600">12</div>
                                    <div className="text-xs text-gray-500">Day Streak</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
