import React from "react";
import Newwark from "../../assets/images/png/bus3.png";
import Chicago from "../../assets/images/png/bus1.png";
import Mitchell from "../../assets/images/png/bus4.png";
import Toronto from "../../assets/images/png/bus2.png";
import {IoIosArrowForward} from "react-icons/io"

function airportTransport() {
  return (
    <>
      <div className=" mt-0  md:pt-16 mx-md:pt-12 pb-5  bg-boxblue h-80 md:mb-64">
        <div className="container   px-4">
          <div className="flex justify-center text-center mb-10">
            <div className="md:w-3/6">
              <h4 className="text-2xl font-bold mb-2 text-white">
                Airport Transportation
              </h4>
              <div className="text-17 text-white">
                Never miss your flight when you travel with our airport
                transportation services. Our airport shuttles run daily, on a
                set schedule, to ensure a timely departure and arrival.
              </div>
            </div>
          </div>

          <div className="flex flex-nowrap w-full mx-4 overflow-x-auto md:px-8 mx-md:pb-32">
            <div className="px-2 md:w-285 ">
              <div className="shadow-xl rounded-lg bg-white overflow-hidden border-2 border-white mb-6  ">
                <img
                  alt="Newwark Express Bus"
                  src={Newwark}
                  className="w-full"
                />
                <div className="relative overflow-hidden">
                  <h6 className="text-base font-bold mx-4 my-5 uppercase pr-8 h-12">
                    NEWARK LIBERTY INTERNATIONAL{" "}
                  </h6>
                  <button
                    type="button"
                    className="disabled:cursor-default rounded-l-full inline-block bg-gray-100 hover:bg-blue-400 hover:text-white pr-2 py-3 pl-4 absolute top-6 right-0"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </div>

            <div className="px-2 md:w-285">
              <div className="shadow-xl rounded-lg bg-white overflow-hidden border-2 border-white mb-6">
                <img
                  alt="Newwark Express Bus"
                  src={Chicago}
                  className="w-full"
                />
                <div className="relative overflow-hidden">
                  <h6 className="text-base font-bold mx-4 my-5 uppercase pr-8 h-12">
                  CHICAGO O'HARE INTERNATIONAL AIRPORT{" "}
                  </h6>
                  <button
                    type="button"
                    className="disabled:cursor-default rounded-l-full inline-block bg-gray-100 hover:bg-blue-400 hover:text-white pr-2 py-3 pl-4 absolute top-6 right-0"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </div>

            <div className="px-2 md:w-285">
              <div className="shadow-xl rounded-lg bg-white overflow-hidden border-2 border-white mb-6">
                <img
                  alt="Newwark Express Bus"
                  src={Mitchell}
                  className="w-full"
                />
                <div className="relative overflow-hidden">
                  <h6 className="text-base font-bold mx-4 my-5 uppercase pr-8 h-12">
                  MITCHELL INTERNATIONAL AIRPORT{" "}
                  </h6>
                  <button
                    type="button"
                    className="disabled:cursor-default rounded-l-full inline-block bg-gray-100 hover:bg-blue-400 hover:text-white pr-2 py-3 pl-4 absolute top-6 right-0"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </div>

            <div className="px-2 md:w-285">
              <div className="shadow-xl rounded-lg bg-white overflow-hidden border-2 border-white mb-6">
                <img
                  alt="Newwark Express Bus"
                  src={Toronto}
                  className="w-full"
                />
                <div className="relative overflow-hidden">
                  <h6 className="text-base font-bold mx-4 my-5 uppercase pr-8 h-12">
                  TORONTO PEARSON AIRPORT{" "}
                  </h6>
                  <button
                    type="button"
                    className="disabled:cursor-default rounded-l-full inline-block bg-gray-100 hover:bg-blue-400 hover:text-white pr-2 py-3 pl-4 absolute top-6 right-0"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div> 
      </div>
    </>
  );
}

export default airportTransport;
