import {createSlice} from "@reduxjs/toolkit"

const postsSlice = createSlice({
    name: 'posts',
    initialState: [{ id:0,title:'sdffs',
        content:`asdsadsafasfsaasadsdsafasfsaasadsdsafasfsaasadsdsafasfsaasadsdsaf
        asfsaasadsdsafasfsaasadsdsafasfsaasadsdsafasfsaasads`,repple:0, good:0},
        { id :1,title:'sdffs',
            content:`asdsadsasadsadsafasfsafsasadsadsafasfsa
        asadsadsafasfsaafasfsafsafsafasadsadsafasfsafsdsafasfsaasadsdsafas`,repple:0, good:0},
        { id: 2,title:'sdffs',
          content:`asdsadsasadsadsafasfsafsasadsadsafasfsa
      asadsadsafasfsaafasfsafsafsafasadsadsafasfsafsdsafasfsaasadsdsafas`,
       repple:0, good:0 },
    ],
    reducers: {
      addPost: (state, action) => {
        return [...state ,action.payload];
      },
      addRepple : (state,action)=>{

      }
    },
  });
  
  export const { addPost } = postsSlice.actions;
  export default postsSlice.reducer;