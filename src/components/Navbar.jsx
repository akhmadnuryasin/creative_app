import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full bg-transparent text-white h-[15vh]">
      <p className="text-2xl">
        Creative
        <span className="text-[#D5F70A]">NFT</span>
      </p>
      <ul className="relative hidden md:flex gap-x-7">
        <li>Home</li>
        <li>About</li>
        <li>Collections</li>
        <li>Contacts</li>
      </ul>
      <Button className="block md:hidden">Nav</Button>
    </div>
  );
};

export default Navbar;
