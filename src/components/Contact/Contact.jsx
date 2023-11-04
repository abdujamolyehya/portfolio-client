"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const contactOptions = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M13.528 2.0276C14.2577 2.0248 14.9874 2.03213 15.717 2.0496L15.911 2.0566C16.135 2.0646 16.356 2.0746 16.623 2.0866C17.687 2.1366 18.413 2.3046 19.05 2.5516C19.71 2.8056 20.266 3.1496 20.822 3.7056C21.3303 4.2052 21.7238 4.80954 21.975 5.4766C22.222 6.1136 22.39 6.8406 22.44 7.9046C22.452 8.1706 22.462 8.3926 22.47 8.6166L22.476 8.8106C22.4937 9.53979 22.5014 10.2692 22.499 10.9986L22.5 11.7446V13.0546C22.5024 13.7843 22.4948 14.5141 22.477 15.2436L22.471 15.4376C22.463 15.6616 22.453 15.8826 22.441 16.1496C22.391 17.2136 22.221 17.9396 21.975 18.5766C21.7246 19.2444 21.3311 19.8492 20.822 20.3486C20.3219 20.8569 19.7173 21.2504 19.05 21.5016C18.413 21.7486 17.687 21.9166 16.623 21.9666C16.356 21.9786 16.135 21.9886 15.911 21.9966L15.717 22.0026C14.9874 22.0204 14.2577 22.028 13.528 22.0256L12.782 22.0266H11.473C10.7432 22.0291 10.0135 22.0214 9.28397 22.0036L9.08997 21.9976C8.85258 21.989 8.61524 21.979 8.37797 21.9676C7.31397 21.9176 6.58797 21.7476 5.94997 21.5016C5.28265 21.2509 4.6782 20.8574 4.17897 20.3486C3.67001 19.8489 3.27619 19.2442 3.02497 18.5766C2.77797 17.9396 2.60997 17.2136 2.55997 16.1496C2.54883 15.9123 2.53883 15.675 2.52997 15.4376L2.52497 15.2436C2.50653 14.5141 2.4982 13.7843 2.49997 13.0546V10.9986C2.49718 10.2692 2.50451 9.53979 2.52197 8.8106L2.52897 8.6166C2.53697 8.3926 2.54697 8.1706 2.55897 7.9046C2.60897 6.8396 2.77697 6.1146 3.02397 5.4766C3.27534 4.80922 3.66993 4.20504 4.17997 3.7066C4.67886 3.19735 5.28293 2.80317 5.94997 2.5516C6.58797 2.3046 7.31297 2.1366 8.37797 2.0866L9.08997 2.0566L9.28397 2.0516C10.0132 2.03317 10.7426 2.02484 11.472 2.0266L13.528 2.0276ZM12.5 7.0276C11.8375 7.01823 11.1797 7.14062 10.5649 7.38767C9.95016 7.63471 9.39061 8.00148 8.91881 8.46665C8.44701 8.93183 8.07237 9.48614 7.81665 10.0974C7.56094 10.7086 7.42926 11.3645 7.42926 12.0271C7.42926 12.6897 7.56094 13.3456 7.81665 13.9568C8.07237 14.5681 8.44701 15.1224 8.91881 15.5875C9.39061 16.0527 9.95016 16.4195 10.5649 16.6665C11.1797 16.9136 11.8375 17.036 12.5 17.0266C13.826 17.0266 15.0978 16.4998 16.0355 15.5621C16.9732 14.6244 17.5 13.3527 17.5 12.0266C17.5 10.7005 16.9732 9.42875 16.0355 8.49106C15.0978 7.55338 13.826 7.0276 12.5 7.0276ZM12.5 9.0276C12.8985 9.02026 13.2944 9.09239 13.6648 9.2398C14.0351 9.38721 14.3723 9.60694 14.6567 9.88614C14.9412 10.1653 15.1671 10.4984 15.3214 10.8659C15.4757 11.2334 15.5552 11.628 15.5552 12.0266C15.5553 12.4252 15.4759 12.8198 15.3218 13.1873C15.1677 13.5549 14.9418 13.888 14.6575 14.1673C14.3731 14.4466 14.036 14.6665 13.6657 14.814C13.2954 14.9615 12.8995 15.0338 12.501 15.0266C11.7053 15.0266 10.9423 14.7105 10.3796 14.1479C9.81704 13.5853 9.50097 12.8222 9.50097 12.0266C9.50097 11.2309 9.81704 10.4679 10.3796 9.90528C10.9423 9.34267 11.7053 9.0266 12.501 9.0266L12.5 9.0276ZM17.75 5.5276C17.4274 5.54051 17.1223 5.67775 16.8986 5.91057C16.6749 6.14339 16.55 6.45373 16.55 6.7766C16.55 7.09946 16.6749 7.40981 16.8986 7.64263C17.1223 7.87545 17.4274 8.01269 17.75 8.0256C18.0815 8.0256 18.3994 7.8939 18.6339 7.65948C18.8683 7.42506 19 7.10712 19 6.7756C19 6.44408 18.8683 6.12613 18.6339 5.89171C18.3994 5.65729 18.0815 5.5256 17.75 5.5256V5.5276Z"
            fill="white"
          />
        </svg>
      ),
      href: "https://www.instagram.com/yehya_av/",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M7.43994 5.02639C7.43968 5.55682 7.22871 6.06543 6.85345 6.44031C6.47819 6.8152 5.96937 7.02566 5.43894 7.02539C4.90851 7.02513 4.39991 6.81416 4.02502 6.4389C3.65014 6.06364 3.43968 5.55482 3.43994 5.02439C3.44021 4.49396 3.65117 3.98536 4.02644 3.61047C4.4017 3.23558 4.91051 3.02513 5.44094 3.02539C5.97137 3.02566 6.47998 3.23662 6.85486 3.61188C7.22975 3.98714 7.44021 4.49596 7.43994 5.02639ZM7.49994 8.50639H3.49994V21.0264H7.49994V8.50639ZM13.8199 8.50639H9.83994V21.0264H13.7799V14.4564C13.7799 10.7964 18.5499 10.4564 18.5499 14.4564V21.0264H22.4999V13.0964C22.4999 6.92639 15.4399 7.15639 13.7799 10.1864L13.8199 8.50639Z"
            fill="white"
          />
        </svg>
      ),
      href: "https://www.linkedin.com/in/yahyoabdujamolov/",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="white"
          className="bi bi-github"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      ),
      href: "https://github.com/abdujamolyehya",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="bg-black py-[100px] mobile:py-[50px] medium:py-[50px]" id="contact">
        <div className="container flex justify-center px-[100px] medium:px-[25px] mobile:px-[15px]">
          <div className="w-full gap-[50px] medium:gap-[30px] mobile:gap-[20px] flex flex-col items-center py-[80px] medium:py-[40px] mobile:py-[20px] rounded-[24px] border-[1px] border-solid border-lightgray bg-gray px-[80px] medium:px-[25px] mobile:px-[15px]">
            <div className="flex flex-col gap-[20px] items-center text-center">
              <h2
                className="inter700 text-[48px] medium:text-[36px] mobile:text-[28px] leading-[150%] text-white"
                data-aos="fade-up"
              >
                Let&apos;s Talk!
              </h2>
              <p
                className="inter400 text-[18px] medium:text-[16px] mobile:text-[14px] leading-[150%] text-lightgray"
                data-aos="zoom-in"
              >
                If you&apos;re interested in collaborating or have any questions,
                don&apos;t hesitate to get in touch. I&apos;m here to assist you in
                transforming your concepts into outstanding digital experiences.
                I&apos;m excited to hear from you in the near future!
              </p>
            </div>
            <ul className="flex mobile:flex-wrap justify-center gap-[16px] medium:gap-[8px] mobile:gap-[6px]" data-aos="fade-right">
              {contactOptions.map((option) => (
                <Link key={option.href} href={option.href}>
                  <li className="p-[10px] medium:p-[8px] mobile:p-[5px] flex items-center justify-center rounded-[8px] border-solid border-[1px] border-lightgray bg-black">
                    {option.icon}
                  </li>
                </Link>
              ))}
              <Link href={"mailto:abdujamolyehya@gmail.com"}>
                <li className="gap-[10px] medium:gap-[5px] mobile:gap-[5px] py-[8px] medium:py-[5px] mobile:py-[5px] px-[16px] medium:px-[8px] mobile:px-[6px] text-white flex items-center justify-center rounded-[8px] border-solid border-[1px] border-lightgray bg-black">
                  <svg
                    className="mobile:w-[20px] mobile:h-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M20.5 4.02637H4.5C3.4 4.02637 2.51 4.92637 2.51 6.02637L2.5 18.0264C2.5 19.1264 3.4 20.0264 4.5 20.0264H20.5C21.6 20.0264 22.5 19.1264 22.5 18.0264V6.02637C22.5 4.92637 21.6 4.02637 20.5 4.02637ZM20.5 8.02637L12.5 13.0264L4.5 8.02637V6.02637L12.5 11.0264L20.5 6.02637V8.02637Z"
                      fill="white"
                    />
                  </svg>
                  abdujamolyehya@gmail.com
                </li>
              </Link>
              <li className="gap-[10px] medium:gap-[5px] mobile:gap-[5px] py-[8px] medium:py-[5px] mobile:py-[5px] px-[16px] medium:px-[8px] mobile:px-[6px] text-white flex items-center justify-center rounded-[8px] border-solid border-[1px] border-lightgray bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-telephone-fill mobile:w-[16px] mobile:h-[16px]"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                +48 514 149 806
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
