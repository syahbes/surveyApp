import React, { useState, useEffect } from 'react';
// import { firebase } from '../firebase/config';
import SurveyPresenter from './SurveyPresenter';
import { useSelector } from 'react-redux';
import { selectQuestions } from '../features/questionsSlice';
import Survey from './Survey';
const SurveyContainer = () => {
  const questions = useSelector(selectQuestions);

  const handleAnswer = (id, answer) => {
    // Handle user's answer and update the database
  };
  const handleFinish = () => {
    // Handle the end of the survey
  };
  console.log(questions)
  return (
    <Survey
      questions={questions}
      // loading={loading}
      onAnswer={handleAnswer}
      onFinish={handleFinish}
    />
  );
};
export default SurveyContainer;