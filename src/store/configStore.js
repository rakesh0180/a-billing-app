import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import customersReducer from "../reducer/customersReducer";
import userAccountInfoReducer from "../reducer/userAccountInfoReducer";
import userLoginStatusReducer from "../reducer/userLoginStatusReducer";
const configStore = () => {
  const store = createStore(
    combineReducers({
      userLoginStatus: userLoginStatusReducer,
      userAccountInfo: userAccountInfoReducer,
      customers: customersReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configStore;
