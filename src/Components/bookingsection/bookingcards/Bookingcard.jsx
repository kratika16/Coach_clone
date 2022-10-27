import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3';
const Bookingcard = () => {
  return (
    <div className='container md:w-88 mx-md:w-[98%]'>
        <div className='flex flex-row justify-between items-center my-2 font-semibold font-sm '>
          <h1>Your Recent Purchased Tickets</h1>
          <a className='text-blue-500' href='/profile/mytickets?partner_code=CUSA'>View More</a>
        </div>
        <div className=' bg-white grid mx-md:grid-cols-1 grid-cols-3'>
            <div>
               <Card1/>
            </div>
            <div>
               <Card2/> 
            </div>
            <div>
               <Card3/>  
            </div>
            
        </div>
    </div>
  )
}

export default Bookingcard