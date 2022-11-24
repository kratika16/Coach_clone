import React from 'react'
import Forgetform from './forgetfrom';
import Header from '../../../Components/Header/index';
import Footer from '../../../Components/footer/index';
const Forgetpassword = () => {
  return (
    <>
    <Header/>
    <div className='hidden lg:block'>
    <div className='flex lg:flex-row flex-col'>
        <div className='bg-loginpageimage lg:h-full bg-cover w-[40%] bg-bottom text-white'>
          <div className='uppercase text-left items-center font-bold text-4xl px-36 py-12 mx-lg:hidden block'>Welcome
           To 
           coach USA
          </div>
          <fieldset className='border-4 border-white lg:mb-16 lg:ml-36 lg:mr-8 lg:mt-36 mx-lg:mt-24'>
               <legend className='text-white bg-transparent mx-2 px-2 font-bold text-3xl'>Account Benefits</legend>
               <div className='text-white  my-4 font-normal ml-4'>
                 <li>Access your tickets quickly</li>
                 <li>Retrieve past travel receipts</li>
                 <li>Reboot your tickets with "My Ticket" <br></br> &nbsp; &nbsp; &nbsp;Quickbook option!</li>
               </div>
          </fieldset>

        </div>
        <div className='w-[60%] '>
           <Forgetform/> 
        </div>
    </div>
    </div>
    <div className='lg:hidden block'>
    <div className='flex lg:flex-row flex-col'>
        
        <div className='lg:w-[60%] '>
           <Forgetform/> 
        </div>
        <div className='bg-loginpageimage md:h-[100vh] bg-cover lg:w-[40%] w-full bg-bottom text-white'>
          <div className='uppercase text-left items-center font-bold text-4xl px-36 py-12 mx-lg:hidden block'>Welcome
           To 
           coach USA
          </div>
          <fieldset className='border-4 border-white lg:mb-16 lg:ml-36 lg:mr-8 lg:mt-36 mx-lg:mt-24'>
               <legend className='text-white bg-transparent mx-2 px-2 font-bold text-3xl'>Account Benefits</legend>
               <div className='text-white  my-4 font-normal ml-4'>
                 <li>Access your tickets quickly</li>
                 <li>Retrieve past travel receipts</li>
                 <li>Reboot your tickets with "My Ticket" <br></br> &nbsp; &nbsp; &nbsp;Quickbook option!</li>
               </div>
          </fieldset>

        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Forgetpassword