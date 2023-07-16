"use client";

import { FC, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Paragraph from "../ui/Paragraph";
import LargeHeading from "../ui/LargeHeading";
import Darken from "../ui/Darken";
import { skill } from "@/constants/skills";
import { experience } from "@/constants/exp";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import flower from "../../../public/Flower.jpg";
import Image from "next/image";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const animatePara = new SplitType(".para-about", { types: "words" });
      const animateList = new SplitType(".about-li", { types: "words" });

      gsap.from([animatePara.words, animateList.words], {
        y: 20,
        opacity: 0,
        rotate: "5deg",
        stagger: 0.005,
        scrollTrigger: {
          trigger: ".about-heading",
          start: "bottom center",
        },
      });
    });

    return () => ctx.revert();
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".flower", {
        
        y: 60,
        scrollTrigger: {
          trigger: ".para-about",
          // markers: true,
          start: "top bottom",
          end: "bottom+=500px top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="px-14 flex flex-col w-screen mt-4 pt-48 relative p-10" id="about">
      <LargeHeading type="ghost" size="xxl" className="ml-8 about-heading z-10">
        ABOUT
      </LargeHeading>
      <div className="translate-y-[-48px] z-20">
        <Marquee>
          <Paragraph size="lg" >
            SHRESTHA <Darken>SHASHANK</Darken> - <Darken>DELHI</Darken>, INDIA{" "}
            <Darken>-</Darken> I CAN, <Darken>BECAUSE</Darken> I DID
          </Paragraph>
        </Marquee>
      </div>
      
      <div className="flex justify-between text-left px-8">
      <Image
          priority
          src={flower}
          alt="bg"
          className="flower absolute w-[800px] z-0 top-[50%] -translate-y-[49%] left-[50%] -translate-x-1/2 opacity-30"
        />
        <div className=" w-[300px] flex flex-col gap-16">
          <Paragraph className="para-about">
            I love bringing ideas to life through crafted visuals and meaningful
            animations, playing with colors, composition, typography and
            details.
          </Paragraph>
          <Paragraph className="para-about">
            Currently a 3rd student at Netaji Subhash Institute of Technolgy,
            Delhi. Pursuing B-Tech in Computer Science and Engineering.
          </Paragraph>
          <Paragraph className="para-about">
            I also do Illustrations and graphic designing and love to play
            guitar and perform in stage gigs.
          </Paragraph>
        </div>
        <div className="flex flex-col justify-between">
          {/* <div>
            <Darken className="text-xs about-title">experience</Darken>
            <ul className="list-none text-sm flex flex-col flex-wrap ">
              {experience.map((item, i) => (
                <li key={i} className="about-li">
                  {item}
                </li>
              ))}
            </ul>
          </div> */}
          <div className="mr-20">
            <Darken className="text-xs about-title">skills</Darken>
            <ul className="list-none text-sm flex flex-col h-72 flex-wrap  ">
              {skill.map((item, i) => (
                <li key={i} className="about-li">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
