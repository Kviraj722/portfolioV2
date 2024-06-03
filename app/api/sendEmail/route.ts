import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: `${process.env.NEXT_EMAIL_HOST}`,
  port: 587,
  auth: {
    user: `${process.env.NEXT_EMAIL_USER}`,
    pass: `${process.env.NEXT_EMAIL_PASS}`,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const POST = async (req: Request, res: Response) => {
  try {
    const { email, message }: any = await req.json();
    const mailOptions = {
      from: email,
      to: "kawa.135viraj@gmail.com",
      subject: `Contact form submission from ${email}`,
      html: message,
    };
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({
        message: "Thanks for connecting, Will get back to you.",
        success: true,
      }),
      {
        status: 200,
      }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        message:
          "Something went wrong, could you please send email via kawa.135viraj@gmail.com? ",
        success: false,
      }),
      {
        status: 500,
      }
    );
  }
};
