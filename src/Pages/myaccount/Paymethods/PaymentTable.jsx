import _ from 'lodash'
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Delete from '../../../assets/images/svg/deleteNoti.svg';
import DeleteCardpopus from '../../../Components/modals/DeleteCardpopus';
import { deleteCard } from '../../../Store/paymentSlice'
const PaymentTable = () => {
    
    const [showMyModel, setShowMyModel]= useState(false);

    const handleOnClose=()=> setShowMyModel(false);
    const dispatch = useDispatch();
    const {card}= useSelector((state)=>state.card);
    console.log("card data", card)
    const [deleteID, setDeleteID]= useState();
    
    const handleDelete = (id)=>{
        setDeleteID(id);
        setShowMyModel(true)
        
    }
    console.log(deleteID)
    const handleDeleteItem= ()=>{
        return(
            console.log(deleteID),
            dispatch(deleteCard(deleteID)),
            setShowMyModel(false)
        )
    }

  return (
    <div >
        
        <div className="flex mb-6 flex-col">
              <h1 className="text-endeavour text-2xl lg:text-3xl font-medium uppercase">
                Manage
              </h1>
              <span>To manage a card, please delete and add it again</span>
        </div>
      
        <table>
            <thead className='bg-white text-gray-800 '>
                <tr>
                    <th scope='col' className='pr-8 font-medium'>Name on card</th>
                    <th scope='col'className='px-8 font-medium'>Payment Method</th>
                    <th scope='col'className='px-8 font-medium'>Expires</th>
                    <th scope='col'className='px-8 font-medium'></th>
                </tr>
            </thead>
            <tbody>
               {card.length && _.map(card , ((row,i)=>{
                
                return(
                    <tr key={i}>
                        <td className='pr-8'>{row.firstName} {row.lastName}</td>
                        <td className='px-8'>{row.cardtype} x{row.cardnum.slice(-4)} </td>
                        <td className='px-8'>{row.month}/ {row.year}</td>
                        <td className='px-8'>
                            <button onClick={()=>handleDelete(row.id)}>
                                <img alt='delete'  src={Delete}/>
                            </button>
                        </td>
                        
                        
                    </tr>  
                )
               }))}
            </tbody>
        </table>
        <DeleteCardpopus visible={showMyModel} onClose={handleOnClose} onDelete={handleDeleteItem} />
    </div>
  )
}

export default PaymentTable