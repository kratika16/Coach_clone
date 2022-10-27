import React from "react";
import Bookingcard from "../../components/bookingsection/bookingcards/Bookingcard";
import BusBooking from "../../components/bookingsection/BusBooking";

const Booking = () => {
  return (
    <>
      <div className="flex bg-homebanner bg-bottom bg-cover md:h-[88vh] mx-md:h-[105vh]">
        <div className="px-4 w-full mx-md:pt-20 ">
          <h1 className="uppercase text-center text-38 font-semibold text-slate-800 mt-8 mx-md:hidden">
            Where can we take you today?
          </h1>
          <div className="flex flex-col text-center text-base font-semibold">
            Coach USA provides Commuter Services, Airport Transportation,
            Charter Bus Rentals, Tours, Contract Services, and more.
          </div>
          <div className="pt-14">
          <BusBooking/>
          <Bookingcard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
