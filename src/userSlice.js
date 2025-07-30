import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
const initialState = {
    users: [],
    loading: false , 
    error: null,
}

export const fetchUser = createAsyncThunk('user/fetch',
    async ()=>{
    const res = await axios.get('https://dummyjson.com/users')
    return res.data.users
})

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase(fetchUser.pending,(state)=>{
            state.loading=true
        }).addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
        }).addCase(fetchUser.rejected,(state,action)=>{
            state.error=action.error.message
        })
    }
    
})
export default userSlice.reducer