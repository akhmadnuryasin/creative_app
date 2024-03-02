import React from "react";
import { Data } from "@/utils/Data";
import NftCard from "@/components/NftCard";

const Colection = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-12 mx-auto sm:px-6 lg:px-8">
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
