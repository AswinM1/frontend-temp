import Image from "next/image";
import Hero from "./compo/Hero";
import Features from "./compo/Features";
import Navbar from "./compo/Navbar";
import Bento from "./compo/Bento";
import Pricing from "./compo/Pricing";
import Footer from './compo/Footer'
import Sta from "./compo/Sta";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex flex-col " >
      <Navbar></Navbar>
      <Hero></Hero>
      <Bento></Bento>
       <Features></Features>
      <Pricing></Pricing>
      <Sta></Sta>
      <Footer></Footer>
    </div>
  );
}
