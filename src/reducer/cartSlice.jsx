import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'carts',
    initialState:[],
    reducers :{
        addCart:(state,action)=>{
            const findItem =state.find(item=>item.id===action.payload.id);
            if(!findItem)
                state.unshift(action.payload);
        },
        removeCart:(state,action)=>{
            return state.filter((item)=>Number(item.id)!==Number(action.payload));
        },
        


    },


});
export const{ addCart,removeCart} = cartSlice.actions;
export default cartSlice.reducer;