import React from "react";
import { AiFillSetting } from "react-icons/ai";
import Arrow from "./images/svg/arrow.svg";
import Sod from "./images/svg/sod.svg";
import Delete from "./images/svg/deleteNoti.svg"
import Alerts from "./data/Alerts";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import DeleteAlert from "./DeleteAlert (1)";
import { useState } from "react";
const AlertSection = () => {
  const navigate = useNavigate();

  const[showpopup,setShowPopup]=useState(false);
  const togglePopup = () => {
    setShowPopup(!showpopup);
  };

  // const closePopup = () => {
    
  // };

  return (
    <div>
      <div className="col-span-2 lg:mt-8">
        <div className="flex justify-between items-center flex-row">
          <h1 className="text-endeavour text-2xl lg:text-3xl font-medium uppercase">
            MY Alerts
          </h1>
          <a href="/profile/settings?partner_code=CUSA">
            <div className="flex items-center text-dodger-blue space-x-2 cursor-pointer">
              <AiFillSetting className="h-5 w-5" />
              <span>My Alert Settings</span>
            </div>
          </a>
        </div>
        <span>You can receive ntifications on routes you travel</span>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5">
        {Alerts.map((alert, index) => (
          <div key={index}>
            <div className="flex space-y-3 p-4 bg-white shadow-2xl border rounded-md flex-col">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <img alt="arrow" src={Arrow} className="pr-3" />
                  <img alt="sod" src={Sod} className="pr-3" />
                  <div className="flex flex-col space-y-1.5">
                    <h4 className="font-semibold text-sm uppercase">
                      {alert.origin}
                    </h4>
                    <h4 className="font-semibold text-sm uppercase">
                      {alert.destination}
                    </h4>
                  </div>
                </div>
                <button type="button" data-modal-toggle="popup-modal" onClick={togglePopup}>
                  <img alt="delete" src={Delete} />
                </button>
                 </div>
                 {showpopup && <DeleteAlert onPopUpClose={togglePopup}/>}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertSection;
