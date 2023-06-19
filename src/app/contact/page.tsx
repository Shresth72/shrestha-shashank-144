
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Website | Contact",
  description: "Portfolio Website of Shrestha Shashank",
};

export default function Contact() {
  return (
    <>
      <div>Contact</div>
      <Link href="/">Home</Link>
    </>
  );
}
