import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { emailSignIn } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(emailSignIn({ email, password }));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ marginBottom: 20 }}
        />
        <TextInput
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          style={{ marginBottom: 20 }}
        />
        <Button icon={'login'} onPress={handleLogin} mode="contained" style={{ marginBottom: 20 }} >
          Login
        </Button>
        <Text>Considering that this is a demo application</Text>
        <Text style={{ marginBottom: 20 }}>Please use these details to log in</Text>
        <Text>Email: shlomi@shlomi.com</Text>
        <Text>Password: 1q2w3e</Text>
      </View>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: 300,
  },
});