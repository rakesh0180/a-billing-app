import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./component/user/Navbar";
import { setUserLoginStatus } from "./action/userLoginStatusAction";

function App() {
  const dispatch = useDispatch();

  //when ever web restart get Jwt or login token
  useEffect(() => {
    if (localStorage.getItem("loginToken")) {
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
