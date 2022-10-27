import React from "react";
import ShuttlePart1 from "../../components/shuttleBusesPart/ShuttlePart1";
import ShuttlePart2 from "../../components/shuttleBusesPart/ShuttlePart2";
import ShuttlePart3 from "../../components/shuttleBusesPart/ShuttlePart3";
import ShuttlePart4 from "../../components/shuttleBusesPart/ShuttlePart4";

const shuttleprat = () => {
  return (
    <div className="container  mx-md:mt-12 mx-md:mb-10 mx-md:p-0 mx-lg:px-4 lg:px-20 mx-2xl:px-20 2xl:px-48">
      <h1 className="text-center text-3xl md:ml-10 font-semibold mb-4  text-gray-900">
        Our Airport Shuttle Buses
      </h1>
      <div className="flex flex-col md:pt-8">
        <ShuttlePart1 />
        <ShuttlePart2 />
        <ShuttlePart3 />
        <ShuttlePart4 />
      </div>
    </div>
  );
};

export default shuttleprat;
