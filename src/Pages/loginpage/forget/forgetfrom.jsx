import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import Loginpage from "../Loginpage";
const forgetfrom = () => {
  return (
    <div>
      <div className=" lg:block hidden">
        <a className="text-dodger-blue mb-12 flex-row flex pt-2" href="/login?partner_code=CUSA">
          <AiOutlineLeft size={20} className="pt-1"/> Go Back
        </a>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="uppercase text-center items-center font-semibold text-3xl mt-4 text-gray-900 mx-md:pt-16">
          CONFIRM PASSWORD RESET
        </h1>
        <p className="text-center items-center text-md font-medium lg:px-48 px-1 mt-4 text-gray-800">
          Enter the email address associated with your account to receive a
          reset code.
        </p>
      </div>
     
      <div className="flex flex-col w-full lg:w-96 mx-auto ">
        <form>
          <div className="border border-inherit rounded-lg bg-white my-4  p-2 ">
            <p className="text-denim text-xs">Email Address*</p>
            <input
              type="text"
              placeholder="Enter your email"
              required
              className=" outline-none"
            />
          </div>
          <div className=" bg-gray-400 rounded-full my-8 text-center">
            <button className="text-lg font-semibold text-center py-4  text-white ">
              RESET PASSWORD
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default forgetfrom;
