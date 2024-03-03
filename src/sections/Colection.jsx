import React from "react";
import { Data } from "@/utils/Data";
import NftCard from "@/components/NftCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Colection = () => {
  return (
    <section>
      <div className="flex mb-20">
        <div className="w-1/2">
          <motion.h3
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            className="text-sm text-white md:text-2xl"
          >
            Amazing and Super Unique Art This Week
          </motion.h3>
        </div>
        <div className="flex items-center justify-end w-1/2">
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.6 },
            }}
          >
            <Button variant="customcard" className="text-black">
              See All
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid mt-4 gap-11 sm:grid-cols-2 lg:grid-cols-3">
          {Data.map((item) => (
            <NftCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colection;
