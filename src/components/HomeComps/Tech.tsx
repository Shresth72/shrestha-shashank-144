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
    
    <div className="tech-container relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mt-36 mb-8" id="tech">
        <LargeHeading type="ghost" size="xxl" className="ml-8 about-heading z-10">
          TECHSTACK
      </LargeHeading>
      <div className="translate-y-[-48px] z-20">
        
        <Marquee>
            <Paragraph size="lg">
              TECHNOLOGY <Darken>AND</Darken> LIBRARIES <Darken>USED IN</Darken> MY PORTFOLIO
            </Paragraph>
          </Marquee>
      </div>
        <div id="contact-form" className=" absolute bottom-[360px]"></div>
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 px-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {tech.map((item, i) => (
            <div
              key={i}
             
              className="relative cursor-pointer inline-flex items-center justify-center p-3 py-5 overflow-hidden font-bold text-white opacity-70 shadow-2xl group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#222] via-[#666] to-[#999] group-hover:opacity-2"></span>
              <span className="absolute inset-0 w-full h-full border border-white opacity-40"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative">{item}</span>
            </div>
          ))}
        </div>
      
      <Footer />
    </div>
  );
};

export default Tech;
