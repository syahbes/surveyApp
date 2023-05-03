import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebase } from "../app/firebase"
// import { auth } from "../app/firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";

export const emailSignIn = createAsyncThunk("user/login", async ({ email, password }) => {
  firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      return user.JSON
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });



  // const response = await signInWithEmailAndPassword(auth, email, password)
  // return response.JSON
})

const initialState = {
  uid: "",
  email: "",
  isLoading: false,
  isError: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload?.uid;
      state.email = action.payload?.email;
    },
    logout: (state) => {
      state.uid = "";
      state.email = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(emailSignIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(emailSignIn.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(emailSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
  }
});

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions;

// export const selectEmail = (state) => state.user.email
export const selectUser = (state) => state.user;

export default userSlice.reducer;