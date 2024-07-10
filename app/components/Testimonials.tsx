"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Heading from "./Heading";
import ReadMore from "@/app/components/ReadMore";

const Testimonials = () => {
  const [testiMonial, setTestiMonial] = useState([]);
  const [hasTestimonials, setHasTestimonials] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch(`/api/testimonial`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      if (responseData.success) {
        setTestiMonial(responseData.data);
        if (responseData.data.length > 0) {
          setHasTestimonials(true);
        }
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <>
      {hasTestimonials && (
        <div className="">
          <Heading heading="Endorsements:" />
          <div className="container p-4 bg-stone-950 rounded-2xl">
            <Swiper
              spaceBetween={10}
              centeredSlides={true}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
              }}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {testiMonial.map((testi: any) => (
                <SwiperSlide key={testi._id}>
                  <div className="flex flex-wrap md:flex-nowrap h-full">
                    <div className="w-full md:w-1/2 flex flex-col items-center p-2">
                      <div className="items-center mb-4 mt-5">
                        <Image
                          src={testi.image}
                          alt="user image"
                          width={200}
                          height={200}
                          className="border-1 rounded-full shadow-blurred-border"
                        />
                      </div>
                      <div className="flex justify-center items-center w-full flex-col">
                        <p className="font-semibold text-2xl text-blue-800">
                          {testi.name}
                        </p>
                        <p className="text-base ">
                          {testi.designation} @{testi.company}
                        </p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-2 flex items-center">
                      <p className="text-base font-mono italic">
                        <ReadMore text={testi.testimonial} maxWords={100} />
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
