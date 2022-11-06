import { createSlice } from "@reduxjs/toolkit";
import _, { create } from "lodash";

export const alertSlice= createSlice({
    name: "alert",
    initialState:{
        alert:[{
            "alertid": 0,
            "origin": "new york , NY",
            "destination": "middletown , NY ",
        },
        {   "alertid": 1,
            "origin": "new york , NY",
            "destination": "NEWARK LIBERTY INTERNATIONAL AIRPORT, NJ ",
        },
        {   "alertid": 2,
            "origin": "MILWAUKEE, WI",
            "destination": "WEST BEND, WI ",
        },]
    },
    reducers:{
      deleteAlert: (state,action)=>{
        const id= action.payload;
        console.log(action.payload)
        return{
            ...state,
            alert: _.filter(state.alert, (data)=>data.alertid!==id),
        }
      },
    },
});

export const {deleteAlert}= alertSlice.actions;
export default alertSlice.reducer;