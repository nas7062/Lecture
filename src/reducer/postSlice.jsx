import { createSlice } from "@reduxjs/toolkit"

const postsSlice = createSlice({
  name: 'posts',
  initialState: [{
    id: 0, title: 'sdffs',
    content: `asdsadsafasfsaasadsdsafasfsaasadsdsafasfsaasadsdsafasfsaasadsdsaf
        asfsaasadsdsafasfsaasadsdsafasfsaasadsdsafasfsaasads`, repple: ["asdasd", "dasdas"], good: 0
  },
  {
    id: 1, title: 'sdffs',
    content: `asdsadsasadsadsafasfsafsasadsadsafasfsa
        asadsadsafasfsaafasfsafsafsafasadsadsafasfsafsdsafasfsaasadsdsafas`, repple: [], good: 0
  },
  {
    id: 2, title: 'sdffs',
    content: `asdsadsasadsadsafasfsafsasadsadsafasfsa
      asadsadsafasfsaafasfsafsafsafasadsadsafasfsafsdsafasfsaasadsdsafas`,
    repple: ["adaa", "fqq"], good: 0
  },
  ],
  reducers: {
    addPost: (state, action) => {
      return [...state, action.payload];
    },
    addRepple: (state, action) => {
      const { postId, reple } = action.payload;
      const post = state.find(post => post.id === postId);
      if (post) {
        post.repple.push(reple);
      }
    },
    LikeUp: (state, action) => {
      const postId = action.payload;
      const post = state.find((post) => post.id === postId);
      if (post)
        post.good++;
    },
    PlusLike: (state, action) => {
      const post = state.find(post => post.id === action.payload);
      if (post) {
        post.good = post.good ? post.good + 1 : 1;
      }
    },

  },
});

export const { addPost, addRepple, PlusLike } = postsSlice.actions;
export default postsSlice.reducer;