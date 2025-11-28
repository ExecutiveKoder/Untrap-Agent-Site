import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

export async function POST(request: NextRequest) {
  // Validate and get credentials
  const accessKeyId = process.env.SES_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.SES_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY;
  const region = process.env.SES_REGION || process.env.AWS_DEFAULT_REGION || 'us-east-2';

  console.log('Environment check:', {
    hasAccessKeyId: !!accessKeyId,
    accessKeyIdLength: accessKeyId?.length || 0,
    hasSecretAccessKey: !!secretAccessKey,
    secretAccessKeyLength: secretAccessKey?.length || 0,
    region,
  });

  if (!accessKeyId || !secretAccessKey) {
    console.error('Missing AWS credentials');
    return NextResponse.json(
      { error: 'Email service configuration error: Missing credentials' },
      { status: 500 }
    );
  }

  // Initialize SES client
  let sesClient;
  try {
    sesClient = new SESClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
    console.log('SES client initialized successfully');
  } catch (error) {
    console.error('Failed to initialize SES client:', error);
    return NextResponse.json(
      { error: 'Email service configuration error' },
      { status: 500 }
    );
  }
  try {
    const body = await request.json();
    const { name, email, company, phone, message, recaptchaToken } = body;

    console.log('Contact form submission received:', { name, email, company });

    // Validate required fields
    if (!name || !email || !company) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA v3 (optional for now to debug)
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret && recaptchaToken) {
      try {
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
          console.log('reCAPTCHA verification failed:', recaptchaData);
          // Don't block submission, just log for now
        }
      } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        // Don't block submission on reCAPTCHA errors
      }
    }

    // Send email notification using AWS SES
    console.log('Attempting to send email via SES');
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
          ToAddresses: ['sats@getuntrap.com', 'dmason@getuntrap.com'],
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

      const result = await sesClient.send(command);
      console.log('Email sent successfully:', result);
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      console.error('Error details:', JSON.stringify(emailError, null, 2));
      // Return error if email fails - this is critical
      return NextResponse.json(
        { error: `Failed to send email: ${emailError instanceof Error ? emailError.message : 'Unknown error'}` },
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
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack');
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
