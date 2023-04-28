import React from "react";
import { BsArrowRight } from "react-icons/bs";
const PricingCard = ({ cost, title }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center text-justify  w-full ">
        <div className="bg-gray-600/10 py-16  rounded-md hover:shadow-[3rem] px-20">
          <div className="text-center">
            <div class="ml-5">
              <span class="block text-2xl font-semibold text-red-600">
                {title}
              </span>
              <span>
                <span class="font-medium text-gray-500 text-xl align-top py-2">
                  $&thinsp;
                </span>
                <span class="text-4xl font-bold py-2">{cost} </span>
              </span>
            </div>
          </div>
          <ul className="flex flex-col items-center py-3 justify-around gap-y-4 text-justify">
            <li className="flex items-center ">
              <BsArrowRight /> <span className="px-3">Personal Trainer</span>
            </li>
            <li className="flex items-center ">
              <BsArrowRight /> <span className="px-3">Convienient Time</span>
            </li>
            <li className="flex items-center ">
              <BsArrowRight /> <span className="px-3">Special Class</span>
            </li>
            <li className="flex items-center ">
              <BsArrowRight /> <span className="px-3">Group Training</span>
            </li>
            <li className="flex items-center ">
              <BsArrowRight /> <span className="px-3">Personal Trainer</span>
            </li>
          </ul>
          <div className="pt-8">
            <button className="py-4 px-7 text-center bg-red-600 rounded-md font-semibold text-white hover:bg-blue-300">
              Get Stated
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
