"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Lock, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function Step4() {
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('monthly');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsProcessing(false);
        setIsSuccess(true);

        // Redirect to dashboard after success
        setTimeout(() => {
            router.push("/dashboard");
        }, 2000);
    };

    const formatCardNumber = (value: string) => {
        const cleaned = value.replace(/\s/g, '');
        const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
        return formatted;
    };

    const formatExpiryDate = (value: string) => {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length >= 2) {
            return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
        }
        return cleaned;
    };

    if (isSuccess) {
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
                    <CardTitle className="text-2xl font-bold">Payment Successful!</CardTitle>
                    <p className="text-gray-500 mt-2">
                        Welcome to Reclaim Premium
                    </p>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl text-center">
                        <p className="text-sm text-indigo-600 font-medium">You're all set!</p>
                        <p className="text-gray-600 mt-2">Redirecting to your dashboard...</p>
                    </div>
                </CardContent>
            </>
        );
    }

    return (
        <>
            <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Choose Your Plan</CardTitle>
                <p className="text-gray-500 mt-2">
                    Start saving money with Reclaim Premium
                </p>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Plan Selection */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => setSelectedPlan('monthly')}
                        className={`p-4 rounded-xl border-2 transition-all ${
                            selectedPlan === 'monthly'
                                ? 'border-indigo-600 bg-indigo-50'
                                : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                    >
                        <div className="text-center">
                            <p className="font-semibold text-gray-900">Monthly</p>
                            <p className="text-2xl font-bold text-indigo-600 mt-1">$9.99</p>
                            <p className="text-xs text-gray-500 mt-1">per month</p>
                        </div>
                    </button>

                    <button
                        onClick={() => setSelectedPlan('annual')}
                        className={`p-4 rounded-xl border-2 transition-all relative ${
                            selectedPlan === 'annual'
                                ? 'border-indigo-600 bg-indigo-50'
                                : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                    >
                        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            Save 20%
                        </span>
                        <div className="text-center">
                            <p className="font-semibold text-gray-900">Annual</p>
                            <p className="text-2xl font-bold text-indigo-600 mt-1">$95.99</p>
                            <p className="text-xs text-gray-500 mt-1">per year</p>
                        </div>
                    </button>
                </div>

                {/* Payment Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Card Number
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => {
                                    const formatted = formatCardNumber(e.target.value);
                                    if (formatted.replace(/\s/g, '').length <= 16) {
                                        setCardNumber(formatted);
                                    }
                                }}
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                required
                            />
                            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                value={expiryDate}
                                onChange={(e) => {
                                    const formatted = formatExpiryDate(e.target.value);
                                    if (formatted.replace(/\//g, '').length <= 4) {
                                        setExpiryDate(formatted);
                                    }
                                }}
                                placeholder="MM/YY"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                CVV
                            </label>
                            <input
                                type="text"
                                value={cvv}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '');
                                    if (value.length <= 4) {
                                        setCvv(value);
                                    }
                                }}
                                placeholder="123"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-2 text-sm text-gray-600">
                        <Lock className="h-4 w-4 text-gray-400" />
                        <span>Your payment information is secure and encrypted</span>
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-12 text-lg"
                        disabled={isProcessing}
                    >
                        {isProcessing ? (
                            <span className="flex items-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                />
                                Processing...
                            </span>
                        ) : (
                            `Subscribe - $${selectedPlan === 'monthly' ? '9.99/mo' : '95.99/yr'}`
                        )}
                    </Button>

                    <p className="text-xs text-center text-gray-500">
                        This is a demo. No actual payment will be processed.
                    </p>
                </form>
            </CardContent>
        </>
    );
}
