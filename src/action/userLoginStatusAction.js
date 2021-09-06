import swal from "sweetalert";
import { startGetAllBills } from "../action/billAction";
import { startGetAllCustomers } from "../action/customerAction";
import { startGetAllProducts } from "../action/ProductAction";
import { startGetUserAccountDetails } from "../action/userAccountDetailsAction";
import axios from "../AxiosConfig/axiosConfig";

//Register
export const startSignupUser = (signupData, handleRedirect, onSubmitProps) => {
  axios
    .post("/users/register", signupData)
    .then((response) => {
      const result = response.data;
      // console.log("result", result);
      // console.log(result.errmsg);
      if (result.hasOwnProperty("errmsg")) {
        //server error
        const error = "email or userName already exists";
        swal("Error", error, "error");
      } else {
        swal("Successfully", "account created", "success");
        onSubmitProps.resetForm();
        handleRedirect();
      }
    })
    .catch((error) => {
      swal("Error", "some error in data", error.message);
    });
};

//Login

export const startLoginUser = (
  loginFormData,
  handleServerErrors,
  handleRedirect,
  onSubmitProps
) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/users/login", loginFormData);
      const result = response.data;
      // console.log(result);
      if (result.hasOwnProperty("errors")) {
        // console.log(result);
        handleServerErrors(result);
      } else {
        swal("Successfully", "Logged In", "success");
        localStorage.setItem("loginToken", result.token);
        //change status of user
        dispatch(setUserLoginStatus());
        dispatch(startGetUserAccountDetails());
        dispatch(startGetAllCustomers());
        dispatch(startGetAllProducts());
        dispatch(startGetAllBills());
        handleRedirect();
        onSubmitProps.resetForm();
        window.location.reload();
      }
    } catch (error) {
      swal("Error", "error in data", error.message);
    }
  };
};

//set userLoginStatus Action creator
export const setUserLoginStatus = () => {
  return {
    type: "LOGIN_USER",
  };
};

export const resetUserLoginStatus = () => {
  return {
    type: "LOGOUT_USER",
  };
};
