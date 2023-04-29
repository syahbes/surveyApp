import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../app/firebase";

// import { auth } from "../app/firebase";

export const getQuestions = createAsyncThunk("getQuestion", async () => {

    const questionsRef = collection(db, "questions");
    const querySnapshot = await getDocs(questionsRef);
    const questionsArr = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        // return doc.data();
    }))
    // console.log("🚀 ~ file: questionsSlice.js:16 ~ questionsArr ~ questionsArr:", questionsArr)
    return questionsArr
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id)
    // })
    // return querySnapshot.JSON;
})


const initialState = {
    isLoading: false,
    isError: false,
    error: "",
    data: [],
};

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        //will be added later
    },
    extraReducers: (builder) => {
        builder
            .addCase(getQuestions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getQuestions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getQuestions.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
    }
});

// Action creators are generated for each case reducer function
// export const { setUser, logout } = userSlice.actions;

// export const selectEmail = (state) => state.user.email
export const selectQuestions = (state) => state.questions.data;

export default questionsSlice.reducer;