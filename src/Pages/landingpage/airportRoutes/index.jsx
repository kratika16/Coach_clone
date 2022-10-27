import React from "react";
import ShuttleServe from "../../airportTransportation/shuttleServe";
import Booking from "./Booking";
import Header from  '../../../components/header/index';
import Footer from '../../../components/footer/index';
import ShuttleBuses from'../../airportTransportation/shuttleBuses';
import Queries from "../../../components/Queries";

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
