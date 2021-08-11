import axios from "../AxiosConfig/axiosConfig";

export const startUserAccountGetDetails = () => {
  return (dispatch) => {
    axios
      .get("/users/account")
      .then((response) => {
        const result = response.data;
        console.log("userAccountDetails", result);
        dispatch(addUserInfo(result));
      })
      .catch((error) => {
        console.log("userAccountDetails", error.message);
      });
  };
};

export const addUserInfo = (data) => {
  return {
    type: "ADD_USER_INFO",
    payload: data,
  };
};
