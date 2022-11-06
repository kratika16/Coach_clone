import React, { useState,useEffect } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Validation } from "../../../hooks/Validation";
import { handleSignup } from "../../../store/loginSlice";

const Signupform = () => {

  const getFormValues = () => {
    let storedValues = localStorage.getItem("signupuser");
    if (storedValues) {
      return JSON.parse(storedValues);
    } else {
      return [];
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState(getFormValues());
  const [passwordShown, setPasswordShown] = useState(false);

  const [
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    specialChar,
    requiredLength,
  ] = Validation({
    email: form.email,
    password: form.password,
    requiredLength: 8,
  });

  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      email: form.email,
      password: form.password,
    };
    if(data){
      dispatch(handleSignup(data));
      alert('User Registered Successfully');
    }
  };

  useEffect(() => {
    localStorage.setItem("signupuser", JSON.stringify(form));
  }, [form]);


  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
   
  };
    
  

  return (
    <div className="flex flex-col justify-center items-center  mx-4 lg:mt-0 mx-lg:mt-8 mx-md:mt-16 lg:mb-18 lg:mx-0">
      <h1 className="font-semibold text-2xl mx-md:text-lg uppercase text-darkgrey">
        Create An Account
      </h1>
      <h2 className="w-full mt-1 text-sm text-center lg:w-96 mb-2">
        Your Coach USA account allows you to easily to book and retrieve
        tickets.
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
            onChange={handleChange}
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
              onChange={handleChange}
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
        {/* <small className="text-white bg-rose-700">
          {!validLength && "Please Enter Valid Password "}
        </small> */}
        <p className="text-xs ">
          Passwords must have at least 8 characters, upper and lower case, with
          at least 1 number and 1 special character.
        </p>
        <div class="flex items-center ">
          <input
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-white  checked:bg-blue-500 border border-blue-500 rounded "
          />
          <label class="ml-2 text-xs font-normal text-gray-900">
            By signing up for an account, you agree to Coach USA's
            <span className="text-blue-500"> terms and conditions </span>and
            <span className="text-blue-500"> privacy policy</span>
          </label>
        </div>
        <div class="flex items-center">
          <input
            defaultChecked
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-white  checked:bg-blue-500 border border-blue-500 rounded "
          />
          <label className="ml-2 text-xs font-normal text-gray-900">
            I want to receive travel alerts & promotional information from Coach
            USA.
          </label>
        </div>
        <button
          className="cursor-pointer px-2 py-3 text-white uppercase bg-dodger-blue mt-1 w-full focus:outline-none rounded-full"
          onClick={submitForm}
        >
          Create An Account
        </button>
        <div className="flex flex-row justify-between items-center bg-gray-100 px-4 py-3 w-full rounded-md mt-1">
          <div className="font-semibold text-base">Already have an account</div>
          <button
            className=" border border-dodger-blue bg-white text-dodger-blue font-semibold rounded-full uppercase px-6 py-1 focus:outline-none"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signupform;
