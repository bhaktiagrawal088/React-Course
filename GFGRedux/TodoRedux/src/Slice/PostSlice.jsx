import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const intialState = {
    posts : [],
    status : 'idle',
}

export const loadPost = createAsyncThunk('post/loadPost', async () => {
    try {
        const data = await axios.get('https://dummyjson.com/posts');
        return data;
        
    } catch (error) {
        console.log(error);
        return error;
        
    }
})
const PostSlice = createSlice({
    name : 'posts',
    initialState : intialState,
    reducers : {
    },
    extraReducers : builder =>  {
       builder
            .addCase(loadPost.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(loadPost.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.posts = action.payload
            })
            .addCase(loadPost.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export default PostSlice.reducer