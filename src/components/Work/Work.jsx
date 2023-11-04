"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Work() {
  const myWork = [
    {
      id: 1,
      name: "Lawork",
      type: "SaaS",
      about:
        "POS and warehouse management system for B2B sellers. Available with these test login and password: Yahyo_test@123 (Collaborated with Dynamic Soft Company)",
      img: "/assets/images/lawork.png",
      link: "https://dynamicsoft.uz/en/portfolio/lawork",
      width: 300,
      height: 300,
    },
    {
      id: 2,
      name: "Hydroengeo",
      type: "Web portal",
      about:
        "Multi-band Web portal for “HYDROENGEO' institution with three languages. (Collaborated with Dynamic Soft Company)",
      img: "/assets/images/hydroengeo.png",
      link: "https://hydroengeo.uz/",
      width: 300,
      height: 300,
    },
    {
      id: 3,
      name: "Sakinat Travel",
      type: "Web platform",
      about:
        "Web platform for touristic agency. Functionalities: book trips, online payment and information about the company. (Collaborated with Dynamic Soft Company)",
      img: "/assets/images/sakinat.png",
      link: "https://sakinattravel.uz/",
      width: 300,
      height: 300,
    },
    {
      id: 4,
      name: "SKS",
      type: "CRM",
      about:
        "System for management private schools and kindergartens. (Collaborated with Dynamic Soft Company)",
      img: "/assets/images/sks.png",
      link: "https://sksedu.uz/",
      width: 150,
      height: 150,
    },
    {
      id: 5,
      name: "Dynamic soft",
      type: "Web platformn",
      about:
        "Updated from scratch the web platform of Dynamic soft (Collaborated with Dynamic Soft Company)",
      img: "/assets/images/dynamic.svg",
      link: "https://dynamicsoft.uz/en/",
      width: 300,
      height: 300,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="py-[80px] mobile:py-[40px] medium:py-[40px] bg-black flex justify-center" id="work">
        <div className="container px-[115px] medium:px-0 mobile:px-0">
          <h2
            className="inter700 text-[48px] medium:text-[36px] mobile:text-[28px] mobile:text-center leaing-[150%] text-white px-[30px] medium:px-[25px] mobile:px-[15px]"
            data-aos="fade-right"
          >
            My work
          </h2>
          <Swiper
            data-aos="zoom-in"
            className="z-10 mt-[80px] medium:mt-[40px] mobile:mt-[30px]"
            modules={[Navigation]}
            spaceBetween={30}
            loop={true}
            slidesPerView={1}
            speed={1200}
            navigation
          >
            {myWork.map((work) => (
              <SwiperSlide key={work.id} className="mobile:cursor-grab medium:cursor-grab">
                <div className="flex mobile:flex-col bg-gray border-[1px] border-solid border-lightgray rounded-[24px] p-[60px] medium:p-[30px] mobile:p-[25px] justify-center gap-[40px] medium:gap-[20px] mx-[100px] mobile:mx-0 medium:mx-0 h-[460px] medium:h-[380px] mobile:h-auto">
                  <div className="w-[386px] mobile:w-auto flex flex-col gap-[24px] mobile:gap-[15px] mobile:order-2">
                    <h3
                      className="inter700 leading-[130%] text-[32px] medium:text-[24px] mobile:text-[24px] text-white"
                      data-aos="fade-right"
                    >
                      {work.name}
                    </h3>
                    <p
                      className="text-white text-[16px] medium:text-[14px] mobile:text-[14px] inter400 leading-[150%]"
                      data-aos="fade-right"
                    >
                      {work.type}
                    </p>
                    <p
                      className="text-lightgray inter400 text-[18px] medium:text-[14px] mobile:text-[14px] leading-[150%] h-[300px] medium:h-[150px] mobile:h-[150px] "
                      data-aos="fade-right"
                    >
                      {work.about}
                    </p>
                      <a href={work.link} className="text-white border-white border-solid border-[1px] rounded-[8px] py-[12px] px-[24px] text-center">
                        More
                      </a>
                  </div>
                  <div className="bg-white rounded-[16px] flex items-center justify-center w-[460px] mobile:w-auto medium:w-[400px] h-auto mobile:h-[175px] mobile:order-1">
                    <div
                      className="box-border flex items-center justify-center"
                      data-aos="fade-left"
                    >
                      <Image
                        className="medium:scale-75 mobile:scale-50"
                        src={work.img}
                        width={work.width}
                        height={work.height}
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
