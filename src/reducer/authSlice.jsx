import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'users',
    initialState:{
        user:null
    },
    reducers :{
        Login : (state,action) =>{
            state.user = action.payload;
        },
        Logout : (state,action) =>{
            state.user = null;
        }


    },


});
export const { Login,Logout } = authSlice.actions;

export const SelectUser = (state)=>state.users.user;
export default authSlice.reducer;