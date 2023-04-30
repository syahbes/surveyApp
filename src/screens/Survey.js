import React, { useState } from 'react';
import OutlinesStar from '../icons/OutlinesStar';
import FilledStar from '../icons/FilledStar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from "react-native-paper";


function Survey({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(questions.map(q => ({ id: q.id, rating: 0 })));

  const handleRatingChange = (id, rating) => {
    setAnswers(answers.map(a => a.id === id ? { ...a, rating } : a));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    console.log(answers); // or send to backend, etc.
  };

  const currentQuestion = questions[currentQuestionIndex];
  const hasRating = answers.find(a => a.id === currentQuestion?.id)?.rating !== 0;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{currentQuestion?.text}</Text>
        <RatingInput id={currentQuestion.id} rating={answers.find(a => a.id === currentQuestion.id).rating} onRatingChange={handleRatingChange} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button onPress={handlePrevQuestion} disabled={currentQuestionIndex === 0}>Previous</Button>
        {currentQuestionIndex < questions.length - 1 && <Button onPress={handleNextQuestion} mode='contained' disabled={!hasRating}>Next</Button>}
        {currentQuestionIndex === questions.length - 1 && <Button onPress={handleSubmit} mode='contained' buttonColor='#4caf50' disabled={!hasRating}>Submit</Button>}
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
        <TouchableOpacity key={n} onPress={() => handleRatingClick(n)}>
          {n <= rating ? <FilledStar /> : <OutlinesStar />}
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Survey;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',

  },
  starsStack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  }
})