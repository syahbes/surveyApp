import React from 'react';
import { useSelector } from 'react-redux';
import { selectQuestions } from '../features/questionsSlice';
import Survey from './Survey';

const SurveyContainer = () => {
  const questions = useSelector(selectQuestions);
  const handleFinish = () => {
    // Handle the end of the survey
  };
  return (
    <Survey
      questions={questions}
      // loading={loading}
      onFinish={handleFinish}
    />
  );
};
export default SurveyContainer;