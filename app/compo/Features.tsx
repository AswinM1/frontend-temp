"use client";
import React from "react";
import { DiReact } from "react-icons/di";
import {
  RiNextjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

function Features() {
  const items = [
    <RiNextjsLine size={100} key="nextjs" />,
    <RiTailwindCssLine size={100} key="tailwind" />,
    <SiTypescript size={70} key="ts" />,
    <DiReact size={100} key="react" />,
  ];

  return (
    <div className="justify-center items-center flex max-w-6xl mx-auto flex-col gap-10  mt-30" >
        <div className="text-white font-bold font-sans text-4xl">Build with</div>
       <div className="w-[600px] overflow-hidden py-2 items-center justify-center mx-auto rounded-2xl mask-r-from-0% mask-l-from-0%">
      <motion.div
        className="flex gap-10 w-fit justify-center items-center opacity-100"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
       
      >
        {[...items, ...items].map((icon, index) => (
          <div key={index} className="text-white">
            {icon}
          </div>
        ))}
      </motion.div>
      </div>
    </div>
    
  );
}

export default Features;
