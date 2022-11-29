import React, { useState } from "react";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import Header from "../../Components/Header/index2";
import Footer from "../../Components/footer/index";
import AlertTogglePopus from "../../Components/modals/AlertTogglePopus";
import Section from '../../Components/alertSettingSection/section';
import Create from "../../Components/alertSettingSection/Create";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const AlertSettings = () => {
  const [showMyModel, setShowMyModel] = useState(false);
  const handleonClose = () => setShowMyModel(false);
  const [toggleShown, setToggleShown] = useState(true);
  const [smstoggle, setSMSToggle] = useState(true);
  // const handleSMSToggle = () => {
  //   setShowMyModel(true);
  // };
  const handletoggleShown = () => {
    setShowMyModel(true);
  };
  const {setting}= useSelector((state)=>state.setting);

  return (
    <div>
      <Header />
      <div className="container mx-auto my-0 lg:my-11 md:mt-2 mt-20  lg:px-16 px-0">
        <div className="px-4 lg:px-0">
          <Link to="/profile/myalerts?partner_code=CUSA">
            <span className="mb-5 text-endeavour font-medium text-sm underline cursor-pointer max-w-max">
              Go Back
            </span>
          </Link>
          <h1 className="text-2xl lg:text-3xl text-gray-800 font-medium mb-4 mt-4">
            My Alert Settings
          </h1>
        </div>
        <div className="grid grid-cols-5 items-center bg-gray-200 px-5 py-3 font-semibold text-base text-gray-800">
          <div className="col-span-2">All Alert Type</div>
          <div className="flex justify-center items-center flex-col">
            <span>App Push Notifications</span>
            <span className="font-normal text-xs">
              Available only on the Coach USA App
            </span>
          </div>
          <div className="text-center">Text SMS</div>
          <div className="text-center">Email</div>
        </div>
        <div className="grid grid-cols-5 items-center px-5 pt-1 pb-6 border-b border-mystic">
          <div className="flex flex-col col-span-2">
            <h1 className="font-semibold text-xl text-gray-800">
              Booking Reminders
            </h1>
          </div>
          <div className="flex justify-center rounded-full">
            {!toggleShown ? (
              <BsToggle2On
                onClick={handletoggleShown}
                className="text-dodger-blue w-10 h-10"
              />
            ) : (
              <BsToggle2Off
                onClick={handletoggleShown}
                className="text-gray-400 w-10 h-10"
              />
            )}
          </div>
          <div className="flex justify-center text-dodger-blue rounded-full">
            {!smstoggle ? (
              <BsToggle2On
                onClick={()=>setSMSToggle(true)}
                className="text-dodger-blue w-10 h-10"
              />
            ) : (
              <BsToggle2Off
                onClick={()=>setSMSToggle(false)}
                className="text-gray-400 w-10 h-10"
              />
            )}
          </div>
          <div className="text-center text-xs font-normal text-gray-800">
            Please use unsubscribe button in <br />
            email updates to opt-out
          </div>
        </div>
        <div className="px-4 lg:px-0">
          <div className="px-0.5 py-5 items-center">
            <div className="font-semibold text-sm text-ecstacy">
              Note :
              <span className="font-normal text-gray-800">
                Please allow 1 business day for all unsubscribe requests.
              </span>
            </div>
          </div>
        </div>
        {setting.length>0 ? <Section/>:<Create/>}
      </div>
      <Footer />
      <AlertTogglePopus visible={showMyModel} onClose={handleonClose} />
    </div>
  );
};

export default AlertSettings;
