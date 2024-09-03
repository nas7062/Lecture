import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postreducer from "../reducer/postSlice";
import cartreducer from "../reducer/cartSlice";
import authreducer from "../reducer/authSlice";
import reviewreducer from "../reducer/reviewSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
const persistConfig = {
  key: "root", //저장될 스토리지 키 
  storage, // 저장할 스토리지
  whitelist: ["posts", "carts", "users", "reviews"]
  // persist할 상태의 키 목록
};
const rootReducer = combineReducers({
  posts: postreducer,
  carts: cartreducer,
  users: authreducer,
  reviews: reviewreducer

})
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
export default store;