import { createSlice } from "@reduxjs/toolkit"
const initState = {
    name: "",
    phoneNum: "",
    email: "",
    password: "",
    confirmPassword: "",
}
const signUpSlice = createSlice({
    name: "SignUp",
    initialState: initState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setPhoneNum: (state, action) => {
            state.phoneNum = action.payload;
        }, setEmail: (state, action) => {
            state.email = action.payload;
        }, setPassword: (state, action) => {
            state.password = action.payload;
        }, setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
        },
    },
});
export default signUpSlice.reducer;
export const {
    setName,
    setPhoneNum,
    setEmail,
    setPassword,
    setConfirmPassword,
} = signUpSlice.actions;