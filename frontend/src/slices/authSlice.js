import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    token: localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user')) : null,
    loading: false,
    userData: localStorage.getItem("profile") ? JSON.parse(localStorage.getItem('profile')) : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, value) {
            state.token = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        },
        setUserData(state, value) {
            state.userData = value.payload;
        },
    }
})


export const { setToken, setLoading, setUserData } = authSlice.actions;
export default authSlice.reducer;