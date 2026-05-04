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
    const formData = await request.formData();
    const jobTitle = formData.get('jobTitle') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const captchaToken = formData.get('captchaToken') as string;
    const resumeFile = formData.get('resume') as File | null;

    if (!jobTitle || !coverLetter?.trim() || !captchaToken) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return NextResponse.json(
        { error: 'Captcha verification failed. Please try again.' },
        { status: 400 }
      );
    }

    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
    if (resumeFile && resumeFile.size > 0) {
      if (resumeFile.size > 5 * 1024 * 1024) {
        return NextResponse.json({ error: 'Resume file must be under 5MB.' }, { status: 400 });
      }
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type || 'application/octet-stream',
      });
    }

    await transporter.sendMail({
      from: `"iGreen Careers" <${process.env.GMAIL_USER}>`,
      to: 'hr@igreensystems.com',
      subject: `Applying for a position: ${jobTitle}`,
      text: coverLetter,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Apply API error:', err);
    return NextResponse.json(
      { error: 'Failed to send application. Please try again.' },
      { status: 500 }
    );
  }
}
