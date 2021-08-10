const userAccountInfoInitialState = {};
const userAccountInfoReducer = (
  state = userAccountInfoInitialState,
  action
) => {
  switch (action.type) {
    case "ADD_USER_INFO":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};
export default userAccountInfoReducer;
