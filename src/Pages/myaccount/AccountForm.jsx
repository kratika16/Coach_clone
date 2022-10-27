import React, { useMemo, useState } from "react";
import Select from "react-select";


const AccountForm = () => {
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
      borderColor: " hsl(0 0% 100%)",
      ":hover": {
        ...style[":hover"],
        backgroundColor: "hsl(0 0% 100%)",
        borderColor: "hsl(0 0% 100%)",
      },
    }),
    
  }));
  const [codes, setCodes] = useState("");
  const handleChange = (abc) => {
    setCodes(abc);
  };
  return (
    <div className="grid gird-cols-1 lg:grid-cols-2 gap-4 mx-md:px-2 mx-md:pt-12 ">
      <div className="border border-inherit rounded-md bg-white mt-2  p-2">
        <p className="text-denim text-xs">First Name*</p>
        <input
          type="text"
          placeholder=""
          value="Kratika"
          required
          className=" outline-none w-full"
        />
      </div>
      <div className="border border-inherit rounded-md bg-white mt-2  p-2">
        <p className="text-denim text-xs">Last Name*</p>
        <input
          type="text"
          placeholder=""
          value="Yadav"
          required
          className=" outline-none w-full"
        />
      </div>
      <div className="border border-inherit rounded-md mt-2  px-2 pt-2 bg-gray-200">
        <p className="text-denim text-xs" >Email Address*</p>
        <input
          type="email"
          placeholder=""
          value="kratika@gmail.com"
          required
          disabled true
          className=" outline-none w-full  disabled:bg-gray-200"
        />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-1.5 lg:gap-4">
        <div className="border border-inherit rounded-md bg-white mt-2 px-0 pt-2">
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
        <div className="border border-inherit rounded-md bg-white mt-2 px-2 pt-2 col-span-2">
          <p className="text-denim text-xs">Phone Number (optional)</p>
          <input
            type="text"
            placeholder=""
            value= '198-647-9152'
            required
            className=" outline-none w-full"
          />
        </div>
       </div>
        <div className="text-center items-center">
          <button className="text-dodger-blue font-bold text-base uppercase w-full lg:w-[230px] border rounded-full border-dodger-blue px-24 py-3 ">
            Cancel
          </button>
        </div>
        <div className="text-center items-center">
          <button className="disable:cursor-default font-bold text-base text-white uppercase border rounded-full border-dodger-blue bg-dodger-blue px-24 py-3 disabled:bg-dusty-gray disabled:border-dusty-gray w-full lg:w-[230px] ">
            Save
          </button>
        </div>
      
    </div>
  );
};

export default AccountForm;
