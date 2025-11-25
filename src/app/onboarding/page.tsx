"use client";

import { Card } from "@/components/ui/card";
import { Step1 } from "@/components/onboarding/Step1";
import { Step2 } from "@/components/onboarding/Step2";
import { Step3 } from "@/components/onboarding/Step3";
import { Step4 } from "@/components/onboarding/Step4";
import { useState } from "react";
import { Wallet } from "lucide-react";
import Link from "next/link";

export default function OnboardingPage() {
    const [step, setStep] = useState(1);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <Link href="/" className="mb-8 flex items-center space-x-2">
                <div className="h-10 w-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    <Wallet className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold text-gray-900">Reclaim</span>
            </Link>

            <Card className="w-full max-w-md bg-white border-none shadow-xl overflow-hidden">
                {step === 1 && <Step1 onNext={() => setStep(2)} />}
                {step === 2 && <Step2 onNext={() => setStep(3)} />}
                {step === 3 && <Step3 onNext={() => setStep(4)} />}
                {step === 4 && <Step4 />}
            </Card>

            <div className="mt-8 flex items-center space-x-2">
                <div className={`h-2 w-2 rounded-full ${step >= 1 ? "bg-indigo-600" : "bg-gray-300"}`} />
                <div className={`h-2 w-2 rounded-full ${step >= 2 ? "bg-indigo-600" : "bg-gray-300"}`} />
                <div className={`h-2 w-2 rounded-full ${step >= 3 ? "bg-indigo-600" : "bg-gray-300"}`} />
                <div className={`h-2 w-2 rounded-full ${step >= 4 ? "bg-indigo-600" : "bg-gray-300"}`} />
            </div>
        </div>
    );
}
