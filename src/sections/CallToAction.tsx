"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import StarIamge from "@/assets/star.png";
import springiamge from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip "
    >
      <div className="container">
        <div className="section-heading relative ">
          <h2 className="heading text-center text-4xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter mt-5">
            Sign up for free today
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Celebrate the joy of accomplishment with an app desgined to track
            your inventory and keep an eye on your supplychain
          </p>

          <motion.img
            src={StarIamge.src}
            alt="starimage"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springiamge.src}
            alt="springimage"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Sign up now</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
