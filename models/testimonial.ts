import { Schema, model, models } from "mongoose";

const Testimonial = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    testimonial: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      require: false,
    },
    email: {
      type: String,
      require: false,
    },
    shouldAccept: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Testimonials = models.Testimonial || model("Testimonial", Testimonial);
export default Testimonials;
