"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 1.0 is Here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 ">
              Nirvana  HeathChain
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tighter mt-6">
            Web and Android App : Prevent counterfeits, ensure accurate inventory, and enhance tracking
Advanced Drug Inventory System : Monitor drug consumption patterns, ensure transparency and efficiency
Dashboard-Based Monitoring : Track vendor, shipment and hospital drug usage
Improved Procurement: Ensure drug availability, streamline distribution, and enforce quality controls

            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Sign In</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 
              lg:left-0"
              animate={{
                translateY: [-30, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="cylinder"
              className="hidden md:block -top-10 -left-32 md:absolute"
              style={{
                translateY:translateY
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="noddle image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate:30,
                translateY:translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
