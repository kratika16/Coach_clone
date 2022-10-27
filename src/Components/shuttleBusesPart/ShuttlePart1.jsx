import React from 'react'
import Bus3 from '../../assets/images/png/bus3.png';
const ShuttlePart1 = () => {
  return (
    <div>
        <div className='hidden mx-md:block'>
        <div className="flex md:flex-row mx-md:flex-col md:pb-16  ">
            <div className=" rounded md:w-1/2 ">
              <img
                className=" h-260 drop-shadow-shuttlebox rounded-xl  mx-md:w-full mx-md:mt-4"
                alt="Newwark Express Buses"
                src={Bus3}
              />
            </div>
            <div className="md:w-1/2  ">
              <h1 className="text-center text-2xl font-semibold items-center mx-md:mt-4">
                Newark Airport Express
              </h1>
              <div className="text-base text-center items-center pt-4  ">
                Take a bus to Newark Liberty International Airport. The Newark
                Airport Express bus runs between EWR and Manhattan daily. Book
                your seat on our airport shuttle by buying your bus ticket here.
              </div>
              <a className=" uppercase inline-block rounded-full text-white py-3 px-16 bg-sky-500 cursor-pointer mt-8 mb-8 md:ml-16 mx-lg:ml-12 mx-3xl:ml-36 mx-md:ml-48 mx-sm:ml-32">
                Learn More
              </a>
            </div>
          </div>
          </div>
        <div className='block mx-md:hidden'>
        <div className="flex md:flex-row mx-md:flex-col md:pb-16  ">
            <div className="md:w-1/2  ">
              <h1 className="text-center text-2xl font-semibold items-center mx-md:mt-4">
                Newark Airport Express
              </h1>
              <div className="text-base text-center items-center pt-4  ">
                Take a bus to Newark Liberty International Airport. The Newark
                Airport Express bus runs between EWR and Manhattan daily. Book
                your seat on our airport shuttle by buying your bus ticket here.
              </div>
              <a className=" uppercase inline-block rounded-full text-white py-3 px-16 bg-sky-500 cursor-pointer mt-8 mb-8 md:ml-16 mx-lg:ml-12 mx-3xl:ml-36 mx-md:ml-48 mx-sm:ml-32">
                Learn More
              </a>
            </div>

            <div className=" rounded md:w-1/2 ">
              <img
                className=" h-260 drop-shadow-shuttlebox rounded-xl  mx-md:w-full mx-md:mt-4"
                alt="Newwark Express Buses"
                src={Bus3}
              />
            </div>
          </div>
          </div>
    </div>
  )
}

export default ShuttlePart1