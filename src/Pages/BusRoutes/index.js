import React from 'react'
import Header from '../../components/header/index';
import BookingSection from './BookingSection';
import Footer from '../../components/footer/index';
import AirportTransport from './AirportTransport';
import Tours1 from './Tours1';
import Tours2 from './Tours2';
const Index = () => {
  return (
    <div>
        <Header/>
        <BookingSection/>
        <AirportTransport/>
        <Tours1/>
        <Tours2/>
         <Footer/>
    </div>
  )
}

export default Index