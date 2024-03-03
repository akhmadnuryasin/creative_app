import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import { AnimationContext } from "@/context/animation";
import { motion } from "framer-motion";

const Hero = () => {
  const { riseUpVariant, riseUpItem, fade } = useContext(AnimationContext);
  return (
    <div className="h-[100vh]">
      <Navbar />
      <motion.div
        variants={riseUpVariant}
        initial="hidden"
        whileInView="visible"
        className="h-[75vh] flex flex-col items-center justify-center text-center text-white bg-transparent"
      >
        <motion.h3 variants={riseUpItem} className="text-3xl md:text-7xl">
          Discover and Collect The Best NFTs Digital Art.
        </motion.h3>
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 1 },
          }}
          className="mt-10 text-base md:text-xl"
        >
          There are a thousand more NFTs that interest you, find and collect
          what you like!
        </motion.h4>
        <div className="flex items-center justify-center mt-8 md:flex-col gap-x-4">
          <motion.div
            variants={riseUpVariant}
            initial="hidden"
            whileInView="visible"
            className="flex justify-center text-center text-white gap-x-7"
          >
            <motion.div variants={riseUpItem} className="text-center">
              <p className="text-2xl">
                24K<span className="text-[#0476b5]">+</span>
              </p>
              <p className="text-xs text-[#88888a]">Collection</p>
            </motion.div>
            <motion.div variants={riseUpItem} className="text-center">
              <p className="text-2xl">
                18K<span className="text-[#f53627]">+</span>
              </p>
              <p className="text-xs text-[#88888a]">Actions</p>
            </motion.div>
            <motion.div variants={riseUpItem} className="text-center">
              <p className="text-2xl">
                20K<span className="text-[#ea8113]">+</span>
              </p>
              <p className="text-xs text-[#88888a]">Artist</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
