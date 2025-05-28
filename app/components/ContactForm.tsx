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
    <form className="space-y-6 font-sans" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="sr-only">
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="modern-input w-full"
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
          className="modern-input w-full min-h-[120px]"
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
            className="modern-button flex items-center gap-2 w-full justify-center"
          >
            <span>Submit</span>
            <svg
              className="w-5 h-5"
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
  );
};

export default ContactForm;
