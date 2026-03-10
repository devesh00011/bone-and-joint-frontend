import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "./slices/doctorSlice.js"; 
import serviceReducer from './slices/serviceSlice.js'

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    service : serviceReducer
  }
});