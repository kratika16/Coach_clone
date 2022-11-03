import React from 'react'

const PaymentTable = () => {
  return (
    <div>
        <div className="flex mb-6 flex-col">
              <h1 className="text-endeavour text-2xl lg:text-3xl font-medium uppercase">
                Manage
              </h1>
              <span>To manage a card, please delete and add it again</span>
        </div>
        <table>
            <thead className='bg-white text-black'>
                <tr>
                    <th scope='col'>Name on card</th>
                    <th scope='col'>Payment Method</th>
                    <th scope='col'>Expires</th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>
  )
}

export default PaymentTable