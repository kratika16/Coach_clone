import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import Arrow from "../../assets/images/svg/arrow.svg";
import Sod from "../../assets/images/svg/sod.svg";
import Delete from "../../assets/images/svg/deleteNoti.svg";
import { deleteAlert } from "../../Store/alertSlice";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import DeleteAlertPopup from '../../Components/modals/DeleteAlertPopup';
import { Link } from "react-router-dom";
const AlertSection = () => {
  const [showMyModel, setShowMyModel]= useState(false);
  const handleOnClose =()=> setShowMyModel(false);
  const dispatch = useDispatch();
  const { alert } = useSelector((state) => state.alert);
  const [deleteID, setDeleteID]= useState();

  const handleDelete=(id)=>{
    setDeleteID(id);
    setShowMyModel(true)
  }
  console.log(deleteID);
  const handleDeleteItem= ()=>{
    return(
        console.log(deleteID),
        dispatch(deleteAlert(deleteID)),
        setShowMyModel(false)
    )
}

  return (
    <div>
      <div className="col-span-2 lg:mt-8">
        <div className="flex justify-between items-center flex-row">
          <h1 className="text-endeavour text-2xl lg:text-3xl font-medium uppercase">
            MY Alerts
          </h1>
          <Link to="/profile/settings?partner_code=CUSA">
            <div className="flex items-center text-dodger-blue space-x-2 cursor-pointer">
              <AiFillSetting className="h-5 w-5" />
              <span>My Alert Settings</span>
            </div>
          </Link>
        </div>
        <span>You can receive notifications on routes you travel</span>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5">
        {_.map(alert, (row, i) => {
          return (
            <div key={i}>
              <div className="flex space-y-3 p-4 bg-white shadow-2xl border rounded-md flex-col">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row">
                    <img alt="arrow" src={Arrow} className="pr-3" />
                    <img alt="sod" src={Sod} className="pr-3" />
                    <div className="flex flex-col space-y-1.5">
                      <h4 className="font-semibold text-sm uppercase">
                        {row.origin}
                      </h4>
                      <h4 className="font-semibold text-sm uppercase">
                        {row.destination}
                      </h4>
                    </div>
                  </div>
                  <button onClick={()=>handleDelete(row.alertid)}>
                    <img alt="delete" src={Delete}/>
                  </button>
                </div>
              </div>
            </div>
            //handleDelete(row.alertid)
          );
        })}
      </div>
      <DeleteAlertPopup visible={showMyModel} onClose={handleOnClose} onDelete={handleDeleteItem} id={deleteID}/>
    </div>
  );
};

export default AlertSection;
