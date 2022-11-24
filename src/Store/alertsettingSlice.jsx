import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const alertsettingSlice= createSlice({
    name: "setting",
    initialState:{
        setting: [{
            "setid": "0",
            "pnum": "1986479152",
            "pcode": "+1",
        },],
        iseditable: false
    },
    reducers:{
        addSetting: (state,action)=>{
            console.log("alert setting",action.payload);
            return{
                ...state,
                setting: [...state.setting, ...[action.payload]],
                iseditable: false
            }
        },
        deleteSetting: (state,action)=>{
            const id= action.payload;
            console.log(action.payload);
            return{
                ...state,
                setting: _.filter(state.setting, (data)=>data.setid!==id),
                iseditable: false
            }
        },
        editSetting: (state,action)=>{
            console.log(action.payload.setid);
            console.log(action.payload)
            const updateid= _.get(action.payload, "setid");
            console.log(updateid)

            const updateddata= _.map(state.setting, (abc)=>{
                if(abc.setid === _.toNumber(updateid)){
                    return{...abc, ...action.payload};
                } 
                return abc;
            });

            console.log("updateddata", updateddata)
            return{
                ...state,
                setting:updateddata,
                iseditable:true
            };
            
        },
    },
});

export const {addSetting, deleteSetting,editSetting}= alertsettingSlice.actions;
export default alertsettingSlice.reducer;