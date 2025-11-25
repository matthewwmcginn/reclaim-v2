"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
    {
        name: "Free",
        price: "$0",
        description: "Perfect for getting started.",
        features: ["Scan for bank fees", "Basic refund alerts", "Monthly report", "Bank-grade security"],
        cta: "Start Free",
        popular: false,
    },
    {
        name: "Pro",
        price: "$9",
        period: "/mo",
        description: "For serious savers.",
        features: ["Everything in Free", "Automatic fee refunds", "Subscription cancellation", "Priority support", "Advanced AI insights"],
        cta: "Get Pro",
        popular: true,
    },
    {
        name: "Premium",
        price: "$19",
        period: "/mo",
        description: "Maximum savings power.",
        features: ["Everything in Pro", "Bill negotiation", "Concierge support", "Legal assistance", "Family sharing (up to 5)"],
        cta: "Go Premium",
        popular: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Simple, transparent pricing
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Pay a small monthly fee, or let us take a % of what we save you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative rounded-2xl p-8 ${tier.popular
                                    ? "bg-gray-900 text-white ring-4 ring-indigo-600 ring-offset-2"
                                    : "bg-white border border-gray-200 text-gray-900"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className={`text-xl font-bold ${tier.popular ? "text-white" : "text-gray-900"}`}>
                                    {tier.name}
                                </h3>
                                <p className={`mt-2 text-sm ${tier.popular ? "text-gray-300" : "text-gray-500"}`}>
                                    {tier.description}
                                </p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-bold">{tier.price}</span>
                                {tier.period && <span className={`text-sm ${tier.popular ? "text-gray-300" : "text-gray-500"}`}>{tier.period}</span>}
                            </div>
                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <Check className={`h-5 w-5 mr-3 ${tier.popular ? "text-indigo-400" : "text-indigo-600"}`} />
                                        <span className={`text-sm ${tier.popular ? "text-gray-300" : "text-gray-600"}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <Link href={tier.name === "Free" ? "/signup" : "/onboarding"} className="block">
                                <Button
                                    className={`w-full ${tier.popular
                                            ? "bg-white text-gray-900 hover:bg-gray-100"
                                            : "bg-gray-900 text-white hover:bg-gray-800"
                                        }`}
                                >
                                    {tier.cta}
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
