import Testimonials from "@/models/testimonial";
import { connectToDB } from "@/utils/db";
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
interface reqBody {
  name: string;
  company: string;
  designation: string;
  image: any;
  testimonial: string;
  email: string;
}
export const POST = async (req: Request, res: Response) => {
  try {
    const { name, company, designation, testimonial, image, email }: reqBody =
      await req.json();
    await connectToDB();
    const mailOptions = {
      from: email,
      to: process.env.NEXT_EMAIL_USER,
      subject: `Testimonial request from ${email}`,
      html: `
      Hello Kawa, Someone has told something about your work. Let check this the below details. 
        name : ${name}, 
        company :${company},
        designation : ${designation},
        testimonial : ${testimonial}
        `,
    };

    await Testimonials.create({
      name: name,
      company: company,
      designation: designation,
      testimonial: testimonial,
      image: image,
      email: email,
      shouldAccept: false,
    });

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message:
          "🚀 Thanks for the awesome testimonial! I'll give it a look and have it up on my portfolio within the next 24 hours. Can't wait to showcase your words! ",
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
          "💥 Oops! Looks like there was a hiccup. Please shoot your testimonial to kawa.135viraj@gmail.com, and I'll get it up ASAP. Thanks for bearing with me!",
        success: false,
      }),
      {
        status: 500,
      }
    );
  }
};
