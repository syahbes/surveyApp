import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, selectQuestions } from "../features/questionsSlice";


const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to surveyApp!</Text>
      <View style={{ flexDirection: 'row', gap: 20 }}>

        <Button onPress={() => navigation.navigate("Login")} mode="outlined">
          Login
        </Button>
        <Button
          onPress={() => {
            navigation.navigate("Survey");
          }}
          mode="contained"
          loading={!questions.length > 0}
        >
          {questions.length > 0 ? "Start" : "Loading"}
        </Button>
      </View>

    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  }
});
