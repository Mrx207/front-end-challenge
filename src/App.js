import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
import { fetchData } from "./redux/actions";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <HomePage />
    </Provider>
  );
}

export default App;
