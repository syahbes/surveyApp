import { store } from "./src/app/store";
import { Provider } from "react-redux";
import Main from './Main'
import Admin from "./src/screens/Admin";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
      {/* <Admin/> */}
    </Provider>
  )
}
export default App