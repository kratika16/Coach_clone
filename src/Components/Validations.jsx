import React from 'react'
import {omit} from 'lodash'
import { useState } from 'react'
import { addCard } from '../store/paymentSlice'
const Validations = (callback) => {
    const [values,setValues]= useState({});
    const [errors, setErrors]= useState({});

    const validate = (event, name, value)=>{
        switch(name){
            case 'firstName':
                if(value.length<=1){
                    setErrors({
                        ...errors, firstname: 'Please provide a valid First Name'
                    })
                } else{
                    let newObj = omit(errors, "firstName");
                    setErrors(newObj);
                }
                break;
            case 'lastName':
                if(value.length<=1){
                    setErrors({
                        ...errors, lastname: 'Please provide a valid Last Name'
                    })
                } else{
                    let newObj = omit(errors, "lastName");
                    setErrors(newObj);
                }
                break;
            case 'city':
                if(value.length<=1){
                    setErrors({
                        ...errors, city: 'Please provide a valid City/Town'
                    })
                } else{
                    let newObj = omit(errors, "city");
                    setErrors(newObj);
                }
                break;
            case 'zip':
                if(!new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(value)){
                    setErrors({
                        ...errors,
                        zip:'Please provide valid Postal/Zip Code'
                    })
                }else{
                    let newObj= omit(errors, "zip");
                    setErrors(newObj);
                }
                break;
            case 'cardnum':
                if(!new RegExp(/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/).test(value)){
                    setErrors({
                        ...errors,
                        cardnum: 'Please provide correct card details'
                    })
                }else{
                    let newObj= omit(errors, "zip");
                    setErrors(newObj);
                }
                break;
            case 'pnumber':
                if(!new RegExp(/^[6-9]\d{9}$/ ).test(value)){
                    setErrors({
                        ...errors, pnumber: "Please provide valid phone number"
                    })
                }else{
                    let newObj= omit(errors, "zip");
                    setErrors(newObj);
                }
                break;
            default:
                break;
        }
    }
    const handleChange= (event)=>{
        event.persist();

        let name= event.target.name;
        let val= event.target.value;
        validate(event,name,val);

        setValues({
            ...values,
            [name]:val,
        })
    }
    
  return {
    values, errors, handleChange
  }
}

export default Validations