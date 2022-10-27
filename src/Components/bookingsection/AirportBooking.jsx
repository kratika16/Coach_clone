import React from "react";
import Search from "../../assets/images/svg/search.svg";
import DestinationInputBox from "./DestinationInputBox";
import OriginInputbox from "./OriginInputbox";
import Ticketicon from "../../assets/images/svg/wcc_ticket_icon.svg";
import AirplaneWht from '../../assets/images/svg/airplane-white.svg';
const BusBooking = () => {
  return (
    <div className="container border-alto rounded-xl shadow-xl bg-boxblue md:w-88 mx-md:w-[98%]">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center ">
        <div className="md:col-span-2">
          <div className="flex h-14 mx-md:h-full mx-md:pr-8 mx-md:py-2  border-0 px-5 items-center text-base md:text-xl text-white rounded-tl-xl rounded-tr-xl ">
            <img alt="airplane" src={ AirplaneWht} className="text-30" />
            <p className="ml-2">
              Book Bus Tickets - Travel for Commuter and Airport Routes
            </p>
          </div>
        </div>
        <div className="md:ml-auto md:mr-6">
          <div className="flex ml-1.7 font-bold text-white text-xs items-center flex-row">
            <a
              className="text-sm underline"
              href="/service-advisories?partner_code=CUSA"
            >
              Service Advisories
            </a>
          </div>
        </div>
      </div>
      <div className="pb-6 pt-2 ">
        <div className=" flex flex-col md:flex-row">
          <div className=" md:mr-1 md:ml-6 md:w-45 box-border flex-wrap mx-md:px-4 mx-md:py-2">
            <OriginInputbox/>
          </div>
          <div className=" md:w-45 box-border flex-wrap mx-md:px-4 mx-md:py-2">
            <DestinationInputBox/>
          </div>
          <div className="mx-md:px-4 mx-md:py-2">
          <div className="flex  h-[75px]  rounded justify-center items-center bg-orange text-white mx-md:px-4 mx-md:h-14 md:mr-4">
            <button>
              <div className="flex flex-row">
              <img alt="search" src={Search} className= "md:w-16 mx-md:w-5 md:h-10 "/>
              <span className="md:hidden flex font-bold text-base uppercase ml-[9px]">
                  Search
                </span>
                </div>
            </button>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BusBooking;
