import React from 'react'
import { AiFillSetting } from "react-icons/ai";
import NoNotificationSvg from  '../../assets/images/svg/no-notification.svg';
import { Link } from 'react-router-dom';
const AlertSection0 = () => {
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
      <div className='shadow-lg border rounded-md mt-6 py-8'>
        <div className='flex flex-col justify-center items-center min-h-[371px] space-y-6'>
        <img alt='No-Notification' src={NoNotificationSvg} className="h-[86px] w-[86px]"/>
        <h1 className='font-semibold text-2xl text-gray-800'>Currently you have no alerts</h1>
        <h4 className='font-normal text-gray-800'>Visit Alert Settings to set up alerts</h4>
        </div>
      </div>
    </div>
  )
}

export default AlertSection0