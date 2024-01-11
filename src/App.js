import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import store from "./app/store";
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from "./app/store"
function App() {
  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
