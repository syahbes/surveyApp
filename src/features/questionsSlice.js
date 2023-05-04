import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebase } from "../app/firebase";

export const getQuestions = createAsyncThunk("getQuestions", async () => {
    const questionRef = firebase.firestore().collection('questions');
    try {
        const snapshot = await questionRef.get();
        const questionArr = [];
        snapshot.forEach((doc) => {
            questionArr.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        return questionArr;
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const upDateRating = createAsyncThunk("upDateRating", async ({ updateId, newRating }) => {
    const questionRef = firebase.firestore().collection('questions').doc(updateId)
    questionRef.update({
        [newRating]: firebase.firestore.FieldValue.increment(1)
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

// Action creators are generated for each case reducer function
// export const { setUser, logout } = userSlice.actions;

// export const selectEmail = (state) => state.user.email
export const selectQuestions = (state) => state.questions.data;

export default questionsSlice.reducer;