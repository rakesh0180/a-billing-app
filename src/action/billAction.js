import swal from "sweetalert";
import axios from "../AxiosConfig/axiosConfig";

export const startCreateBill = (billData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/bills", billData);
      const result = response.data;
      // console.log(result);
      if (result.hasOwnProperty("errors")) {
        swal(result.message);
      } else {
        swal("Successfully", "Bill generated", "success");
        dispatch(createBill(result));
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

export const startGetAllBills = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/bills");
      const result = response.data;
      dispatch(getAllBills(result));
    } catch (error) {
      alert(error.message);
    }
  };
};

export const startDeleteBill = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/bills/${id}`);
      const result = response.data;
      if (result.hasOwnProperty("errors")) {
        swal(result.message);
      } else {
        swal("Successfully", "Bill Removed", "success");
        dispatch(deleteBill(result._id));
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

const createBill = (bill) => {
  return {
    type: "CREATE_BILL",
    payload: bill,
  };
};

export const getAllBills = (bills) => {
  return {
    type: "ALL_BILLS",
    payload: bills,
  };
};

const deleteBill = (id) => {
  return {
    type: "DELETE_BILL",
    payload: id,
  };
};
