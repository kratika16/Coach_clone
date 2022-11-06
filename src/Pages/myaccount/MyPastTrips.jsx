import React from 'react'
import Header from '../../components/header/index2';
import Footer from '../../components/footer/index';
import PastTrips from './PastTrips';

const MyTrips = () => {
  return (
    <div>
        <Header/>
        <div className='container mx-auto my-10 min-h-[450px] mx-md:my-16 '>
          <div className=' flex lg:flex-row flex-col lg:mx-20'>
            <div className='lg:w-1/3 w-full px-4 lg:pr-0 lg:pl-24'>
                <div className='grid grid-cols-1 gap-y-0'>
               <a href='/profile/myaccount?partner_code=CUSA' 
               className='font-bold text-2xl text-endeavour pb-3 pt-4 uppercase cursor-pointer  border-b border-mystic'>
                My Account</a>

                <a href='/profile/mytickets?partner_code=CUSA' 
               className='font-bold text-2xl text-endeavour pb-3 pt-4 uppercase cursor-pointer  border-b-8 border-endeavour'>
                My Tickets</a>
                
                <a href='/profile/mypaymentmethods?partner_code=CUSA' 
               className='font-bold text-2xl text-endeavour pb-3 pt-4 uppercase cursor-pointer  border-b border-mystic'>
                My Payment Methods</a>

                <a href='/profile/myalerts?partner_code=CUSA' 
               className='font-bold text-2xl text-endeavour pb-3 pt-4 uppercase cursor-pointer  border-b border-mystic'>
                My Alerts</a>
                </div>
            </div>
            <div className='lg:w-2/3 w-full px-4 lg:pl-8 lg:pr-24 mt-8 '>
              <PastTrips/>
            </div>

          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MyTrips