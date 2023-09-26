import React from "react";
import Image from "next/image";

export default function Main() {
  return (
    <>
      <section className="bg-black pt-[100px] pb-[240px]">
        <div className="container flex flex-col items-center gap-[50px]">
          <Image
            className="rounded-[50%] border-lightgray border-solid border-[5px]"
            src={"/assets/images/main-img.jpg"}
            width={175}
            height={175}
            alt="my image"
            priority
          />
          <div>
            <h1 className="text-center inter700 text-[90px] leading-[120%] tracking-[-0.9px] text-white">
              Hi, I&apos;m Yahyo Abdujamolov
            </h1>
            <h2 className="mt-[16px] text-[32px] inter400 leading-[150%] text-lightgray text-center mx-[220px]">
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
