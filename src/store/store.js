import { configureStore } from "@reduxjs/toolkit";
import postreducer from "../reducer/postSlice";

const store = configureStore({
    reducer:{
        posts :postreducer,
    }
})
export default store;