"use client"
import { useEffect, useState } from "react";

const ScrollToTopOnViewportChange = () => {
  const [, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleScrollToTop);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleScrollToTop);
    };
  }, []);

  return null;
};

export default ScrollToTopOnViewportChange;
