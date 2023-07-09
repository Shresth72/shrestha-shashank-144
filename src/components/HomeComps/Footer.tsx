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
    <footer className=" text-white h-64 relative bottom-0 text-sm translate-y-[90vh] py-4 w-full bg-black" style={{ fontFamily: "Afrah" }}>
      <div className="container mx-auto flex items-start justify-between">
        <div className=" quote w-1/3 text-3xl" >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="text-left details  ">
          <h2 className="uppercase mb-2">Delhi, India</h2>
          <p className=" underline">shashankshrestha539@gmail.com</p>
          
        </div>
        
        <div className="social flex flex-col items-end">
          <h2 className="mb-2">Follow Me</h2>
          <div className="flex justify-between gap-2">
            <Link
              href="https://www.linkedin.com/in/shrestha-shashank-38002b22b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-gray-300 hover:text-white"
                size={24}
              />
            </Link>

            <Link
              href="https://github.com/Shresth72"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-300 hover:text-white" size={24} />
            </Link>
            
            <Link
              href="https://www.instagram.com/shashankshrestha144/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-gray-300 hover:text-white"
                size={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
