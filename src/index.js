import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { startGetAllBills } from "./action/billAction";
import { startGetAllCustomers } from "./action/customerAction";
import { startGetAllProducts } from "./action/ProductAction";
import { startGetUserAccountDetails } from "./action/userAccountDetailsAction";
import App from "./App";
import "./App.css";
import configStore from "./store/configStore";

const store = configStore();
if (localStorage.getItem("loginToken")) {
  store.dispatch(startGetUserAccountDetails());
  store.dispatch(startGetAllCustomers());
  store.dispatch(startGetAllProducts());
  store.dispatch(startGetAllBills());
}

// console.log("initial store", store.getState());

store.subscribe(() => {
  console.log("store", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="d-flex h-100  align-items-center justify-content-center ">
            <div className="spinner-border " role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      >
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
