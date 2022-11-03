import card from '@material-tailwind/react/theme/components/card'
import _ from 'lodash'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import AddCard from './AddCard'
import { deleteCard } from '../../../store/paymentSlice'
const PaymentTable = () => {

    const dispatch = useDispatch();
    const {card}= useSelector((state)=>state.card);
    console.log("card data", card)

    const handleDelete = (id)=>{
        dispatch(deleteCard(id))
    }
  return (
    <div >
        <div className='flex flex-row'>
        <div className="flex mb-6 flex-col">
              <h1 className="text-endeavour text-2xl lg:text-3xl font-medium uppercase">
                Manage
              </h1>
              <span>To manage a card, please delete and add it again</span>
        </div>
        <div className='mt-4'>
            <a className='disabled:cursor-default font-bold text-base text-white uppercase border rounded-full border-dodger-blue bg-dodger-blue px-14 py-3' href='/addcard'>
              ADD CArd
            </a>
          </div>
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
               {card.length && _.map(card , ((row,i)=>{
                return(
                    <tr key={i}>
                        <td>{row.firstName} {row.lastName}</td>
                        <td>{row.cardtype} </td>
                        <td>{row.month}/ {row.year}</td>
                        <td>
                            <button onClick={()=> handleDelete(row.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )
               }))}
            </tbody>
        </table>
    </div>
  )
}

export default PaymentTable