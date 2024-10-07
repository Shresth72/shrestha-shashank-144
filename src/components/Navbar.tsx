"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/Button";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { handleScroll } from "./ui/handleScroll";

const Navbar = ({ }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-link", {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 1,
      });
    });

    return () => ctx.revert();
  });

  return (
    <div
      className="pb-2 pt-0 pl-8 pr-14 flex items-end justify-between w-screen border-b-[1px] relative z-20 border-b-gray-950"
      style={{ fontFamily: "Afrah" }}
    >
      <Link
        href="/"
        className={`flex flex-col translate-y-[-3.4rem] ${buttonVariants({
          variant: "link",
        })}`}
      >
        <div className="text-3xl">Creative</div>
        <div className="translate-x-6 text-3xl">Portfolio</div>
      </Link>
      <div className="justify-between w-[76%] items-end relative hidden md:flex">
        <div className="flex overflow-hidden justify-between text-lg w-full pr-20 pl-1">
          <Link href="#work" className="nav-link" onClick={handleScroll}>
            work
          </Link>
          <Link href="#about" className="nav-link" onClick={handleScroll}>
            about
          </Link>
          <Link href="#tech" className="nav-link" onClick={handleScroll}>
            techstack
          </Link>
          <Link href="#contact" className="nav-link">
            contact
          </Link>
        </div>

        {/* <div className="pb-2 pt-0 pl-8 pr-4 md:pr-14 flex flex-col md:flex-row items-end justify-between w-full border-b-[1px] relative z-20 border-b-gray-950">
  <Link
    href="/"
    className={`flex flex-col ${buttonVariants({ variant: "link" })}`}
  >
    <div className="text-2xl md:text-3xl text-center md:text-left">Creative</div>
    <div className="text-2xl md:text-3xl text-center md:text-left">Portfolio</div>
  </Link>
  <div className="flex flex-col md:flex-row justify-between w-full items-end relative">
    <div className="flex overflow-hidden justify-between text-base md:text-lg w-full pr-6 md:pr-20 pl-1">
      <Link href="/" className="nav-link">
        home
      </Link>
      <Link href="#work" className="nav-link" onClick={handleScroll}>
        work
      </Link>
      <Link href="#about" className="nav-link" onClick={handleScroll}>
        about
      </Link>
      <Link href="#tech" className="nav-link" onClick={handleScroll}>
        techstack
      </Link>
    </div> */}

        <div className="relative">
          <svg
            width="200"
            height="150"
            viewBox="0 0 284 217"
            className=" absolute top-[83px] z-10"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M110.29 108.5H0H110.29ZM110.29 108.962V108.038L0 108.5L110.29 108.962ZM196.912 0.00231337C196.912 90.8292 182.736 108.502 109.832 108.502C182.728 108.502 196.912 126.164 196.912 217C196.912 126.173 211.087 108.502 283.991 108.502C211.087 108.5 196.912 90.8361 196.912 0V0.00231337ZM213.383 129.023C225.114 114.407 244.254 108.974 284 108.974V108.049C244.254 108.049 225.114 102.614 213.383 87.9981C201.653 73.3826 197.283 49.5203 197.283 0H196.541C196.541 49.5226 192.179 73.371 180.449 87.9865C168.718 102.602 149.576 108.038 109.832 108.038V108.962C149.578 108.962 168.718 114.396 180.449 129.011C192.179 143.627 196.541 167.475 196.541 216.998H197.283C197.283 167.475 201.644 143.627 213.383 129.023ZM154.273 104.772C166.198 101.606 174.676 96.4799 180.973 88.6406C187.271 80.8013 191.379 70.2302 193.92 55.3721C195.453 46.4072 196.426 35.9309 196.912 22.7529C197.396 35.9263 198.37 46.4072 199.902 55.3721C202.443 70.2302 206.558 80.7943 212.849 88.6406C219.141 96.4868 227.627 101.606 239.559 104.772C246.754 106.681 255.164 107.894 265.739 108.5C255.166 109.103 246.754 110.317 239.559 112.226C227.636 115.392 219.156 120.518 212.849 128.357C206.543 136.196 202.443 146.77 199.902 161.637C198.37 170.602 197.396 181.078 196.912 194.256C196.426 181.083 195.453 170.602 193.92 161.637C191.379 146.781 187.265 136.215 180.973 128.369C174.682 120.522 166.198 115.403 154.273 112.237C147.078 110.328 138.67 109.115 128.093 108.512C138.67 107.894 147.078 106.681 154.273 104.772Z"
              fill="white"
            />
          </svg>
          <svg
            width="200"
            height="150"
            className=" relative top-14 z-10"
            viewBox="0 0 284 217"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M110.29 108.5H0H110.29ZM110.29 108.962V108.038L0 108.5L110.29 108.962ZM196.912 0.00231337C196.912 90.8292 182.736 108.502 109.832 108.502C182.728 108.502 196.912 126.164 196.912 217C196.912 126.173 211.087 108.502 283.991 108.502C211.087 108.5 196.912 90.8361 196.912 0V0.00231337ZM213.383 129.023C225.114 114.407 244.254 108.974 284 108.974V108.049C244.254 108.049 225.114 102.614 213.383 87.9981C201.653 73.3826 197.283 49.5203 197.283 0H196.541C196.541 49.5226 192.179 73.371 180.449 87.9865C168.718 102.602 149.576 108.038 109.832 108.038V108.962C149.578 108.962 168.718 114.396 180.449 129.011C192.179 143.627 196.541 167.475 196.541 216.998H197.283C197.283 167.475 201.644 143.627 213.383 129.023ZM154.273 104.772C166.198 101.606 174.676 96.4799 180.973 88.6406C187.271 80.8013 191.379 70.2302 193.92 55.3721C195.453 46.4072 196.426 35.9309 196.912 22.7529C197.396 35.9263 198.37 46.4072 199.902 55.3721C202.443 70.2302 206.558 80.7943 212.849 88.6406C219.141 96.4868 227.627 101.606 239.559 104.772C246.754 106.681 255.164 107.894 265.739 108.5C255.166 109.103 246.754 110.317 239.559 112.226C227.636 115.392 219.156 120.518 212.849 128.357C206.543 136.196 202.443 146.77 199.902 161.637C198.37 170.602 197.396 181.078 196.912 194.256C196.426 181.083 195.453 170.602 193.92 161.637C191.379 146.781 187.265 136.215 180.973 128.369C174.682 120.522 166.198 115.403 154.273 112.237C147.078 110.328 138.67 109.115 128.093 108.512C138.67 107.894 147.078 106.681 154.273 104.772Z"
              fill="none"
              stroke="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
