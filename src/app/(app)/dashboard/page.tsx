"use client";

import { useSimulationEngine } from "@/lib/simulation-engine";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowUpRight,
    Wallet,
    TrendingUp,
    Activity,
    CheckCircle2,
    Clock,
    AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
    const { refunds, lastEvent, totalSaved, monthSaved, claimRefund } = useSimulationEngine();

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Header */}
                <header className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-500">Welcome back, Sarah</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex flex-col items-end">
                            <span className="text-sm font-medium text-gray-500">Level 3</span>
                            <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                                <div className="w-3/4 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                            </div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                            S
                        </div>
                    </div>
                </header>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-white border-none shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Total Saved</CardTitle>
                            <Wallet className="h-4 w-4 text-indigo-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${totalSaved.toFixed(2)}</div>
                            <p className="text-xs text-green-600 flex items-center mt-1">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                +12.3% from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-none shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">This Month</CardTitle>
                            <TrendingUp className="h-4 w-4 text-emerald-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${monthSaved.toFixed(2)}</div>
                            <p className="text-xs text-gray-500 mt-1">
                                {refunds.filter(r => r.status === 'completed').length} refunds processed
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-none shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-indigo-100">Available Now</CardTitle>
                            <Activity className="h-4 w-4 text-white" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                ${refunds
                                    .filter(r => r.status === 'available')
                                    .reduce((acc, r) => acc + r.amount, 0)
                                    .toFixed(2)}
                            </div>
                            <p className="text-xs text-indigo-100 mt-1">
                                {refunds.filter(r => r.status === 'available').length} opportunities waiting
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Live Indicator */}
                {lastEvent && (
                    <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm w-fit animate-in fade-in slide-in-from-top-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-600">Live AI: {lastEvent}</span>
                    </div>
                )}

                {/* Refund List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900">Refund Opportunities</h2>
                    <div className="grid gap-4">
                        {refunds.map((refund) => (
                            <Card key={refund.id} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className={cn(
                                            "h-12 w-12 rounded-full flex items-center justify-center",
                                            refund.type === 'Bank Fee' ? "bg-red-100 text-red-600" :
                                                refund.type === 'Price Drop' ? "bg-blue-100 text-blue-600" :
                                                    "bg-purple-100 text-purple-600"
                                        )}>
                                            {refund.type === 'Bank Fee' ? <Wallet className="h-6 w-6" /> :
                                                refund.type === 'Price Drop' ? <TrendingUp className="h-6 w-6" /> :
                                                    <Activity className="h-6 w-6" />}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{refund.description}</h3>
                                            <p className="text-sm text-gray-500">{refund.merchant} • {refund.reason}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-6">
                                        <div className="text-right">
                                            <div className="font-bold text-gray-900">${refund.amount.toFixed(2)}</div>
                                            <div className="text-xs text-gray-500">{refund.date.toLocaleDateString()}</div>
                                        </div>

                                        {refund.status === 'available' ? (
                                            <Button onClick={() => claimRefund(refund.id)}>Claim</Button>
                                        ) : (
                                            <Badge variant={refund.status === 'processing' ? 'processing' : 'success'}>
                                                {refund.status === 'processing' ? (
                                                    <span className="flex items-center">
                                                        <Clock className="h-3 w-3 mr-1" /> Processing
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center">
                                                        <CheckCircle2 className="h-3 w-3 mr-1" /> Completed
                                                    </span>
                                                )}
                                            </Badge>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
