import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import allSagas from "./middleware";
import { reducer as formReducer } from "redux-form";
import { BrowserRouter as Router } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  combineReducers({ ...allReducers, form: formReducer }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(allSagas);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
