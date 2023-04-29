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
      <Text>Welcome to my survey app!</Text>

      <Button onPress={() => navigation.navigate("Login")} mode="outlined">
        go to Login
      </Button>

      <Text>User? Click to start</Text>
      <Button
        onPress={() => {
          navigation.navigate("Survey");
        }}
        mode="contained"
      >
        Start
      </Button>
      <View style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        gap: 10

      }}>

      <FilledStar/>
      <FilledStar/>
      <FilledStar/>
      <OutlinesStar/>
      <OutlinesStar/>
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
});
