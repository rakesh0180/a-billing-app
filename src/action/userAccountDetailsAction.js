import axios from "../AxiosConfig/axiosConfig";

export const startGetUserAccountDetails = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/users/account");
      const result = response.data;
      console.log("userAccountDetails", result);
      dispatch(addUserInfo(result));
    } catch (error) {
      console.log("userAccountDetails", error.message);
    }
  };
};

export const addUserInfo = (data) => {
  return {
    type: "ADD_USER_INFO",
    payload: data,
  };
};
