import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const SignupConfirm = () => {
    const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
    <div className="flex flex-col justify-center items-center  mb-14 mx-4 lg:mt-0 mx-lg:mt-8 mx-md:mt-16 lg:mb-18 lg:mx-0">
      <h1 className="font-semibold text-2xl mx-md:text-lg uppercase text-darkgrey">
      NEXT STEP: VERIFY YOUR ACCOUNT
      </h1>
      <h2 className="w-full mt-1 text-sm text-center lg:w-96 mb-2">
      Your verification code will be sent to your email.
      </h2>
      <h2 className="w-full  text-sm text-center lg:w-96 mb-2 text-orange font-medium">
      The code is active for 24 hours.
      </h2>
      <div className="grid grid-cols-1 gap-4 w-full lg:w-96">
      <div className="relative border border-ghost rounded mt-2">
          <label class="absolute text-xs  text-blue-500 dark:text-gray-400 px-4 pt-1 pb-4 ">
            Email Address*
          </label>
          <input
            type="text"
            className="  block  px-4 pt-6 pb-2  w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder="Enter Email Address"
            name="email"
            defaultValue=""
            required
          />
        </div>
        <div className="relative border border-ghost rounded ">
          <label class="absolute text-xs  text-blue-500 dark:text-gray-400 px-4 pt-1 pb-4 ">
            Password*
          </label>
          <div className="flex flex-row">
            <input
              type={passwordShown ? "text" : "password"}
              className="  block  px-4 pt-6 pb-2  w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
              placeholder="Enter Password"
              name="password"
              defaultValue=""
              required
            />
            {!passwordShown ? (
              <BsEye
                onClick={togglePassword}
                className="inline-block  cursor-pointer text-dodger-blue text-2xl mt-4 mr-4 "
              />
            ) : (
              <BsEyeSlash
                onClick={togglePassword}
                className="inline-block mt-4 mr-4 cursor-pointer text-dodger-blue text-2xl "
              />
            )}
          </div>
        </div>
        <p className="text-xs ">
          Passwords must have at least 8 characters, upper and lower case, with
          at least 1 number and 1 special character.
        </p>
        <div>
            <p className="w-full text-xs text-endeavour">Enter Your Verification Code</p>
            <div className="flex mt-1">
                <div className="pr-4 flex-1">
                   <input type="text" maxLength="1" className=" font-normal text-center border border-ghost rounded py-3 w-full focus:outline-none"/>
                </div>
                <div className="pr-4 flex-1">
                   <input type="text" maxLength="1" className=" font-normal text-center border border-ghost rounded py-3 w-full focus:outline-none"/>
                </div>
                <div className="pr-4 flex-1">
                   <input type="text" maxLength="1" className=" font-normal text-center border border-ghost rounded py-3 w-full focus:outline-none"/>
                </div>
                <div className="pr-4 flex-1">
                   <input type="text" maxLength="1" className=" font-normal text-center border border-ghost rounded py-3 w-full focus:outline-none"/>
                </div>
                <div className="pr-4 flex-1">
                   <input type="text" maxLength="1" className=" font-normal text-center border border-ghost rounded py-3 w-full focus:outline-none"/>
                </div>
                <div className="pr-4 flex-1">
                   <input type="text" maxLength="1" className=" font-normal text-center border border-ghost rounded py-3 w-full focus:outline-none"/>
                </div>
            </div>
            <p className="block w-full font-normal text-xs mt-1">If it has been longer than 24 hours since you last requested a code, please request a new code.</p>
        </div>
        <button className="cursor-pointer px-2 py-3 text-white uppercase bg-dodger-blue mt-1 w-full focus:outline-none rounded-full">
            Verify My Account
        </button>
        <button className="cursor-pointer px-2 py-3 text-dodger-blue border border-dodger-blue uppercase mt-1 w-full focus:outline-none rounded-full">
            Resend Verification Code
        </button>
      </div>
    </div>
    </>
  )
}

export default SignupConfirm