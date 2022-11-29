import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import Download from '../../assets/images/svg/download.svg';
import Google from '../../assets/images/svg/Google.svg';
import Apple from '../../assets/images/svg/Apple.svg';
const AlertTogglePopus = ({visible, onClose}) => {
    if(!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-xs flex justify-center items-center z-98">
       <div className='flex border-0 rounded-2xl shadow-lg bg-white outline-none flex-col '>
        <button className='ml-auto px-4 py-3' onClick={onClose}><AiOutlineClose/></button>
        <div className='flex justify-center items w-full lg:w-[500px] mb-3 lg:mb-0 h-full lg:h-[355px] px-4 lg:px-0 flex-col'>
            <img alt='Download' src={Download} className="h-20 w-20 mx-auto"/>
            <h2 className='font-semibold text-gray-700 text-2xl text-center mt-5'>
            Do you want to opt into this alert type?
            </h2>
            <h3 className='font-normal text-gray-700 text-base mt-2 text-center'>Please download the Coach USA app to receive alerts.</h3>
            <div className='flex mx-auto mt-6 flex-row gap-2'>
                <img alt='apple' src={Apple}/>
                <img alt="google" src={Google}/>
            </div>
            <button className='cursor-pointer mt-6 text-endeavour font-normal texts-sm underline mx-auto'onClick={onClose}>Close</button>
        </div>
       </div>
    </div>
  )
}

export default AlertTogglePopus