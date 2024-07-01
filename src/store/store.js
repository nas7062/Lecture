import { configureStore } from "@reduxjs/toolkit";
import postreducer from "../reducer/postSlice";
import cartreducer from "../reducer/cartSlice";
import authreducer from "../reducer/authSlice";
import reviewreducer from "../reducer/reviewSlice";
const store = configureStore({
    reducer:{
        posts :postreducer,
        carts :cartreducer,
        users :authreducer,
        reviews:reviewreducer
    }
})
export default store;