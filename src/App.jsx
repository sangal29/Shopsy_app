import Footer from "./components/Footer"
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import { Provider } from "react-redux"
import productsStore from "./utils/store/productsStore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={productsStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  )
}

export default App
