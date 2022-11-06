import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addCard } from "../../../store/paymentSlice";

const AddCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[firstName, setFirstName]= useState("");
   const[lastName, setLastName]= useState("");
   const[address, setAddress]= useState("");
   const[suite, setSuite]=useState("");
   const[country, setCountry]= useState("");
   const[state, setState]= useState("");
   const[city, setCity]=useState("");
   const[zip, setZip]= useState("");
   const[cardnum, setCardNum]= useState("");
   const[month, setMonth]= useState("");
   const[year, setYear]= useState("");
   const[pcode, setPcode]= useState("");
   const[pnumber,setPnumber]= useState("");
   const[cardtype, setCardType]= useState("");
   
   const handleAddCard = (e)=>{
     e.preventDefault();
      const data={
        id: uuidv4(),
        firstName: firstName,
        lastName: lastName,
        address:address,
        suite:suite,
        country:country,
        state: state,
        city:city,
        zip:zip,
        cardnum: cardnum,
        cardtype: cardtype,
        month: month,
        year: year,
        pcode:pcode,
        pnumber:pnumber
      }
      if(data){
        
        dispatch(addCard(data));
        navigate('/profile/mypaymentmethods?partner_code=CUSA');
      }
      console.log("data", data);
   }
  return (
    <div>
      <div className="flex mb-6 flex-col">
        <h1 className="text-endeavour text-2xl lg:text-3xl font-normal uppercase">
          Manage
        </h1>
        <span>Save a Payment Method</span>
      </div>
      <form onSubmit={handleAddCard}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="relative border border-ghost rounded ">
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            name="firstname"
            required
            value={firstName}
            onChange={(e)=>{setFirstName(e.target.value);
            }}
          />
          <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            First Name*
          </label>
        </div>
        
        <div className="relative border border-ghost rounded ">
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            name="lastname"
            required
            onChange={(e)=>{setLastName(e.target.value);
            }}
          />
          <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Last Name*
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="relative border border-ghost rounded ">
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            required
            onChange={(e)=>{setAddress(e.target.value);
            }}
          />
          <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Billing Address*
          </label>
        </div>
        <div className="relative border border-ghost rounded ">
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            onChange={(e)=>{setSuite(e.target.value);
            }}
          />
          <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Suite/Apt (optional)
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="relative border border-ghost rounded ">
        <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            required
            onChange={(e)=>{setCountry(e.target.value);
            }}
          />
          <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Country*
          </label>
        </div>
        <div className="relative border border-ghost rounded ">
        <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            required
            onChange={(e)=>{setState(e.target.value);
            }}
          />
          <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            State/Province*
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="relative border border-ghost rounded ">
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            name="city"
            required
            onChange={(e)=>{setCity(e.target.value);
            }}
          />
          <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            City/Town*
          </label>
        </div>
        <div className="relative border border-ghost rounded ">
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            name="zip"
            required
            onChange={(e)=>{setZip(e.target.value);
            }}
          />
          <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Postal/Zip Code*
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="relative border border-ghost rounded ">
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            name="cardnum"
            required
            onChange={(e)=>{setCardNum(e.target.value);
            }}
          />
          <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Credit Card Number*
          </label>
        </div>
        <div className="relative border border-ghost rounded ">
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            required
            onChange={(e)=>{setCardType(e.target.value);
            }}
          />
          <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Card Type*
          </label>
        </div>
      </div>
      <span>Expiration Date</span>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-row">
          <div className="relative border border-ghost rounded lg:w-full w-[50%]">
            <input
              type="text"
              className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
              placeholder=" "
              required
              onChange={(e)=>{setMonth(e.target.value);
              }}
            />
            <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              MM*
            </label>
          </div>
          <div className="text-xl font-medium p-2">/</div>
          <div className="relative border border-ghost rounded lg:w-full w-[50%]  ">
            <input
              type="text"
              className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
              placeholder=" "
              required
              onChange={(e)=>{setYear(e.target.value);
              }}
            />
            <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              YY*
            </label>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="relative border border-ghost rounded lg:w-full w-[40%] mr-2">
            <input
              type="text"
              className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
              placeholder=" "
              required
              onChange={(e)=>{setPcode(e.target.value);
              }}
            />
            <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Phone Code*
            </label>
          </div>

          <div className="relative border border-ghost rounded lg:w-full w-[60%]  ">
            <input
              type="text"
              className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
              placeholder=" "
              name="pnumber"
              maxLength={10}
              required
              onChange={(e)=>{setPnumber(e.target.value);
              }}
            />
            <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Phone Number*
            </label>
          </div>
        </div>
      </div>
      <div className="relative border border-ghost rounded mb-4">
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
          />
          <label class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Name(optional)
          </label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 mx-12">
            <button className="mr-4 disabled:cursor-default font-semibold text-white uppercase rounded-full w-full  border-dodger-blue bg-dodger-blue px-14 py-3 disabled:bg-gray-500 disabled:border-gray-500"
                type="submit">
                    Add card
            </button>
            <button className="ml-4 disabled:cursor-default text-dodger-blue font-semibold text-base uppercase w-full  border rounded-full border-dodger-blue px-14 py-3">
                    Cancel
            </button>
        </div>
        </form>
    </div>
  );
};

export default AddCard;
