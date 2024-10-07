"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Work from "@/components/HomeComps/Work";
import { Toaster } from "react-hot-toast";
import About from "@/components/HomeComps/About";
import Tech from "@/components/HomeComps/Tech";
import Contact from "@/components/HomeComps/Contact";
import { useEffect } from "react";
import ScrollToTopOnViewportChange from "@/components/ui/ScrollOnResize";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo(0, 0);
    window.scroll({ behavior: "smooth" });
  }, []);

  return (
    <html
      lang="en"
      className="bg-black text-slate-50 overflow-x-hidden dark"
      id="wrapper"
    >
      <body
        className="bg-black antialiased pb-0 pt-[-10px]"
        id="smooth-content"
      >
        {/* <ScrollToTopOnViewportChange /> */}
        <Navbar />
        <Toaster position="bottom-right" />
        <main>{children}</main>
        <Work />
        <About />
        <Tech />
        <Contact />
      </body>
    </html>
  );
}
