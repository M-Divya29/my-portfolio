# 🚀 GitHub & Vercel Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click **+** icon (top right) → **New repository**
3. Repository name: `my-portfolio`
4. Description: `Professional portfolio website with React`
5. Select **Public** (to make it accessible)
6. **DON'T** initialize with README
7. Click **Create repository**

## Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
cd "C:\Users\syam4\OneDrive\Documents\Divya_Doc\resume\my-portfolio"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

# Rename branch to main
git branch -M main

# Push code to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Vercel (For Public Access)

### Option A: Easy - Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click **New Project**
3. Select **Import** your GitHub repository
4. Choose `mdivyalalitha29/my-portfolio`
5. Vercel will auto-detect React configuration
6. Click **Deploy**
7. **Your portfolio is now live!** 🎉

You'll get a URL like: `https://my-portfolio-sankhla-divya.vercel.app`

### Option B: Using CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
cd "C:\Users\syam4\OneDrive\Documents\Divya_Doc\resume\my-portfolio"
vercel

# Follow the prompts
# Your live URL will be displayed
```

## Step 4: Automatic Deployments

Once Vercel is connected to your GitHub repo:
- Every time you push to `main` branch, Vercel automatically redeploys
- You get automatic preview URLs for pull requests
- No manual deployment needed!

## Verification

After deployment:
1. ✅ Visit your Vercel URL in browser
2. ✅ All sections should display properly
3. ✅ Animations and features should work
4. ✅ Share your portfolio link!

## Environment Configuration

Your portfolio will be deployed to production automatically.

No additional configuration needed! Vercel handles:
- Build optimization
- SSL certificates
- Caching
- CDN distribution

## Troubleshooting

### "Port already in use"
This is normal - development uses another port automatically

### Build fails
- Check: `npm run build` locally first
- Verify package.json scripts are correct
- Check node_modules are properly installed

### GitHub connection issues
- Verify you have git installed
- Check remote: `git remote -v`
- Use HTTPS if SSH doesn't work

---

**✨ Your portfolio is now ready for the world to see!**
