import React from "react";

const MoreInfo = () => {
  return (
    <>
      <section className="bg-gray-400/10 w-full h-[39rem] lg:px-10 divide-y-2 text-center px-4 pt-12 mt-14 rounded-md py-10">
        <div className="flex  lg:py-10 justify-between h-full flex-col lg:flex-row gap-y-7 px-7 items-center ">
          <div className="">
            <h2 className="uppercase text-2xl italic font-bold py-4 text-red-500">Thousands of equipments</h2>
            <span className=" text-lg py-5 italic">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </span>
          </div>
          <div>
            <h2  className="uppercase text-2xl italic font-bold py-4 text-red-500">open 24/7 pulsegym fitness</h2>
            <span className=" text-lg py-5 italic">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </span>
          </div>
          <div>
            <h2 className="uppercase text-2xl italic font-bold py-4 text-red-500">food supplements</h2>
            <span className=" text-lg py-5 italic">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreInfo;
