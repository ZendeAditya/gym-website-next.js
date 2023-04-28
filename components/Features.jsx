import React from "react";
import Fitness from "../public/001-fitness.svg";
import Treadmill from "../public/002-treadmill.svg";
import Card from "../public/003-vip-card.svg";
import Image from "next/image";
const Features = () => {
  return (
    <>
      <section className="px-10 py-9">
        <div className="text-center py-10">
          <p className="uppercase text-md text-red-500 font-semibold">
            join us now
          </p>
          <h2 className="uppercase text-3xl font-bold italic pb-5">
            JOIN US OUR FREE WORKOUT <br /> TRAINING WITH{" "}
            <span className="text-red-600">PULSEGYM</span>
          </h2>
        </div>
        <div className="flex  flex-col lg:flex-row gap-x-5 lg:divide-x">
          <div className="flex flex-col items-center justify-between container mx-auto">
            <Image src={Fitness} alt="Fiteness Image" width={100} />
            <h2 className="py-3 font-bold text-3xl text-center italic">
              FREE FITNESS TRAINING
            </h2>
            <span className="opacity-50 px-9   text-justify">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </span>
          </div>
          <div className="flex flex-col items-center justify-between container mx-auto">
            <Image src={Treadmill} alt="Treadmill svg image" width={100} />
            <h2 className="py-3 font-bold text-3xl italic text-center">
              TONS OF CARDIO & STRENGTH
            </h2>
            <span className="opacity-50 px-9 text-justify">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </span>
          </div>
          <div className="flex flex-col items-center justify-between container mx-auto">
            <Image src={Card} alt="card svg image" width={100} />
            <h2 className="py-3 font-bold text-3xl text-center italic">
              NO COMMENTMENT MEMBERSHIPS
            </h2>
            <span className="opacity-50 px-9 text-justify">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
