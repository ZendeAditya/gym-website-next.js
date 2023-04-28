import React from "react";
import Image from "next/image";
import bodybuilding from "../public/Classes/bodybuilding.webp";
import Class2 from "../public/Classes/classes-2.webp";
import Class3 from "../public/Classes/classes-3.webp";
const Gymclasses = () => {
  return (
    <>
      <div className="text-center py-8">
        <p className="uppercase text-md text-red-500 font-semibold">
          join us now
        </p>
      </div>
      <h1 className="uppercase text-3xl font-bold italic pb-5 text-center py-3">
        <span className="text-red-600">PULSEGYM</span> workout classes
      </h1>
      <div className="container mx-auto flex items-center justify-around gap-x-5 flex-col gap-y-5 lg:flex-row px-10">
        <div className="relative">
          <Image
            src={bodybuilding}
            alt="body builder women"
            className="w-full border-red-500 rounded-md hover: cursor-pointer"
          />
          <div class="opacity-0 hover:opacity-100 duration-500 absolute inset-0 z-10 flex justify-center items-end text-6xl text-white font-semibold pb-0   ">
            <span
              className="text-4xl text-red-500 italic bg-black/100 w-full text-center
        font-bold space-x-1 uppercase py-2 "
            >
              Body Building
            </span>
          </div>
        </div>
        <div className="relative">
          <Image
            src={Class2}
            alt="body builder women"
            className="w-full border-red-500 rounded-md hover: cursor-pointer"
          />
          <div class="opacity-0 hover:opacity-100 duration-500 absolute inset-0 z-10 flex justify-center items-end text-6xl text-white font-semibold pb-0   ">
            <span
              className="text-4xl text-red-500 italic bg-black/100 w-full text-center
        font-bold space-x-1 uppercase py-2 "
            >
              weight lifting
            </span>
          </div>
        </div>
        <div className="relative">
          <Image
            src={Class3}
            alt="body builder women"
            className="w-full border-red-500 rounded-md hover: cursor-pointer"
          />
          <div class="opacity-0 hover:opacity-100 duration-500 absolute inset-0 z-10 flex justify-center items-end text-6xl text-white font-semibold pb-0   ">
            <span
              className="text-4xl text-red-500 italic bg-black/100 w-full text-center
        font-bold space-x-1 uppercase py-2 "
            >
              {" "}
              cardio
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gymclasses;
