import { useState, useEffect } from "react";
import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
};

export default function ResponsiveTruncate({ text, className }: Props) {
  const [displayText, setDisplayText] = useState("");

  const truncateText = (text: string, length: number) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // mobile
        setDisplayText(truncateText(text, 50));
      } else {
        // tablet & desktop
        setDisplayText(truncateText(text, 140));
      }
    };

    handleResize(); // set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [text]);

  return (
    <div
      className={clsx(
        "text-sm sm:text-base leading-5 text-[#222222] mb-2 sm:mb-6 opacity-80",
        className
      )}
    >
      {displayText}
    </div>
  );
}
