# Vercel Deployment Guide

Deploy your Reclaim app to Vercel with Plaid integration in minutes.

## Prerequisites

- GitHub account with `reclaim-v2` repository pushed
- Vercel account (free tier works!)
- Plaid account with API keys

## Step 1: Prepare Your Repository

Make sure all changes are committed and pushed:

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Click **"Add New"** → **"Project"**
3. Import your `reclaim-v2` repository from GitHub
4. Vercel will auto-detect Next.js - **don't change any settings yet**
5. Click **"Deploy"** (without adding environment variables)
6. Wait for initial deployment to complete (~2 minutes)

### Option B: Using Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

## Step 3: Add Environment Variables

### In Vercel Dashboard:

1. Go to your project dashboard
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in the sidebar
4. Add these variables one by one:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `PLAID_CLIENT_ID` | `692603f04b4293001c47093b` | All (Production, Preview, Development) |
| `PLAID_SECRET` | `1bafedaa35b710554934837b163704` | All |
| `PLAID_ENV` | `sandbox` | All |

### How to Add Each Variable:

1. Click **"Add New"**
2. Enter **Variable Name** (e.g., `PLAID_CLIENT_ID`)
3. Enter **Value** (your actual key)
4. Check all three environment boxes: ✅ Production ✅ Preview ✅ Development
5. Click **"Save"**
6. Repeat for each variable

## Step 4: Redeploy

After adding environment variables:

1. Go to **"Deployments"** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. ✅ Check **"Use existing Build Cache"**
5. Click **"Redeploy"**

**Or** just push a new commit:
```bash
git commit --allow-empty -m "Trigger Vercel redeploy"
git push origin main
```

## Step 5: Test Your Deployment

1. Click **"Visit"** to open your live site
2. The URL will be something like: `https://reclaim-v2.vercel.app`
3. Click **"Connect Your Bank Free"**
4. Use Plaid sandbox credentials:
   - Username: `user_good`
   - Password: `pass_good`

## ✅ Your App is Now Live!

Your Reclaim app is deployed with:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-scaling
- ✅ Plaid integration working
- ✅ AI transaction analysis
- ✅ Real-time updates

## Custom Domain (Optional)

### Add Your Own Domain:

1. Go to **"Settings"** → **"Domains"**
2. Click **"Add"**
3. Enter your domain (e.g., `reclaim.yourdomain.com`)
4. Follow DNS setup instructions
5. Vercel handles SSL automatically

## Environment Setup Comparison

### Sandbox (Current Setup) ✅
```env
PLAID_ENV=sandbox
PLAID_SECRET=your_sandbox_secret
```
- ✅ Free forever
- ✅ Test banks only
- ✅ Fake transactions
- ✅ Perfect for demos
- ✅ No verification needed

### Production (For Real Banks) 🚀
```env
PLAID_ENV=production
PLAID_SECRET=your_production_secret
```
- Real bank connections
- Requires Plaid approval
- More API calls available
- Production pricing applies

## Automatic Deployments

Every time you push to GitHub:
- ✅ Vercel automatically deploys
- ✅ Preview deployments for PRs
- ✅ Production deployment on `main` branch
- ✅ Rollback available anytime

## Monitoring & Analytics

### Built-in Vercel Features:

1. **Analytics**: See page views, performance
2. **Logs**: Debug production issues
3. **Speed Insights**: Performance metrics
4. **Web Vitals**: Core metrics tracking

Access via your project dashboard.

## Troubleshooting

### "PLAID_CLIENT_ID is undefined"

**Solution**:
1. Check environment variables are saved in Vercel
2. Redeploy after adding variables
3. Clear build cache if needed

### Bank connection not working

**Solution**:
1. Verify all 3 Plaid variables are set
2. Check `PLAID_ENV=sandbox` (not `PLAID_ENV=sandbox ` with space)
3. View deployment logs for errors

### 500 Error on API routes

**Solution**:
1. Check **Functions** logs in Vercel
2. Environment variables must be set for **all environments**
3. Redeploy after fixing

### Build Failed

**Solution**:
```bash
# Test build locally first
npm run build

# If it works locally, redeploy on Vercel
```

## Performance Optimization

Your app is already optimized with:
- ✅ Next.js 16 with Turbopack
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Edge caching
- ✅ Compression enabled

## Security Best Practices

### ✅ Already Implemented:
- Environment variables encrypted by Vercel
- HTTPS enforced automatically
- API routes secured
- No credentials in code

### 🔒 For Production (Future):
- [ ] Add user authentication
- [ ] Implement rate limiting
- [ ] Add database (Vercel Postgres)
- [ ] Enable audit logging
- [ ] Add session management

## Costs

### Free Tier Includes:
- Unlimited deployments
- 100GB bandwidth/month
- Automatic SSL
- Preview deployments
- **Perfect for demos!**

### If You Need More:
- Pro: $20/month
- Unlimited bandwidth
- Advanced analytics
- Team collaboration

## Upgrade to Production

When ready for real users:

### 1. Complete Plaid Verification
- Submit app for review at dashboard.plaid.com
- Provide privacy policy
- Explain use case
- Wait ~2-3 days for approval

### 2. Update Environment Variables
```env
PLAID_ENV=production
PLAID_SECRET=your_production_secret_here
```

### 3. Add Database
```bash
# Add Vercel Postgres
vercel postgres create

# Add connection string to environment variables
DATABASE_URL=postgres://...
```

### 4. Add Authentication
```bash
npm install @clerk/nextjs
# or
npm install next-auth
```

### 5. Deploy
```bash
git push origin main
```

## Useful Commands

```bash
# View deployment logs
vercel logs

# List deployments
vercel ls

# Pull environment variables locally
vercel env pull

# Promote preview to production
vercel promote <deployment-url>

# Rollback to previous deployment
# (Use Vercel dashboard)
```

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Plaid Docs**: https://plaid.com/docs
- **Your Live App**: Check Vercel dashboard for URL

## Next Steps

After deployment:

1. ✅ Share your live link!
2. 📊 Monitor analytics
3. 🎨 Customize branding
4. 🚀 Add more features
5. 💰 Upgrade to production when ready

---

**Your app is now live on the internet!** 🎉

Share your Vercel URL and start collecting feedback!
