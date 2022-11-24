import React from 'react'
import { Link } from 'react-router-dom';
import Wallet from '../../../assets/images/svg/wallet.svg';
const PaymentPage = () => {
  return (
    <div className='ml-4'>
      <div className='col-span-2'>
        <div className= 'container mx-auto mb-8'>
          <div className='flex mb-6 flex-col'>
            <h1 className='text-endeavour text-2xl lg:text-3xl font-medium capitalize lg:uppercase'>Manage</h1>
            <span>You have no Payment Method</span>
          </div>
          <div className='container mb-4 p-4 border-b-1'>
            <img alt='wallet' src={Wallet}/>
          </div>
          <div className='border-b'/>
          <div className='mt-4'>
            <Link className='disabled:cursor-default font-bold text-base text-white uppercase border rounded-full border-dodger-blue bg-dodger-blue px-14 py-3 ' to='/addcard'>
              ADD CArd
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage