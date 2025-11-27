# Quick Start Guide

Get your Untrap Agent website up and running in minutes.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Get reCAPTCHA Keys

1. Visit [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Register a new site:
   - **reCAPTCHA type**: v3
   - **Domains**: Add `localhost` for testing
3. Copy your **Site Key** and **Secret Key**

## Step 3: Configure Environment Variables

Update `.env.local` with your reCAPTCHA keys:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

## Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 5: Test the Website

- ✅ Navigate through all sections
- ✅ Test smooth scrolling
- ✅ Try the contact form
- ✅ Test on mobile (responsive design)

## Step 6: Deploy to AWS Amplify

### Quick Deploy (No Git)

1. Build the site:
   ```bash
   npm run build
   ```

2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)

3. Click "New app" → "Host web app" → "Deploy without Git"

4. Upload your built files or connect a Git repository

5. Add environment variables in Amplify:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`

6. Deploy!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## What's Included

✅ **Modern dark blue theme** - Professional, sleek design
✅ **Responsive layout** - Works on all devices
✅ **Smooth scrolling navigation** - Seamless UX
✅ **Contact form with reCAPTCHA** - Spam protection built-in
✅ **Sales funnel optimized** - Guides visitors to book a demo
✅ **AWS Amplify ready** - Deploy to production in minutes

## Next Steps

1. **Customize content** - Edit components to match your messaging
2. **Add logo** - Replace placeholder with your brand logo
3. **Set up email notifications** - Configure contact form to send emails
4. **Add analytics** - Track visitor behavior and conversions
5. **Configure custom domain** - Point your domain to Amplify

## Need Help?

- Read the full [README.md](./README.md)
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Contact: contact@untrap.ai

## Project Structure

```
├── app/
│   ├── api/contact/       # Contact form API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── Navbar.tsx         # Navigation
│   ├── Hero.tsx           # Hero section
│   ├── PainPoints.tsx     # Pain points
│   ├── Features.tsx       # Features
│   ├── HowItWorks.tsx     # Process flow
│   ├── Benefits.tsx       # Benefits/ROI
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── public/                # Static assets
└── amplify.yml           # AWS config
```

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```
