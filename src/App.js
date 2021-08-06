import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./component/user/Navbar";
import { setUserLoginStatus } from "./action/userLoginStatusAction";

function App() {
  const dispatch = useDispatch();

  //if user
  useEffect(() => {
    if (localStorage.getItem("loginStatus")) {
      dispatch(setUserLoginStatus());
    }
  });

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar />
    </div>
  );
}

export default App;
