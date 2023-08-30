import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState ={
    comments:[],
    isLoading:true,
    error:false
}
const fetchComments = createAsyncThunk(
    'comments/fetchcomments',
    async () => {
        const response = await axios.get('https://dummyjson.com/comments'); 
        return response.data;
    }
  )

  const commentsSlice = createSlice({
      name:"comments",
      initialState,
      extraReducers:(builder)=>{
        builder.addCase(fetchComments.fulfilled,(state,action)=>{
            state.comments = [...action.payload.comments];
            state.isLoading = false;
        }).addCase(fetchComments.rejected,(state,action)=>{
             state.error = action.error;
             state.isLoading = false;
        }).addCase(fetchComments.pending,(state,action)=>{
            state.isLoading = true;
        })
      }
  });
const {setComments} = commentsSlice.actions;  
export {fetchComments,setComments}
export default commentsSlice.reducer;