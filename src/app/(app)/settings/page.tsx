"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Bell, Shield, CreditCard } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="p-8 max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-500">Manage your account and preferences.</p>
            </div>

            <div className="grid gap-6">
                {/* Profile Section */}
                <Card className="bg-white border-none shadow-sm">
                    <CardHeader>
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                <User className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <CardTitle className="text-xl">Profile Information</CardTitle>
                                <p className="text-sm text-gray-500">Update your personal details.</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" defaultValue="Sarah" className="w-full px-3 py-2 border border-gray-200 rounded-lg" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" defaultValue="Connor" className="w-full px-3 py-2 border border-gray-200 rounded-lg" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input type="email" defaultValue="sarah@example.com" className="w-full px-3 py-2 border border-gray-200 rounded-lg" />
                        </div>
                        <Button>Save Changes</Button>
                    </CardContent>
                </Card>

                {/* Notifications */}
                <Card className="bg-white border-none shadow-sm">
                    <CardHeader>
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                <Bell className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div>
                                <CardTitle className="text-xl">Notifications</CardTitle>
                                <p className="text-sm text-gray-500">Choose what we alert you about.</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-medium text-gray-900">Refund Alerts</p>
                                <p className="text-sm text-gray-500">Get notified when we find money.</p>
                            </div>
                            <div className="h-6 w-11 bg-indigo-600 rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-medium text-gray-900">Weekly Report</p>
                                <p className="text-sm text-gray-500">Summary of your savings.</p>
                            </div>
                            <div className="h-6 w-11 bg-gray-200 rounded-full relative cursor-pointer">
                                <div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Subscription */}
                <Card className="bg-white border-none shadow-sm">
                    <CardHeader>
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                                <CreditCard className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <CardTitle className="text-xl">Subscription</CardTitle>
                                <p className="text-sm text-gray-500">Manage your plan.</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <div>
                            <p className="font-bold text-lg text-gray-900">Pro Plan</p>
                            <p className="text-sm text-gray-500">$9/month • Renews Dec 20</p>
                        </div>
                        <Button variant="outline">Manage Billing</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
