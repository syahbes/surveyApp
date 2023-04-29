import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
const SurveyPresenter = ({ questions, loading, onAnswer, onFinish }) => {
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      <Text>Survey</Text>
      { questions.map((question) => (
        <Text key={question.id}>{question.text}</Text>
      ))

      }
      {/* {questions.map((question) => (
        <View key={question.id}>
          <Text>{question.text}</Text>
          {question.options.map((option) => (
            <Button
              key={option.id}
              title={option.text}
              onPress={() => onAnswer(question.id, option.id)}
            />
          ))}
        </View>
      ))} */}
      <Button title="Finish" onPress={onFinish} />
    </View>
  );
};
export default SurveyPresenter;