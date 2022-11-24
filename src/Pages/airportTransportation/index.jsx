import React from "react";
import ShuttleServe from "./shuttleServe";
import Booking from "./booking";
import Header from  '../../Components/Header/index2';
import Footer from '../../Components/footer/index';
import ShuttleBuses from'./shuttleBuses';
import Queries from "../../Components/Queries";

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
