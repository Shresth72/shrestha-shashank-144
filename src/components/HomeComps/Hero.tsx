"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/Button";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import canvas2 from "../../../public/canvas2.gif";
import { gsap } from "gsap";
import { useRef, useEffect, FC } from "react";
import { handleScroll } from "../ui/handleScroll";

interface HeroProps { }

const Hero: FC<HeroProps> = ({ }) => {
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
    <main
      className="bmid:pl-4 px-8 md:pr-14 md:pl-8 flex justify-end w-screen"
      ref={main}
    >
      <div className="w-full md:w-[80%] right-0 p-0 bmid:h-[440px] md:h-[550px] h-[480px] sm:h-[410px] xl:h-[500px] xxl:h-[550px] relative overflow-hidden">
        <Image
          priority
          src={canvas2}
          alt="bg"
          className="w-full bg-cover blur-sm h-full"
        />

        <div className="absolute top-0 md:p-10 flex flex-col gap-3 sm:p-7 sm:gap-2 p-6 pt-7 bmid:block bmid:pl-12 md:pl-12 bmid:pr-14 md:pr-14 -translate-y-2 xxl:gap-28 xxl:max-w-6xl">
          <LargeHeading size="xl" className="heading">
            Turning Vision into reality with Code and Design
          </LargeHeading>
          <Paragraph className="text-left mt-2 paragraph xl:mt-6">
            As an experienced full-stack developer, I am passionate about
            transforming ideas into innovative web applications. Explore my
            latest projects, which showcase my deep expertise in Full-Stack
            Development, Networking, Linux, and Distributed Systems.
          </Paragraph>
          <div
            className="md:mt-3 bmid:flex mid:flex-col md:flex-row bmid:gap-4 xl:mt-6"
            style={{ fontFamily: "Afrah" }}
          >
            <Link
              href="/"
              className={`${buttonVariants({ variant: "black" })} resume`}
            >
              Resume
            </Link>
            <Link
              href="https://github.com/Shresth72"
              onClick={handleScroll}
              className={`underline ${buttonVariants({
                variant: "link",
              })} contact-link`}
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
