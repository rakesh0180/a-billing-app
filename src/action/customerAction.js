/* import swal from "sweetalert";
import axios from "../AxiosConfig/axiosConfig";

export const startAddCustomer = (customerData, onSubmitProps) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/customers`, customerData);
      const result = response.data;
      console.log("customers", result);
      // console.log(typeof result);
      if (result.hasOwnProperty("error")) {
        swal("Error", result.error, "error");
      } else {
        swal("Successfully", "Added customer", "success");
        dispatch(addCustomer(result));
        onSubmitProps.resetForm();
      }
    } catch (error) {
      swal("Error", "error in data", "error");
    }
  };
};

export const startUpdateCustomer = (id, customerUpdateData, onSubmitProps) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/customers/${id}`, customerUpdateData);
      const result = response.data;
      console.log("customerUpdate", result);
      if (result.hasOwnProperty("error")) {
        swal("Error", result.error, "error");
      } else {
        swal("Successfully", "updated customer data", "success");
        dispatch(updateCustomer(result));
        // window.location.reload();
        onSubmitProps.resetForm();
      }
    } catch (error) {
      swal("Error", "error in data", "error");
    }
  };
};

export const startRemoveCustomer = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/customers/${id}`);
      const result = response.data;
      console.log(result);
      if (result.hasOwnProperty("error")) {
        swal("Error", result.error, "error");
      } else {
        dispatch(removeCustomer(result._id));
        swal("Successfully", "removed customer", "success");
      }
    } catch (error) {
      swal("Error", "error in data", "error");
    }
  };
};

export const startGetAllCustomers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/customers`);
      const result = response.data;
      console.log(result);
      if (result.hasOwnProperty("error")) {
        swal("Error", result.error, "error");
      } else {
        dispatch(getCustomers(result));
      }
    } catch (error) {
      swal("Error", "error in data", "error");
    }
  };
};

export const addCustomer = (customer) => {
  return {
    type: "ADD_CUSTOMER",
    payload: customer,
  };
};

export const updateCustomer = (updateData) => {
  return {
    type: "UPDATE_CUSTOMER",
    payload: updateData,
  };
};

export const removeCustomer = (id) => {
  return {
    type: "REMOVE_CUSTOMER",
    payload: id,
  };
};

export const getCustomers = (customersData) => {
  return {
    type: "GET_ALL_CUSTOMERS",
    payload: customersData,
  };
};
 */

import swal from "sweetalert";
import axios from "../AxiosConfig/axiosConfig";

export const startGetAllCustomers = () => {
  return (dispatch) => {
    axios
      .get("/customers")
      .then((res) => {
        const result = res.data;
        if (result.hasOwnProperty("message")) {
          swal("Error", result.message, "error");
        } else {
          dispatch(getAllCustomers(result));
          // props.history.push('/')
        }
      })
      .catch((err) => {
        swal("Error", "some error in data", "error");
      });
  };
};

export const getAllCustomers = (customers) => {
  return {
    type: "GET_ALL_CUSTOMERS",
    payload: customers,
  };
};

export const startAddCustomer = (customerData, onSubmitProps) => {
  return (dispatch) => {
    axios
      .post("/customers", customerData)
      .then((res) => {
        const result = res.data;
        if (result.hasOwnProperty("message")) {
          swal("Error", result.message, "error");
        } else {
          dispatch({ type: "ADD_CUSTOMER", payload: result });
          onSubmitProps.resetForm();
        }
      })
      .catch((err) => {
        swal("Error", "some error in data", "error");
      });
  };
};

export const startUpdateCustomer = (id, customerData, onSubmitProps) => {
  return (dispatch) => {
    axios
      .put(`/customers/${id}`, customerData)
      .then((res) => {
        const result = res.data;
        if (result.hasOwnProperty("message")) {
          swal("Error", result.message, "error");
        } else {
          dispatch(updateCustomer(result));
          onSubmitProps.resetForm();
        }
      })
      .catch((err) => {
        swal("Error", "some error in data", "error");
      });
  };
};

export const startRemoveCustomer = (id) => {
  return (dispatch) => {
    axios
      .delete(`/customers/${id}`)
      .then((res) => {
        console.log(id);
        const result = res.data;
        console.log();
        if (result.hasOwnProperty("message")) {
          swal("Error", result.message, "error");
        } else {
          dispatch({ type: "REMOVE_CUSTOMER", payload: result });
        }
      })
      .catch((err) => {
        swal("Error", "some error in data", "error");
      });
  };
};

export const updateCustomer = (updateData) => {
  return {
    type: "UPDATE_CUSTOMER",
    payload: updateData,
  };
};
