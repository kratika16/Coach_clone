import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addCard } from "../../../Store/paymentSlice";
import { useValidation } from "../../../hooks/Validation";
import SelectWithFloatLabel from "../../../lib/SelectWithFloatLabel";
import { Countries } from "../../../assets/data/Countries";
import { States } from "../../../assets/data/States";
import { PhoneCodes } from "../../../assets/data/PhoneCodes";
import { Months } from "../../../assets/data/Months";
import { YearList } from "../../../assets/data/Year";
import { CardTypes } from "../../../assets/data/CardTypes";
import { get } from "lodash";
const AddCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [suite, setSuite] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [cardnum, setCardNum] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [pcode, setPcode] = useState(+1);
  const [pnumber, setPnumber] = useState("");
  const [cardtype, setCardType] = useState("");
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const {
    isValidName,
    isValidLastname,
    isValidZipcode,
    isValidCardnum,
    isValidPnumber,

  } = useValidation();

  const { isdataonCard } = useSelector((state) => state.card);

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
    if (!isValidZipcode(zip)) {
      error["zip"] = "Please enter valid Zipcode";
      isError = true;
    }
    if (!isValidCardnum(cardnum)) {
      error["cardnum"] = "Please enter valid cardnumber";
      isError = true;
    }
    if (!isValidPnumber(pnumber)) {
      error["pnumber"] = "Please enter valid phone number";
      isError = true;
    }
    
    setErrors(error);
    return isError;
  };

  useEffect(() => {
    if (isdataonCard) {
      navigate("/profile/mypaymentmethods?partner_code=CUSA");
    }
  }, [isdataonCard]);
  
  const CT= get(cardtype, "value")
  const Cntry = get(country, "value")
  const Ste = get(state,"value")
  const MM= get(month, "value")
  const YY= get(year, "value")
  const Pc = get(pcode, "value")
  const data = {
   
    id: Math.floor(Math.random()*100),
    firstName: firstName,
    lastName: lastName,
    address: address,
    suite: suite,
    country: Cntry,
    state: Ste,
    city: city,
    zip: zip,
    cardnum: cardnum,
    cardtype: CT,
    month: MM,
    year: YY,
    pcode: pcode,
    pnumber: pnumber,
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    if (!verify(data)) {
      dispatch(addCard(data));
    }
  };
  const handlePcodeChange = (abc) => {
    console.log(abc);
    setPcode(abc);
    console.log(abc.label);
  };
  const [id, setID] = useState("");

  const handleCountry = (a) => {
    setCountry(a);
    const setid = a.id;
    console.log("id", setid);
    console.log(a.label);
    setID(a.id);
  };
  console.log(id);

  const StateFilter = States.filter((x) => x.country_id === id);
  console.log("States", StateFilter);

  const handleState = (a) => {
    setState(a);
    console.log("state", a);
  };
  const handleMonthChange = (a) => {
    setMonth(a);
  };
  const handleYearChange = (a) => {
    setYear(a);
  };
  const handleCardTypeChange = (a)=>{
    setCardType(a);
  }

  const handleCancelClick= (e)=>{
    e.preventDefault();
    navigate("/profile/mypaymentmethods?partner_code=CUSA");
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-4">
          <div className="flex flex-col">
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

              <label for="firstname-input" className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                First Name*
              </label>
            </div>
            <span className="bg-rose-100 text-red text-xs ">
              {errors["firstName"]}
            </span>
          </div>
          <div className="flex flex-col">
            <div className="relative border border-ghost rounded ">
              <input
               id="lastname-input"
                type="text"
                className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                placeholder=" "
                name="lastname"
                onChange={(e) => {
                  setLastName(e.target.value); setDisabled(false);
                }}
              />
              <label for="lastname-input" className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Last Name*
              </label>
            </div>
            <span className="bg-rose-100 text-red text-xs ">
              {errors["lastName"]}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="relative border border-ghost rounded ">
            <input
             id="address-input"
              type="text"
              className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
              placeholder=" "
              onChange={(e) => {
                setAddress(e.target.value); setDisabled(false);
              }}
            />
            <label for="address-input" className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Billing Address*
            </label>
          </div>

          <div className="relative border border-ghost rounded ">
            <input
             id="suite-input"
              type="text"
              className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
              placeholder=" "
              onChange={(e) => {
                setSuite(e.target.value); setDisabled(false);
              }}
            />
            <label for="suite-input" className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Suite/Apt (optional)
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <SelectWithFloatLabel
            inputId={"country"}
            labelText={"Country*"}
            options={Countries}
            labelFontSize="text-sm lg:text-base"
            onChange={handleCountry}
            value={country}
          />
          <SelectWithFloatLabel
            inputId= {"state"}
            labelText={"State*"}
            options={StateFilter}
            labelFontSize="text-sm lg:text-base"
            value={state}
            onChange={handleState }
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <div className="relative border border-ghost rounded ">
              <input
               id="city-input"
                type="text"
                className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                placeholder=" "
                name="city"
                onChange={(e) => {
                  setCity(e.target.value); setDisabled(false);
                }}
              />
              <label for="city-input" className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                City/Town*
              </label>
            </div>
            <span></span>
          </div>
          <div className="flex flex-col">
            <div className="relative border border-ghost rounded ">
              <input
                id="zip-input"
                type="text"
                className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                placeholder=" "
                name="zip"
                onChange={(e) => {
                  setZip(e.target.value); setDisabled(false);
                }}
              />
              <label for="zip-input" className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Postal/Zip Code*
              </label>
            </div>
            <span className="bg-rose-100 text-red text-xs ">
              {errors["zip"]}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <div className="relative border border-ghost rounded ">
              <input
               id="cardnum-input"
                type="text"
                className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                placeholder=" "
                name="cardnum"
                onChange={(e) => {
                  setCardNum(e.target.value); setDisabled(false);
                }}
              />
              <label for="cardnum-input" className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Credit Card Number*
              </label>
            </div>
            <span className="bg-rose-100 text-red text-xs ">
              {errors["cardnum"]}
            </span>
          </div>
          <div className="flex flex-col">
          <SelectWithFloatLabel
                inputId={"cardtype"}
                labelText={"Card Type"}
                options={CardTypes}
                labelFontSize="text-sm lg:text-base"
                onChange={handleCardTypeChange }
                value={cardtype}
              />
            <span></span>
          </div>
        </div>

        <span>Expiration Date</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-row">
            <div className="flex flex-col w-[50%]">
              <SelectWithFloatLabel
                inputId={"month"}
                labelText={"MM"}
                options={Months}
                labelFontSize="text-sm lg:text-base"
                defaultValue={+1}
                onChange={handleMonthChange }
                value={month}
              />
              {/* <span className="bg-rose-100 text-red text-xs mt-3">
                {errors["month"]}
              </span> */}
            </div>
            <div className="text-xl font-medium p-2">/</div>
            <div className="flex flex-col w-[50%]">
              <SelectWithFloatLabel
                inputId={"year"}
                labelText={"YY"}
                options={YearList}
                labelFontSize="text-sm lg:text-base"
                onChange={handleYearChange }
                value={year}
              />
              <span></span>
            </div>
          </div>

          <div className="flex flex-row gap-2 ">
            <div className="lg:w-[50%] w-[20%]">
              <SelectWithFloatLabel
                inputId={"phonecode"}
                labelText={"Phone Code"}
                options={PhoneCodes}
                labelFontSize="text-sm lg:text-base"
                onChange={handlePcodeChange}
                defaultInputValue= {"+1"}
                value={pcode}
              />
            </div>
            <div className="flex flex-col lg:w-full w-[80%]">
              <div className="relative border border-ghost rounded">
                <input
                  id="pnumber-input"
                  type="text"
                  className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                  placeholder=" "
                  name="pnumber"
                  maxLength={10}
                  onChange={(e) => {
                    setPnumber(e.target.value);
                    setDisabled(false);
                  }}
                />
                <label for="pnumber-input" class="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Phone Number*
                </label>
              </div>
              <span className="bg-rose-100 text-red text-xs ">
                {errors["pnumber"]}
              </span>
            </div>
          </div>
        </div>

        <div className="relative border border-ghost rounded mb-4">
          <input
            id="name-input"
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
          />
          <label for="name-input" className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Name(optional)
          </label>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 mx-12">
          <button
            className="mr-4 disabled:cursor-default font-semibold text-white uppercase rounded-full w-full  border-dodger-blue bg-dodger-blue px-14 py-3 disabled:bg-gray-500 disabled:border-gray-500"
            type="submit"
            disabled={disabled ? true : false}
          >
            Add card
          </button>
          <button className="ml-4 disabled:cursor-default text-dodger-blue font-semibold text-base uppercase w-full  border rounded-full border-dodger-blue px-14 py-3"
          onClick={handleCancelClick} >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCard;
