import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebase } from "../app/firebase"

export const emailSignIn = createAsyncThunk("user/login", async ({ email, password }) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    return userCredential.user.toJSON();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
})

const initialState = {
  uid: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { uid, email } = action.payload || {};
      state.uid = uid;
      state.email = email;
      state.isLoading = false;
    },
    logout: (state) => {
      state.uid = "";
      state.email = "";
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(emailSignIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(emailSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
  }
});

export const { setUser, logout , setLoading } = userSlice.actions;
export const selectUser = state => state.user;
export const selectIsLoading = state => state.user.isLoading;

export default userSlice.reducer;
