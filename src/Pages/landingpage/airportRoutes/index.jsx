import React from "react";
import ShuttleServe from "../../airportTransportation/shuttleServe";
import Booking from "./Booking";
import Header from  '../../../Components/Header/index';
import Footer from '../../../Components/footer/index';
import ShuttleBuses from'../../airportTransportation/shuttleBuses';
import Queries from "../../../Components/Queries";

function index() {
  return (
    <>
      <Header/>
      <Booking />
      <ShuttleServe />
      <ShuttleBuses/> 
       <Footer/>
       <Queries/>
    </>
  );
}

export default index;
