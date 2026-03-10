import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
    name: "doctor",
    initialState: [],   // 👈 direct array

    reducers: {
        setDoctors: (state, action) => {
            return action.payload;   // pura data replace hoga
        }
    }
});

export const { setDoctors } = doctorSlice.actions;
export default doctorSlice.reducer;