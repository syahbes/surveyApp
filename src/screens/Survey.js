import React, { useState } from 'react';
import OutlinesStar from '../icons/OutlinesStar';
import FilledStar from '../icons/FilledStar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, shadow } from "react-native-paper";


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
    <View style={styles.contectContainer}>
        <View>
          <Text style={styles.text}>{currentQuestion?.text}</Text>
          <RatingInput id={currentQuestion.id} rating={answers.find(a => a.id === currentQuestion.id).rating} onRatingChange={handleRatingChange} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white' }}>
          <Button onPress={handlePrevQuestion} disabled={currentQuestionIndex === 0}>Previous</Button>
          {currentQuestionIndex < questions.length - 1 && <Button onPress={handleNextQuestion} mode='contained' disabled={!hasRating}>Next</Button>}
          {currentQuestionIndex === questions.length - 1 && <Button onPress={handleSubmit} mode='contained' buttonColor='#4caf50' disabled={!hasRating}>Submit</Button>}
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
    elevation: 5,

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
    gap: 10,
    marginBottom: 60,
  }
})