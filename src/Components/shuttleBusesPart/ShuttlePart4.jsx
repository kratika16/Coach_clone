import React from 'react'
import Bus2 from "../../assets/images/png/bus2.png";

const ShuttlePart4 = () => {
  return (
    <div>
        <div className="flex md:flex-row mx-md:flex-col md:pb-16 ">
            <div className="rounded md:w-1/2  ">
              <img
                className=" h-260 drop-shadow-shuttlebox rounded-xl mx-md:w-full mx-md:mt-4"
                alt="Newwark Express Buses"
                src={Bus2}
              />
            </div>

            <div className=" md:w-1/2">
              <h1 className="text-center text-2xl font-semibold items-center mx-md:mt-4">
              megabus.com
              </h1>
              <div className="text-base text-center items-center pt-4">
              Our Canadian megabus.com airport shuttle connects Toronto
                Pearson Airport with Belleville, Kingston, Napanee, Port Hope
                and Trenton, Ontario. Find out more about our airport
                transportation in Canada.
              </div>
              <a className=" uppercase inline-block rounded-full text-white py-3 px-16 bg-sky-500 cursor-pointer mt-8 mb-8 md:ml-16 mx-lg:ml-12 mx-3xl:ml-36 mx-md:ml-48 mx-sm:ml-32">
                Learn More
              </a>
            </div>
          </div>
    </div>
  )
}

export default ShuttlePart4