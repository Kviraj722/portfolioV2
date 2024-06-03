import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  const sentence =
    "Impressed by what I've done? Please feel free to send me a mail, I'm always open to new opportunities, I am also open to collab on new ideas for a project, or just want to say hi? No problem, I am always available and just a mail away: kawa.135viraj@gmail.com";
  return (
    <div className="container rounded-md">
      <ContactForm />
    </div>
  );
};

export default ContactMe;
