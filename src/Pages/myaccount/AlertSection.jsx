
import React, {useState} from "react";
import { AiFillSetting } from "react-icons/ai";
import Arrow from "../../assets/images/svg/arrow.svg";
import Sod from "../../assets/images/svg/sod.svg";
import Delete from "../../assets/images/svg/deleteNoti.svg";
import { deleteAlert } from "../../store/alertSlice";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import DeleteAlert from "../../components/modals/DeleteAlert";

const AlertSection = () => {
  const [showMyModel, setShowMyModel]= useState(false);
  const handleOnClose=()=> setShowMyModel(false);
  const dispatch = useDispatch();
  const { alert } = useSelector((state) => state.alert);

  const handleRemoveAlert = (id) => {
    dispatch(deleteAlert(id));
  };

  return (
    <div>
      <div className="col-span-2 lg:mt-8">
        <div className="flex justify-between items-center flex-row">
          <h1 className="text-endeavour text-2xl lg:text-3xl font-medium uppercase">
            MY Alerts
          </h1>
          <a href="/profile/settings?partner_code=CUSA">
            <div className="flex items-center text-dodger-blue space-x-2 cursor-pointer">
              <AiFillSetting className="h-5 w-5" />
              <span>My Alert Settings</span>
            </div>
          </a>
        </div>
        <span>You can receive notifications on routes you travel</span>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5">
        {
          _.map(alert, (row, i) => {
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
                    <button onClick={()=>showMyModel(true)}>
                      <img alt="delete" src={Delete} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <DeleteAlert visible={showMyModel} onClose={handleOnClose} />
    </div>
  );
};

export default AlertSection;
