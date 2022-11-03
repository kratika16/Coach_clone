
import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
    name: "card",
    initialState: {
        card: []
    },
    reducers:{
        addCard: (state, action)=>{
            // state.value.push(action.payload);
            console.log("card",action.payload);
            return{
                ...state,
                card: [...state.card,...[action.payload]]
                
            }
            
        },

        deleteCard: (state,action)=>{
            

        },
    },
});

export const {addCard, deleteCard} = paymentSlice.actions;
export default paymentSlice.reducer;