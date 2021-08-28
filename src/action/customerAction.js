import swal from "sweetalert";
import axios from "../AxiosConfig/axiosConfig";

export const startAddCustomer = (customerData, onSubmitProps) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/customers`, customerData);
      const result = response.data;
      console.log("customers", result);
      console.log(typeof result);
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

export const startRemoveCustomer = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/customers/${id}`);
      const result = response.data;
      console.log(result);
      if (result.hasOwnProperty("error")) {
        swal("Error", result.error, "error");
      } else {
        dispatch(removeCustomer(result));
        swal("Successfully", "removed customer", "success");
      }
    } catch (error) {
      swal("Error", "error in data", "error");
    }
  };
};

// export const startAddCustomer = (customerData, onSubmitProps) => {
//   return (dispatch) => {
//     axios
//       .post(`/customers`, customerData)
//       .then((response) => {
//         const result = response.data;
//         console.log("customers", result);
//         console.log(typeof result);
//         if (result.hasOwnProperty("error")) {
//           swal("Error", result.error, "error");
//         } else {
//           swal("Successfully", "Added customer", "success");
//           dispatch(addCustomer(result));
//           onSubmitProps.resetForm();
//         }
//       })
//       .catch((error) => {
//         swal("Error", "error in data", "error");
//       });
//   };
// };

export const addCustomer = (customer) => {
  return {
    type: "ADD_CUSTOMER",
    payload: customer,
  };
};

export const removeCustomer = (id) => {
  return {
    type: "REMOVE_CUSTOMER",
    payload: id,
  };
};

// export const editCustomer = (customer.id)=> {
//   return {
//     type: "EDIT_CUSTOMER",
//     payload:customer
//   }
// }
