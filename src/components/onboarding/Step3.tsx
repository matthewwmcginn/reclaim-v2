"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface Step3Props {
    onNext: () => void;
}

export function Step3({ onNext }: Step3Props) {
    return (
        <>
            <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold">Analysis Complete!</CardTitle>
                <p className="text-gray-500 mt-2">
                    We found <span className="font-bold text-gray-900">$347.82</span> in potential savings.
                </p>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="bg-indigo-50 p-6 rounded-xl text-center">
                    <p className="text-sm text-indigo-600 font-medium uppercase tracking-wide">Total Reclaimable</p>
                    <p className="text-4xl font-bold text-indigo-900 mt-2">$347.82</p>
                </div>

                <div className="space-y-4">
                    <Button className="w-full h-12 text-lg" onClick={onNext}>
                        Continue to Subscription
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-gray-500">
                        Unlock unlimited savings opportunities with Reclaim Premium
                    </p>
                </div>
            </CardContent>
        </>
    );
}
