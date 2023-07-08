import React, { useEffect, useRef } from "react";
import { FaBehance, FaLinkedin, FaGithub } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const quote = quoteRef.current;
    const contact = contactRef.current;
    const social = socialRef.current;

    gsap.from(quote, {
      opacity: 0,
      y: 20,
      duration: 1,
      scrollTrigger: {
        trigger: quote,
        start: "top 80%",
      },
    });

    gsap.from(contact, {
      opacity: 0,
      y: 20,
      duration: 1,
      scrollTrigger: {
        trigger: contact,
        start: "top 80%",
      },
    });

    gsap.from(social, {
      opacity: 0,
      y: 20,
      duration: 1,
      scrollTrigger: {
        trigger: social,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <footer className="bg-black text-gray-300 py-4 w-full relative bottom-0 border-t-[1px]  border-b-gray-900">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg" ref={quoteRef}>
          <h2>Quote</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="text-center" ref={contactRef}>
          <h2>Contact Details</h2>
          <p>Location: New York, USA</p>
          <p>Email: example@example.com</p>
          <p>Phone: +1 123-456-7890</p>
          <p>Additional Info: Some text</p>
          <p>Additional Info: Some text</p>
        </div>
        <div className="text-right" ref={socialRef}>
          <h2>Follow Me</h2>
          <div className="flex justify-end">
            <Link
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance
                className="text-gray-300 hover:text-white mr-4"
                size={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-gray-300 hover:text-white mr-4"
                size={24}
              />
            </Link>
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-300 hover:text-white" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
