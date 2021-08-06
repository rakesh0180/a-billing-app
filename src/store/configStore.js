import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userLoginStatusReducer from "../reducer/userLoginStatusReducer";
const configStore = () => {
  const store = createStore(
    combineReducers({
      // user:userReducer,
      userLoginStatus: userLoginStatusReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configStore;
