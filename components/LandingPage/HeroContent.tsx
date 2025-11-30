"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroContentProps {
  onJoinClick: () => void;
}

export default function HeroContent({ onJoinClick }: HeroContentProps) {
  return (
    <div className="relative z-30 flex flex-col items-center justify-center text-center max-w-xl px-4 mt-16 pointer-events-auto">
      <p className="font-pontano text-xs md:text-xs tracking-[0.6em] text-bfriends-darkbluegray uppercase mb-4">
        Opening Soon in 2026
      </p>

      <h1 className="font-belleza text-4xl md:text-[3.6rem] text-bfriends-darkbluegray mb-10 leading-[1.1]">
        A wellness{" "}
        <span className="text-bfriends-orange-100 italic">journey</span> that
        begins with becoming a{" "}
        <span className="text-bfriends-orange-100 italic border-b-3 border-bfriends-orange-100">
          friend to yourself.
        </span>
      </h1>

      <button
        onClick={onJoinClick}
        className="group flex transform hover:scale-[1.02] transition-transform cursor-pointer"
      >
        <span className="flex-1 flex items-center justify-center px-4 py-2 border border-bfriends-darkbluegray rounded-l-xl rounded-r-xl text-bfriends-darkbluegray font-normal font-pontano group-hover:bg-bfriends-orange-100/90 transition-all">
          Scroll Down
        </span>
        <span className="flex items-center justify-center px-4 border border-bfriends-darkbluegray rounded-r-xl rounded-l-xl text-bfriends-darkbluegray group-hover:bg-bfriends-orange-100/90 transition-all">
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>
    </div>
  );
}

