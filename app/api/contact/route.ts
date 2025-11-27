import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret && recaptchaToken) {
      const recaptchaResponse = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
        }
      );

      const recaptchaData = await recaptchaResponse.json();

      if (!recaptchaData.success || recaptchaData.score < 0.5) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Save to a database
    // 3. Send to a CRM like HubSpot, Salesforce, etc.
    // 4. Send to Slack/Discord notification

    // For now, we'll just log it (in production, implement proper handling)
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement your preferred notification method
    // Example: Send email via SendGrid, AWS SES, or similar service
    // Example: Save to database
    // Example: Send webhook to Zapier/Make

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
