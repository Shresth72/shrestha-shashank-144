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
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const image = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const link = useRef<HTMLHeadingElement>(null);

  useEffect(() => {

    let ctx = gsap.context(() => {
      
      window.addEventListener("mousemove", (e) => {
        e.preventDefault();
        
        gsap.to(image.current, {
          opacity: 0,
          duration: 0,
          x: e.clientX / 1.6 - 10,
          y:
            e.clientY / 2 -
            (window.scrollY < 1000
              ? window.scrollY / 12
              : -window.scrollY / 5) -
            10,
        });
        gsap.to(image.current, {
          x: e.clientX / 1.6,
          y:
            e.clientY / 2 -
            (window.scrollY < 1000 ? window.scrollY / 12 : -window.scrollY / 5),
          duration: 0.5,
          opacity: 1,
        });
      });
    });

    return () => ctx.revert(); //cleanup
  }, [hover]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(image.current, { opacity: 0 });
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

    gsap.from(".leaf", {
      // opacity: 0,
      duration: 1,
      y: 120,
      scrollTrigger: {
        trigger: "#project-1",
        // markers: true,
        start: "top bottom",
        end: "clamp(bottom+=500px top)",
        scrub: 2,
      },
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex p-8 relative project-container"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="image-wrapper">
        <Image
          src={leaf1}
          alt=""
          className=" absolute right-0 z-10 brightness-75 pointer-events-none leaf-a leaf"
          width={800}
        />
        <Image
          src={leaf2}
          alt=""
          className=" absolute left-32 z-10 brightness-75 origin-center rotate-[-210deg] translate-y-80 pointer-events-none leaf-b leaf"
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
            className={`relative rotate-[90deg] origin-center text-[190px] hover:text-gray-300 transition-colors`}
            onMouseOver={(e) => {
              setActiveIndex(project.id);
            }}
            onMouseLeave={() => {
              setActiveIndex(0);
            }}
          >
            {project.title}
          </h1>
        </Link>
      ))}

      {hover &&
        projectDetails
          .filter((project) => project.id === activeIndex)
          .map((filteredProject) => (
            <div
              key={filteredProject.id}
              ref={image}
              className="pointer-events-none absolute z-[100] w-80 h-60 opacity-0 "
            >
              <Image
                src={filteredProject.img}
                className="w-full h-full"
                alt="image"
                width={100}
                height={100}
              />
            </div>
          ))}
    </div>
  );
};

export default Projects;
