import swal from "sweetalert";
import axios from "../AxiosConfig/axiosConfig";

export const startAddProduct = (productData, onSubmitProps) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/products", productData);
      const result = response.data;
      // console.log("Product", result);
      if (result.hasOwnProperty("error")) {
        swal("Error", result.error, "error");
      } else {
        swal("Successfully", "Added product", "success");
        dispatch(addProduct(result));
        onSubmitProps.resetForm();
      }
    } catch (error) {
      swal("Error", "error in data", "error");
    }
  };
};

export const startUpdateProduct = (id, productUpdateData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/products/${id}`, productUpdateData);
      const result = response.data;
      // console.log("productUpdate", result);
      if (result.hasOwnProperty("error")) {
        swal("Error", result.error, "error");
      } else {
        swal("Successfully", "updated product data", "success");
        dispatch(updateProduct(result));
      }
    } catch (error) {
      swal("Error", "error in data", "error");
    }
  };
};

export const startRemoveProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/products/${id}`);
      const result = response.data;
      // console.log(result);
      if (result.hasOwnProperty("error")) {
        swal("Error", result.error, "error");
      } else {
        dispatch(removeProduct(result._id));
      }
    } catch (error) {
      swal("Error", "error in data", "error");
    }
  };
};

export const startGetAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/products");
      const result = response.data;
      // console.log("ProductList", result);
      if (result.hasOwnProperty("error")) {
        swal("Error", result.error, "error");
      } else {
        dispatch(getAllProducts(result));
        // props.history.push('/')
      }
    } catch (error) {
      swal("Error", "error in data", "error");
    }
  };
};

export const addProduct = (productData) => {
  return {
    type: "ADD_PRODUCT",
    payload: productData,
  };
};

export const updateProduct = (updateData) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: updateData,
  };
};

export const removeProduct = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
};

export const getAllProducts = (products) => {
  return {
    type: "GET_ALL_PRODUCTS",
    payload: products,
  };
};
