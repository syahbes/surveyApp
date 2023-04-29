import React, { useState, useEffect } from 'react';
// import { firebase } from '../firebase/config';
import SurveyPresenter from './SurveyPresenter';
import { useSelector } from 'react-redux';
import { selectQuestions } from '../features/questionsSlice';
const SurveyContainer = () => {
  const questions = useSelector(selectQuestions);
  // const [questions, setQuestions] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const loading = false;

  //   useEffect(() => {
  //     const unsubscribe = firebase
  //       .firestore()
  //       .collection('questions')
  //       .onSnapshot((snapshot) => {
  //         const questions = snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data(),
  //         }));
  //         setQuestions(questions);
  //         setLoading(false);
  //       });
  //     return unsubscribe;
  //   }, []);
  const handleAnswer = (id, answer) => {
    // Handle user's answer and update the database
  };
  const handleFinish = () => {
    // Handle the end of the survey
  };
  console.log(questions)
  return (
    <SurveyPresenter
      questions={questions}
      loading={loading}
      onAnswer={handleAnswer}
      onFinish={handleFinish}
    />
  );
};
export default SurveyContainer;