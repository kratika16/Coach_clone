import React from 'react'
import Header from '../../../Components/Header/index';
import BookingSection from './Booking';
//import Footer from '../../components/footer/index';
import AirportTransport from '../../BusRoutes/AirportTransport';
import Tours1 from '../../BusRoutes/Tours1';
import Tours2 from '../../BusRoutes/Tours2';
import Footer from '../../../Components/footer/index'
import Queries from '../../../Components/Queries';
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