"use client";

import { useState } from 'react';
import { PlaidLinkButton } from '@/components/plaid/PlaidLinkButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Shield, Zap, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ConnectBankPage() {
    const router = useRouter();
    const [connected, setConnected] = useState(false);

    const handleSuccess = async (publicToken: string, metadata: any) => {
        console.log('Bank connected:', metadata);
        setConnected(true);

        // Fetch and analyze transactions
        try {
            const transactionsResponse = await fetch('/api/plaid/transactions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: 'demo-user' }),
            });

            const { transactions } = await transactionsResponse.json();

            // Analyze transactions
            const analysisResponse = await fetch('/api/analyze/transactions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ transactions }),
            });

            const analysis = await analysisResponse.json();
            console.log('Analysis:', analysis);

            // Redirect to dashboard after 2 seconds
            setTimeout(() => {
                router.push('/dashboard');
            }, 2000);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (connected) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                >
                    <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Bank Connected!</h2>
                    <p className="text-gray-600 mb-6">
                        Analyzing your transactions for savings opportunities...
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="h-2 w-2 bg-indigo-600 rounded-full animate-bounce" />
                        <div className="h-2 w-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="h-2 w-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Link href="/" className="inline-flex items-center space-x-2 mb-8">
                        <div className="h-10 w-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                            <Shield className="h-6 w-6" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900">Reclaim</span>
                    </Link>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Connect Your Bank Account
                    </h1>
                    <p className="text-xl text-gray-600">
                        Securely link your bank to start finding savings opportunities
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card className="bg-white border-none shadow-lg">
                        <CardHeader>
                            <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-green-600" />
                            </div>
                            <CardTitle className="text-lg">Bank-Grade Security</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-sm">
                                256-bit encryption. We never store your login credentials.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-none shadow-lg">
                        <CardHeader>
                            <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6 text-indigo-600" />
                            </div>
                            <CardTitle className="text-lg">Instant Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-sm">
                                AI scans your transactions in seconds to find savings.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-none shadow-lg">
                        <CardHeader>
                            <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <CheckCircle2 className="h-6 w-6 text-purple-600" />
                            </div>
                            <CardTitle className="text-lg">Trusted Platform</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-sm">
                                Used by 50,000+ users. Powered by Plaid.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Connection Card */}
                <Card className="bg-white border-none shadow-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Ready to Start Saving?</CardTitle>
                        <p className="text-gray-600 mt-2">
                            Click below to securely connect your bank account
                        </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <PlaidLinkButton onSuccess={handleSuccess} />

                        <div className="text-center">
                            <p className="text-sm text-gray-500 mb-4">
                                or{' '}
                                <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-700 font-medium">
                                    try the demo version
                                </Link>
                            </p>
                        </div>

                        {/* Setup Instructions */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
                            <p className="font-semibold text-blue-900 mb-2">🔧 Developer Setup Required:</p>
                            <ol className="list-decimal list-inside space-y-1 text-blue-800">
                                <li>Sign up at <a href="https://dashboard.plaid.com" target="_blank" rel="noopener noreferrer" className="underline">dashboard.plaid.com</a></li>
                                <li>Get your Client ID and Sandbox Secret</li>
                                <li>Add them to <code className="bg-blue-100 px-1 rounded">.env.local</code> file</li>
                                <li>Restart the development server</li>
                            </ol>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
