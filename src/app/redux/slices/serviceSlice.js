import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
    name: "service",
    initialState: [],   // 👈 direct array

    reducers: {
        setservices: (state, action) => {
            return action.payload;   // pura data replace hoga
        }
    }
});

export const { setservices } = serviceSlice.actions;
export default serviceSlice.reducer;