"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Work() {
  const myWork = [
    {
      id: 1,
      name: "Lawork",
      type: "SaaS",
      about:
        "Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience.",
      img: "/assets/images/lawork.png",
    },
    {
      id: 2,
      name: "Lawork",
      type: "SaaS",
      about:
        "Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience.",
      img: "/assets/images/lawork.png",
    },
    {
      id: 3,
      name: "Lawork",
      type: "SaaS",
      about:
        "Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience.",
      img: "/assets/images/lawork.png",
    },
    {
      id: 4,
      name: "Lawork",
      type: "SaaS",
      about:
        "Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience.",
      img: "/assets/images/lawork.png",
    },
    {
      id: 5,
      name: "Lawork",
      type: "SaaS",
      about:
        "Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience.",
      img: "/assets/images/lawork.png",
    },
  ];
  return (
    <>
      <section className="py-[80px] bg-black flex justify-center" id="work">
        <div className="container px-[115px]">
          <h2 className="inter700 text-[48px] leaing-[150%] text-white">
            My work
          </h2>
          <Swiper
            className="z-10 mt-[80px]"
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            loop={true}
            slidesPerView={1}
            speed={1500}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {myWork.map((work) => (
              <SwiperSlide key={work.id}>
                <div className="flex bg-gray border-[1px] border-solid border-lightgray rounded-[24px] p-[60px] justify-center gap-[40px] mx-[100px]">
                  <div className="w-[386px] flex flex-col gap-[24px]">
                    <h3 className="inter700 leading-[130%] text-[32px] text-white">
                      {work.name}
                    </h3>
                    <p className="text-white text-[16px] inter400 leading-[150%]">
                      {work.type}
                    </p>
                    <p className="text-lightgray inter400 text-[18px] leading-[150%]">
                      {work.about}
                    </p>
                    <button className="text-white border-white border-solid border-[1px] rounded-[8px] py-[12px] px-[24px]">
                      More
                    </button>
                  </div>
                  <div className="bg-white rounded-[16px] flex items-center justify-center w-[460px] h-auto">
                    <div className="box-border flex items-center justify-center">
                      <Image
                        src={work.img}
                        width={300}
                        height={300}
                        alt="my image"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
