import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { firebase } from "./src/app/firebase";
import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsLoading, selectUser, setUser } from './src/features/userSlice';
import Admin from './src/screens/Admin';
import ThankYou from './src/screens/ThankYou';
import Loading from './src/screens/Loading';
import Survey from './src/screens/Survey';

const Stack = createNativeStackNavigator();

const MemoizedLoading = memo(Loading);

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(setUser({ uid, email }));
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);


  return isLoading ? <MemoizedLoading /> : (
    <NavigationContainer>
      <Stack.Navigator>
        {user.uid ? (
          <Stack.Screen name="Admin" component={Admin} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
            <Stack.Screen name="Survey" component={Survey} options={{ headerShown: false }} />
            <Stack.Screen name="ThankYou" component={ThankYou} options={{ headerShown: false }} />
          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default Main;
