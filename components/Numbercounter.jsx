import React from "react";
import Features from "./Features";

const Numbercounter = () => {
  return (
    <>
      <div className="px-6">
        <div className="flex gap-y-10 items-center flex-wrap flex-col lg:flex-row text-center justify-around bg-blue-300  py-12 rounded-lg">
          <div className="gap-x-3 gap-y-2">
            <h2 className=" font-semibold text-4xl">3+</h2>
            <p className="text-1xl uppercase py-3  font-semibold">
              Year of experinced
            </p>
          </div>
          <div>
            <h2 className=" font-semibold text-4xl">10+</h2>
            <p className="text-1xl uppercase py-3  font-semibold">
              fiteness trainer
            </p>
          </div>
          <div>
            <h2 className=" font-semibold text-4xl">550+</h2>
            <p className="text-1xl uppercase py-3  font-semibold">
              best equipments
            </p>
          </div>
          <div>
            <h2 className=" font-semibold text-4xl">1k+</h2>
            <p className="text-1xl uppercase py-3 font-semibold ">
              satisfied clients
            </p>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Numbercounter;
// className='bg-red-400 py-1 px-1 rounded'
