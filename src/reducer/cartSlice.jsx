import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'carts',
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            const findItem = state.find(item => item.id === action.payload.id);
            // 현재 장바구니에서 동일한 ID를 가진 아이템을 찾음
            if (!findItem)
                state.unshift(action.payload);
        },
        removeCart: (state, action) => {
            return state.filter((item) => Number(item.id) !== Number(action.payload));
        },
    },


});
export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;