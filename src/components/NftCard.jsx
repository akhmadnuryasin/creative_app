import React from "react";
import Atropos from "atropos/react";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const NftCard = ({ url, timeRemaining, price, artistName, ethAmount }) => {
  return (
    <Atropos className="my-atropos">
      <a
        href="#"
        className="group bg-[#1B1B21] p-3 rounded-2xl block overflow-hidden"
      >
        <img
          src={`/${url}.jfif`}
          alt=""
          className="h-[350px] w-full rounded-2xl object-cover transition duration-500 sm:h-[450px]"
        />

        <div className="bg-[#1B1B21] pt-3 px-2 mt-2">
          <div className="flex justify-between mb-1">
            <div className="flex gap-x-1">
              <MdAccessTimeFilled fill="#EEEEEE" />
              <h3 className="text-xs text-[#EEEEEE] group-hover:underline group-hover:underline-offset-4">
                {timeRemaining}
              </h3>
            </div>
            <div className="flex gap-x-1">
              <FaEye fill="#EEEEEE" />
              <h3 className="text-xs text-[#EEEEEE] group-hover:underline group-hover:underline-offset-4">
                {price}
              </h3>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="mt-2">
              <span className="block text-xs tracking-wider text-[#EEEEEE]">
                {artistName}
              </span>
              <span className="block tracking-wider text-[#D5F70A]">
                {ethAmount}
              </span>
            </p>
            <div className="flex items-center py-3">
              <Button variant="customcard" className="text-black rounded-3xl">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </a>
    </Atropos>
  );
};

export default NftCard;
