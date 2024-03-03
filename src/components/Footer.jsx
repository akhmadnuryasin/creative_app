import { Link } from "react-scroll";
import FooterLink from "./FooterLink";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "@/context/animation";

const CurrentYear = new Date().getFullYear();

const Footer = () => {
  const { riseUpVariant2, riseUpItem } = useContext(AnimationContext);

  return (
    <div>
      <footer className="pb-[4rem] lg:w-[90%] max-w-[1200px] m-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between mt-[4rem]">
          {/* Left  */}
          <motion.div
            variants={riseUpVariant2}
            initial="hidden"
            whileInView="visible"
            className="md:w-[40%]"
          >
            <motion.h2
              variants={riseUpItem}
              className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold lg:w-[70%] leading-[3rem] text-[#e5e5e5]"
            >
              Keep in Touch
            </motion.h2>
            <Link to="home" className="cursor-pointer"></Link>
            <motion.p
              variants={riseUpItem}
              className="text-[#929294] font-medium mb-8 lg:text-base text-[80%]"
            >
              Kab. Wonosobo , Prov. Jawa Tengah, Indonesia
            </motion.p>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Faq" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Terms & Agreements" />
            </motion.span>
          </motion.div>

          {/* Right  */}
          <motion.div
            variants={riseUpVariant2}
            initial="hidden"
            whileInView="visible"
            className="md:w-[40%] flex flex-col justify-between"
          >
            <motion.span variants={riseUpItem}>
              <FooterLink text="Email" handle="Welcome@CreativeNFT.com" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Instagram" handle="@CreativeNFT" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Twitter" handle="@CreativeNFT" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Medium" handle="@CreativeNFT" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Telegram" handle="@CreativeNFT" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="LinkedIn" handle="@CreativeNFT" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Facebook" handle="@CreativeNFT" />
            </motion.span>
          </motion.div>
        </div>
      </footer>
      <div className="w-[100%] h-14 bg-transparent text-white flex justify-center items-center border rounded-t-xl">
        <p>
          Copyright {CurrentYear}
          <span className="text-[#D5F70A]">Akhmad Nuryasin</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
