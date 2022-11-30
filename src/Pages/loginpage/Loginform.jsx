import React from 'react'
import Form from '../loginpage/form';
const Loginform = () => {
  return (
    <div className=' flex flex-col lg:items-center'>
        <h1 className='uppercase text-center items-center font-semibold text-2xl mt-6 text-gray-900 mx-md:pt-16'>
            LOG IN OR CREATE A NEW ACCOUNT</h1>
        <p className='text-center items-center text-md font-medium lg:px-48 px-1 mt-6 text-gray-800'>
            Your Coach USA account allows you to easily to
             book and retrieve tickets.</p>
        <div className='items-center '>
            <Form/>
        </div>
    </div>
  )
}

export default Loginform