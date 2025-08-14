# Portfolio Website Deployment Guide

## Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project
   - Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

## Environment Variables Setup

After deployment, you need to configure environment variables in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the following variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### Gmail App Password Setup

To get a Gmail app password:

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to App passwords
5. Generate a new app password for "Mail"
6. Use this password as EMAIL_PASS

## Post-Deployment Steps

1. **Test your contact form** - Make sure emails are being sent correctly
2. **Update your domain** - You can add a custom domain in Vercel settings
3. **Monitor performance** - Use Vercel Analytics to track your site's performance

## Troubleshooting

### Common Issues:

1. **Contact form not working:**

   - Check environment variables are set correctly
   - Verify Gmail app password is correct
   - Check Vercel function logs

2. **Build errors:**

   - Ensure all dependencies are in package.json
   - Check for TypeScript errors
   - Verify Next.js configuration

3. **Image loading issues:**
   - Check next.config.js image domains
   - Ensure images are in the public folder

## Performance Optimization

Your site is already optimized with:

- ✅ Next.js 14 with App Router
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ Image optimization configured
- ✅ Compression enabled
- ✅ SWC minification

## Custom Domain Setup

1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed by Vercel
4. Wait for DNS propagation (can take up to 48 hours)

## Monitoring and Analytics

- Use Vercel Analytics for performance monitoring
- Set up error tracking with Sentry (optional)
- Monitor contact form submissions through Vercel logs
