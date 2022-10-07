import React from "react";
import ShuttleServe from "./shuttleServe";
import ShuttleBuses from "./shuttleBuses";
import Booking from "./booking";
import Header from  '../../components/header/index';
import Footer from  '../../components/footer/index';
function index() {
  return (
    <>
      <Header/>
      <Booking />
      <ShuttleServe />
      <ShuttleBuses />
      <Footer/>
    </>
  );
}

export default index;
