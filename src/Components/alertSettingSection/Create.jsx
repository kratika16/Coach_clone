import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSetting } from "../../Store/alertsettingSlice";
import SelectWithFloatLabel from "../../lib/SelectWithFloatLabel";
import { PhoneCodes } from "../../assets/data/PhoneCodes";
import { useValidation } from "../../hooks/Validation";
const Create = () => {
  const [pcode, setPcode] = useState(+1);
  const [pnumber, setPnumber] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const setting = useSelector((state) => state.setting);
  const dispatch = useDispatch();
  const handlePcodeChange = (abc) => {
    console.log(abc);
    setPcode(abc);
    console.log(abc.label);
    setDisabled(false);
  };
  const { isValidPnumber } = useValidation();

  const verify = () => {
    const error = {};
    let isError = false;
    if (!isValidPnumber(pnumber)) {
      error["pnumber"] = "Please enter valid phone number";
      isError = true;
    }
    setErrors(error);
    return isError;
  };
  const data = {
    setid: Math.floor(Math.random() * 100),
    pcode: pcode,
    pnumber: pnumber,
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    if (!verify(data)) {
      dispatch(addSetting(data));
    }
  };
  return (
    <div className="grid bg-grey px-5 py-6 grid-cols-1 lg:grid-cols-3">
      <div className="text-xl font-semibold">
        Please update your mobile number for text SMS alert service.
      </div>
      <form onSubmit={handleAddFormSubmit}>
        <div className="flex lg:flex-row flex-col ">
          <div className="flex flex-row gap-2">
            <div className="relative lg:w-[128px] w-[40%] mr-2">
              <SelectWithFloatLabel
                inputId={"phonecode"}
                labelText={"Phone Code"}
                options={PhoneCodes}
                labelFontSize="text-sm lg:text-base"
                onChange={handlePcodeChange}
                getValue={pcode}
                value={pcode}
              />
            </div>
            <div className="flex flex-col w-full lg:w-[230px]">
            <div className="relative border border-ghost rounded   ">
              <input
                id="pnumber-input"
                type="text"
                className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-600 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                placeholder=" "
                name="pnumber"
                maxLength={10}
                value={pnumber}
                onChange={(e) => {
                  setPnumber(e.target.value);
                  setDisabled(false);
                }}
              />
              <label
                for="pnumber-input"
                class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-9 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Phone Number*
              </label>
            </div>
            <span className="bg-rose-100 text-red text-xs ">
                {errors["pnumber"]}
              </span>
            </div>
          </div>
          <div className="flex lg:ml-8 flex-col lg:mt-2 mt-2 ">
            <button
              className="  cursor-pointer uppercase font-semibold text-white bg-dodger-blue rounded-full py-2 w-full lg:w-[170px]  disabled:bg-gray-500 disabled:border-gray-500"
              type="submit"
              disabled={disabled ? true : false}
            >
              Save
            </button>
            <span></span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
