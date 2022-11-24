import React, { useState,useEffect } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useValidation } from "../../../hooks/Validation";
import { handleSignup } from "../../../Store/loginSlice";

const Signupform = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
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
    console.log(error, isError)
    return isError;
  }

  const submitForm = (e) => {
    e.preventDefault();
    if(!verify()) {
      const {email, password} = form;
      dispatch(handleSignup({email, password}));
     
    }
  };

  
  // const { isAuthenticated } = useSelector((state) => state.user);
  // console.log("user", isAuthenticated);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/profile/myaccount");
  //   }
  // }, [isAuthenticated]);

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
        <p className="bg-rose-100 text-red">{errors['email']}</p>
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
        <p className="bg-rose-100 text-red">{errors['password']}</p>
        <p className="text-xs ">
          Passwords must have at least 8 characters, upper and lower case, with
          at least 1 number and 1 special character.
        </p>
        <div class="flex items-center ">
          <input
          id='checker'
            type="checkbox"
            checked={agree}
            onChange={() => setAgree((prev) => !prev)}
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
          id='register'
        >
          Create An Account
        </button>
        <div className="flex flex-row justify-between items-center bg-gray-100 px-4 py-3 w-full rounded-md mt-1">
          <div className="font-semibold text-base">Already have an account</div>
          <button
            className=" border border-dodger-blue bg-white text-dodger-blue font-semibold rounded-full uppercase px-6 py-1 focus:outline-none"
            onClick={()=> navigate("/login")}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signupform;
