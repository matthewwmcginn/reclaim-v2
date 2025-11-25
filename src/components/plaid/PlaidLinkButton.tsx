"use client";

import { useState, useCallback, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface PlaidLinkButtonProps {
    onSuccess: (publicToken: string, metadata: any) => void;
    onExit?: () => void;
    userId?: string;
}

export function PlaidLinkButton({ onSuccess, onExit, userId = 'demo-user' }: PlaidLinkButtonProps) {
    const [linkToken, setLinkToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch link token on component mount
    useEffect(() => {
        async function createLinkToken() {
            try {
                const response = await fetch('/api/plaid/create-link-token', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId }),
                });

                const data = await response.json();

                if (data.error) {
                    setError(data.error);
                } else {
                    setLinkToken(data.link_token);
                }
            } catch (err: any) {
                setError(err.message);
            }
        }

        createLinkToken();
    }, [userId]);

    const handleOnSuccess = useCallback(
        async (publicToken: string, metadata: any) => {
            setLoading(true);
            try {
                // Exchange public token for access token
                const response = await fetch('/api/plaid/exchange-token', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ publicToken, userId }),
                });

                const data = await response.json();

                if (data.success) {
                    onSuccess(publicToken, metadata);
                } else {
                    setError(data.error || 'Failed to connect bank account');
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        },
        [onSuccess, userId]
    );

    const config = {
        token: linkToken,
        onSuccess: handleOnSuccess,
        onExit: onExit || (() => {}),
    };

    const { open, ready } = usePlaidLink(config);

    if (error) {
        return (
            <div className="flex items-center gap-2 text-red-600">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">Setup required - Check .env.local file</span>
            </div>
        );
    }

    return (
        <Button
            onClick={() => open()}
            disabled={!ready || loading}
            size="lg"
            className="w-full"
        >
            {loading ? (
                <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Connecting...
                </>
            ) : ready ? (
                <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Connect Your Bank Account
                </>
            ) : (
                <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Loading...
                </>
            )}
        </Button>
    );
}
