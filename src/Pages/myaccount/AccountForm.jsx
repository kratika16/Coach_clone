import React, { useMemo, useState } from "react";
import Select from "react-select";

const AccountForm = () => {
  const option = [
    {
      name: "United States",
      label: "+1",
      value: "+1",
      code: "US",
    },
    {
      name: "Afghanistan",
      label: "+93",
      value: "+93",
      code: "AF",
    },
    {
      name: "Aland Islands",
      label: "+358",
      value: "+358",
      code: "AX",
    },
    {
      name: "Albania",
      label: "+355",
      value: "+355",
      code: "AL",
    },
    {
      name: "Algeria",
      label: "+213",
      value: "+213",
      code: "DZ",
    },
    {
      name: "AmericanSamoa",
      label: "+1684",
      value: "+1684",
      code: "AS",
    },
  ];
  const styles = useMemo(() => ({
    control: (style, { isDisabled }) => ({
      ...style,
      boxShadow: "none",
      borderColor: " hsl(0 0% 100%)",
      ":hover": {
        ...style[":hover"],
        backgroundColor: "hsl(0 0% 100%)",
        borderColor: "hsl(0 0% 100%)",
      },
      ":focus": {
        ...style[":focus"],
        borderColor: "rgb(59 130 246)",
      },
    }),
    placeholder: (style) => ({
      ...style,
      color: "#000000",
    }),
  }));
  const [codes, setCodes] = useState("");
  const handleChange = (abc) => {
    setCodes(abc);
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="relative border border-ghost rounded ">
          <label class="absolute text-xs  text-blue-500 dark:text-gray-400 px-4 pt-1 pb-2">
            First Name*
          </label>
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4  w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            name="firstname"
            defaultValue="Kratika"
            required
          />
        </div>
        <div className="relative border border-ghost rounded ">
          <label class="absolute text-xs  text-blue-500 dark:text-gray-400 px-4 pt-1 pb-2">
            Last Name*
          </label>
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
            placeholder=" "
            name="lastname"
            defaultValue="Yadav"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="relative border border-ghost rounded bg-gray-200">
          <label class="absolute text-xs  text-blue-500 dark:text-gray-400 px-4 pt-1 pb-2">
            Email Address*
          </label>
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600 bg-gray-200 focus:outline-none  peer "
            placeholder=" "
            name="email"
            defaultValue="Kratika@gmail.com"
            required
            disabled
          />
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-1.5 lg:gap-4">
          <div className=" border border-ghost rounded ">
            <label class=" xl:text-xs mx-lg:text-xs text-[10px] pl-1 text-blue-500 dark:text-gray-400  ">
              Phone Code
            </label>
            <Select
              placeholder="+1"
              options={option}
              value={codes}
              defaultValue={+1}
              onChange={handleChange}
              styles={styles}
            />
          </div>
          <div className="col-span-2">
          <div className="relative border border-ghost rounded ">
          <label class="absolute xl:text-xs mx-lg:text-xs text-[10px]  text-blue-500 dark:text-gray-400 xl:px-4 mx-lg:px-4 px-2 pt-1 ">
            Phone Number(optional)
          </label>
          <input
            type="text"
            className=" focus: ring-sky-500 focus:ring-1 block p-4 w-full h-16 bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  "
            placeholder=" "
            name="phonenumber"
            defaultValue="198-647-9152"
            required  
          />
        </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-4 mx-12 lg:justify-evenly justify-center">
        <button className=" disabled:cursor-default text-dodger-blue font-semibold text-base uppercase w-full  border rounded-full border-dodger-blue px-14 py-3">
          Cancel
        </button>
        <button
          className=" disabled:cursor-default font-semibold text-white uppercase rounded-full w-full  border-dodger-blue bg-dodger-blue px-14 py-3 disabled:bg-gray-500 disabled:border-gray-500"
          disabled
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AccountForm;
