import React from "react";
import BusTours from "../../assets/images/tours.jpeg";
import Charter from "../../assets/images/charter-bus.jpeg";

function Tours1() {
  return (
    <>
      <div className="container mx-auto my-10 ">
        <div className="md:flex">
          <div className="w-1/3 md:pr-3 mx-md:w-full">
            <div className="overflow-hidden md:h-[395px] rounded-md -mb-2">
              <img
                alt="Bus Tours"
                src={BusTours}
                className="w-full md:h-[395px] object-cover"
              />
            </div>
            <div className="bg-[#f5f5f5] border border-t-0 border-gray-300 p-4 rounded-bl-md rounded-br-md md:min-h-[260px] lg:min-h-[205px] xl:min-h-[180px]">
              <div className="flex mb-2 pt-3">
                <div className="w-3/5 mx-md:w-full">
                  <h4 className="text-2xl font-bold">Bus Tours</h4>
                </div>
                <div className="w-2/5 mx-md:hidden text-right">
                  <button
                    type="button"
                    className="disabled:cursor-default rounded-full bg-[#009ff7] hover:bg-[#009ff7] text-white py-1 px-5"
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

          <div className="w-2/3 md:pr-3 mx-md:w-full">
            <div className="overflow-hidden md:h-[395px] rounded-md -mb-2">
              <img
                alt="Charter Bus Rentals"
                src={Charter}
                className="w-full md:h-[395px] object-cover"
              />
            </div>
            <div className="bg-[#f5f5f5] border border-t-0 border-gray-300 p-4 rounded-bl-md rounded-br-md md:min-h-[260px] lg:min-h-[205px] xl:min-h-[180px]">
              <div className="flex mb-2 pt-3">
                <div className="w-3/5 mx-md:w-full">
                  <h4 className="text-2xl font-bold">Charter Bus Rentals</h4>
                </div>
                <div className="w-2/5 mx-md:hidden text-right">
                  <button
                    type="button"
                    className="disabled:cursor-default rounded-full bg-[#009ff7] hover:bg-[#009ff7] text-white py-1 px-5"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="text-base h-[145px]">
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
