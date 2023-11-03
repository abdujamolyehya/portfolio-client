"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const experience = [
    {
      companyName: "DYNAMIC SOFT, an outsourcing company",
      title: "Software Engineer",
      time: "Nov 2022 – Nov 2023",
      bulletpoints: [
        "Created SaaS WMS for 10+ firms, with real-time profit charts and Kanban-style sales view using MUI and React. Generated $40K monthly revenue.",
        "Worked closely with backend developers to define and implement RESTful APIs.",
        "Led a team of five professionals, including a designer, a backend, and three frontend developers, in successfully developing an LMS project tailored for 15+ private schools, each with over 700 students.",
        "Utilized Jest testing library to implement comprehensive unit testing and end-to-end testing strategies to ensure the reliability and stability of the applications.",
        "Implemented tree shaking and lazy loading to optimize the application's bundle size.",
        "Improved a $45M company's website using Tailwind CSS for responsiveness and added dynamic subtree websites for each brand, allowing customizable colors. This boosted client engagement by 13.7%.",
        "Consolidated two company identities (DYNC IT group & Dynamic Soft) into a single, dynamically adaptive web portal, intelligently adapting content based on domains. Achieved an estimated 25% improvement in server space utilization.",
        "Resolved merge conflicts and ensured smooth collaboration in a multi-developer environment.",
        "Boosted SEO and API data rendering speed for an e-commerce grocery delivery platform by transitioning to Next.js, leading to a 31% sales increase.",
      ],
    },
    {
      companyName: "AFINITY, a marketing agency company",
      title: "Frontend developer (React / Next.js)",
      time: "Mar 2022 – Oct 2022",
      bulletpoints: [
        "Developed over five web platforms for businesses in the areas of education, tourism, and delivery.",
        "Conducted the development of a web investment area with more than 70K users for startups and investors in Central Asia.",
        "Implemented internationalization with support for three languages: Uzbek, Russian, and English.",
      ],
    },
  ];

  const education = [
    {
      name: "Vistula University in Warsaw, Poland",
      profession: "Bachelor of Science, Computer Engineering",
      time: "(Currently studying)",
    },
    {
      name: "“Mohirdev”",
      profession: "Front-end Development Course",
      time: "April 2021 - Jan 2022",
    },
    {
      name: "High School",
      profession: "(Focused on Computer Science and Mathematics)",
      time: "Sep 2019 - May 2022",
    },
  ];

  return (
    <>
      <section className="bg-black py-[100px]" id="about">
        <div className="container px-[115px] flex flex-col gap-[20px] items-start">
          <h2
            className="inter700 leading-[150%] text-[48px] text-white"
            data-aos="fade-right"
          >
            About Me
          </h2>
          <p
            className="inter400 text-[20px] leading-[170%] text-white text-justify tracking-[2px]"
            data-aos="fade-right"
          >
            I&apos;m a software engineer with a focus on crafting code that
            drives profits and engages users. I go beyond typical front-end work
            by leveraging technology to help businesses gain more clients. I
            excel at understanding clients&apos; perspectives and creating
            tailored solutions. My proactive approach and dedication have led to
            success, from turning an internship into a full-time position to
            leading a team in developing a customized Learning Management System
            for private schools. I&apos;m committed to pushing the boundaries of
            software engineering to create meaningful experiences.
          </p>
          <div className="mt-[70px]">
            <h2
              className="text-[32px] text-white inter700 tracking-[2px]"
              data-aos="fade-right"
            >
              PROFESSIONAL EXPERIENCE
            </h2>
            {experience.map((exp, index) => (
              <div key={index} className="mt-[50px]">
                <div className="flex justify-between text-white mt-[30px]">
                  <h3 className="text-[22px] inter400" data-aos="fade-right">
                    <strong className="text-[#FFAC1C]">
                      {exp.companyName}
                    </strong>{" "}
                    - {exp.title}
                  </h3>
                  <h3 className="text-[#FFAC1C] inter700" data-aos="fade-left">
                    {exp.time}
                  </h3>
                </div>
                <ul className="text-white list-disc mt-[20px] text-[18px] flex flex-col gap-[20px] pl-[20px] tracking-[2px] inter400">
                  {exp.bulletpoints.map((bullet, index) => (
                    <li key={index} data-aos="fade-right">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-[90px] w-full">
            <h2
              className="text-[32px] text-white inter700 tracking-[2px]"
              data-aos="fade-right"
            >
              EDUCATION
            </h2>
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between text-white mt-[30px]">
                  <h3 className="text-[22px] inter400" data-aos="fade-right">
                    <strong className="text-[#FFAC1C]">{edu.name}</strong> -{" "}
                    {edu.profession}
                  </h3>
                  <h3 className="text-[#FFAC1C] inter700" data-aos="fade-left">
                    {edu.time}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
