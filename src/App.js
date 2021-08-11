import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserLoginStatus } from "./action/userLoginStatusAction";
import "./App.css";
import Navbar from "./component/user/Navbar";

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
      <Navbar />
      {/* <UserDetails /> */}
    </div>
  );
}

export default App;
