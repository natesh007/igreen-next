import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function verifyCaptcha(token: string): Promise<boolean> {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, captchaToken } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim() || !captchaToken) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return NextResponse.json(
        { error: 'Captcha verification failed. Please try again.' },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"iGreen Website" <${process.env.GMAIL_USER}>`,
      to: 'contact@igreensystems.com',
      subject: `Contact Form: ${subject || 'General Inquiry'} — from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'General Inquiry'}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
