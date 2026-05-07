// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import axios from 'axios'
// const initialState ={
    
// }

// export const login= createAsyncThunk('/auth_login' ,async( formData, thunkApi)=>{
//     try {
//         console.log(formData)
//         const res=  await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`,{formData})
//         return res.data
//         console.log(thunkApi)

//     } catch (error) {
//        console.log(error);
        
//     }

// })
// const authslice = createSlice({
//     initialState,
//     name:'auth'
// })
// export default authslice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie'

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated:false,
  name:null,
  email:null,
  role:null
};

// ✅ FIXED: no nested formData
export const login = createAsyncThunk(
  '/auth_login',
  async (formData, thunkApi) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        formData // ✅ send directly
      );
      const verifyRes= await axios.post(`${import.meta.env.VITE_API_URL}/auth/verify`,{withCredentials:true})
      return {...res.data,...verifyRes.data};
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data || 'Login failed'
      );
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated= action.payload.authenticated;
        state.name= action.payload.user.name;
        state.role= action.payload.user.role;
        state.email= action.payload.user.email;
        console.log(state.email,state.isAuthenticated,state.name,state.role)

Cookies.set('name', action.payload.user.name)
Cookies.set('email', action.payload.user.email)
Cookies.set('role', action.payload.user.role)
Cookies.set('isAuthenticated', action.payload.authenticated)




        console.log(action.payload)
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default authSlice.reducer;