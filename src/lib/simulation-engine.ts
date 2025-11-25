import { useState, useEffect, useCallback } from 'react';

export type RefundStatus = 'available' | 'processing' | 'completed';
export type RefundType = 'Bank Fee' | 'Overdraft Fee' | 'Price Drop' | 'Duplicate Charge' | 'Subscription Refund';

export interface RefundOpportunity {
    id: string;
    type: RefundType;
    description: string;
    amount: number;
    merchant: string;
    reason: string;
    date: Date;
    status: RefundStatus;
    pointsReward: number;
}

export interface ChartDataPoint {
    name: string;
    value: number;
    date: string;
}

export function useSimulationEngine() {
    const [refunds, setRefunds] = useState<RefundOpportunity[]>([]);
    const [lastEvent, setLastEvent] = useState<string | null>(null);
    const [totalSaved, setTotalSaved] = useState(347.82);
    const [monthSaved, setMonthSaved] = useState(89.50);
    const [isSimulationRunning, setIsSimulationRunning] = useState(true);
    const [savingsHistory, setSavingsHistory] = useState<ChartDataPoint[]>([]);
    const [activityData, setActivityData] = useState<ChartDataPoint[]>([]);

    // Initial Mock Data
    useEffect(() => {
        setRefunds([
            {
                id: '1',
                type: 'Bank Fee',
                description: 'Monthly Maintenance Fee',
                amount: 12.00,
                merchant: 'Chase Bank',
                reason: 'Eligible for fee waiver',
                date: new Date(Date.now() - 86400000 * 2),
                status: 'available',
                pointsReward: 25
            },
            {
                id: '2',
                type: 'Price Drop',
                description: 'Laptop Price Protection',
                amount: 89.99,
                merchant: 'Best Buy',
                reason: 'Price dropped $89.99',
                date: new Date(Date.now() - 86400000 * 5),
                status: 'available',
                pointsReward: 100
            },
            {
                id: '5',
                type: 'Overdraft Fee',
                description: 'Overdraft Fee',
                amount: 35.00,
                merchant: 'Bank of America',
                reason: 'One-time forgiveness',
                date: new Date(Date.now() - 86400000 * 7),
                status: 'processing',
                pointsReward: 75
            }
        ]);

        // Initialize chart data
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        const initialSavings = months.map((month, i) => ({
            name: month,
            value: 250 + Math.random() * 150,
            date: month
        }));
        setSavingsHistory(initialSavings);

        const activities = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const initialActivity = activities.map((day, i) => ({
            name: day,
            value: Math.floor(Math.random() * 10) + 3,
            date: day
        }));
        setActivityData(initialActivity);
    }, []);

    const triggerRandomEvent = useCallback(() => {
        const random = Math.random();

        if (random < 0.3) {
            // New Opportunity
            const types: RefundType[] = ['Price Drop', 'Subscription Refund', 'Duplicate Charge', 'Bank Fee'];
            const merchants = ['Amazon', 'Uber', 'Netflix', 'Target', 'Walmart'];

            const type = types[Math.floor(Math.random() * types.length)];
            const merchant = merchants[Math.floor(Math.random() * merchants.length)];
            const amount = Number((Math.random() * 45 + 5).toFixed(2));

            const newRefund: RefundOpportunity = {
                id: Math.random().toString(36).substr(2, 9),
                type,
                description: `${type} Detected`,
                amount,
                merchant,
                reason: 'AI detected a pattern',
                date: new Date(),
                status: 'available',
                pointsReward: Math.floor(Math.random() * 40 + 10)
            };

            setRefunds(prev => [newRefund, ...prev]);
            setLastEvent(`New ${type} found: $${amount}`);

        } else if (random < 0.7) {
            // Update Status
            setRefunds(prev => {
                const processing = prev.filter(r => r.status === 'processing');
                if (processing.length > 0) {
                    const target = processing[Math.floor(Math.random() * processing.length)];
                    const updated = prev.map(r => {
                        if (r.id === target.id) {
                            return { ...r, status: 'completed' as RefundStatus };
                        }
                        return r;
                    });

                    // Side effect inside reducer is bad practice usually, but for mock demo it's fine
                    // Better to do this outside, but keeping it simple for now
                    return updated;
                }
                return prev;
            });

            // We need to update totals if something completed, but doing it in the reducer is tricky.
            // For this simple demo, we'll skip the exact total update sync here or do it in an effect.
        }
    }, []);

    // Run Simulation
    useEffect(() => {
        if (!isSimulationRunning) return;

        const interval = setInterval(triggerRandomEvent, 5000);
        return () => clearInterval(interval);
    }, [triggerRandomEvent, isSimulationRunning]);

    const claimRefund = (id: string) => {
        setRefunds(prev => prev.map(r => {
            if (r.id === id) {
                setTotalSaved(t => t + r.amount);
                setMonthSaved(m => m + r.amount);

                // Update savings history
                setSavingsHistory(history => {
                    const newHistory = [...history];
                    const lastPoint = newHistory[newHistory.length - 1];
                    newHistory.push({
                        name: `+${r.amount.toFixed(0)}`,
                        value: lastPoint.value + r.amount,
                        date: new Date().toLocaleDateString()
                    });
                    if (newHistory.length > 12) newHistory.shift();
                    return newHistory;
                });

                return { ...r, status: 'processing' };
            }
            return r;
        }));
    };

    const toggleSimulation = () => {
        setIsSimulationRunning(prev => !prev);
    };

    const resetSimulation = () => {
        setTotalSaved(347.82);
        setMonthSaved(89.50);
        setRefunds(prev => prev.map(r => ({ ...r, status: 'available' })));
        setLastEvent(null);
    };

    return {
        refunds,
        lastEvent,
        totalSaved,
        monthSaved,
        claimRefund,
        isSimulationRunning,
        toggleSimulation,
        resetSimulation,
        savingsHistory,
        activityData
    };
}
