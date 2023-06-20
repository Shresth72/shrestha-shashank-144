"use client";

import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/Button";
import canvas from "../../public/canvas.png";
import canvas2 from "../../public/canvas2.gif";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Home() {
  const main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
        .from([".resume", ".contact"], {
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
    <main className="pl-8 pr-14 flex justify-end w-screen" ref={main}>
      <Paragraph
        className="scroll-explore absolute left-0  rotate-[-90deg] bottom-9"
        size="xs"
      >
        scroll to explore
      </Paragraph>
      <div className="w-[80%] h-[440px] relative overflow-hidden">
        <Image src={canvas2} alt="bg" className="w-full bg-cover blur-sm" />

        <div className="absolute top-0 p-10 pt-8 pl-12 pr-14">
          <LargeHeading size="xl" className="heading">
            Turning Vision into reality with Code and Design
          </LargeHeading>
          <Paragraph className="text-left mt-2 paragraph">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js, web development and
            Graphic designing.
          </Paragraph>
          <div className="mt-3 flex gap-4" style={{ fontFamily: "Afrah" }}>
            <Link
              href="/"
              className={`${buttonVariants({ variant: "black" })} resume`}
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className={` underline ${buttonVariants({
                variant: "link",
              })} contact`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
