import React from "react";
import Background from "../../assets/images/airport-background.png"
import BusBooking from "../../components/bookingsection/BusBooking";

const Booking = () => {
  return (
    <>
      <div
        className="flex bg-no-repeat bg-bottom items-center h-fit-screen mx-md:bg-none flex-col pb-44"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="px-4 w-full">
          <h1 className="uppercase text-center text-[38px] font-semibold mt-4 md:mt-11 mx-md:hidden text-slate-800">
          AIRPORT TRANSPORTATION SERVICES
          </h1>
          <div className="flex flex-col">
            <div className="text-center text-[15px] font-semibold my-6 px-4 mt-2 pb-7">
            Never miss your flight when you travel with our airport transportation services. Our airport shuttles run daily, on a set schedule, to ensure a timely departure and arrival.
            </div>
          </div>
          <BusBooking/>
        </div>
      </div>
     
    </>
  );
};

export default Booking;
