import React,{useEffect,useState} from "react";
import {BsEye,BsEyeSlash} from "react-icons/bs"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import validator from 'validator'
import {login} from '../../store/loginSlice';
const Form = () => {

  const [form,setForm]=useState({
    email:"",
    password:"",
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const[error,setError]=useState({});
  const[isSubmit,setIsSubmit]=useState(false);

  const Validate=(values)=>{

    const error={};
    const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if(!values.email){
        error.email="Email is required"
    }else if(!regex.test(values.email)){
       error.email="This is not valid email format";
    }
    if(!values.password){
        error.password="Password is required";
    }else if(!passwordregex.test(values.password)){
        error.password="Please Enter Valid Password";
    }
    return error;

}

useEffect(()=>{
 // console.log("error",error);
  if(Object.keys(error).length === 0 && isSubmit ){
      console.log("value",form);
  }

},[form])

  const submitForm=(e)=>{
    
    setError(Validate(form));
    setIsSubmit(true);
    dispatch((login(form)));
    navigate('/home');

    const data={
      email:form.email,
      password:form.password,
    }
    if(data){
      console.log('login-details',data)
    }
  
  }

  
  const HandleChange=(event)=>{
    const{name,value}=event.target;
     setForm((prevState)=>{
     return{
         ...prevState,[name]:value,
     
     }
     } );
  };


  const togglePassword = () => {
    setPasswordShown(!passwordShown);
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
            className=" outline-none"
            onChange={HandleChange}
            value={form.email}
          />
        </div>
        <p className=" text-red-600 ml-1 ">{error.email}</p>
        <div className="border  rounded-lg bg-white mt-4  p-2">
          <p className="text-denim text-xs">Password*</p>
          <input
            type={passwordShown ? "text" : "password"}
            name='password'
            placeholder="Enter your password"
            className=" outline-none"
            onChange={HandleChange}
            value={form.password}
          />
          {!passwordShown ? <BsEye onClick={togglePassword} className="inline-block absolute cursor-pointer ml-[11%] text-dodger-blue text-2xl mt-[-5px]"/>:<BsEyeSlash onClick={togglePassword} className="inline-block absolute cursor-pointer ml-[11%] text-dodger-blue text-2xl mt-[-7px]"/>}
        </div>
        <p className=" text-red-600 ml-1 ">{error.password}</p>
        <div className="text-gray-700   text-xs mt-1">
          Passwords must have at least 8 characters, upper and lower case, with
          at least 1 number and 1 special character.
        </div>
        <div className=" bg-gray-400 rounded-full my-4 text-center">
          <button className="text-lg font-semibold text-center py-4  text-white " type="submit">
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
          <button className=" uppercase text-lg font-semibold text-center py-4 text-denim ">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
