import {createSlice} from "@reduxjs/toolkit"

const postsSlice = createSlice({
    name: 'posts',
    initialState: [{ id:0,title:'sdffs',
        content:`asdsadsafasfsaasadsdsafasfsaasadsdsafasfsaasadsdsafasfsaasadsdsaf
        asfsaasadsdsafasfsaasadsdsafasfsaasadsdsafasfsaasads`,repple:["asdasd","dasdas"], good:0},
        { id :1,title:'sdffs',
            content:`asdsadsasadsadsafasfsafsasadsadsafasfsa
        asadsadsafasfsaafasfsafsafsafasadsadsafasfsafsdsafasfsaasadsdsafas`,repple:[], good:0},
        { id: 2,title:'sdffs',
          content:`asdsadsasadsadsafasfsafsasadsadsafasfsa
      asadsadsafasfsaafasfsafsafsafasadsadsafasfsafsdsafasfsaasadsdsafas`,
       repple:["adaa","fqq"], good:0 },
    ],
    reducers: {
      addPost: (state, action) => {
        return [...state ,action.payload];
      },
      addRepple : (state,action)=>{
        const { postId, reple } = action.payload;
        const post = state.find(post => post.id === postId);
        if (post) {
          post.repple.push(reple);
        }
      }
    },
  });
  
  export const { addPost ,addRepple } = postsSlice.actions;
  export default postsSlice.reducer;