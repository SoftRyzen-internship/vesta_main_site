import nodemailer from 'nodemailer';

const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

export const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: 'samohvalova520@gmail.com',
};

// export interface ISendImail {
//   sender: Mail.Address;
//   receipients: Mail.Address[];
//   subject: string;
//   message: string;
// }

// export const sendEmail = async ({
//   sender,
//   receipients,
//   subject,
//   message,
// }: ISendImail) => {

//   const mailOptions = {
//     from: sender,
//     to: receipients,
//     subject,
//     html: message
//   };

//   return await transport.sendMail(mailOptions)
// };
