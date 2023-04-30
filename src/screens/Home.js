import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { getQuestions } from "../features/questionsSlice";
import Star from "../icons/star";
import FilledStar from "../icons/FilledStar";
import OutlinesStar from "../icons/OutlinesStar";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my survey app!</Text>
<View style={{flexDirection:'row', gap:20}}>

      <Button onPress={() => navigation.navigate("Login")} mode="outlined">
        Login
      </Button>
      <Button
        onPress={() => {
          navigation.navigate("Survey");
        }}
        mode="contained"
        >
        Start
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
