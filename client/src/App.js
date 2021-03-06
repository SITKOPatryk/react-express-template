import React from "react";
import { browserHistory } from "./store/configuration";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import Menu from "./components/menu";
import Paths from "./paths";
import store from "./store";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Router history={browserHistory}>
        <Paths />
      </Router>
    </Provider>
  );
}

export default App;
