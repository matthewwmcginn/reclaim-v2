"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download } from "lucide-react";

const transactions = [
    { id: 1, merchant: "Netflix", date: "Today", amount: -15.99, type: "Subscription", status: "Refundable" },
    { id: 2, merchant: "Chase Bank", date: "Yesterday", amount: -12.00, type: "Fee", status: "Refunded" },
    { id: 3, merchant: "Uber", date: "Nov 20", amount: -24.50, type: "Expense", status: "Normal" },
    { id: 4, merchant: "Spotify", date: "Nov 18", amount: -9.99, type: "Subscription", status: "Active" },
    { id: 5, merchant: "Best Buy", date: "Nov 15", amount: -899.99, type: "Purchase", status: "Price Drop" },
    { id: 6, merchant: "Bank of America", date: "Nov 12", amount: -35.00, type: "Fee", status: "Processing" },
];

export default function TransactionsPage() {
    return (
        <div className="p-8 max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
                    <p className="text-gray-500">View and manage your scanned transactions.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                    <Button>
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </Button>
                </div>
            </div>

            <Card className="bg-white border-none shadow-sm">
                <CardHeader className="border-b border-gray-100">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <table className="w-full">
                        <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-3">Merchant</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Type</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {transactions.map((tx) => (
                                <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{tx.merchant}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{tx.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{tx.type}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Badge variant={
                                            tx.status === "Refunded" ? "success" :
                                                tx.status === "Refundable" ? "warning" :
                                                    tx.status === "Processing" ? "processing" :
                                                        tx.status === "Price Drop" ? "secondary" : "outline"
                                        }>
                                            {tx.status}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-gray-900">
                                        ${Math.abs(tx.amount).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    );
}
