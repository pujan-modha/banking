"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <p className="w-full">
      <CountUp decimal="." prefix="₹" decimals={2} duration={2} end={amount} />
    </p>
  );
};

export default AnimatedCounter;
