// In App.js in a new project

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/util/firebase";
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const uid = user.uid;
        console.log("user is logged is:" + uid);
        // ...
      } else {
        console.log("no user is logged in")
        // User is signed out
      }
    });
    // Cleanup the listener on unmount
    return unsubscribe;
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;