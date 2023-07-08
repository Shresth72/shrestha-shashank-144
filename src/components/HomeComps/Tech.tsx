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

interface TechProps {}

const Tech: FC<TechProps> = ({}) => {
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
    <div className="tect-container relative h-[80vh] px-14 flex flex-col w-screen mt-52 mb-16" id="tech">
      <LargeHeading type="ghost" size="xxl" className="ml-8 tech-heading">
        TECHSTACK
      </LargeHeading>
      <div className="translate-y-[-48px]">
        <Marquee>
          <Paragraph size="lg">
            TECHNOLOGY <Darken>AND</Darken> LIBRARIES <Darken>USED IN</Darken>{" "}
            MY PORTFOLIO
          </Paragraph>
        </Marquee>
      </div>
      <div className="w-[70%] mt-4 pointer-events-none grid grid-cols-4 gap-10 place-self-center tech-wrapper">
        <div id="contact-form" className=" absolute bottom-[155px]"></div>
        {tech.map((item, i) => (
          <div
            key={i}
            
            className="tech-words tech-grid border-[1px] py-4 border-white flex justify-center items-center border-opacity-50 opacity-80"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
