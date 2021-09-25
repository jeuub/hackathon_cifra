import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import { createAPI } from "./services/api";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
