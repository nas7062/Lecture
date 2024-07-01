import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const reviewSlice = createSlice({
    name:'reviews',
    initialState:{
        reviews :[]
    },
    reducers :{
        addReview : (state,action) =>{
            state.reviews.push(action.payload);
        },
        updateReview : (state,action) =>{
            const {id,newContent,newScore} = action.payload;
            const review =state.reviews.find((review)=>review.id ===id);
            if(review)
                {
                    review.content = newContent;
                    review.score =newScore; 
                }
               
        },
        deleteReview :(state,action)=>{
            return state.reviews.filter((item)=>item.id !==action.payload);
        }


    },


});
export const { addReview,updateReview ,deleteReview } = reviewSlice.actions;

export default reviewSlice.reducer;