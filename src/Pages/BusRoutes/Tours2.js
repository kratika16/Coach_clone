import React from "react";
import Casino from "../../assets/images/casino.jpeg";
import College from "../../assets/images/college.jpeg";

function tours2() {
  return (
    <>
      <div className="container mx-auto my-10 px-14 mx-lg:px-4 mx-2xl:px-14  ">
        <div className="md:flex">
          <div className="w-1/2 mx-md:w-full md:mr-2">
            <div className="overflow-hidden md:h-395 rounded-md -mb-2">
              <img
                alt="Bus Tours"
                src={Casino}
                className="w-full md:h-[400px] object-cover"
              />
            </div>
            <div className="bg-offwhite border border-t-0 border-gray-300 p-4 rounded-bl-md rounded-br-md ">
              <div className="flex mb-2 pt-3">
                <div className="w-3/5 mx-md:w-full">
                  <h4 className="text-2xl font-bold">Casino Tours</h4>
                </div>
                <div className="w-2/5  text-right">
                  <button
                    type="button"
                    className="disabled:cursor-default rounded-full bg-linkblue hover:bg-linkblue text-white py-1 px-5"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="text-base mx-lg:pb-[10%] mx-xl:pb-[8%]">
                Feeling lucky today? Why not hop on a bus to play some games of
                chance on one of our casino bus tours!
              </div>
            </div>
          </div>

          <div className="w-1/2 mx-md:w-full">
            <div className="overflow-hidden md:h-395 rounded-md -mb-2">
              <img
                alt="Charter Bus Rentals"
                src={College}
                className="w-full md:h-395 object-cover"
              />
            </div>
            <div className="bg-offwhite border border-t-0 border-gray-300 p-4 rounded-bl-md rounded-br-md">
              <div className="flex mb-2 pt-3">
                <div className="w-3/5 mx-md:w-full">
                  <h4 className="text-2xl font-bold">College Transportation</h4>
                </div>
                <div className="w-2/5 text-right">
                  <button
                    type="button"
                    className="disabled:cursor-default rounded-full bg-linkblue hover:bg-linkblue text-white py-1 px-5"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="text-base">
                We know that college students need a reliable way to get to and
                from campus and Coach USA is here for you!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default tours2;
