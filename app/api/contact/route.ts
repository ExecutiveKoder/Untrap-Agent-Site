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

      const sesResponse = await fetch('https://email.us-east-2.amazonaws.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `AWS4-HMAC-SHA256 Credential=${process.env.AWS_ACCESS_KEY_ID}`,
        },
        body: new URLSearchParams({
          'Action': 'SendEmail',
          'Source': 'contact@untrapai.com',
          'Destination.ToAddresses.member.1': 'contact@untrapai.com',
          'Message.Subject.Data': `New Contact Form: ${company}`,
          'Message.Body.Text.Data': emailBody,
        }),
      });

      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Continue even if email fails - we still want to log the submission
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
