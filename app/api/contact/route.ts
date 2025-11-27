import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({
  region: process.env.AWS_DEFAULT_REGION || 'us-east-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

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

    // Verify reCAPTCHA v3
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

      // For v3 captcha, check success and score (0.5 threshold)
      if (!recaptchaData.success || (recaptchaData.score && recaptchaData.score < 0.5)) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    } else if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Send email notification using AWS SES
    try {
      const emailBody = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone || 'Not provided'}

Message:
${message || 'No message provided'}

Timestamp: ${new Date().toISOString()}
      `.trim();

      const command = new SendEmailCommand({
        Source: 'contact@untrapai.com',
        Destination: {
          ToAddresses: ['contact@untrapai.com'],
        },
        Message: {
          Subject: {
            Data: `New Contact Form: ${company}`,
            Charset: 'UTF-8',
          },
          Body: {
            Text: {
              Data: emailBody,
              Charset: 'UTF-8',
            },
          },
        },
      });

      await sesClient.send(command);
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Return error if email fails - this is critical
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or email us directly.' },
        { status: 500 }
      );
    }

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

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
