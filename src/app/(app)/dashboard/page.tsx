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
    AlertCircle,
    Play,
    Pause,
    RotateCcw
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
    const {
        refunds,
        lastEvent,
        totalSaved,
        monthSaved,
        claimRefund,
        isSimulationRunning,
        toggleSimulation,
        resetSimulation,
        savingsHistory,
        activityData
    } = useSimulationEngine();

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <header className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-500">Welcome back, Sarah</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* Simulation Controls */}
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                            <span className="text-sm font-medium text-gray-600">Demo Mode</span>
                            <Button
                                size="sm"
                                variant="ghost"
                                onClick={toggleSimulation}
                                className="h-8 w-8 p-0"
                            >
                                {isSimulationRunning ? (
                                    <Pause className="h-4 w-4" />
                                ) : (
                                    <Play className="h-4 w-4" />
                                )}
                            </Button>
                            <Button
                                size="sm"
                                variant="ghost"
                                onClick={resetSimulation}
                                className="h-8 w-8 p-0"
                            >
                                <RotateCcw className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-sm font-medium text-gray-500">Level 3</span>
                            <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '75%' }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                            S
                        </div>
                    </div>
                </header>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Saved</CardTitle>
                                <Wallet className="h-4 w-4 text-indigo-500" />
                            </CardHeader>
                            <CardContent>
                                <motion.div
                                    key={totalSaved}
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    className="text-2xl font-bold"
                                >
                                    ${totalSaved.toFixed(2)}
                                </motion.div>
                                <p className="text-xs text-green-600 flex items-center mt-1">
                                    <ArrowUpRight className="h-3 w-3 mr-1" />
                                    +12.3% from last month
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-gray-500">This Month</CardTitle>
                                <TrendingUp className="h-4 w-4 text-emerald-500" />
                            </CardHeader>
                            <CardContent>
                                <motion.div
                                    key={monthSaved}
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    className="text-2xl font-bold"
                                >
                                    ${monthSaved.toFixed(2)}
                                </motion.div>
                                <p className="text-xs text-gray-500 mt-1">
                                    {refunds.filter(r => r.status === 'completed').length} refunds processed
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-none shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-indigo-100">Available Now</CardTitle>
                                <Activity className="h-4 w-4 text-white" />
                            </CardHeader>
                            <CardContent>
                                <motion.div
                                    key={refunds.filter(r => r.status === 'available').reduce((acc, r) => acc + r.amount, 0)}
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    className="text-2xl font-bold"
                                >
                                    ${refunds
                                        .filter(r => r.status === 'available')
                                        .reduce((acc, r) => acc + r.amount, 0)
                                        .toFixed(2)}
                                </motion.div>
                                <p className="text-xs text-indigo-100 mt-1">
                                    {refunds.filter(r => r.status === 'available').length} opportunities waiting
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Live Indicator */}
                <AnimatePresence>
                    {lastEvent && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm w-fit"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-gray-600">Live AI: {lastEvent}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Interactive Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="bg-white border-none shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-900">Savings Over Time</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={250}>
                                <AreaChart data={savingsHistory}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                                    <YAxis stroke="#9ca3af" fontSize={12} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                        }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#6366f1"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorValue)"
                                        animationDuration={1000}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-none shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-900">Weekly Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={activityData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                                    <YAxis stroke="#9ca3af" fontSize={12} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                        }}
                                    />
                                    <Bar
                                        dataKey="value"
                                        fill="#10b981"
                                        radius={[8, 8, 0, 0]}
                                        animationDuration={1000}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Refund List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900">Refund Opportunities</h2>
                    <div className="grid gap-4">
                        <AnimatePresence>
                            {refunds.map((refund, index) => (
                                <motion.div
                                    key={refund.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
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
                        </motion.div>
                        ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
