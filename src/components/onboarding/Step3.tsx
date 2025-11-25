"use client";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, CheckCircle2, TrendingUp } from "lucide-react";
import { PlaidLinkButton } from "@/components/plaid/PlaidLinkButton";
import { useState } from "react";
import { motion } from "framer-motion";

interface Step3Props {
    onNext: () => void;
}

export function Step3({ onNext }: Step3Props) {
    const [isConnecting, setIsConnecting] = useState(false);
    const [connected, setConnected] = useState(false);

    const handleSuccess = async (publicToken: string, metadata: any) => {
        setConnected(true);

        // Analyze transactions
        try {
            const transactionsResponse = await fetch('/api/plaid/transactions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: 'demo-user' }),
            });

            const { transactions } = await transactionsResponse.json();

            if (transactions && transactions.length > 0) {
                await fetch('/api/analyze/transactions', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ transactions }),
                });
            }
        } catch (error) {
            console.error('Analysis error:', error);
        }

        // Move to next step after short delay
        setTimeout(() => {
            onNext();
        }, 1500);
    };

    if (connected) {
        return (
            <>
                <CardHeader className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
                    >
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </motion.div>
                    <CardTitle className="text-2xl font-bold">Bank Connected!</CardTitle>
                    <p className="text-gray-500 mt-2">
                        Analyzing your transactions...
                    </p>
                </CardHeader>
                <CardContent className="flex justify-center py-8">
                    <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-indigo-600 rounded-full animate-bounce" />
                        <div className="h-2 w-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="h-2 w-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                </CardContent>
            </>
        );
    }

    return (
        <>
            <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Connect Your Bank</CardTitle>
                <p className="text-gray-500 mt-2">
                    Securely link your account to find savings opportunities
                </p>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Security Features */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <Shield className="h-6 w-6 text-green-600 mb-2" />
                        <p className="text-sm font-medium text-gray-900">Bank-Grade</p>
                        <p className="text-xs text-gray-500">256-bit encryption</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <Zap className="h-6 w-6 text-indigo-600 mb-2" />
                        <p className="text-sm font-medium text-gray-900">Instant</p>
                        <p className="text-xs text-gray-500">Real-time analysis</p>
                    </div>
                </div>

                {/* What We'll Find */}
                <div className="bg-indigo-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-indigo-900 mb-3">What we'll detect:</p>
                    <div className="space-y-2">
                        <div className="flex items-center text-sm text-indigo-800">
                            <TrendingUp className="h-4 w-4 mr-2 text-indigo-600" />
                            Bank fees & overdraft charges
                        </div>
                        <div className="flex items-center text-sm text-indigo-800">
                            <TrendingUp className="h-4 w-4 mr-2 text-indigo-600" />
                            Unused subscriptions
                        </div>
                        <div className="flex items-center text-sm text-indigo-800">
                            <TrendingUp className="h-4 w-4 mr-2 text-indigo-600" />
                            Duplicate charges
                        </div>
                    </div>
                </div>

                {/* Plaid Link Button */}
                <PlaidLinkButton
                    onSuccess={handleSuccess}
                    userId="demo-user"
                />

                <p className="text-xs text-center text-gray-500">
                    Powered by Plaid • Trusted by 8,000+ apps
                </p>
            </CardContent>
        </>
    );
}
