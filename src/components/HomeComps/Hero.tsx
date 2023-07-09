"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/Button";
import canvas2 from "../../../public/canvas2.gif";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import { gsap } from "gsap";
import { useRef, useEffect, FC } from "react";
import { handleScroll } from "../ui/handleScroll";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.config({
        nullTargetWarn: false,
      });

      let tl = gsap.timeline();

      tl.from([".scroll-explore", ".heading"], {
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: "power3.out",
      })
        .from(".paragraph", {
          opacity: 0,
          y: 10,
          duration: 1,
          delay: -0.5,
          ease: "power3.out",
        })
        .from([".resume", ".contact-link"], {
          opacity: 0,
          y: 10,
          duration: 1,
          delay: -0.8,
          stagger: 0.1,
          ease: "power3.out",
        });

      tl.play();
    });

    return () => ctx.revert(); //cleanup
  }, [main]);

  return (
    <main className="pl-4 md:pl-8 pr-4 md:pr-14 flex justify-end w-screen" ref={main}>
    <Paragraph
      className="scroll-explore absolute left-0 rotate-[-90deg] bottom-9"
      size="xs"
    >
      scroll to explore
    </Paragraph>
    <div className="w-full md:w-[80%] h-[440px] relative overflow-hidden">
      <Image
        priority
        src={canvas2}
        alt="bg"
        className="w-full bg-cover blur-sm"
      />
  
      <div className="absolute top-0 p-4 md:p-10  pl-4 md:pl-12 pr-4 md:pr-14 -translate-y-2">
        <LargeHeading size="xl" className="heading">
          Turning Vision into reality with Code and Design
        </LargeHeading>
        <Paragraph className="text-left mt-2 paragraph">
          As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js, Web Development, and Graphic Designing.
        </Paragraph>
        <div className="mt-3 flex flex-col md:flex-row gap-4" style={{ fontFamily: "Afrah" }}>
          <Link
            href="/"
            className={`${buttonVariants({ variant: "black" })} resume`}
          >
            Resume
          </Link>
          <Link
            href="#contact-form"
            onClick={handleScroll}
            className={`underline ${buttonVariants({
              variant: "link",
            })} contact-link`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  </main>
  
  );
};

export default Hero;
