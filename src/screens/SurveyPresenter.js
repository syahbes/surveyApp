import React from 'react';
import { View, Text, Button, ActivityIndicator,StyleSheet } from 'react-native';
import SurveyCard from './SurveyCard';
import OutlinesStar from '../icons/OutlinesStar';
import Survey from './Survey';
const SurveyPresenter = ({ questions, loading, onAnswer, onFinish }) => {
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <Text>Survey</Text>

      {/* <SurveyCard text={questions[0]?.text} id={questions[0]?.id} /> */}
      <Survey questions={questions} />

      {/* { questions.map((question) => (
        <Text key={question.id}>{question.text}</Text>
      ))

      } */}
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

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',

  }
})