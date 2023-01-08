import Image from "next/legacy/image";
import React from "react";

const LargeCard = ({ img, title, description, buttomText }) => {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-96 w-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl md-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {" "}
          {buttomText}{" "}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
