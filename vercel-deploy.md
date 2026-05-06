# Vercel Deployment Instructions

## 🚀 Fixing 404 Errors on Vercel

The disclaimer URLs are showing 404 errors because Vercel needs proper routing configuration for React SPA.

## 📋 Steps to Fix

### 1. Upload vercel.json
Upload the `vercel.json` file to your Vercel project root directory.

### 2. Redeploy on Vercel
```bash
# If using Vercel CLI
vercel --prod

# Or push to GitHub and Vercel will auto-deploy
git add vercel.json
git commit -m "Add Vercel routing configuration"
git push origin main
```

### 3. Alternative: Vercel Dashboard
1. Go to your Vercel project dashboard
2. Go to Settings → Build & Development Settings
3. Add this rewrite rule in the "Rewrites" section:
   - Source: `/(.*)`
   - Destination: `/index.html`
   - Condition: `Accept: text/html`

## 🔧 Configuration Details

The `vercel.json` file contains:
- SPA routing fallback to index.html
- Proper header conditions for HTML requests
- Handles all dynamic routes including `/disclaimers/:id`

## ✅ Expected Result

After deployment, these URLs should work:
- https://www.equinoxresearch.in/disclaimers/1
- https://www.equinoxresearch.in/disclaimers/2  
- https://www.equinoxresearch.in/disclaimers/3
- https://www.equinoxresearch.in/terms
- https://www.equinoxresearch.in/privacy
- https://www.equinoxresearch.in/refund
- https://www.equinoxresearch.in/investor-charter

## 📞 Support

If issues persist:
1. Check Vercel deployment logs
2. Verify vercel.json is in root directory
3. Clear browser cache and test again
