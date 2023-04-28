import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div>
      <>
        <div className="text-center py-10">
          <p className="uppercase text-md text-red-500 font-semibold">
            our pricing
          </p>
          <h2 className="uppercase text-3xl font-bold italic py-5">
            pricing & <span className="text-red-600">Packages</span>
          </h2>
        </div>
        <div className="px-6 flex items-center justify-between flex-col gap-y-4 lg:flex-row gap-x-1">
        <PricingCard cost="49" title="Basic Plan" />
        <PricingCard cost="79" title="Beginner Plan" />
        <PricingCard cost="109" title="Premium Plan" />
        <PricingCard cost="149" title="Ultimate Plan" />
        </div>
      </>
    </div>
  );
};

export default Pricing;
