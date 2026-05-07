// import { configureStore} from "@reduxjs/toolkit";
// import authReducer from './slice/AuthSlice'


// const store = configureStore({
//     reducer:{
// auth:authReducer
//     }
// })
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/AuthSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;