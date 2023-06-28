import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import Lottie from "lottie-react";
import loader from "./loader.json";
import { motion } from "framer-motion";

export const PreLoader = () => {
  return (
    <motion.section
      className='relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#0a1119]  to-[#000000]'
      variants={{
        hidden: {
          opacity: 0,
          x: 1000,
          transition: {
            duration: 1.5,
          },
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.5,
          },
        },
      }}
      initial='visible'
      exit='hidden'
      layout
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-1/2 transform -translate-y-1/2 max-w-8xl mx-auto flex flex-row items-center justify-center gap-5 `}
      >
        <div>
          <h1
            className={` lg:text-[40px] sm:text-[30px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2  text-center`}
          >
            {" "}
            <span className='font-HammerSmith gradient-text lg:text-[120px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 '>
              Nadun Rupasinghe
            </span>
          </h1>
          <div className='w-1/5 mx-auto'>
            <Lottie animationData={loader} className='w-full' />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PreLoader;
