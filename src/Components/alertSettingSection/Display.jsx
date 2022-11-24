import _ from "lodash";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSetting } from "../../Store/alertsettingSlice";
import AlertSettingPopup from "../modals/AlertSettingPopup";

const Display = () => {
  const [showMyModel, setShowMyModel]= useState(false);
  const handleOnClose =()=> setShowMyModel(false);
  const dispatch = useDispatch();
  const { setting } = useSelector((state) => state.setting);
  const [deleteID, setDeleteID]= useState();
  const handleDelete = (id) => {
    setDeleteID(id);
    setShowMyModel(true)
  }
  console.log(deleteID);

  const handleDeleteItem=()=>{
    return(
      console.log(deleteID),
      dispatch(deleteSetting(deleteID)),
      setShowMyModel(false)
    )
  }
  return (
    <div className="grid bg-grey px-5 py-6 grid-cols-1 lg:grid-cols-3">
      <div className="text-xl font-semibold">
        Please update your mobile number for text SMS alert service.
      </div>
      {setting.length &&
        _.map(setting, ((row, i) => {
          return (
            <div key={i}>
              <div className="flex lg:flex-row flex-col">
                <div className="flex flex-row ">
                  <div className="relative border border-ghost rounded lg:w-[110px] w-[40%] mr-2">
                    <input
                      type="text"
                      className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-gray-200 text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                      placeholder=" "
                      required
                      value={row.pcode}
                      disabled
                    />
                    <label class="hidden absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-1 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Phone Code*
                    </label>
                  </div>

                  <div className="relative border border-ghost rounded lg:w-[230px] w-[60%]  ">
                    <input
                      type="text"
                      className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-gray-200 text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none  peer "
                      placeholder=" "
                      name="pnumber"
                      value={row.pnum}
                    
                      required
                      disabled
                    />
                    <label class="absolute text-base  text-endeavour dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-1 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Phone Number
                    </label>
                  </div>
                </div>
                <div className="flex  flex-row lg:gap-16  ">
                  <Link to= {`/edit-setting/${row.setid}`} className="lg:mt-4 lg:ml-12">
                  <button className=" cursor-pointer text-blue-500 font-medium text-sm underline  ">
                    Edit_Phone_Number
                  </button></Link>
                  <button
                    className="cursor-pointer text-orange font-medium text-sm underline ml-auto"
                    onClick={() => handleDelete(row.setid)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        }))}
        <AlertSettingPopup visible={showMyModel} onClose={handleOnClose} onDelete={handleDeleteItem}/>
    </div>
  );
};

export default Display;
