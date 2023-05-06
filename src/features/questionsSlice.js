import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateDoc, doc, collection, getDocs, increment, addDoc, deleteDoc } from "firebase/firestore";
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
        [newRating]: increment(1)
    });
})

export const deleteQuestion = createAsyncThunk("deleteQuestion", async (id) => {
    await deleteDoc(doc(db, "questions", id));
    return id
})

export const addQuestion = createAsyncThunk("addQuestion", async (question) => {
    const docRef = await addDoc(collection(db, "questions"), {
        text: question,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    });
    return { id: docRef.id, question }
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
            .addCase(addQuestion.fulfilled, (state, action) => {
                state.data.push(
                    {
                        id: action.payload.id,
                        text: action.payload.question,
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0,
                        5: 0,
                    }
                )
            })
            .addCase(deleteQuestion.fulfilled, (state, action) => {
                state.data = state.data.filter(item => item.id !== action.payload)
            })
    }
});

export const selectQuestions = (state) => state.questions.data;
export default questionsSlice.reducer;