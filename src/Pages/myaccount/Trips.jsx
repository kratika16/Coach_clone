import React from 'react'
import CurrentTickets from '../../assets/data/CurrentTickets'
import PastTrips from './PastTrips';
const Trips = () => {
    
  return (
    <div>
        <div className='grid grid-cols-2 mt-2'>
           <a className='disabled:cursor-default bg-endeavour text-white text-sm md:font-bold cursor-pointer md:rounded-tl-3xl uppercase px-2 py-4 text-center'
           href='/profile/mytickets?partner_code=CUSA'>
            Current Tickets
           </a>
           <a className='disabled:cursor-default bg-linkwater text-endeavour text-sm md:font-bold cursor-pointer md:rounded-tr-3xl uppercase px-2 py-4 text-center' >
            Past Tickets
           </a>
        </div>
        <div className='border-4 border-endeavour border-t-0'>
            {CurrentTickets.map((ticket,index)=>(
                <div key={index}>
                   <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-2 border-b-2 border-linkwater'>
                    <div>
                        <span>{ticket.name}</span>
                        <div className='flex flex-col'>
                            <span className='text-black'>{ticket.tripsrem}</span>
                             <button className='disabled:cursor-default mt-2 text-base text-white max-w-max uppercase border rounded-full border-dodger-blue bg-dodger-blue px-4 py-0.5'>
                                VIEW TICKET
                             </button>
                         </div>   
                    </div>
                    <div className='flex md:text-right mx-md:space-y-2 space-y-1 flex-col'>
                       <span>{ticket.valid}</span>
                       <a className='text-dodger-blue cursor-pointer mx-md:underline max-w-max md:self-end' href='#'>View Receipt</a>
                       <button className='disabled:cursor-default text-dodger-blue mx-md:underline max-w-max md:self-end'>Buy Again</button>
                    </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Trips