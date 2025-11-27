# Next Steps - Get Your Site Live

## Immediate Actions (15 minutes)

### 1. Get reCAPTCHA Keys (5 minutes)

Visit: https://www.google.com/recaptcha/admin

1. Click "Register a new site"
2. Fill in:
   - **Label**: Untrap Agent Website
   - **reCAPTCHA type**: reCAPTCHA v3
   - **Domains**:
     - Add `localhost` (for testing)
     - Add your production domain (e.g., `untrap.ai`)
3. Accept terms and submit
4. Copy both keys:
   - **Site Key** (starts with 6L...)
   - **Secret Key**

### 2. Update Environment Variables (2 minutes)

Edit `.env.local`:

```bash
# Replace these placeholder values
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6L... (your site key)
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

### 3. Test Locally (5 minutes)

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` (or port shown in terminal)

**Test checklist:**
- [ ] All sections load
- [ ] Navigation works
- [ ] Contact form submits
- [ ] Smooth scrolling works
- [ ] Mobile responsive (resize browser)

### 4. Build for Production (3 minutes)

```bash
# Create production build
npm run build

# Test production build locally (optional)
npm run start
```

Build should complete without errors.

## Deploy to AWS Amplify (30 minutes)

### Option A: Quick Deploy (No Git) - Fastest

1. **Go to AWS Amplify**
   - URL: https://console.aws.amazon.com/amplify/
   - Region: `us-east-2` (Ohio) - matches your other services

2. **Create New App**
   - Click "New app" → "Host web app"
   - Select "Deploy without Git provider"

3. **Upload Build**
   ```bash
   # Create deployment package
   npm run build
   zip -r deploy.zip .next public package.json package-lock.json node_modules next.config.ts
   ```
   - Upload `deploy.zip`

4. **Configure Environment**
   - In Amplify Console → Environment variables
   - Add:
     ```
     NEXT_PUBLIC_RECAPTCHA_SITE_KEY = 6L...
     RECAPTCHA_SECRET_KEY = your_secret_key
     ```

5. **Deploy**
   - Click "Save and deploy"
   - Wait 3-5 minutes
   - You'll get a URL like: `https://main.d1234abcd.amplifyapp.com`

### Option B: Connect Git Repository - Better for Updates

1. **Push to Git First**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Untrap Agent website"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Connect in Amplify**
   - AWS Amplify Console → "New app" → "Host web app"
   - Select Git provider (GitHub, GitLab, etc.)
   - Authorize AWS Amplify
   - Select repository and branch

3. **Build Settings**
   - Amplify auto-detects Next.js
   - Uses `amplify.yml` automatically
   - No changes needed

4. **Add Environment Variables**
   - Same as Option A step 4

5. **Save and Deploy**
   - Every push to main will auto-deploy

## Configure Custom Domain (Optional - 1 hour)

1. **In Amplify Console**
   - Go to "Domain management"
   - Click "Add domain"
   - Enter your domain (e.g., `untrap.ai`)

2. **Update DNS**
   - Follow Amplify's instructions
   - Add CNAME record to your DNS provider
   - Wait for DNS propagation (5-60 minutes)

3. **Update reCAPTCHA**
   - Go back to Google reCAPTCHA admin
   - Add your custom domain to allowed domains

4. **Test**
   - Visit your custom domain
   - SSL certificate auto-provisions

## Set Up Contact Form Notifications (30 minutes)

Your contact form currently logs submissions. To receive notifications:

### Quick Option: Email via AWS SES

1. **Verify Email in SES**
   - AWS Console → Amazon SES
   - Verify your email: `contact@untrap.ai`

2. **Install Nodemailer**
   ```bash
   npm install nodemailer @aws-sdk/client-ses
   ```

3. **Update API Route**
   Edit `app/api/contact/route.ts` to send emails

4. **Add to .env.local**
   ```
   SES_REGION=us-east-2
   SES_FROM_EMAIL=noreply@untrap.ai
   SES_TO_EMAIL=contact@untrap.ai
   ```

### Alternative: Webhook to Slack

1. Create a Slack incoming webhook
2. Add webhook URL to environment variables
3. Update API route to POST to Slack

## Verify Everything Works

After deployment, test:

- [ ] Visit production URL
- [ ] All sections load correctly
- [ ] Navigation works
- [ ] Contact form submits successfully
- [ ] You receive notifications
- [ ] Mobile responsive
- [ ] SSL certificate active (https://)

## Monitor Performance

### AWS Amplify Console
- View deployment logs
- Monitor build times
- Check hosting metrics

### Google Analytics (Recommended)
1. Create GA4 property
2. Add tracking script to `app/layout.tsx`
3. Monitor:
   - Page views
   - Demo booking conversions
   - Bounce rate

## Optimize for Conversions

After launch, consider:

1. **A/B Test Headlines**
   - Try different value propositions
   - Test "Book a Demo" vs "Get Started"

2. **Add Social Proof**
   - Customer logos
   - Testimonials
   - Case studies

3. **Create Demo Video**
   - 2-3 minute product overview
   - Embed in hero or "How It Works"

4. **Add Live Chat**
   - Intercom, Drift, or similar
   - Answer questions in real-time

5. **Track Everything**
   - Google Analytics events
   - Form field completion rates
   - Scroll depth
   - Time on page

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Verify all dependencies installed
- Check environment variables

### Contact Form Not Working
- Verify reCAPTCHA keys
- Check browser console for errors
- Test API route directly

### Slow Loading
- Check image sizes
- Enable Next.js Image component
- Review Amplify hosting tier

## Support

**Documentation:**
- [README.md](./README.md) - Full documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide
- [QUICKSTART.md](./QUICKSTART.md) - Quick start guide
- [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Technical overview

**AWS Resources:**
- [Amplify Docs](https://docs.amplify.aws/)
- [Next.js Docs](https://nextjs.org/docs)

**Contact:**
- Email: contact@untrap.ai

## Timeline

**Today:**
- ✅ Website built
- ⏳ Get reCAPTCHA keys (15 min)
- ⏳ Deploy to Amplify (30 min)

**This Week:**
- Configure custom domain (1 hour)
- Set up contact notifications (30 min)
- Add analytics tracking (30 min)
- Test across devices/browsers (1 hour)

**Next Week:**
- Launch! 🚀
- Monitor performance
- Optimize based on data

---

You're ready to go live! 🎉
