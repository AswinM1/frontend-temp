import React from "react";
import img2 from '../../Frame 27.png';
import Image from "next/image";
import Features from "./Features";

function Bento() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 min-h-screen max-w-6xl mx-auto">
      
      {/* Card 1 */}
      <div
        style={{
          background: "radial-gradient(circle at bottom right,#363636 0%, #1A1A1A 100%)"
        }}
        className="col-span-1 sm:col-span-2 w-full relative p-6  border-neutral-500 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all min-h-[200px]"
      >
        <h2 className="text-6xl sm:text-xl font-bold text-white font-sans tracking-tight z-10">
          Faster Tracking
        </h2>
        {/* Image only on sm and up */}
        <div className="hidden sm:block absolute inset-0 z-0">
          <Image
            src={img2}
            alt="hello"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Card 2 */}
      <div
        style={{
          background: "radial-gradient(circle at bottom right,#363636 0%, #1A1A1A 100%)"
        }}
        className="w-full p-6  rounded-2xl flex flex-col sm:flex-row items-center gap-4 justify-center bg-zinc-900 overflow-hidden hover:shadow-md transition-all"
      >
        <h2 className="text-6xl sm:text-xl font-bold font-sans tracking-tight text-white">
          Design
        </h2>
        {/* Circle only on sm+ */}
        <div className="hidden sm:flex w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-2xl shadow-white"></div>
      </div>

      {/* Card 3 */}
      <div
        style={{
          background: "radial-gradient(circle at bottom right,#363636 0%, #1A1A1A 100%)"
        }}
        className="w-full p-6 relative rounded-2xl flex flex-col justify-between hover:shadow-md transition-all min-h-[180px]"
      >
        <h2 className="text-6xl sm:text-5xl md:text-6xl font-bold text-white font-sans tracking-tight z-10 items-center flex flex-col justify-center mx-auto h-full text-center">
          Feature
        </h2>
      </div>

      {/* Card 4 */}
      <div
        style={{
          background: "radial-gradient(circle at bottom right,#363636 0%, #1A1A1A 100%)"
        }}
        className="col-span-1 sm:col-span-2 w-full p-6 relative border-black rounded-2xl px-5 bg-zinc-900 flex flex-col justify-between hover:shadow-md transition-all"
      >
        <h2 className="text-4xl sm:text-xl font-bold text-white font-sans tracking-tight">
          Some feature we have
        </h2>
       
        <div className="hidden sm:flex absolute h-40 w-full bg-neutral-600 bottom-0 left-0 right-0 rounded-xl">
          <div className="absolute h-36 w-full bg-neutral-800 bottom-0 left-0 right-0 rounded-xl"></div>
        </div>
      </div>

      {/* Card 5 */}
      <div
        style={{
          background: "radial-gradient(circle at bottom right,#363636 0%, #1A1A1A 100%)"
        }}
        className="col-span-1 sm:col-span-2 w-full relative p-6 border border-black rounded-2xl bg-zinc-900 overflow-hidden justify-center flex hover:shadow-md transition-all"
      >
        <Features />
      </div>
    </div>
  );
}

export default Bento;
