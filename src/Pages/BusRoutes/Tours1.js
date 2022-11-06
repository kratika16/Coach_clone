import React from "react";
import BusTours from "../../assets/images/tours.jpeg";
import Charter from "../../assets/images/charter-bus.jpeg";

function Tours1() {
  return (
    <>
      <div className="container mx-auto my-10 px-16 mx-lg:px-4 mx-2xl:px-14  ">
        <div className="md:flex ">
          <div className="w-1/3  mx-md:w-full">
            <div className="overflow-hidden rounded-md -mb-2">
              <img
                alt="Bus Tours"
                src={BusTours}
                className="w-full object-cover md:h-[350px]"
              />
            </div>
            <div className="bg-offwhite border border-t-0 border-gray-300 p-4 rounded-bl-md rounded-br-md ">
              <div className="flex mb-2 pt-3">
                <div className="w-3/5 ">
                  <h4 className="text-2xl font-bold">Bus Tours</h4>
                </div>
                <div className="w-2/5 text-right ">
                  <button
                    type="button"
                    className="disabled:cursor-default rounded-full bg-linkblue hover:bg-linkblue text-white py-1 px-5"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="text-base">
                Whether you're looking for a one-day tour or a multi-day bus
                trip, we've got you covered with casino trips, restaurant and
                theater trips, sporting events and more.
              </div>
            </div>
          </div>

          <div className="w-2/3 mx-md:w-full md:ml-2">
            <div className="overflow-hidden rounded-md -mb-2">
              <img
                alt="Charter Bus Rentals"
                src={Charter}
                className="w-full object-cover md:h-[350px]"
              />
            </div>
            <div className="bg-offwhite border border-t-0 border-gray-300 p-4 rounded-bl-md rounded-br-md mx-lg:h-[250px]">
              <div className="flex mb-2 pt-3">
                <div className="w-3/5">
                  <h4 className="text-2xl font-bold ">Charter Bus Rentals</h4>
                </div>
                <div className="w-2/5 text-right">
                  <button
                    type="button"
                    className="disabled:cursor-default rounded-full bg-linkblue hover:bg-linkblue text-white py-1 px-8 "
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="text-base md:pb-24 mx-xl:pb-[12%] mx-2xl:pb-[6.5%] mx-3xl:pb-[2.5%] ">
                Reserve one of our charter buses for your next group trip. We're
                happy to help you rent a bus for school trips, sports teams,
                weddings, senior citizen getaways, corporate events and more!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tours1;
