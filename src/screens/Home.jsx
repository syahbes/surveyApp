import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate("Login")} mode="contained">
        go to Login
      </Button>
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
