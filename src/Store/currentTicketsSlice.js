import { createSlice } from "@reduxjs/toolkit";

export const currentTicketsSlice= createSlice({
    name: "current",
    initialState:{
        current: [
            {
                "name": "NYCM to EWRA, SPECIAL NEEDS, ONE-WAY",
                "valid": "Valid through 10/17/2023",
                "tripsrem": " ",
            },
            {
                "name": "NYCM to EWRA, ADULT, 10-TRIP",
                "valid": "Valid through 10/17/2023",
                "tripsrem": "10 Trips Remaining",
            },
            {
                "name": "NYCM to EWRA, ADULT, ROUND-TRIP",
                "valid": "Valid through 10/17/2023",
                "tripsrem": "2 Trips Remaining",
            },
            {
                "name": "NYCM to EWRA, ADULT, MONTHLY - NOV",
                "valid": "Valid 11/01/2022 - 11/30/2022",
                "tripsrem": " ",
            },
            {
                "name": "NYCM to EWRA, SPECIAL NEEDS, ROUND-TRIP",
                "valid": "Valid through 10/17/2023",
                "tripsrem": "2 Trips Remaining",
            },
            {
                "name": "NYCM to EWRA, ADULT, ONE-WAY",
                "valid": "Valid through 10/17/2023",
                "tripsrem": " ",
            },
            {
                "name": "NYCM to EWRA,SENIOR, ROUND-TRIP",
                "valid": "Valid through 10/17/2023",
                "tripsrem": "2 Trips Remaining",
            },
            {
                "name": "NYCM to EWRA,SENIOR, ONE-WAY",
                "valid": "Valid through 10/17/2023",
                "tripsrem": " ",
            },
            {
                "name": "NYCM to EWRA,ADULT, MONTHLY - OCT",
                "valid": "Valid through 10/17/2022",
                "tripsrem": " ",
            },
            {
                "name": "NYCM to EWRA,ADULT, MONTHLY - OCT",
                "valid": "Valid through 10/17/2022",
                "tripsrem": " ",
            },
        ]
    },
    reducers: {
        addcurrent: (state, action)=>{
            return{
            ...state,
            current: [...state.current, ...[action.payload]]
        }
        }
    }
});
export const {addcurrent} = currentTicketsSlice.actions;
export default currentTicketsSlice.reducer;