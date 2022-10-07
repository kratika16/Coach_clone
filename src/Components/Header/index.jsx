import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CoachLogo } from "../../assets/images/coach-logo.svg";
import { ReactComponent as CoachIcon } from "../../assets/images/coach-icon.svg";
import { ReactComponent as LoginLogo } from "../../assets/images/wcc-guest.svg";
const index = () => {
  return (
    <div class=" w-full WCC:relative WCC:overflow-hidden WCC:pb-6 mx-md:WCC:pb-44">
      <header
        id="header"
        className="bg-white w-full shadow-lg print:hidden mx-md:top-0 z-[100] relative"
      >
        <div className="container mx-auto font-lato lg:p-4 py-3 mx-md:px-2 mx-md:px-4">
          <div className="flex items-center justify-between mx-md:mr-2">
            <div>
              <div className="-ml-1">
                <Link to="/?partner_code=CUSA">
                  {/* <img alt = "CoachLogo" src= "/Svg/coach-logo.svg" className='h-8 hidden lg:block cursor-pointer'></img>
                    <img alt='CoachIcon' src= "Svg/coach-icon.svg" className='block lg:hidden cursor-pointer'></img> */}
                  <CoachLogo className="h-8 hidden lg:block cursor-pointer" />
                  <CoachIcon className="block lg:hidden cursor-pointer" />
                </Link>
              </div>
            </div>
            <div className="lg:flex lg:items-center hidden WCC:hidden">
              <div className="flex flex-row items-center justify-around nav-link-container">
                <Link
                  to="/?partner_code=CUSA"
                  className="nav-link p-4 font-semibold text-slate-500 hover:text-sky-700 focus:underline-offset-auto"
                >
                  Bus Routes
                </Link>
                <Link
                  to="/airport-transportation?partner_code=CUSA"
                  className="nav-link-active p-4 font-semibold text-slate-500  hover:text-sky-700"
                >
                  Airport transportation
                </Link>
                <Link
                  to="/charters"
                  className="nav-link p-4 font-semibold text-slate-500  hover:text-sky-700"
                >
                  Charter Bus Rentals
                </Link>
                <Link
                  to="/tours"
                  className="nav-link p-4 font-semibold text-slate-500  hover:text-sky-700"
                >
                  Bus Tours
                </Link>
                <Link
                  to="/contract-services"
                  className="nav-link p-4 font-semibold text-slate-500  hover:text-sky-700"
                >
                  Contract Services
                </Link>
              </div>
            </div>
            <div className=" flex flex-row items-center space-x-6 relative">
              <Link to="/login?partner_code=CUSA">
                <button
                  type="button"
                  className="disabled:cursor-default WCC:hidden"
                >
                  <LoginLogo className="flex flex-col items-center cursor-pointer" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default index;
