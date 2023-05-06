import { store } from "./src/app/store";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from 'react-native-paper';

import Main from './Main'
import AdminEdit from "./src/screens/adminStack/AdminEdit";
import Home from "./src/screens/Home";

const App = () => {
  return (
    <Provider store={store}>
      {/* <PaperProvider> */}

      {/* <AdminEdit /> */}
      <Main />
      {/* </PaperProvider> */}
    </Provider>
  )
}
export default App