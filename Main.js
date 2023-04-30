import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/app/firebase";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout, setUser } from './src/features/userSlice';
import SurveyContainer from './src/screens/SurveyContainer';

const Stack = createNativeStackNavigator();

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            const uid = user.uid;
            const email = user.email;
            dispatch(setUser({ uid, email }));
          } else {
            // User is signed out
            dispatch(logout());
          }
        });
        // Cleanup the listener on unmount
        return unsubscribe;
      }, []);
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: true}}/>
            <Stack.Screen name="Survey" component={SurveyContainer} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      );

}
export default Main
const styles = StyleSheet.create({})



