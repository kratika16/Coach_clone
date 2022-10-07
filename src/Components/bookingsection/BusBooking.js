import React from "react";

import { ReactComponent as Search } from "../../assets/images/svg/search.svg";
import DestinationInputBox from "./DestinationInputBox";
import OriginInputbox from "./OriginInputbox";
import { GiCommercialAirplane } from "react-icons/gi";
const BusBooking = () => {
  return (
    <div>
      <div className="container mx-auto border-alto rounded-xl shadow-xl bg-[#0062a9] max-w-[88%] pb-4 WCC:bg-regal-blue-500">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          <div className="md:col-span-2">
            <div className="flex h-14 mx-md:h-full mx-md:pr-8 mx-md:py-2 relative border-0 px-5 items-center text-base md:text-xl text-white rounded-tl-xl rounded-tr-xl WCC:bg-regal-blue font-normal">
              <GiCommercialAirplane className="text- [30px]" />
              <p className="ml-2">Book Bus Tickets - Travel for Commuter and Airport Routes</p>
            </div>
          </div>
          <div className="md:ml-auto md:mr-6">
            <div className="flex ml-[1.7rem] font-bold text-white text-xs items-center flex-row">
              <span></span>
              <a
                className="text-sm underline"
                href="/service-advisories?partner_code=CUSA"
              >
                Service Advisories
              </a>
            </div>
          </div>
        </div>
        <div className="flex mx-md:p-4 px-6 pt-2 pb-3 rounded-b-xl flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:mr-4 mb-4 md:mb-0 md:w-[45%]">
              <div className="text-lg font-bold absolute pin-r pin-t ml-3 pt-2 text-cyan-600 WCC:text-regal-blue-500 z-10 md:mb-0">
                Origin
              </div>
              <div className="pt-1 box-border">
                <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions-text"
                  className="h-1 w-4  hidden"
                ></span>
                <div className="items-center rounded  border border-solid bg-white box-border">
                  <div className="flex items-center py-1 px-1 flex-wrap w-[480px]">
                    <OriginInputbox />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative md:mr-4 mb-4 md:mb-0 md:w-[45%]">
              <div className="text-lg font-bold absolute pin-r pin-t ml-3 pt-2 text-cyan-600 WCC:text-regal-blue-500 z-10 md:mb-0">
                Destination
              </div>
              <div className="relative box-border pt-1">
                <span
                  aria-live="polite"
                  aria-atomic=" false"
                  aria-relevant="additions-text"
                  className="z-auto border h-1 w-1 absolute hidden p-0"
                ></span>
                <div className="items-center bg-sky-100 border-cyan-100 rounded border-solid border">
                  <div className="flex items-center py-1 px-1 flex-wrap w-[480px]">
                    <DestinationInputBox/>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[6%]">
              <button className="flex relative justify-center items-center bg-orange-500 text-white w-[95%] h-[75px] mt-[3px] mx-md:h-12  rounded flex-row">
                <Search className=" w-6 h-3 md:w-10 md:h-10" />
                <span className="md:hidden font-bold text-base uppercase ml-[9px]">
                  Search
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusBooking;
