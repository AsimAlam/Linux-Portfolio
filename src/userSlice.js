import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    about: "",
    skills: "",
    resume: null, // will hold a base64 data URL for the PDF
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            // Overwrite the state with the new details
            return { ...state, ...action.payload };
        },
    },
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;
