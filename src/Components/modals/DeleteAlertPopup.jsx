import _ from 'lodash';
import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Delete from '../../assets/images/svg/delete.svg';
const DeleteAlert = ({visible, onClose, onDelete, id}) => {
    const {alert}= useSelector((state)=>state.alert);
    console.log(alert);
    console.log(id);
    const abc=_.filter(alert, (o)=>o.alertid===id);
    console.log(abc);
    const handleorigin = _.map(abc, "origin");
    console.log(handleorigin);
    const handledestination= _.map(abc,"destination");
    console.log(handledestination);
    if(!visible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-xs flex justify-center items-center'>
       <div className='flex border-0 rounded-2xl shadow-lg bg-white outline-none flex-col'>
       <button className='ml-auto px-4 py-3' onClick={onClose}><AiOutlineClose/></button>
       <div className='flex justify-start items-center w-full lg:w-[500px] mb-3 lg:mb-0 h-full lg:h-[450px] px-4 lg:px-2 flex-col'>
        <img alt='delete' src={Delete} className='h-20 w-20 mx-auto  p-0'/>
        <h2 className='font-semibold text-2xl text-center mt-2 text-gray-700'>Do you want to delete this route for travel alerts?</h2>
        <h2 className='font-normal text-center mt-2'>If deleted, you will no longer receive alerts related to this route.</h2>
        <div className='grid grid-cols-4 lg:grid-cols-5 gap bg-blue-100 p-4 w-full mt-5'>
            <div className='flex items-start justify-center text-xs font-medium space-y-3 flex-col'>
                <span>Origin</span>
                <span>Destination</span>
            </div>
            <div className='flex items-start uppercase justify-center col-span-3 lg:col-span-4 text-sm font-semibold space-y-2 flex-col'>
                <span>{handleorigin}</span>
                <span>{handledestination}</span>
            </div>
        </div>
        <div className='flex space-x-7 mt-4 lg:mt-12 flex-row'>
            <button className='bg-dodger-blue border border-dodger-blue rounded-full text-white py-3 font-semibold uppercase w-[140px] lg:w-[198px]'
            onClick={onDelete}>
                Delete
            </button>
            <button className='text-dodger-blue border border-dodger-blue rounded-full py-3 font-semibold uppercase w-[140px] lg:w-[198px]'
            onClick={onClose}>
                Cancel
            </button>
        </div>
       </div>
       </div>
    </div>
  )
}

export default DeleteAlert