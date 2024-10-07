"use client";

import { FC } from "react";
import LargeHeading from "../ui/LargeHeading";
import Marquee from "react-fast-marquee";
import Darken from "../ui/Darken";
import Paragraph from "../ui/Paragraph";
import { tech } from "@/constants/tech";
import { useRef, useEffect } from "react";
import { gsap, random } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import Footer from "./Footer";

interface TechProps { }

const Tech: FC<TechProps> = ({ }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".tech-heading", {
        opacity: 0,
        x: 240,
        duration: 2,
        scrollTrigger: {
          trigger: ".tech-heading",
          start: "top center+=200px",
        },
      });

      gsap.from(".tech-grid", {
        duration: 1,
        scale: 0,
        y: 40,
        ease: "power1.inOut",
        stagger: {
          grid: [7, 15],
          from: "random",
          axis: "x",
          ease: "power2.in",
          amount: 0.2,
        },
        scrollTrigger: {
          trigger: ".tech-wrapper",
          start: "top center+=200px",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="tech-container relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mt-36 mb-8"
      id="tech"
    >
      <LargeHeading type="ghost" size="xxl" className="ml-8 about-heading z-10">
        EXPERIENCE
      </LargeHeading>
      <div className="translate-y-[-48px] z-20">
        <Marquee>
          <Paragraph size="lg">
            MY <Darken>WORK</Darken> EXPERIENCE | <Darken>Internships </Darken>{" "}
            | University Work
          </Paragraph>
        </Marquee>
      </div>
      <div id="contact-form" className=" absolute bottom-[360px]"></div>

      <div className="flex flex-col sm:flex-row justify-between text-left mt-6 sm:mt-8 md:mt-10">
        <div className="w-full sm:w-1/2 flex flex-col gap-6 sm:gap-10">
          <Paragraph className="para-about">
            Cloud Engineer Intern at Brainwave Matrix Solutions | June 2024 -
            August 2024
          </Paragraph>
          <Paragraph className="para-about">
            Software Engineer Intern at ___ | Jan 2025 - June 2025
          </Paragraph>
          <Paragraph className="para-about">
            Design and Intrumentals Head at Crescendo NSUT
          </Paragraph>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tech;
