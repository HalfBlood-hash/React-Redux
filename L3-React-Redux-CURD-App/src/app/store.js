
import {configureStore} from '@reduxjs/toolkit';
import userDetailSlice from '../feature/userDetailSlice.js';  
const store = configureStore({
  reducer: {
    userDetails:userDetailSlice
  },
}); 

export default store;