import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { startGetAllBills } from "./action/billAction";
import { startGetAllCustomers } from "./action/customerAction";
import { startGetAllProducts } from "./action/ProductAction";
import { startGetUserAccountDetails } from "./action/userAccountDetailsAction";
import App from "./App";
import configStore from "./store/configStore";

const store = configStore();
if (localStorage.getItem("token")) {
  store.dispatch(startGetUserAccountDetails());
  store.dispatch(startGetAllCustomers());
  store.dispatch(startGetAllProducts());
  store.dispatch(startGetAllBills());
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
