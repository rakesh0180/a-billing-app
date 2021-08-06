import axios from "../AxiosConfig/axiosConfig";
import swal from "sweetalert";

export const startUserAccountGetDetails = () => {
  return (dispatch) => {
    axios
      .get("/users/account")
      .then((response) => {
        const result = response.data;
        console.log("userAccountDetails", result);
      })
      .catch((error) => {
        console.log("userAccountDetails", error.message);
      });
  };
};
