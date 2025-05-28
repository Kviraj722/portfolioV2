import React from "react";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  return (
    <div className="w-full flex justify-center items-center py-12">
      <div className="modern-card max-w-xl w-full p-8">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-2">Connect with Me</h2>
        <p className="text-center text-gray-400 mb-6">
          Impressed by my work? Let&apos;s connect! I&apos;m open to new opportunities, collaborations, or just a friendly hello. Email me at <a href="mailto:kawa.135viraj@gmail.com" className="text-blue-400 underline">kawa.135viraj@gmail.com</a> or use the form below.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMe;
