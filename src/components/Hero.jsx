import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
     <div className={`${styles.paddingX} absolute inset-0 top-1/2 transform -translate-y-1/2 max-w-8xl mx-auto flex flex-row items-center justify-center gap-5`}>   
      <div>
        <h1 className={` lg:text-[40px] sm:text-[30px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2  text-center`}>Hi, I'm <span className="font-Aoboshi lg:text-[120px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 heading-gradient">Nadun Rupasinghe</span></h1>
      </div>
     </div>
     {/* <ComputersCanvas /> */}
    </section>
  )
}

export default Hero