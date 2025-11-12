import { configureStore } from "@reduxjs/toolkit";
import showData from "../feature/showSlice.js";
const store = configureStore({
  reducer: {
    showslice: showData
    },
});
export default store;