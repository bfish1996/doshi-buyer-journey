# Deployment Guide

## GitHub Repository
- **Repository**: https://github.com/bfish1996/doshi-buyer-journey
- **Visibility**: Private
- **Branch**: main

## Vercel Deployment

### Automatic Deployment (Recommended)
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import from GitHub: `bfish1996/doshi-buyer-journey`
4. Configure project:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `out` (configured in vercel.json)
   - **Install Command**: `npm install` (auto-detected)

### Manual Deployment via CLI
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

## Project Configuration

### Next.js Configuration
- **Output**: Static export (`output: 'export'`)
- **Trailing Slash**: Enabled for better static hosting
- **Images**: Unoptimized for static export compatibility

### Security Headers
The project includes security headers in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block

## Build Process
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server (for testing)
npm start
```

## Environment Variables
Currently no environment variables are required for this static application.

## Domain Configuration
Once deployed, you can:
1. Use the default Vercel domain (e.g., `doshi-buyer-journey.vercel.app`)
2. Configure a custom domain in Vercel dashboard
3. Set up custom domain DNS records as needed
