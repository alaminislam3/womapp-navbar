import React from "react";
import { useTheme } from "./ThemeContext";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className={`w-20 h-10 rounded-full border border-[#496F7A] flex items-center px-1 shadow-inner cursor-pointer relative transition-colors
        ${theme === "dark" ? "bg-[#3afeff]" : " bg-[#2b4957]"}
      `}
    >
      {/* Circle */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center shadow transition-transform duration-300
    ${
      theme === "dark"
        ? "bg-yellow-400 translate-x-10"
        : "bg-[#2b4957] shadow-black transition-shadow translate-x-0"
    }
  `}
      >
        {/* Icon */}
        {theme === "light" ? (
          <BsSun className="text-[#3afeff] text-lg" />
        ) : (
          <BsMoonStarsFill className="text-[#0D3B48] text-base" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
