
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const paymentSlice = createSlice({
    name: "card",
    initialState: {
        card:[],
        isdataonCard: false
    },
    reducers:{
        addCard: (state, action)=>{
            // state.value.push(action.payload);
            console.log("card",action.payload);
            return{
                ...state,
                card: [...state.card,...[action.payload]],
                isdataonCard: true,
            }
            
        },

        deleteCard: (state,action)=>{
            // state.value = state.value.filter((card)=> card.id !== action.payload.id);
            const id= action.payload;
            console.log(action.payload)
            console.log(state.card.filter( (data)=>data.id!==id))
            return{
                ...state,
                card: _.filter(state.card, (data)=>data.id!==id),
                isdataonCard:false
            }
        },
    },
});

export const {addCard, deleteCard} = paymentSlice.actions;
export default paymentSlice.reducer;