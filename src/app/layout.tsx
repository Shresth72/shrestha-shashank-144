"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Work from "@/components/HomeComps/Work";
import { Toaster } from "react-hot-toast";
import About from "@/components/HomeComps/About";
import Tech from "@/components/HomeComps/Tech";
import Pointer from "@/components/ui/Pointer";
import ContactUs from "@/components/ContactForm";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-black text-slate-50 overflow-x-hidden dark"
      id="wrapper"
    >
      <body className="bg-black antialiased" id="smooth-content">
          <Pointer />
           
          <Navbar />
          <Toaster position="bottom-right" />
          <main>{children}</main>
          <Work />
          
          <About />
          <Tech />
          <ContactUs />
      </body>
    </html>
  );
}
