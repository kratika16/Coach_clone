import React from 'react'
import Bus4 from "../../assets/images/png/bus4.png";
const ShuttlePart3 = () => {
  return (
    <div>
        <div className='hidden mx-md:block'>
        <div className="flex md:flex-row mx-md:flex-col md:pb-16  ">
            <div className=" rounded md:w-1/2 ">
              <img
                className=" h-260 drop-shadow-shuttlebox rounded-xl  mx-md:w-full mx-mt:mt-4 "
                alt="Newwark Express Buses"
                src={Bus4}
              />
            </div>
            <div className="md:w-1/2  ">
              <h1 className="text-center text-2xl font-semibold items-center mx-md:mt-4 ">
              Go Van Galder
              </h1>
              <div className="text-base text-center items-center pt-4  ">
              Our Van Galder airport shuttle to Chicago O'Hare Airport serves
                Madison, Janesville, South Beloit and Rockford. Go Van Galder’s
                airport transportation runs on the same schedule 365 days a
                year. Book your airport shuttle bus ticket today
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
              Go Van Galder
              </h1>
              <div className="text-base text-center items-center pt-4  ">
              Our Van Galder airport shuttle to Chicago O'Hare Airport serves
                Madison, Janesville, South Beloit and Rockford. Go Van Galder’s
                airport transportation runs on the same schedule 365 days a
                year. Book your airport shuttle bus ticket today
              </div>
              <a className=" uppercase inline-block rounded-full text-white py-3 px-16 bg-sky-500 cursor-pointer mt-8 mb-8 md:ml-16 mx-lg:ml-12 mx-3xl:ml-36 mx-md:ml-48 mx-sm:ml-32">
                Learn More
              </a>
            </div>

            <div className=" rounded md:w-1/2 ">
              <img
                className=" h-260 drop-shadow-shuttlebox rounded-xl  mx-md:w-full mx-md:mt-4"
                alt="Newwark Express Buses"
                src={Bus4}
              />
            </div>
          </div>
          </div>
    </div>
  )
}

export default ShuttlePart3