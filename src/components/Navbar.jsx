import React, { useContext } from "react";
import { Button } from "./ui/button";
import { AnimationContext } from "@/context/animation";
import { motion } from "framer-motion";

const Navbar = () => {
  const { riseUpVariant, riseUpItem, navVariants, itemVariants, tagVariant } =
    useContext(AnimationContext);
  return (
    <motion.div
      variants={riseUpVariant}
      initial="hidden"
      whileInView="visible"
      className="flex items-center justify-between w-full bg-transparent text-white h-[15vh]"
    >
      <motion.p variants={riseUpItem} className="text-2xl">
        Creative
        <span className="text-[#D5F70A]">NFT</span>
      </motion.p>
      <motion.div variants={tagVariant}>
        <Button
          variants={riseUpItem}
          className="block bg-transparent border rounded-full md:hidden"
        >
          Nav
        </Button>
      </motion.div>
      <ul className="relative hidden md:flex gap-x-7">
        <motion.li variants={riseUpItem}>Home</motion.li>
        <motion.li variants={riseUpItem}>About</motion.li>
        <motion.li variants={riseUpItem}>Collections</motion.li>
        <motion.li variants={riseUpItem}>Contacts</motion.li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
