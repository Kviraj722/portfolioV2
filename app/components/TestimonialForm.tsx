"use client";

import { useState } from "react";

export default function TestimonialForm() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      setError("Image size should not exceed 2MB");
      setImage(null);
    } else {
      setError("");
      setImage(file);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ name, designation, testimonial, image });
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <div className="container mx-auto p-5">
        <h1 className="text-4xl mb-5 font-extrabold">
          Thank you for giving me a testimonial!
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <textarea
            placeholder="Testimonial"
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="flex items-center w-28 p-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </form>
      </div>
    </div>
  );
}
