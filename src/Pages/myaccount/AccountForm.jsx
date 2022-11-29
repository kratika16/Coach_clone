import React, { useMemo, useState } from "react";
import Select from "react-select";
import { COACH_CLONE_USER, ACCOUNT_DETAIL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useValidation } from "../../hooks/Validation";

import _, { isEmpty } from "lodash";
import { useEffect } from "react";
import { filter, find, get, toNumber } from "lodash";
import SelectWithFloatLabel from "../../lib/SelectWithFloatLabel";
import { PhoneCodes } from "../../assets/data/PhoneCodes";
import { handleProfileUpdate } from "../../Store/loginSlice";
import { useNavigate } from "react-router-dom";

const AccountForm = () => {
  const { auth } = useSelector(({ user }) => user);

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [phNumber, setphNumber] = useState("");
  const [pcode, setPcode] = useState(+1);

  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({});

  const { isValidName, isValidLastname, isValidPnumber } = useValidation();

  const verify = () => {
    const error = {};
    let isError = false;
    if (!isValidName(firstName)) {
      error["firstName"] = "Please enter valid firstname";
      isError = true;
    }
    if (!isValidLastname(lastName)) {
      error["lastName"] = "Please enter valid lastname";
      isError = true;
    }

    if (!isValidPnumber(phNumber)) {
      error["phNumber"] = "Please enter valid phone number";
      isError = true;
    }

    setErrors(error);
    return isError;
  };

  // const { isAuthenticated } = useSelector((state) => state.user);
  // console.log("user", isAuthenticated);
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/home");
  //   }
  // }, [isAuthenticated]);

  // const navigate=useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(auth.firstName || "");
    setLastName(auth.lastName || "");
    setPcode(auth.pcode || "");
    setphNumber(auth.phNumber || "");
  }, [auth]);
  console.log(auth);

  // const Pc = get(pcode, "value");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...auth,
      firstName: firstName,
      lastName: lastName,
      pcode: pcode,
      phNumber: phNumber,
    };

    if (!verify(data)) {
      dispatch(handleProfileUpdate(data));
      console.log("editeddata", data);
    }
  };

  const handlePcodeChange = (abc) => {
    console.log(abc);

    setPcode(abc);

    console.log(abc.label);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 z-10 mt-8">
        <div className="relative border border-ghost rounded ">
          <input
            id="firstname-input"
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            name="firstname"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setDisabled(false);
            }}
          />

          <label
            for="firstname-input"
            className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-active:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            First Name*
          </label>
        </div>

        <div className="relative border border-ghost rounded  ">
          <input
            id="lastname-input"
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            name="lastname"
            onChange={(e) => {
              setLastName(e.target.value);
              setDisabled(false);
            }}
            value={lastName}
          />
          <label
            for="lastname-input"
            className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Last Name*
          </label>
        </div>
        <span className="bg-rose-100 text-red text-xs ">
          {errors["firstName"]}
        </span>
        <span className="bg-rose-100 text-red text-xs ">
          {errors["lastName"]}
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <div className="relative border border-ghost rounded bg-gray-200">
            <label className="absolute text-xs text-gray-500 px-4 pt-1 pb-2">
              Email Address*
            </label>
            <input
              type="text"
              className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600 bg-gray-200 focus:outline-none  peer "
              placeholder=" "
              name="email"
              value={auth.email}
              required
              disabled
            />
          </div>
          <span></span>
        </div>

        <div className="flex flex-row gap-2">
          <div className="lg:w-[43%] w-[35%]">
            <SelectWithFloatLabel
              inputId= {"phonecode"}
              labelText={"Phone Code"}
              options={PhoneCodes}
              labelFontSize="text-sm lg:text-base"
              onChange={handlePcodeChange}
              value={pcode}
            />
          </div>

          <div className="col-span-2 lg:w-[57%] w-[65%]">
            <div className="flex flex-col">
              <div className="relative border border-ghost rounded ">
                <input
                  id="phnumber-input"
                  type="text"
                  className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  name="phnumber"
                  onChange={(e) => {
                    setphNumber(e.target.value);
                    setDisabled(false);
                  }}
                  value={phNumber}
                />

                <label
                  for="phnumber-input"
                  className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Phone Number*
                </label>
              </div>

              <span className="bg-rose-100 text-red text-xs ">
                {errors["phNumber"]}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-4 mx-12 lg:justify-evenly justify-center">
        <button className=" disabled:cursor-default text-dodger-blue font-semibold text-base uppercase w-full  border rounded-full border-dodger-blue px-14 py-3">
          Cancel
        </button>
        <button
          className=" disabled:cursor-default font-semibold text-white uppercase rounded-full w-full  border-dodger-blue bg-dodger-blue px-14 py-3 disabled:bg-gray-500 disabled:border-gray-500"
          onClick={onSubmit}
          type="submit"
          id="submit-btn"
          disabled={disabled ? true : false}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AccountForm;
