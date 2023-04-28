import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <>
      <div className="px-3 pt-80 lg:pl-24">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold italic">
          SHAPE YOUR PERFECT BODY
        </h1>
        <p className="py-3 text-md italic font-semibold pt-4">
          A small river named Duden flows by their place and supplies it with{" "}
          <br className="" />
          the necessary regelialia.
        </p>
        <div className="pt-3">
          <button className="px-7 lg:px-10 bg-red-700 py-4 rounded-md flex items-center justify-around gap-x-2">
            <span>Take a Tour</span>{" "}
            <BsArrowRight size={20} className="text-3xl font-bold" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
