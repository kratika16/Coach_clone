import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import AirplaneBlu from "../../assets/images/svg/airplane-blue.svg";
function ShuttleService() {
  return (
    <>
      <div className="container md:my-20 mx-md:mt-12 mx-md:mb-10 mx-md:p-0 mx-lg:px-4 lg:px-20 ms-2xl:px-20 2xl:px-48">
        <div className=" px-4 md:pt-16 pt-12 bg-serveblue ">
          <h4 className="text-center text-white md:block text-2xl md:ml-10 font-bold">
            Our Airport Shuttles Serve
          </h4>
          <div className="flex mx-md:flex-col flex-row">
            <div className="flex px-4 md:py-8 mx-md:pt-6 space-y-4 flex-col">
              <div className="rounded bg-white shadow-xl ">
                <div className="flex md:px-10 px-3 pt-4 md:space-x-3 flex-row">
                  <img alt='airplane' src={AirplaneBlu} className="text-30" />
                  <h5 className="text-17 font-semibold mb-2">
                    Newark International Airport (EWR){" "}
                  </h5>
                </div>
                <div className="flex md:pl-20 md:pr-12 px-3 pt-1 pb-5 items-start flex-row">
                  <GoPrimitiveDot className="text-[20px] pt-1" />
                  <a
                    className="text-sm pl-2 text-blue-400  hover:underline"
                    href=""
                  >
                    Newark Airport Express to Manhattan, NYC.
                  </a>
                </div>
              </div>
              <div className="rounded bg-white shadow-xl ">
                <div className="flex md:px-10 px-3 pt-4 md:space-x-3 flex-row">
                <img alt='airplane' src={AirplaneBlu} className="text-30" />
                  <h5 className="text-17 font-semibold mb-2">
                    Mitchell International Airport (MKE){" "}
                  </h5>
                </div>
                <div className="flex md:pl-20 md:pr-12 px-3 pt-1 pb-5 items-start flex-row">
                  <GoPrimitiveDot className="text-[20px] pt-1 md:ml-1" />
                  <a
                    className="text-sm pl-2 text-blue-400 hover:underline"
                    href=""
                  >
                    Coach USA Airport Express to O'Hare, Waukesha, Brookfield,
                    Milwaukee, Racine and Kenosha.
                  </a>
                </div>
              </div>
            </div>
            <div className="flex px-4 md:py-8 mx-md:pt-4 mx-md:pb-10 space-y-4 flex-col">
              <div className="rounded-lg bg-white shadow-xl">
                <div className="flex md:px-10 px-3 pt-4 md:space-x-3 flex-row">
                <img alt='airplane' src={AirplaneBlu} className="text-30" />
                  <h5 className="text-17 font-semibold mb-2">
                    Chicago O'Hare International Airport (ORD)
                  </h5>
                </div>
                <div className="flex md:pl-20 md:pr-12 px-3 pt-1 pb-5 items-start flex-row">
                  <GoPrimitiveDot className="text-[20px] pt-1 md:ml-1" />
                  <a
                    className="text-sm pl-2 text-blue-400 hover:underline"
                    href=""
                  >
                    Coach USA Airport Express to Waukesha, Brookfield, Milwaukee
                    (including Mitchell Airport), Racine and Kenosha.
                  </a>
                </div>
                <div className="flex md:pl-20 md:pr-12 px-3 pt-1 pb-5 items-start flex-row">
                  <GoPrimitiveDot className="text-[20px] pt-1" />
                  <a
                    className="text-sm pl-2 text-blue-400 hover:underline"
                    href=""
                  >
                    Go Van Galder to Madison, Janesville, South Beloit and
                    Rockford.
                  </a>
                </div>
              </div>
              <div className="rounded bg-white shadow-xl md:min-h-[132px]">
                <div className="flex md:px-10 px-3 pt-4 md:space-x-3 flex-row">
                <img alt='airplane' src={AirplaneBlu} className="text-30" />
                  <h5 className="text-17 font-semibold mb-2">
                    Toronto Pearson International Airport (YYZ)
                  </h5>
                </div>
                <div className="flex md:pl-20 md:pr-12 px-3 pt-1 pb-5 items-start flex-row">
                  <GoPrimitiveDot className="text-[20px] pt-1" />
                  <a
                    className="text-sm pl-2 text-blue-400 hover:underline"
                    href=""
                  >
                    Megabus.com to Belleville, Kingston, Napanee, Port Hope and
                    Trenton, Ontario
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShuttleService;
