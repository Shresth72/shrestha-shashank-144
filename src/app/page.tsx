import Hero from "@/components/HomeComps/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Website | HomePage",
  description: "Portfolio Website of Shrestha Shashank",
};

export default function Home() {
  return <Hero />;
}
