import { configureStore } from "@reduxjs/toolkit";
import postreducer from "../reducer/postSlice";
import cartreducer from "../reducer/cartSlice";
import authreducer from "../reducer/authSlice";
const store = configureStore({
    reducer:{
        posts :postreducer,
        carts :cartreducer,
        users :authreducer
    }
})
export default store;