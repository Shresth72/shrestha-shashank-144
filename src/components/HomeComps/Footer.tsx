"use client"

import React, { useEffect} from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  useEffect(() => {
    gsap.from([".quote", ".details", ".social"], {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".quote",
        start: "top 80%",
      },
    });
  }, []);

  return (
    // <footer className=" text-white relative bottom-0 text-sm translate-y-[100vh] py-4 w-full bg-black" >
    //   <div className="h-[1px] w-[100vw] absolute -top-12 -left-14 bg-gray-900"></div>
    //   <div className="container mx-auto flex items-start justify-between">
    //     <div className=" quote w-[36%] text-3xl" style={{ fontFamily: "Afrah" }} >
    //       <p>Crafting pixels, shaping code; where development meets design</p>
    //     </div>
    //     <div className="text-left details flex flex-col items-end ">
    //       <h2 className="mb-2 text-lg" style={{ fontFamily: "Afrah" }}>Delhi, India</h2>
    //       <p className="underline transition-all duration-500 text-gray-600 hover:text-white">shashankshrestha539@gmail.com</p>
    //     </div>
        
    //     <div className="social flex flex-col items-end">
    //       <h2 className="mb-3" style={{ fontFamily: "Afrah" }}>Follow Me</h2>
    //       <div className="flex justify-between gap-2">
    //         <Link
              
    //           href="https://www.linkedin.com/in/shrestha-shashank-38002b22b/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <FaLinkedin
    //             className="text-gray-300 hover:text-white"
    //             size={24}
    //           />
    //         </Link>

    //         <Link
    //           href="https://github.com/Shresth72"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <FaGithub className="text-gray-300 hover:text-white" size={24} />
    //         </Link>
            
    //         <Link
    //           href="https://www.instagram.com/shashankshrestha144/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <FaInstagram
    //             className="text-gray-300 hover:text-white"
    //             size={24}
    //           />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="text-white relative bottom-0 text-sm translate-y-[100vh] py-4 w-full bg-black">
  <div className="h-[1px] w-[100vw] absolute -top-12 -left-14 bg-gray-900"></div>
  <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
    <div className="quote w-full md:w-[36%] text-center md:text-left text-2xl md:text-3xl" style={{ fontFamily: "Afrah" }}>
      <p>Crafting pixels, shaping code; where development meets design</p>
    </div>
    <div className="text-center md:text-left details flex flex-col items-center md:items-end">
      <h2 className="mb-2 text-lg" style={{ fontFamily: "Afrah" }}>Delhi, India</h2>
      <p className="underline transition-all duration-500 text-gray-600 hover:text-white">shashankshrestha539@gmail.com</p>
    </div>
    <div className="social flex flex-col items-center md:items-end mt-4 md:mt-0">
      <h2 className="mb-3" style={{ fontFamily: "Afrah" }}>Follow Me</h2>
      <div className="flex justify-between gap-2">
        <a
          href="https://www.linkedin.com/in/shrestha-shashank-38002b22b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="text-gray-300 hover:text-white"
            size={24}
          />
        </a>
        <a
          href="https://github.com/Shresth72"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-gray-300 hover:text-white" size={24} />
        </a>
        <a
          href="https://www.instagram.com/shashankshrestha144/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="text-gray-300 hover:text-white"
            size={24}
          />
        </a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
