import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSetting } from "../../Store/alertsettingSlice";
import AlertSettingPopup from "../modals/AlertSettingPopup";
import SelectWithFloatLabel from "../../lib/SelectWithFloatLabel";
import { PhoneCodes } from "../../assets/data/PhoneCodes";
const Display = ({ row, i, handleEditClick }) => {
  const [deleteID, setDeleteID] = useState();
  const [pcode, setPcode] = useState(+1);
  const [pnumber, setPnumber] = useState("");
  const [showMyModel, setShowMyModel] = useState(false);
  const dispatch = useDispatch();
  const handleOnClose = () => setShowMyModel(false);
  const handleDelete = (id) => {
    setDeleteID(id);
    setShowMyModel(true);
  };
  console.log(deleteID);

  const handleDeleteItem = () => {
    return (
      console.log(deleteID),
      dispatch(deleteSetting(deleteID)),
      setShowMyModel(false)
    );
  };
  const handlePcodeChange = (abc) => {
    setPcode(abc);
    console.log(abc.label);
  };
  return (
    <div>
      <div key={i}>
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-row ">
            <div className="relative bg-gray-200 rounded z-1  lg:w-[110px] w-[40%] mr-2 ">
              <SelectWithFloatLabel
                inputId={"phonecode"}
                labelText={""}
                options={PhoneCodes}
                labelFontSize="text-sm lg:text-base"
                onChange={handlePcodeChange}
                value={row.pcode}
                isDisabled
              />
            </div>

            <div className="relative z-1 border border-ghost rounded bg-gray-200 lg:w-[230px] w-[60%]  ">
              <input
                type="text"
                className=" focus: ring-sky-500 focus:ring-1 block pt-6 px-4 pb-0 w-full bg-gray-200 text-base text-gray-600 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                placeholder=" "
                name="pnumber"
                value={row.pnumber}
                maxLength={10}
                required
                disabled
              />
              <label className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-9 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Phone Number
              </label>
            </div>
          </div>
          <div className="flex  flex-row lg:gap-16  ">
            <button
              className=" cursor-pointer text-blue-500 font-medium text-sm underline lg:ml-4 "
              onClick={(event) => handleEditClick(event, row)}
            >
              Edit_Phone_Number
            </button>
            <button
              className="cursor-pointer text-orange font-medium text-sm underline ml-auto"
              onClick={() => handleDelete(row.setid)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <AlertSettingPopup
        visible={showMyModel}
        onClose={handleOnClose}
        onDelete={handleDeleteItem}
      />
    </div>
  );
};

export default Display;
