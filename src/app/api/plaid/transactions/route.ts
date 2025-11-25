import { NextResponse } from 'next/server';
import { plaidClient } from '@/lib/plaid-client';

// Temporary storage (in production, use a database)
const accessTokenStore: { [userId: string]: string } = {};

export async function POST(request: Request) {
    try {
        const { userId, startDate, endDate } = await request.json();

        // Get access token (in production, fetch from database)
        const accessToken = accessTokenStore[userId];

        if (!accessToken) {
            return NextResponse.json(
                { error: 'No bank account connected. Please connect your bank first.' },
                { status: 400 }
            );
        }

        // Fetch transactions from Plaid
        const response = await plaidClient.transactionsGet({
            access_token: accessToken,
            start_date: startDate || '2024-01-01',
            end_date: endDate || new Date().toISOString().split('T')[0],
        });

        const transactions = response.data.transactions;
        const accounts = response.data.accounts;

        return NextResponse.json({
            transactions,
            accounts,
            total_transactions: transactions.length
        });
    } catch (error: any) {
        console.error('Error fetching transactions:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch transactions' },
            { status: 500 }
        );
    }
}

// Helper to store access token
export function storeAccessToken(userId: string, token: string) {
    accessTokenStore[userId] = token;
}
