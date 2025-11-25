"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Lock } from "lucide-react";

interface StepProps {
    onNext: () => void;
}

export function Step1({ onNext }: StepProps) {
    return (
        <>
            <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Building2 className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl font-bold">Connect your bank</CardTitle>
                <p className="text-gray-500 mt-2">
                    We need to scan your transactions to find refunds.
                </p>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center border border-gray-200">
                            <span className="font-bold text-blue-600">C</span>
                        </div>
                        <span className="font-medium text-gray-900">Chase Bank</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={onNext}>Connect</Button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center border border-gray-200">
                            <span className="font-bold text-red-600">B</span>
                        </div>
                        <span className="font-medium text-gray-900">Bank of America</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={onNext}>Connect</Button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center border border-gray-200">
                            <span className="font-bold text-green-600">W</span>
                        </div>
                        <span className="font-medium text-gray-900">Wells Fargo</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={onNext}>Connect</Button>
                </div>

                <div className="flex items-center justify-center text-xs text-gray-500 mt-4">
                    <Lock className="h-3 w-3 mr-1" />
                    Secured by Plaid
                </div>
            </CardContent>
        </>
    );
}
