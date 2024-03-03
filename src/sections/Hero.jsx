import React from "react";
import Navbar from "@/components/Navbar";

const Hero = () => {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="h-[75vh] flex flex-col items-center justify-center text-center text-white bg-transparent">
        <h3 className="text-3xl md:text-7xl">
          Discover and Collect The Best NFTs Digital Art.
        </h3>
        <h4 className="mt-10 text-base md:text-xl">
          There are a thousand more NFTs that interest you, find and collect
          what you like!
        </h4>
        <div className="flex items-center justify-center mt-8 md:flex-col gap-x-4">
          <div className="flex justify-center text-center text-white gap-x-7">
            <div className="text-center">
              <p className="text-2xl">
                24K<span>+</span>
              </p>
              <p className="text-xs">Collection</p>
            </div>
            <div className="text-center">
              <p className="text-2xl">
                18K<span>+</span>
              </p>
              <p className="text-xs">Actions</p>
            </div>
            <div className="text-center">
              <p className="text-2xl">
                20K<span>+</span>
              </p>
              <p className="text-xs">Artist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
