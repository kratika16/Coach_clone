import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { addSetting } from "../../store/alertsettingSlice";
import { v4 as uuidv4 } from 'uuid';
const Create = () => {
  const [pnum, setPnum] = useState("");
  const dispatch= useDispatch();

  const handleAddsetting = (e)=>{
    e.preventDefault();
    const data={
        id: uuidv4(),
        
        pnum: pnum,
    }
    if(data){
        dispatch(addSetting(data));
    }
    console.log("data",data);
  }
  const option = [
    {
      name: "United States",
      label: "+1",
      value: "+1",
      code: "US",
    },
    {
      name: "Afghanistan",
      label: "+93",
      value: "+93",
      code: "AF",
    },
    {
      name: "Aland Islands",
      label: "+358",
      value: "+358",
      code: "AX",
    },
    {
      name: "Albania",
      label: "+355",
      value: "+355",
      code: "AL",
    },
    {
      name: "Algeria",
      label: "+213",
      value: "+213",
      code: "DZ",
    },
    {
      name: "AmericanSamoa",
      label: "+1684",
      value: "+1684",
      code: "AS",
    },
  ];
  const styles = useMemo(() => ({
    control: (style, { isDisabled }) => ({
      ...style,
      boxShadow: "none",
      borderColor: " rgb(243 244 246)",
      backgroundColor: "rgb(243 244 246)",
      ":hover": {
        ...style[":hover"],
        backgroundColor: "rgb(243 244 246)",
        borderColor: "rgb(243 244 246)",
      },
      ":focus": {
        ...style[":focus"],
        borderColor: "rgb(59 130 246)",
      },
    }),
    placeholder: (style) => ({
      ...style,
      color: "#000000",
    }),
  }));
  const [codes, setCodes] = useState("");
  const handleChange = (abc) => {
    setCodes(abc);
  };
  return (
    <div>
        <form onSubmit={handleAddsetting}>
      <div className="grid bg-gray-100 px-5 pb-6 pt-4 grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="text-lg font-semibold text-gray-800 hidden lg:block">
          Please update your mobile number for text SMS service.
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-row">
            <div className="relative border border-ghost rounded lg:w-[100px] w-[30%] mr-2">
              <label class=" text-xs  text-blue-500 dark:text-gray-400 px-1 pt-1 ">
                Phone Code
              </label>
              <Select
                placeholder="+1"
                options={option}
                value={codes}
                defaultValue={+1}
                onChange={handleChange}
                styles={styles}
              />
            </div>

            <div className="relative border border-ghost rounded lg:w-[200px] w-[70%]  ">
              <input
                type="text"
                className=" focus: ring-sky-500 focus:ring-1 block  px-4 pt-4 pb-6 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                placeholder=" "
                name="pnumber"
                maxLength={10}
                required
                value={pnum}
                onChange={(e) => {
                  setPnum(e.target.value);
                }}
              />
              <label class="pb-2 absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Phone Number*
              </label>
            </div>
          </div>
          <div >
          <button className="mt-4 lg:ml-4 disabled:cursor-default font-semibold text-white uppercase rounded-full w-full lg:w-[180px]  border-dodger-blue bg-dodger-blue px-8 py-2 disabled:bg-gray-500 disabled:border-gray-500"
                type="submit">
                    Add card
            </button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Create;
