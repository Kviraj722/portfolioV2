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
  image: string;
  testimonial: string;
}
export const POST = async (req: Request, res: Response) => {
  try {
    const { name, company, designation, testimonial, image }: reqBody =
      await req.json();

    await connectToDB();
    await Testimonials.create({
      name: name,
      company: company,
      designation: designation,
      testimonial: testimonial,
      image: image,
    });

    return new Response(
      JSON.stringify({
        message:
          "Thank you for your testimonial. It will appear in the testimonial section within 24 hours.",
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
          "Something went wrong. Could you please send your testimonial email to kawa.135viraj@gmail.com?",
        success: false,
      }),
      {
        status: 500,
      }
    );
  }
};

export const GET = async (req: Request, res: Response) => {
  try {
    await connectToDB();
    const testimonials = await Testimonials.find({ shouldAccept: true });
    return new Response(
      JSON.stringify({
        message: "Fetched",
        success: true,
        data: testimonials,
      }),
      {
        status: 200,
      }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        message:
          "Something went wrong.",
        success: false,
      }),
      {
        status: 500,
      }
    );
  }
};
