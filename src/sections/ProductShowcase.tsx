"use client";
import ProductImage from "@/assets/React App - Google Chrome 06-09-2024 02_00_26.png";
import Image from "next/image";
import Pyeramid from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png"
import { motion , useScroll  , useTransform } from "framer-motion";
import { useRef } from "react";
import { scroll } from "framer-motion/dom";
export const ProductShowcase = () => {
  
  const sectionRef = useRef(null);
  const {scrollYProgress}=useScroll({
    target: sectionRef,
    offset:['start end' ,'end start']
  })
  const translateY = useTransform(scrollYProgress , [0,1] ,[150,-150])
  return (
    <>
      <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-16 overflow-x-clip ">
        <div className="container">
          <div className="max-w-[740px] mx-auto">
            <div className="flex justify-center">
              <div className="tag">Keep a track of your inventory</div>
            </div>
            <h2 className="heading text-center text-5xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter">
              Drug Inventory & Supply Chain Tracking System
            </h2>
            <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            By - Code Nirvana
            </p>
          </div>
          <div className="relative">
            <Image src={ProductImage} alt="Product Image" className="mt-10 rounded-2xl shadow-2xl" />
            <motion.img
              src={Pyeramid.src}
              alt="Pyramid Image"
              height={262}
              width={262}
              className="hidden md:block absolute -right-36 -top-32"
              style={{
                translateY,

              }}
            />
            <motion.img
              src={TubeImage.src}
              alt="Pyramid Image"
              height={248}
              width={248}
              className="hidden md:block absolute -left-36 bottom-24"
              style={{
                translateY,
                
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};
