import { Provider } from "react-redux"
import AppRouter from "./router/AppRouter"
import { ToastContainer } from "react-toastify"
import store from "./app/store"
function App() {
  return (
    <>
    <Provider store={store}>
  <AppRouter/>
    </Provider>
    <ToastContainer/>
    </>
  )
}

export default App
