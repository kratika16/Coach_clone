import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import {useValidation} from '../../hooks/Validation'

import _ from "lodash";
import { handleLogin } from "../../Store/loginSlice";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  
  const [passwordShown, setPasswordShown] = useState(false);
  const [agree,setAgree]=useState(false);
  const [errors, setErrors] = useState({});

const {isValidEmail, isValidPassword} = useValidation()

const verify = () => {
  const error = {};
  let isError = false;
  const {email, password} = form;
  if(!isValidEmail(email)) {
    error['email'] = 'Please enter valid email';
    isError = true;
  } 
  if(!isValidPassword(password)) {
    error['password'] = 'Please enter valid password';
    isError = true;
  }
  setErrors(error);
  return isError;
}
 


  const { isAuthenticated } = useSelector((state) => state.user);
  console.log("user", isAuthenticated);

  const submitForm = (e) => {
    e.preventDefault();
    if(!verify()){
      const {email, password} = form;
    dispatch(handleLogin({email,password}));
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  

  const handleCreateAccount = () => {
    navigate("/sign-up");
  };

  return (
    <div className="flex flex-col  w-full lg:w-96  items-center ">
      <form className="items-center" onSubmit={submitForm}>
        <div className="border  rounded-lg bg-white mt-4  p-2">
          <p className="text-xs text-denim">Email Address*</p>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className=" outline-none w-[365px]"
            onChange={HandleChange}
            value={form.email}
          />
        </div>
        <p className="bg-rose-100 text-red">{errors['email']}</p>

        <div className="border  rounded-lg bg-white mt-4  p-2">
          <p className="text-denim text-xs">Password*</p>
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className=" outline-none  w-[180px]"
            onChange={HandleChange}
            value={form.password}
          />
          {!passwordShown ? (
            <BsEye
              onClick={togglePassword}
              className="inline-block absolute cursor-pointer ml-[11%] text-dodger-blue text-2xl mt-[-5px]"
            />
          ) : (
            <BsEyeSlash
              onClick={togglePassword}
              className="inline-block absolute cursor-pointer ml-[11%] text-dodger-blue text-2xl mt-[-7px]"
            />
          )}
        </div>
        
        <div className="text-gray-700   text-xs mt-1">
          Passwords must have at least 8 characters, upper and lower case, with
          at least 1 number and 1 special character.
        </div>
        <p className="bg-rose-100 text-red">{errors['password']}</p>
        <div className=" bg-gray-400 rounded-full my-4 text-center">
          <button
            className="text-lg font-semibold text-center py-4  text-white "
            type="submit"
          >
            LOG IN
          </button>
        </div>
        <div className="text-center">
          <a
            className="text-md font-semibold text-denim text-center"
            href="/forgot-password?partner_code=CUSA"
          >
            Forgot Password?
          </a>
        </div>
        <hr className="w-full border-ghost my-4"></hr>
        <div className=" rounded-full my-4 text-center border border-denim mt-6">
          <button
            className=" uppercase text-lg font-semibold text-center py-4 text-denim "
            onClick={handleCreateAccount}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
