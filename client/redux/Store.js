import { configureStore} from "@reduxjs/toolkit";
import counterReducer from './slice/AuthSlice'


const store = configureStore({
    reducer:{
counter:counterReducer
    }
})
export default store;