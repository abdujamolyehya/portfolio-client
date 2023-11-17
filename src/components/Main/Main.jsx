"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="bg-black pt-[80px] medium:pt-[60px] mobile:pt-[40px] pb-[240px] medium:pb-[160px] mobile:pb-[120px]">
        <div className="container flex flex-col items-center gap-[50px] medium:gap-[36px] mobile:gap-[25px] px-[30px] medium:px-[25px] mobile:px-[15px]">
          <Image
            data-aos="zoom-in"
            className="rounded-[50%] border-lightgray border-solid border-[5px] mobile:border-[2px] mobile:w-[87px] medium:w-[120px] mobile:h-[87px] medium:h-[120px] "
            src={"/assets/images/main-img.jpg"}
            width={175}
            height={175}
            alt="my image"
            priority
          />
          <div className="flex flex-col items-center gap-[16px] ">
            <div className="text-center">
              <h1 className="inter700 text-[90px] mobile:text-[28px] medium:text-[50px] leading-[120%] tracking-[-0.9px] text-white title">
                Hi, I&apos;m Jacob Jamison
              </h1>
            </div>
            <h2
              className="text-[32px] medium:text-[24px] mobile:text-[14px] inter400 leading-[150%] text-lightgray text-center mx-[220px] medium:mx-[50px] mobile:mx-0 mobile:text-center"
              data-aos="fade-up"
            >
              I&apos;m a Software Engineer, weaving innovation and design into digital wonders. My code is the brush, and the web is my canvas. Let&apos;s explore the art of technology together.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
