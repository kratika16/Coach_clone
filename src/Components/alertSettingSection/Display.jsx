import _ from "lodash";
import React ,{useMemo, useState}from "react";
import Select from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import { deleteSetting } from "../../store/alertsettingSlice";

const Display = () => {
  const { setting } = useSelector((state) => state.setting);
  const dispatch = useDispatch();
  const handleDelete = (id)=>{
    dispatch(deleteSetting(id));
    
}
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
      borderColor: " rgb(243 244 246)",
      backgroundColor: "rgb(243 244 246)",
      ":hover": {
        ...style[":hover"],
        backgroundColor: "rgb(243 244 246)",
        borderColor: "rgb(243 244 246)",
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
        
    <div className="grid bg-gray-100 px-5 pb-6 pt-4 grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="text-lg font-semibold text-gray-800 hidden lg:block">
        Please update your mobile number for text SMS service.
      </div>
      
        {_.map(setting, (row, i) => {
          return( <div key={i}>
        <div className="flex lg:flex-row flex-col">
        <div className="flex flex-row">
          <div className="relative border border-ghost rounded lg:w-[100px] w-[30%] mr-2">
            <Select
              placeholder="+1"
              options={option}
              value={codes}
              defaultValue={+1}
              onChange={handleChange}
              styles={styles}
              isDisabled
            />
          </div>
          <div className="relative border border-ghost rounded lg:w-[200px] w-[70%]  ">
            <label class=" text-xs  text-blue-500 dark:text-gray-400 px-1 pt-1 ">
              Phone Number
            </label>
            <div className="bg-transparent">{row.pnum}</div>
          </div>
        </div>
        <div className="flex  flex-row lg:gap-8 justify-evenly">
          <button className="mx-12  disabled:cursor-default cursor-pointer text-endeavour font-medium text-sm underline"
          >
            Edit_Phone_Number
          </button>
          <button className="mx-12 disabled:cursor-default cursor-pointer text-crimson font-medium text-sm underline"
          onClick={()=>handleDelete(row.id)}>
            Delete
          </button>
        </div>
          </div>
          </div>
          )
        })}
        
      
    </div>
    </div>
  );
};

export default Display;
