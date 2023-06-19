"use client";

import Design from "@/components/Design";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import Work from "@/components/Work";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import About from "@/components/About";
import Tech from "@/components/Tech";

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
        <Providers>
          <Navbar />
          <Toaster position="bottom-right" />
          <main>{children}</main>
          <Work />
          {/* <Design /> */}
          <About />
          <Tech />
        </Providers>
      </body>
    </html>
  );
}
