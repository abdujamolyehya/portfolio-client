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
      <section className="bg-black pt-[80px] pb-[240px]">
        <div className="container flex flex-col items-center gap-[50px]">
          <Image
            data-aos="zoom-in"
            className="rounded-[50%] border-lightgray border-solid border-[5px]"
            src={"/assets/images/main-img.jpg"}
            width={175}
            height={175}
            alt="my image"
            priority
          />
          <div>
            <div className="mx-[112px]">
              <h1 className=" inter700 text-[90px] leading-[120%] tracking-[-0.9px] text-white title">
                Hi, I&apos;m Yahyo Abdujamolov
              </h1>
            </div>
            <h2
              className="mt-[16px] text-[32px] inter400 leading-[150%] text-lightgray text-center mx-[220px]"
              data-aos="fade-up"
            >
              I&apos;m a passionate Software Engineer focused on crafting
              remarkable digital experiences. My aim is to blend functionality
              and aesthetics to create impactful solutions
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
