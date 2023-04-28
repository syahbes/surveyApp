import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../util/firebase";

import { Button, TextInput } from "react-native-paper";

const Login = () => {
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button onPress={handleLogin} mode="contained">
        Login
      </Button>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({});
