import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import billsReducer from "../reducer/billsReducer";
import customersReducer from "../reducer/customersReducer";
import productsReducer from "../reducer/ProductsReducer";
import userAccountInfoReducer from "../reducer/userAccountInfoReducer";
import userLoginStatusReducer from "../reducer/userLoginStatusReducer";
const configStore = () => {
  const store = createStore(
    combineReducers({
      userLoginStatus: userLoginStatusReducer,
      userAccountInfo: userAccountInfoReducer,
      customers: customersReducer,
      products: productsReducer,
      bills: billsReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configStore;
