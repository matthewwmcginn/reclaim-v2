import { NextResponse } from 'next/server';
import type { Transaction } from 'plaid';

interface RefundOpportunity {
    id: string;
    type: 'Bank Fee' | 'Overdraft Fee' | 'Price Drop' | 'Duplicate Charge' | 'Subscription Refund';
    description: string;
    amount: number;
    merchant: string;
    reason: string;
    date: Date;
    status: 'available' | 'processing' | 'completed';
    confidence: number;
    originalTransaction: any;
}

export async function POST(request: Request) {
    try {
        const { transactions } = await request.json();

        if (!transactions || transactions.length === 0) {
            return NextResponse.json({ opportunities: [] });
        }

        // Analyze transactions for opportunities
        const opportunities: RefundOpportunity[] = [];

        // 1. Detect Bank Fees
        const feeOpportunities = detectBankFees(transactions);
        opportunities.push(...feeOpportunities);

        // 2. Detect Subscriptions
        const subscriptionOpportunities = detectSubscriptions(transactions);
        opportunities.push(...subscriptionOpportunities);

        // 3. Detect Duplicate Charges
        const duplicateOpportunities = detectDuplicates(transactions);
        opportunities.push(...duplicateOpportunities);

        // Calculate totals
        const totalSavings = opportunities.reduce((sum, opp) => sum + opp.amount, 0);
        const availableNow = opportunities
            .filter(opp => opp.status === 'available')
            .reduce((sum, opp) => sum + opp.amount, 0);

        return NextResponse.json({
            opportunities,
            totalSavings,
            availableNow,
            count: opportunities.length
        });
    } catch (error: any) {
        console.error('Error analyzing transactions:', error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

// Detect refundable bank fees
function detectBankFees(transactions: any[]): RefundOpportunity[] {
    const feeKeywords = [
        'overdraft', 'nsf', 'insufficient funds',
        'maintenance fee', 'monthly fee', 'service charge',
        'atm fee', 'withdrawal fee', 'foreign transaction'
    ];

    const opportunities: RefundOpportunity[] = [];

    transactions.forEach(txn => {
        const description = txn.name?.toLowerCase() || '';

        for (const keyword of feeKeywords) {
            if (description.includes(keyword)) {
                const type = keyword.includes('overdraft') ? 'Overdraft Fee' : 'Bank Fee';

                opportunities.push({
                    id: `fee-${txn.transaction_id}`,
                    type,
                    description: `${type} - ${txn.name}`,
                    amount: Math.abs(txn.amount),
                    merchant: txn.merchant_name || 'Bank',
                    reason: 'Eligible for fee waiver or refund',
                    date: new Date(txn.date),
                    status: 'available',
                    confidence: 0.85,
                    originalTransaction: txn
                });
                break;
            }
        }
    });

    return opportunities;
}

// Detect recurring subscriptions
function detectSubscriptions(transactions: any[]): RefundOpportunity[] {
    const merchantMap: { [key: string]: any[] } = {};

    // Group transactions by merchant and similar amount
    transactions.forEach(txn => {
        const merchant = txn.merchant_name || txn.name;
        const key = `${merchant}_${Math.floor(txn.amount)}`;

        if (!merchantMap[key]) {
            merchantMap[key] = [];
        }
        merchantMap[key].push(txn);
    });

    const opportunities: RefundOpportunity[] = [];

    // Find recurring patterns (3+ charges)
    Object.entries(merchantMap).forEach(([key, txns]) => {
        if (txns.length >= 3) {
            const merchant = txns[0].merchant_name || txns[0].name;
            const avgAmount = txns.reduce((sum, t) => sum + t.amount, 0) / txns.length;

            // Check if charges are roughly monthly
            const dates = txns.map(t => new Date(t.date).getTime()).sort();
            const intervals: number[] = [];
            for (let i = 1; i < dates.length; i++) {
                intervals.push(dates[i] - dates[i-1]);
            }

            const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
            const daysInterval = avgInterval / (1000 * 60 * 60 * 24);

            // If roughly monthly (25-35 days)
            if (daysInterval >= 25 && daysInterval <= 35) {
                opportunities.push({
                    id: `sub-${key}`,
                    type: 'Subscription Refund',
                    description: `Recurring ${merchant} Subscription`,
                    amount: avgAmount,
                    merchant,
                    reason: 'Potential unused subscription',
                    date: new Date(txns[txns.length - 1].date),
                    status: 'available',
                    confidence: 0.75,
                    originalTransaction: txns[txns.length - 1]
                });
            }
        }
    });

    return opportunities;
}

// Detect duplicate charges
function detectDuplicates(transactions: any[]): RefundOpportunity[] {
    const opportunities: RefundOpportunity[] = [];
    const seen: { [key: string]: any } = {};

    transactions.forEach(txn => {
        const key = `${txn.merchant_name}_${txn.amount}_${txn.date}`;

        if (seen[key]) {
            opportunities.push({
                id: `dup-${txn.transaction_id}`,
                type: 'Duplicate Charge',
                description: `Duplicate charge from ${txn.merchant_name || txn.name}`,
                amount: Math.abs(txn.amount),
                merchant: txn.merchant_name || txn.name,
                reason: 'Duplicate transaction detected',
                date: new Date(txn.date),
                status: 'available',
                confidence: 0.9,
                originalTransaction: txn
            });
        } else {
            seen[key] = txn;
        }
    });

    return opportunities;
}
