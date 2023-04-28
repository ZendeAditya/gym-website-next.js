import React from "react";
import Image from "next/image";
import GymModel from "../public/about.png";
import { BsArrowRight } from "react-icons/bs";
const About = () => {
  return (
    <>
      <div className="flex items-center pt-6 gap-x-6 lg:container  lg:mx-auto flex-col lg:flex-row justify-around pb-16 lg:px-24 px-4 py-3">
        <div className="container lg:order-first order-first">
          <Image src={GymModel} alt="DiscordImg" />
        </div>
        <div className="lg:container    lg:pl-20  lg:order-last order-first">
          <p className="text-red-700">INFORMATION ABOUT US</p>
          <h2 className="text-4xl uppercase py-4  font-bold pt-3 italic">
            PulseGym A <span className="text-red-700">CROSSFIT</span> WORKOUT{" "}
            <br />
            TRAINING CENTER
          </h2>
          <span className="pt-10 font-semibold opacity-40 italic lg:order-last order-first">
            PulseGym is a high-energy fitness center thats perfect for those who
            love to sweat and feel the burn. Our experienced trainers will help
            you reach your fitness goals and push your limits, whether you are a
            beginner or a seasoned athlete.
          </span>
          <div className="pt-7 ">
            <span className="flex items-center gap-x-4 pt-2">
              <BsArrowRight className="text-red-600 ml-2" />{" "}
              <h4 className="font-semibold"> MEN FITNESS AND WORKOUT</h4>
            </span>
            <span className="flex items-center gap-x-4 pt-2">
              <BsArrowRight className="text-red-600 ml-2" />{" "}
              <h4 className="font-semibold"> WOMEN FITNESS AND WORKOUT</h4>
            </span>
            <span className="flex items-center gap-x-4 pt-2">
              <BsArrowRight className="text-red-600 ml-2" />{" "}
              <h4 className="font-semibold"> PERSONAL TRAININGS</h4>
            </span>
          </div>
          <div className="py-9 pr-4">
          <button className="px-7  lg:px-10 bg-red-700 py-4 rounded-md flex items-center justify-around gap-x-2">
            <span>Read More</span>{" "}
            <BsArrowRight size={20} className="text-3xl font-bold" />
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
