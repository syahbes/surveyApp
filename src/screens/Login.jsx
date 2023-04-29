import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// import { signInWithEmailAndPassword } from "firebase/auth";

import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { emailSignIn } from "../features/userSlice";
import { fbSignOut } from "../app/firebase";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(emailSignIn({ email, password }));
  };

  const handleLogout = () => {
    fbSignOut();
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
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button onPress={handleLogin} mode="contained">
          Login
        </Button>
        <Button onPress={handleLogout} mode="contained">
          Logout
        </Button>
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
    // height: 40,
    width: 300,
    // need to be sure its supported by react-native on android and IOS
    gap: 20,
  },
});
