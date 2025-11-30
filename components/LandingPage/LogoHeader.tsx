"use client";

import { motion } from "framer-motion";

export default function LogoHeader() {
  return (
    <div className="absolute top-12 left-0 w-full flex flex-col items-center justify-center z-50 pointer-events-none">
      <img 
        src="/images/icons/logo-bfriends ver.png" 
        alt="B Friends" 
        className="h-24 object-contain opacity-90" 
      />
      <span className="text-bfriends-beige text-[0.4rem] font-pontano tracking-[0.4em] uppercase">
        kerobokan wellness center
      </span>
    </div>
  );
}

