import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { compose } from "@reduxjs/toolkit";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import headerItem from "./redux-toolkit/headerItem";
import userSliceLogin from "./redux-toolkit/LoginPage/userSliceLogin";
import userSliceSignup from "./redux-toolkit/SignupPage/userSliceSignup";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store_toolkit = configureStore({
  reducer: {
    headerItem,
    userSliceLogin: userSliceLogin,
    userSliceSignup: userSliceSignup,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store_toolkit}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
