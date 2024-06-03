import { NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

const myEmail = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

export const POST = async (request: NextRequest) => {
  try {
    const { name, phone, email, textarea } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: myEmail,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: myEmail,
      to: myEmail,
      subject: `Новий запит про допомогу`,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Phone: ${phone} </p>
            <p>Message: ${textarea} </p>
            `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Ваша заявка успішно відправлена!' },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: 'Щось пішло не так...' }, { status: 500 });
  }
};
