'use client'
import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function About() {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <>
      <section className="bg-black py-[100px]" id='about'> 
        <div className="container px-[115px] flex flex-col gap-[60px] items-start">
          <h2 className="inter700 leading-[150%] text-[48px] text-white" data-aos='fade-right'>About Me</h2>
          <p className="inter400 text-[22px] leading-[190%] text-white text-justify" data-aos='fade-right'>
          I&apos;m a software engineer with a focus on crafting code that drives profits and engages users. I go beyond typical front-end work by leveraging technology to help businesses gain more clients. I excel at understanding clients&apos; perspectives and creating tailored solutions. My proactive approach and dedication have led to success, from turning an internship into a full-time position to leading a team in developing a customized Learning Management System for private schools. I&apos;m committed to pushing the boundaries of software engineering to create meaningful experiences.
          </p>
        </div>
      </section>
    </>
  );
}
