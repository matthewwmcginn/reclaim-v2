import { NextResponse } from 'next/server';
import { plaidClient } from '@/lib/plaid-client';

// In production, store this in a secure database
let accessTokenStore: { [userId: string]: string } = {};

export async function POST(request: Request) {
    try {
        const { publicToken, userId } = await request.json();

        const response = await plaidClient.itemPublicTokenExchange({
            public_token: publicToken,
        });

        const accessToken = response.data.access_token;
        const itemId = response.data.item_id;

        // Store access token (in production, use encrypted database)
        accessTokenStore[userId] = accessToken;

        return NextResponse.json({
            success: true,
            itemId,
            message: 'Bank account connected successfully!'
        });
    } catch (error: any) {
        console.error('Error exchanging token:', error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

// Helper function to get access token (for internal use)
export function getAccessToken(userId: string): string | undefined {
    return accessTokenStore[userId];
}
