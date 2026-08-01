"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className={`
        hidden lg:flex
        fixed bottom-8 right-8
        z-50
        h-14 w-14
        items-center justify-center
        rounded-full
        bg-black
        text-white
        shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-neutral-800
        ${
          showButton
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-4"
        }
      `}
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default BackToTop;