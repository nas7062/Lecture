import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: {}
    },
    reducers: {
        addReview: (state, action) => {
            const { id, review } = action.payload;// 액션에서 게시물 ID와 리뷰 데이터를 추출
            if (!state.reviews[id])
                state.reviews[id] = [];
            state.reviews[id].push(review); // 리뷰를 해당 게시물 ID의 배열에 추가
        },
        updateReview: (state, action) => {
            const { id, reviewId, newContent, newScore, userId } = action.payload;
            const reviews = state.reviews[id]; // 해당 게시물의 리뷰 배열을 가져옴
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