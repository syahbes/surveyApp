import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateDoc, doc, collection, getDocs, increment } from "firebase/firestore";
import { db } from "../app/firebase";

export const getQuestions = createAsyncThunk("getQuestion", async () => {
    const questionsRef = collection(db, "questions");
    const querySnapshot = await getDocs(questionsRef);
    const questionsArr = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
    return questionsArr
})

export const upDateRating = createAsyncThunk("upDateRating", async ({ updateId, newRating }) => {
    const questionRef = doc(db, "questions", updateId);
    await updateDoc(questionRef, {
        [newRating] : increment(1)
    });
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

export const selectQuestions = (state) => state.questions.data;
export default questionsSlice.reducer;