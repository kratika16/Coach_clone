import React from "react";
import Locationicon from "../../../assets/images/png/location.png";
import Dot from "../../../assets/images/png/dot.png";
import Dottedline from "../../../assets/images/png/dottedline.png";
const Card1 = () => {
  return (
    <>
      <div className=" flex flex-row">
        <div className="w-[75%] flex flex-row px-2.5 pt-1.5 pb-2.5">
          <div className="flex flex-col ">
            <div className="flex flex-row">
              <img alt="dot" src={Dot} className="h-[14px] pt-0.5 pr-2" />
              <h4 className="text-[12px] font-semibold">New York, NY</h4>
            </div>
            {/* <div>
            <img alt='dots' src={Dottedline} classname='h-[2px] w-[2px]'/>
            </div> */}
            <div className="flex flex-row">
              <img
                alt="location"
                src={Locationicon}
                className="h-[15px] pt-0.5 pr-1 text-rose-600"
              />
              <h4 className="text-[12px] font-semibold pl-1">
                Newark Liberty International Airport, NJ
              </h4>
            </div>
            <div className="flex flex-row mt-1">
              <h4 className="uppercase text-[12px] text-bold bg-slate-100 rounded-sm pl-2 ">
                one way, special needs
              </h4>
              <h4 className="italic text-xs text-red pl-2">
                01 Trips Remaining
              </h4>
            </div>
            <div className="text-[12px] pt-2">Valid through 10/17/2023</div>
          </div>
        </div>
        <div className="w-[25%]">
        <div className=" flex flex-col px-2.5 lg:px-2 pt-6 pb-2.5">
          <button className="border border-sky-500 h-6 rounded-full text-xs  text-sky-500 ">
            View Ticket
          </button>
          <button className="border rounded-full text-white text-xs  bg-sky-500 mt-8 h-6">
            Buy Again
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
