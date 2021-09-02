import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { startGetAllCustomers } from "./action/customerAction";
import { startGetUserAccountDetails } from "./action/userAccountDetailsAction";
import App from "./App";
import configStore from "./store/configStore";

const store = configStore();
if (localStorage.getItem("token")) {
  store.dispatch(startGetUserAccountDetails());
  store.dispatch(startGetAllCustomers());
}

console.log("initial store", store.getState());

store.subscribe(() => {
  console.log("store", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
