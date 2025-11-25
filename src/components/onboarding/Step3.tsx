"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function Step3() {
    const router = useRouter();

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

                <Button className="w-full h-12 text-lg" onClick={() => router.push("/dashboard")}>
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </CardContent>
        </>
    );
}
