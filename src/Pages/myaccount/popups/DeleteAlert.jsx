import React from 'react'
import Delete from '../../assets/images/svg/deleteNoti.svg';
import { AiOutlineClose } from "react-icons/ai";
const DeleteAlert = () => {
  return (
   <>
    <div
        id="popup-modal"
        className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center mx-[450px] my-[100px] "
        aria-hidden="true"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="popup-modal"
            >
              <AiOutlineClose />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
             <img
             alt='Delete-icon'
             src={Delete}
             className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
             />
              <h3 className="mb-2 text-lg font-medium ">
                Do you want to delete this route for travel alerts?
              </h3>
              <p className="mb-4">
                <small>
                  If deleted you will no longer recieve alerts related to this
                  route
                </small>
              </p>
              <div className="bg-blue-100 mb-8">
                <div className="md:flex">
                  <div className="w-1/3 text-left">
                    <p className="text-gray-600 px-2 pt-2">
                      <small>Origin</small>
                    </p>
                  </div>
                  <div className="w-3/4 text-left">
                    <p className="text-black pt-3 text-sm">NEW YORK, NY</p>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="w-1/3 text-left">
                    <p className="text-gray-600 px-2 pb-2 ">
                      <small>Destination</small>
                    </p>
                  </div>
                  <div className="w-3/4 text-left">
                    <p className="text-black text-sm pt-1">MIDDLETOWN, NY</p>
                  </div>
                </div>
              </div>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                className="text-white bg-blue-500  focus:ring-1 focus:outline-none  font-medium rounded-3xl text-sm inline-flex items-center px-16 py-3 text-center mr-2"
              >
                Delete
              </button>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                className="text-blue-500 bg-white focus:ring-1  focus:outline-blue-500  rounded-3xl border border-blue-500 text-sm font-medium px-16 py-3 hover:text-blue-500 focus:z-10"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

   </>
  )
}

export default DeleteAlert