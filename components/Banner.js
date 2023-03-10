import Image from "next/legacy/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="bg-white rounded-full text-purple-500 font-bold py-2 px-4 md:py-4 md:px-8 my-3 shadow-md hover:shadow-xl active:scale-90  transition duration-150 text-xs">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
