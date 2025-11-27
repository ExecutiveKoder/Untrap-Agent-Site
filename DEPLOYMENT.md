# AWS Amplify Deployment Guide

This guide will walk you through deploying the Untrap Agent website to AWS Amplify.

## Prerequisites

1. AWS Account with appropriate permissions
2. AWS CLI installed and configured
3. Google reCAPTCHA v3 keys

## Step 1: Get Google reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Click "Register a new site"
3. Enter details:
   - Label: "Untrap Agent Website"
   - reCAPTCHA type: Select "reCAPTCHA v3"
   - Domains: Add your domain (e.g., `untrap.ai`) and `localhost` for testing
4. Accept the terms and click "Submit"
5. Copy both:
   - Site Key (public)
   - Secret Key (private)
6. Update `.env.local`:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
   RECAPTCHA_SECRET_KEY=your_secret_key_here
   ```

## Step 2: Deploy to AWS Amplify

### Option A: Using AWS Console (Recommended for first deployment)

1. **Go to AWS Amplify Console**
   - Navigate to: https://console.aws.amazon.com/amplify/
   - Region: `us-east-2` (or your preferred region)

2. **Create New App**
   - Click "New app" → "Host web app"
   - Choose "Deploy without Git provider" for now (or connect your Git repo)

3. **Manual Deployment (No Git)**
   - Select "Drag and drop"
   - Create a deployment package:
     ```bash
     npm run build
     zip -r deploy.zip .next package.json package-lock.json public next.config.ts
     ```
   - Upload the `deploy.zip` file

4. **Configure Build Settings**
   - Amplify will auto-detect Next.js
   - The `amplify.yml` file in the project root will be used automatically

5. **Add Environment Variables**
   - In Amplify Console, go to "Environment variables"
   - Add the following:
     ```
     NEXT_PUBLIC_RECAPTCHA_SITE_KEY = your_site_key_here
     RECAPTCHA_SECRET_KEY = your_secret_key_here
     ```

6. **Deploy**
   - Click "Save and deploy"
   - Wait for deployment to complete (usually 2-5 minutes)
   - You'll get an Amplify URL like: `https://main.d1234abcd.amplifyapp.com`

### Option B: Connect Git Repository

1. **Push to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Connect in Amplify Console**
   - Click "New app" → "Host web app"
   - Select your Git provider (GitHub, GitLab, Bitbucket, AWS CodeCommit)
   - Authorize AWS Amplify
   - Select repository and branch
   - Amplify auto-detects Next.js and uses `amplify.yml`

3. **Add Environment Variables** (same as Option A step 5)

4. **Save and Deploy**
   - Every push to your branch will trigger automatic deployment

### Option C: Using AWS Amplify CLI

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Configure Amplify**
   ```bash
   amplify configure
   ```
   Follow the prompts to set up your AWS credentials.

3. **Initialize Amplify in Project**
   ```bash
   amplify init
   ```
   - Enter a name for the project: `untrap-agent-site`
   - Enter a name for the environment: `production`
   - Choose your default editor
   - Choose the type of app: `javascript`
   - Framework: `react`
   - Source directory: `.`
   - Build directory: `.next`
   - Build command: `npm run build`
   - Start command: `npm run start`

4. **Add Hosting**
   ```bash
   amplify add hosting
   ```
   - Select "Hosting with Amplify Console"
   - Choose "Manual deployment"

5. **Set Environment Variables**
   Create `amplify/team-provider-info.json` or set via console:
   ```bash
   amplify env add production
   ```

6. **Deploy**
   ```bash
   amplify publish
   ```

## Step 3: Configure Custom Domain (Optional)

1. **In Amplify Console**
   - Go to "Domain management"
   - Click "Add domain"
   - Enter your domain (e.g., `untrap.ai`)
   - Follow DNS configuration instructions
   - Wait for SSL certificate provisioning

2. **Update reCAPTCHA**
   - Add your custom domain to reCAPTCHA admin console
   - Under "Domains" section

## Step 4: Set Up Contact Form Notifications

The contact form currently logs submissions. To make it fully functional:

### Option 1: AWS SES (Simple Email Service)

1. **Set up SES**
   - Verify your email domain in SES
   - Create SMTP credentials

2. **Add to `.env.local`**
   ```
   SES_REGION=us-east-2
   SES_FROM_EMAIL=noreply@untrap.ai
   SES_TO_EMAIL=contact@untrap.ai
   ```

3. **Install nodemailer**
   ```bash
   npm install nodemailer
   ```

4. **Update `app/api/contact/route.ts`**
   Add SES email sending logic.

### Option 2: SendGrid

1. **Get SendGrid API Key**
   - Sign up at https://sendgrid.com
   - Create an API key

2. **Add to `.env.local`**
   ```
   SENDGRID_API_KEY=your_api_key
   ```

3. **Install SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```

### Option 3: Webhook to Zapier/Make

1. Create a Zapier/Make webhook
2. Update the contact API to POST to the webhook
3. Connect to your email, CRM, Slack, etc.

## Step 5: Monitor and Optimize

1. **CloudWatch Logs**
   - View logs in AWS CloudWatch
   - Set up alerts for errors

2. **Amplify Monitoring**
   - Check deployment history
   - Monitor traffic and performance

3. **Google Analytics** (Optional)
   - Add Google Analytics to track conversions
   - Monitor demo booking rates

## Testing Checklist

Before going live:

- [ ] Test contact form submission
- [ ] Verify reCAPTCHA works
- [ ] Test on mobile devices
- [ ] Check all navigation links
- [ ] Verify smooth scrolling works
- [ ] Test form validation
- [ ] Check contact form notifications
- [ ] Verify SSL certificate is active
- [ ] Test custom domain (if configured)
- [ ] Check page load speed
- [ ] Verify SEO metadata

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check environment variables are set

### Contact Form Not Working
- Verify reCAPTCHA keys are correct
- Check browser console for errors
- Verify API route is accessible

### Slow Performance
- Enable Next.js Image Optimization
- Check Amplify hosting tier
- Optimize images and assets

## Cost Estimate

AWS Amplify pricing (as of 2024):
- Build minutes: First 1,000 free, then $0.01/minute
- Hosting: First 15 GB served free, then $0.15/GB
- Storage: First 5 GB free, then $0.023/GB

Expected monthly cost for small-medium traffic: **$5-25/month**

## Support

For deployment issues:
- AWS Amplify Docs: https://docs.amplify.aws/
- Contact: contact@untrap.ai
