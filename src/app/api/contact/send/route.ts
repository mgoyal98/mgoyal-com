import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const reqData = await req.json();
  const { token, name, email, message } = reqData;
  const secretKey: string | undefined = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      {
        method: 'POST',
      }
    );

    const captchaResponse = await response.json();

    if (!captchaResponse.success) {
      return new Response(
        JSON.stringify({ message: 'Failed to verify captcha', success: false }),
        {
          status: 500,
        }
      );
    }

    const { error } = await resend.emails.send({
      from: `Contact Form <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RESEND_TO_EMAIL || ''],
      subject: `Contact Form Submission [${name}]`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    if (error) {
      return new Response(
        JSON.stringify({ message: 'Failed to send email', success: false }),
        {
          status: 500,
        }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Message sent successfully', success: true }),
      {
        status: 200,
      }
    );
  } catch {
    return new Response(
      JSON.stringify({ message: 'Internal server error', success: false }),
      {
        status: 500,
      }
    );
  }
}
