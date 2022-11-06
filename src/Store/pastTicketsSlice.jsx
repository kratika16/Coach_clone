import { createSlice } from "@reduxjs/toolkit";

export const pastTicketsSlice= createSlice({
    name: "past",
    initialState:{
        past: [
            {
                "name": "NYCM to EWRA, ADULT, MONTHLY - SEP",
                "valid": "Valid 09/01/2022 - 09/30/2022",
            },
            {
                "name": "NYCP to MIDD, SPECIAL NEEDS, ONE-WAY",
                "valid": "Valid 09/23/2022",
            },
            {
                "name": "NYCM to EWRA, ADULT, MONTHLY - SEP",
                "valid": "Valid 09/01/2022 - 09/30/2022",
            },
            {
                "name": "NYCM to EWRA, ADULT, MONTHLY - APR",
                "valid": "Valid 04/01/2022 - 04/30/2022",
            },
            {
                "name": "NYCM to EWRA, ADULT, MONTHLY - FEB",
                "valid": "Valid 02/01/2022 - 02/28/2022",
            },
            {
                "name": "NYCM to EWRA, ADULT, MONTHLY - MAR",
                "valid": "Valid 03/01/2022 - 03/31/2022",
            },
            {
                "name": "NYCM to EWRA, SPECIAL NEEDS, ROUND-TRIP",
                "valid": "Valid through 02/21/2023",
            },
            {
                "name": "NYCM to EWRA, ADULT, ONE-WAY",
                "valid": "Valid through 10/18/2022",
            },
        ]
    },
    reducers: {
        addpast: (state, action)=>{
            return{
            ...state,
            past: [...state.past, ...[action.payload]]
        }
        }
    }
});
export const {addpast} = pastTicketsSlice.actions;
export default pastTicketsSlice.reducer;