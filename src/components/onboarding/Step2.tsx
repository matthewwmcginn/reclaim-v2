"use client";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface StepProps {
    onNext: () => void;
}

export function Step2({ onNext }: StepProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onNext, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 50);
        return () => clearInterval(interval);
    }, [onNext]);

    return (
        <>
            <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
                </div>
                <CardTitle className="text-2xl font-bold">Analyzing finances...</CardTitle>
                <p className="text-gray-500 mt-2">
                    Scanning 12 months of transactions for hidden fees.
                </p>
            </CardHeader>
            <CardContent className="space-y-6 pb-8">
                <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-gray-600">
                        <span>Scanning...</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-indigo-600 transition-all duration-100 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    {progress > 20 && (
                        <div className="flex items-center text-sm text-green-600 animate-in fade-in slide-in-from-bottom-2">
                            Found: Netflix Subscription (Unused)
                        </div>
                    )}
                    {progress > 50 && (
                        <div className="flex items-center text-sm text-green-600 animate-in fade-in slide-in-from-bottom-2">
                            Found: Overdraft Fee ($35.00)
                        </div>
                    )}
                    {progress > 80 && (
                        <div className="flex items-center text-sm text-green-600 animate-in fade-in slide-in-from-bottom-2">
                            Found: Price Drop on Laptop
                        </div>
                    )}
                </div>
            </CardContent>
        </>
    );
}
