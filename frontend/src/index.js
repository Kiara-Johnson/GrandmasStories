import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from "./App";
import reducers from "./reducers";
import thunk from 'redux-thunk'

import './index.css';
import { applyMiddleware, compose, createStore } from "redux";
const store = createStore(reducers, compose(applyMiddleware(thunk)))
//ReactDOM.render(<App />, document.getElementById("root"));
const root = createRoot( document.getElementById('root') );

root.render(
<Provider store={store}>
    <App />
  </Provider>);