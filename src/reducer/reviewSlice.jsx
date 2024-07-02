import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: {}
    },
    reducers: {
        addReview: (state, action) => {
            const { id, review } = action.payload;
            if (!state.reviews[id])
                state.reviews[id] = [];
            state.reviews[id].push(review);
        },
        updateReview: (state, action) => {
            const { id, reviewId, newContent, newScore, userId } = action.payload;
            const reviews = state.reviews[id];
            const review = reviews.find((review) => review.id === reviewId);
            if (review && review.userId === userId) {
                review.content = newContent;
                review.score = newScore;
            }

        },
        deleteReview: (state, action) => {
            const { id, reviewId, userId } = action.payload;
            state.reviews[id] = state.reviews[id].
                filter(review => review.id !== reviewId || review.userId !== userId);
        }


    },


});
export const { addReview, updateReview, deleteReview } = reviewSlice.actions;

export default reviewSlice.reducer;