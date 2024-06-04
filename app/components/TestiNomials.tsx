"use client";
import React from "react";
import Image from "next/image";
import DemoImage from "@/public/PorfilePhoto.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Heading from "./Heading";
const TestiNomials = () => {
  const testiNomial = [
    {
      id: 1,
      name: "Viraj Kawa",
      designation: "Jr.Software developer engineer",
      sentence:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis, explicabo accusamus officia doloremque molestiae ad dicta iure debitis expedita ut ipsum ratione provident quidem possimus magnam magni nihil necessitatibus similique tempore aspernatur laboriosam. Minus voluptates labore unde natus maxime possimus nisi. Fugiat voluptatum maxime nostrum harum beatae provident ex officiis, ad optio, repellendus est excepturi ipsa assumenda soluta quisquam sequi omnis iste? Voluptatem iusto magni illo delectus ex! Quam corrupti laboriosam sequi voluptas repellat numquam consequatur placeat necessitatibus voluptates deleniti at asperiores, totam earum mollitia ab, aspernatur reprehenderit. Voluptatum debitis porro enim, sapiente praesentium voluptas! Quis illum eligendi molestiae.",
      image: DemoImage,
    },
    {
      id: 2,
      name: "Viraj Kawa 2",
      designation: "CEO/Co-founder",
      sentence:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis, explicabo accusamus officia doloremque molestiae ad dicta iure debitis expedita ut ipsum ratione provident quidem possimus magnam magni nihil necessitatibus similique tempore aspernatur laboriosam. Minus voluptates labore unde natus maxime possimus nisi. Fugiat voluptatum maxime nostrum harum beatae provident ex officiis, ad optio, repellendus est excepturi ipsa assumenda soluta quisquam sequi omnis iste? Voluptatem iusto magni illo delectus ex! Quam corrupti laboriosam sequi voluptas repellat numquam consequatur placeat necessitatibus voluptates deleniti at asperiores, totam earum mollitia ab, aspernatur reprehenderit. Voluptatum debitis porro enim, sapiente praesentium voluptas! Quis illum eligendi molestiae.",
      image: DemoImage,
    },
    {
      id: 3,
      name: "Viraj Kawa3",
      designation: "Senior Software engineer",
      sentence:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis, explicabo accusamus officia doloremque molestiae ad dicta iure debitis expedita ut ipsum ratione provident quidem possimus magnam magni nihil necessitatibus similique tempore aspernatur laboriosam. Minus voluptates labore unde natus maxime possimus nisi. Fugiat voluptatum maxime nostrum harum beatae provident ex officiis, ad optio, repellendus est excepturi ipsa assumenda soluta quisquam sequi omnis iste? Voluptatem iusto magni illo delectus ex! Quam corrupti laboriosam sequi voluptas repellat numquam consequatur placeat necessitatibus voluptates deleniti at asperiores, totam earum mollitia ab, aspernatur reprehenderit. Voluptatum debitis porro enim, sapiente praesentium voluptas! Quis illum eligendi molestiae.",
      image: DemoImage,
    },
  ];

  return (
    <div className="mt-10 mb-10">
      <Heading heading="Testinomials" />
      <div className="container p-4 mt-5 bg-stone-950 rounded-md">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {testiNomial.map((testi) => (
            <SwiperSlide key={testi.id}>
              <div className="flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/2 flex flex-col items-center">
                  <div className="items-center mb-4">
                    <Image
                      src={testi.image}
                      alt="user image"
                      width={200}
                      height={200}
                      className="border-1 rounded-full shadow-blurred-border"
                    />
                  </div>
                  <div className="flex justify-center items-center w-full flex-col">
                    <p className="font-serif font-semibold text-xl text-blue-800">
                      {testi.name}
                    </p>
                    <p className="text-sm ">{testi.designation}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-full p-2">
                  <p className="text-base font-mono italic">{testi.sentence}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestiNomials;
