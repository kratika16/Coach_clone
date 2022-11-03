import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../../store/paymentSlice";

const AddCard = () => {
    const dispatch= useDispatch();
    const cardList= useSelector((state)=>state.card.value);
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
        id: Math.floor(Math.random()*100),
        firstName: firstName,
        lastName: lastName,
        cardnum: cardnum,
        cardtype: cardtype,
        month: month,
        year: year,
      }
      if(data){
        dispatch(addCard(data));
      }
      console.log("data", data);
   }
  
  return (
    <div>
      <div className="col-span-2 ">
        <div className="px-4 lg:pl-0 lg:pr-24">
          <div>
            <div className="flex mb-6 flex-col">
              <h1 className="text-endeavour text-2xl lg:text-3xl font-medium uppercase">
                Manage
              </h1>
              <span>Save a Payment Method</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-32   mb-4">
              <div className="relative border border-ghost rounded xl:w-[300px] lg:w-[250px] mx-lg:w-full">
                <input
                  type="text"
                  id="floating_filled"
                  class="block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus: ring-sky-500 focus:ring-1"
                  placeholder=" "
                  required
                  onChange={(e)=>{setFirstName(e.target.value);
                }}
                />
                <label
                  for="floating_filled"
                  className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  First Name*
                </label>
              </div>
              <div className="relative border border-ghost rounded xl:w-[300px] lg:w-[250px] mx-lg:w-full lg:ml-4 xl:ml-0">
                <input
                  type="text"
                  id="floating_filled"
                  className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  required
                  onChange={(e)=>{setLastName(e.target.value);
                  }}
                />
                <label
                  for="floating_filled"
                  class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Last Name*
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-32 mb-4">
              <div className="relative border border-ghost rounded xl:w-[300px] lg:w-[250px] mx-lg:w-full">
                <input
                  type="text"
                  id="floating_filled"
                  className="focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  required
                  onChange={(e)=>{setAddress(e.target.value);
                  }}
                />
                <label
                  for="floating_filled"
                  className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Billing Address*
                </label>
              </div>
              <div class="relative border border-ghost rounded xl:w-[300px] lg:w-[250px] mx-lg:w-full lg:ml-4 xl:ml-0">
                <input
                  type="text"
                  id="floating_filled"
                  class="focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  onChange={(e)=>{setSuite(e.target.value);
                  }}
                />
                <label
                  for="floating_filled"
                  class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Suite/Apt(optional)
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-32 mb-4">
              <div class="relative border border-ghost rounded xl:w-[300px] lg:w-[250px] mx-lg:w-full">
                <input
                  type="text"
                  id="floating_filled"
                  class="focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  required
                  onChange={(e)=>{setCountry(e.target.value);
                  }}
                />
                <label
                  for="floating_filled"
                  class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Country*
                </label>
              </div>
              <div class="relative border border-ghost rounded xl:w-[300px] lg:w-[250px] mx-lg:w-full lg:ml-4 xl:ml-0">
                <input
                  type="text"
                  id="floating_filled"
                  class="focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  required
                  onChange={(e)=>{setState(e.target.value);
                  }}
                />
                <label
                  for="floating_filled"
                  class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  State/Province*
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-32 mb-4">
              <div class="relative border border-ghost rounded xl:w-[300px] lg:w-[250px] mx-lg:w-full">
                <input
                  type="text"
                  id="floating_filled"
                  class="focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  required
                  onChange={(e)=>{setCity(e.target.value);
                  }}
                />
                <label
                  for="floating_filled"
                  class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  City/Town*
                </label>
              </div>
              <div class="relative border border-ghost rounded xl:w-[300px] lg:w-[250px] mx-lg:w-full lg:ml-4 xl:ml-0">
                <input
                  type="text"
                  id="floating_filled"
                  class="focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  required
                  onChange={(e)=>{setZip(e.target.value);
                  }}
                />
                <label
                  for="floating_filled"
                  class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Postal/Zip Code*
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-32 mb-4">
              <div class="relative border border-ghost rounded xl:w-[300px] lg:w-[250px] mx-lg:w-full">
                <input
                  type="text"
                  id="floating_filled"
                  class="focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  required
                  onChange={(e)=>{setCardNum(e.target.value);
                  }}
                />
                <label
                  for="floating_filled"
                  class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Credit Card Number*
                </label>
              </div>
              <div class="relative border border-ghost rounded xl:w-[300px] lg:w-[250px] mx-lg:w-full lg:ml-4 xl:ml-0">
                <input
                  type="text"
                  id="floating_filled"
                  class="focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  required
                  onChange={(e)=>{setCardType(e.target.value);
                  }}
                />
                <label
                  for="floating_filled"
                  class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Card Type*
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-32 mb-4">
              <div className="flex flex-col">
                <span>Expiration Date</span>
                <div className="grid grid-cols-2 gap-2 relative">
                  <span className="absolute top-[18%] left-[55.5%] text-[1.5rem]">
                    /
                  </span>
                  <div class="relative border border-ghost rounded xl:w-[100px] lg:w-[60px] mx-lg:w-full">
                    <input
                      type="text"
                      id="floating_filled"
                      class="focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                      placeholder=" "
                      required
                      onChange={(e)=>{setMonth(e.target.value);
                      }}
                    />
                    <label
                      for="floating_filled"
                      class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                      MM*
                    </label>
                  </div>
                  <div class="relative border border-ghost rounded xl:w-[175px] lg:w-[160px] mx-lg:w-full ml-6">
                    <input
                      type="text"
                      id="floating_filled"
                      class="focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                      placeholder=" "
                      required
                      onChange={(e)=>{setYear(e.target.value);
                      }}
                    />
                    <label
                      for="floating_filled"
                      class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                      YY*
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 relative mt-6">
                <div class="relative border border-ghost rounded lg:w-[130px] w-full">
                  <input
                    type="text"
                    id="floating_filled"
                    class="focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                    placeholder=" "
                    required
                    onChange={(e)=>{setPcode(e.target.value);
                    }}
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Phone Code*
                  </label>
                </div>
                <div class="relative border border-ghost rounded lg:w-[160px] w-full ml-10">
                  <input
                    type="text"
                    id="floating_filled"
                    class="focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                    placeholder=" "
                    required
                    onChange={(e)=>{setPnumber(e.target.value);
                    }}
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Phone Number*
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1  mt-4 mb-4 w-[620px]">
              <div class="relative border border-ghost rounded ">
                <input
                  type="text"
                  id="floating_filled"
                  class=" block  p-4  bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                />
                <label
                  for="floating_filled"
                  class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Name (optional)
                </label>
              </div>
            </div>
            <div className="flex flex-col  space-y-4 lg:space-y-0 lg:flex-row lg:justify-center items-center lg:ml-24">
                <button className=" disabled:cursor-default font-semibold text-white uppercase rounded-full w-full lg:w-[230px] border-dodger-blue bg-dodger-blue px-14 py-3 disabled:bg-gray-500 disabled:border-gray-500"
                onClick={handleAddCard}>
                    Add card
                </button>
                <button className=" lg:ml-4 disabled:cursor-default text-dodger-blue font-semibold text-base uppercase w-full lg:w-[230px] border rounded-full border-dodger-blue px-14 py-3">
                    Cancel
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
