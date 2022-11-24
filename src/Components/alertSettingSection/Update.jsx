import { filter, find, get, toNumber } from "lodash";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editSetting } from "../../Store/alertsettingSlice";
import { useValidation } from "../../hooks/Validation";
import Footer from '../../Components/footer/index';
import Section from './section';
const Update = () => {
    const [pcode, setPcode]= useState("");
    const [pnum, setPnum]= useState("");

    const oldData= useSelector((state)=>state.setting);
    const {pathname}= useLocation();
    const navigate= useNavigate();
    const dispatch= useDispatch();

    const [errors, setErrors] = useState({});

    const {
      isValidPnumber,
    } = useValidation();
  
    const verify = () => {
      const error = {};
      let isError = false;
     
      if (!isValidPnumber(pnum)) {
        error["phNumber"] = "Please enter valid phone number";
        isError = true;
      }
      
      setErrors(error);
      return isError;
    };

    useEffect(()=>{
        const id= parseInt(pathname.replace("/edit-setting/",""));
        console.log("id",id)
        const currentdata= find(
            filter(
                get(oldData, "setting"),(o)=>toNumber(o.setid)===(id)
            )
        );
        console.log("current",currentdata);
        setPcode(currentdata.pcode);
        setPnum(currentdata.pnum);
    },[]);
    
    const handleUpdate= (e)=>{
        e.preventDefault();
        const dataset={
            setid: parseInt(pathname.replace("/edit-setting/","")),
            pcode:pcode,
            pnum:pnum,
        }
        if(!verify(dataset)){
            dispatch(editSetting(dataset));
        }
        console.log("editeddata",dataset)
        navigate("/profile/settings?partner_code=CUSA")
    }
  return (
    
      <div className="grid bg-grey px-5 py-6 grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="text-xl font-semibold">
          Please update your mobile number for text SMS alert service.
        </div>
        <form onSubmit={handleUpdate}>
          <div className="flex lg:flex-row flex-col ">
            <div className="flex flex-row gap-2">
              <div className="relative border border-ghost rounded lg:w-[110px] w-[40%] mr-2">
                <input
                  type="text"
                  className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  required
                  value={pcode}
                  onChange={(e) => {
                    setPcode(e.target.value);
                  }}
                />
                <label class="absolute text-base  text-endeavour duration-300 transform -translate-y-4 scale-75 top-4 z-1 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Phone Code
                </label>
              </div>
               <div className="flex flex-col">
              <div className="relative border border-ghost rounded lg:w-[230px] w-[60%]  ">
                <input
                  type="text"
                  className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  name="pnumber"
                  value={pnum}
                  onChange={(e) => {
                    setPnum(e.target.value);
                  }}
                />
                <label class="absolute text-base  text-endeavour duration-300 transform -translate-y-4 scale-75 top-4 z-1 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Phone Number
                </label>
              </div>
              <span className="bg-rose-100 text-red text-xs ">
              {errors["phNumber"]}
            </span>
            </div>
            </div>
            <div className="flex lg:ml-8 lg:mt-0 mt-4">
              <button
                className="  cursor-pointer uppercase font-semibold text-white bg-dodger-blue rounded-full lg:my-1 lg:py-0 py-2 px-4 w-full lg:w-[170px]"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default Update;
