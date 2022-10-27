import React from "react";
import ShuttleServe from "./shuttleServe";
import Booking from "./booking";
import Header from  '../../components/header/index2';
import Footer from '../../components/footer/index';
import ShuttleBuses from'./shuttleBuses';
import Queries from "../../components/Queries";

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
