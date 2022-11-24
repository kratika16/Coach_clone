import React from 'react'
import Header from '../../Components/Header/index2';
import Footer from '../../Components/footer/index';
import AlertSection from './AlertSection';
import { useSelector } from 'react-redux';
import AlertSection0 from './AlertSection0';
import { Link } from 'react-router-dom';

const AlertPage = () => {
  const {alert}= useSelector((state)=>state.alert);
  return (
    <div>
        <Header/>
        <div className='container mx-auto my-10 min-h-[450px] mx-md:my-16 '>
          <div className=' flex lg:flex-row flex-col lg:mx-20'>
            <div className='lg:w-1/3 w-full px-4 lg:pr-0 lg:pl-24'>
                <div className='grid grid-cols-1 gap-y-0'>
               <Link to='/profile/myaccount?partner_code=CUSA' 
               className='font-bold text-2xl text-endeavour pb-3 pt-4 uppercase cursor-pointer  border-b border-mystic'>
                My Account</Link>

                <Link to='/profile/mytickets?partner_code=CUSA' 
                
               className='font-bold text-2xl text-endeavour pb-3 pt-4 uppercase cursor-pointer  border-b border-mystic'>
              
                My Tickets</Link>
                
                <Link to='/profile/mypaymentmethods?partner_code=CUSA' 
               className='font-bold text-2xl text-endeavour pb-3 pt-4 uppercase cursor-pointer  border-b border-mystic'>
                My Payment Methods</Link>

                <Link to='/profile/myalerts?partner_code=CUSA' 
               className='font-bold text-2xl text-endeavour pb-3 pt-4 uppercase cursor-pointer active:border-b-8  active:border-endeavour  border-b-8 border-endeavour'>
                My Alerts</Link>
                </div>
            </div>
            <div className='lg:w-2/3 w-full px-4 lg:pl-8 lg:pr-32 lg:mt-0 mt-4'>
            {alert.length>0 ? <AlertSection/>:<AlertSection0/>}
            </div>

          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AlertPage