import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsLoading, selectUser, setUser } from './src/features/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './src/app/firebase';
import Loading from './src/screens/Loading';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Admin from './src/screens/Admin';
import Survey from './src/screens/Survey';
import ThankYou from './src/screens/ThankYou';

const Stack = createNativeStackNavigator();

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(setUser({ uid, email }));
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);

  return isLoading ? <Loading /> : (
    <NavigationContainer>
      <Stack.Navigator>
        {user.uid ? (
          <Stack.Screen name="Admin" component={Admin} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Survey" component={Survey} options={{ headerShown: false }} />
            <Stack.Screen name="ThankYou" component={ThankYou} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Main;