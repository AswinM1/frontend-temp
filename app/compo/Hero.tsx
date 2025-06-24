"use client";
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.div
      style={{
        background: "radial-gradient(circle at top, gray 15%, transparent 60%)"
      }}
      className='bg-neutral-950 flex w-full h-screen justify-center items-center mx-auto flex-col gap-4'
    >
      <motion.div
        initial={{ opacity: 0, y: 40,filter:'blur(10px)' }}
        animate={{ opacity: 1, y: 0,filter:'blur(0px)' }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='md:text-6xl font-sans text-white md:w-[700px] text-center font-bold tracking-tight text-5xl px-5 w-full'
      >
        This is a Heading in center of your page
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className='font-sans tracking-tight text-md md:text-xl mb-2 text-white'
      >
        This is a subheading below the heading
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className='flex gap-4'
      >
        <button className='bg-white rounded-md px-2 py-2 border cursor-pointer text-black font-medium tracking-tight font-sans border-neutral-500'>
          Get started
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
