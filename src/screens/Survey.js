import React, { useState } from 'react';
import OutlinesStar from '../icons/OutlinesStar';
import FilledStar from '../icons/FilledStar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{currentQuestion?.text}</Text>
        <RatingInput id={currentQuestion.id} rating={answers.find(a => a.id === currentQuestion.id).rating} onRatingChange={handleRatingChange} />
      </View>
      <View>
        <button onClick={handlePrevQuestion}>Previous</button>
        {currentQuestionIndex < questions.length - 1 && <button onClick={handleNextQuestion}>Next</button>}
        {currentQuestionIndex === questions.length - 1 && <button onClick={handleSubmit}>Submit</button>}
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
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