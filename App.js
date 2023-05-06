import { store } from "./src/app/store";
import { Provider } from "react-redux";
import Main from './Main'
import { StatusBar } from "react-native";

const App = () => {
  return (
    <Provider store={store}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />

      <Main />
    </Provider>
  )
}
export default App