import React from 'react'
import Header from '../../../components/header/index';
import BookingSection from './Booking';
//import Footer from '../../components/footer/index';
import AirportTransport from '../../busRoutes/AirportTransport';
import Tours1 from '../../busRoutes/Tours1';
import Tours2 from '../../busRoutes/Tours2';
import Footer from '../../../components/footer/index'
import Queries from '../../../components/Queries';
const Index = () => {
  return (
    <div>
        <Header/>
        <BookingSection/>
        <AirportTransport/>
         <Tours1/>
        <Tours2/> 
         <Footer/>
         <Queries/> 
    </div>
  )
}

export default Index