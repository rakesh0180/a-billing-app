const userLoginStatusInitialState = false;
const userLoginStatusReducer = (
  state = userLoginStatusInitialState,
  action
) => {
  switch (action.type) {
    case "LOGIN_USER": {
      return !userLoginStatusInitialState;
    }
    case "LOGOUT_USER": {
      return userLoginStatusInitialState;
    }
    default: {
      return state;
    }
  }
};
export default userLoginStatusReducer;
