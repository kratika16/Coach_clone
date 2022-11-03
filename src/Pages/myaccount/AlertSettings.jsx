import React, { useMemo, useState } from "react";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import Header from "../../components/header/index2";
import Footer from "../../components/footer/index";
import Select from "react-select";
import PhoneCodes from "../../assets/data/Phone-codes";
const AlertSettings = () => {
  const [toggleShown, setToggleShown] = useState(false);
  const[smstoggle, setSMSToggle]= useState(false);

  const handleSMSToggle =()=>{
    setSMSToggle(!smstoggle);
  }

  const handletoggleShown = () => {
    setToggleShown(!toggleShown);
  };
  const option =[
    {
      "name": "United States",
      "label": "+1",
      "value": "+1",
      "code": "US"
      },
    {
    "name": "Afghanistan",
    "label": "+93",
    "value": "+93",
    "code": "AF"
    },
    {
    "name": "Aland Islands",
    "label": "+358",
    "value": "+358",
    "code": "AX"
    },
    {
    "name": "Albania",
    "label": "+355",
    "value": "+355",
    "code": "AL"
    },
    {
    "name": "Algeria",
    "label":"+213",
    "value": "+213",
    "code": "DZ"
    },
    {
    "name": "AmericanSamoa",
    "label": "+1684",
    "value": "+1684",
    "code": "AS"
    },
    
  ]
  const styles = useMemo(() => ({
    control: (style, { isDisabled }) => ({
      ...style,
      boxShadow: "none",
      borderColor: " rgb(229 231 235)",
      backgroundColor: "rgb(229 231 235)",
      ":hover": {
        ...style[":hover"],
        backgroundColor: "rgb(229 231 235)",
        borderColor: "rgb(229 231 235)",
      },
    }),
  }));
  const [codes, setCodes] = useState("");
  const handleChange = (abc) => {
    setCodes(abc);
  };
  return (
    <div>
      <Header />
      <div className="container mx-auto my-0 lg:my-11 md:mt-2 mt-20  lg:px-16 px-0">
        <div className="px-4 lg:px-0">
          <a href="/profile/myalerts?partner_code=CUSA">
            <span className="mb-5 text-endeavour font-medium text-sm underline cursor-pointer max-w-max">
              Go Back
            </span>
          </a>
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
          {!toggleShown ? <BsToggle2On onClick={handletoggleShown} className="text-dodger-blue w-10 h-10" />:<BsToggle2Off onClick={handletoggleShown} className="text-gray-400 w-10 h-10"/>}
          </div>
          <div className="flex justify-center text-dodger-blue rounded-full">
          {!smstoggle ? <BsToggle2On onClick={handleSMSToggle} className="text-dodger-blue w-10 h-10" />:<BsToggle2Off onClick={handleSMSToggle} className="text-gray-400 w-10 h-10"/>}
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
        <div className="grid bg-gray-100 px-5 pb-6 pt-4 grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="text-lg font-semibold text-gray-800 hidden lg:block">
            Please update your mobile number for text SMS service.
          </div>
          <div className="grid grid-cols-3 gap-x-1.5 lg:gap-x-4">
            <div className="border border-inherit rounded-md bg-gray-200 mt-2 px-2 pt-2">
              <p className="text-denim text-xs">Phone Code*</p>
              <Select
                placeholder=""
                options={option}
                value={codes}
                defaultValue= {{
                  "name": "United States",
                  "label": "+1",
                  "value": "+1",
                  "code": "US"
                  }}
                onChange={handleChange}
                styles={styles}
              />
            </div>
            <div className="border border-inherit rounded-md bg-gray-200 mt-2 px-2 pt-2 col-span-2">
              <p className="text-denim text-xs">Phone Number (optional)</p>
              <input
                type="text"
                placeholder=""
                value="198-647-9152"
                required
                className=" outline-none w-full bg-gray-200"
              />
            </div>
          </div>
          <div className="flex items-center justify-between lg:justify-evenly">
            <button className="disabled:cursor-default cursor-pointer text-endeavour font-medium text-sm underline">
                Edit Phone Number
            </button>
            <button className="disabled:cursor-default cursor-pointer text-crimson font-medium text-sm underline">
                Delete
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AlertSettings;
