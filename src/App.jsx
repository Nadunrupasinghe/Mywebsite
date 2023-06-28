import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  PreLoader,
} from "./components";
import { Element, scroller } from "react-scroll";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <PreLoader />
      ) : (
        <AnimatePresence>
          <motion.div
            className='relative z-0 '
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
            initial='hidden'
            animate='visible'
            layout
          >
            <div className=' bg-gradient-to-r from-[#0a1119]  to-[#000000]'>
              <Navbar />
              <Hero />

              <About />
              <Experience />
              <Works />

              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </BrowserRouter>
  );
};

export default App;
