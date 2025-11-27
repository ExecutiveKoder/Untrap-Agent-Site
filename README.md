# Untrap Agent Website

A modern, sleek Next.js website for the Untrap AI-powered MSP billing classification agent. Built with TypeScript, Tailwind CSS, and designed as a sales funnel.

## Features

- **Modern Dark Blue Theme**: Sleek, professional design optimized for conversions
- **Responsive Design**: Works perfectly on all devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Integrated with Google reCAPTCHA v3 to prevent spam
- **Sales Funnel**: Optimized to guide visitors from problem awareness to booking a demo

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: AWS Amplify
- **Spam Protection**: Google reCAPTCHA v3

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn
- Google reCAPTCHA v3 keys ([Get them here](https://www.google.com/recaptcha/admin))
- AWS account for Amplify deployment

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Copy `.env.local.template` to `.env.local` and fill in your values:

```bash
cp .env.local.template .env.local
```

Required environment variables:
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Your Google reCAPTCHA v3 site key
- `RECAPTCHA_SECRET_KEY`: Your Google reCAPTCHA v3 secret key

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API endpoint
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── PainPoints.tsx        # Pain points section
│   ├── Features.tsx          # Features section
│   ├── HowItWorks.tsx        # How it works section
│   ├── Benefits.tsx          # Benefits and ROI section
│   ├── Contact.tsx           # Contact form
│   └── Footer.tsx            # Footer
├── public/                   # Static assets
└── amplify.yml              # AWS Amplify build config
```

## Deployment to AWS Amplify

### Option 1: Using AWS Console

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" > "Host web app"
3. Connect your Git repository (GitHub, GitLab, Bitbucket, or AWS CodeCommit)
4. Select your repository and branch
5. Amplify will auto-detect Next.js and use the `amplify.yml` config
6. Add environment variables in Amplify Console:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`
7. Click "Save and deploy"

### Option 2: Using AWS CLI

1. Install AWS Amplify CLI:

```bash
npm install -g @aws-amplify/cli
```

2. Initialize Amplify:

```bash
amplify init
```

3. Add hosting:

```bash
amplify add hosting
```

4. Deploy:

```bash
amplify publish
```

### Environment Variables in Amplify

Make sure to add these in the Amplify Console under "Environment variables":

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - Your reCAPTCHA site key
- `RECAPTCHA_SECRET_KEY` - Your reCAPTCHA secret key

## Contact Form Integration

The contact form is currently set up to log submissions. To make it functional, you need to:

1. **Add Email Service**: Integrate with SendGrid, AWS SES, or similar
2. **Add Database**: Save submissions to a database (PostgreSQL, DynamoDB, etc.)
3. **Add CRM Integration**: Connect to HubSpot, Salesforce, or your CRM
4. **Add Notifications**: Send Slack/Discord notifications for new submissions

Edit `app/api/contact/route.ts` to implement your preferred method.

## Customization

### Changing Colors

Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  primary: {
    // Your custom blue shades
  },
  dark: {
    // Your custom dark shades
  },
}
```

### Adding Logo

Replace the placeholder logo in `public/placeholder-logo.svg` with your actual logo, or update the logo references in `components/Navbar.tsx`.

### Modifying Content

All content is in the component files. Edit the relevant component to change:
- Hero messaging: `components/Hero.tsx`
- Features: `components/Features.tsx`
- Pain points: `components/PainPoints.tsx`
- etc.

## Performance

- Uses Next.js App Router for optimal performance
- Image optimization with Next.js Image component
- Lazy loading and code splitting
- Smooth animations without impacting performance

## Security

- reCAPTCHA v3 for spam protection
- Environment variables for sensitive data
- API route protection
- No sensitive data in client-side code

## Support

For questions or issues, contact: contact@untrap.ai

## License

Proprietary - All rights reserved
