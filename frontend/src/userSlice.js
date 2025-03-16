import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    about: "",
    skills: "",
    resume: null,
    email: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;
