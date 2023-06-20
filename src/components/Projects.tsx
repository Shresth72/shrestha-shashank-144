"use client";

import Image, { StaticImageData } from "next/image";
import { projectDetails } from "@/constants/projects";
import leaf1 from "../../public/leaf.png";
import leaf2 from "../../public/leaf2.png";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import StaticImport from "next/image";

const Projects = ({}) => {
  const [preview, setPreview] = useState<string>();
  let imgPrev:string = "../../public/canvas.png";
  const [hover, setHover] = useState<boolean>();

  const image = useRef<HTMLImageElement>(null);
  const link = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(image.current, { scale: 0, duration: 0.4 });

      let xTo = gsap.quickTo(image.current, "x", {
          duration: 0.6,
          ease: "power3",
        }),
        yTo = gsap.quickTo(image.current, "y", {
          duration: 0.6,
          ease: "power3",
        });

      window.addEventListener("mousemove", (e) => {
        e.preventDefault();
        xTo(e.clientX / 1.6);
        // yTo(e.clientY)
        yTo(
          e.clientY / 2 -
            (window.scrollY < 1000 ? window.scrollY / 12 : -window.scrollY / 5)
        );
      });
    });

    return () => ctx.revert(); //cleanup
  }, [hover]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(image.current, { opacity: 0 });
    });

    return () => ctx.revert();
  }, [preview]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
    <div className="flex p-8 relative">
      <div className="image-wrapper">
        <Image
          src={leaf1}
          alt=""
          className=" absolute right-0 z-10 brightness-75 pointer-events-none leaf-a"
          width={800}
        />
        <Image
          src={leaf2}
          alt=""
          className=" absolute left-32 z-10 brightness-75 origin-center rotate-[-210deg] translate-y-80 pointer-events-none leaf-b"
          width={400}
        />
      </div>
      {projectDetails.map((project) => (
        <Link
          href="/"
          key={project.id}
          className="w-44 relative projects"
          id={`project-${project.id}`}
        >
          <h1
            ref={link}
            className={` relative rotate-[90deg] origin-center  text-[190px] hover:text-gray-300 transition-colors`}
            onMouseOver={(e) => {
              setPreview(project.img);
              imgPrev = project.img;
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            {project.title}
          </h1>
        </Link>
      ))}
      {hover && (
        <Image
          ref={image}
          src={imgPrev}
          alt=""
          className=" w-80 h-60 z-40 absolute pointer-events-none"
        />
      )}
    </div>
  );
};

export default Projects;
