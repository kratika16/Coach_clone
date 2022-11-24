import React from "react";
import {AiOutlineClose} from 'react-icons/ai';

const DeleteCardpopus = ({visible, onClose, onDelete}) => {
  if(!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-xs flex justify-center items-center">
      <div className="bg-white  rounded-sm p-8">
        <AiOutlineClose className="ml-96 cursor-pointer" onClick={onClose}/>
        <h2 className="text-endeavour uppercase font-normal text-lg text-center">Do you want to delete this card?</h2>
        <p className="text-gray-800 text-xs text-center py-2">If so, this card will no longer be available in your profile.</p>
        <div className='border-b-2 border-gray-300  pb-4'/>
        <div className="flex flex-row pt-4">
        <button className="mr-2 disabled:cursor-default font-semibold text-white uppercase rounded-full w-full  border-dodger-blue bg-dodger-blue px-14 py-3 disabled:bg-gray-500 disabled:border-gray-500"
                type="submit" onClick={onDelete}>
                    Delete
            </button>
            <button className="ml-2 disabled:cursor-default text-dodger-blue font-semibold text-base uppercase w-full  border rounded-full border-dodger-blue px-14 py-3" onClick={onClose}>
                    Cancel
            </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCardpopus;
