"use client";

import { useState } from "react";
import Loading from "./ui/Loader";
import Link from "next/link";

export default function TestimonialForm() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      setError("Image size should not exceed 2MB");
      setImage(null);
      return;
    }

    const reader: any = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    setError("");
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!image) {
      setError("Please upload image.");
      return;
    }
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    const body = {
      ...formValues,
      image,
    };

    try {
      const response = await fetch("/api/testimonial/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const responseData = await response.json();

      if (responseData.success) {
        setMessage(responseData.message);
      } else {
        setError(responseData.message);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                name="name"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                name="email"
              />
              <input
                type="text"
                placeholder="Designation"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                name="designation"
              />
            </div>
            <input
              type="text"
              placeholder="You are working at?"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="company"
            />
            <textarea
              placeholder="Testimonial"
              className="w-full scroll-bar-hide p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="testimonial"
              rows={5}
              cols={5}
            />
            <div className="relative w-full flex items-center justify-center">
              {image && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[1999]">
                  <img
                    src={image}
                    alt="Preview"
                    className="h-60 w-60 object-contain rounded-full"
                  />
                </div>
              )}
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-900"
                style={{ opacity: image ? 0.5 : 1 }}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG or HEIC (MAX. 2MB) Mandatory
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/jpeg,image/png,image/heic"
                  onChange={handleImageChange}
                  required
                />
              </label>
            </div>
            <div className="container">
              {loading ? (
                <div className="w-28 p-3">
                  <Loading />
                </div>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : message ? (
                <p className="text-white">
                  {message} Meanwhile, you can check out my portfolio by
                  clicking this{" "}
                  <Link
                    href={"https://virajkawa.vercel.app"}
                    className="text-blue-500"
                  >
                    link.
                  </Link>
                </p>
              ) : (
                <button
                  type="submit"
                  className="flex items-center w-28 p-3 rounded-md bg-gray-800 text-white font-bold hover:bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </>
  );
}
