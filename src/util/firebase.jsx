import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD8I5RvvSATFJuS7z97NDaqGnEY6noFwsc",
  authDomain: "surveyapp-c5aff.firebaseapp.com",
  projectId: "surveyapp-c5aff",
  storageBucket: "surveyapp-c5aff.appspot.com",
  messagingSenderId: "72951752720",
  appId: "1:72951752720:web:170554041385471c61c295"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
