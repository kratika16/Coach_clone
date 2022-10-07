import React from "react";
import HomeBanner from "../../assets/images/jpg/home-banner.jpg";
import BusBooking from "../../components/bookingsection/BusBooking";

const Booking = () => {
  return (
    <>
      <div
        className="flex bg-no-repeat bg-bottom items-center h-fit-screen mx-md:bg-none pb-44 "
        style={{ backgroundImage: `url(${HomeBanner})` }}
      >
        <div className="px-4 w-full">
          <h1 className="uppercase text-center text-[38px] font-semibold mt-4 md:mt-11 mx-md:hidden text-slate-800">
            Where can we take you today?
          </h1>
          <div className="flex flex-col">
            <div className="text-center text-base font-semibold my-6 px-5 mt-2 pb-7">
              Coach USA provides Commuter Services, Airport Transportation,
              Charter Bus Rentals, Tours, Contract Services, and more.
            </div>
          </div>
          <BusBooking/>
        </div>
      </div>
    </>
  );
};

export default Booking;
