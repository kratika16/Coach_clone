import React from "react";
import BusBooking from "../../components/bookingsection/BusBooking";
import AirportBooking from '../../components/bookingsection/AirportBooking';
import Bookingcard from "../../components/bookingsection/bookingcards/Bookingcard";
const Booking = () => {
  return (
    <>
     <div className="flex bg-airport bg-bottom bg-cover md:h-[88vh] mx-md:h-[105vh]  ">
        <div className="px-4 w-full mx-md:pt-20 ">
          <h1 className="uppercase text-center text-38 font-semibold text-slate-800 mt-8 mx-md:hidden">
          AIRPORT TRANSPORTATION SERVICES
          </h1>
          <div className="flex flex-col text-center text-base font-semibold">
          Never miss your flight when you travel with our airport transportation services. Our airport shuttles run daily, on a set schedule, to ensure a timely departure and arrival.
          </div>
          <div className="pt-14 ">
          <AirportBooking/>
          <Bookingcard/>
          </div>
        </div>
      </div>

    </>
  );
};

export default Booking;
