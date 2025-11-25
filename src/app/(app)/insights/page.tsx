"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    BrainCircuit,
    AlertTriangle,
    ShoppingCart,
    CreditCard,
    ArrowDownCircle
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Fees', amount: 120, fill: '#DC2626' },
    { name: 'Subs', amount: 250, fill: '#D97706' },
    { name: 'Refunds', amount: 380, fill: '#059669' },
];

export default function InsightsPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Header */}
                <header className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                        <BrainCircuit className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">AI Financial Analysis</h1>
                        <p className="text-gray-500">Based on your last 30 days of activity</p>
                    </div>
                </header>

                {/* Wasted Money Insight */}
                <Card className="bg-white border-none shadow-sm border-l-4 border-l-yellow-500">
                    <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                            <AlertTriangle className="h-6 w-6 text-yellow-500 mt-1" />
                            <div className="space-y-2 flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">Potential Waste Detected</h3>
                                <p className="text-gray-600">
                                    We found 3 subscriptions you haven't used in over 2 weeks. Canceling these could save you:
                                </p>
                                <div className="text-3xl font-bold text-gray-900">$45.99 <span className="text-sm font-normal text-gray-500">/ month</span></div>
                                <Button className="mt-2">Review Subscriptions</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Projected Savings Chart */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900">Projected Savings</h2>
                    <Card className="bg-white border-none shadow-sm">
                        <CardContent className="p-6 h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                                    <Tooltip
                                        cursor={{ fill: 'transparent' }}
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Bar dataKey="amount" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Smart Tips */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900">Smart Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6 space-y-4">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <ShoppingCart className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Wait 24h</h3>
                                    <p className="text-sm text-gray-500 mt-1">Wait 24h before big purchases to reduce impulse buys.</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6 space-y-4">
                                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <CreditCard className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Use Points</h3>
                                    <p className="text-sm text-gray-500 mt-1">You have 450 points. Redeem them for gift cards.</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6 space-y-4">
                                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                                    <ArrowDownCircle className="h-5 w-5 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Negotiate</h3>
                                    <p className="text-sm text-gray-500 mt-1">Your internet bill is higher than average. Call to negotiate.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
