import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userAccountInfoReducer from "../reducer/userAccountInfoReducer";
import userLoginStatusReducer from "../reducer/userLoginStatusReducer";
const configStore = () => {
  const store = createStore(
    combineReducers({
      // user:userReducer,
      userLoginStatus: userLoginStatusReducer,
      userAccountInfo: userAccountInfoReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configStore;
