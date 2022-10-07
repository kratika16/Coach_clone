import React from 'react'
import Bus1 from '../../assets/images/bus1.png'
import Bus2 from '../../assets/images/bus2.png'
import Bus3 from '../../assets/images/bus3.png'
import Bus4 from '../../assets/images/bus4.png'

function ShuttleBuses() {
  return (
   <>
    <div className="container flex flex-col justify-center text-center WCC:hidden ml-20">
        <h5 className=" text-center text-3xl md:ml-10 font-bold mb-4 ml-7 ">Our Airport Shuttle Buses</h5>

        <div className=" container mx-auto my-8 md:px-4">
           <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 mx-md:px-4 md:ml-10">
            <h1 className="text-2xl font-bold md:mb-5 mx-md:mb-3 mx-md:mt-2">Newark Airport Express</h1>
            <div className="text-base mb-6 block md:ml-10">
            Take a bus to Newark Liberty International Airport. The Newark Airport Express bus runs between EWR and Manhattan daily. Book your seat on our airport shuttle by buying your bus ticket here.
            </div>
            <a className="uppercase inline-block rounded-full text-white py-3 px-16 bg-blue-400 cursor-pointer">
             Learn More
            </a>
            </div>
            <div className="rounded md:w-1/2 mx-md:hidden">
         <img className="md:ml-4 max-h-[300px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.10)] rounded-xl " alt="Newwark Express Buses" src={Bus3}/>
        </div>
           </div>
        </div>

        <div className=" container mx-auto my-8 md:px-4">
           <div className="flex flex-col md:flex-row ">
            <div className="rounded md:w-1/2 mx-md:hidden">
         <img className="md:ml-16 max-h-[300px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.10)] rounded-xl " alt="Newwark Express Buses" src={Bus1}/>
        </div>
        <div className="md:w-1/2 mx-md:px-4 ml-4">
            <h1 className="text-2xl font-bold md:mb-5 mx-md:mb-3 mx-md:mt-2">Coach USA Airport Express</h1>
            <div className="text-base mb-6 block md:ml-12">
            Coach USA Airport Express transportation operates daily between Chicago O'Hare Airport and Waukesha, Brookfield, Milwaukee (including Mitchell Airport), Racine and Kenosha. Online airport shuttle bus tickets are available here.
            </div>
            <a className="uppercase inline-block rounded-full text-white py-3 px-16 ml-8 bg-blue-400 cursor-pointer">
             Learn More
            </a>
            </div>
           </div>
        </div>

      
        <div className=" container mx-auto my-8 md:px-4">
           <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 mx-md:px-4 md:ml-10">
            <h1 className="text-2xl font-bold md:mb-5 mx-md:mb-3 mx-md:mt-2">Go Van Galder</h1>
            <div className="text-base mb-6 block md:ml-8">
            Our Van Galder airport shuttle to Chicago O'Hare Airport serves Madison, Janesville, South Beloit and Rockford. Go Van Galder’s airport transportation runs on the same schedule 365 days a year. Book your airport shuttle bus ticket today
            </div>
            
            <a className="uppercase inline-block rounded-full text-white py-3 px-16 bg-blue-400 cursor-pointer ">
             Learn More
            </a>
            </div>
            <div className="rounded md:w-1/2 mx-md:hidden">
         <img className="md:ml-4 max-h-[300px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.10)] rounded-xl " alt="Newwark Express Buses" src={Bus4}/>
        </div>
           </div>
        </div>

       
        <div className=" container mx-auto my-8 md:px-4">
           <div className="flex flex-col md:flex-row ">
            <div className="rounded md:w-1/2 mx-md:hidden">
         <img className="md:ml-16 max-h-[300px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.10)] rounded-xl " alt="Newwark Express Buses" src={Bus2}/>
        </div>
        <div className="md:w-1/2 mx-md:px-4 md:ml-4">
            <h1 className="text-2xl font-bold md:mb-5 mx-md:mb-3 mx-md:mt-2">megabus.com</h1>
            <div className="text-base mb-6 block md:ml-10">
            Our Canadian megabus.com airport shuttle connects Toronto Pearson Airport with Belleville, Kingston, Napanee, Port Hope and Trenton, Ontario. Find out more about our airport transportation in Canada.
            </div>
            <a className="uppercase inline-block rounded-full text-white py-3 px-16 bg-blue-400 cursor-pointer ">
             Learn More
            </a>
            </div>
           </div>
        </div>

      </div>
   </>
  )
}

export default ShuttleBuses
