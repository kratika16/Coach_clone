import React,{useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import CoachLogo from "../../assets/images/svg/coach-logo.svg";
import CoachIcon from "../../assets/images/svg/coach-icon.svg";
import AlertIcon from '../../assets/images/svg/noti.svg';
import {AiOutlineMenu} from 'react-icons/ai';
import { useSelector } from "react-redux";

import Actiondropdown from "./Actiondropdown";

const Index = () => {

  return (
    <div className="bg-white drop-shadow-xl shadow-white h-16 mx-md:fixed  top-0 left-0 right-0 z-100">
      <div className="flex items-center justify-between mx-lg:pt-2 ">
        <div className=" lg:pl-20 lg:pt-2 mx-lg:pl-2 ">
          <Link to="/home">
            <img alt="coachlogo" src={CoachLogo} className="h-8 hidden lg:block cursor-pointer " />
            <img alt="coachicon" src={CoachIcon} className=" block  lg:hidden cursor-pointer" />
          </Link>
        </div>
        <div className="flex flex-row items-center text-center lg:pt-1 justify-around mx-lg:hidden">
          <Link
            to="/home"
            className=" p-4 font-semibold text-sm text-slate hover:text-skyblue "
          >
            Bus Routes
          </Link>
          <Link
            to="/airport-transportation?partner_code=CUSA"
            className=" p-4 font-semibold text-sm text-slate  hover:text-skyblue"
          >
            Airport transportation
          </Link>
          <Link
            to="/charters"
            className=" p-4 font-semibold text-sm text-slate  hover:text-skyblue"
          >
            Charter Bus Rentals
          </Link>
          <Link
            to="/tours"
            className=" p-4 font-semibold text-sm text-slate  hover:text-skyblue"
          >
            Bus Tours
          </Link>
          <Link
            to="/contract-services"
            className=" p-4 font-semibold text-sm text-slate  hover:text-skyblue"
          >
            Contract Services
          </Link>
        </div>
        <div className="mx-md:pr-4 flex flex-row mx-md:pt-2">
        <div >
        <Actiondropdown/>
        </div>
        <div>
          <Link to="/profile/myalerts?partner_code=CUSA">
            <button>
              <img
                alt="Alerticon"
                src={AlertIcon }
                className="flex flex-col items-center cursor-pointer lg:h-10.5 lg:pr-20 lg:pt-2 md:pr-4 h-11 pt-2"
               
              />
            </button>
          </Link>
        </div>
        <div className=" block md:hidden pl-8 text-skyblue mt-2">
          <AiOutlineMenu size={30}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
