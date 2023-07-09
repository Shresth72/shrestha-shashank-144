"use client";

import Image, { StaticImageData } from "next/image";
import { projectDetails } from "@/constants/projects";
import leaf1 from "../../../public/leaf.png";
import leaf2 from "../../../public/leaf2.png";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Projects = ({}) => {
  const [hover, setHover] = useState<boolean>();
  const [preview, setPreview] = useState<any>();
  const image = useRef<HTMLImageElement>(null);
  const link = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let xTo = gsap.quickTo(image.current, "x", {
          duration: 0.8,
          ease: "power3",
        }),
        yTo = gsap.quickTo(image.current, "y", {
          duration: 0.8,
          ease: "power3",
        });

      window.addEventListener("mousemove", (e) => {
        xTo(e.clientX - 160);
        yTo(
          e.clientY / 2 -
            (window.scrollY < 1000 ? window.scrollY / 12 : -window.scrollY / 5)
        );
      });

      gsap.to(image.current, {
        opacity: 1,
        duration: 1,
      });
    });

    return () => ctx.revert(); //cleanup
  }, [hover]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(image.current, { opacity: 0 });

      gsap.from(".leaf", {
        opacity: 1,
        duration: 1,
        y: 120,
        scrollTrigger: {
          trigger: "#project-1",
          // markers: true,
          start: "top bottom",
          end: "bottom+=500px top",
          scrub: 2,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(
        [
          "#project-1",
          "#project-2",
          "#project-3",
          "#project-4",
          "#project-5",
          "#project-6",
        ],
        {
          opacity: 0,
          y: 50,
          duration: 1.5,
          scrollTrigger: {
            trigger: "#project-1",
            // markers: true,
            start: "top center+=200px",
            end: "bottom+=800px top",
            toggleActions: "play complete pause reset",
          },
          stagger: 0.4,
        }
      );
      gsap.to(
        ["#project-1", "#project-2", "#project-4", "#project-5", "#project-6"],
        {
          zIndex: 30,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex p-[2.58vw] relative project-container"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="image-wrapper">
        <Image
          src={leaf1}
          alt=""
          className=" absolute right-0 z-10 brightness-75 pointer-events-none leaf-a leaf translate-x-4"
          width={800}
          priority
        />
        <Image
          src={leaf2}
          alt=""
          className=" absolute left-32 z-10 brightness-75 origin-center rotate-[-210deg] translate-y-80 -translate-x-2 pointer-events-none leaf-b leaf"
          width={400}
        />
      </div>
      {projectDetails.map((project) => (
        <Link
          href={project.link}
          key={project.id}
          target="_blank"
          className="w-[14.2vw] relative projects"
          id={`project-${project.id}`}
        >
          <h1
            ref={link}
            className={`relative rotate-[90deg] origin-center text-[14.7vw] hover:text-[#bec6d5] transition-all duration-[1s]`}
            onMouseOver={(e) => {
              setPreview(project.img);
            }}
          >
            {project.title}
          </h1>
        </Link>
      ))}

      {hover && (
        <Image
          src={preview}
          alt="project-image"
          ref={image}
          className=" object-cover lg:w-[26.6vw] lg:h-[15.3vw] z-50 absolute pointer-events-none left-0 top-0 sm:w-[110px] sm:h-[55px]"
        />
      )}
    </div>
  );
};

export default Projects;
