import { configureStore } from "@reduxjs/toolkit";
import postreducer from "../reducer/postSlice";
import cartreducer from "../reducer/cartSlice";
const store = configureStore({
    reducer:{
        posts :postreducer,
        carts :cartreducer,
    }
})
export default store;