"use client";
import React, { useRef, useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      setLoading(true);
      const response = await fetch("api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });
      const res = await response.json();
      if (res.success) {
        setMessage(res.message);
        setShowMessage(true);
        setLoading(false);

        if (emailRef.current && messageRef.current) {
          emailRef.current.value = "";
          messageRef.current.value = "";
        }

        setTimeout(() => {
          setShowMessage(false);
        }, 4000);
      }
    } catch (error: any) {
      setMessage(error.message);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-full max-w-lg p-8">
        <h2 className="text-3xl font-semibold text-center font-sans">
          Contact Me
        </h2>
        <p className="text-center mt-2 font-sans">
          Impressed by my work? Feel free to reach out! I&apos;m always open to
          new opportunities, collaborations on exciting projects, or even just a
          friendly hello. You can email me at {"   "}
          <a href="mailto:kawa.135viraj@gmail.com" className="text-blue-500">
            kawa.135viraj@gmail.com
          </a>{" "}
          or use this form. I&apos;m always available and just an email away.
        </p>
        <form className="mt-8 space-y-6 font-sans" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
              ref={emailRef}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
              name="message"
              required
              ref={messageRef}
            ></textarea>
          </div>
          <div className="flex">
            {loading ? (
              <div className="p-3 rounded-md">Sending....</div>
            ) : showMessage ? (
              <div className="text-white p-3 rounded-md">{message}</div>
            ) : (
              <button
                type="submit"
                className="flex items-center p-3 rounded-md bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>Submit</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
