import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      <View style={{ flexDirection: 'column' }}>

        <Button
          onPress={() => {
            navigation.navigate("Survey");
          }}
          mode="contained"
          loading={!questions?.length > 0}
        >
          {questions?.length > 0 ? "Start" : "Loading"}
        </Button>
      </View>
      <View style={styles.footer}>
        {/* <Text style={{ marginRight: 10 }}>Admin?</Text> */}
        {/* <Button mode="text" compact={true} onPress={() => navigation.navigate("Login")} >
          Login
        </Button> */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </TouchableOpacity>

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
    // backgroundColor: 'blue'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c3c3c3',
    padding: 3

  }

});