import React, { useState } from 'react';
import OutlinesStar from '../icons/OutlinesStar';
import FilledStar from '../icons/FilledStar';
import { StyleSheet, Text, View,  } from 'react-native';
import { Button, TouchableRipple } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { selectQuestions, upDateRating } from '../features/questionsSlice';
import { useDispatch, useSelector } from 'react-redux';

function Survey() {
  const questions = useSelector(selectQuestions);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(questions.map(q => ({ id: q.id, rating: 0 })));

  const handleRatingChange = (id, rating) => {
    setAnswers(answers.map(a => a.id === id ? { ...a, rating } : a));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const updateId = questions[currentQuestionIndex].id;
      const newRating = answers.find(a => a.id === updateId).rating;
      dispatch(upDateRating({ updateId, newRating }));
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinish = () => {
    const updateId = questions[currentQuestionIndex].id;
    const newRating = answers.find(a => a.id === updateId).rating;
    dispatch(upDateRating({ updateId, newRating }));
    navigation.navigate("ThankYou");
  };

  const currentQuestion = questions[currentQuestionIndex];
  const hasRating = answers.find(a => a.id === currentQuestion?.id)?.rating !== 0;

  const buttonProps = {
    disabled: !hasRating,
    // mode: currentQuestionIndex < questions.length - 1 ? 'contained' : 'contained',
    mode: 'contained',
    onPress: currentQuestionIndex < questions.length - 1 ? handleNextQuestion : handleFinish,
    children: currentQuestionIndex < questions.length - 1 ? 'Next' : 'Done',
    buttonColor: currentQuestionIndex < questions.length - 1 ? undefined : '#4caf50'
  };

  return (
    <View style={styles.container}>
      <View style={styles.contectContainer}>
        <View>
          <Text style={styles.text}>{currentQuestion?.text}</Text>
          <RatingInput id={currentQuestion.id} rating={answers.find(a => a.id === currentQuestion.id).rating} onRatingChange={handleRatingChange} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white' }}>
          <Button onPress={handlePrevQuestion} disabled={currentQuestionIndex === 0}>Previous</Button>
          <Button {...buttonProps} />
        </View>
      </View>
    </View>
  );
}

function RatingInput({ id, rating, onRatingChange }) {
  const handleRatingClick = (newRating) => {
    onRatingChange(id, newRating);
  };

  return (
    <View style={styles.starsStack}>
      {[1, 2, 3, 4, 5].map(n => (
        <TouchableRipple key={n}
          onPress={() => handleRatingClick(n)} style={{ borderRadius: 50, padding: 8 }} rippleColor='rgba(255, 206, 41, 0.2)'
          borderless={true}
          >
          {n <= rating ? <FilledStar /> : <OutlinesStar />}
        </TouchableRipple>
      ))}
    </View>
  );
}

export default Survey;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contectContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,

  },
  text: {
    fontSize: 20,
    marginBottom: 50,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  starsStack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // gap: 10,
    marginBottom: 60,
  }
})