"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = () => {
        // Mock login
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <Link href="/" className="mb-8 flex items-center space-x-2">
                <div className="h-10 w-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    <Wallet className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold text-gray-900">Reclaim</span>
            </Link>

            <Card className="w-full max-w-md bg-white border-none shadow-xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                    <p className="text-sm text-gray-500 mt-2">
                        Enter your email to sign in to your account
                    </p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <Button className="w-full" onClick={handleLogin}>
                        Sign In with Email
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" onClick={handleLogin}>Google</Button>
                        <Button variant="outline" onClick={handleLogin}>Apple</Button>
                    </div>
                </CardContent>
            </Card>

            <p className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign up
                </Link>
            </p>
        </div>
    );
}
