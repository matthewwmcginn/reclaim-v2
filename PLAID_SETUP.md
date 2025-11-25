# Plaid Integration Setup Guide

This guide will help you set up real bank account connections and AI-powered transaction analysis.

## Prerequisites

- Node.js 18+ installed
- A Plaid account (free for development)

## Step 1: Create Plaid Account

1. Go to https://dashboard.plaid.com/signup
2. Sign up for a free account
3. Verify your email address
4. You'll be in **Sandbox mode** by default (perfect for testing!)

## Step 2: Get Your API Keys

1. Log into https://dashboard.plaid.com
2. Go to **Team Settings** → **Keys**
3. Copy your:
   - **Client ID**
   - **Sandbox Secret** (for development)

## Step 3: Configure Environment Variables

1. Open `.env.local` in the project root
2. Add your credentials:

```env
PLAID_CLIENT_ID=your_client_id_here
PLAID_SECRET=your_sandbox_secret_here
PLAID_ENV=sandbox
```

## Step 4: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## Step 5: Test the Integration

1. Go to http://localhost:3000/connect-bank
2. Click "Connect Your Bank Account"
3. Use Plaid Sandbox test credentials:
   - **Username**: `user_good`
   - **Password**: `pass_good`
   - **Institution**: Any bank (Chase, Bank of America, etc.)

## Sandbox Test Credentials

Plaid provides various test accounts:

| Username | Password | Description |
|----------|----------|-------------|
| user_good | pass_good | Successful authentication |
| user_bad | pass_good | Invalid credentials |
| user_custom | pass_good | Customizable transactions |

## What Happens Next?

1. **Bank Connection**: Plaid securely connects to the bank
2. **Transaction Sync**: Fetches up to 2 years of transactions
3. **AI Analysis**: Our algorithms detect:
   - Bank fees (overdraft, maintenance, ATM)
   - Recurring subscriptions
   - Duplicate charges
   - Price drop opportunities
4. **Dashboard Update**: Shows all savings opportunities

## Features Implemented

### 1. Bank Connection
- Secure OAuth flow via Plaid Link
- Multi-factor authentication support
- 11,000+ institutions supported

### 2. Transaction Analysis
- **Fee Detection**: Identifies refundable bank fees
- **Subscription Tracking**: Finds recurring charges
- **Duplicate Detection**: Catches double-charges
- **Pattern Recognition**: Uses ML algorithms

### 3. API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/plaid/create-link-token` | POST | Initiate Plaid connection |
| `/api/plaid/exchange-token` | POST | Exchange tokens |
| `/api/plaid/transactions` | POST | Fetch transactions |
| `/api/analyze/transactions` | POST | AI analysis |

## Production Deployment

### 1. Upgrade to Production

1. Complete Plaid's verification process
2. Get your **Production secret**
3. Update `.env.local`:

```env
PLAID_ENV=production
PLAID_SECRET=your_production_secret_here
```

### 2. Add Database

Replace in-memory storage with a real database:

```typescript
// Example with PostgreSQL
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Store access tokens securely
await pool.query(
  'INSERT INTO user_banks (user_id, access_token, item_id) VALUES ($1, $2, $3)',
  [userId, encryptedToken, itemId]
);
```

### 3. Add OpenAI (Optional)

For advanced AI analysis:

```bash
npm install openai
```

```typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const analysis = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{
    role: 'user',
    content: `Analyze these transactions: ${JSON.stringify(transactions)}`
  }]
});
```

## Security Best Practices

1. **Never commit `.env.local`** - Already in `.gitignore`
2. **Encrypt access tokens** - Use AES-256 encryption
3. **Use HTTPS in production** - Enforce SSL/TLS
4. **Implement rate limiting** - Prevent API abuse
5. **Regular security audits** - Review access logs

## Troubleshooting

### Error: "PLAID_CLIENT_ID is undefined"

**Solution**: Make sure `.env.local` exists and is properly formatted

### Error: "Invalid credentials"

**Solution**: Double-check your Client ID and Secret from Plaid dashboard

### Error: "Institution not found"

**Solution**: You might be using production credentials in sandbox mode (or vice versa)

### Transactions not showing up

**Solution**:
1. Check if bank connection was successful
2. Verify the date range in the API call
3. Some test accounts have no transactions by default

## Next Steps

1. ✅ Connect your first bank account
2. ✅ View AI-detected opportunities
3. 📧 Add email notifications for new opportunities
4. 💳 Implement automated refund requests
5. 📊 Add more sophisticated ML models
6. 🏦 Support multiple bank accounts per user

## Resources

- [Plaid Documentation](https://plaid.com/docs/)
- [Plaid Quickstart](https://plaid.com/docs/quickstart/)
- [Sandbox Testing Guide](https://plaid.com/docs/sandbox/)
- [API Reference](https://plaid.com/docs/api/)

## Support

- Plaid Support: support@plaid.com
- Plaid Slack Community: plaid.com/slack
- GitHub Issues: For this project

---

**Ready to save money?** 🚀
