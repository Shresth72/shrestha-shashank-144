"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/Button";
import LargeHeading, { headingVariants } from "../ui/LargeHeading";
import Marquee from "react-fast-marquee";
import Paragraph from "../ui/Paragraph";
import Projects from "./Projects";
import Darken from "../ui/Darken";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Work = ({}) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".work-heading", {
        opacity: 0,
        x: 240,
        duration: 2,
        scrollTrigger: {
          trigger: ".work-heading",
          // markers: true,
          start: "top center+=200px",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="px-14 py-32 pt-52 flex flex-col w-screen mb-[700px]"
      style={{ fontFamily: "Afrah" }}
    >
      <LargeHeading type="ghost" size="xxl" className="ml-8 work-heading">
        WORK
      </LargeHeading>
      <div className="translate-y-[-48px]">
        <Marquee>
          <Paragraph size="lg">
            WEB PROJECTS | EXEMPLIFY <Darken>MODERN</Darken> PROFESSIONLISM
          </Paragraph>
        </Marquee>
      </div>
      <Projects />
    </div>
  );
};

export default Work;
